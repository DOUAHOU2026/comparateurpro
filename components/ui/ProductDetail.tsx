import type { Product } from '@/components/data/products';

const defaultBadges = ['Meilleur Choix', 'Rapport Qualité/Prix', 'Premium'];

type ProductDetailProps = {
  product: Product;
  badgeIndex: number;
};

export function ProductDetail({ product, badgeIndex }: ProductDetailProps) {
  const badgeText = product.isBestChoice
    ? 'Meilleur Choix'
    : product.isBestValue
      ? 'Meilleur Rapport Qualité/Prix'
      : product.isPremium
        ? 'Choix Premium'
        : defaultBadges[badgeIndex % defaultBadges.length];

  const badgeStyle = product.isBestChoice
    ? 'from-indigo-600 to-indigo-500 shadow-indigo-100'
    : product.isBestValue
      ? 'from-emerald-600 to-emerald-500 shadow-emerald-100'
      : 'from-amber-600 to-amber-500 shadow-amber-100';

  return (
    <div className="mb-10 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Image & Badge */}
        <div className="flex flex-col items-center justify-between bg-slate-50/70 p-8 lg:col-span-4 lg:border-r lg:border-slate-100">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored nofollow"
            className="flex h-64 w-full items-center justify-center rounded-xl bg-white p-4 shadow-sm border border-slate-100 transition-colors hover:border-indigo-300"
          >
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
          </a>
          <div className="mt-6 w-full text-center">
            <span className={`inline-block rounded-xl bg-gradient-to-r ${badgeStyle} px-5 py-2.5 text-sm font-extrabold text-white shadow-md`}>
              {badgeText}
            </span>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-between p-8 lg:col-span-8">
          <div>
            {/* Title & Rating */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored nofollow"
                className="text-2xl font-extrabold tracking-tight text-slate-900 transition-colors hover:text-indigo-600"
              >
                {product.name}
              </a>
              <div className="flex items-center gap-1.5 self-start rounded-xl bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-800 border border-amber-100 sm:self-center">
                <span>{product.rating}</span>
                <span className="text-amber-500">★</span>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-4 text-base leading-relaxed text-slate-600">{product.summary}</p>

            {/* Pros & Cons */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-emerald-50/20 p-4 border border-emerald-50/50">
                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Avantages</h4>
                <ul className="mt-3 space-y-2">
                  {product.pros.map((pro) => (
                    <li key={pro} className="flex gap-2.5 text-sm text-slate-600">
                      <span className="shrink-0 text-emerald-500 font-bold">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-rose-50/20 p-4 border border-rose-50/50">
                <h4 className="text-sm font-bold uppercase tracking-wider text-rose-800">Limites</h4>
                <ul className="mt-3 space-y-2">
                  {product.cons.map((con) => (
                    <li key={con} className="flex gap-2.5 text-sm text-slate-600">
                      <span className="shrink-0 text-rose-500 font-bold">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specs */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">Caractéristiques clés</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.specs.map((spec) => (
                  <span key={spec} className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommandation */}
            <div className="mt-8 rounded-xl border-l-4 border-indigo-500 bg-indigo-50/30 p-4">
              <p className="text-sm text-indigo-950">
                <strong className="font-bold">Idéal pour :</strong> {product.recommendedFor}
              </p>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 border-t border-slate-100 pt-6">
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored nofollow"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0 sm:w-auto"
            >
              <span>Vérifier le prix sur Amazon</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
