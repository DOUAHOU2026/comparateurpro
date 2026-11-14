export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight" aria-label="ComparateurPro">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-200/50">
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <span className="text-slate-900">
        Comparateur<span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">Pro</span>
      </span>
    </a>
  );
}
