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
  mainCategory: 'electromenager' | 'chiens-chats';
};

const placeholder = '/images/placeholder.svg';
const coffeeImages = {
  rivelia:
    'https://eu-images.contentstack.com/v3/assets/blt2252ade9ce4d4191/bltb51ed8711dfb7fff/687a5bc66d1e99122f18bca6/USCA_MenuFilterSortByCard_Rivelia_780x600_20250718.jpg',
  magnifica:
    'https://dam.delonghi.com/902x902/assets/294655',
  philips5500:
    'https://us.home-appliances.philips/cdn/shop/files/EP5544_90_Side_0e88dbc2-bf24-4293-955a-d26f2faf90e4.jpg?v=1722874918',
  krupsEvidence:
    'https://dam.groupeseb.com/m/14194fb000ef03b2/Medium-KRUPS_EVIDENCE_ECO_08.png?timestamp=20260602002147',
  melittaBarista:
    'https://www.melitta-international.com/content/dam/melitta-cp-c/me-cp/kategorie-kaffeevollautomaten/01_alle-kaffeevollautomaten---produktlisting-seite/01_alle-kaffeevollautomaten---produktlisting-seite/barista-ts-smart/BaristaTS_Smart_black.png',
  juraE8:
    'https://api.jura.com/media/global/images/home-products/e-line-2023/E8-EC-SC/e8-chrome-ec-15581/e8_ec_chrome_packshot.jpg?cb=208335',
};
const amazonTag = 'sababou2026-21';

function amazonSearchUrl(query: string) {
  return `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;
}

function amazonProductUrl(asinOrQuery: string) {
  if (asinOrQuery.length === 10 && asinOrQuery.startsWith('B0')) {
    return `https://www.amazon.fr/dp/${asinOrQuery}/?tag=${amazonTag}`;
  }
  return `https://www.amazon.fr/s?k=${encodeURIComponent(asinOrQuery)}&tag=${amazonTag}`;
}

export const products: Product[] = [
  {
    id: 'delonghi-rivelia',
    name: 'DeLonghi Rivelia',
    image: coffeeImages.rivelia,
    rating: 9.3,
    price: 749,
    amazonUrl: amazonProductUrl('B0CDCM3J5G'),
    category: 'machines-a-cafe-grain',
    isBestChoice: true,
    summary:
      'Une machine a cafe a grain moderne pour les foyers qui veulent alterner facilement entre plusieurs cafes et enregistrer leurs preferences.',
    pros: ['Bacs a grains interchangeables', 'Interface tactile intuitive', 'Profils et reglages personnalises'],
    cons: ['Prix plus eleve qu une entree de gamme', 'Entretien du systeme lait a suivre', 'Moins manuelle qu une machine porte-filtre'],
    specs: ['Broyeur integre', 'Systeme Bean Adapt', 'Boissons cafe et lactees', 'Profils utilisateurs'],
    recommendedFor: 'Les utilisateurs qui veulent une machine automatique moderne, simple and personnalisable.',
  },
  {
    id: 'delonghi-magnifica-evo',
    name: 'DeLonghi Magnifica Evo',
    image: coffeeImages.magnifica,
    rating: 8.9,
    price: 549,
    amazonUrl: amazonProductUrl('B09CGSCBK5'),
    category: 'machines-a-cafe-grain',
    isBestValue: true,
    summary:
      'Une valeur sure pour passer au cafe en grains sans menu complique ni budget premium.',
    pros: ['Excellent rapport qualite prix', 'Utilisation tres simple', 'Broyeur reglable'],
    cons: ['Personnalisation limitee', 'Finitions plus plastiques', 'Mousse de lait correcte mais pas premium'],
    specs: ['Broyeur conique integre', '13 reglages de mouture selon version', 'Recettes en acces direct', 'Pieces amovibles'],
    recommendedFor: 'Les acheteurs qui veulent une premiere machine fiable et facile a utiliser.',
  },
  {
    id: 'philips-5500-lattego',
    name: 'Philips 5500 LatteGo',
    image: coffeeImages.philips5500,
    rating: 8.7,
    price: 699,
    amazonUrl: amazonProductUrl('B0CZ7D5DTQ'),
    category: 'machines-a-cafe-grain',
    summary:
      'Une machine familiale pratique pour preparer facilement des cafes noirs et des boissons lactees.',
    pros: ['Systeme LatteGo facile a nettoyer', 'Bonne variete de boissons', 'Profils utilisateurs'],
    cons: ['Mousse moins fine qu une buse vapeur', 'Format assez imposant', 'Prix superieur aux series Philips 2200 et 3200'],
    specs: ['Broyeur ceramique', '12 reglages de mouture', 'Reservoir environ 1.8 L', 'Bac a grains environ 275 g'],
    recommendedFor: 'Les familles ou couples qui veulent des boissons variees avec un entretien simple.',
  },
  {
    id: 'krups-evidence-eco-design',
    name: 'Krups Evidence Eco Design',
    image: coffeeImages.krupsEvidence,
    rating: 8.5,
    price: 599,
    amazonUrl: amazonProductUrl('B09S3RK6C2'),
    category: 'machines-a-cafe-grain',
    summary:
      'Une machine compacte et intuitive qui mise sur la simplicite, la rapidite et l entretien automatique.',
    pros: ['Format compact', 'Fonctionnement intuitif', 'Entretien automatique par pastilles'],
    cons: ['Pas de trappe cafe moulu', 'Moins de personnalisation', 'Design tres sobre'],
    specs: ['Broyeur integre', 'Recettes cafe et lactees', 'Reglage intensite et quantite', 'Nettoyage automatique'],
    recommendedFor: 'Les utilisateurs qui veulent une machine efficace, compacte et simple a entretenir.',
  },
  {
    id: 'melitta-barista-ts-smart',
    name: 'Melitta Barista TS Smart',
    image: coffeeImages.melittaBarista,
    rating: 8.8,
    price: 849,
    amazonUrl: amazonProductUrl('B077ZGFTPW'),
    category: 'machines-a-cafe-grain',
    summary:
      'Une machine tres complete pour les foyers qui alternent entre plusieurs types de grains et de recettes.',
    pros: ['Deux bacs a grains', 'Tres nombreuses recettes', 'Profils utilisateurs'],
    cons: ['Machine profonde', 'Interface riche a apprivoiser', 'Entretien regulier necessaire'],
    specs: ['Double bac a grains', 'Jusqu a 21 specialites selon version', 'Plusieurs intensites', 'Trappe cafe moulu'],
    recommendedFor: 'Les foyers ou chacun veut enregistrer ses propres boissons et alterner les cafes.',
  },
  {
    id: 'jura-e8',
    name: 'Jura E8',
    image: coffeeImages.juraE8,
    rating: 9.0,
    price: 1299,
    amazonUrl: amazonProductUrl('B07WQYQDW1'),
    category: 'machines-a-cafe-grain',
    isPremium: true,
    summary:
      'Un choix premium pour obtenir rapidement des boissons regulieres avec une finition haut de gamme.',
    pros: ['Tres bonne finition', 'Cafe rapide et regulier', 'Programmes d entretien guides'],
    cons: ['Prix eleve', 'Accessoires parfois couteux', 'Texture lait moins souple qu une vraie buse vapeur'],
    specs: ['Broyeur conique', 'Systeme thermoblock', 'Pression annoncee 15 bars', 'Ecran de selection'],
    recommendedFor: 'Les utilisateurs qui veulent une machine premium tres automatisee.',
  },
];

export const posts: Post[] = [
  {
    slug: 'machines-a-cafe-grain',
    title: 'Les 6 meilleures machines a cafe a grain en 2026',
    heroImage: coffeeImages.rivelia,
    category: 'machines-a-cafe-grain',
    metaDescription:
      'Comparatif des meilleures machines a cafe a grain en 2026 : DeLonghi, Philips, Krups, Melitta et Jura avec avantages, limites et guide d achat.',
    intro:
      'Une machine a cafe a grain permet de profiter d un cafe plus frais qu avec des capsules tout en gardant une preparation simple au quotidien. En 2026, les meilleurs modeles se distinguent par la qualite du broyeur, la variete des boissons, la simplicite d entretien, le niveau sonore et le rapport qualite prix. Ce comparatif aide a choisir une machine adaptee aux cafes noirs, aux cappuccinos, aux lattes et aux foyers avec plusieurs profils.',
    guideTitle: 'Guide d achat : comment bien choisir une machine a cafe a grain ?',
    faq: [
      {
        q: 'Quelle est la meilleure machine a cafe a grain en 2026 ?',
        a: 'La DeLonghi Rivelia est le meilleur choix global pour son equilibre entre personnalisation, simplicite et usage familial.',
      },
      {
        q: 'Quelle machine a cafe a grain choisir pour un bon rapport qualite prix ?',
        a: 'La DeLonghi Magnifica Evo est une option tres solide pour demarrer avec le cafe en grains sans payer le prix d une machine premium.',
      },
      {
        q: 'Une machine a cafe a grain est-elle meilleure qu une machine a capsules ?',
        a: 'Elle offre generalement un cafe plus frais, moins de dechets et un cout par tasse plus bas, mais elle demande plus d entretien.',
      },
      {
        q: 'Quelle machine choisir pour cappuccino et latte ?',
        a: 'La Philips 5500 LatteGo est pratique pour les boissons lactees faciles, tandis que la Jura E8 vise un usage plus premium.',
      },
    ],
    mainCategory: 'electromenager',
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
