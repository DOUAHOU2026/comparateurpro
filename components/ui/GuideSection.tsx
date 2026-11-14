export function GuideSection({ title, category }: { title: string; category?: string }) {
  const getGuideItems = (cat?: string) => {
    switch (cat) {
      case 'machines-a-cafe-grain':
        return [
          { title: 'Broyeur & Finesse', desc: 'Le matériau des meules (acier/céramique) et le nombre de niveaux de mouture influencent le goût.' },
          { title: 'Type de mousseur', desc: 'Buse vapeur classique pour les puristes ou carafe à lait automatique pour plus de simplicité.' },
          { title: 'Simplicité d entretien', desc: 'Optez pour un groupe d infusion amovible et des programmes de rinçage automatique.' },
        ];
      case 'machine-a-cafe-a-grain-silencieuse':
        return [
          { title: 'Niveau sonore (dB)', desc: 'Privilégiez les machines sous les 65 dB ou certifiées Quiet Mark.' },
          { title: 'Isolation du broyeur', desc: 'L isolation acoustique interne est plus importante que le type de meule.' },
          { title: 'Rinçage automatique', desc: 'Assurez-vous que le rinçage de démarrage et d arrêt ne soit pas trop bruyant.' },
        ];
      case 'meilleure-friteuse-sans-huile-2026':
        return [
          { title: 'Capacité & Format', desc: 'Simple cuve, double bac ou tiroir XXL modulable selon la taille de votre foyer.' },
          { title: 'Synchronisation', desc: 'Vérifiez la présence d une fonction pour synchroniser la fin de cuisson de deux bacs.' },
          { title: 'Plaque de gril', desc: 'Une grille en fonte d aluminium est idéale pour obtenir des grillades saisies à point.' },
        ];
      case 'meilleure-litiere-automatique':
        return [
          { title: 'Système de sécurité', desc: 'Des capteurs infrarouges, de poids et de mouvement pour stopper la machine si votre chat s en approche.' },
          { title: 'Gestion des odeurs', desc: 'Filtres à charbon actif, désodorisants intégrés ou compartiment à déchets hermétique.' },
          { title: 'Taille & Accès', desc: 'Vérifiez la taille de l ouverture et le volume intérieur, indispensable si vous avez un grand chat (type Maine Coon).' },
        ];
      default:
        return [
          { title: 'Autonomie', desc: 'Visez au moins 90 minutes pour les surfaces moyennes.' },
          { title: 'Systeme de nettoyage', desc: 'Comparez aspiration, lavage, vidange et entretien.' },
          { title: 'Navigation', desc: 'LiDAR, camera ou cartographie influencent la precision.' },
        ];
    }
  };

  const items = getGuideItems(category);

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

