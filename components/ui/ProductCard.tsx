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
    <a
      href={`/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5"
    >
      <div className="relative overflow-hidden bg-slate-50">
        <img
          src={post.image}
          alt={post.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-slate-900/80 px-2 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm">
          <span className="text-amber-400">★</span>
          {post.rating} / 5
        </div>
      </div>
      <div className="p-5">
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-600">
          {post.title}
        </h3>
        <p className="mt-2 text-xs font-semibold text-slate-400">
          {post.productsCount} {post.productsCount > 1 ? 'produits comparés' : 'produit comparé'}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
          Voir le comparatif
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
