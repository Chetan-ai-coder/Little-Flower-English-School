"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import {
  ClipboardList,
  FileCheck,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Download,
  Phone,
  Mail,
} from "lucide-react"

const admissionSteps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Submit Application",
    description: "Complete the online application form with required information and documents.",
  },
  {
    step: 2,
    icon: FileCheck,
    title: "Document Verification",
    description: "Our team will review your application and verify submitted documents.",
  },
  {
    step: 3,
    icon: Calendar,
    title: "Assessment & Interview",
    description: "Schedule an assessment test and interview with our admissions team.",
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: "Admission Confirmation",
    description: "Receive admission decision and complete enrollment formalities.",
  },
]

const requiredDocuments = [
  "Birth Certificate (original and photocopy)",
  "Previous School Records / Report Cards",
  "Transfer Certificate (if applicable)",
  "Passport-size Photographs (4 copies)",
  "Parent/Guardian ID Proof",
  "Address Proof",
  "Medical Records / Immunization Records",
  "Any Special Needs Documentation (if applicable)",
]

const feeStructure = [
  { level: "Primary School (Grades 1-5)", admission: "$500", annual: "$8,500" },
  { level: "Middle School (Grades 6-8)", admission: "$600", annual: "$10,500" },
  { level: "High School (Grades 9-12)", admission: "$700", annual: "$12,500" },
]

const faqs = [
  {
    question: "What is the age requirement for admission?",
    answer: "Children must be 5 years old by September 1st of the enrollment year for Grade 1. Age requirements for other grades are based on the standard academic year.",
  },
  {
    question: "Is there an entrance exam?",
    answer: "Yes, students applying for Grades 2-12 are required to take an age-appropriate assessment test. Grade 1 students participate in a readiness assessment.",
  },
  {
    question: "Are scholarships available?",
    answer: "Yes, we offer merit-based scholarships and financial aid programs. Please contact our admissions office for more information.",
  },
  {
    question: "What is the student-to-teacher ratio?",
    answer: "We maintain a low student-to-teacher ratio of 15:1 to ensure personalized attention for each student.",
  },
]

export default function AdmissionsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,124,201,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Admissions Open 2026-27</Badge>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Begin Your Journey at Brightwood Academy
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We welcome students who are eager to learn, grow, and contribute to our 
                  vibrant community. Start your application today!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#apply">
                      Apply Online
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
                    alt="Happy students at Brightwood Academy"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Admission Process
              </h2>
              <p className="text-muted-foreground">
                Our streamlined admission process ensures a smooth experience for families.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {admissionSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                  )}
                  <Card className="border-0 shadow-lg relative bg-card">
                    <CardContent className="p-6 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 relative z-10">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <Badge variant="outline" className="mb-3">Step {step.step}</Badge>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Required Documents
                </h2>
                <p className="text-muted-foreground mb-6">
                  Please ensure you have the following documents ready for a smooth application process.
                </p>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="font-serif">Fee Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feeStructure.map((fee, index) => (
                        <div key={index} className="p-4 rounded-lg bg-muted">
                          <h4 className="font-semibold mb-2">{fee.level}</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Admission Fee</p>
                              <p className="font-semibold text-primary">{fee.admission}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Annual Tuition</p>
                              <p className="font-semibold text-primary">{fee.annual}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Additional fees may apply for transportation, meals, and extracurricular activities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-20 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Admission Inquiry Form
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our admissions team will contact you shortly.
                </p>
              </div>

              {formSubmitted ? (
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-12 text-center">
                    <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your inquiry has been submitted successfully. Our admissions team will 
                      contact you within 2-3 business days.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>Submit Another Inquiry</Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit}>
                      <FieldGroup>
                        <h3 className="font-semibold text-lg mb-4">Student Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel>First Name *</FieldLabel>
                            <Input placeholder="Enter first name" required />
                          </Field>
                          <Field>
                            <FieldLabel>Last Name *</FieldLabel>
                            <Input placeholder="Enter last name" required />
                          </Field>
                          <Field>
                            <FieldLabel>Date of Birth *</FieldLabel>
                            <Input type="date" required />
                          </Field>
                          <Field>
                            <FieldLabel>Grade Applying For *</FieldLabel>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select grade" />
                              </SelectTrigger>
                              <SelectContent>
                                {[...Array(12)].map((_, i) => (
                                  <SelectItem key={i} value={`grade-${i + 1}`}>
                                    Grade {i + 1}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                        </div>

                        <h3 className="font-semibold text-lg mb-4 mt-8">Parent/Guardian Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel>Parent/Guardian Name *</FieldLabel>
                            <Input placeholder="Enter full name" required />
                          </Field>
                          <Field>
                            <FieldLabel>Relationship *</FieldLabel>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select relationship" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="father">Father</SelectItem>
                                <SelectItem value="mother">Mother</SelectItem>
                                <SelectItem value="guardian">Guardian</SelectItem>
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field>
                            <FieldLabel>Email Address *</FieldLabel>
                            <Input type="email" placeholder="Enter email" required />
                          </Field>
                          <Field>
                            <FieldLabel>Phone Number *</FieldLabel>
                            <Input type="tel" placeholder="Enter phone number" required />
                          </Field>
                        </div>

                        <h3 className="font-semibold text-lg mb-4 mt-8">Additional Information</h3>
                        <Field>
                          <FieldLabel>Current School (if any)</FieldLabel>
                          <Input placeholder="Enter current school name" />
                        </Field>
                        <Field>
                          <FieldLabel>Additional Comments or Questions</FieldLabel>
                          <Textarea placeholder="Any specific requirements or questions?" rows={4} />
                        </Field>

                        <Button type="submit" size="lg" className="w-full mt-6">
                          Submit Inquiry
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </FieldGroup>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our admission process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Have More Questions?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Our admissions team is here to help you through the process.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>admissions@brightwoodacademy.edu</span>
                </div>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Admissions Office
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
