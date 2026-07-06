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

const catLitterImages = {
  litterRobot4: '/images/litter-robot-4-photo.jpg',
  petkitPuraMax2: '/images/petkit-pura-max-2-photo.jpg',
  neakasaM1: '/images/neakasa-m1-photo.jpg',
  catlinkLuxuryPro: '/images/catlink-luxury-pro-photo.jpg',
  petsafeScoopFree: '/images/petsafe-scoopfree-photo.png',
  petsnowy: '/images/petsnowy-self-cleaning-photo.jpg',
};

const catFountainImages = {
  petlibroDockstream:
    'https://petlibro.com/cdn/shop/files/WF116-overview-PC-10.2.png?v=1754969206',
  catitPixi:
    '/images/catit-pixi-smart-fountain.jpg',
  petkitEversweet:
    'https://www.petkit.com/cdn/shop/files/eversweet-solo-2-pet-water-fountain-app-remote-control.png?v=1766731750&width=2048',
  petsafeDrinkwell:
    'https://cdn.shopify.com/s/files/1/0339/6655/5275/files/udsrib7uprvzhfqlpwfx.jpg?v=1689745020',
  catitFlower:
    '/images/catit-flower-fountain.jpg',
  catitPixiClassic:
    '/images/catit-pixi-fountain.jpg',
};

const catFeederImages = {
  petlibroGranary: '/images/petlibro-granary-smart-feeder.jpg',
  philipsSmartPetFeeder: '/images/philips-smart-pet-feeder.jpg',
  petsafeSmartFeed: '/images/petsafe-smart-feed.png',
  xiaomiSmartPetFoodFeeder: '/images/xiaomi-smart-pet-food-feeder.png',
  catitPixiSmartFeeder: '/images/catit-pixi-smart-feeder.jpg',
  puppyKittyCameraFeeder: '/images/puppy-kitty-camera-feeder.jpg',
};

const amazonTag = 'sababou2026-21';

function amazonSearchUrl(query: string) {
  return `https://www.amazon.fr/s?k=${encodeURIComponent(query)}&tag=${amazonTag}`;
}

function amazonProductUrl(asinOrQuery: string) {
  if (/^[A-Z0-9]{10}$/.test(asinOrQuery)) {
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
  {
    id: 'philips-5500-lattego-silencieuse',
    name: 'Philips 5500 LatteGo',
    image: coffeeImages.philips5500,
    rating: 9.2,
    price: 699,
    amazonUrl: amazonProductUrl('B0CZ7D5DTQ'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    isBestChoice: true,
    summary:
      'Une machine à café à grain silencieuse très convaincante pour préparer espresso, café long, cappuccino et latte sans transformer la cuisine en bar bruyant. Son broyeur céramique, ses réglages de mouture et son système LatteGo en font une cafetière automatique simple d’utilisation pour les amateurs de café en grains.',
    pros: ['Broyeur céramique discret', 'LatteGo facile à rincer', 'Nombreuses boissons chaudes et lactées'],
    cons: ['Mousse de lait moins fine qu’une buse vapeur manuelle', 'Réservoir d’eau à remplir souvent en usage familial', 'Prix plus élevé qu’une entrée de gamme'],
    specs: ['Broyeur céramique', '12 réglages de finesse de mouture', 'Réservoir d’eau environ 1.8 L', 'Bac à grains environ 275 g'],
    recommendedFor: 'Les foyers qui veulent une machine à café automatique compacte, calme et polyvalente pour tasses de café, espresso et boissons lactées.',
  },
  {
    id: 'delonghi-rivelia-silencieuse',
    name: 'DeLonghi Rivelia',
    image: coffeeImages.rivelia,
    rating: 9.0,
    price: 749,
    amazonUrl: amazonProductUrl('B0CDCM3J5G'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    summary:
      'La DeLonghi Rivelia mise sur le confort d’utilisation avec broyeur intégré, profils de grains et interface tactile. Elle permet de moudre les grains, ajuster l’extraction et préparer un bon café ou un cappuccino avec une simple pression, tout en restant plus agréable au quotidien qu’une machine à expresso automatique basique.',
    pros: ['Bacs à grains interchangeables', 'Réglages simples pour arôme et longueur', 'Écran tactile intuitif'],
    cons: ['Entretien du lait à suivre', 'Prix premium', 'Bac à grains moins adapté aux très gros consommateurs'],
    specs: ['Broyeur intégré', 'Bean Adapt', 'Boissons café et lactées', 'Profils utilisateurs'],
    recommendedFor: 'Les utilisateurs qui alternent arabica, décaféiné ou grain particulier et veulent une machine automatique moderne.',
  },
  {
    id: 'jura-e8-silencieuse',
    name: 'Jura E8',
    image: coffeeImages.juraE8,
    rating: 8.9,
    price: 1299,
    amazonUrl: amazonProductUrl('B07WQYQDW1'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    isPremium: true,
    summary:
      'La Jura E8 vise les amateurs de café haut de gamme qui veulent un expresso automatique régulier, une mousse de lait onctueuse et des programmes de rinçage ou détartrage bien guidés. Son positionnement premium se ressent dans la finition, la régularité de l’extraction et la simplicité devant la machine à café.',
    pros: ['Finition premium', 'Extraction régulière', 'Nettoyage automatique bien guidé'],
    cons: ['Prix élevé', 'Accessoires et cartouches coûteux', 'Moins compacte que certaines rivales'],
    specs: ['Broyeur conique', 'Boissons café et boissons lactées', 'Écran de sélection', 'Programmes de nettoyage'],
    recommendedFor: 'Les acheteurs qui veulent une machine à café professionnelle dans l’esprit, sans porte-filtre ni manipulation manuelle.',
  },
  {
    id: 'melitta-barista-ts-smart-silencieuse',
    name: 'Melitta Barista TS Smart',
    image: coffeeImages.melittaBarista,
    rating: 8.7,
    price: 849,
    amazonUrl: amazonProductUrl('B077ZGFTPW'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    summary:
      'La Melitta Barista TS Smart est une expresso broyeur très complète pour varier les cafés, les tasses et les recettes. Ses deux réservoirs à grains facilitent le passage d’un café en grain doux à une torréfaction plus intense, avec une finesse de mouture réglable et des recettes mémorisées.',
    pros: ['Deux bacs à grains', 'Très nombreuses préparations', 'Profils et recettes programmables'],
    cons: ['Machine assez profonde', 'Interface riche à apprivoiser', 'Nettoyage régulier indispensable'],
    specs: ['Double bac à grains', 'Trappe café moulu', 'Recettes one touch', 'Réglage intensité et quantité d’eau'],
    recommendedFor: 'Les familles ou colocations où chacun veut son espresso, café long, cappuccino ou latte avec ses préférences.',
  },
  {
    id: 'krups-evidence-eco-design-silencieuse',
    name: 'Krups Evidence Eco Design',
    image: coffeeImages.krupsEvidence,
    rating: 8.4,
    price: 599,
    amazonUrl: amazonProductUrl('B09S3RK6C2'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    isBestValue: true,
    summary:
      'La Krups Evidence Eco Design est une bonne machine compacte pour ceux qui veulent un robot café facile à vivre, avec broyeur à café, nettoyage automatique et recettes en accès rapide. Elle n’est pas totalement silencieuse, mais son format et son entretien simple la rendent pratique pour une petite cuisine.',
    pros: ['Format compact', 'Entretien automatique par pastilles', 'Commandes simples'],
    cons: ['Personnalisation limitée', 'Pas de trappe café moulu', 'Mousseur moins flexible qu’une buse vapeur'],
    specs: ['Broyeur intégré', 'Recettes café et lactées', 'Nettoyage automatique', 'Réglage intensité et volume'],
    recommendedFor: 'Les acheteurs qui cherchent une machine à café avec broyeur simple, pas trop chère et peu contraignante.',
  },
  {
    id: 'delonghi-magnifica-evo-silencieuse',
    name: 'DeLonghi Magnifica Evo',
    image: coffeeImages.magnifica,
    rating: 8.3,
    price: 549,
    amazonUrl: amazonProductUrl('B09CGSCBK5'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    summary:
      'La DeLonghi Magnifica Evo reste une valeur sûre pour acheter une machine à café grain sans passer sur du très haut de gamme. Elle prépare café expresso, café long et boissons lactées selon version, avec broyeur réglable, réservoir amovible et arrêt automatique.',
    pros: ['Bon rapport qualité prix', 'Broyeur réglable', 'Utilisation très facile'],
    cons: ['Plus audible que les modèles premium', 'Finitions simples', 'Moins de recettes avancées'],
    specs: ['Broyeur conique réglable', 'Réservoir d’eau amovible', 'Bac à marc de café', 'Arrêt automatique'],
    recommendedFor: 'Les débutants qui veulent quitter capsules, dosettes ou café moulu pour passer au café en grains.',
  },
  {
    id: 'litter-robot-4-2026',
    name: 'Litter-Robot 4',
    image: catLitterImages.litterRobot4,
    rating: 9.5,
    price: 899,
    amazonUrl: 'https://www.amazon.fr/Litter-Robot-Whisker-Noir-autonettoyante-agglom%C3%A9rante/dp/B0CFTCG4B8?th=1&linkCode=ll2&tag=sababou2026-21&linkId=1a4361cf8b42a8d751e6bb503ff0f4c5&ref_=as_li_ss_tl',
    category: 'meilleure-litiere-automatique-chat',
    isBestChoice: true,
    summary:
      'La reference premium des litieres automatiques pour chat, pensee pour reduire les odeurs, limiter le nettoyage manuel et convenir aux foyers avec plusieurs chats.',
    pros: ['Tres fiable', 'Excellente gestion des odeurs', 'Convient a plusieurs chats'],
    cons: ['Prix eleve', 'Volume important', 'Demande un espace dedie'],
    specs: ['Autonettoyante', 'Application mobile', 'Capteurs de securite', 'Tiroir a dechets ferme'],
    recommendedFor: 'Les foyers qui veulent la meilleure solution globale et acceptent un budget premium.',
  },
  {
    id: 'petkit-pura-max-2-2026',
    name: 'PETKIT Pura Max 2',
    image: catLitterImages.petkitPuraMax2,
    rating: 9.1,
    price: 399,
    amazonUrl: 'https://www.amazon.fr/PETKIT-Autonettoyante-Anti-fuites-Anti-pincement-Plusieurs/dp/B0D9QGW2M6?th=1&linkCode=ll2&tag=sababou2026-21&linkId=45d5de1f5ab74d2597d7b2c9b42d52d7&ref_=as_li_ss_tl',
    category: 'meilleure-litiere-automatique-chat',
    isBestValue: true,
    summary:
      'Une litiere connectee moderne qui combine application mobile, format ferme et bon controle des odeurs pour un prix plus accessible que les modeles tres haut de gamme.',
    pros: ['Application mobile', 'Bon rapport qualite prix', 'Design moderne'],
    cons: ['Nettoyage parfois lent', 'Entretien regulier necessaire', 'Parametrage a prendre en main'],
    specs: ['Controle APP', 'Anti-fuites', 'Anti-pincement', 'Pour plusieurs chats'],
    recommendedFor: 'Les utilisateurs qui cherchent le meilleur compromis entre fonctions connectees et prix.',
  },
  {
    id: 'neakasa-m1-2026',
    name: 'Neakasa M1',
    image: catLitterImages.neakasaM1,
    rating: 8.8,
    price: 379,
    amazonUrl: 'https://www.amazon.fr/Neakasa-Auto-nettoyant-hygi%C3%A9nique-Application-Plusieurs/dp/B0DG59SQ5P?th=1&linkCode=ll2&tag=sababou2026-21&linkId=9e79507bac1329fd5b776a7a00ffffed&ref_=as_li_ss_tl',
    category: 'meilleure-litiere-automatique-chat',
    summary:
      'Un modele ouvert pratique pour les chats qui refusent les litieres fermees, avec nettoyage automatique et controle via application.',
    pros: ['Design ouvert', 'Bon prix', 'Acces rassurant pour le chat'],
    cons: ['Odeurs moins controlees', 'Moins discret qu un bac ferme', 'Peut projeter davantage de litiere'],
    specs: ['Design ouvert', 'Application mobile', 'Grand acces', 'Sacs inclus selon offre'],
    recommendedFor: 'Les chats sensibles aux espaces fermes et les appartements ou l accessibilite prime.',
  },
  {
    id: 'catlink-luxury-pro-2026',
    name: 'CATLINK Luxury Pro',
    image: catLitterImages.catlinkLuxuryPro,
    rating: 8.9,
    price: 499,
    amazonUrl: 'https://www.amazon.fr/Catlink-Scooper-Intelligent-Self-Cleaning-litterbox/dp/B0BCCG3QQY?&linkCode=ll2&tag=sababou2026-21&linkId=afa0ad76176a1739fadd34d9996f668d&ref_=as_li_ss_tl',
    category: 'meilleure-litiere-automatique-chat',
    isPremium: true,
    summary:
      'Une litiere intelligente adaptee aux foyers multi-chats, avec suivi via application et bonne gestion des odeurs.',
    pros: ['Multi-chats', 'Connecte', 'Bonne gestion odeurs'],
    cons: ['Interface complexe', 'Encombrement important', 'Prix variable'],
    specs: ['Application mobile', 'Suivi des passages', 'Modes de nettoyage', 'Controle des odeurs'],
    recommendedFor: 'Les foyers avec plusieurs chats qui veulent suivre les habitudes de passage.',
  },
  {
    id: 'petsafe-scoopfree-2026',
    name: 'PetSafe ScoopFree',
    image: catLitterImages.petsafeScoopFree,
    rating: 8.3,
    price: 189,
    amazonUrl: 'https://www.amazon.fr/PetSafe-ScoopFree-automatique-autonettoyante-g%C3%A9n%C3%A9ration/dp/B07WZPJ2LW?&linkCode=ll2&tag=sababou2026-21&linkId=6571f6dd20538867c17c82c553f1f549&ref_=as_li_ss_tl',
    category: 'meilleure-litiere-automatique-chat',
    summary:
      'Une solution simple et rassurante pour automatiser le ramassage sans passer sur un robot ferme connecte.',
    pros: ['Tres simple', 'Ideal debutants', 'Entretien facile'],
    cons: ['Moins technologique', 'Odeurs plus moyennes', 'Consommables a prevoir'],
    specs: ['Rateau automatique', 'Bac ouvert', 'Litiere cristal selon version', 'Nettoyage simplifie'],
    recommendedFor: 'Les debutants qui veulent reduire la corvee sans application ni configuration complexe.',
  },
  {
    id: 'petsnowy-self-cleaning-2026',
    name: 'PetSnowy Self-Cleaning Litter Box',
    image: catLitterImages.petsnowy,
    rating: 8.7,
    price: 599,
    amazonUrl: 'https://www.amazon.fr/PetSnowy-automatique-autonettoyante-emballage-application/dp/B0CYC2WNRR?&linkCode=ll2&tag=sababou2026-21&linkId=e618678f4936fcc3722a26bfd265b0ab&ref_=as_li_ss_tl',
    category: 'meilleure-litiere-automatique-chat',
    summary:
      'Une litiere automatique premium, silencieuse et soignee, avec emballage automatique des dechets et controle via application.',
    pros: ['Tres silencieuse', 'Design premium', 'Application mobile'],
    cons: ['Prix eleve', 'Format ferme', 'Consommables specifiques'],
    specs: ['Auto-nettoyante', 'Auto-emballage', 'Application', 'Controle des odeurs'],
    recommendedFor: 'Les utilisateurs qui veulent une litiere silencieuse, moderne et tres confortable au quotidien.',
  },
  {
    id: 'petlibro-dockstream-smart-2026',
    name: 'PETLIBRO Dockstream Smart Fountain',
    image: catFountainImages.petlibroDockstream,
    rating: 9.3,
    price: 79,
    amazonUrl: amazonProductUrl('PETLIBRO Dockstream Smart Fountain fontaine eau chat'),
    category: 'meilleures-fontaines-a-eau-pour-chat-2026',
    isBestChoice: true,
    summary:
      'Une fontaine connectée très complète pour suivre l’hydratation du chat, filtrer l’eau en continu et recevoir des alertes utiles via application.',
    pros: ['Suivi via application', 'Filtration multicouche', 'Réservoir pratique pour plusieurs jours'],
    cons: ['Prix plus élevé qu’une fontaine simple', 'Application pas indispensable pour tous', 'Filtres à remplacer régulièrement'],
    specs: ['Fontaine connectée', 'Filtration multicouche', 'Notifications', 'Pompe basse tension'],
    recommendedFor: 'Les propriétaires qui veulent la meilleure fontaine à eau pour chat avec suivi, alertes et confort moderne.',
  },
  {
    id: 'catit-pixi-smart-fountain-2026',
    name: 'Catit PIXI Smart Fountain',
    image: catFountainImages.catitPixi,
    rating: 9.0,
    price: 89,
    amazonUrl: amazonProductUrl('Catit PIXI Smart Fountain fontaine eau chat'),
    category: 'meilleures-fontaines-a-eau-pour-chat-2026',
    isBestValue: true,
    summary:
      'Une fontaine à eau pour chat bien pensée, compacte, facile à placer dans un appartement et rassurante grâce à ses alertes et son débit visible.',
    pros: ['Format compact', 'Application et alertes utiles', 'Design rassurant pour les chats sensibles'],
    cons: ['Réservoir moins grand que certains modèles', 'Filtres propriétaires', 'Nettoyage fréquent recommandé'],
    specs: ['Application Catit PIXI', 'Débit visible', 'Filtre triple action', 'Indicateur LED'],
    recommendedFor: 'Les chats d’appartement et les maîtres qui veulent une fontaine connectée simple à vivre.',
  },
  {
    id: 'petkit-eversweet-solo-2-2026',
    name: 'PETKIT Eversweet Solo 2',
    image: catFountainImages.petkitEversweet,
    rating: 8.8,
    price: 59,
    amazonUrl: amazonProductUrl('PETKIT Eversweet Solo 2 fontaine eau chat'),
    category: 'meilleures-fontaines-a-eau-pour-chat-2026',
    summary:
      'Une fontaine sobre et moderne qui mise sur une eau plus propre, une pompe discrète et un usage quotidien simple pour encourager le chat à boire.',
    pros: ['Design discret', 'Pompe silencieuse', 'Bon contrôle du niveau d’eau'],
    cons: ['Pièces et filtres à surveiller', 'Capacité moyenne', 'Moins avancée que les modèles avec suivi détaillé'],
    specs: ['Pompe silencieuse', 'Filtration', 'Réservoir transparent', 'Design compact'],
    recommendedFor: 'Les foyers qui cherchent une fontaine fiable, peu bruyante et facile à intégrer dans la cuisine.',
  },
  {
    id: 'petsafe-drinkwell-platinum-2026',
    name: 'PetSafe Drinkwell Platinum',
    image: catFountainImages.petsafeDrinkwell,
    rating: 8.5,
    price: 69,
    amazonUrl: amazonProductUrl('PetSafe Drinkwell Platinum fontaine eau chat'),
    category: 'meilleures-fontaines-a-eau-pour-chat-2026',
    summary:
      'Un modèle classique avec grande capacité et cascade visible, intéressant pour les chats attirés par l’eau en mouvement.',
    pros: ['Grande capacité', 'Cascade motivante', 'Marque connue'],
    cons: ['Format encombrant', 'Nettoyage plus long', 'Design moins moderne'],
    specs: ['Grande réserve', 'Chute d’eau', 'Filtre charbon', 'Débit réglable'],
    recommendedFor: 'Les foyers avec un ou plusieurs chats qui boivent mieux quand l’eau coule de façon visible.',
  },
  {
    id: 'catit-flower-fountain-2026',
    name: 'Catit Flower Fountain',
    image: catFountainImages.catitFlower,
    rating: 8.6,
    price: 39,
    amazonUrl: amazonProductUrl('Catit Flower Fountain fontaine eau chat'),
    category: 'meilleures-fontaines-a-eau-pour-chat-2026',
    summary:
      'Une fontaine très populaire avec plusieurs flux d’eau, intéressante pour tester une fontaine sans exploser le budget.',
    pros: ['Prix accessible', 'Plusieurs options de débit', 'Pièces et filtres faciles à trouver'],
    cons: ['Plastique à nettoyer souvent', 'Moins premium qu’une fontaine inox ou céramique', 'Peut être légère pour les chats brusques'],
    specs: ['Réservoir environ 3 L', 'Triple action filter', 'Débit ajustable', 'Pompe basse tension'],
    recommendedFor: 'Les débutants qui veulent une fontaine simple, connue et facile à recommander pour un premier achat.',
  },
  {
    id: 'catit-pixi-classic-fountain-2026',
    name: 'Catit PIXI Fountain',
    image: catFountainImages.catitPixiClassic,
    rating: 8.4,
    price: 49,
    amazonUrl: amazonProductUrl('Catit PIXI Fountain fontaine eau chat'),
    category: 'meilleures-fontaines-a-eau-pour-chat-2026',
    summary:
      'La version non connectée de la gamme PIXI reste une bonne option si vous voulez un format compact sans application.',
    pros: ['Format compact', 'Design rassurant', 'Usage simple sans application'],
    cons: ['Moins de suivi que la version Smart', 'Capacité limitée pour plusieurs chats', 'Filtres à prévoir'],
    specs: ['Filtre triple action', 'Indicateur de niveau', 'Débit doux', 'Format compact'],
    recommendedFor: 'Les maîtres qui veulent une fontaine Catit compacte, simple et moins chère que la version connectée.',
  },
  {
    id: 'petlibro-granary-smart-feeder-2026',
    name: 'PETLIBRO Granary Smart Feeder',
    image: catFeederImages.petlibroGranary,
    rating: 9.3,
    price: 89,
    amazonUrl: amazonProductUrl('B0CWKXG6Z8'),
    category: 'meilleur-distributeur-automatique-croquettes-chat',
    isBestChoice: true,
    summary:
      'Un distributeur automatique connecté très complet pour programmer les repas, gérer les portions et garder les croquettes mieux protégées au quotidien.',
    pros: ['Programmation via application', 'Portions précises', 'Réservoir bien fermé'],
    cons: ['Connexion Wi-Fi à configurer', 'Prix plus élevé qu’un modèle simple', 'Nettoyage régulier conseillé'],
    specs: ['Wi-Fi', 'Programmation des repas', 'Réservoir croquettes', 'Portions réglables'],
    recommendedFor: 'Les propriétaires qui veulent le meilleur distributeur automatique de croquettes pour chat avec contrôle à distance.',
  },
  {
    id: 'philips-smart-pet-feeder-2026',
    name: 'Philips Distributeur de croquettes connecté',
    image: catFeederImages.philipsSmartPetFeeder,
    rating: 9.0,
    price: 129,
    amazonUrl: amazonProductUrl('B0CWVJBTZX'),
    category: 'meilleur-distributeur-automatique-croquettes-chat',
    isBestValue: true,
    summary:
      'Un distributeur connecté complet avec caméra, micro et notifications, intéressant pour surveiller les repas du chat à distance.',
    pros: ['Caméra intégrée', 'Application mobile pratique', 'Programmation des repas'],
    cons: ['Prix plus élevé qu’un modèle basique', 'Connexion Wi-Fi nécessaire', 'Fonctions vidéo pas indispensables pour tous'],
    specs: ['Caméra et micro', 'Application mobile', 'Détection de mouvement', 'Anti-obstruction'],
    recommendedFor: 'Les propriétaires qui veulent contrôler les repas et garder un œil sur leur chat pendant la journée.',
  },
  {
    id: 'petsafe-smart-feed-2026',
    name: 'PetSafe Smart Feed 2nd Generation',
    image: catFeederImages.petsafeSmartFeed,
    rating: 8.8,
    price: 159,
    amazonUrl: amazonProductUrl('B07ZJF8MW5'),
    category: 'meilleur-distributeur-automatique-croquettes-chat',
    isPremium: true,
    summary:
      'Un modèle premium pensé pour les foyers qui veulent une programmation fiable, des portions régulières et une marque reconnue dans les accessoires animaux.',
    pros: ['Marque reconnue', 'Programmation flexible', 'Grande réserve de croquettes'],
    cons: ['Budget plus élevé', 'Format assez volumineux', 'Fonctions connectées à prendre en main'],
    specs: ['Application', 'Programmation flexible', 'Grande capacité', 'Bol amovible'],
    recommendedFor: 'Les utilisateurs qui veulent un distributeur haut de gamme pour sécuriser les repas quotidiens.',
  },
  {
    id: 'xiaomi-smart-pet-food-feeder-2026',
    name: 'Xiaomi Smart Pet Food Feeder',
    image: catFeederImages.xiaomiSmartPetFoodFeeder,
    rating: 8.6,
    price: 99,
    amazonUrl: amazonProductUrl('B0BB4B2SL9'),
    category: 'meilleur-distributeur-automatique-croquettes-chat',
    summary:
      'Un distributeur connecté sobre et efficace, intéressant si vous utilisez déjà l’écosystème Xiaomi et que vous voulez programmer les repas depuis le téléphone.',
    pros: ['Design compact', 'Application Xiaomi Home', 'Bon rapport fonctions prix'],
    cons: ['Écosystème Xiaomi à accepter', 'Pas idéal pour très grosses croquettes', 'Disponibilité selon vendeurs'],
    specs: ['Application Xiaomi Home', 'Distribution automatique', 'Protection fraîcheur', 'Planification des repas'],
    recommendedFor: 'Les personnes qui veulent un distributeur connecté simple, discret et cohérent avec une maison déjà équipée Xiaomi.',
  },
  {
    id: 'catit-pixi-smart-feeder-2026',
    name: 'Catit PIXI Smart Feeder',
    image: catFeederImages.catitPixiSmartFeeder,
    rating: 8.5,
    price: 89,
    amazonUrl: amazonProductUrl('B093MF7X18'),
    category: 'meilleur-distributeur-automatique-croquettes-chat',
    summary:
      'Un distributeur automatique pour croquettes au design compact, pensé pour les chats et pilotable avec l’application Catit PIXI.',
    pros: ['Pensé pour les chats', 'Application PIXI', 'Format compact'],
    cons: ['Capacité plus limitée', 'Design très marqué', 'Moins polyvalent pour gros animaux'],
    specs: ['Application Catit PIXI', 'Portions programmées', 'Réservoir croquettes', 'Alertes pratiques'],
    recommendedFor: 'Les propriétaires qui veulent un distributeur compact spécialement orienté chat, simple à placer dans un appartement.',
  },
  {
    id: 'puppy-kitty-camera-feeder-2026',
    name: 'PUPPY KITTY Distributeur Croquettes Chat avec Caméra',
    image: catFeederImages.puppyKittyCameraFeeder,
    rating: 8.3,
    price: 109,
    amazonUrl: amazonProductUrl('B0BS3PVG7P'),
    category: 'meilleur-distributeur-automatique-croquettes-chat',
    summary:
      'Un distributeur automatique avec caméra 1080p, audio et vision nocturne, pratique pour vérifier les repas et parler au chat à distance.',
    pros: ['Caméra 1080p', 'Audio bidirectionnel', 'Vision nocturne'],
    cons: ['Application à configurer', 'Moins connu que les grandes marques', 'Dépend du Wi-Fi pour les fonctions caméra'],
    specs: ['Wi-Fi 2,4 GHz', 'Caméra 1080p', 'Audio', 'Repas programmés'],
    recommendedFor: 'Les maîtres qui veulent une solution connectée avec vidéo sans payer le prix des modèles les plus premium.',
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
  {
    slug: 'machine-a-cafe-a-grain-silencieuse',
    title: 'Machine à café à grain silencieuse : les 6 meilleurs modèles en 2026',
    heroImage: coffeeImages.philips5500,
    category: 'machine-a-cafe-a-grain-silencieuse',
    metaDescription:
      'Comparatif machine à café à grain silencieuse : espresso, cappuccino, broyeur, café en grains, réservoir d’eau, mousseur à lait et liens Amazon affiliés.',
    intro:
      'Choisir une machine à café à grain silencieuse, ce n’est pas chercher une machine totalement muette : le broyage des grains de café, la pompe haute pression, le rinçage et l’extraction d’un espresso font toujours du bruit. L’objectif est plutôt de trouver une machine à café automatique plus agréable le matin, avec broyeur intégré, mouture réglable, bon réservoir d’eau, bac à grains pratique et entretien simple. Ce comparatif rassemble 6 machines à café capables de préparer expresso, café long, cappuccino, latte, boissons lactées et tasses de café savoureuses, tout en limitant les nuisances par rapport aux cafetières expresso les plus bruyantes. Les liens Amazon ci-dessous utilisent ton identifiant d’affiliation.',
    guideTitle: 'Guide d’achat : comment choisir une machine à café à grain silencieuse ?',
    faq: [
      {
        q: 'Une machine à café à grain peut-elle être vraiment silencieuse ?',
        a: 'Non, pas totalement. Le broyeur, la percolation, la pompe et le rinçage produisent toujours du bruit. Une machine à café à grain silencieuse se distingue surtout par un broyeur mieux isolé, une pompe moins agressive et des cycles plus courts.',
      },
      {
        q: 'Quel type de broyeur choisir pour limiter le bruit ?',
        a: 'Un broyeur céramique ou un broyeur conique bien intégré à la machine est souvent plus agréable. La finesse de mouture doit rester réglable pour adapter l extraction aux arômes du café en grains.',
      },
      {
        q: 'Vaut-il mieux une machine automatique ou une cafetière expresso manuelle ?',
        a: 'Une machine automatique avec broyeur intégré est plus simple d’utilisation pour espresso, café long et cappuccino. Une machine manuelle avec porte-filtre peut être plus précise, mais demande un moulin à café séparé et plus de gestes.',
      },
      {
        q: 'Comment réduire le bruit devant la machine à café ?',
        a: 'Utilisez un support stable, videz le bac à marc de café, détartrez régulièrement, nettoyez le groupe d’extraction quand il est amovible et évitez de régler la mouture trop fine si la machine force.',
      },
      {
        q: 'Capsules, dosettes ou café en grains : que choisir ?',
        a: 'Les capsules et dosettes sont pratiques, mais le café en grains donne souvent une meilleure saveur, plus d’arômes et un coût par tasse plus bas. Une machine à café avec broyeur demande simplement plus d’entretien.',
      },
    ],
    mainCategory: 'electromenager',
  },
  {
    slug: 'meilleure-litiere-automatique-chat',
    title: 'Meilleure litiere automatique pour chat en 2026',
    heroImage: catLitterImages.litterRobot4,
    category: 'meilleure-litiere-automatique-chat',
    metaDescription:
      'Comparatif meilleure litiere automatique pour chat en 2026 : Litter-Robot 4, PETKIT Pura Max 2, Neakasa M1, CATLINK, PetSafe et PetSnowy.',
    intro:
      'Les litieres automatiques pour chats ont totalement change la vie des proprietaires de felins. Elles reduisent le nettoyage quotidien, limitent les mauvaises odeurs et gardent un bac plus propre entre deux entretiens complets. Ce comparatif selectionne 6 modeles populaires pour choisir selon votre budget, votre logement, le nombre de chats et le niveau de confort attendu.',
    guideTitle: 'Guide d achat : comment choisir une litiere automatique pour chat ?',
    faq: [
      {
        q: 'Quelle est la meilleure litiere automatique pour chat en 2026 ?',
        a: 'Litter-Robot 4 reste le meilleur choix global pour sa fiabilite, son controle des odeurs et son confort pour plusieurs chats.',
      },
      {
        q: 'Quelle litiere automatique choisir pour un appartement ?',
        a: 'PETKIT Pura Max 2 est un bon compromis ferme et connecte, tandis que Neakasa M1 convient mieux aux chats qui preferent un bac ouvert.',
      },
      {
        q: 'Une litiere automatique est-elle efficace contre les odeurs ?',
        a: 'Oui, surtout les modeles fermes comme Litter-Robot 4, PETKIT Pura Max 2, CATLINK Luxury Pro ou PetSnowy, a condition de vider le tiroir et nettoyer regulierement.',
      },
      {
        q: 'Une litiere automatique convient-elle a plusieurs chats ?',
        a: 'Plusieurs modeles conviennent aux foyers multi-chats, mais il faut verifier le gabarit, la capacite du tiroir et la frequence de vidage.',
      },
    ],
    mainCategory: 'chiens-chats',
  },
  {
    slug: 'meilleures-fontaines-a-eau-pour-chat-2026',
    title: 'Meilleures fontaines à eau pour chat en 2026',
    heroImage: catFountainImages.petlibroDockstream,
    category: 'meilleures-fontaines-a-eau-pour-chat-2026',
    metaDescription:
      'Comparatif des meilleures fontaines à eau pour chat en 2026 : PETLIBRO, Catit, PETKIT et PetSafe avec avis, avantages et liens Amazon.',
    intro:
      'Une fontaine à eau pour chat aide à garder une eau plus attractive qu’une gamelle classique. En 2026, les meilleurs modèles se distinguent par la filtration, le niveau sonore, la facilité de nettoyage, la capacité du réservoir et la sécurité de la pompe. Ce comparatif sélectionne 6 fontaines adaptées aux chats d’appartement, aux foyers avec plusieurs animaux, aux chats sensibles au bruit et aux maîtres qui veulent limiter les oublis de remplissage.',
    guideTitle: 'Guide d’achat : comment choisir une fontaine à eau pour chat ?',
    faq: [
      {
        q: 'Quelle est la meilleure fontaine à eau pour chat en 2026 ?',
        a: 'PETLIBRO Dockstream Smart Fountain est le meilleur choix global pour son suivi connecté, sa filtration et son confort quotidien.',
      },
      {
        q: 'Une fontaine à eau est-elle vraiment utile pour un chat ?',
        a: 'Oui, elle peut encourager certains chats à boire davantage grâce à une eau en mouvement, plus fraîche et plus attirante qu’une gamelle stagnante.',
      },
      {
        q: 'Quelle fontaine choisir pour un chat qui a peur du bruit ?',
        a: 'PETKIT Eversweet Solo 2 et Catit PIXI Fountain sont de bonnes pistes si vous cherchez une pompe discrète et un débit doux.',
      },
      {
        q: 'Faut-il choisir une fontaine en plastique, inox ou céramique ?',
        a: 'Le plastique est léger et abordable, l’inox se nettoie bien, tandis que la céramique peut offrir plus de stabilité. Le plus important reste un nettoyage régulier.',
      },
      {
        q: 'À quelle fréquence nettoyer une fontaine à eau pour chat ?',
        a: 'Il faut rincer le réservoir plusieurs fois par semaine, nettoyer complètement la fontaine régulièrement et remplacer les filtres selon les recommandations du fabricant.',
      },
    ],
    mainCategory: 'chiens-chats',
  },
  {
    slug: 'meilleur-distributeur-automatique-croquettes-chat',
    title: 'Meilleur distributeur automatique de croquettes pour chat en 2026',
    heroImage: catFeederImages.petlibroGranary,
    category: 'meilleur-distributeur-automatique-croquettes-chat',
    metaDescription:
      'Comparatif du meilleur distributeur automatique de croquettes pour chat : PETLIBRO, Philips, PetSafe, Xiaomi, Catit et PUPPY KITTY avec avis et liens Amazon.',
    intro:
      'Un distributeur automatique de croquettes pour chat aide à respecter les horaires de repas, contrôler les portions et éviter les gamelles trop remplies quand vous êtes absent. En 2026, les meilleurs modèles se distinguent par la précision des portions, la fiabilité du mécanisme, la facilité de nettoyage, la capacité du réservoir et les fonctions connectées. Ce comparatif vous aide à choisir un distributeur adapté à un chat gourmand, un chat d’appartement, un foyer multi-chats ou un maître qui veut programmer les repas sans stress.',
    guideTitle: 'Guide d’achat : comment choisir un distributeur automatique de croquettes pour chat ?',
    faq: [
      {
        q: 'Quel est le meilleur distributeur automatique de croquettes pour chat en 2026 ?',
        a: 'PETLIBRO Granary Smart Feeder est le meilleur choix global grâce à sa programmation connectée, ses portions réglables et son réservoir bien fermé.',
      },
      {
        q: 'Un distributeur automatique convient-il à un chat gourmand ?',
        a: 'Oui, s’il permet de régler précisément les portions et de diviser la ration quotidienne en plusieurs petits repas.',
      },
      {
        q: 'Faut-il choisir un distributeur connecté ou non connecté ?',
        a: 'Un modèle connecté est plus pratique pour modifier les repas à distance. Un modèle non connecté peut suffire si vos horaires sont toujours les mêmes.',
      },
      {
        q: 'Quelle capacité choisir pour un distributeur de croquettes chat ?',
        a: 'Pour un chat seul, un réservoir moyen suffit souvent. Pour plusieurs chats ou des absences régulières, une plus grande capacité devient plus confortable.',
      },
      {
        q: 'Comment éviter que les croquettes se bloquent ?',
        a: 'Utilisez des croquettes adaptées à la taille recommandée par le fabricant, nettoyez la trémie et évitez les croquettes trop grasses ou très irrégulières.',
      },
    ],
    mainCategory: 'chiens-chats',
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
