import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="/aspirateurs-robots" className="transition hover:text-indigo-600">
              Electromenager
            </a>
            <a href="#articles" className="transition hover:text-indigo-600">
              Tech
            </a>
            <a href="#comparatifs" className="transition hover:text-indigo-600">
              Maison
            </a>
          </nav>
        </div>
        <SearchBar />
      </div>
    </header>
  );
}
