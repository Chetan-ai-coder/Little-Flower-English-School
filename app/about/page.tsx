import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Eye,
  Heart,
  Building,
  BookOpen,
  Users,
  Microscope,
  Dumbbell,
  ArrowRight,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Little Flower English School Best School in Rajgarh, Jhansi",
  description: "Learn about Little Flower English School's history, mission, vision, and values. Discover our commitment to educational excellence since 2011.",
}

const leadership = [
  {
    name: "Mr. Mohan Puri Goswami",
    role: "Managing Director (M.D.)",
    image: "/Professional Office Portrait with Desk Details.png",
    bio: "M.A. qualified education professional committed to supporting the school's growth and providing students with a positive learning environment.",
  },
  {
    name: "Mrs. Jyoti Rajak",
    role: "Principal",
    image: "/Principal Mrs. Jyoti Rajak at Her Desk.png",
    bio: "M.A., B.Ed., CTET qualified educator focused on students' academic development, discipline, and overall growth.",
  },
  {
    name: "Mrs. Isha Chourashiya",
    role: "Accounts",
    image: "Professional Office Portrait with Global Desk Accents.png",
    bio: "B.L.Ed. qualified team member responsible for supporting the school's accounts and administrative activities.",
  },
]

const facilities = [
  {
    icon: Microscope,
    title: "Science Laboratories",
    description: "State-of-the-art physics, chemistry, and biology labs with modern equipment",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Extensive collection of books, journals, and digital resources",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    description: "Indoor and outdoor facilities for various sports and fitness activities",
  },
  {
    icon: Building,
    title: "Smart Classrooms",
    description: "Technology-enabled classrooms with interactive learning tools",
  },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding honesty, ethics, and moral principles",
  },
  {
    icon: Users,
    title: "Community",
    description: "Fostering a sense of belonging and mutual respect",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,124,201,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">About Us</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                A Legacy of Excellence in Education
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2011, Little Flower English School has been dedicated to providing
                exceptional education that prepares students for success in an
                ever-changing world.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Little Flower English School was founded in 2011 by a group of visionary educators
                    who believed in the transformative power of quality education. What began
                    as a small school with just 50 students has grown into one of the most
                    respected educational institutions in the region.
                  </p>
                  <p>
                    Over the past 15 Years, we have remained committed to our founding
                    principles while continuously evolving to meet the needs of modern learners.
                    Our teachers work closely with students to understand their learning needs and encourage them to participate actively in academics and school activities.
                  </p>
                  <p>
                    Today, Little Flower English School serves over 2,500 students and continues to uphold
                    its tradition of academic excellence, character development, and community service.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/Little Flower English School Trip.jpeg"
                    alt="Little Flower English School Best School in Rajgarh "
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Our Vision & Mission
              </h2>
              <p className="text-muted-foreground">
                Guided by our core values, we strive to create an environment where
                every student can thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading educational institution that nurtures future leaders
                    who are academically excellent, morally upright, and globally competitive.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide quality education that develops the intellectual, physical,
                    emotional, and social aspects of each student, preparing them to become
                    responsible citizens and lifelong learners.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold text-foreground">Our Core Values</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Our Leadership
              </h2>
              <p className="text-muted-foreground">
                Meet the dedicated individuals who guide our institution towards excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((leader, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg">{leader.name}</h3>
                    <p className="text-sm text-primary mb-3">{leader.role}</p>
                    <p className="text-sm text-muted-foreground">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Principal's Message */}
            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl bg-primary/5">
                <CardContent className="p-8 md:p-12">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Message from the Principal
                  </h3>
                  <div className="flex gap-8 flex-col md:flex-row">
                    <div className="shrink-0">
                      <div className="w-32 h-32 rounded-full overflow-hidden">
                        <Image
                          src="/Principal Mrs. Jyoti Rajak at Her Desk.png"
                          alt="Mrs. Jyoti Rajak"
                          width={128}
                          height={128}
                          className="object-top scale-180 object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        &ldquo;At Little Flower English School, we believe that every child has unique potential
                        waiting to be discovered and nurtured. Our role as educators extends beyond
                        imparting knowledge; we are committed to shaping character, fostering creativity,
                        and instilling a lifelong love for learning.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        I invite you to join our community and experience the difference that quality
                        education can make in your child&apos;s life.&rdquo;
                      </p>
                      <p className="font-semibold text-foreground">Mrs. Jyoti Rajak</p>
                      <p className="text-sm text-primary">Principal, Little Flower English School</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-20 bg-muted" id="infrastructure">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                World-Class Infrastructure
              </h2>
              <p className="text-muted-foreground">
                Our campus is equipped with modern facilities to support holistic learning and development.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <facility.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Little Flower Engligh School.jpeg"
                  alt="Little Flower English School Best School in Rajgarh"
                  width={600}
                  height={400}
                  className="object-cover object-[center_30%] w-full h-full"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Little Flower English School Classroom.jpeg"
                  alt="Little Flower English School Best School in Rajgarh"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
                <Image
                  src="/Little Flower English School Trip.jpeg"
                  alt="Little Flower English School Best School in Rajgarh"
                  width={600}
                  height={400}
                  className="object-cover object-[center_70%] w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Begin Your Journey With Us
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Discover how Brightwood Academy can help shape your child&apos;s future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
