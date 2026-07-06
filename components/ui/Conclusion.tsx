type ConclusionProps = {
  category?: string;
};

const conclusionsByCategory: Record<string, string> = {
  'meilleure-litiere-automatique-chat':
    'Litter-Robot 4 reste le choix le plus complet, PETKIT Pura Max 2 offre le meilleur compromis prix fonctions, et CATLINK Luxury Pro convient bien aux foyers multi-chats. Pour un chat réticent aux bacs fermés, Neakasa M1 est une option plus ouverte.',
  'meilleures-fontaines-a-eau-pour-chat-2026':
    'PETLIBRO Dockstream Smart Fountain est le choix le plus complet pour une fontaine à eau connectée. Catit PIXI Smart Fountain offre un excellent compromis pour un appartement, PETKIT Eversweet Solo 2 mise sur la discrétion, PetSafe Drinkwell Platinum convient aux grands réservoirs, et Catit Flower Fountain reste une option simple pour démarrer.',
  'meilleur-distributeur-automatique-croquettes-chat':
    'PETLIBRO Granary Smart Feeder est le meilleur choix global pour programmer les repas d’un chat avec précision. Philips apporte une option connectée avec caméra, PetSafe Smart Feed vise un usage premium, Xiaomi Smart Pet Food Feeder convient aux foyers déjà équipés Xiaomi, Catit PIXI Smart Feeder reste compact, et PUPPY KITTY est intéressant pour surveiller les repas en vidéo.',
  'machines-a-cafe-grain':
    'La meilleure machine à café à grain dépend de vos boissons préférées, du niveau de personnalisation voulu et de la facilité d’entretien. Un bon broyeur, un réservoir pratique et des réglages simples font la différence au quotidien.',
  'machine-a-cafe-a-grain-silencieuse':
    'Une machine à café à grain silencieuse reste toujours audible pendant le broyage, mais les meilleurs modèles réduisent les nuisances avec un broyeur mieux intégré, des cycles plus courts et un entretien bien guidé.',
};

export function Conclusion({ category }: ConclusionProps) {
  const conclusion =
    category && conclusionsByCategory[category]
      ? conclusionsByCategory[category]
      : 'Le meilleur produit dépend de votre budget, de votre usage quotidien et des critères qui comptent le plus pour vous. Comparez toujours les caractéristiques, les limites et le prix actualisé avant achat.';

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">Notre conclusion</h2>
      <p className="mb-6 text-lg text-gray-700">{conclusion}</p>
      <div className="mb-8 text-center">
        <a href="#comparatif" className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-800">
          Voir à nouveau le tableau comparatif
        </a>
      </div>
      <div className="text-sm text-gray-500">
        <p>
          Les liens Amazon sont des liens affiliés. Une commission peut être perçue si vous achetez via ces liens,
          sans impact direct sur le prix affiché.
        </p>
      </div>
    </>
  );
}
