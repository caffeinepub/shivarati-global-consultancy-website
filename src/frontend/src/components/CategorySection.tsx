import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, MapPin, Briefcase, GraduationCap, Euro, Plane } from 'lucide-react';

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
    { icon: GraduationCap, name: 'Student Visa', countries: '40+ Countries' },
    { icon: Euro, name: 'EU Blue Card', countries: 'EU Member States' },
    { icon: Briefcase, name: 'Job Seeker Visa', countries: 'Germany & EU' },
    { icon: Plane, name: 'Digital Nomad Visa', countries: '20+ Countries' }
  ];

  return (
    <section id="categories" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Immigration Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From documentation to counselling, we provide end-to-end support for all your visa and immigration needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="bg-primary/20 rounded-full p-1 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Visa Documentation & Consultation Handled
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visaTypes.map((type, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{type.name}</h4>
                <p className="text-sm text-muted-foreground">{type.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
