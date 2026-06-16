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
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
