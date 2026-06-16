import { ProductCard } from './ProductCard';

const recentPosts = [
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
    slug: 'aspirateurs-robots',
    title: 'Robots de nettoyage : les modeles a comparer',
    image: '/images/placeholder.svg',
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
          <a href="/aspirateurs-robots" className="font-medium text-indigo-600 hover:text-indigo-700">
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
