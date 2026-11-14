import type { Product } from '@/components/data/products';

type ComparisonTableProps = {
  products: Product[];
  title?: string;
};

export function ComparisonTable({ products, title }: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-6">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          {title || 'Tableau comparatif des modèles sélectionnés'}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/75">
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Produit</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Note Globale</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Prix</th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">Lien</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => {
              const rowHighlight = product.isBestChoice
                ? 'bg-indigo-50/20 hover:bg-indigo-50/40'
                : 'hover:bg-slate-50/50';

              return (
                <tr key={product.id} className={`transition-colors duration-150 ${rowHighlight}`}>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored nofollow"
                        className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5 shadow-sm transition-colors hover:border-indigo-300"
                      >
                        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
                      </a>
                      <div>
                        <a
                          href={product.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="font-bold text-slate-900 transition-colors hover:text-indigo-600 block"
                        >
                          {product.name}
                        </a>
                        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                          {product.isBestChoice && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-indigo-700 border border-indigo-100">
                              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                              Meilleur Choix
                            </span>
                          )}
                          {product.isBestValue && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-100">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              Rapport Qualité/Prix
                            </span>
                          )}
                          {product.isPremium && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 border border-amber-100">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                              Premium
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-2.5 py-1 text-sm font-bold text-amber-800 border border-amber-100">
                      <span>{product.rating}</span>
                      <svg className="h-4 w-4 fill-amber-500 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-slate-900">Voir le prix</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Actualisé en temps réel</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored nofollow"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow active:translate-y-0"
                    >
                      <span>Vérifier</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
