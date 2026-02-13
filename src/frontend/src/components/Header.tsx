import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { pageLinks } from '@/utils/staticSiteLinks';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHoverZoneActive, setIsHoverZoneActive] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const lastScrollY = useRef(0);
  const scrollThreshold = 20;

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > scrollThreshold);
      
      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > scrollThreshold) {
        if (!isOpen && !isHoverZoneActive) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, isHoverZoneActive]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const navItems = [
    { label: 'Home', path: pageLinks.home },
    { label: 'About Us', path: pageLinks.about },
    { label: 'Product Offerings', path: pageLinks.productOfferings },
    { label: 'GDPR', path: pageLinks.gdpr },
    { label: 'Why Choose Us', path: pageLinks.whyChooseUs },
    { label: 'Contact', path: pageLinks.contact },
    { label: 'Disclaimer', path: pageLinks.disclaimer }
  ];

  const isActivePath = (path: string) => {
    // Normalize current path to last segment for sub-path hosting support
    const pathSegments = currentPath.split('/').filter(Boolean);
    const lastSegment = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : 'index.html';
    const normalizedCurrent = lastSegment || 'index.html';
    
    // Extract the page name from the target path
    const targetSegments = path.split('/').filter(Boolean);
    const targetPage = targetSegments.length > 0 ? targetSegments[targetSegments.length - 1] : 'index.html';
    
    // Compare with .html stripped for equivalence
    const currentBase = normalizedCurrent.replace('.html', '');
    const targetBase = targetPage.replace('.html', '');
    
    return currentBase === targetBase || normalizedCurrent === targetPage;
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-4 z-[60] pointer-events-auto"
        onMouseEnter={() => setIsHoverZoneActive(true)}
        onMouseLeave={() => setIsHoverZoneActive(false)}
      />
      
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background/80 backdrop-blur-sm'
        } ${
          isVisible || isHoverZoneActive ? 'top-0' : '-top-32'
        }`}
        onMouseEnter={() => setIsHoverZoneActive(true)}
        onMouseLeave={() => setIsHoverZoneActive(false)}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 md:h-28">
            <a href={pageLinks.home} className="flex items-center gap-4">
              <img 
                src="/assets/SGC-Final-Logo-1.png" 
                alt="Shivarita Global Consultancy" 
                className="h-[72px] md:h-[96px] w-auto object-contain"
              />
              <span className="text-navy-blue-shadow text-xl md:text-2xl font-bold whitespace-nowrap">
                Shivarita Global Consultancy
              </span>
            </a>

            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                >
                  <Button
                    variant="ghost"
                    className={`text-foreground hover:text-primary hover:bg-primary/10 ${
                      isActivePath(item.path) ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </Button>
                </a>
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
                    <a
                      key={item.path}
                      href={item.path}
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
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
