'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getProductsByCategory, posts, products } from '@/components/data/products';

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function getPostRating(category: string) {
  const categoryProducts = getProductsByCategory(category);
  if (categoryProducts.length === 0) {
    return 0;
  }

  const average = categoryProducts.reduce((total, product) => total + product.rating, 0) / categoryProducts.length;
  return Math.round((average / 2) * 10) / 10;
}

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const normalizedQuery = normalize(query);

  const results = useMemo(() => {
    const scoredPosts = posts
      .map((post) => {
        const categoryProducts = products.filter((product) => product.category === post.category);
        const searchable = normalize(
          [
            post.title,
            post.metaDescription,
            post.intro,
            post.category,
            post.mainCategory,
            ...categoryProducts.map((product) => `${product.name} ${product.summary} ${product.specs.join(' ')}`),
          ].join(' ')
        );
        const queryWords = normalizedQuery.split(' ').filter(Boolean);
        const score = queryWords.length === 0 ? 1 : queryWords.reduce((total, word) => total + (searchable.includes(word) ? 1 : 0), 0);

        return { post, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);

    return scoredPosts.map(({ post }) => ({
      slug: post.slug,
      title: post.title,
      description: post.metaDescription,
      image: post.heroImage,
      productsCount: getProductsByCategory(post.category).length,
      rating: getPostRating(post.category),
    }));
  }, [normalizedQuery]);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Recherche</p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            {query ? `Resultats pour "${query}"` : 'Tous les comparatifs'}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Trouvez rapidement les guides, comparatifs et produits disponibles sur le site.
          </p>
        </header>

        <form action="/recherche" method="get" className="mb-8 flex max-w-2xl gap-2">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Exemple : aspirateur, cafe, litiere, chat..."
            className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />
          <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">
            Rechercher
          </button>
        </form>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <a
                key={result.slug}
                href={`/${result.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative bg-slate-100">
                  <img src={result.image} alt={result.title} className="h-48 w-full object-contain p-4 transition group-hover:scale-105" />
                  <div className="absolute right-3 top-3 rounded-lg bg-slate-950/85 px-2 py-1 text-xs font-bold text-white">
                    {result.rating} / 5
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold leading-snug text-slate-950 group-hover:text-indigo-600">{result.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-slate-600">{result.description}</p>
                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-indigo-600">
                    {result.productsCount} produits compares
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <h2 className="text-lg font-bold text-slate-950">Aucun resultat trouve</h2>
            <p className="mt-2 text-sm text-slate-600">
              Essayez avec un mot plus simple comme aspirateur, cafe, chat, litiere, fontaine ou friteuse.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
