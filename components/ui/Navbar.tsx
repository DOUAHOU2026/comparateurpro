import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="/electromenager" className="transition hover:text-indigo-600 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
              Électroménager
            </a>
            <a href="/chiens-chats" className="transition hover:text-indigo-600 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full">
              Chiens & Chats
            </a>
          </nav>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}
