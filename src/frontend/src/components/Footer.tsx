import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Student Visa', href: '#products' },
      { label: 'Work Visa', href: '#products' },
      { label: 'Business Visa', href: '#categories' },
      { label: 'Investment Visa', href: '#products' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Why Choose Us', href: '#why-choose-us' },
      { label: 'GDPR Compliance', href: '#gdpr' },
      { label: 'Disclaimer', href: '#disclaimer' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'Visa Categories', href: '#categories' },
      { label: 'EU Immigration', href: '#categories' },
      { label: 'Documentation', href: '#categories' },
      { label: 'Success Stories', href: '#why-choose-us' }
    ]
  };

  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
    { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: SiInstagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/generated/company-logo-transparent.dim_300x150.png"
                alt="Shivarita Global Consultancy"
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Shivarita Global Consultancy</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your trusted partner for visa consultancy and immigration services. 
              Making global dreams a reality since 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
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
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
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
              <a href="#gdpr" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
