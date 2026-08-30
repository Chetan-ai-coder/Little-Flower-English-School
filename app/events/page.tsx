"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarDays,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Users,
  GraduationCap,
  Trophy,
  PartyPopper,
  ArrowRight,
} from "lucide-react"

const eventCategories = [
  { value: "all", label: "All Events" },
  { value: "academic", label: "Academic" },
  { value: "sports", label: "Sports" },
  { value: "cultural", label: "Cultural" },
  { value: "holiday", label: "Holidays" },
]

const events = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: new Date(2026, 3, 15),
    time: "9:00 AM - 4:00 PM",
    location: "Main Auditorium",
    category: "academic",
    description: "Students showcase their innovative science projects to judges and visitors.",
    featured: true,
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    date: new Date(2026, 3, 22),
    time: "2:00 PM - 6:00 PM",
    location: "Individual Classrooms",
    category: "academic",
    description: "Discuss student progress and academic goals with teachers.",
  },
  {
    id: 3,
    title: "Sports Day",
    date: new Date(2026, 4, 5),
    time: "8:00 AM - 5:00 PM",
    location: "Sports Complex",
    category: "sports",
    description: "Annual athletic competition featuring track and field events.",
    featured: true,
  },
  {
    id: 4,
    title: "Spring Break Begins",
    date: new Date(2026, 3, 10),
    time: "After School",
    location: "Campus-wide",
    category: "holiday",
    description: "Spring break begins. Classes resume on April 21st.",
  },
  {
    id: 5,
    title: "Art Exhibition",
    date: new Date(2026, 4, 12),
    time: "10:00 AM - 3:00 PM",
    location: "Art Gallery",
    category: "cultural",
    description: "Display of student artwork created throughout the academic year.",
  },
  {
    id: 6,
    title: "Annual Day Celebration",
    date: new Date(2026, 4, 20),
    time: "5:00 PM - 9:00 PM",
    location: "Main Auditorium",
    category: "cultural",
    description: "Annual celebration featuring performances, awards, and cultural programs.",
    featured: true,
  },
  {
    id: 7,
    title: "Inter-School Basketball Tournament",
    date: new Date(2026, 4, 25),
    time: "9:00 AM - 5:00 PM",
    location: "Indoor Court",
    category: "sports",
    description: "Basketball championship featuring teams from neighboring schools.",
  },
  {
    id: 8,
    title: "Summer Vacation Begins",
    date: new Date(2026, 5, 1),
    time: "After School",
    location: "Campus-wide",
    category: "holiday",
    description: "Summer vacation begins. New academic year starts in September.",
  },
  {
    id: 9,
    title: "Math Olympiad",
    date: new Date(2026, 3, 28),
    time: "10:00 AM - 1:00 PM",
    location: "Exam Hall",
    category: "academic",
    description: "Annual mathematics competition for students grades 6-12.",
  },
  {
    id: 10,
    title: "Music Concert",
    date: new Date(2026, 4, 8),
    time: "6:00 PM - 8:00 PM",
    location: "Main Auditorium",
    category: "cultural",
    description: "Student orchestra and choir performance featuring classical and contemporary pieces.",
  },
]

const academicCalendar = [
  { period: "First Semester", start: "September 2", end: "December 20" },
  { period: "Winter Break", start: "December 21", end: "January 5" },
  { period: "Second Semester", start: "January 6", end: "March 31" },
  { period: "Spring Break", start: "April 10", end: "April 20" },
  { period: "Third Semester", start: "April 21", end: "May 31" },
  { period: "Summer Vacation", start: "June 1", end: "August 31" },
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "academic":
      return GraduationCap
    case "sports":
      return Trophy
    case "cultural":
      return PartyPopper
    case "holiday":
      return CalendarDays
    default:
      return CalendarDays
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "academic":
      return "bg-primary/10 text-primary"
    case "sports":
      return "bg-green-100 text-green-700"
    case "cultural":
      return "bg-amber-100 text-amber-700"
    case "holiday":
      return "bg-rose-100 text-rose-700"
    default:
      return "bg-muted text-foreground"
  }
}

export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredEvents = events.filter((event) => {
    if (selectedCategory === "all") return true
    return event.category === selectedCategory
  })

  const sortedEvents = [...filteredEvents].sort((a, b) => a.date.getTime() - b.date.getTime())
  const upcomingEvents = sortedEvents.filter((event) => event.date >= new Date())
  const featuredEvents = events.filter((event) => event.featured)

  const eventDates = events.map((event) => event.date)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,124,201,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">Events & Calendar</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                School Events & Calendar
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay updated with all upcoming events, activities, and important dates 
                at Brightwood Academy.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-12 bg-background border-b">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Featured Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredEvents.map((event) => {
                const Icon = getCategoryIcon(event.category)
                return (
                  <Card key={event.id} className="border-0 shadow-lg overflow-hidden">
                    <div className={`h-2 ${event.category === "academic" ? "bg-primary" : event.category === "sports" ? "bg-green-500" : "bg-amber-500"}`} />
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getCategoryColor(event.category)}>
                          <Icon className="h-3 w-3 mr-1" />
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          <span>{event.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Calendar Widget */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Event Calendar</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md"
                      modifiers={{
                        event: eventDates,
                      }}
                      modifiersClassNames={{
                        event: "bg-primary/20 text-primary font-semibold",
                      }}
                    />
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        Highlighted dates indicate scheduled events.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Academic Calendar Overview */}
                <Card className="border-0 shadow-lg mt-6">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Academic Calendar</h3>
                    <div className="space-y-3">
                      {academicCalendar.map((period, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="font-medium">{period.period}</span>
                          <span className="text-muted-foreground">{period.start} - {period.end}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Events List */}
              <div className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground">Upcoming Events</h2>
                  <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                    <TabsList className="flex-wrap h-auto">
                      {eventCategories.map((category) => (
                        <TabsTrigger key={category.value} value={category.value} className="text-xs">
                          {category.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                <div className="space-y-4">
                  {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event) => {
                      const Icon = getCategoryIcon(event.category)
                      return (
                        <Card key={event.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex gap-4">
                              <div className="shrink-0 w-16 text-center">
                                <div className="bg-primary text-primary-foreground rounded-lg p-2">
                                  <p className="text-xs font-medium">
                                    {event.date.toLocaleDateString("en-US", { month: "short" })}
                                  </p>
                                  <p className="text-2xl font-bold">
                                    {event.date.getDate()}
                                  </p>
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge className={getCategoryColor(event.category)}>
                                    <Icon className="h-3 w-3 mr-1" />
                                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                                  </Badge>
                                  {event.featured && (
                                    <Badge variant="secondary">Featured</Badge>
                                  )}
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {event.description}
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    <span>{event.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })
                  ) : (
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-12 text-center">
                        <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold text-lg mb-2">No Events Found</h3>
                        <p className="text-muted-foreground">
                          No upcoming events in this category. Check back later!
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Take the first step towards a brighter future. Apply now for admission to Little Flower English School and become part of our growing family. Apply for Admission
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
