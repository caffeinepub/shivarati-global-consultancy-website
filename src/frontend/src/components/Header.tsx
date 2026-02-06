import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useLocation } from '@tanstack/react-router';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Product Offerings', path: '/product-offerings' },
    { label: 'GDPR', path: '/gdpr' },
    { label: 'Why Choose Us', path: '/why-choose-us' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          <Link to="/" className="flex items-center gap-4">
            <img 
              src="/assets/SGC-Final-Logo-1.png" 
              alt="Shivarita Global Consultancy" 
              className="h-[72px] md:h-[96px] w-auto object-contain"
            />
            <span className="text-navy-blue-shadow text-xl md:text-2xl font-bold whitespace-nowrap">
              Shivarita Global Consultancy
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
              >
                <Button
                  variant="ghost"
                  className={`text-foreground hover:text-primary hover:bg-primary/10 ${
                    isActivePath(item.path) ? 'bg-primary/10 text-primary' : ''
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={`justify-start text-lg w-full ${
                        isActivePath(item.path) ? 'bg-primary/10 text-primary' : ''
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
