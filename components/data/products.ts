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
const amazonTag = 'VOTRE-ID-PARTENAIRE-21';

function amazonSearchUrl(query: string) {
  return `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;
}

export const products: Product[] = [
  {
    id: 'roborock-s8',
    name: 'Roborock S8 Ultra',
    image: placeholder,
    rating: 4.9,
    price: 899,
    amazonUrl: 'https://www.amazon.fr/',
    category: 'aspirateurs-robots',
    isBestChoice: true,
    summary: 'Un modele premium pour illustrer la fiche produit complete.',
    pros: ['Navigation precise', 'Bon niveau d automatisation', 'Station complete'],
    cons: ['Prix eleve', 'Donnees a verifier avant publication'],
    specs: ['Autonomie: 120 min', 'Capacite: 0.6 L', 'Connectivite: Wi-Fi et application'],
    recommendedFor: 'Les utilisateurs qui veulent une solution tres automatisee.',
  },
  {
    id: 'ecovacs-deebot-x1',
    name: 'Ecovacs Deebot X1 OMNI',
    image: placeholder,
    rating: 4.7,
    price: 749,
    amazonUrl: 'https://www.amazon.fr/',
    category: 'aspirateurs-robots',
    isBestValue: true,
    summary: 'Un exemple de choix equilibre entre fonctions avancees et budget.',
    pros: ['Bon rapport equipement/prix', 'Fonctions de lavage', 'Application complete'],
    cons: ['Encombrement de la station', 'Prix a actualiser'],
    specs: ['Autonomie: 110 min', 'Capacite: 0.5 L', 'Navigation: cartographie intelligente'],
    recommendedFor: 'Les foyers qui cherchent un bon rapport qualite/prix.',
  },
  {
    id: 'shark-ai-pro',
    name: 'Shark AI Pro',
    image: placeholder,
    rating: 4.6,
    price: 599,
    amazonUrl: 'https://www.amazon.fr/',
    category: 'aspirateurs-robots',
    summary: 'Une fiche exemple pour un modele milieu de gamme efficace.',
    pros: ['Utilisation simple', 'Bon niveau d aspiration', 'Prix plus accessible'],
    cons: ['Moins premium', 'Caracteristiques a confirmer'],
    specs: ['Autonomie: 100 min', 'Capacite: 0.45 L', 'Connectivite: Wi-Fi'],
    recommendedFor: 'Les utilisateurs qui veulent automatiser le nettoyage courant.',
  },
  {
    id: 'philips-light',
    name: 'Philips LightLive 5000',
    image: placeholder,
    rating: 4.4,
    price: 449,
    amazonUrl: 'https://www.amazon.fr/',
    category: 'aspirateurs-robots',
    summary: 'Un exemple de produit accessible pour les petites surfaces.',
    pros: ['Format compact', 'Prix modere', 'Entretien simple'],
    cons: ['Fonctions avancees limitees', 'Station basique'],
    specs: ['Autonomie: 90 min', 'Capacite: 0.4 L', 'Mode: aspiration'],
    recommendedFor: 'Les appartements et petites maisons.',
  },
  {
    id: 'geeni-smart',
    name: 'Geeni Smart RX200',
    image: placeholder,
    rating: 4.1,
    price: 299,
    amazonUrl: 'https://www.amazon.fr/',
    category: 'aspirateurs-robots',
    summary: 'Une option entree de gamme pour montrer le format top 6.',
    pros: ['Budget reduit', 'Fonctions essentielles', 'Facile a comparer'],
    cons: ['Moins puissant', 'Donnees constructeur a ajouter'],
    specs: ['Autonomie: 80 min', 'Capacite: information a verifier', 'Application: disponible'],
    recommendedFor: 'Les acheteurs qui veulent une premiere solution abordable.',
  },
  {
    id: 'anker-robovac',
    name: 'Anker RoboVac G30',
    image: placeholder,
    rating: 4.3,
    price: 399,
    amazonUrl: 'https://www.amazon.fr/',
    category: 'aspirateurs-robots',
    isPremium: true,
    summary: 'Un modele exemple pour completer le comparatif avec six produits.',
    pros: ['Bonne autonomie', 'Design discret', 'Prix intermediaire'],
    cons: ['Station moins complete', 'Fiche a enrichir'],
    specs: ['Autonomie: 100 min', 'Capacite: 0.6 L', 'Navigation: gyroscopique'],
    recommendedFor: 'Les utilisateurs qui veulent un robot simple et fiable.',
  },
  {
    id: 'delonghi-rivelia',
    name: 'DeLonghi Rivelia',
    image: coffeeImages.rivelia,
    rating: 9.3,
    price: 749,
    amazonUrl: amazonSearchUrl('DeLonghi Rivelia machine cafe grain'),
    category: 'machines-a-cafe-grain',
    isBestChoice: true,
    summary:
      'Une machine a cafe a grain moderne pour les foyers qui veulent alterner facilement entre plusieurs cafes et enregistrer leurs preferences.',
    pros: ['Bacs a grains interchangeables', 'Interface tactile intuitive', 'Profils et reglages personnalises'],
    cons: ['Prix plus eleve qu une entree de gamme', 'Entretien du systeme lait a suivre', 'Moins manuelle qu une machine porte-filtre'],
    specs: ['Broyeur integre', 'Systeme Bean Adapt', 'Boissons cafe et lactees', 'Profils utilisateurs'],
    recommendedFor: 'Les utilisateurs qui veulent une machine automatique moderne, simple et personnalisable.',
  },
  {
    id: 'delonghi-magnifica-evo',
    name: 'DeLonghi Magnifica Evo',
    image: coffeeImages.magnifica,
    rating: 8.9,
    price: 549,
    amazonUrl: amazonSearchUrl('DeLonghi Magnifica Evo machine cafe grain'),
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
    amazonUrl: amazonSearchUrl('Philips 5500 LatteGo machine cafe grain'),
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
    amazonUrl: amazonSearchUrl('Krups Evidence Eco Design machine cafe grain'),
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
    amazonUrl: amazonSearchUrl('Melitta Barista TS Smart machine cafe grain'),
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
    amazonUrl: amazonSearchUrl('Jura E8 machine cafe grain'),
    category: 'machines-a-cafe-grain',
    isPremium: true,
    summary:
      'Un choix premium pour obtenir rapidement des boissons regulieres avec une finition haut de gamme.',
    pros: ['Tres bonne finition', 'Cafe rapide et regulier', 'Programmes d entretien guides'],
    cons: ['Prix eleve', 'Accessoires parfois couteux', 'Texture lait moins souple qu une vraie buse vapeur'],
    specs: ['Broyeur conique', 'Systeme thermoblock', 'Pression annoncee 15 bars', 'Ecran de selection'],
    recommendedFor: 'Les utilisateurs qui veulent une machine premium tres automatisee.',
  },
  {
    id: 'dyson-v15-detect-absolute',
    name: 'Dyson V15 Detect Absolute',
    image: placeholder,
    rating: 9.4,
    price: 699,
    amazonUrl: amazonSearchUrl('Dyson V15 Detect Absolute aspirateur sans fil'),
    category: 'aspirateurs-sans-fil',
    isBestChoice: true,
    summary:
      'Un aspirateur balai haut de gamme qui reste une reference pour les foyers exigeants grace a sa detection des poussieres fines, son ecran de controle et sa forte polyvalence.',
    pros: ['Tres bonnes performances sur sols durs et tapis', 'Brosse avec detection de poussiere', 'Accessoires complets pour poils et recoins'],
    cons: ['Prix eleve', 'Gachette a maintenir pendant l utilisation', 'Station de vidage automatique absente'],
    specs: ['Technologie cyclonique Dyson', 'Brosse lumineuse pour poussiere fine', 'Ecran LCD', 'Filtration avancee'],
    recommendedFor: 'Les utilisateurs qui veulent le meilleur compromis performance, filtration et polyvalence.',
  },
  {
    id: 'shark-powerdetect-clean-empty',
    name: 'Shark PowerDetect Clean & Empty',
    image: placeholder,
    rating: 9.1,
    price: 549,
    amazonUrl: amazonSearchUrl('Shark PowerDetect Clean Empty aspirateur sans fil'),
    category: 'aspirateurs-sans-fil',
    isBestValue: true,
    summary:
      'Un aspirateur sans fil intelligent avec station de vidage automatique, detection des saletes et tube flexible pour nettoyer sous les meubles avec moins d effort.',
    pros: ['Station de vidage automatique', 'Bonne gestion des poils', 'Tube flexible pratique sous les meubles'],
    cons: ['Station plus encombrante', 'Autonomie reduite en mode puissance elevee', 'Disponibilite variable selon les pays'],
    specs: ['Autonomie annoncee jusqu a 70 min', 'Dock auto-empty', 'DuoClean Detect', 'Tube MultiFLEX'],
    recommendedFor: 'Les foyers avec animaux ou utilisateurs qui veulent limiter la corvee de vidage du bac.',
  },
  {
    id: 'rowenta-x-force-flex-15-60',
    name: 'Rowenta X-Force Flex 15.60',
    image: placeholder,
    rating: 8.8,
    price: 499,
    amazonUrl: amazonSearchUrl('Rowenta X-Force Flex 15.60 aspirateur balai sans fil'),
    category: 'aspirateurs-sans-fil',
    summary:
      'Une option puissante et bien equipee, interessante pour ceux qui veulent un aspirateur balai flexible avec forte aspiration et accessoires orientes poils d animaux.',
    pros: ['Tube flexible tres pratique', 'Puissance annoncee elevee', 'Bonne autonomie en mode economique'],
    cons: ['Poids sensible en usage long', 'Recharge parfois longue', 'Moins compact qu un modele slim'],
    specs: ['Jusqu a 230 Air Watts', 'Autonomie annoncee jusqu a 80 min', 'Brosse LED', 'Batterie amovible'],
    recommendedFor: 'Les familles qui veulent un aspirateur balai puissant pour sols mixtes et passages sous les meubles.',
  },
  {
    id: 'samsung-bespoke-jet-ai',
    name: 'Samsung Bespoke Jet AI',
    image: placeholder,
    rating: 8.7,
    price: 799,
    amazonUrl: amazonSearchUrl('Samsung Bespoke Jet AI aspirateur sans fil'),
    category: 'aspirateurs-sans-fil',
    summary:
      'Un aspirateur premium avec station de nettoyage, forte puissance d aspiration et fonctions connectees pour ceux qui veulent un appareil complet et soigne visuellement.',
    pros: ['Station de vidage et recharge elegante', 'Tres forte puissance annoncee', 'Mode intelligent selon les surfaces'],
    cons: ['Budget premium', 'Sacs de station a remplacer', 'Interet de l IA variable selon les usages'],
    specs: ['Moteur HexaJet', 'Jusqu a 280 W d aspiration selon version', 'Station Clean Station', 'Connexion SmartThings'],
    recommendedFor: 'Les utilisateurs qui veulent une solution premium avec station propre et rangement integre.',
  },
  {
    id: 'bosch-unlimited-10',
    name: 'Bosch Unlimited 10',
    image: placeholder,
    rating: 8.5,
    price: 599,
    amazonUrl: amazonSearchUrl('Bosch Unlimited 10 aspirateur sans fil'),
    category: 'aspirateurs-sans-fil',
    isPremium: true,
    summary:
      'Un modele recent et technologique qui mise sur plusieurs modes de nettoyage, un tube pliable et une batterie compatible avec l ecosysteme Bosch.',
    pros: ['Nombreux modes de nettoyage', 'Tube pliable a 90 degres', 'Batterie compatible Power For All selon version'],
    cons: ['Bac plus petit que certains concurrents', 'Poids a verifier selon configuration', 'Moins etabli que Dyson ou Shark sur ce segment'],
    specs: ['Jusqu a 80 min selon version', 'Six modes de nettoyage', 'Affichage dynamique', 'Technologie MicroClean'],
    recommendedFor: 'Les utilisateurs deja equipes Bosch ou ceux qui veulent un aspirateur moderne avec beaucoup de reglages.',
  },
  {
    id: 'dreame-r10',
    name: 'Dreame R10',
    image: placeholder,
    rating: 8.1,
    price: 249,
    amazonUrl: amazonSearchUrl('Dreame R10 aspirateur balai sans fil'),
    category: 'aspirateurs-sans-fil',
    summary:
      'Une alternative plus accessible pour les petites surfaces et les nettoyages quotidiens, avec un prix plus doux que les references premium.',
    pros: ['Prix plus abordable', 'Format maniable', 'Bon choix pour petites surfaces'],
    cons: ['Moins puissant que les modeles premium', 'Accessoires plus simples', 'Moins adapte aux grands tapis epais'],
    specs: ['Aspirateur balai sans fil', 'Format convertible en aspirateur a main', 'Accessoires de nettoyage courant', 'Station murale selon pack'],
    recommendedFor: 'Les appartements, studios ou acheteurs qui veulent un premier aspirateur sans fil sans budget premium.',
  },
];

export const posts: Post[] = [
  {
    slug: 'aspirateurs-robots',
    title: 'Les 6 meilleurs aspirateurs robots en 2026',
    heroImage: placeholder,
    category: 'aspirateurs-robots',
    metaDescription:
      'Comparatif des meilleurs aspirateurs robots en 2026 avec tableau, avantages, limites, guide d achat et FAQ.',
    intro:
      'Les aspirateurs robots se sont imposes comme des allies utiles pour entretenir le domicile avec moins d effort. En 2026, les modeles evoluent avec la navigation LiDAR, la cartographie, les stations automatiques et des fonctions de lavage plus avancees. Ce comparatif montre une structure SEO prete a deployer, avec des donnees exemples a remplacer par des sources verifiees avant publication.',
    guideTitle: 'Guide d achat : comment bien choisir un aspirateur robot ?',
    faq: [
      {
        q: 'Un aspirateur robot peut-il nettoyer les tapis epais ?',
        a: 'Oui, mais il faut verifier la puissance d aspiration, la gestion des hauteurs et les modes dedies aux tapis.',
      },
      {
        q: 'Faut-il choisir un modele avec reservoir a eau ?',
        a: 'Cela depend du type de sol. Sur sols durs, une fonction lavage peut etre utile, mais elle ne remplace pas toujours un vrai nettoyage manuel.',
      },
      {
        q: 'Les notes sont-elles des avis Amazon ?',
        a: 'Non. Le site ne copie pas les avis Amazon. Les notes doivent venir de votre propre methode de scoring ou de donnees verifiees.',
      },
    ],
  },
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
  },
  {
    slug: 'aspirateurs-sans-fil',
    title: 'Les 6 meilleurs aspirateurs sans fil en 2026',
    heroImage: placeholder,
    category: 'aspirateurs-sans-fil',
    metaDescription:
      'Comparatif des meilleurs aspirateurs sans fil en 2026 : Dyson, Shark, Rowenta, Samsung, Bosch et Dreame avec avantages, limites et guide d achat.',
    intro:
      'Un aspirateur sans fil doit etre assez puissant pour remplacer les nettoyages rapides du quotidien, mais aussi assez maniable pour passer sous les meubles, dans les escaliers et autour des tapis. En 2026, les meilleurs modeles se distinguent par la puissance d aspiration, la detection automatique des saletes, l autonomie, la filtration, les accessoires pour poils d animaux et la simplicite de vidage. Ce comparatif retient six aspirateurs balais pertinents pour differents budgets et usages.',
    guideTitle: 'Guide d achat : comment bien choisir un aspirateur sans fil ?',
    faq: [
      {
        q: 'Quel est le meilleur aspirateur sans fil en 2026 ?',
        a: 'Le Dyson V15 Detect Absolute reste le meilleur choix global pour ses performances, sa detection des poussieres fines et sa polyvalence.',
      },
      {
        q: 'Quel aspirateur sans fil choisir pour les poils d animaux ?',
        a: 'Le Shark PowerDetect Clean & Empty et le Dyson V15 Detect Absolute sont de bons choix grace a leurs brosses adaptees et a leur bonne gestion des poils.',
      },
      {
        q: 'Faut-il choisir un aspirateur avec station de vidage automatique ?',
        a: 'Oui si vous voulez reduire le contact avec la poussiere et vider le bac moins souvent. C est pratique, mais la station prend plus de place.',
      },
      {
        q: 'Un aspirateur sans fil peut-il remplacer un aspirateur traineau ?',
        a: 'Pour la plupart des logements, oui si le modele est puissant et bien equipe. Pour de tres grandes surfaces ou des tapis epais, un aspirateur traineau peut rester utile.',
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
