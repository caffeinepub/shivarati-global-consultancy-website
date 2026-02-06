import { SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Student Visa', path: '/product-offerings' },
      { label: 'Work Visa', path: '/product-offerings' },
      { label: 'Business Visa', path: '/product-offerings' },
      { label: 'Investment Visa', path: '/product-offerings' }
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Product Offerings', path: '/product-offerings' },
      { label: 'Why Choose Us', path: '/why-choose-us' },
      { label: 'GDPR Compliance', path: '/gdpr' },
      { label: 'Disclaimer', path: '/disclaimer' },
      { label: 'Contact', path: '/contact' }
    ],
    resources: [
      { label: 'Visa Categories', path: '/product-offerings' },
      { label: 'EU Immigration', path: '/product-offerings' },
      { label: 'Documentation', path: '/product-offerings' },
      { label: 'Success Stories', path: '/why-choose-us' }
    ]
  };

  const socialLinks = [
    { icon: SiX, href: 'https://x.com/ShivaritaGlobal', label: 'X (Twitter)' },
    { icon: SiLinkedin, href: 'https://www.linkedin.com/in/sushmita-nair-13a91844/', label: 'LinkedIn' },
    { icon: SiInstagram, href: 'https://www.instagram.com/shivaritaglobal?utm_source=qr&igsh=dDdwbml2M25iZmNo', label: 'Instagram' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Shivarita Global Consultancy
            </h3>
            <p className="text-muted-foreground mb-4">
              Mumbai, Maharashtra
            </p>
            <p className="text-muted-foreground mb-2">
              <a href="mailto:customercare@shivaritaglobal.com" className="hover:text-primary transition-colors">
                customercare@shivaritaglobal.com
              </a>
            </p>
            <p className="text-muted-foreground mb-6">
              <a href="mailto:shivaritaglobal@gmail.com" className="hover:text-primary transition-colors">
                shivaritaglobal@gmail.com
              </a>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear}. Built with <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/gdpr" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
