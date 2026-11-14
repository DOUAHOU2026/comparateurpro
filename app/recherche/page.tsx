import { Suspense } from 'react';
import { SearchResults } from './search-results';

export const metadata = {
  title: 'Recherche - ComparateurPro',
  description: 'Recherchez un comparatif ou un produit sur ComparateurPro.',
  alternates: {
    canonical: '/recherche',
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 p-10">Chargement...</div>}>
      <SearchResults />
    </Suspense>
  );
}
