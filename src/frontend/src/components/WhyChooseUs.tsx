import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Globe, Clock, Shield, HeartHandshake, Star, CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const handleEmergencyHotlineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const uspItems = [
    {
      icon: Award,
      title: 'Certified Experts',
      description: 'IMC-certified immigration consultants with extensive knowledge of global visa regulations and procedures.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partnerships with universities, employers, and immigration authorities in 50+ countries worldwide.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Streamlined processes and priority handling to minimize waiting times and expedite applications.'
    },
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'GDPR-compliant data handling with bank-level encryption to protect your sensitive information.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Support',
      description: 'Dedicated case managers providing one-on-one guidance tailored to your unique circumstances.'
    },
    {
      icon: Star,
      title: '15+ Years Experience',
      description: 'Over a decade of excellence in immigration consultancy with deep industry expertise.'
    }
  ];

  const ancillaryServices = [
    'Document translation and notarization services',
    'Credential evaluation and recognition assistance',
    'Travel insurance and health insurance guidance',
    'Airport pickup and accommodation arrangements',
    'Bank account opening support',
    'Cultural orientation and language training referrals',
    'Job search and CV preparation workshops',
    'Post-arrival settlement and relocation support',
    'Family reunification assistance',
    'Visa extension and renewal services'
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Trusted Immigration Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine expertise, technology, and personalized care to deliver exceptional immigration services 
            that set us apart from the competition.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Promise to You</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            <p>
              At Shivarita Global Consultancy, we understand that immigration is more than just paperwork—it's about 
              dreams, aspirations, and life-changing decisions. For over 15 years, we've been committed to making 
              these dreams a reality for thousands of individuals and families worldwide.
            </p>
            <p>
              Our promise is simple yet profound: we treat your aspirations as our own. We combine the agility of a 
              modern consultancy with the seasoned knowledge of experts who have successfully guided thousands of 
              applicants. Every application we handle receives the same meticulous attention and care that we would 
              give to our own family members. We don't just process visas, we build lasting relationships based on 
              trust, transparency and results.
            </p>
            <p>
              What truly sets us apart is our unwavering commitment to excellence. Our team of IMC-certified consultants 
              stays updated with the latest immigration laws, policy changes, and best practices across 50+ countries. 
              We invest in continuous training and maintain direct relationships with embassies, consulates, and immigration 
              authorities to ensure you receive the most accurate and timely guidance.
            </p>
            <p>
              We believe in complete transparency—no hidden fees, no false promises, just honest advice and realistic 
              expectations. Our high success rate speaks to our expertise, but it's the stories of families reunited, 
              students achieving their educational dreams, and professionals advancing their careers that truly define our success.
            </p>
            <p>
              When you choose Shivarita Global Consultancy, you're not just hiring a service provider—you're gaining a 
              dedicated partner who will stand by you from your first consultation to your successful arrival in your 
              destination country and beyond. We also provide a{' '}
              <a
                href="#contact"
                onClick={handleEmergencyHotlineClick}
                className="font-bold text-accent hover:text-accent/80 underline decoration-2 underline-offset-4 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-sm"
                aria-label="Contact our 24/7 emergency hotline"
              >
                24/7 emergency hotline
              </a>
              {' '}for urgent assistance whenever you need it.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {uspItems.map((item, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Popular Destinations</h3>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Germany (Specialization), Portugal, Spain, Austria, Malta, Netherland
          </p>
        </div>

        <Card className="border-primary/20">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Comprehensive Ancillary Services</h3>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Beyond visa processing, we offer a complete suite of support services to ensure your smooth 
              transition and successful settlement in your destination country.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ancillaryServices.map((service, index) => (
                <div key={index} className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
