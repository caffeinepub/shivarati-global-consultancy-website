import { Toaster } from '@/components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MapSection } from './components/MapSection';
import { AboutSection } from './components/AboutSection';
import { CategorySection } from './components/CategorySection';
import { ProductOffering } from './components/ProductOffering';
import { GDPRSection } from './components/GDPRSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { DisclaimerSection } from './components/DisclaimerSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MapSection />
        <AboutSection />
        <CategorySection />
        <ProductOffering />
        <GDPRSection />
        <WhyChooseUs />
        <ContactSection />
        <DisclaimerSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
