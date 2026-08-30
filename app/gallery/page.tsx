"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Trophy,
  PartyPopper,
  Building,
} from "lucide-react"

const categories = [
  { value: "all", label: "All", icon: Building },
  { value: "campus", label: "Campus", icon: Building },
  { value: "events", label: "Events", icon: PartyPopper },
  { value: "sports", label: "Sports", icon: Trophy },
  { value: "academics", label: "Academics", icon: GraduationCap },
]

const galleryImages = [
  {
    id: 1,
    src: "/Little Flower Engligh School.jpeg",
    alt: "School library",
    category: "campus",
    caption: "Our state-of-the-art library",
  },
  {
    id: 2,
    src: "/Little Flower English School Certificate.jpeg",
    alt: "Graduation ceremony",
    category: "events",
    caption: "Annual graduation ceremony 2025",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    alt: "Basketball game",
    category: "sports",
    caption: "Inter-school basketball championship",
  },
  {
    id: 4,
    src: "/Little Flower English School Classroom.jpeg",
    alt: "Main building",
    category: "campus",
    caption: "Main campus building",
  },
  {
    id: 5,
    src: "/Little Flower English School Trip.jpeg",
    alt: "Science fair",
    category: "academics",
    caption: "National Science Fair competition",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
    alt: "Music performance",
    category: "events",
    caption: "Annual day musical performance",
  },
  {
    id: 7,
    src: "/Little Flower English School Science Class.jpeg",
    alt: "Students studying",
    category: "academics",
    caption: "Collaborative learning in action",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop",
    alt: "Sports day",
    category: "sports",
    caption: "Annual sports day celebration",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    alt: "Classroom",
    category: "academics",
    caption: "Modern smart classroom",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    alt: "Art exhibition",
    category: "events",
    caption: "Student art exhibition",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    alt: "Swimming pool",
    category: "sports",
    caption: "Olympic-size swimming pool",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    alt: "Reading corner",
    category: "campus",
    caption: "Cozy reading corners around campus",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    alt: "Science lab",
    category: "academics",
    caption: "Advanced science laboratory",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?w=800&h=600&fit=crop",
    alt: "Outdoor activities",
    category: "events",
    caption: "Summer camp activities",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    alt: "Computer lab",
    category: "academics",
    caption: "State-of-the-art computer lab",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    alt: "Elementary students",
    category: "academics",
    caption: "Primary school students learning",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  const handlePrevious = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex].id)
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(filteredImages[nextIndex].id)
  }

  const currentImage = galleryImages.find((img) => img.id === selectedImage)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(74,124,201,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4">Photo Gallery</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Campus Life in Pictures
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore the vibrant life at Brightwood Academy through our photo gallery 
                featuring campus facilities, events, sports, and academic activities.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <TabsList className="flex flex-wrap justify-center h-auto gap-2">
                {categories.map((category) => (
                  <TabsTrigger key={category.value} value={category.value} className="gap-2">
                    <category.icon className="h-4 w-4" />
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-background font-medium line-clamp-2">
                      {image.caption}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-foreground/95 border-0">
            <DialogTitle className="sr-only">
              {currentImage?.caption || "Gallery Image"}
            </DialogTitle>
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-background hover:bg-background/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-background hover:bg-background/20"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-background hover:bg-background/20"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>

              {/* Image */}
              {currentImage && (
                <div className="relative aspect-video">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Caption */}
              {currentImage && (
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-foreground to-transparent">
                  <p className="text-background text-center">{currentImage.caption}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Experience Campus Life Firsthand
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Schedule a campus tour to see our facilities and meet our community in person.
            </p>
            <Button asChild>
              <a href="/contact">Schedule a Visit</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
