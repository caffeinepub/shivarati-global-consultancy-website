import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Shield, Award } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';

export function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate({ to: '/product-offerings' });
  };

  const handleLearnMore = () => {
    navigate({ to: '/about' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMjM0OSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30">
                Trusted European Immigration and Visa Documentation Partner
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Gateway to
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block mt-2">Global Opportunities</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Expert visa consultancy services for students, professionals, and investors. 
              Navigate your immigration journey with confidence and ease.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={handleGetStarted} className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleLearnMore} className="border-primary/30 hover:bg-primary/10">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-2xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">High</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-2xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl" />
            <img
              src="/assets/WhatsApp-Image-2026-01-15-at-6.07.png"
              alt="Professional Consultation"
              className="relative rounded-3xl shadow-2xl w-full h-auto border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
