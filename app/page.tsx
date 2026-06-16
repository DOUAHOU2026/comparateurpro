import { CategoriesSection, HeroSection, LatestComparisons } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CategoriesSection />
      <LatestComparisons />
    </div>
  );
}
