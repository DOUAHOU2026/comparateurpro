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
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Derniers comparatifs publies</h2>
          <a href="#articles" className="font-medium text-indigo-600 hover:text-indigo-700">
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
