export function CategoriesSection() {
  const categories = [
    {
      id: 'machines-a-cafe-grain',
      title: 'Café & Cuisine',
      count: 1,
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.72 13.78L15 12V5h4a2 2 0 012 2v4a2 2 0 01-2 2h-.28M15 3H9a2 2 0 00-2 2v7a5 5 0 005 5h3m-6-8h6M3 17v2a1 1 0 001 1h16a1 1 0 001-1v-2" />
        </svg>
      ),
    },
    {
      id: 'aspirateurs-robots',
      title: 'Aspirateurs Robots',
      count: 1,
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'aspirateurs-sans-fil',
      title: 'Aspirateurs Sans Fil',
      count: 1,
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'maison',
      title: 'Maison & Déco',
      count: 1,
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="comparatifs" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Catégories Populaires
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Sélectionnez une catégorie pour consulter les meilleurs produits comparés en détails.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/${category.id}`}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 transition-colors group-hover:bg-indigo-100 sm:h-14 sm:w-14">
                {category.icon}
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-slate-900 transition-colors group-hover:text-indigo-600">
                  {category.title}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {category.count} {category.count > 1 ? 'comparatifs' : 'comparatif'}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
