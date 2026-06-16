import type { Product } from '@/components/data/products';

type ComparisonTableProps = {
  products: Product[];
};

export function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900">Notre comparatif des meilleurs aspirateurs robots</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Produit</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Note</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Prix</th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Bouton</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="transition hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-4">
                    <img src={product.image} alt={product.name} className="h-16 w-16 rounded-lg bg-gray-100 object-cover" />
                    <div>
                      <p className="font-semibold text-gray-900">{product.name}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        {product.isBestChoice && <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800">Meilleur Choix</span>}
                        {product.isBestValue && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-800">Meilleur Rapport Q/P</span>}
                        {product.isPremium && <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">Premium</span>}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-gray-900">{product.rating}</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                </td>
                <td className="px-4 py-4 font-medium text-gray-700">
                  {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </td>
                <td className="px-4 py-4 text-right">
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700">
                    Voir sur Amazon
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
