import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Calendar,
  Trophy,
  Megaphone,
  GraduationCap,
  Star,
  Search,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Announcements | Brightwood Academy",
  description: "Stay updated with the latest news, announcements, and achievements from Brightwood Academy.",
}

const featuredNews = {
  title: "Brightwood Students Win National Science Competition",
  excerpt: "Our team of talented students brought home the gold at this year's National Science Olympiad, showcasing exceptional problem-solving skills and scientific knowledge.",
  date: "March 22, 2026",
  category: "Achievement",
  image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop",
  author: "Communications Office",
}

const newsArticles = [
  {
    id: 1,
    title: "New STEM Lab Inaugurated",
    excerpt: "State-of-the-art STEM laboratory equipped with cutting-edge technology now open for students.",
    date: "March 20, 2026",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Students Excel in Regional Math Olympiad",
    excerpt: "Five students secured top positions in the Regional Mathematics Olympiad 2026.",
    date: "March 18, 2026",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Summer Camp Registrations Now Open",
    excerpt: "Exciting summer programs available for students of all ages. Register early for best rates.",
    date: "March 15, 2026",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Basketball Team Reaches State Finals",
    excerpt: "Our varsity basketball team advances to state championship after dominant playoff performance.",
    date: "March 12, 2026",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Alumni Spotlight: Sarah Chen, Tech Entrepreneur",
    excerpt: "Class of 2015 graduate shares her journey from Brightwood to founding a successful startup.",
    date: "March 10, 2026",
    category: "Alumni",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Art Exhibition Showcases Student Creativity",
    excerpt: "Annual art show features over 200 pieces created by students from all grade levels.",
    date: "March 8, 2026",
    category: "Event",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
  },
]

const studentAchievements = [
  {
    name: "Emily Thompson",
    grade: "Grade 11",
    achievement: "National Science Olympiad Gold Medal",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Rodriguez",
    grade: "Grade 12",
    achievement: "State Debate Championship Winner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Priya Sharma",
    grade: "Grade 10",
    achievement: "Regional Math Olympiad - 1st Place",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "James Wilson",
    grade: "Grade 9",
    achievement: "Junior Chess Championship Runner-up",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
]

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "achievement":
      return Trophy
    case "announcement":
      return Megaphone
    case "sports":
      return Trophy
    case "alumni":
      return GraduationCap
    default:
      return Star
  }
}

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "achievement":
      return "bg-amber-100 text-amber-700"
    case "announcement":
      return "bg-primary/10 text-primary"
    case "sports":
      return "bg-green-100 text-green-700"
    case "alumni":
      return "bg-rose-100 text-rose-700"
    default:
      return "bg-muted text-foreground"
  }
}

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,124,201,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">News & Updates</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Latest News & Announcements
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay connected with everything happening at Brightwood Academy - from 
                academic achievements to campus events and student success stories.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto relative">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={getCategoryColor(featuredNews.category)}>
                      {featuredNews.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredNews.date}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {featuredNews.author}</span>
                    <Button variant="outline">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">Recent News</h2>
              <div className="relative max-w-sm w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search news..." className="pl-10" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article) => {
                const Icon = getCategoryIcon(article.category)
                return (
                  <Card key={article.id} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getCategoryColor(article.category)}>
                          <Icon className="h-3 w-3 mr-1" />
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{article.excerpt}</p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More News
              </Button>
            </div>
          </div>
        </section>

        {/* Student Achievements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Student Achievements
              </h2>
              <p className="text-muted-foreground">
                Celebrating the outstanding accomplishments of our students in academics, 
                sports, and extracurricular activities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {studentAchievements.map((student, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-secondary">
                      <Image
                        src={student.image}
                        alt={student.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-sm text-primary mb-2">{student.grade}</p>
                    <p className="text-xs text-muted-foreground">{student.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/gallery">
                  View All Achievements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest updates, news, and announcements 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground text-foreground"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
