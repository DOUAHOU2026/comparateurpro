const categories = [
  { id: 'machines-a-cafe-grain', title: 'Cafe & cuisine', count: 1, icon: '01' },
  { id: 'aspirateurs-robots', title: 'Electromenager', count: 1, icon: '02' },
  { id: 'aspirateurs-sans-fil', title: 'Aspirateurs sans fil', count: 1, icon: '03' },
  { id: 'maison', title: 'Maison & Deco', count: 1, icon: '04' },
];

export function CategoriesSection() {
  return (
    <section id="comparatifs" className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-xl font-bold text-gray-900 sm:text-2xl">Categories populaires</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {categories.map((category) => (
            <a key={category.id} href={`/${category.id}`} className="group flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sm font-bold text-indigo-600 shadow-sm transition group-hover:bg-indigo-50 sm:h-14 sm:w-14">
                {category.icon}
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-900">{category.title}</p>
                <p className="mt-1 text-xs text-gray-500">{category.count} comparatifs</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
