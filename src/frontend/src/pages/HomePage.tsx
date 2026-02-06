import { Hero } from '../components/Hero';
import { MapSection } from '../components/MapSection';
import { CountrySlideshow } from '../components/CountrySlideshow';
import { CategorySection } from '../components/CategorySection';

export function HomePage() {
  return (
    <>
      <Hero />
      <MapSection />
      <CountrySlideshow />
      <CategorySection />
    </>
  );
}
