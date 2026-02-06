import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

interface CountrySlide {
  image: string;
  name: string;
  alt: string;
}

const countries: CountrySlide[] = [
  {
    image: '/assets/SPAIN-1.png',
    name: 'Spain',
    alt: 'Beautiful architecture and palm trees in Valencia, Spain'
  },
  {
    image: '/assets/HUNGARY-1.png',
    name: 'Hungary',
    alt: 'Hungarian Parliament Building along the Danube River in Budapest'
  },
  {
    image: '/assets/MALTA-1.png',
    name: 'Malta',
    alt: 'Historic harbor and fortifications in Valletta, Malta'
  },
  {
    image: '/assets/PORTUGAL-1.png',
    name: 'Portugal',
    alt: 'Colorful coastal town of Funchal, Madeira, Portugal'
  },
  {
    image: '/assets/ITALY-1.png',
    name: 'Italy',
    alt: 'Picturesque coastal village of Positano, Amalfi Coast, Italy'
  }
];

export function CountrySlideshow() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + countries.length) % countries.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % countries.length);
  };

  const handleSlideClick = () => {
    navigate({ to: '/contact' });
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Discover Your European Destination
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore popular European countries for immigration. Click any image to get started with your visa consultation.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main slideshow container */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
            {countries.map((country, index) => (
              <div
                key={country.name}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <button
                  onClick={handleSlideClick}
                  className="relative w-full h-full cursor-pointer group"
                  aria-label={`View visa options for ${country.name}`}
                >
                  <img
                    src={country.image}
                    alt={country.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Translucent caption band */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent py-8 px-6">
                    <h3 className="text-white text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
                      {country.name}
                    </h3>
                    <p className="text-white/90 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to explore visa opportunities
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-primary/20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-primary/20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {countries.map((country, index) => (
              <button
                key={country.name}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to ${country.name} slide`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Click on any country image to start your visa consultation journey
          </p>
          <Button 
            onClick={handleSlideClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            Contact Us About Visa Services
          </Button>
        </div>
      </div>
    </section>
  );
}
