import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { GraduationCap, Briefcase, TrendingUp, CheckCircle2, FileText, Calendar, Euro, Plane, Wallet, Globe, Award } from 'lucide-react';

export function ProductOffering() {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Product Offerings
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tailored Solutions for Every Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a student, professional, or investor, we have specialized services designed to meet your unique immigration needs.
          </p>
        </div>

        <Tabs defaultValue="student" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted">
            <TabsTrigger value="student" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Student Services</span>
              <span className="sm:hidden">Student</span>
            </TabsTrigger>
            <TabsTrigger value="professional" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <Briefcase className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Professional Services</span>
              <span className="sm:hidden">Professional</span>
            </TabsTrigger>
            <TabsTrigger value="investment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Investment Services</span>
              <span className="sm:hidden">Investment</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student" className="mt-8">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl">Student Services</CardTitle>
                    <p className="text-muted-foreground mt-1">
                      Comprehensive support for international education aspirants
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Our student services are designed to guide you through every step of your international education journey. 
                  From selecting the right university to settling in your new country, we're with you all the way.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="germany-checklist">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>Checklist for Student Admission for Germany 2026</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                        <h4 className="font-semibold text-base">Step-by-Step Admission Process</h4>
                        
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Research and University Selection (6-12 months before)</p>
                              <p className="text-sm text-muted-foreground">Identify programs, check eligibility, and shortlist universities</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Language Proficiency (4-6 months before)</p>
                              <p className="text-sm text-muted-foreground">Complete German (TestDaF, DSH) or English (IELTS, TOEFL) language tests</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Document Preparation (3-4 months before)</p>
                              <p className="text-sm text-muted-foreground">Gather transcripts, certificates, CV, motivation letter, and recommendation letters</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Application Submission (3-6 months before semester start)</p>
                              <p className="text-sm text-muted-foreground">Apply through Uni-Assist or directly to universities</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Blocked Account Opening (After admission)</p>
                              <p className="text-sm text-muted-foreground">Open blocked account with minimum €11,904 for 2026</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Health Insurance (Before visa application)</p>
                              <p className="text-sm text-muted-foreground">Obtain German health insurance coverage</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Visa Application (2-3 months before departure)</p>
                              <p className="text-sm text-muted-foreground">Submit visa application at German embassy/consulate</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Accommodation Arrangement (1-2 months before)</p>
                              <p className="text-sm text-muted-foreground">Secure student housing or private accommodation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="germany-requirements">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <span>German Student Visa Requirements and Eligibility</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                        <h4 className="font-semibold text-base">Eligibility Criteria</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <div className="bg-primary/20 rounded-full p-1 mt-1">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                            <span className="text-sm">Valid admission letter from a recognized German university</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-primary/20 rounded-full p-1 mt-1">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                            <span className="text-sm">Proof of financial resources (blocked account with €11,904 minimum for 2026)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-primary/20 rounded-full p-1 mt-1">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                            <span className="text-sm">German or English language proficiency (depending on program)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-primary/20 rounded-full p-1 mt-1">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                            <span className="text-sm">Valid passport (valid for at least 6 months beyond intended stay)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="bg-primary/20 rounded-full p-1 mt-1">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            </div>
                            <span className="text-sm">Health insurance coverage for Germany</span>
                          </li>
                        </ul>

                        <h4 className="font-semibold text-base mt-6">Required Documents</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Completed visa application form</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Valid passport with copies</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• University admission letter</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Blocked account confirmation</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Health insurance certificate</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Academic transcripts & certificates</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Language proficiency certificate</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Motivation letter</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• CV/Resume</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm font-medium">• Passport-sized photographs</p>
                          </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                          <p className="text-sm font-semibold mb-2">Processing Time</p>
                          <p className="text-sm text-muted-foreground">Typically 6-12 weeks. Apply at least 3 months before your intended departure date.</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="general-services">
                    <AccordionTrigger className="text-lg font-semibold">
                      General Student Services
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">University selection and application assistance</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Student visa processing and documentation</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Scholarship guidance and financial planning</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Pre-departure orientation and support</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Accommodation and travel arrangements</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Post-arrival settlement services</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Blocked Account opening and financial documentation</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="blocked-account">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <Wallet className="h-5 w-5 text-primary" />
                        <span>Blocked Account Services</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                        <p className="text-sm text-muted-foreground">
                          A blocked account (Sperrkonto) is a special bank account required for student visa applications 
                          to Germany. It serves as proof of financial resources to cover living expenses during your studies.
                        </p>
                        
                        <h4 className="font-semibold text-base">What is a Blocked Account?</h4>
                        <p className="text-sm text-muted-foreground">
                          A blocked account is a restricted German bank account where you deposit a specific amount of money 
                          before arriving in Germany. The funds are "blocked" and can only be withdrawn in monthly installments 
                          once you arrive, ensuring you have sufficient funds throughout your stay.
                        </p>

                        <h4 className="font-semibold text-base mt-4">Requirements for 2026</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Minimum deposit: €11,904 (€992 per month for 12 months)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Account must be opened before visa application</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Valid university admission letter required</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Valid passport and identification documents</span>
                          </li>
                        </ul>

                        <h4 className="font-semibold text-base mt-4">How We Help</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm">• Account opening guidance and support</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm">• Document preparation and verification</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm">• Bank selection and comparison</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm">• Application submission assistance</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm">• Confirmation certificate processing</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg">
                            <p className="text-sm">• Post-arrival account activation support</p>
                          </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                          <p className="text-sm font-semibold mb-2">Popular Blocked Account Providers</p>
                          <p className="text-sm text-muted-foreground">
                            Fintiba, Expatrio, Deutsche Bank, Coracle - We help you choose the best option for your needs
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-semibold text-lg mb-2">Popular Destinations</h4>
                  <p className="text-muted-foreground text-sm">
                    USA, UK, Canada, Australia, Germany, Ireland, New Zealand, Singapore, and more
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="professional" className="mt-8">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl">Professional Services</CardTitle>
                    <p className="text-muted-foreground mt-1">
                      Career advancement through international work opportunities
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Take your career global with our professional immigration services. We help skilled workers, 
                  executives, and professionals navigate work visa processes and secure employment abroad.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="eu-blue-card">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <Euro className="h-5 w-5 text-primary" />
                        <span>EU Blue Card - Complete Guide</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-6">
                        <div>
                          <h4 className="font-semibold text-base mb-3">What is the EU Blue Card?</h4>
                          <p className="text-sm text-muted-foreground">
                            The EU Blue Card is a work and residence permit for highly qualified non-EU citizens, 
                            allowing them to live and work in most EU countries. It's designed to attract skilled professionals 
                            to the European Union and offers a streamlined path to permanent residency.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-base mb-3">Eligibility Criteria</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Higher Education Qualification</p>
                                <p className="text-sm text-muted-foreground">University degree (Bachelor's or higher) or at least 5 years of professional experience in your field</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Salary Threshold</p>
                                <p className="text-sm text-muted-foreground">Job offer meeting minimum salary requirements (varies by country: Germany €45,300-€58,400, France €53,836, Netherlands €60,000)</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Valid Employment Contract</p>
                                <p className="text-sm text-muted-foreground">Binding job offer or employment contract for at least 12 months</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Health Insurance</p>
                                <p className="text-sm text-muted-foreground">Comprehensive health insurance coverage for the EU country</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Professional Qualifications</p>
                                <p className="text-sm text-muted-foreground">Qualifications must be recognized in the host country (may require credential evaluation)</p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-base mb-3">Key Benefits</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Work authorization across EU member states</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Family reunification rights</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Path to permanent residence (21-33 months)</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Equal working conditions with EU nationals</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Visa-free travel in Schengen Area</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Spouse work authorization</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Access to social security benefits</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm font-medium">• Mobility within EU after 12 months</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-base mb-3">Required Documents</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Valid passport (6+ months validity)</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• University degree certificates</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Employment contract or job offer</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Proof of professional qualifications</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Academic transcripts and credentials</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Health insurance certificate</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Proof of accommodation</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Completed visa application form</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Passport-sized photographs</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• CV/Resume</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Proof of financial means</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Clean criminal record certificate</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <p className="text-sm font-semibold mb-2">Processing Time</p>
                          <p className="text-sm text-muted-foreground">
                            Typically 1-3 months depending on the country. Fast-track processing available in some countries.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="eu-equivalents">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <span>EU Blue Card Equivalents by Country</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                        <p className="text-sm text-muted-foreground mb-4">
                          While the EU Blue Card is available in most EU countries, some nations have their own skilled worker programs 
                          with similar benefits. Here's a comprehensive overview:
                        </p>

                        <div className="space-y-4">
                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Austria</span>
                              Red-White-Red Card
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• Points-based system for skilled workers</li>
                              <li>• Minimum salary: €2,364 per month (2026)</li>
                              <li>• Path to permanent residence after 5 years</li>
                              <li>• Family reunification after 6 months</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Netherlands</span>
                              Highly Skilled Migrant Visa
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• Minimum salary: €60,000 annually (2026)</li>
                              <li>• Employer must be recognized sponsor</li>
                              <li>• Fast processing (2-4 weeks)</li>
                              <li>• Permanent residence after 5 years</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Ireland</span>
                              Critical Skills Employment Permit
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• Minimum salary: €32,000-€64,000 depending on occupation</li>
                              <li>• For occupations on Critical Skills list</li>
                              <li>• Immediate family reunification</li>
                              <li>• Permanent residence after 2 years</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Spain</span>
                              Highly Qualified Professional Visa
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• For executives, specialists, and researchers</li>
                              <li>• Minimum salary varies by profession</li>
                              <li>• Initial permit: 1 year, renewable for 2 years</li>
                              <li>• Family members can work immediately</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Luxembourg</span>
                              EU Blue Card Luxembourg
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• Minimum salary: 1.5x average gross annual salary</li>
                              <li>• Higher education degree required</li>
                              <li>• Valid for up to 4 years</li>
                              <li>• Permanent residence after 5 years</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Portugal</span>
                              Tech Visa & Highly Qualified Activity Visa
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• Tech Visa for IT professionals and startups</li>
                              <li>• Minimum salary: 1.5x average Portuguese salary</li>
                              <li>• Fast-track processing for tech sector</li>
                              <li>• Permanent residence after 5 years</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Slovakia</span>
                              EU Blue Card Slovakia
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• Minimum salary: 1.5x average Slovak salary</li>
                              <li>• University degree or 5 years experience</li>
                              <li>• Valid for 2 years, renewable</li>
                              <li>• Permanent residence after 5 years</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">Malta</span>
                              Key Employee Initiative (KEI)
                            </h5>
                            <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                              <li>• For highly skilled professionals</li>
                              <li>• Minimum salary: €45,000 annually</li>
                              <li>• Fast processing (4-6 weeks)</li>
                              <li>• Favorable tax regime for qualified employees</li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                          <p className="text-sm font-semibold mb-2">Our Expertise</p>
                          <p className="text-sm text-muted-foreground">
                            We help you identify the best program for your qualifications and career goals, handling all documentation 
                            and application processes for a smooth transition to your chosen European destination.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="job-seeker-visa-eu">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span>JOB SEEKER VISA FOR EU</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-3 text-primary">Germany Job Seeker Visa – Opportunity Card (Chancenkarte)</h4>
                        </div>

                        <div>
                          <h5 className="font-semibold text-base mb-3">What is Chancenkarte?</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            The Chancenkarte (Opportunity Card) is Germany's new points-based immigration system introduced in 2024 
                            to attract international talent. This visa allows skilled professionals to enter Germany for up to 12 months 
                            to search for employment. During this period, holders can work part-time (up to 20 hours per week) and 
                            participate in job trials to demonstrate their skills to potential employers.
                          </p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-base mb-3">How Do You Qualify?</h5>
                          <p className="text-sm text-muted-foreground mb-3">
                            The Chancenkarte uses a points-based system where applicants must score a minimum of 6 points across 
                            various categories:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Education</p>
                                <p className="text-sm text-muted-foreground">Recognized academic or vocational qualifications</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Work Experience</p>
                                <p className="text-sm text-muted-foreground">Relevant professional background</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Age</p>
                                <p className="text-sm text-muted-foreground">Younger applicants receive more points</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Language Skills</p>
                                <p className="text-sm text-muted-foreground">German and English proficiency levels</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Prior German Stays</p>
                                <p className="text-sm text-muted-foreground">Previous experience in Germany</p>
                              </div>
                            </li>
                            <li className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium">Partner Eligibility</p>
                                <p className="text-sm text-muted-foreground">Spouse's qualifications can contribute points</p>
                              </div>
                            </li>
                          </ul>

                          <div className="mt-4 bg-background p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Two Qualification Routes Available:</p>
                            <ul className="space-y-2">
                              <li className="flex items-start space-x-2">
                                <div className="bg-primary/20 rounded-full p-1 mt-1">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                </div>
                                <span className="text-sm">Direct qualification with a recognized academic or vocational degree</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <div className="bg-primary/20 rounded-full p-1 mt-1">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                </div>
                                <span className="text-sm">Points-based option for those who score at least 6 points in the assessment system</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-base mb-3">Key Requirements</h5>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Recognized qualification OR minimum 6 points in the points system</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• German language proficiency: minimum A2 level (preferably B1)</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• English language proficiency: minimum B2 level</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg">
                              <p className="text-sm">• Proof of financial means: €1,091 per month for the duration of stay</p>
                            </div>
                            <div className="bg-background p-3 rounded-lg col-span-2">
                              <p className="text-sm">• No job offer required at the time of application</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <h5 className="text-sm font-semibold mb-2">Closing Note</h5>
                          <p className="text-sm text-muted-foreground">
                            This visa pathway is ideal for Indian professionals looking to explore Germany's dynamic job market. 
                            Shivarita Global provides comprehensive assistance with documentation preparation, blocked account setup, 
                            and embassy interview preparation to ensure your successful application for the Chancenkarte.
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="chancenkarte">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <span>Job Seeker Visa & Chancenkarte</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Germany's Chancenkarte (Opportunity Card) is a points-based system allowing skilled workers 
                          to enter Germany to search for employment without a prior job offer.
                        </p>
                        
                        <h4 className="font-semibold text-base">Points System Criteria</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Minimum 6 points required from: qualifications, work experience, language skills, age, and connection to Germany</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Recognized university degree or vocational qualification</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Proof of financial means (approximately €1,027 per month)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">German or English language proficiency (A1 level minimum)</span>
                          </li>
                        </ul>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                          <p className="text-sm font-semibold mb-2">Validity Period</p>
                          <p className="text-sm text-muted-foreground">12 months to search for employment, with option to convert to work permit upon finding a job</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="digital-nomad">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <Plane className="h-5 w-5 text-primary" />
                        <span>Digital Nomad Visa</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Digital Nomad Visas allow remote workers to live in various countries while working for 
                          employers or clients based elsewhere. Popular in EU countries like Portugal, Spain, and Estonia.
                        </p>
                        
                        <h4 className="font-semibold text-base">General Requirements</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Proof of remote employment or freelance contracts</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Minimum income threshold (varies by country, typically €2,000-€3,500/month)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Health insurance coverage</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Clean criminal record</span>
                          </li>
                        </ul>

                        <h4 className="font-semibold text-base mt-4">Popular Countries</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-sm font-medium">Portugal</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-sm font-medium">Spain</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-sm font-medium">Estonia</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-sm font-medium">Croatia</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-sm font-medium">Greece</p>
                          </div>
                          <div className="bg-background p-3 rounded-lg text-center">
                            <p className="text-sm font-medium">Malta</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="general-professional">
                    <AccordionTrigger className="text-lg font-semibold">
                      General Professional Services
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Work permit and employment visa processing</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Professional credential evaluation</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Job search and placement assistance</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Corporate immigration solutions</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Intra-company transfer support</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Permanent residency applications</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-semibold text-lg mb-2">Key Programs</h4>
                  <p className="text-muted-foreground text-sm">
                    Skilled Worker (EU Blue Card), Job Seeker Visa and Chancenkarte, Digital Nomad Visa, Golden Visa
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment" className="mt-8">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl">Investment Services</CardTitle>
                    <p className="text-muted-foreground mt-1">
                      Secure residency and citizenship through strategic investments
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Explore investment-based immigration programs that offer residency or citizenship in exchange for 
                  qualifying investments. Our experts guide you through the entire process with complete transparency.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="investment-visa">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <span>Investment Visa Programs</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Investment visas provide a pathway to residency or citizenship through qualifying financial 
                          investments in real estate, government bonds, or business ventures.
                        </p>
                        
                        <h4 className="font-semibold text-base">Popular Investment Programs</h4>
                        
                        <div className="space-y-4">
                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Portugal Golden Visa</h5>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>• Minimum investment: €280,000 (real estate) or €500,000 (investment funds)</li>
                              <li>• Residency permit with path to citizenship after 5 years</li>
                              <li>• Visa-free travel in Schengen Area</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Spain Golden Visa</h5>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>• Minimum investment: €500,000 (real estate)</li>
                              <li>• Renewable residence permit</li>
                              <li>• Family inclusion possible</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Greece Golden Visa</h5>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>• Minimum investment: €250,000-€800,000 (depending on location)</li>
                              <li>• 5-year renewable residence permit</li>
                              <li>• Fast processing time (2-3 months)</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">USA EB-5 Visa</h5>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>• Minimum investment: $800,000-$1,050,000</li>
                              <li>• Must create 10 full-time jobs</li>
                              <li>• Path to permanent residence (Green Card)</li>
                            </ul>
                          </div>

                          <div className="bg-background p-4 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">UK Innovator Founder Visa</h5>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              <li>• Minimum investment: £50,000</li>
                              <li>• Innovative business idea required</li>
                              <li>• Path to permanent residence after 3 years</li>
                            </ul>
                          </div>
                        </div>

                        <h4 className="font-semibold text-base mt-4">General Requirements</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Proof of legal source of funds</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Clean criminal record</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Health insurance coverage</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Valid passport</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="general-investment">
                    <AccordionTrigger className="text-lg font-semibold">
                      General Investment Services
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Investor visa program consultation</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Business immigration planning</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Entrepreneur visa applications</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Golden visa programs (Portugal, Spain, Greece)</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">EB-5 and similar investment programs</span>
                        </div>
                        <div className="flex items-start space-x-3 bg-muted/50 p-4 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Citizenship by investment guidance</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-semibold text-lg mb-2">Investment Ranges</h4>
                  <p className="text-muted-foreground text-sm">
                    Programs available from €250,000 to $1,000,000+ depending on country and visa type
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
