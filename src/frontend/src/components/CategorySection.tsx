import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, MapPin, Briefcase, GraduationCap, Euro, Plane } from 'lucide-react';
import { getPageLink } from '@/utils/staticSiteLinks';

export function CategorySection() {
  const categories = [
    {
      icon: FileText,
      title: 'Visa Documentation',
      description: 'Complete assistance with visa application forms, document preparation, and submission. We ensure all paperwork is accurate and compliant with immigration requirements.',
      features: [
        'Document verification and authentication',
        'Application form completion',
        'Supporting document preparation',
        'Submission tracking'
      ]
    },
    {
      icon: MapPin,
      title: 'EU Immigration Counselling',
      description: 'Specialized guidance for European Union immigration, including Schengen visa applications, work permits, and residency programs across EU member states.',
      features: [
        'Schengen visa assistance',
        'EU Blue Card applications',
        'Family reunification support',
        'Citizenship pathways'
      ]
    },
    {
      icon: Briefcase,
      title: 'Visa Type Information',
      description: 'Comprehensive information and guidance on various visa categories including tourist, student, work, business, and investment visas for destinations worldwide.',
      features: [
        'Tourist & visitor visas',
        'Student & education visas',
        'Work & employment visas',
        'Business & investor visas'
      ]
    }
  ];

  const visaTypes = [
    { 
      icon: GraduationCap, 
      name: 'Student Visa', 
      countries: '40+ Countries',
      link: getPageLink('product-offerings', '#students')
    },
    { 
      icon: Euro, 
      name: 'EU Blue Card', 
      countries: 'EU Member States',
      link: getPageLink('product-offerings', '#eu-blue-card')
    },
    { 
      icon: Briefcase, 
      name: 'Job Seeker Visa', 
      countries: 'Germany & EU',
      link: getPageLink('product-offerings', '#job-seeker')
    },
    { 
      icon: Plane, 
      name: 'Digital Nomad Visa', 
      countries: '20+ Countries',
      link: getPageLink('product-offerings', '#digital-nomad')
    }
  ];

  return (
    <section id="categories" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Visa Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From documentation to destination, we guide you through every step of your immigration journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {categories.map((category, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Popular Visa Types</h3>
            <p className="text-muted-foreground">
              Explore our specialized visa services tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((visa, index) => (
              <a
                key={index}
                href={visa.link}
                className="group bg-background border border-border hover:border-primary/40 rounded-xl p-6 transition-all hover:shadow-lg"
              >
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <visa.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {visa.name}
                </h4>
                <p className="text-sm text-muted-foreground">{visa.countries}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
