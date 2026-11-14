# Documentation de sauvegarde du projet Amazon Comparateur

## 1. Identite du projet

Nom du projet : Amazon Comparateur

Type de projet : site d'affiliation Amazon base sur des comparatifs produits.

Objectif : generer et publier des articles SEO comparant les 6 meilleurs produits d'une categorie donnee. Chaque article doit aider l'internaute a choisir rapidement un produit, puis l'orienter vers Amazon via un lien affilie.

Promesse editoriale : pour chaque categorie, le site presente un top 6 clair avec tableau comparatif, fiches detaillees, avantages, inconvenients, caracteristiques principales, guide d'achat, FAQ et appels a l'action vers Amazon.

## 2. Concept fonctionnel

Le site fonctionne autour d'un mot-cle principal.

Exemples :

- `machines a cafe grain`
- `aspirateurs robots`
- `robots de cuisine`
- `purificateurs d air`

Pour chaque mot-cle, le workflow cible est :

1. Rechercher sur Internet les produits pertinents.
2. Identifier les 6 meilleurs produits de la categorie.
3. Recuperer les donnees utiles pour chaque produit.
4. Generer un article comparatif SEO.
5. Ajouter les donnees dans le projet.
6. Publier automatiquement une page accessible par slug.

Le projet actuel contient deja la structure de publication. La generation automatique complete depuis un mot-cle reste une fonctionnalite a implementer ou a executer par une IA/developpeur en modifiant les donnees structurees.

## 3. Technologies utilisees

- Next.js 14.2.35
- React 18.3.1
- TypeScript 5.5.4
- Tailwind CSS 3.4.1
- PostCSS
- Autoprefixer
- App Router Next.js

Le projet est une application frontend statique/dynamique Next.js. Les contenus sont stockes dans un fichier TypeScript et rendus par des composants React.

## 4. Architecture generale

```text
amazon-comparateur/
  app/
    page.tsx
    layout.tsx
    globals.css
    [slug]/
      page.tsx
    sitemap.ts
    robots.ts
    rss.xml/
      route.ts
    mentions-legales/
      page.tsx
    confidentialite/
      page.tsx
    cookies/
      page.tsx

  components/
    data/
      products.ts
    ui/
      CategoriesSection.tsx
      ComparisonTable.tsx
      Conclusion.tsx
      FAQSection.tsx
      Footer.tsx
      GuideSection.tsx
      HeroSection.tsx
      LatestComparisons.tsx
      LegalPage.tsx
      Logo.tsx
      Navbar.tsx
      ProductCard.tsx
      ProductDetail.tsx
      RatingBar.tsx
      SearchBar.tsx
      index.ts

  public/
    images/
      placeholder.jpg
      placeholder.svg

  styles/
    globals.css

  package.json
  next.config.js
  tailwind.config.ts
  tsconfig.json
```

## 5. Role des dossiers et fichiers

### `app/`

Contient les routes Next.js.

- `app/page.tsx` : page d'accueil.
- `app/layout.tsx` : layout global, metadata globales, navbar et footer.
- `app/[slug]/page.tsx` : route dynamique qui genere les articles comparatifs.
- `app/sitemap.ts` : sitemap automatique base sur la liste `posts`.
- `app/robots.ts` : configuration robots.
- `app/rss.xml/route.ts` : flux RSS automatique base sur la liste `posts`.
- `app/mentions-legales/page.tsx` : page mentions legales.
- `app/confidentialite/page.tsx` : page confidentialite.
- `app/cookies/page.tsx` : page cookies.

### `components/data/products.ts`

Fichier central du projet. Il contient :

- le type `Product`;
- le type `Post`;
- les donnees produits;
- les donnees articles;
- les fonctions `getPostBySlug` et `getProductsByCategory`.

Toute nouvelle page comparative est creee en ajoutant des donnees dans ce fichier.

### `components/ui/`

Contient les composants de rendu :

- composants de navigation;
- composants de page d'accueil;
- tableau comparatif;
- fiches produit;
- FAQ;
- guide d'achat;
- conclusion;
- pages legales.

## 6. Modele de donnees

### Produit

Un produit est defini par :

```ts
type Product = {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  amazonUrl: string;
  category: string;
  isBestChoice?: boolean;
  isBestValue?: boolean;
  isPremium?: boolean;
  pros: string[];
  cons: string[];
  specs: string[];
  recommendedFor: string;
  summary: string;
};
```

Signification :

- `id` : identifiant technique unique.
- `name` : nom commercial du produit.
- `image` : image locale ou URL distante.
- `rating` : score interne de comparaison.
- `price` : prix indicatif.
- `amazonUrl` : lien Amazon affilie.
- `category` : categorie de rattachement.
- `isBestChoice` : badge "Meilleur Choix".
- `isBestValue` : badge "Meilleur Rapport Q/P".
- `isPremium` : badge "Premium".
- `pros` : avantages.
- `cons` : inconvenients.
- `specs` : caracteristiques principales.
- `recommendedFor` : profil d'acheteur recommande.
- `summary` : resume editorial court.

### Article

Un article est defini par :

```ts
type Post = {
  slug: string;
  title: string;
  heroImage: string;
  intro: string;
  guideTitle: string;
  category: string;
  metaDescription: string;
  faq: { q: string; a: string }[];
};
```

Signification :

- `slug` : URL de la page.
- `title` : titre SEO de l'article.
- `heroImage` : image principale.
- `intro` : introduction de l'article.
- `guideTitle` : titre de la section guide.
- `category` : cle qui relie l'article aux produits.
- `metaDescription` : meta description SEO.
- `faq` : questions/reponses pour le contenu et le schema FAQ.

## 7. Fonctionnement des pages

### Accueil

La page d'accueil affiche :

- une section hero;
- les categories;
- les derniers comparatifs.

Elle sert de porte d'entree vers les articles.

### Article comparatif

La route `app/[slug]/page.tsx` recoit un `slug`.

Elle cherche l'article correspondant avec :

```ts
getPostBySlug(params.slug)
```

Si aucun article n'existe, elle renvoie une page 404 via `notFound()`.

Si l'article existe, elle recupere les produits avec :

```ts
getProductsByCategory(post.category)
```

Puis elle affiche :

1. En-tete avec titre et introduction.
2. Encadre d'information affiliation Amazon.
3. Tableau comparatif.
4. Fiches detaillees des produits.
5. Guide d'achat.
6. FAQ.
7. Conclusion.
8. Suggestions de recherches associees.

La page injecte aussi :

- un schema JSON-LD `FAQPage`;
- un schema JSON-LD `Product`.

## 8. Regles metier

1. Le site est un site d'affiliation Amazon.
2. Chaque page compare exactement 6 produits.
3. Chaque page correspond a une categorie et a un mot-cle principal.
4. Les articles sont generes automatiquement a partir du mot-cle principal ou d'un groupe de mots-cles associes.
5. Les donnees produit doivent etre verifiees avant publication.
6. Les notes sont des scores internes, pas des notes Amazon copiees.
7. Les avantages et inconvenients doivent etre reformules.
8. Les caracteristiques doivent etre factuelles et verifiables.
9. Les prix doivent etre traites comme indicatifs.
10. Les liens Amazon doivent etre des liens affilies.
11. Les liens sortants Amazon doivent utiliser `sponsored nofollow`.
12. Les textes ne doivent pas copier les descriptions Amazon ou les avis clients.
13. Les pages legales doivent rester presentes.
14. Le tag partenaire Amazon doit etre remplace par le vrai identifiant avant production.

## 9. Processus de generation automatique cible

Lorsqu'un mot-cle est fourni, l'application doit idealement executer les etapes suivantes.

### Etape 1 : recherche Internet

Rechercher :

- le mot-cle principal;
- les variantes longue traine;
- les meilleurs produits de la categorie;
- les produits vendus sur Amazon;
- les tests et comparatifs independants;
- les fiches constructeurs;
- les questions frequentes des utilisateurs.

### Etape 2 : selection des 6 produits

Selectionner les produits selon :

- pertinence pour l'intention de recherche;
- disponibilite;
- popularite;
- qualite percue;
- diversite de prix;
- presence de caracteristiques comparables;
- potentiel d'affiliation.

La selection doit contenir :

- un meilleur choix global;
- un meilleur rapport qualite/prix;
- eventuellement un choix premium;
- trois autres alternatives utiles.

### Etape 3 : collecte des donnees

Pour chaque produit, collecter :

- nom exact;
- image;
- marque;
- caracteristiques principales;
- avantages;
- inconvenients;
- cas d'usage recommande;
- prix indicatif si disponible;
- lien Amazon affilie;
- informations de disponibilite si possible.

### Etape 4 : generation SEO

Creer :

- un slug;
- un titre;
- une meta description;
- une introduction;
- un tableau comparatif;
- six fiches produits;
- un guide d'achat;
- une FAQ;
- une conclusion.

### Etape 5 : integration

Ajouter :

- un objet dans `posts`;
- six objets dans `products`;
- des images locales si necessaire;
- des liens Amazon affilies.

### Etape 6 : controle qualite

Verifier :

- que la page compile;
- que le slug fonctionne;
- que la page contient 6 produits;
- que les boutons Amazon fonctionnent;
- que les images s'affichent;
- que la FAQ est coherente;
- que la meta description est unique;
- que le sitemap et le RSS incluent l'article.

## 10. Regles SEO

Chaque article doit respecter ces principes :

- titre contenant la requete principale;
- slug court et lisible;
- meta description naturelle;
- introduction originale;
- contenu utile et non duplique;
- FAQ orientee questions utilisateurs;
- comparatif facile a scanner;
- liens internes;
- donnees structurees JSON-LD;
- intention d'achat claire.

Format recommande pour un titre :

```text
Les 6 meilleurs [categorie] en [annee]
```

Format recommande pour un slug :

```text
meilleurs-[categorie]
```

ou :

```text
[categorie]
```

## 11. Affiliation Amazon

Le fichier `components/data/products.ts` contient actuellement :

```ts
const amazonTag = 'VOTRE-ID-PARTENAIRE-21';
```

Avant production, remplacer cette valeur par l'identifiant Partenaires Amazon reel.

Les liens peuvent etre generes avec :

```ts
function amazonSearchUrl(query: string) {
  return `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;
}
```

Regles importantes :

- afficher une mention d'affiliation;
- ne pas promettre un prix fixe;
- inviter l'utilisateur a verifier prix et disponibilite sur Amazon;
- utiliser `rel="noopener noreferrer sponsored nofollow"`;
- ne pas copier les avis Amazon.

## 12. Donnees deja presentes

Le projet contient actuellement au moins deux comparatifs :

- `aspirateurs-robots`
- `machines-a-cafe-grain`

Le comparatif `aspirateurs-robots` contient des donnees d'exemple et des placeholders. Il doit etre enrichi et verifie avant publication reelle.

Le comparatif `machines-a-cafe-grain` contient des produits plus detailles, avec images distantes et liens de recherche Amazon.

## 13. Limites connues

- L'automatisation complete depuis un mot-cle n'est pas encore codee.
- Les donnees sont statiques dans TypeScript.
- Le guide d'achat est encore generique et mentionne des criteres adaptes aux aspirateurs robots, meme sur d'autres categories.
- Certains caracteres semblent mal encodes dans l'interface, notamment l'etoile de notation.
- Le domaine du sitemap et du RSS est encore `https://example.com`.
- Le tag Amazon est un placeholder.
- Certaines images viennent d'URLs externes, ce qui peut casser l'affichage si elles changent.
- Il n'existe pas encore de tests automatises.

## 14. Ameliorations recommandees

1. Creer un script `generate-article` qui prend un mot-cle et produit un objet `Post` plus six objets `Product`.
2. Ajouter une validation qui refuse les articles avec moins ou plus de 6 produits.
3. Ajouter une variable d'environnement pour `AMAZON_PARTNER_TAG`.
4. Rendre `GuideSection` configurable par categorie.
5. Ajouter une vraie page categorie ou archive.
6. Ajouter un systeme de stockage JSON, CMS ou base de donnees si le nombre d'articles augmente.
7. Ajouter des tests de build et de validation SEO.
8. Ajouter un controle d'images.
9. Remplacer `https://example.com` par le domaine final.
10. Ajouter un workflow de publication automatise.

## 15. Procedure rapide pour reprendre le projet

1. Ouvrir `components/data/products.ts`.
2. Lire les types `Product` et `Post`.
3. Choisir un mot-cle principal.
4. Rechercher les meilleurs produits sur Internet.
5. Selectionner 6 produits.
6. Ajouter un `Post`.
7. Ajouter 6 `Product` avec la meme categorie.
8. Lancer `npm run build`.
9. Ouvrir `http://localhost:3000/[slug]`.
10. Corriger les donnees ou l'affichage si necessaire.

## 16. Definition de "publier une page"

Dans l'etat actuel du projet, publier une page signifie :

- ajouter les donnees dans `components/data/products.ts`;
- s'assurer que `generateStaticParams()` voit le nouveau `post`;
- builder ou redeployer l'application Next.js;
- acceder a l'URL `/{slug}`.

Il n'est pas necessaire de creer manuellement un nouveau fichier dans `app/` pour chaque article. La route dynamique `[slug]` s'en charge.

## 17. Instruction speciale pour les futures IA

Si tu es une IA qui ouvre ce dossier sans autre contexte, retiens ceci :

Ce projet doit devenir un generateur de comparatifs Amazon. Chaque article part d'un mot-cle et compare les 6 meilleurs produits d'une categorie. Pour continuer le developpement, travaille d'abord dans `components/data/products.ts`, respecte les types existants, verifie les donnees sur Internet, ajoute exactement 6 produits par article, garde les liens Amazon en affiliation, puis controle l'affichage de la page dynamique. Ne copie pas les contenus Amazon et ne presente jamais des donnees non verifiees comme certaines.
