type ProductCardProps = {
  post: {
    slug: string;
    title: string;
    image: string;
    rating: number;
    productsCount: number;
  };
};

export function ProductCard({ post }: ProductCardProps) {
  return (
    <a href={`/${post.slug}`} className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 rounded bg-white/90 px-2 py-1 text-sm font-bold text-gray-900 shadow-sm backdrop-blur">
          {post.rating} / 5
        </div>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 mb-2 font-semibold text-gray-900 transition group-hover:text-indigo-600">
          {post.title}
        </h3>
        <p className="mb-3 text-xs text-gray-500">{post.productsCount} produits compares</p>
        <div className="flex items-center gap-2 text-sm font-medium text-indigo-600">Voir le test →</div>
      </div>
    </a>
  );
}
