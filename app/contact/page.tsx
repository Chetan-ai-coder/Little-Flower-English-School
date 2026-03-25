"use client"

import { useState } from "react"
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
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Education Lane", "Brightwood City, BC 12345"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Main: +1 (555) 123-4567", "Admissions: +1 (555) 123-4568"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@brightwoodacademy.edu", "admissions@brightwoodacademy.edu"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
  },
]

const departments = [
  { value: "general", label: "General Inquiry" },
  { value: "admissions", label: "Admissions" },
  { value: "academics", label: "Academics" },
  { value: "finance", label: "Finance & Fees" },
  { value: "transportation", label: "Transportation" },
  { value: "other", label: "Other" },
]

export default function ContactPage() {
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
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">Contact Us</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about admissions, academics, or anything else? 
                We&apos;re here to help. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {formSubmitted ? (
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-12 text-center">
                      <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting us. Our team will respond to your inquiry 
                        within 1-2 business days.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <form onSubmit={handleSubmit}>
                        <FieldGroup>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Field>
                              <FieldLabel>First Name *</FieldLabel>
                              <Input placeholder="Enter first name" required />
                            </Field>
                            <Field>
                              <FieldLabel>Last Name *</FieldLabel>
                              <Input placeholder="Enter last name" required />
                            </Field>
                          </div>
                          <Field>
                            <FieldLabel>Email Address *</FieldLabel>
                            <Input type="email" placeholder="Enter your email" required />
                          </Field>
                          <Field>
                            <FieldLabel>Phone Number</FieldLabel>
                            <Input type="tel" placeholder="Enter phone number" />
                          </Field>
                          <Field>
                            <FieldLabel>Department *</FieldLabel>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select department" />
                              </SelectTrigger>
                              <SelectContent>
                                {departments.map((dept) => (
                                  <SelectItem key={dept.value} value={dept.value}>
                                    {dept.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </Field>
                          <Field>
                            <FieldLabel>Subject *</FieldLabel>
                            <Input placeholder="Enter message subject" required />
                          </Field>
                          <Field>
                            <FieldLabel>Message *</FieldLabel>
                            <Textarea placeholder="Type your message here..." rows={5} required />
                          </Field>
                          <Button type="submit" size="lg" className="w-full">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </Button>
                        </FieldGroup>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Map & Additional Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Find Us
                  </h2>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0866669372714!2d-74.00597168459463!3d40.71277627933024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="School Location Map"
                    />
                  </div>
                </div>

                {/* Social Media */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Connect With Us</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Follow us on social media for the latest updates, news, and events.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Contacts</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Principal&apos;s Office</span>
                        <span className="font-medium">Ext. 101</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Admissions Office</span>
                        <span className="font-medium">Ext. 102</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Finance Department</span>
                        <span className="font-medium">Ext. 103</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Student Affairs</span>
                        <span className="font-medium">Ext. 104</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Visit CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Schedule a Campus Visit
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Experience Brightwood Academy firsthand. Schedule a tour to explore our 
              campus, meet our faculty, and learn about our programs.
            </p>
            <Button size="lg" variant="secondary">
              Book a Tour
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
