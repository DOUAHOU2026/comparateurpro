import { posts } from '@/components/data/products';

export function CategoriesSection() {
  const electromenagerCount = posts.filter((p) => p.mainCategory === 'electromenager').length;
  const chiensChatsCount = posts.filter((p) => p.mainCategory === 'chiens-chats').length;

  const categories = [
    {
      id: 'electromenager',
      title: '🏠 Électroménager',
      count: electromenagerCount,
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'chiens-chats',
      title: '🐶🐱 Chiens & Chats',
      count: chiensChatsCount,
      icon: (
        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM9 10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="comparatifs" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Nos Univers de Comparatifs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Sélectionnez un univers pour consulter les meilleurs produits comparés et analysés par nos soins.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/${category.id}`}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 transition-colors group-hover:bg-indigo-100">
                {category.icon}
              </div>
              <div className="mt-5 text-center">
                <p className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                  {category.title}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-400">
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
