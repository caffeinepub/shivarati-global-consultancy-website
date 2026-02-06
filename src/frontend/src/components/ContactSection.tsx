import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation function
  const validatePhone = (phone: string): boolean => {
    // Check if exactly 10 digits
    if (phone.length !== 10) {
      return false;
    }
    
    // Check if all characters are digits
    if (!/^\d{10}$/.test(phone)) {
      return false;
    }
    
    // Check for repeated digits (e.g., 9999999999, 5555555555)
    const firstDigit = phone[0];
    const allSame = phone.split('').every(digit => digit === firstDigit);
    if (allSame) {
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ email: '', phone: '' });
    
    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address (e.g., example@domain.com)' }));
      toast.error('Invalid email format', {
        description: 'Please enter a valid email address with @ and a domain (e.g., .com, .in)'
      });
      return;
    }
    
    // Validate phone
    if (!validatePhone(formData.phone)) {
      let phoneError = '';
      if (formData.phone.length !== 10) {
        phoneError = 'Phone number must be exactly 10 digits';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        phoneError = 'Phone number must contain only digits';
      } else {
        phoneError = 'Invalid phone number. Please avoid repeated digits (e.g., 9999999999)';
      }
      setErrors(prev => ({ ...prev, phone: phoneError }));
      toast.error('Invalid phone number', {
        description: phoneError
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Prepare email content
      const emailSubject = `New Consultation Request from ${formData.name}`;
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: +91 ${formData.phone}
Service Type: ${formData.serviceType}
Message: ${formData.message}
      `.trim();

      // Send emails using mailto (opens user's email client)
      const mailtoLink = `mailto:shivaritaglobal@gmail.com,customercare@shivaritaglobal.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Prepare WhatsApp message
      const whatsappMessage = `
*New Consultation Request*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* +91 ${formData.phone}
*Service Type:* ${formData.serviceType}
*Message:* ${formData.message}
      `.trim();
      
      const whatsappLink = `https://wa.me/917738422920?text=${encodeURIComponent(whatsappMessage)}`;

      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Small delay before opening WhatsApp
      setTimeout(() => {
        window.open(whatsappLink, '_blank');
      }, 500);

      // Show confirmation popup
      setShowConfirmation(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
      setErrors({ email: '', phone: '' });
    } catch (error) {
      toast.error('Submission failed', {
        description: 'Please try again or contact us directly via email or WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (field === 'email' || field === 'phone') {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhoneChange = (value: string) => {
    // Only allow digits and limit to 10 characters
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
    handleChange('phone', digitsOnly);
  };

  const handleBookConsultation = () => {
    const whatsappMessage = 'Request to schedule an appointment for Visa Consultancy';
    const whatsappLink = `https://wa.me/917738422920?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/30">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Start Your Immigration Journey Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? Our expert team is here to help. Reach out to us and let's discuss how we can 
            make your immigration dreams a reality.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 rounded-3xl p-8 md:p-12 mb-12 text-center border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-4 rounded-full mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Apply? Book a Free 20-Minute Eligibility Check
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Not sure if you qualify? Schedule a complimentary consultation with one of our certified immigration 
              experts. We'll assess your eligibility, answer your questions, and provide personalized guidance on 
              the best pathway for your situation—absolutely free, with no obligation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={handleBookConsultation} className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('contact-form');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} className="border-primary/30 hover:bg-primary/10">
                Send Message Instead
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Available Monday-Saturday • No credit card required • Instant confirmation
            </p>
          </div>
        </div>

        <div id="contact-form" className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className={`border-primary/20 focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="flex gap-2">
                        <div className="flex items-center px-3 py-2 bg-muted rounded-md border border-primary/20">
                          <span className="text-sm font-medium">+91</span>
                        </div>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="1234567890"
                          value={formData.phone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          required
                          maxLength={10}
                          className={`flex-1 border-primary/20 focus:border-primary ${errors.phone ? 'border-destructive' : ''}`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                      )}
                      <p className="text-xs text-muted-foreground">Enter 10-digit mobile number</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Consultation and Visa Service Needed For: *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)} required>
                        <SelectTrigger id="serviceType" className="border-primary/20 focus:border-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blue-card">Work Visa (Blue Card)</SelectItem>
                          <SelectItem value="student">Student Visa</SelectItem>
                          <SelectItem value="job-seeker">Job Seeker Visa</SelectItem>
                          <SelectItem value="digital-nomad">Digital Nomad Visa</SelectItem>
                          <SelectItem value="investment">Investment Visa</SelectItem>
                          <SelectItem value="other">Other Visa Consular Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your immigration needs..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    Submitting this form will open your email client and WhatsApp to send your details to our team.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-secondary/20 to-accent/20 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">customercare@shivaritaglobal.com</p>
                    <p className="text-sm text-muted-foreground">shivaritaglobal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-sm text-muted-foreground">
                      Mumbai, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Available All Days - 10:00 am - 6:00 pm IST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl">Thank You!</AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              Thank You for sharing the required details, you will be touched shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={() => setShowConfirmation(false)} className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
