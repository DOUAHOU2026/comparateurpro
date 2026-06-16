export function HeroSection() {
  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          Trouvez les 6 meilleurs produits <br className="hidden sm:block" />
          <span className="text-indigo-600">avant d&apos;acheter</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl">
          Comparatifs independants, tests objectifs et avis experts sur les produits tendance de 2026.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#comparatifs" className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700">
            Explorer les categories
          </a>
          <a href="#articles" className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
            Derniers tests
          </a>
        </div>
      </div>
    </section>
  );
}
