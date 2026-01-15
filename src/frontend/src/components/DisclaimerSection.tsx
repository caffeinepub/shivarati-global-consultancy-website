import { AlertTriangle, Scale } from 'lucide-react';

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
            {/* Jurisdiction */}
            <div className="bg-muted/30 border border-border rounded-lg p-6 md:p-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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
