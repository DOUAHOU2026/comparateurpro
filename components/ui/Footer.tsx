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
            <p className="text-sm text-gray-400">Comparatifs objectifs, tests independants, avis verifies.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/machines-a-cafe-grain" className="hover:text-indigo-400">Cafe & cuisine</a></li>
              <li><a href="/aspirateurs-robots" className="hover:text-indigo-400">Electromenager</a></li>
              <li><a href="/aspirateurs-robots" className="hover:text-indigo-400">Maison & Deco</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/mentions-legales" className="hover:text-indigo-400">Mentions legales</a></li>
              <li><a href="/confidentialite" className="hover:text-indigo-400">Confidentialite</a></li>
              <li><a href="/cookies" className="hover:text-indigo-400">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Newsletter</h4>
            <p className="mb-3 text-sm text-gray-400">Recevez nos nouveaux comparatifs.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Votre email" className="min-w-0 flex-1 rounded border border-gray-700 bg-gray-800 px-3 py-2 text-sm outline-none focus:border-indigo-500" />
              <button type="submit" className="rounded bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">OK</button>
            </form>
          </div>
        </div>
        <div className="space-y-2 border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p>2026 ComparateurPro. Les prix, disponibilites et caracteristiques sont sujets a variation.</p>
          <p>En tant que Partenaire Amazon, nous realisons un benefice sur les achats remplissant les conditions requises.</p>
        </div>
      </div>
    </footer>
  );
}
