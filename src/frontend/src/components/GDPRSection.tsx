import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, FileCheck, UserCheck, Database, ExternalLink } from 'lucide-react';

export function GDPRSection() {
  const gdprPrinciples = [
    {
      icon: Lock,
      title: 'Data Security',
      description: 'All personal information is encrypted and stored securely using industry-standard protocols with AES-256 encryption.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly communicate how we collect, use, and protect your personal data through our comprehensive privacy policy.'
    },
    {
      icon: UserCheck,
      title: 'User Rights',
      description: 'You have the right to access, correct, delete, or transfer your personal data at any time without undue delay.'
    },
    {
      icon: FileCheck,
      title: 'Consent Management',
      description: 'We only process your data with explicit consent and for legitimate purposes directly related to our services.'
    },
    {
      icon: Database,
      title: 'Data Minimization',
      description: 'We collect only the data necessary for providing our immigration services and delete it when no longer needed.'
    },
    {
      icon: Shield,
      title: 'Breach Protection',
      description: 'Advanced security measures, regular audits, and 24/7 monitoring protect against data breaches and unauthorized access.'
    }
  ];

  return (
    <section id="gdpr" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="h-4 w-4" />
              <span>GDPR Compliance</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Privacy is Our Priority
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are fully compliant with the General Data Protection Regulation (GDPR) and committed to 
              protecting your personal information with the highest standards of data security and privacy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Understanding GDPR</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into 
                effect on May 25, 2018, across the European Union. It establishes strict guidelines for the collection, 
                processing, and storage of personal data of EU residents, regardless of where the organization is located.
              </p>
              <p>
                At Shivarita Global Consultancy, we recognize that your personal information is sensitive and valuable. 
                As an immigration consultancy handling passport details, financial information, and personal documents, 
                we maintain the highest standards of data protection. Our GDPR compliance ensures that:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <div className="bg-primary/20 rounded-full p-1 mt-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  <span>Your data is processed lawfully, fairly, and transparently</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-primary/20 rounded-full p-1 mt-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  <span>We collect data only for specified, explicit, and legitimate purposes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-primary/20 rounded-full p-1 mt-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  <span>Data is kept accurate, up-to-date, and stored securely</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-primary/20 rounded-full p-1 mt-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  <span>Personal information is retained only as long as necessary</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="bg-primary/20 rounded-full p-1 mt-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>
                  <span>Appropriate security measures protect against unauthorized access or data breaches</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {gdprPrinciples.map((principle, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="/assets/generated/gdpr-compliance-badge.dim_200x200.png"
                    alt="GDPR Compliance Badge"
                    className="h-16 w-16"
                  />
                  <div>
                    <h3 className="font-bold text-xl">Certified Compliance</h3>
                    <p className="text-sm text-muted-foreground">EU GDPR Standards</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our data handling practices are regularly audited and certified to meet all GDPR requirements. 
                  We maintain comprehensive records of processing activities and conduct regular privacy impact assessments 
                  to ensure ongoing compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4">Your GDPR Rights</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Under GDPR, you have comprehensive rights regarding your personal data. We are committed to 
                  honoring these rights promptly and transparently:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Access:</strong> Request a copy of your personal data we hold and information about how it's processed
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Rectification:</strong> Correct inaccurate or incomplete personal information
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Erasure:</strong> Request deletion of your data when it's no longer necessary or you withdraw consent
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Portability:</strong> Receive your data in a structured format and transfer it to another service provider
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Object:</strong> Opt-out of certain data processing activities, including direct marketing
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Restriction:</strong> Limit how we use your data in certain circumstances
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="bg-primary/20 rounded-full p-1 mt-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      <strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl mb-4">External Resources & Official Documentation</h3>
              <p className="text-muted-foreground mb-6">
                For more information about GDPR and your data protection rights, please refer to these official resources:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="justify-between h-auto py-4 px-6"
                  onClick={() => window.open('https://gdpr.eu/', '_blank')}
                >
                  <div className="text-left">
                    <p className="font-semibold">GDPR.eu</p>
                    <p className="text-xs text-muted-foreground">Complete GDPR information portal</p>
                  </div>
                  <ExternalLink className="h-5 w-5 ml-2 flex-shrink-0" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="justify-between h-auto py-4 px-6"
                  onClick={() => window.open('https://ec.europa.eu/info/law/law-topic/data-protection_en', '_blank')}
                >
                  <div className="text-left">
                    <p className="font-semibold">European Commission</p>
                    <p className="text-xs text-muted-foreground">Official EU data protection page</p>
                  </div>
                  <ExternalLink className="h-5 w-5 ml-2 flex-shrink-0" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
