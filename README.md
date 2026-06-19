# Amazon Comparateur - README pour IA et developpeurs

Ce projet est un site d'affiliation Amazon base sur des comparatifs de produits. Il utilise Next.js App Router pour publier des pages SEO dynamiques, chacune centree sur une categorie de produits et un mot-cle principal.

L'objectif principal est simple : a partir d'un mot-cle, generer automatiquement un article de comparaison SEO qui presente les 6 meilleurs produits d'une categorie, avec tableau comparatif, fiches detaillees, avantages, inconvenients, caracteristiques, FAQ et liens d'affiliation Amazon.

## Fonctionnement attendu

Quand l'utilisateur fournit un mot-cle principal ou plusieurs mots-cles associes, l'application ou l'IA qui maintient le projet doit suivre ce processus :

1. Effectuer une recherche sur Internet autour du mot-cle.
2. Identifier les 6 produits les plus pertinents pour la categorie.
3. Recuperer les informations necessaires : nom, image, caracteristiques, avantages, inconvenients, note interne, prix indicatif si disponible, usage recommande et lien Amazon affilie.
4. Generer automatiquement un article de comparaison optimise SEO.
5. Creer la page de l'article sur le site en ajoutant les donnees dans `components/data/products.ts`.
6. Publier la page via le slug correspondant.

Important : le code actuel genere les pages a partir de donnees statiques TypeScript. L'automatisation complete de recherche, selection et generation n'est pas encore exposee sous forme d'interface admin ou de script dedie. Une IA qui reprend le projet doit donc, pour l'instant, ajouter ou mettre a jour les entrees dans `components/data/products.ts`.

## Stack technique

- Framework : Next.js 14 avec App Router.
- Langage : TypeScript.
- UI : React 18.
- Styles : Tailwind CSS.
- Donnees : tableaux statiques dans `components/data/products.ts`.
- SEO : metadata Next.js, sitemap, RSS, JSON-LD FAQ et Product.
- Affiliation : liens Amazon avec attributs `sponsored nofollow`.

## Installation et lancement

```bash
npm install
npm run dev
```

Ouvrir ensuite :

```text
http://localhost:3000
```

Build de production :

```bash
npm run build
npm run start
```

## Structure du projet

```text
app/
  page.tsx                 Page d'accueil
  layout.tsx               Layout global, navbar, footer, metadata globale
  [slug]/page.tsx          Page dynamique d'article comparatif
  sitemap.ts               Sitemap genere depuis les articles
  robots.ts                Regles robots
  rss.xml/route.ts         Flux RSS genere depuis les articles
  mentions-legales/        Page legale
  confidentialite/         Page confidentialite
  cookies/                 Page cookies

components/
  data/products.ts         Source centrale des articles et produits
  ui/                      Composants React de presentation

public/
  images/                  Images locales et placeholders

styles/
  globals.css              Styles globaux historiques
```

## Source de donnees

Le fichier le plus important est :

```text
components/data/products.ts
```

Il contient deux types principaux :

```ts
export type Product = {
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

export type Post = {
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

La relation entre un article et ses produits se fait par la categorie :

- `Post.category` doit correspondre a `Product.category`.
- `Post.slug` devient l'URL publique de l'article.
- Une page doit contenir exactement 6 produits pour respecter la promesse editoriale du site.

Exemple :

```text
Post.slug = "machines-a-cafe-grain"
Post.category = "machines-a-cafe-grain"
Product.category = "machines-a-cafe-grain"
URL publique = /machines-a-cafe-grain
```

## Creer un nouvel article comparatif

Pour ajouter un nouvel article, une IA ou un developpeur doit :

1. Choisir un slug propre, en minuscules, sans accents, separe par des tirets.
2. Ajouter une entree dans `posts`.
3. Ajouter exactement 6 entrees dans `products` avec la meme `category`.
4. Marquer au maximum un produit `isBestChoice`, un produit `isBestValue` et un produit `isPremium`.
5. Verifier que chaque produit possede une image valide.
6. Verifier que chaque lien Amazon contient le tag partenaire.
7. Lancer `npm run build` pour confirmer que la page compile.

Chaque fiche produit doit contenir :

- `id` unique.
- `name` exact du produit.
- `image` URL distante ou chemin local.
- `rating` score interne de comparaison.
- `price` prix indicatif interne, meme si l'interface affiche surtout "Voir le prix actualise".
- `amazonUrl` lien Amazon affilie.
- `category` identique a la categorie du post.
- `summary` court paragraphe de presentation.
- `pros` liste d'avantages.
- `cons` liste d'inconvenients.
- `specs` caracteristiques principales.
- `recommendedFor` profil d'acheteur recommande.

## Workflow editorial IA

Pour generer un article depuis un mot-cle, suivre ce protocole :

1. Recherche web : chercher le mot-cle principal, les variantes, les requetes "meilleur", "comparatif", "avis", "test", "Amazon" et les marques dominantes.
2. Selection : retenir 6 produits pertinents, disponibles, connus et comparables dans la meme intention d'achat.
3. Verification : croiser les informations avec des sources fiables : pages marques, fiches distributeurs, tests, documentation constructeur, Amazon si necessaire.
4. Redaction : produire un titre SEO, une meta description, une introduction utile, une FAQ et des fiches produits claires.
5. Normalisation : transformer les informations en objets `Post` et `Product`.
6. Publication : ajouter les donnees dans `components/data/products.ts`.
7. Controle : verifier l'affichage de `/slug`, le sitemap, le RSS et le build.

Ne pas copier les avis clients Amazon, les textes marketing Amazon ou des descriptions proprietaires. Reformuler les informations factuelles et citer uniquement ce qui a ete verifie.

## Pages et composants

### Page d'accueil

Fichier : `app/page.tsx`

Elle affiche :

- `HeroSection`
- `CategoriesSection`
- `LatestComparisons`

### Page article dynamique

Fichier : `app/[slug]/page.tsx`

Elle :

- genere les pages statiques depuis `posts` via `generateStaticParams`;
- genere les metadata SEO depuis `title` et `metaDescription`;
- recupere les produits avec `getProductsByCategory(post.category)`;
- affiche un avertissement affiliation Amazon;
- affiche le tableau comparatif;
- affiche les fiches detaillees des 6 produits;
- affiche un guide d'achat;
- affiche une FAQ;
- injecte des schemas JSON-LD `FAQPage` et `Product`.

### Composants principaux

- `ComparisonTable` : tableau comparatif des produits, notes et boutons Amazon.
- `ProductDetail` : fiche detaillee avec image, badge, resume, avantages, inconvenients, specs et CTA.
- `GuideSection` : guide d'achat. Actuellement generique, a rendre dynamique par categorie si besoin.
- `FAQSection` : FAQ de l'article.
- `Conclusion` : conclusion standard.
- `Navbar` et `Footer` : structure globale.
- `LegalPage` : pages legales.

## Regles metier

- Le site est un site d'affiliation Amazon.
- Chaque article compare les 6 meilleurs produits d'une categorie.
- Chaque article est genere a partir d'un mot-cle principal.
- Les produits doivent etre choisis pour leur pertinence et leur disponibilite.
- Les donnees doivent etre verifiees avant publication.
- Les notes sont des scores internes, pas des notes Amazon copiees.
- Les prix sont indicatifs ; l'interface invite a verifier le prix actualise sur Amazon.
- Les liens Amazon doivent utiliser `rel="noopener noreferrer sponsored nofollow"`.
- Les textes ne doivent pas copier Amazon ni des sources tierces.
- Les images doivent etre autorisees, distantes stables ou stockees localement dans `public/images`.
- Les contenus doivent rester utiles, comparatifs et orientes decision d'achat.
- Les pages legales doivent rester accessibles.

## SEO

Chaque article doit inclure :

- un `slug` clair ;
- un `title` avec la requete principale ;
- une `metaDescription` concise ;
- une `intro` originale ;
- un tableau comparatif ;
- des H2/H3 implicites via les composants ;
- une FAQ avec questions naturelles ;
- des donnees structurees FAQ et Product ;
- un maillage interne depuis l'accueil, les categories ou les suggestions.

Le sitemap et le RSS sont alimentes par `posts`, donc tout nouvel article ajoute dans ce tableau apparait automatiquement dans :

```text
/sitemap.xml
/rss.xml
```

Attention : `app/sitemap.ts` et `app/rss.xml/route.ts` utilisent actuellement `https://example.com`. Remplacer cette valeur par le domaine final avant publication.

## Points a ameliorer

- Ajouter un vrai script de generation automatique depuis un mot-cle.
- Ajouter une interface admin pour saisir un mot-cle et declencher la generation.
- Rendre `GuideSection` dynamique selon la categorie.
- Corriger les caracteres mal encodes visibles dans certains composants, par exemple l'etoile affichee comme `â˜…`.
- Remplacer les placeholders par des images verifiees.
- Ajouter une variable d'environnement pour le tag partenaire Amazon.
- Ajouter des tests ou controles de qualite pour verifier qu'une page contient exactement 6 produits.

## Commandes utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Note : selon la configuration Next.js, `npm run lint` peut necessiter une configuration ESLint supplementaire.

## Resume pour une IA qui ouvre le projet

Tu dois comprendre ce projet comme un generateur de comparatifs Amazon. Le coeur du site est `components/data/products.ts`. Pour creer une nouvelle page, ajoute un objet `Post` et 6 objets `Product` avec la meme categorie. La route `app/[slug]/page.tsx` publiera automatiquement l'article. Respecte les regles d'affiliation, verifie les donnees, n'invente pas les caracteristiques, ne copie pas Amazon, et garde l'objectif : aider l'utilisateur a choisir le meilleur produit d'une categorie grace a un comparatif SEO clair.
