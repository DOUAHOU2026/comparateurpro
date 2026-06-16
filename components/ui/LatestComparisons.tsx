import { ProductCard } from './ProductCard';

const recentPosts = [
  {
    slug: 'machines-a-cafe-grain',
    title: 'Les 6 meilleures machines a cafe a grain en 2026',
    image: 'https://eu-images.contentstack.com/v3/assets/blt2252ade9ce4d4191/bltb51ed8711dfb7fff/687a5bc66d1e99122f18bca6/USCA_MenuFilterSortByCard_Rivelia_780x600_20250718.jpg',
    rating: 4.9,
    productsCount: 6,
  },
  {
    slug: 'aspirateurs-robots',
    title: 'Les 6 meilleurs aspirateurs robots en 2026',
    image: '/images/placeholder.svg',
    rating: 4.8,
    productsCount: 6,
  },
  {
    slug: 'aspirateurs-robots',
    title: 'Aspirateurs robots : comparatif complet',
    image: '/images/placeholder.svg',
    rating: 4.7,
    productsCount: 6,
  },
  {
    slug: 'machines-a-cafe-grain',
    title: 'Machines a cafe a grain : comparatif complet',
    image: 'https://www.melitta-international.com/content/dam/melitta-cp-c/me-cp/kategorie-kaffeevollautomaten/01_alle-kaffeevollautomaten---produktlisting-seite/01_alle-kaffeevollautomaten---produktlisting-seite/barista-ts-smart/BaristaTS_Smart_black.png',
    rating: 4.6,
    productsCount: 6,
  },
];

export function LatestComparisons() {
  return (
    <section id="articles" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Derniers comparatifs publies</h2>
          <a href="/machines-a-cafe-grain" className="font-medium text-indigo-600 hover:text-indigo-700">
            Voir tout
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <ProductCard key={`${post.slug}-${index}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
