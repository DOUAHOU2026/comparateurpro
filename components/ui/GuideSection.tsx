type GuideSectionProps = {
  title: string;
  category?: string;
};

const guidesByCategory: Record<string, { title: string; desc: string }[]> = {
  'meilleure-litiere-automatique-chat': [
    { title: 'Format', desc: 'Un bac fermé contrôle mieux les odeurs, un bac ouvert rassure les chats plus sensibles.' },
    { title: 'Odeurs', desc: 'Comparez tiroir à déchets, filtres, sacs et facilité de nettoyage régulier.' },
    { title: 'Connexion', desc: 'Une application aide a suivre les passages, le niveau du bac et les cycles automatiques.' },
  ],
  'meilleures-fontaines-a-eau-pour-chat-2026': [
    { title: 'Filtration', desc: 'Vérifiez le type de filtre, le prix des consommables et la facilité de remplacement.' },
    { title: 'Silence', desc: 'Une pompe discrète et un débit doux rassurent les chats prudents et conviennent mieux aux appartements.' },
    { title: 'Nettoyage', desc: 'Réservoir accessible, pièces démontables et matériau facile à rincer comptent autant que la capacité.' },
  ],
  'meilleur-distributeur-automatique-croquettes-chat': [
    { title: 'Portions', desc: 'Un bon distributeur doit régler précisément les quantités pour éviter surpoids, frustration ou repas oubliés.' },
    { title: 'Fiabilité', desc: 'Choisissez un mécanisme adapté à la taille des croquettes et un réservoir bien fermé pour limiter les blocages.' },
    { title: 'Nettoyage', desc: 'Trémie, bol et pièces en contact avec les croquettes doivent être faciles à démonter et à nettoyer.' },
  ],
  'machines-a-cafe-grain': [
    { title: 'Broyeur', desc: 'Un broyeur réglable aide à adapter la mouture au café et à vos goûts.' },
    { title: 'Boissons', desc: 'Comparez espresso, café long, cappuccino et recettes lactées selon vos habitudes.' },
    { title: 'Entretien', desc: 'Réservoir, groupe extractible et nettoyage automatique changent le confort au quotidien.' },
  ],
  'machine-a-cafe-a-grain-silencieuse': [
    { title: 'Niveau sonore', desc: 'Aucun broyeur n’est muet, mais certains cycles sont plus courts et mieux isolés.' },
    { title: 'Broyeur', desc: 'La qualité du broyeur influence le bruit, la régularité et les arômes du café.' },
    { title: 'Entretien', desc: 'Un entretien simple évite les blocages et garde une extraction régulière.' },
  ],
};

export function GuideSection({ title, category }: GuideSectionProps) {
  const items =
    category && guidesByCategory[category]
      ? guidesByCategory[category]
      : [
          { title: 'Usage', desc: 'Choisissez selon votre fréquence d’utilisation et votre foyer.' },
          { title: 'Budget', desc: 'Comparez prix, accessoires, garantie et coût d’entretien.' },
          { title: 'Praticité', desc: 'Vérifiez l’encombrement, le nettoyage et les réglages utiles.' },
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
