import { AlertTriangle, Scale, FileText, Info, ExternalLink, Shield } from 'lucide-react';

export function DisclaimerSection() {
  return (
    <section id="disclaimer" className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Disclaimer</h2>
          </div>

          <div className="space-y-8">
            {/* No Guarantee of Visa Approval */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">No Guarantee of Visa Approval</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Shivarita Global Consultancy provides professional immigration consulting services to assist clients with their visa applications. However, we do not guarantee visa approval, as the final decision rests solely with the relevant immigration authorities, embassies, or consulates. Visa outcomes depend on various factors, including the applicant's eligibility, documentation, and the discretion of the reviewing authorities. We are not responsible for any visa refusals or delays caused by factors beyond our control.
                  </p>
                </div>
              </div>
            </div>

            {/* Accuracy of Information */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Accuracy of Information</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    While we strive to provide accurate and up-to-date information on our website and in our consultations, immigration laws, policies, and procedures are subject to change without notice. We make every effort to ensure the information we provide is correct at the time of publication, but we cannot guarantee its accuracy or completeness. Clients are advised to verify all information with the relevant authorities before making any decisions. Shivarita Global Consultancy is not liable for any errors, omissions, or outdated information on this website.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes in Immigration Law */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Changes in Immigration Law</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Immigration laws and regulations are subject to frequent changes by governments and immigration authorities. Shivarita Global Consultancy is not responsible for any changes in immigration policies, visa requirements, or processing times that may occur after the commencement of your application. We will make reasonable efforts to inform clients of any significant changes that may affect their applications, but we cannot be held liable for any consequences arising from such changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Not Legal Advice */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Not Legal Advice</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    The information and services provided by Shivarita Global Consultancy are for informational and consultancy purposes only and do not constitute legal advice. We are not a law firm, and our consultants are not licensed attorneys unless explicitly stated. For legal advice specific to your situation, we recommend consulting with a qualified immigration lawyer or legal professional. Shivarita Global Consultancy is not liable for any legal consequences arising from the use of our services or information provided on this website.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Links */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <ExternalLink className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Third-Party Links</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Our website may contain links to third-party websites, resources, or services for your convenience. Shivarita Global Consultancy does not endorse, control, or assume responsibility for the content, accuracy, or practices of these third-party websites. We are not liable for any damages, losses, or issues arising from your use of third-party websites or services. We encourage you to review the terms and conditions and privacy policies of any third-party websites you visit.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    To the fullest extent permitted by law, Shivarita Global Consultancy, its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of our services, website, or information provided. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages. Our total liability to you for any claims arising from our services shall not exceed the amount you paid for our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Jurisdiction */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <Scale className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Jurisdiction</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    All disputes are subject to Mumbai jurisdiction only.
                  </p>
                </div>
              </div>
            </div>

            {/* Force Majeure */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Force Majeure</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Shivarita Global Consultancy will not be considered responsible if there is a breach of its satisfaction guarantee policy or default under any terms of service, and shall not be liable to the Client for any cessation, interruption, or delay in the performance of its obligations by reason of earthquake, flood, fire, storm, lightning, drought, landslide, hurricane, cyclone, typhoon, tornado, natural disaster, act of God or the public enemy, epidemic, famine or plague, action of a court or public authority, change in law, explosion, war, terrorism, armed conflict, labour strike, lockout, boycott or similar event beyond our reasonable control, whether foreseen or unforeseen (each a "Force Majeure Event").
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
