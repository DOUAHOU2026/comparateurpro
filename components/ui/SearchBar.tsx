'use client';

import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <form action={query ? '/aspirateurs-robots' : undefined} className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Rechercher un produit..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />
      <span className="pointer-events-none absolute left-3 top-2.5 text-slate-400">
        <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </form>
  );
}
