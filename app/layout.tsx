import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ComparateurPro - Tests independants et avis verifies',
  description:
    "Les 6 meilleurs produits avant d'acheter. Comparatifs objectifs, tests experts, prix du moment.",
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
