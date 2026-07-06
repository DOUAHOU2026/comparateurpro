export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">OK</span>
              Comparateur<span className="text-indigo-500">Pro</span>
            </div>
            <p className="text-sm text-gray-400">Comparatifs objectifs, tests indépendants, avis vérifiés.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/electromenager" className="hover:text-indigo-400">Électroménager</a></li>
              <li><a href="/chiens-chats" className="hover:text-indigo-400">Chiens & Chats</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Guides récents</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/meilleure-litiere-automatique-chat" className="hover:text-indigo-400">Litières automatiques</a></li>
              <li><a href="/meilleures-fontaines-a-eau-pour-chat-2026" className="hover:text-indigo-400">Fontaines à eau pour chat</a></li>
              <li><a href="/meilleur-distributeur-automatique-croquettes-chat" className="hover:text-indigo-400">Distributeurs de croquettes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/mentions-legales" className="hover:text-indigo-400">Mentions légales</a></li>
              <li><a href="/confidentialite" className="hover:text-indigo-400">Confidentialité</a></li>
              <li><a href="/cookies" className="hover:text-indigo-400">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="space-y-2 border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>2026 ComparateurPro. Les prix, disponibilités et caractéristiques sont sujets à variation.</p>
          <p>En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.</p>
        </div>
      </div>
    </footer>
  );
}