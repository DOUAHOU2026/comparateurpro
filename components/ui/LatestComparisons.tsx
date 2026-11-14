import { ProductCard } from './ProductCard';
import { getProductsByCategory, posts } from '@/components/data/products';

const recentPosts = [...posts].reverse().map((post) => {
  const postProducts = getProductsByCategory(post.category);
  const averageRating =
    postProducts.length > 0
      ? postProducts.reduce((total, product) => total + product.rating, 0) / postProducts.length
      : 0;

  return {
    slug: post.slug,
    title: post.title,
    image: post.heroImage,
    rating: Math.round((averageRating / 2) * 10) / 10,
    productsCount: postProducts.length,
  };
});

export function LatestComparisons() {
  return (
    <section id="articles" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Derniers comparatifs publiés
            </h2>
            <p className="mt-2 text-slate-500">
              Nos tests indépendants les plus récents basés sur des dizaines de critères d&apos;évaluation.
            </p>
          </div>
          <a href="#articles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700">
            Voir tous les comparatifs
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
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
