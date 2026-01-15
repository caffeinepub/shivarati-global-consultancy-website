import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function MapSection() {
  const scrollToProductOffering = () => {
    const element = document.getElementById('products');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="map" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Explore Your Global Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click highlighted countries to learn more
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 shadow-2xl">
          {/* Map container with clickable overlay */}
          <div className="relative group">
            <img
              src="/assets/generated/europe-highlighted-world-map.dim_1000x600.png"
              alt="World map with highlighted European countries"
              className="w-full h-auto"
            />
            
            {/* Clickable overlay button */}
            <button
              onClick={scrollToProductOffering}
              className="absolute inset-0 flex items-center justify-center bg-primary/0 hover:bg-primary/10 transition-all duration-300 cursor-pointer group"
              aria-label="Click to view visa options"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">View Visa Options</span>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Click on the highlighted European region to discover visa opportunities
          </p>
          <Button 
            onClick={scrollToProductOffering}
            size="lg"
            className="mt-4"
          >
            Explore Visa Services
          </Button>
        </div>
      </div>
    </section>
  );
}
