'use client';

export function SearchBar() {
  return (
    <form action="/recherche" method="get" className="relative w-full max-w-xs">
      <input
        type="text"
        name="q"
        placeholder="Rechercher un produit..."
        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-12 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />
      <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <button
        type="submit"
        aria-label="Rechercher"
        className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </form>
  );
}
