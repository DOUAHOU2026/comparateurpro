export function GuideSection({ title }: { title: string }) {
  const items = [
    { title: 'Autonomie', desc: 'Visez au moins 90 minutes pour les surfaces moyennes.' },
    { title: 'Systeme de nettoyage', desc: 'Comparez aspiration, lavage, vidange et entretien.' },
    { title: 'Navigation', desc: 'LiDAR, camera ou cartographie influencent la precision.' },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-indigo-600">
              {index + 1}
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
