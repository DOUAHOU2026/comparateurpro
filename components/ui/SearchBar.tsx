'use client';

import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <form action={query ? '/aspirateurs-robots' : undefined} className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Rechercher..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
      />
      <span className="pointer-events-none absolute left-3 top-2.5 text-gray-400">⌕</span>
    </form>
  );
}
