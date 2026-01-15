import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              About Us
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Dreams Through Expert Immigration Services
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Shivarita Global Consultancy is a premier visa consultancy agency dedicated to making 
                international migration seamless and stress-free. With over 15 years of experience, 
                we've helped thousands of individuals and families achieve their dreams of studying, 
                working, and living abroad.
              </p>
              
              <p>
                Our mission is to provide comprehensive, personalized immigration solutions that empower 
                our clients to pursue their global aspirations with confidence. We understand that every 
                immigration journey is unique, which is why we take the time to understand your specific 
                needs, goals, and circumstances.
              </p>
              
              <p>
                Our team of certified immigration consultants brings deep expertise across multiple 
                immigration pathways including student visas, work permits, business immigration, and 
                investment-based residency programs. We stay current with the latest immigration policies 
                and regulations across 50+ countries to ensure you receive accurate, up-to-date guidance.
              </p>
              
              <p>
                What sets us apart is our commitment to excellence and our client-first approach. We don't 
                just process applications—we build lasting relationships based on trust, transparency, and 
                results. Our high success rate is a testament to our meticulous attention to detail and 
                unwavering dedication to your success.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Our team of certified immigration consultants provides personalized support throughout your journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Comprehensive Services</h3>
                  <p className="text-muted-foreground">
                    From documentation to visa interviews, we handle every aspect of your immigration process.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    With a high success rate, we're proud to be one of the most trusted names in immigration consultancy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="/assets/generated/consultation-meeting.dim_800x600.jpg"
              alt="Professional Consultation"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <img
              src="/assets/generated/office-interior.dim_1200x800.jpg"
              alt="Office Interior"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-4 rounded-xl flex items-center justify-center">
                    <img
                      src="/assets/Asset 1-2.png"
                      alt="IMC Logo"
                      className="h-16 w-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">IMC Certified Compliance</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src="/assets/WhatsApp Image 2026-01-11 at 1.23.24 PM.jpeg"
                alt="Sushmita Anup Nair - Founder"
                className="relative rounded-3xl shadow-2xl w-full h-auto border border-primary/20"
              />
            </div>
            <div className="mt-6 text-center">
              <h4 className="text-xl font-bold mb-2">Meet Our Founder</h4>
              <p className="text-muted-foreground">Sushmita Anup Nair</p>
              <p className="text-sm text-muted-foreground">IMC Member, Geneva Switzerland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
