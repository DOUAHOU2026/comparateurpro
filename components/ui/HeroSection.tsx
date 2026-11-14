export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-32">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_45%)]" />
      <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Intro Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          Guides &amp; Comparatifs 2026
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Trouvez les <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">6 meilleurs produits</span> <br className="hidden sm:block" />
          avant d&apos;acheter
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Comparatifs impartiaux, tests objectifs et avis d&apos;experts pour acheter en toute confiance sans payer trop cher.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#comparatifs"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 active:translate-y-0"
          >
            Explorer les catégories
          </a>
          <a
            href="#articles"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800 active:translate-y-0"
          >
            Derniers comparatifs
          </a>
        </div>
      </div>
    </section>
  );
}
