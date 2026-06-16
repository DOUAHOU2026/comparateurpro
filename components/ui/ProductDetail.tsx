import type { Product } from '@/components/data/products';

const badges = ['Meilleur Choix', 'Meilleur Rapport Qualite/Prix', 'Premium'];

type ProductDetailProps = {
  product: Product;
  badgeIndex: number;
};

export function ProductDetail({ product, badgeIndex }: ProductDetailProps) {
  const badge = product.isBestChoice
    ? 'Meilleur Choix'
    : product.isBestValue
      ? 'Meilleur Rapport Qualite/Prix'
      : product.isPremium
        ? 'Premium'
        : badges[badgeIndex % badges.length];

  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-6 md:col-span-4 md:border-b-0 md:border-r">
          <img src={product.image} alt={product.name} className="h-64 w-full max-w-xs rounded-xl bg-white object-contain p-3 shadow-sm" />
          <div className="mt-4">
            <span className="rounded-lg bg-gray-900 px-4 py-2 font-bold text-white">{badge}</span>
          </div>
        </div>
        <div className="p-6 md:col-span-8">
          <h3 className="mb-2 text-2xl font-bold text-gray-900">{product.name}</h3>
          <p className="mb-4 text-gray-600">{product.summary}</p>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">{product.rating}</span>
            <span className="text-yellow-500">★</span>
            <span className="ml-2 text-sm text-gray-500">Score de comparaison interne</span>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-gray-900">Avantages</h4>
              <ul className="space-y-1">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-green-500">+</span> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold text-gray-900">Inconvenients</h4>
              <ul className="space-y-1">
                {product.cons.map((con) => (
                  <li key={con} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-red-500">-</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-6 border-t border-gray-200 pt-4">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Caracteristiques principales</h4>
            <div className="grid grid-cols-1 gap-x-4 gap-y-1 text-sm text-gray-600 sm:grid-cols-3">
              {product.specs.map((spec) => (
                <div key={spec}>{spec}</div>
              ))}
            </div>
          </div>

          <p className="mb-5 rounded-xl bg-gray-100 p-4 text-sm text-gray-700">
            <strong>Recommande pour :</strong> {product.recommendedFor}
          </p>

          <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700 sm:w-auto">
            Voir le prix sur Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
