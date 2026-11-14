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
  // --- FRITEUSES SANS HUILE ---
  {
    id: 'ninja-foodi-flexdrawer',
    name: 'Ninja Foodi FlexDrawer (AF500EU)',
    image: '/images/ninja-foodi-flexdrawer-af500eu.svg',
    rating: 9.6,
    price: 269,
    amazonUrl: amazonProductUrl('B0C43RD49P'),
    category: 'meilleure-friteuse-sans-huile-2026',
    isBestChoice: true,
    summary:
      'Le roi de la polyvalence grâce à son tiroir modulable géant qui se transforme en double zone en un clin d oeil.',
    pros: ['Cuve modulable (simple ou double)', 'Grande capacite ideale pour familles', 'Cuisson rapide et homogene'],
    cons: ['Assez encombrant', 'Consommation electrique', 'Plaques de cuisson parfois dures a nettoyer'],
    specs: ['Megazone de 10.4 L', 'Separateur de cuve amovible', 'Puissance 2470 W', '7 fonctions de cuisson'],
    recommendedFor: 'Les familles nombreuses ou ceux qui veulent cuisiner de grandes pieces.',
  },
  {
    id: 'moulinex-dual-easy-fry',
    name: 'Moulinex Dual Easy Fry & Grill (AL501810)',
    image: placeholder,
    rating: 9.2,
    price: 199,
    amazonUrl: amazonProductUrl('B0C8V4F5Q2'),
    category: 'meilleure-friteuse-sans-huile-2026',
    isBestValue: true,
    summary:
      'Une alternative double bac tres efficace et populaire en France, offrant une cuisson gril de qualite superieure.',
    pros: ['Excellent rapport qualite prix', 'Grille en fonte pour un vrai gril', 'Consommation electrique optimisee'],
    cons: ['Tiroirs non interchangeables', 'Mise en route parfois peu intuitive', 'Pas de hublot de surveillance'],
    specs: ['Capacite 8.3 L', 'Tiroirs asymetriques (5.2L et 3.1L)', 'Grille en fonte d aluminium', '8 programmes automatiques'],
    recommendedFor: 'Ceux qui cherchent une friteuse double bac solide, polyvalente avec fonction gril.',
  },
  {
    id: 'ninja-double-stack-xl',
    name: 'Ninja Double Stack XL (SL400EU)',
    image: placeholder,
    rating: 9.5,
    price: 249,
    amazonUrl: amazonProductUrl('B0D2NYL6M1'),
    category: 'meilleure-friteuse-sans-huile-2026',
    isPremium: true,
    summary:
      'Une innovation de format vertical qui resout le probleme de place sur le plan de travail tout en offrant la puissance de Ninja.',
    pros: ['Tres compact en largeur', 'Grande capacite sur deux niveaux', 'Chauffage tres homogene'],
    cons: ['Hauteur importante sous les placards', 'Grilles interieures chaudes a manipuler', 'Prix eleve'],
    specs: ['Format vertical double bac', 'Capacite 9.5 L', 'Grilles multicouches incluses', 'Technologie double flux d air'],
    recommendedFor: 'Les petites cuisines encombrees necessitant une grande capacite.',
  },
  {
    id: 'cosori-twinfry',
    name: 'Cosori TwinFry (10L)',
    image: placeholder,
    rating: 9.3,
    price: 229,
    amazonUrl: amazonProductUrl('B0CYCMLFCS'),
    category: 'meilleure-friteuse-sans-huile-2026',
    summary:
      'Un modele performant dote d une double resistance haut/bas qui evite d avoir a retourner les aliments en cours de cuisson.',
    pros: ['Double resistance de chauffe', 'Plus besoin de secouer les frites', 'Cuve geante modulable'],
    cons: ['Marque moins presente pour pieces detachees', 'Plastiques exterieurs sensibles', 'Cordon d alimentation court'],
    specs: ['Capacite 10 L', 'Double resistance (haut/bas)', 'Separateur de cuve amovible', 'Plage de temperature 35-240°C'],
    recommendedFor: 'Les personnes recherchant une cuisson ultra homogene et rapide sans surveillance active.',
  },
  {
    id: 'philips-airfryer-2000',
    name: 'Philips Airfryer Serie 2000 (HD9200/90)',
    image: placeholder,
    rating: 8.7,
    price: 99,
    amazonUrl: amazonProductUrl('B0CX8WY2Z9'),
    category: 'meilleure-friteuse-sans-huile-2026',
    summary:
      'La reference ideale pour debuter avec la friture sans huile sans se ruiner, avec toute la fiabilite de Philips.',
    pros: ['Prix tres accessible', 'Marque historique et fiable', 'Nettoyage tres facile au lave vaisselle'],
    cons: ['Pas de double zone', 'Capacite juste pour plus de 4 personnes', 'Pas d accessoires inclus'],
    specs: ['Capacite 6.2 L', 'Technologie Rapid Air', 'Panneau tactile', 'Cuve simple tiroir'],
    recommendedFor: 'Les couples ou petits foyers qui veulent un appareil simple et efficace.',
  },
  {
    id: 'cecotec-cecofry-9000',
    name: 'Cecotec Cecofry Dual Synergy 9000',
    image: placeholder,
    rating: 8.5,
    price: 129,
    amazonUrl: amazonProductUrl('B0BML1FCPT'),
    category: 'meilleure-friteuse-sans-huile-2026',
    summary:
      'Un modele economique ideal pour cuisiner en grande quantite a petit prix.',
    pros: ['Tarif imbattable pour un double bac', 'Puissance de cuisson elevee', 'Panneau de commande simple'],
    cons: ['Materiaux plus legers', 'Niveau sonore superieur', 'Isolation thermique perfectible'],
    specs: ['Capacite 9 L', 'Double tiroir symetrique (4.5L + 4.5L)', 'Puissance 2850 W', '6 modes predefinis'],
    recommendedFor: 'Les budgets limites qui souhaitent absolument un double bac de grande capacite.',
  },
  // --- MACHINES A CAFE SILENCIEUSES ---
  {
    id: 'delonghi-eletta-explore',
    name: 'DeLonghi Eletta Explore (ECAM450.55.S)',
    image: placeholder,
    rating: 9.5,
    price: 999,
    amazonUrl: amazonProductUrl('B09TGGQGML'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    isBestChoice: true,
    summary:
      'La machine la plus polyvalente et silencieuse du marche, offrant une variete impressionnante de boissons froides et chaudes.',
    pros: ['Extrement silencieuse', 'Boissons chaudes et froides', 'Entretien automatique simplifie'],
    cons: ['Budget tres important', 'Format assez imposant', 'Nombreuses options a regler'],
    specs: ['Broyeur silencieux', 'Technologie Cold Extraction', 'Plus de 50 recettes', 'Ecran tactile 3.5 pouces'],
    recommendedFor: 'Les amateurs de variete et de boissons lactees froides ou chaudes qui recherchent le silence.',
  },
  {
    id: 'philips-5500-silentbrew',
    name: 'Philips Serie 5500 SilentBrew (EP5546/70)',
    image: coffeeImages.philips5500,
    rating: 9.1,
    price: 649,
    amazonUrl: amazonProductUrl('B0CZ7D5DTQ'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    isBestValue: true,
    summary:
      'Une machine d entree/milieu de gamme tres reussie, combinant le systeme de lait LatteGo avec la technologie acoustique SilentBrew.',
    pros: ['Excellent rapport silence prix', 'Systeme de lait tre simple a laver', 'Interface intuitive'],
    cons: ['Mousse de lait perfectible', 'Un peu plus bruyante a la vidange', 'Broyeur reglable manuellement'],
    specs: ['Technologie SilentBrew', 'Systeme LatteGo', '14 boissons pre-enregistrees', 'Broyeur en ceramique'],
    recommendedFor: 'Les familles recherchant une machine polyvalente, facile a nettoyer et discrete.',
  },
  {
    id: 'melitta-purista',
    name: 'Melitta Purista (F23/0-101)',
    image: placeholder,
    rating: 8.8,
    price: 399,
    amazonUrl: amazonProductUrl('B07V49LYSL'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    summary:
      'Une machine compacte et discrete concentree sur l essentiel : un expresso de qualite tire dans le silence.',
    pros: ['Tres compacte', 'Tres discrete', 'Ideal pour expresso pur'],
    cons: ['Pas de buse vapeur pour le lait', 'Reservoir d eau limite (1.2L)', 'Interface simple sans ecran'],
    specs: ['Broyeur ultra-silencieux', 'Design ultra-compact (20cm)', 'Application Melitta Companion', 'Fonction cafe favori'],
    recommendedFor: 'Les puristes de l expresso avec peu de place dans leur cuisine.',
  },
  {
    id: 'siemens-eq6-plus',
    name: 'Siemens EQ.6 Plus s100 (TE651209RW)',
    image: placeholder,
    rating: 8.9,
    price: 699,
    amazonUrl: amazonProductUrl('B01MRE9Q84'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    summary:
      'Une reference de robustesse et de discretion avec son broyeur en ceramique de haute technologie.',
    pros: ['Silence de fonctionnement constant', 'Extraction de haute qualite', 'Nettoyage automatique de la buse'],
    cons: ['Consomme pas mal d eau pour rincer', 'Design classique en plastique', 'Taille moyenne'],
    specs: ['Broyeur ceramique ceramDrive', 'Systeme iAroma', 'Ecran tactile coffeeSelect', 'Nettoyage auto du systeme de lait'],
    recommendedFor: 'Ceux qui cherchent une machine fiable, discrete et simple a entretenir au quotidien.',
  },
  {
    id: 'melitta-barista-t-smart',
    name: 'Melitta Barista T Smart (F83/0-101)',
    image: coffeeImages.melittaBarista,
    rating: 9.4,
    price: 899,
    amazonUrl: amazonProductUrl('B077ZHWP5C'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    isPremium: true,
    summary:
      'Une machine double bac d une precision exceptionnelle, officiellement certifiee pour son silence par l organisme Quiet Mark.',
    pros: ['Certifiee Quiet Mark pour son silence', 'Double bac a grains tres pratique', 'Reglages hyper personnalisables'],
    cons: ['Machine encombrante', 'Entretien regulier indispensable', 'Interface riche a prendre en main'],
    specs: ['Certifie Quiet Mark', 'Double bac a grains (Bean Select)', '18 recettes pre-enregistrees', 'Connectivite Smart App'],
    recommendedFor: 'Les passionnes exigeants qui alternent entre plusieurs varietes de grains dans le calme.',
  },
  {
    id: 'delonghi-magnifica-start-milk',
    name: 'DeLonghi Magnifica Start Milk (ECAM220.60.B)',
    image: coffeeImages.magnifica,
    rating: 8.7,
    price: 449,
    amazonUrl: amazonProductUrl('B0BF2DXTND'),
    category: 'machine-a-cafe-a-grain-silencieuse',
    summary:
      'Un excellent compromis pour debuter dans le cafe en grains et les cappuccinos sans se ruiner ni subir trop de bruit.',
    pros: ['Boissons lactees automatiques abordables', 'Plutot discrete pour son prix', 'Broyeur robuste'],
    cons: ['Finition tout plastique', 'Reglages de temperature limites', 'Pas d ecran d information'],
    specs: ['Broyeur integre avec isolation', 'Carafe LatteCrema System', 'Panneau de commande soft touch', '4 recettes directes'],
    recommendedFor: 'Les amateurs de cappuccino qui veulent une machine automatique simple et abordable.',
  },
  {
    id: 'petkit-pura-max',
    name: 'PETKIT Pura Max',
    image: 'https://m.media-amazon.com/images/I/51r26R3nFfL._AC_SL1500_.jpg',
    rating: 9.6,
    price: 549,
    amazonUrl: amazonProductUrl('B09L7NY743'),
    category: 'meilleure-litiere-automatique',
    isBestChoice: true,
    summary:
      'La reference absolue des litieres automatiques connectees. Silencieuse, performante contre les odeurs et dotee d une application tres complete.',
    pros: ['Silence de fonctionnement exceptionnel', 'Traitement anti-odeurs intelligent', 'Suivi precis de la sante des chats'],
    cons: ['Consommables de la marque assez onereux', 'Taille exterieure volumineuse', 'Mise en route initiale de l application'],
    specs: ['Capacite 76 L', 'Systeme de securite xSecure', 'Desodorisant intelligent integre', 'Compatible tous types de litieres agglomerantes'],
    recommendedFor: 'Les proprietaires exigeants recherchant la litiere connectee la plus fiable et silencieuse.',
  },
  {
    id: 'neakasa-m1',
    name: 'Neakasa M1',
    image: 'https://m.media-amazon.com/images/I/61kM58vN16L._AC_SL1500_.jpg',
    rating: 9.4,
    price: 499,
    amazonUrl: amazonProductUrl('B0CF1N4V2P'),
    category: 'meilleure-litiere-automatique',
    isPremium: true,
    summary:
      'Un design "open-top" innovant sans dome ferme, ideal pour les chats peureux ou de grand gabarit qui refusent d entrer dans les modeles fermes.',
    pros: ['Design ouvert tres rassurant pour les chats', 'Ouverture geante pour Maine Coons', 'Nettoyage et vidage ultra simples'],
    cons: ['Pas d option de desodorisation active', 'Un peu plus bruyante lors de la rotation', 'Plus encombrante en largeur'],
    specs: ['Design Open-Top ouvert', 'Controle par application Wi-Fi', 'Capacite du bac 11.23 L', 'Capteurs infra-rouges et poids'],
    recommendedFor: 'Ceux qui ont de grands chats ou des chats craintifs refractaires aux litieres fermees.',
  },
  {
    id: 'catlink-baymax-lite',
    name: 'Catlink Baymax Lite',
    image: 'https://m.media-amazon.com/images/I/51YJvWd37eL._AC_SL1500_.jpg',
    rating: 9.1,
    price: 369,
    amazonUrl: amazonProductUrl('B0B8Z7X5M1'),
    category: 'meilleure-litiere-automatique',
    isBestValue: true,
    summary:
      'Une litiere automatique compacte et abordable sans faire de compromis sur la securite et le suivi connecte.',
    pros: ['Excellent rapport qualite prix', 'Taille plus compacte pour appartements', 'Systeme anti-pincement fiable'],
    cons: ['Bac a dechets plus petit (ideal 1 chat)', 'Esthetique un peu plus rustique', 'Application parfois lente a synchroniser'],
    specs: ['Capacite du tambour 65 L', 'Securite thermique et infrarouge', 'Bac a dechets 7 L', 'Connexion Wi-Fi 2.4G'],
    recommendedFor: 'Les proprietaires d un ou deux chats recherchant une litiere automatique efficace et abordable.',
  },
  {
    id: 'petsafe-scoopfree-ultra',
    name: 'PetSafe ScoopFree Ultra',
    image: 'https://m.media-amazon.com/images/I/71Y8L6Wz5rL._AC_SL1500_.jpg',
    rating: 8.8,
    price: 199,
    amazonUrl: amazonProductUrl('B000ELUQQS'),
    category: 'meilleure-litiere-automatique',
    summary:
      'La simplicite mecanique classique par rateau. Ne necessite aucun Wi-Fi ni application. Fonctionne avec des plateaux rechargeables de litiere de silice.',
    pros: ['Zero configuration Wi-Fi necessaire', 'Rateau metallique tres robuste', 'Tres efficace contre les odeurs d urine'],
    cons: ['Obligation d acheter les recharges de silice de la marque', 'Moins efficace pour les selles molles', 'Pas de suivi de sante connecte'],
    specs: ['Mecanisme de rateau automatique', 'Litiere de silice en cristaux', 'Plateau jetable pre-rempli', 'Compteur de passages pour chat'],
    recommendedFor: 'Ceux qui veulent une litiere automatique simple, sans application mobile et tres propre.',
  },
  {
    id: 'lalahome-realscooper',
    name: 'Lalahome RealScooper',
    image: 'https://m.media-amazon.com/images/I/61gA52Tir3L._AC_SL1500_.jpg',
    rating: 9.3,
    price: 599,
    amazonUrl: amazonProductUrl('B0C6XYPPH3'),
    category: 'meilleure-litiere-automatique',
    summary:
      'Une litiere automatique innovante qui imite le geste humain avec une pelle mecanique plutot que par rotation du tambour. Elle recharge la litiere automatiquement.',
    pros: ['Recharge automatique en litiere propre', 'Pas de rotation de tambour (rassurant)', 'Tres grande capacite pour plusieurs chats'],
    cons: ['Prix de depart important', 'Mecanisme complexe necessitant un entretien soigne', 'Assez lourde a deplacer'],
    specs: ['Pelle mecanique coulissante', 'Reservoir de litiere de reserve', 'Capacite totale 80 L', 'Capteurs de securite multi-zones'],
    recommendedFor: 'Les foyers multi-chats recherchant une autonomie maximale de plusieurs semaines.',
  },
  {
    id: 'amicura-smart-litter',
    name: 'Amicura Smart Cat Litter Box',
    image: 'https://m.media-amazon.com/images/I/612Coz3t7FL._AC_SL1500_.jpg',
    rating: 8.9,
    price: 299,
    amazonUrl: amazonProductUrl('B0CPHVSPFF'),
    category: 'meilleure-litiere-automatique',
    summary:
      'Un modele d entree de gamme de qualite avec un fonctionnement silencieux et une bonne securite anti-pincement pour vos chats.',
    pros: ['Prix d entree tres attractif', 'Design arrondi sympa', 'Rotation discrete'],
    cons: ['Plastiques interieurs plus fins', 'Application mobile basique', 'Nettoyage integral du tambour moins pratique'],
    specs: ['Capacite 60 L', 'Technologie de desodorisation UV', 'Tiroir a dechets 4 L', 'Capteurs de pression et de poids'],
    recommendedFor: 'Les petits budgets voulant tester une litiere automatique sans se ruiner.',
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
      'Les machines à café automatiques avec broyeur à grains offrent un café d une fraîcheur incomparable, mais leur niveau sonore lors du broyage peut être gênant, en particulier le matin ou dans une cuisine ouverte. En 2026, les fabricants proposent des technologies avancées d isolation phonique pour réduire le bruit sous le seuil de 65 dB. Ce comparatif présente les 6 meilleurs modèles de machines à café à grain silencieuses pour savourer votre café en toute discrétion.',
    guideTitle: 'Guide d achat : comment bien choisir une machine à café à grain silencieuse ?',
    faq: [
      {
        q: 'Quel niveau sonore pour une machine à café à grain silencieuse ?',
        a: 'Les machines classiques montent à 75-80 dB lors du broyage. Un modèle est considéré comme silencieux s il descend sous la barre des 65 à 67 dB, grâce à des isolations phoniques ou des meules optimisées.',
      },
      {
        q: 'Qu est-ce que la certification Quiet Mark ?',
        a: 'Il s agit d un label indépendant britannique qui teste et certifie le niveau sonore des appareils électroménagers. Melitta possède plusieurs modèles labellisés comme la Barista T Smart.',
      },
      {
        q: 'Le broyeur en céramique est-il plus silencieux que l acier ?',
        a: 'Pas nécessairement. Si le céramique fait un bruit légèrement plus sourd, c est surtout la qualité de l isolation acoustique autour du bloc broyeur qui détermine le niveau sonore final.',
      },
    ],
    mainCategory: 'electromenager',
  },
  {
    slug: 'meilleure-friteuse-sans-huile-2026',
    title: 'Meilleure friteuse sans huile 2026 : les 6 air fryers a choisir',
    heroImage: '/images/ninja-foodi-flexdrawer-af500eu.svg',
    category: 'meilleure-friteuse-sans-huile-2026',
    metaDescription:
      'Comparatif meilleure friteuse sans huile 2026 : Ninja, Philips, Cosori, Moulinex et Instant avec capacite, avantages, limites et liens Amazon affilies.',
    intro:
      'Les friteuses sans huile (air fryers) ont révolutionné nos cuisines en permettant de préparer des frites croustillantes et de nombreux plats avec jusqu à 75% d huile en moins. En 2026, les modèles se modernisent avec des tiroirs modulables (Megazone), des formats verticaux ultra-compacts et des résistances doubles. Notre comparatif vous présente les 6 meilleures friteuses sans huile en France selon vos besoins, votre budget et l espace disponible sur votre comptoir.',
    guideTitle: 'Guide d achat : comment bien choisir un air fryer en 2026 ?',
    faq: [
      {
        q: 'Faut-il choisir une friteuse simple ou double bac ?',
        a: 'La double zone est idéale pour cuire deux aliments à des températures différentes simultanément (ex: frites et poulet) et finir en même temps grâce à la fonction de synchronisation.',
      },
      {
        q: 'Quelle capacité d air fryer choisir ?',
        a: 'Comptez environ 3 à 4 litres pour 1 à 2 personnes, 5 à 7 litres pour une famille de 4 personnes, et 8 à 10 litres (ou double bac) pour les familles nombreuses ou le batch cooking.',
      },
      {
        q: 'Peut-on faire un poulet entier dans un air fryer ?',
        a: 'Oui, à condition d avoir un modèle d au moins 6 à 7 litres en cuve simple, ou un modèle XXL modulable comme la Ninja FlexDrawer (10.4L) ou la Cosori TwinFry.',
      },
    ],
    mainCategory: 'electromenager',
  },
  {
    slug: 'meilleure-litiere-automatique',
    title: 'Meilleure litière automatique pour chat : les 6 bacs autonettoyants à choisir',
    heroImage: 'https://m.media-amazon.com/images/I/51r26R3nFfL._AC_SL1500_.jpg',
    category: 'meilleure-litiere-automatique',
    metaDescription:
      'Comparatif meilleure litière automatique pour chat 2026 : PETKIT, Neakasa, Catlink, PetSafe, Amicura et Lalahome avec avantages, limites et guide d achat.',
    intro:
      'Nettoyer la litière de son chat est l une des corvées les plus désagréables pour tout propriétaire. Heureusement, les litières automatiques autonettoyantes (ou "Pet Tech") ont révolutionné notre quotidien en tamisant et évacuant les déchets après chaque passage de votre animal. En 2026, les modèles se distinguent par leur discrétion acoustique, leur gestion active des odeurs (UV, charbon) et leur connectivité avancée pour le suivi de santé. Notre comparatif vous présente les 6 meilleures litières automatiques sur le marché français.',
    guideTitle: 'Guide d achat : comment bien choisir une litière automatique pour chat ?',
    faq: [
      {
        q: 'Comment fonctionne une litière automatique ?',
        a: 'La grande majorité des modèles utilise un tambour rotatif. Quelques minutes après le passage du chat (détecté par des capteurs de poids), le tambour tourne pour faire passer la litière à travers une grille. Les agglomérats sales tombent dans un tiroir à déchets fermé, tandis que la litière propre est conservée.',
      },
      {
        q: 'Quel type de litière faut-il utiliser ?',
        a: 'Il est impératif d utiliser une litière agglomérante de bonne qualité (argile fine, bentonite, ou certaines litières végétales fines). Si la litière n agglomère pas bien, le mécanisme ne pourra pas séparer les déchets de la litière propre.',
      },
      {
        q: 'Ces litières sont-elles sûres pour les chats ?',
        a: 'Oui, les modèles récents possèdent de nombreuses sécurités redondantes : des capteurs de poids qui stoppent la machine si un chat entre, des radars infrarouges anti-pincement et des arrêts d urgence. Il est toutefois déconseillé de les utiliser en mode automatique pour les chatons de moins de 1.5 kg car ils ne sont pas assez lourds pour déclencher les capteurs.',
      },
      {
        q: 'Combien de temps peut-on laisser la litière sans la vider ?',
        a: 'Pour un seul chat, le tiroir à déchets a généralement une autonomie de 1 à 2 semaines selon la capacité du modèle. Il suffit alors de retirer le sac hermétique et de le remplacer.',
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
