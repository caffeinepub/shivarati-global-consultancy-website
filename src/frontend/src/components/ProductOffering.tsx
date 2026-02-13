import { GraduationCap, Briefcase, TrendingUp, HeadphonesIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useEffect, useState } from 'react';

export function ProductOffering() {
  const [activeTab, setActiveTab] = useState('students');
  const [activeAccordion, setActiveAccordion] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Handle deep linking from URL hash
    const hash = window.location.hash.substring(1);
    
    if (hash === 'students') {
      setActiveTab('students');
      setActiveAccordion('overview');
    } else if (hash === 'eu-blue-card') {
      setActiveTab('professionals');
      setActiveAccordion('eu-blue-card');
    } else if (hash === 'job-seeker') {
      setActiveTab('professionals');
      setActiveAccordion('job-seeker');
    } else if (hash === 'digital-nomad') {
      setActiveTab('professionals');
      setActiveAccordion('digital-nomad');
    }

    // Scroll to the section after a short delay to ensure content is rendered
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

  return (
    <section id="product-offerings" className="py-24 md:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Tailored Solutions for Every Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student, professional, or investor, we have specialized services designed to meet your unique immigration needs.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
            <TabsTrigger value="students" className="flex items-center gap-2 py-4">
              <GraduationCap className="h-5 w-5" />
              <span>Students</span>
            </TabsTrigger>
            <TabsTrigger value="professionals" className="flex items-center gap-2 py-4">
              <Briefcase className="h-5 w-5" />
              <span>Professionals</span>
            </TabsTrigger>
            <TabsTrigger value="investors" className="flex items-center gap-2 py-4">
              <TrendingUp className="h-5 w-5" />
              <span>Investors</span>
            </TabsTrigger>
            <TabsTrigger value="ancillary" className="flex items-center gap-2 py-4">
              <HeadphonesIcon className="h-5 w-5" />
              <span>Ancillary</span>
            </TabsTrigger>
          </TabsList>

          {/* STUDENTS TAB */}
          <TabsContent value="students" className="space-y-6" id="students">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Student Visa Services
                </CardTitle>
                <CardDescription>
                  Comprehensive guidance for students pursuing education in Europe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion 
                  type="single" 
                  collapsible 
                  className="w-full"
                  value={activeAccordion}
                  onValueChange={setActiveAccordion}
                >
                  
                  {/* Overview Consultation */}
                  <AccordionItem value="overview">
                    <AccordionTrigger className="text-lg font-semibold">Overview Consultation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <p>
                            The German Student Visa is a residence permit that allows international students to study at German universities and institutions. Germany is one of the most popular destinations for higher education due to its world-class universities, affordable tuition fees, and excellent post-study work opportunities.
                          </p>
                          
                          <div className="space-y-3">
                            <p className="font-semibold text-foreground">Key Features:</p>
                            <ul className="space-y-2 ml-6">
                              <li>• <strong>Duration:</strong> Valid for the duration of your study program, typically renewable annually.</li>
                              <li>• <strong>Work Rights:</strong> Students can work up to 20 hours per week during the semester and full-time during semester breaks.</li>
                              <li>• <strong>Post-Study Opportunities:</strong> After graduation, students can apply for an 18-month Job Seeker Visa to find employment in Germany.</li>
                              <li>• <strong>Pathway to Permanent Residence:</strong> After working in Germany for a certain period, students can apply for permanent residence (Niederlassungserlaubnis).</li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <p className="font-semibold text-foreground">Types of German Student Visas:</p>
                            <div className="ml-6 space-y-3">
                              <div>
                                <p className="font-semibold">1. Student Visa (Visum zu Studienzwecken):</p>
                                <blockquote className="ml-4 border-l-4 border-primary/30 pl-4 italic">
                                  For students who have already received an admission letter from a German university.
                                </blockquote>
                              </div>
                              <div>
                                <p className="font-semibold">2. Student Applicant Visa (Visum zur Studienbewerbung):</p>
                                <blockquote className="ml-4 border-l-4 border-primary/30 pl-4 italic">
                                  For students who need to visit Germany to finalize their university admission or attend entrance exams.
                                </blockquote>
                              </div>
                              <div>
                                <p className="font-semibold">3. Language Course Visa (Visum zum Sprachkurs):</p>
                                <blockquote className="ml-4 border-l-4 border-primary/30 pl-4 italic">
                                  For students who wish to attend a language course in Germany before starting their degree program.
                                </blockquote>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <p className="font-semibold text-foreground">Eligibility Criteria:</p>
                            <p>To apply for a German Student Visa, you must meet the following requirements:</p>
                            <ul className="space-y-2 ml-6">
                              <li>• <strong>Admission Letter:</strong> A valid admission letter (Zulassungsbescheid) from a recognized German university or institution.</li>
                              <li>• <strong>Proof of Financial Resources:</strong> Evidence that you can financially support yourself during your stay in Germany. For 2026, the required amount is approximately €11,904 per year, typically deposited in a blocked account (Sperrkonto).</li>
                              <li>• <strong>Health Insurance:</strong> Proof of health insurance coverage valid in Germany from the day of your arrival.</li>
                              <li>• <strong>Language Proficiency:</strong> Depending on the language of instruction, you may need to provide proof of German (e.g., TestDaF, DSH) or English (e.g., IELTS, TOEFL) language proficiency.</li>
                              <li>• <strong>Academic Qualifications:</strong> Copies of your previous academic transcripts and certificates, along with certified translations if required.</li>
                              <li>• <strong>Valid Passport:</strong> A passport valid for at least six months beyond your intended stay in Germany.</li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <p className="font-semibold text-foreground">Application Process:</p>
                            <ol className="space-y-2 ml-6 list-decimal">
                              <li><strong>Secure Admission:</strong> Apply to German universities and obtain an admission letter.</li>
                              <li><strong>Open a Blocked Account:</strong> Deposit the required amount (€11,904 for 2026) in a blocked account with a German bank.</li>
                              <li><strong>Obtain Health Insurance:</strong> Purchase health insurance that meets German visa requirements.</li>
                              <li><strong>Schedule a Visa Appointment:</strong> Book an appointment at the German embassy or consulate in your home country.</li>
                              <li><strong>Submit Documents:</strong> Provide all required documents, including your admission letter, proof of financial resources, health insurance, and academic certificates.</li>
                              <li><strong>Attend the Visa Interview:</strong> Attend your scheduled appointment and answer any questions about your study plans.</li>
                              <li><strong>Wait for Processing:</strong> Visa processing typically takes 6-12 weeks. Once approved, you will receive your visa to travel to Germany.</li>
                            </ol>
                          </div>

                          <div className="space-y-3">
                            <p className="font-semibold text-foreground">Benefits of Studying in Germany:</p>
                            <ul className="space-y-2 ml-6">
                              <li>• <strong>Low or No Tuition Fees:</strong> Most public universities in Germany charge little to no tuition fees, making education affordable.</li>
                              <li>• <strong>High-Quality Education:</strong> German universities are globally recognized for their academic excellence and research opportunities.</li>
                              <li>• <strong>Work Opportunities:</strong> Students can work part-time during their studies and full-time during breaks.</li>
                              <li>• <strong>Post-Study Work Visa:</strong> Graduates can stay in Germany for up to 18 months to search for a job related to their field of study.</li>
                              <li>• <strong>Pathway to Permanent Residence:</strong> After working in Germany for a few years, students can apply for permanent residence and eventually citizenship.</li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <p className="font-semibold text-foreground">Important Tips:</p>
                            <ul className="space-y-2 ml-6">
                              <li>• <strong>Apply Early:</strong> Start your visa application process at least 3 months before your intended departure date.</li>
                              <li>• <strong>Prepare Documents Carefully:</strong> Ensure all documents are complete, accurate, and translated if necessary.</li>
                              <li>• <strong>Attend the Interview:</strong> Be prepared to explain your study plans, career goals, and reasons for choosing Germany.</li>
                              <li>• <strong>Stay Informed:</strong> Check the German embassy website for the latest visa requirements and updates.</li>
                            </ul>
                          </div>

                          <p className="font-semibold text-foreground">
                            At Shivarita Global Consultancy, we provide end-to-end support for your German Student Visa application. Contact us today to start your journey to studying in Germany!
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Visa Type for Student */}
                  <AccordionItem value="visa-types">
                    <AccordionTrigger className="text-lg font-semibold">Visa Type for Student</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <p className="text-muted-foreground leading-relaxed">
                          We assist with various student visa categories across European countries, ensuring you choose the right visa type for your educational goals and future career plans.
                        </p>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="font-semibold">Visa Type</TableHead>
                                <TableHead className="font-semibold">Duration</TableHead>
                                <TableHead className="font-semibold">Work Rights</TableHead>
                                <TableHead className="font-semibold">Countries</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">Student Visa (Type D)</TableCell>
                                <TableCell>Course duration + 18 months</TableCell>
                                <TableCell>20 hrs/week during studies, full-time during breaks</TableCell>
                                <TableCell>Germany, Austria, Netherlands</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Long-term Study Visa</TableCell>
                                <TableCell>1 year (renewable annually)</TableCell>
                                <TableCell>Part-time work allowed</TableCell>
                                <TableCell>Portugal, Spain</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Student Residence Permit</TableCell>
                                <TableCell>Course duration</TableCell>
                                <TableCell>Limited hours per week</TableCell>
                                <TableCell>Malta, Hungary</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Germany Checklist 2026 */}
                  <AccordionItem value="germany-checklist">
                    <AccordionTrigger className="text-lg font-semibold">Germany Checklist 2026</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Complete documentation checklist for German student visa applications in 2026. Ensure all documents are prepared according to German embassy requirements.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <h4 className="font-semibold text-lg mb-4">Essential Documents</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                                <span className="font-bold text-primary min-w-[24px]">1.</span>
                                <span className="text-muted-foreground">Valid passport (minimum 6 months validity beyond intended stay)</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                                <span className="font-bold text-primary min-w-[24px]">2.</span>
                                <span className="text-muted-foreground">University admission letter (Zulassungsbescheid) or conditional admission</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                                <span className="font-bold text-primary min-w-[24px]">3.</span>
                                <span className="text-muted-foreground">Proof of financial resources (€11,904/year for 2026 via blocked account)</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                                <span className="font-bold text-primary min-w-[24px]">4.</span>
                                <span className="text-muted-foreground">Health insurance coverage (valid in Germany from day one)</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                                <span className="font-bold text-primary min-w-[24px]">5.</span>
                                <span className="text-muted-foreground">Academic transcripts and certificates (with certified translations)</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                                <span className="font-bold text-primary min-w-[24px]">6.</span>
                                <span className="text-muted-foreground">Language proficiency certificate (German: TestDaF/DSH or English: IELTS/TOEFL)</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="font-semibold text-lg mb-4">Additional Requirements</h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                                <span className="font-bold text-accent min-w-[24px]">7.</span>
                                <span className="text-muted-foreground">Motivation letter explaining study plans and career goals</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                                <span className="font-bold text-accent min-w-[24px]">8.</span>
                                <span className="text-muted-foreground">Detailed CV/Resume in German or English</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                                <span className="font-bold text-accent min-w-[24px]">9.</span>
                                <span className="text-muted-foreground">Proof of accommodation in Germany (rental contract or dormitory confirmation)</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                                <span className="font-bold text-accent min-w-[24px]">10.</span>
                                <span className="text-muted-foreground">Biometric photographs (according to German specifications)</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                                <span className="font-bold text-accent min-w-[24px]">11.</span>
                                <span className="text-muted-foreground">Completed visa application form (Videx form)</span>
                              </div>
                              <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg">
                                <span className="font-bold text-accent min-w-[24px]">12.</span>
                                <span className="text-muted-foreground">Visa fee payment receipt (€75 for student visa)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Eligibility */}
                  <AccordionItem value="eligibility">
                    <AccordionTrigger className="text-lg font-semibold">Eligibility</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <p className="text-muted-foreground leading-relaxed">
                          General eligibility criteria for student visa applications across European countries. Meeting these requirements significantly increases your chances of visa approval.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <Card className="border-primary/20">
                            <CardHeader>
                              <CardTitle className="text-lg">Academic Requirements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground">
                              <p>• Completed secondary education equivalent to host country standards</p>
                              <p>• Minimum GPA requirements met (typically 60% or above)</p>
                              <p>• Relevant academic background for chosen program</p>
                              <p>• Entrance exam scores if applicable (GRE, GMAT, etc.)</p>
                              <p>• Academic recommendation letters</p>
                            </CardContent>
                          </Card>
                          <Card className="border-accent/20">
                            <CardHeader>
                              <CardTitle className="text-lg">Language Proficiency</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground">
                              <p>• English: IELTS 6.0+ or TOEFL 80+ (for English-taught programs)</p>
                              <p>• German: TestDaF (4x4) or DSH-2 (for German-taught programs)</p>
                              <p>• French: DELF B2/DALF (for French-taught programs)</p>
                              <p>• Spanish: DELE B2 (for Spanish-taught programs)</p>
                              <p>• Language course completion certificates accepted in some cases</p>
                            </CardContent>
                          </Card>
                          <Card className="border-secondary/20">
                            <CardHeader>
                              <CardTitle className="text-lg">Financial Capacity</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground">
                              <p>• Blocked account with required minimum balance</p>
                              <p>• Bank statements showing sufficient funds (last 6 months)</p>
                              <p>• Scholarship award letters if applicable</p>
                              <p>• Sponsor's financial proof and affidavit</p>
                              <p>• Proof of funds for living expenses and tuition</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Country: Germany */}
                  <AccordionItem value="country-germany">
                    <AccordionTrigger className="text-lg font-semibold">Country: Germany</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                          <h4 className="font-semibold text-xl mb-3">Why Study in Germany?</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Germany offers world-class education with low or no tuition fees at public universities, making it one of the most attractive destinations for international students. With its strong economy, excellent research facilities, and post-study work opportunities, Germany provides an ideal environment for academic and professional growth.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Key Benefits</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>• No tuition fees at public universities (only semester contribution of €250-350)</li>
                              <li>• 18-month post-study work visa (Job Seeker Visa)</li>
                              <li>• High-quality education system ranked among world's best</li>
                              <li>• Strong economy with excellent job opportunities</li>
                              <li>• Central European location with easy travel access</li>
                              <li>• Numerous English-taught programs available</li>
                              <li>• Affordable cost of living compared to other Western countries</li>
                              <li>• Safe and welcoming environment for international students</li>
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Popular Study Fields</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>• Engineering and Technology (Mechanical, Electrical, Automotive)</li>
                              <li>• Business Administration and Management</li>
                              <li>• Computer Science and Information Technology</li>
                              <li>• Natural Sciences (Physics, Chemistry, Biology)</li>
                              <li>• Medicine and Healthcare</li>
                              <li>• Arts, Design, and Humanities</li>
                              <li>• Environmental Sciences and Sustainability</li>
                              <li>• Economics and Finance</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-5 bg-primary/5 rounded-lg border border-primary/10">
                            <h4 className="font-semibold text-lg mb-3">Processing Timeline</h4>
                            <p className="text-muted-foreground mb-3">
                              Student visa processing typically takes 6-12 weeks from application submission. We strongly recommend applying at least 3 months before your intended start date to account for any delays.
                            </p>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <p>• Application submission: Week 0</p>
                              <p>• Initial review: Weeks 1-2</p>
                              <p>• Document verification: Weeks 3-6</p>
                              <p>• Interview scheduling: Weeks 7-8</p>
                              <p>• Final decision: Weeks 10-12</p>
                            </div>
                          </div>
                          <div className="p-5 bg-accent/5 rounded-lg border border-accent/10">
                            <h4 className="font-semibold text-lg mb-3">Top Universities</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>• Technical University of Munich (TUM)</li>
                              <li>• Ludwig Maximilian University of Munich</li>
                              <li>• Heidelberg University</li>
                              <li>• Humboldt University of Berlin</li>
                              <li>• RWTH Aachen University</li>
                              <li>• University of Freiburg</li>
                              <li>• Free University of Berlin</li>
                              <li>• University of Mannheim</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PROFESSIONALS TAB */}
          <TabsContent value="professionals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Professional Visa Services
                </CardTitle>
                <CardDescription>
                  Take your career global with our professional immigration services. We help skilled workers, executives, and professionals navigate work visa processes and secure employment abroad.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion 
                  type="single" 
                  collapsible 
                  className="w-full"
                  value={activeAccordion}
                  onValueChange={setActiveAccordion}
                >
                  
                  {/* Skilled / EU Blue Card */}
                  <AccordionItem value="eu-blue-card" id="eu-blue-card">
                    <AccordionTrigger className="text-lg font-semibold">Skilled / EU Blue Card</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <h4 className="font-semibold text-xl text-foreground">What is the EU Blue Card?</h4>
                          <p>
                            The EU Blue Card is a work and residence permit designed for highly qualified non-EU citizens who wish to work and live in participating European Union countries. It provides a streamlined pathway to employment in the EU, offering numerous benefits such as family reunification, mobility within the EU, and a fast-track route to permanent residence.
                          </p>
                          <p>
                            The EU Blue Card is particularly attractive for professionals in high-demand fields such as IT, engineering, healthcare, and finance. It allows holders to work in any EU Blue Card participating country, making it an excellent option for those seeking career opportunities across Europe.
                          </p>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Eligibility Criteria</h4>
                          <p>To qualify for an EU Blue Card, applicants must meet the following requirements:</p>
                          <ul className="space-y-2 ml-6">
                            <li>• <strong>Higher Education Qualification:</strong> A university degree (Bachelor's or higher) recognized in the host country, or at least five years of professional experience in a relevant field.</li>
                            <li>• <strong>Job Offer:</strong> A binding job offer or employment contract from an employer in an EU Blue Card participating country.</li>
                            <li>• <strong>Minimum Salary Threshold:</strong> The job offer must meet the minimum salary requirement, which varies by country. For 2026, the thresholds are as follows:
                              <ul className="ml-6 mt-2 space-y-1">
                                <li>- Germany €50,700 for regular & €45,934.20 for Shortage occupation as of 2026</li>
                                <li>- Austria: €48,000 annually</li>
                                <li>- Netherlands: €46,107 annually</li>
                                <li>- Spain: €42,000 annually</li>
                                <li>- Portugal: €38,500 annually</li>
                              </ul>
                            </li>
                            <li>• <strong>Health Insurance:</strong> Proof of comprehensive health insurance coverage valid in the host country.</li>
                            <li>• <strong>Clean Criminal Record:</strong> A certificate of good conduct or police clearance from your home country.</li>
                            <li>• <strong>Valid Passport:</strong> A passport valid for at least six months beyond your intended stay.</li>
                          </ul>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Key Benefits of the EU Blue Card</h4>
                          <ul className="space-y-2 ml-6">
                            <li>• <strong>Work and Live in the EU:</strong> The EU Blue Card allows you to work and reside in any participating EU country, providing flexibility and mobility.</li>
                            <li>• <strong>Family Reunification:</strong> Your spouse, partner, and dependent children can join you in the host country and are often granted work permits without restrictions.</li>
                            <li>• <strong>Fast-Track to Permanent Residence:</strong> After 33 months of employment (or 21 months with B1-level German language proficiency in Germany), you can apply for permanent residence.</li>
                            <li>• <strong>Path to EU Citizenship:</strong> Once you obtain permanent residence, you can apply for citizenship after meeting the residency requirements of the host country.</li>
                            <li>• <strong>Mobility Within the EU:</strong> After 18 months of employment in one EU country, you can move to another EU Blue Card participating country for work without needing a new visa.</li>
                            <li>• <strong>Access to Social Benefits:</strong> EU Blue Card holders are entitled to the same social benefits as nationals of the host country, including healthcare, education, and social security.</li>
                            <li>• <strong>No Quota Restrictions:</strong> Unlike some work visas, the EU Blue Card is not subject to annual quotas, making it easier to obtain.</li>
                          </ul>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Required Documents</h4>
                          <p>To apply for an EU Blue Card, you will need to provide the following documents:</p>
                          <ul className="space-y-2 ml-6">
                            <li>• Valid passport (with at least six months validity)</li>
                            <li>• University degree certificate (with certified translation if required)</li>
                            <li>• Employment contract or binding job offer from an EU employer</li>
                            <li>• Proof of professional qualifications or work experience</li>
                            <li>• Health insurance coverage valid in the host country</li>
                            <li>• Clean criminal record certificate from your home country</li>
                            <li>• Proof of accommodation in the host country (rental contract or hotel booking)</li>
                            <li>• Biometric photographs (according to EU specifications)</li>
                            <li>• Completed visa application form</li>
                            <li>• Visa fee payment receipt</li>
                          </ul>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Mobility Within the EU</h4>
                          <p>
                            One of the most significant advantages of the EU Blue Card is the ability to move between EU countries for work. After 18 months of employment in one EU country, you can relocate to another participating country without needing to apply for a new visa. However, you must notify the authorities in the new country and meet their specific requirements, such as having a job offer and meeting the minimum salary threshold.
                          </p>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Path to Permanent Residence</h4>
                          <p>
                            The EU Blue Card offers a fast-track route to permanent residence. In most countries, you can apply for permanent residence after 33 months of employment. In Germany, this period is reduced to 21 months if you can demonstrate B1-level German language proficiency. Permanent residence grants you the right to live and work in the host country indefinitely, with the same rights as nationals.
                          </p>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Why Choose the EU Blue Card?</h4>
                          <p>
                            The EU Blue Card is an excellent option for highly skilled professionals seeking to advance their careers in Europe. It offers unparalleled flexibility, mobility, and security, making it one of the most sought-after work permits in the world. Whether you're looking to work in Germany, Austria, the Netherlands, Spain, or Portugal, the EU Blue Card provides a clear pathway to success.
                          </p>
                          <p>
                            At Shivarita Global Consultancy, we specialize in helping professionals navigate the EU Blue Card application process. From finding the right job opportunity to preparing your documents and submitting your application, we provide end-to-end support to ensure your success. Contact us today to start your journey to Europe!
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Job Seeker / Chancenkarte */}
                  <AccordionItem value="job-seeker" id="job-seeker">
                    <AccordionTrigger className="text-lg font-semibold">Job Seeker / Chancenkarte</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <h4 className="font-semibold text-xl text-foreground">Germany: Chancenkarte (Opportunity Card)</h4>
                          <p>
                            Germany's Chancenkarte, or Opportunity Card, is a revolutionary points-based immigration system introduced in 2024 to attract skilled workers from around the world. Unlike traditional work visas, the Chancenkarte allows qualified professionals to enter Germany to search for employment without needing a job offer in advance. This innovative visa is designed to address Germany's labor shortage and provide opportunities for talented individuals to explore the German job market.
                          </p>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Eligibility Criteria</h4>
                          <p>
                            To qualify for the Chancenkarte, applicants must score at least 6 points on Germany's points-based system. Points are awarded based on the following criteria:
                          </p>
                          <div className="ml-6 space-y-4 mt-4">
                            <div>
                              <p className="font-semibold text-foreground">1. Qualification (Maximum 4 points):</p>
                              <ul className="ml-6 space-y-1">
                                <li>• Recognized university degree: 3 points</li>
                                <li>• Vocational training (2+ years): 2 points</li>
                                <li>• Additional qualification bonus: +1 point</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">2. Professional Experience (Maximum 3 points):</p>
                              <ul className="ml-6 space-y-1">
                                <li>• 5+ years of experience: 3 points</li>
                                <li>• 2-5 years of experience: 2 points</li>
                                <li>• Less than 2 years: 1 point</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">3. Language Skills (Maximum 2 points):</p>
                              <ul className="ml-6 space-y-1">
                                <li>• German B2 level or higher: 2 points</li>
                                <li>• German A2 + English B2: 1 point</li>
                                <li>• German A1: 0.5 points</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">4. Age (Maximum 1 point):</p>
                              <ul className="ml-6 space-y-1">
                                <li>• Under 35 years old: 1 point</li>
                                <li>• 35 years or older: 0 points</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">5. Connection to Germany (Maximum 1 point):</p>
                              <ul className="ml-6 space-y-1">
                                <li>• Previous stay in Germany (6+ months): 1 point</li>
                                <li>• Spouse/partner with German residence: 1 point</li>
                              </ul>
                            </div>
                          </div>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Key Requirements</h4>
                          <ul className="space-y-2 ml-6">
                            <li>• <strong>Minimum Points:</strong> At least 6 points on the points-based system.</li>
                            <li>• <strong>Proof of Financial Means:</strong> Evidence of sufficient funds to support yourself during your stay in Germany (approximately €1,027 per month).</li>
                            <li>• <strong>Health Insurance:</strong> Comprehensive health insurance coverage valid in Germany.</li>
                            <li>• <strong>Valid Passport:</strong> A passport valid for at least six months beyond your intended stay.</li>
                            <li>• <strong>Clean Criminal Record:</strong> A certificate of good conduct from your home country.</li>
                          </ul>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Benefits of the Chancenkarte</h4>
                          <ul className="space-y-2 ml-6">
                            <li>• <strong>12-Month Validity:</strong> The Chancenkarte is valid for one year, giving you ample time to search for employment in Germany.</li>
                            <li>• <strong>Work Rights:</strong> You can work up to 20 hours per week in any job and take on two-week trial employment periods to test potential employers.</li>
                            <li>• <strong>No Job Offer Required:</strong> Unlike traditional work visas, you don't need a job offer to apply for the Chancenkarte.</li>
                            <li>• <strong>Pathway to Permanent Residence:</strong> Once you secure employment, you can transition to a work visa or EU Blue Card and eventually apply for permanent residence.</li>
                            <li>• <strong>Family Inclusion:</strong> Your spouse and dependent children can join you in Germany, subject to meeting certain requirements.</li>
                          </ul>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Job Seeker Visas in Other European Countries</h4>
                          
                          <div className="ml-6 space-y-6 mt-4">
                            <div>
                              <p className="font-semibold text-lg text-foreground">AUSTRIA: Red-White-Red Card for Very Highly Qualified Workers</p>
                              <p>
                                Austria's Red-White-Red Card for Very Highly Qualified Workers is designed for top-tier professionals with exceptional qualifications and skills. This visa allows highly qualified individuals to enter Austria to search for employment or start working immediately if they already have a job offer. The card is valid for 24 months and provides a pathway to permanent residence after meeting certain requirements. Applicants must demonstrate outstanding professional achievements, such as advanced degrees, significant work experience, or recognition in their field. The visa also allows family members to join the applicant in Austria.
                              </p>
                            </div>

                            <div>
                              <p className="font-semibold text-lg text-foreground">PORTUGAL - Skilled Job Seeker Visa</p>
                              <p>
                                Portugal's Skilled Job Seeker Visa is designed for qualified professionals who wish to enter the country to search for employment. The visa is valid for 120 days (approximately 4 months) and can be extended for up to one year. Applicants must have a recognized university degree or professional qualifications, proof of sufficient financial means to support themselves during their stay, and comprehensive health insurance. While the visa does not allow full-time employment during the job search period, limited work is permitted with proper authorization. Once employment is secured, applicants can transition to a work visa or residence permit. Portugal's welcoming immigration policies and growing economy make it an attractive destination for skilled professionals.
                              </p>
                            </div>

                            <div>
                              <p className="font-semibold text-lg text-foreground">MALTA - Key Employee Initiative (KEI) for India</p>
                              <p>
                                Malta's Key Employee Initiative (KEI) is a special program designed to attract highly skilled professionals from India to work in Malta. The KEI visa is tailored for individuals with expertise in high-demand sectors such as IT, finance, gaming, and healthcare. This initiative allows Indian nationals to work in Malta under favorable conditions, including streamlined visa processing and family reunification options.
                              </p>
                              <p className="font-semibold text-foreground mt-4">Eligibility Criteria:</p>
                              <ul className="ml-6 space-y-1">
                                <li>• Applicants must have a job offer from a Maltese employer in a qualifying sector.</li>
                                <li>• A recognized university degree or professional qualifications in a relevant field.</li>
                                <li>• Proof of professional experience (typically 2+ years in the field).</li>
                                <li>• Clean criminal record and valid passport.</li>
                                <li>• Comprehensive health insurance coverage valid in Malta.</li>
                              </ul>
                              <p className="font-semibold text-foreground mt-4">Key Benefits:</p>
                              <ul className="ml-6 space-y-1">
                                <li>• Fast-track visa processing for Indian nationals.</li>
                                <li>• Family members (spouse and dependent children) can join the applicant in Malta.</li>
                                <li>• Access to Malta's high quality of life, excellent healthcare, and education systems.</li>
                                <li>• Pathway to permanent residence and EU citizenship after meeting residency requirements.</li>
                                <li>• Competitive salaries and favorable tax regimes for skilled professionals.</li>
                              </ul>
                              <p className="font-semibold text-foreground mt-4">Permit Details:</p>
                              <p>
                                The KEI permit is typically issued for one year and can be renewed annually. After several years of continuous residence and employment in Malta, applicants may be eligible to apply for permanent residence or citizenship. Malta's strategic location in the Mediterranean, English-speaking environment, and thriving economy make it an ideal destination for Indian professionals seeking career opportunities in Europe.
                              </p>
                            </div>

                            <div>
                              <p className="font-semibold text-lg text-foreground">SPAIN - Highly Qualified Worker Visa</p>
                              <p>
                                Spain's Highly Qualified Worker Visa is designed for professionals with advanced skills and qualifications who wish to work in Spain. This visa is valid for 12 months and allows highly qualified individuals to search for employment or start working immediately if they have a job offer. Applicants must have a university degree, proof of sufficient financial means, and comprehensive health insurance. The visa does not permit full-time employment during the job search period, but once employment is secured, it can be converted to a work permit. Spain's vibrant culture, excellent quality of life, and growing economy make it an attractive destination for skilled professionals. The visa also provides a pathway to permanent residence and Spanish citizenship after meeting residency requirements.
                              </p>
                            </div>

                            <div>
                              <p className="font-semibold text-lg text-foreground">IRELAND - Critical Skills Employment Permit</p>
                              <p>
                                Ireland's Critical Skills Employment Permit is designed for highly skilled professionals in occupations that are in high demand in the Irish labor market. This permit allows qualified individuals to work in Ireland in sectors such as IT, engineering, healthcare, and finance. The permit is valid for two years and provides a fast-track pathway to permanent residence. Applicants must have a job offer from an Irish employer with a minimum salary threshold (typically €32,000 per year, or €64,000 for certain occupations). The permit also allows family members to join the applicant in Ireland. After two years of employment, permit holders can apply for permanent residence (Stamp 4), which grants the right to live and work in Ireland indefinitely. Ireland's strong economy, English-speaking environment, and welcoming immigration policies make it an ideal destination for skilled professionals.
                              </p>
                            </div>
                          </div>

                          <h4 className="font-semibold text-xl text-foreground mt-6">Why Choose a Job Seeker Visa?</h4>
                          <p>
                            Job Seeker Visas, including Germany's Chancenkarte, provide a unique opportunity for skilled professionals to explore the European job market without the pressure of securing employment before arrival. These visas offer flexibility, allowing you to network, attend interviews, and find the right job that matches your skills and career goals.
                          </p>
                          <p>
                            At Shivarita Global Consultancy, we specialize in helping professionals navigate the Job Seeker Visa application process. From assessing your eligibility to preparing your documents and submitting your application, we provide comprehensive support to ensure your success. Contact us today to start your journey to Europe!
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Digital Nomad Visa */}
                  <AccordionItem value="digital-nomad" id="digital-nomad">
                    <AccordionTrigger className="text-lg font-semibold">Digital Nomad Visa</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        {/* Overview */}
                        <div className="space-y-4">
                          <h4 className="font-semibold text-xl">Overview</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            A Digital Nomad Visa is a special residence permit designed for remote workers, freelancers, and self-employed individuals who wish to live in a foreign country while working for clients or employers based outside that country. This visa allows digital nomads to legally reside in a host country for an extended period, typically ranging from six months to several years, without needing traditional employment sponsorship.
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Digital Nomad Visas have become increasingly popular as more countries recognize the economic and cultural benefits of attracting remote workers. These visas are ideal for professionals in fields such as IT, marketing, design, consulting, writing, and other remote-friendly industries.
                          </p>
                        </div>

                        {/* Facts */}
                        <div className="space-y-4">
                          <h4 className="font-semibold text-xl">Facts</h4>
                          <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Eligibility:</strong> Applicants must demonstrate a stable income from remote work, freelancing, or self-employment. Income requirements vary by country but typically range from €2,000 to €3,500 per month.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Duration:</strong> Most Digital Nomad Visas are valid for one year and can be renewed annually, with some countries offering multi-year options.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Work Restrictions:</strong> Visa holders are generally not allowed to work for local companies or clients in the host country. They must work remotely for employers or clients based outside the country.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Tax Implications:</strong> Tax obligations vary by country. Some countries offer favorable tax regimes for digital nomads, while others may require tax residency after a certain period. It's essential to consult a tax advisor to understand your obligations.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Family Inclusion:</strong> Many Digital Nomad Visas allow applicants to include their spouse, partner, and dependent children, making it a great option for families.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Health Insurance:</strong> Applicants are typically required to have comprehensive health insurance coverage valid in the host country.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Schengen Access:</strong> Digital Nomad Visas issued by Schengen Area countries (e.g., Portugal, Spain, Malta) allow visa-free travel within the Schengen Zone, making it easy to explore Europe.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-4">
                          <h4 className="font-semibold text-xl">Benefits</h4>
                          <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Legal Residency:</strong> Live and work legally in your chosen country without the need for traditional employment sponsorship.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Flexibility:</strong> Enjoy the freedom to work from anywhere while experiencing a new culture and lifestyle.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Quality of Life:</strong> Many countries offering Digital Nomad Visas boast excellent quality of life, affordable living costs, and vibrant expat communities.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Networking Opportunities:</strong> Connect with other digital nomads, entrepreneurs, and professionals in co-working spaces and expat communities.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Pathway to Permanent Residency:</strong> In some countries, holding a Digital Nomad Visa can be a stepping stone toward permanent residency or citizenship.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Tax Benefits:</strong> Some countries offer favorable tax regimes for digital nomads, such as Portugal's Non-Habitual Resident (NHR) program or Malta's flat tax rate.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-primary font-bold min-w-[20px]">•</span>
                              <span><strong>Family-Friendly:</strong> Bring your family along and enjoy a new adventure together.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Country Images Section with Names at Top and Captions at Bottom */}
                        <div className="space-y-8 mt-8">
                          <h4 className="font-semibold text-xl text-center mb-6">Explore Digital Nomad Destinations</h4>
                          
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Portugal */}
                            <div className="space-y-3">
                              <h5 className="text-center font-semibold text-lg mb-2">Portugal</h5>
                              <div className="relative overflow-hidden rounded-lg border border-primary/20 shadow-md">
                                <img 
                                  src="/assets/PORTUGAL.png" 
                                  alt="Portugal" 
                                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-3 bg-primary/10 rounded-lg">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  Portugal is the best option for foreigners and their families who need to obtain citizenship as quickly as possible. Children of digital nomads obtain citizenship if their parents have lived there for a year with a residence permit.
                                </p>
                              </div>
                            </div>

                            {/* Spain */}
                            <div className="space-y-3">
                              <h5 className="text-center font-semibold text-lg mb-2">Spain</h5>
                              <div className="relative overflow-hidden rounded-lg border border-primary/20 shadow-md">
                                <img 
                                  src="/assets/SPAIN.png" 
                                  alt="Spain" 
                                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-3 bg-primary/10 rounded-lg">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  Spain requires the least investment and is also suitable for those planning to work in the country. Additionally, the Digital Nomad Visa allows moving to Spain with the largest number of relatives.
                                </p>
                              </div>
                            </div>

                            {/* Malta */}
                            <div className="space-y-3">
                              <h5 className="text-center font-semibold text-lg mb-2">Malta</h5>
                              <div className="relative overflow-hidden rounded-lg border border-primary/20 shadow-md">
                                <img 
                                  src="/assets/MALTA.png" 
                                  alt="Malta" 
                                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-3 bg-primary/10 rounded-lg">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  In Malta a unique feature of the Nomad Residence Permit is that you don't need to think about real estate in advance. To apply, it is enough to book a hotel room.
                                </p>
                              </div>
                            </div>

                            {/* Hungary */}
                            <div className="space-y-3">
                              <h5 className="text-center font-semibold text-lg mb-2">Hungary</h5>
                              <div className="relative overflow-hidden rounded-lg border border-primary/20 shadow-md">
                                <img 
                                  src="/assets/HUNGARY.png" 
                                  alt="Hungary" 
                                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-3 bg-primary/10 rounded-lg">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  Hungary is ideal for applicants who do not plan to live in the country and, therefore, do not want to pay taxes.
                                </p>
                              </div>
                            </div>

                            {/* Italy */}
                            <div className="space-y-3">
                              <h5 className="text-center font-semibold text-lg mb-2">Italy</h5>
                              <div className="relative overflow-hidden rounded-lg border border-primary/20 shadow-md">
                                <img 
                                  src="/assets/ITALY.png" 
                                  alt="Italy" 
                                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <div className="p-3 bg-primary/10 rounded-lg">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  Italy allows relocation with the whole family, including the digital nomad's children and parents. Besides, it provides a path to EU citizenship in 10 years without renouncing the first passport.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Comparison Chart - Reduced to 65% (20% reduction from previous 85% size) */}
                        <div className="mt-10 space-y-4 flex flex-col items-center">
                          <h4 className="font-semibold text-xl text-center">Comparison of Digital Nomad Visas by six criteria</h4>
                          <div className="relative overflow-hidden rounded-lg border border-accent/20 shadow-lg" style={{ width: '65%', maxWidth: '100%' }}>
                            <img 
                              src="/assets/Comparison Chart.jpeg" 
                              alt="Comparison of Digital Nomad Visas by six criteria" 
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* INVESTORS TAB */}
          <TabsContent value="investors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Investment Visa Services
                </CardTitle>
                <CardDescription>
                  Golden Visa programs for investors and high-net-worth individuals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  
                  {/* Golden Visa - Portugal */}
                  <AccordionItem value="portugal-golden">
                    <AccordionTrigger className="text-lg font-semibold">Golden Visa - Portugal</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Portugal's Golden Visa program offers residency through investment, providing access to the Schengen area and a clear path to Portuguese citizenship. With minimal stay requirements and excellent quality of life, it remains one of Europe's most attractive investment immigration programs.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-xl mb-3">Investment Options</h4>
                            <div className="space-y-3">
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Capital Transfer</p>
                                <p className="text-muted-foreground">€1,500,000 minimum investment in Portuguese bank or approved investment fund</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Investment Funds</p>
                                <p className="text-muted-foreground">€500,000 in qualifying investment funds (venture capital, private equity)</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Business Investment</p>
                                <p className="text-muted-foreground">€500,000 in Portuguese company creating minimum 5 permanent jobs</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Research Activities</p>
                                <p className="text-muted-foreground">€500,000 investment in scientific research or technology transfer</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Cultural Heritage</p>
                                <p className="text-muted-foreground">€250,000 in restoration of Portuguese cultural heritage or national arts</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold text-xl mb-3">Program Benefits</h4>
                            <ul className="space-y-3 text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Visa-free travel throughout Schengen area (26 countries)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Minimal stay requirements (7 days in first year, 14 days in subsequent 2-year periods)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Family members included (spouse, dependent children, dependent parents)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Path to Portuguese citizenship after 5 years of residency</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>No requirement to reside permanently in Portugal</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Access to Portuguese healthcare and education systems</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Potential tax benefits under Non-Habitual Resident (NHR) regime</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Right to work and study in Portugal</span>
                              </li>
                            </ul>
                            
                            <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
                              <p className="font-semibold text-lg mb-2">Processing Timeline</p>
                              <div className="space-y-2 text-muted-foreground">
                                <p>• Initial application review: 2-3 months</p>
                                <p>• Pre-approval and investment completion: 3-4 months</p>
                                <p>• Residence card issuance: 2-3 months after approval</p>
                                <p>• <span className="font-semibold">Total timeline: 6-8 months on average</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="overflow-x-auto mt-6">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="font-semibold">Period</TableHead>
                                <TableHead className="font-semibold">Minimum Stay Requirement</TableHead>
                                <TableHead className="font-semibold">Renewal Process</TableHead>
                                <TableHead className="font-semibold">Residence Status</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">Year 1-2</TableCell>
                                <TableCell>7 days in first year</TableCell>
                                <TableCell>Renewal after 1 year</TableCell>
                                <TableCell>Temporary residence permit</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Year 3-5</TableCell>
                                <TableCell>14 days per 2-year period</TableCell>
                                <TableCell>Renewal after 2 years</TableCell>
                                <TableCell>Temporary residence permit</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Year 5+</TableCell>
                                <TableCell>Maintain investment</TableCell>
                                <TableCell>Apply for permanent residence or citizenship</TableCell>
                                <TableCell>Permanent residence / Citizenship eligible</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Golden Visa - Dubai */}
                  <AccordionItem value="dubai-golden">
                    <AccordionTrigger className="text-lg font-semibold">Golden Visa - Dubai (UAE)</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 p-4">
                        <p className="text-muted-foreground leading-relaxed">
                          The UAE Golden Visa offers long-term residency for investors, entrepreneurs, and talented professionals, providing stability and exceptional business opportunities in Dubai. With its strategic location, world-class infrastructure, and tax-free environment, Dubai has become a premier destination for global investors.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-xl mb-3">Investment Categories</h4>
                            <div className="space-y-3">
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Real Estate Investment</p>
                                <p className="text-muted-foreground">AED 2,000,000 (approximately €500,000) property investment in Dubai real estate</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Business Investment</p>
                                <p className="text-muted-foreground">AED 2,000,000 investment in existing or new company with business license</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Bank Deposit</p>
                                <p className="text-muted-foreground">AED 2,000,000 public deposit in UAE bank for minimum 2 years</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Specialized Talents</p>
                                <p className="text-muted-foreground">Exceptional professionals: doctors, scientists, artists, athletes, and researchers</p>
                              </div>
                              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                                <p className="font-semibold text-lg mb-1">Entrepreneurs</p>
                                <p className="text-muted-foreground">Startup founders with approved business plan and funding from accredited incubator</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-semibold text-xl mb-3">Key Advantages</h4>
                            <ul className="space-y-3 text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>10-year renewable residence visa (5-year option also available)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>No sponsor required - complete independence</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>100% business ownership in most sectors</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Family members included (spouse, children, parents)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Zero personal income tax</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Strategic business location connecting East and West</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>World-class infrastructure and amenities</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Safe, cosmopolitan environment with high quality of life</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>No minimum stay requirements</span>
                              </li>
                            </ul>
                            
                            <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
                              <p className="font-semibold text-lg mb-2">Processing Timeline</p>
                              <div className="space-y-2 text-muted-foreground">
                                <p>• Application submission to initial review: 2-4 weeks</p>
                                <p>• Document verification and approval: 4-6 weeks</p>
                                <p>• Emirates ID and visa stamping: 2-3 weeks</p>
                                <p>• <span className="font-semibold">Total timeline: 2-3 months</span></p>
                                <p className="text-sm mt-2">Fast-track processing options available for premium service</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 mt-6">
                          <h4 className="font-semibold text-xl mb-4">Eligibility Requirements by Category</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <p className="font-semibold text-lg mb-3">For Investors</p>
                              <ul className="space-y-2 text-muted-foreground">
                                <li>• Valid passport with minimum 6 months validity</li>
                                <li>• Proof of investment (property deed, business license, or bank certificate)</li>
                                <li>• Clean criminal record certificate from home country</li>
                                <li>• Comprehensive health insurance for UAE</li>
                                <li>• Proof of financial solvency</li>
                                <li>• Recent passport-sized photographs</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-semibold text-lg mb-3">For Entrepreneurs</p>
                              <ul className="space-y-2 text-muted-foreground">
                                <li>• Detailed business plan with financial projections</li>
                                <li>• Proof of previous successful projects or ventures</li>
                                <li>• Approval letter from accredited business incubator in UAE</li>
                                <li>• Evidence of financial solvency and funding</li>
                                <li>• Educational certificates and professional credentials</li>
                                <li>• Letter of recommendation from recognized institution</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ANCILLARY TAB */}
          <TabsContent value="ancillary" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                  Ancillary Services
                </CardTitle>
                <CardDescription>
                  Comprehensive support services to ensure a smooth transition to your new destination
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Financial Proof Guide */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Financial Proof Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Expert guidance on preparing and presenting financial documentation for visa applications. We ensure your financial documents meet all embassy requirements and present your financial situation in the best possible light.
                      </p>
                      <div className="space-y-3">
                        <h5 className="font-semibold">Services Include:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Blocked account setup assistance (Sperrkonto for Germany)</li>
                          <li>• Bank statement preparation and formatting</li>
                          <li>• Sponsor letter drafting and notarization support</li>
                          <li>• Financial document verification and authentication</li>
                          <li>• Currency conversion guidance and calculations</li>
                          <li>• Scholarship documentation support and verification</li>
                          <li>• Investment proof documentation for investor visas</li>
                          <li>• Income tax returns and financial statements review</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="font-semibold mb-2">Processing Time</p>
                        <p className="text-muted-foreground">1-2 weeks for complete financial documentation package</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Insurance */}
                  <Card className="border-accent/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Insurance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Comprehensive health and travel insurance solutions tailored specifically for visa requirements. We partner with leading insurance providers to offer coverage that meets embassy standards and protects you throughout your journey.
                      </p>
                      <div className="space-y-3">
                        <h5 className="font-semibold">Coverage Options:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Health insurance (public and private options)</li>
                          <li>• Travel insurance for visa applications</li>
                          <li>• Liability insurance coverage</li>
                          <li>• Student insurance packages (TK, AOK, DAK)</li>
                          <li>• Family coverage plans with dependent options</li>
                          <li>• Emergency medical coverage and repatriation</li>
                          <li>• Dental and optical coverage add-ons</li>
                          <li>• Long-term care insurance for permanent residents</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-accent/5 rounded-lg border border-accent/10">
                        <p className="font-semibold mb-2">Starting From</p>
                        <p className="text-muted-foreground">€30/month for basic coverage meeting visa requirements</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Language */}
                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        Language
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Language training and certification support for visa and integration requirements. Our experienced instructors and proven curriculum help you achieve the language proficiency needed for your visa application and successful integration.
                      </p>
                      <div className="space-y-3">
                        <h5 className="font-semibold">Language Services:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• German language courses (A1 to C2 levels)</li>
                          <li>• English proficiency training (IELTS, TOEFL preparation)</li>
                          <li>• Test preparation courses (TestDaF, DSH, Goethe-Zertifikat)</li>
                          <li>• Online and in-person class options</li>
                          <li>• Certification exam registration assistance</li>
                          <li>• Integration course guidance (Integrationskurs)</li>
                          <li>• Business language training for professionals</li>
                          <li>• One-on-one tutoring sessions available</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                        <p className="font-semibold mb-2">Course Duration</p>
                        <p className="text-muted-foreground">3-6 months per level (A1, A2, B1, B2, C1, C2)</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Accommodation */}
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Accommodation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Housing search and rental assistance to help you settle comfortably in your new country. We provide end-to-end support from finding suitable accommodation to completing all registration formalities.
                      </p>
                      <div className="space-y-3">
                        <h5 className="font-semibold">Accommodation Services:</h5>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Apartment and house search assistance</li>
                          <li>• Student dormitory applications (Studentenwohnheim)</li>
                          <li>• Rental contract review and negotiation</li>
                          <li>• Temporary housing arrangements (short-term rentals)</li>
                          <li>• Landlord communication and translation support</li>
                          <li>• City registration assistance (Anmeldung/Wohnsitzanmeldung)</li>
                          <li>• Utility setup and connection services</li>
                          <li>• Neighborhood orientation and local area guidance</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="font-semibold mb-2">Service Fee</p>
                        <p className="text-muted-foreground">One-time fee based on location and accommodation type</p>
                      </div>
                    </CardContent>
                  </Card>

                </div>

                {/* Package Benefits */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-xl mb-4">Complete Package Benefits</h4>
                  <p className="text-muted-foreground mb-6">
                    Combine multiple ancillary services for a comprehensive support package at discounted rates. Our bundled packages provide better value and ensure all aspects of your relocation are professionally managed.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-5 bg-background rounded-lg border border-primary/20 shadow-sm">
                      <p className="font-semibold text-lg mb-2">Basic Package</p>
                      <p className="text-muted-foreground mb-3">Financial Proof Guide + Insurance</p>
                      <p className="text-primary font-bold text-xl">Save 15%</p>
                      <p className="text-sm text-muted-foreground mt-2">Perfect for straightforward visa applications</p>
                    </div>
                    <div className="p-5 bg-background rounded-lg border border-accent/20 shadow-sm">
                      <p className="font-semibold text-lg mb-2">Standard Package</p>
                      <p className="text-muted-foreground mb-3">Financial + Insurance + Language</p>
                      <p className="text-accent font-bold text-xl">Save 20%</p>
                      <p className="text-sm text-muted-foreground mt-2">Ideal for students and professionals</p>
                    </div>
                    <div className="p-5 bg-background rounded-lg border border-secondary/20 shadow-sm">
                      <p className="font-semibold text-lg mb-2">Premium Package</p>
                      <p className="text-muted-foreground mb-3">All Services Included</p>
                      <p className="text-secondary font-bold text-xl">Save 25%</p>
                      <p className="text-sm text-muted-foreground mt-2">Complete relocation support solution</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
}
