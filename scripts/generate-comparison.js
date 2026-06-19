const fs = require('fs');
const path = require('path');

// 1. Get keyword from arguments
const keyword = process.argv[2];
if (!keyword) {
  console.error("Erreur : Veuillez fournir un mot-clé (ex: node scripts/generate-comparison.js \"friteuse sans huile\")");
  process.exit(1);
}

console.log(`Début de la génération pour le mot-clé : "${keyword}"...`);

// 2. Load GEMINI_API_KEY from environment or .env files
let apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  const envPaths = [
    path.join(__dirname, '..', '.env.local'),
    path.join(__dirname, '..', '.env')
  ];
  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const match = content.match(/GEMINI_API_KEY\s*=\s*(.*)/);
      if (match && match[1]) {
        apiKey = match[1].trim().replace(/['"]/g, '');
        break;
      }
    }
  }
}

if (!apiKey) {
  console.error("Erreur : Clé GEMINI_API_KEY introuvable. Veuillez définir la variable d'environnement GEMINI_API_KEY ou créer un fichier .env.local avec cette clé.");
  process.exit(1);
}

// 3. Define prompt to get structured JSON from Gemini
const prompt = `
Tu es un expert en SEO et affiliation Amazon. Génère les données pour un article de comparaison complet en français pour le mot-clé : "${keyword}".
L'article doit présenter exactement 6 produits RÉELS existant sur Amazon France.

Génère les données strictement sous le format JSON suivant (sans aucun texte autour, sans markdown \`\`\`json, uniquement le JSON brut) :
{
  "post": {
    "slug": "slug-du-mot-cle-en-minuscules-avec-tirets",
    "title": "Les 6 meilleurs [mot-clé] en 2026",
    "heroImage": "/images/placeholder.svg",
    "category": "slug-du-mot-cle-en-minuscules-avec-tirets",
    "metaDescription": "Description SEO de l'article de moins de 150 caractères.",
    "intro": "Une introduction accrocheuse d'environ 3-4 phrases expliquant l'intérêt de ce comparatif.",
    "guideTitle": "Guide d'achat : comment bien choisir un [mot-clé] ?",
    "faq": [
      { "q": "Question fréquente 1 ?", "a": "Réponse à la question 1." },
      { "q": "Question fréquente 2 ?", "a": "Réponse à la question 2." },
      { "q": "Question fréquente 3 ?", "a": "Réponse à la question 3." },
      { "q": "Question fréquente 4 ?", "a": "Réponse à la question 4." }
    ]
  },
  "products": [
    {
      "id": "identifiant-unique-du-produit-1",
      "name": "Nom complet et exact du produit 1 (Marque + Modèle)",
      "image": "/images/placeholder.svg",
      "rating": 9.4,
      "price": 499,
      "category": "slug-du-mot-cle-en-minuscules-avec-tirets",
      "isBestChoice": true,
      "isBestValue": false,
      "isPremium": false,
      "summary": "Résumé des performances du produit.",
      "pros": ["Avantage 1", "Avantage 2", "Avantage 3"],
      "cons": ["Inconvénient 1", "Inconvénient 2", "Inconvénient 3"],
      "specs": ["Spécification 1", "Spécification 2", "Spécification 3", "Spécification 4"],
      "recommendedFor": "Pour qui ce produit est recommandé."
    },
    ... (génère exactement 6 produits) ...
  ]
}

Règles de sélection des produits :
- Produit 1 : Meilleur Choix (isBestChoice: true)
- Produit 2 : Meilleur Rapport Qualité/Prix (isBestValue: true)
- Produit 6 : Choix Premium (isPremium: true)
- Les autres produits (3, 4, 5) ont isBestChoice, isBestValue et isPremium à false.
- Les notes (rating) doivent être réalistes (ex: entre 8.0 et 9.6).
- Les prix (price) doivent correspondre au marché actuel en Euros.
`;

// 4. Query Gemini API
async function generate() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json"
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`API Gemini renvoie une erreur : ${response.status} - ${errText}`);
  }

  const resJson = await response.json();
  const textResult = resJson.candidates[0].content.parts[0].text;
  const parsedData = JSON.parse(textResult);

  // 5. Append to components/data/products.ts
  const dataFilePath = path.join(__dirname, '..', 'components', 'data', 'products.ts');
  if (!fs.existsSync(dataFilePath)) {
    throw new Error(`Fichier introuvable : ${dataFilePath}`);
  }

  let fileContent = fs.readFileSync(dataFilePath, 'utf8');

  // Format products and inject helper function search queries instead of static URLs
  const formattedProducts = parsedData.products.map(p => ({
    ...p,
    amazonUrl: `__AMZ_SEARCH_URL__('${p.name}')`
  }));

  // Format to string
  let productsStr = JSON.stringify(formattedProducts, null, 2);
  // Remove outer array brackets [ and ]
  productsStr = productsStr.slice(1, -1).trim();
  // Replace dummy function string with actual function call syntax
  productsStr = productsStr.replace(/"amazonUrl":\s*"__AMZ_SEARCH_URL__\((.*?)\)"/g, '"amazonUrl": amazonSearchUrl($1)');

  // Prepend or Append to products array
  const productsIndex = fileContent.indexOf("export const products: Product[] = [");
  if (productsIndex === -1) throw new Error("Index 'export const products' introuvable dans products.ts");
  const productsEndIndex = fileContent.indexOf("];", productsIndex);
  
  // Insert new products at the end of the products array
  fileContent = fileContent.slice(0, productsEndIndex) + ",\n  " + productsStr + "\n" + fileContent.slice(productsEndIndex);

  // Format post to string
  let postStr = JSON.stringify(parsedData.post, null, 2);

  // Append to posts array
  const postsIndex = fileContent.indexOf("export const posts: Post[] = [");
  if (postsIndex === -1) throw new Error("Index 'export const posts' introuvable dans products.ts");
  const postsEndIndex = fileContent.indexOf("];", postsIndex);

  fileContent = fileContent.slice(0, postsEndIndex) + ",\n  " + postStr + "\n" + fileContent.slice(postsEndIndex);

  // Write back to file
  fs.writeFileSync(dataFilePath, fileContent, 'utf8');

  console.log(`✨ Génération réussie !`);
  console.log(`- Comparatif ajouté : "${parsedData.post.title}"`);
  console.log(`- URL du comparatif : /${parsedData.post.slug}`);
  console.log(`- Les 6 produits ont été injectés avec le tag d'affiliation "sababou2026-21"`);
}

generate().catch(err => {
  console.error("Erreur de génération :", err);
  process.exit(1);
});
