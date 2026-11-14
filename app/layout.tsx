import type { Metadata } from 'next';
import './globals.css';
import { CookieConsent, Footer, Navbar } from '@/components/ui';

export const metadata: Metadata = {
  metadataBase: new URL('https://comparateurpr.online'),
  title: 'ComparateurPro - Tests indépendants et avis vérifiés',
  description:
    "Les 6 meilleurs produits avant d'acheter. Comparatifs objectifs, tests experts, prix du moment.",
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'tLZdQZopW8IouCRJ7835QImll2xCuINBpb2F2HWG2Z4',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="font-sans antialiased">
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
