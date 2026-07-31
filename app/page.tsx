import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Trophy,
  Building,
  GraduationCap,
  Calendar,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Comprehensive curriculum designed to foster critical thinking and creativity",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Dedicated teachers with years of experience in nurturing young minds",
  },
  {
    icon: Trophy,
    title: "Achievements",
    description: "Consistent academic excellence and recognition",
  },
  {
    icon: Building,
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, labs, and sports playground",
  },
]

const stats = [
  { value: "13+", label: "Years of Excellence" },
  { value: "2500+", label: "Students" },
  { value: "20:1", label: "Student-Teacher Ratio" },
  { value: "100%", label: "High School Transition Rate" },
]

const testimonials = [
  {
    quote: "Brightwood Academy has transformed my child's approach to learning. The teachers are incredibly supportive and the curriculum is engaging.",
    author: "Sarah Mitchell",
    role: "Parent",
  },
  {
    quote: "The best decision I made was joining Brightwood. The opportunities for growth here are endless, both academically and personally.",
    author: "James Chen",
    role: "Alumni, Class of 2024",
  },
  {
    quote: "As a parent, I appreciate the emphasis on character development alongside academics. My children are thriving here.",
    author: "Maria Rodriguez",
    role: "Parent",
  },
]

const upcomingEvents = [
  {
    date: "Apr 15",
    title: "Annual Science Fair",
    description: "Students showcase innovative projects",
  },
  {
    date: "Apr 22",
    title: "Parent-Teacher Meeting",
    description: "Discuss student progress and goals",
  },
  {
    date: "May 5",
    title: "Sports Day",
    description: "Annual athletic competition and celebration",
  },
]

const latestNews = [
  {
    category: "Achievement",
    title: "Students Win State Math Olympiad",
    excerpt: "Our team secured first place at the state-level competition...",
    date: "March 20, 2026",
  },
  {
    category: "Event",
    title: "New Science Lab Inauguration",
    excerpt: "State-of-the-art laboratory facilities now open for students...",
    date: "March 15, 2026",
  },
  {
    category: "Announcement",
    title: "Summer Camp Registrations Open",
    excerpt: "Join our enriching summer programs designed for all age groups...",
    date: "March 10, 2026",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-secondary/30 py-20 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,124,201,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm">
                  Admissions Open for 2026-27 | Rajgarh & Jhansi Branch
                </Badge>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Welcome to{" "}
                  <span className="text-primary">Little Flower English School</span>, Jhansi
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Providing quality education at Ballampur Road, Rajgarh, Jhansi.
                  At Little Flower English School, we focus on academic excellence, holistic development,
                  and modern learning facilities to prepare your child for a bright future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/admissions">
                      Apply for Admission
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-muted">
                  <Image
                    src="/Little Flower Engligh School.jpeg"
                    alt="Students learning together in a modern classroom"
                    width={800}
                    height={600}
                    className="object-cover object-[center_30%] w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">2500+ Students</p>
                      <p className="text-sm text-muted-foreground">Growing Community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm opacity-80 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Brightwood Academy?
              </h2>
              <p className="text-muted-foreground">
                We provide a nurturing environment where students can excel academically
                and grow as responsible individuals.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
                    alt="School campus with modern architecture"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <Badge variant="outline">About Us</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  A Legacy of Excellence Since 1975
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For over five decades, Brightwood Academy has been at the forefront of
                  educational excellence. Our commitment to holistic development ensures
                  that every student receives the attention and resources they need to succeed.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                      <Star className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-foreground">Accredited by National Education Board</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                      <Star className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-foreground">Award-winning STEM programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                      <Star className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-foreground">Global alumni network</span>
                  </li>
                </ul>
                <Button variant="outline" asChild>
                  <Link href="/about">
                    Discover Our Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events & News Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Upcoming Events */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground">Upcoming Events</h2>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/events">
                      View All
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex gap-4">
                        <div className="shrink-0 w-16 h-16 rounded-lg bg-primary text-primary-foreground flex flex-col items-center justify-center">
                          <span className="text-xs font-medium">{event.date.split(" ")[0]}</span>
                          <span className="text-lg font-bold">{event.date.split(" ")[1]}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Latest News */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground">Latest News</h2>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/news">
                      View All
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {latestNews.map((news, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {news.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{news.date}</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{news.title}</h3>
                        <p className="text-sm text-muted-foreground">{news.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Community Says
              </h2>
              <p className="text-muted-foreground">
                Hear from parents, students, and alumni about their experience at Brightwood Academy.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/30 mb-4" />
                    <p className="text-foreground mb-4 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Take the first step towards a brighter future. Apply now for admission
              to Brightwood Academy and become part of our growing family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/admissions">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
