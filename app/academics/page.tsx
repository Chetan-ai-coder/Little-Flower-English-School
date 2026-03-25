import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  FlaskConical,
  Calculator,
  Globe,
  Palette,
  Music,
  Trophy,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Academics | Brightwood Academy",
  description: "Explore our comprehensive curriculum, academic programs, and extracurricular activities designed to nurture well-rounded students.",
}

const programs = [
  {
    level: "Primary School",
    grades: "Grades 1-5",
    description: "Building strong foundations through engaging, activity-based learning",
    subjects: ["Language Arts", "Mathematics", "Science", "Social Studies", "Art & Craft", "Music", "Physical Education"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    description: "Developing critical thinking and preparing students for advanced studies",
    subjects: ["English Literature", "Advanced Math", "Physical Science", "History & Civics", "Computer Science", "Foreign Language", "Arts"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
  {
    level: "High School",
    grades: "Grades 9-12",
    description: "Specialized streams preparing students for higher education and careers",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Economics", "Psychology"],
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
  },
]

const departments = [
  { icon: FlaskConical, name: "Science", description: "Physics, Chemistry, Biology, Environmental Science" },
  { icon: Calculator, name: "Mathematics", description: "Algebra, Geometry, Calculus, Statistics" },
  { icon: BookOpen, name: "Language Arts", description: "English, Literature, Creative Writing" },
  { icon: Globe, name: "Social Studies", description: "History, Geography, Civics, Economics" },
  { icon: Palette, name: "Fine Arts", description: "Visual Arts, Design, Photography" },
  { icon: Music, name: "Performing Arts", description: "Music, Drama, Dance" },
]

const extracurricular = [
  {
    category: "Sports",
    activities: ["Basketball", "Soccer", "Swimming", "Track & Field", "Tennis", "Volleyball"],
    image: "https://images.unsplash.com/photo-1461896836934- voices-c7c64b9e?w=600&h=400&fit=crop",
  },
  {
    category: "Clubs",
    activities: ["Debate Club", "Robotics Club", "Drama Society", "Photography Club", "Environmental Club", "Chess Club"],
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&h=400&fit=crop",
  },
  {
    category: "Cultural",
    activities: ["Choir", "Orchestra", "Dance Troupe", "Art Exhibition", "Cultural Festival", "Theatre Productions"],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
  },
]

const achievements = [
  { title: "State Science Olympiad", position: "1st Place", year: "2025" },
  { title: "National Math Competition", position: "Top 10", year: "2025" },
  { title: "Regional Debate Championship", position: "Winners", year: "2024" },
  { title: "Inter-School Sports Meet", position: "Overall Champions", year: "2024" },
]

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,124,201,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">Academics</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Excellence in Education
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our comprehensive curriculum is designed to develop well-rounded 
                individuals who are prepared for success in higher education and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Programs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Academic Programs
              </h2>
              <p className="text-muted-foreground">
                From primary to high school, our programs are tailored to meet the 
                developmental needs of each age group.
              </p>
            </div>

            <Tabs defaultValue="primary" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="primary">Primary School</TabsTrigger>
                <TabsTrigger value="middle">Middle School</TabsTrigger>
                <TabsTrigger value="high">High School</TabsTrigger>
              </TabsList>
              {programs.map((program, index) => (
                <TabsContent key={index} value={program.level.split(" ")[0].toLowerCase()}>
                  <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="aspect-video md:aspect-auto relative">
                        <Image
                          src={program.image}
                          alt={program.level}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-8">
                        <Badge variant="secondary" className="mb-4">{program.grades}</Badge>
                        <h3 className="font-serif text-2xl font-bold mb-4">{program.level}</h3>
                        <p className="text-muted-foreground mb-6">{program.description}</p>
                        <h4 className="font-semibold mb-3">Core Subjects:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {program.subjects.map((subject, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Departments */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Academic Departments
              </h2>
              <p className="text-muted-foreground">
                Our specialized departments ensure focused learning and expert instruction.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <dept.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Extracurricular Activities
              </h2>
              <p className="text-muted-foreground">
                Beyond academics, we offer diverse activities to develop talents and interests.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {extracurricular.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={item.image}
                      alt={item.category}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-serif text-xl font-bold text-background">{item.category}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {item.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Student Achievements
              </h2>
              <p className="text-muted-foreground">
                Our students consistently excel in academics, sports, and other competitions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{achievement.year}</Badge>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-primary font-bold">{achievement.position}</p>
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
              Ready to Excel With Us?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Join Brightwood Academy and unlock your potential in our nurturing academic environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/admissions">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
