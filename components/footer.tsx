import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Image } from '@imagekit/next';

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
]

const resources = [
  { label: "Academic Calendar", href: "/events" },
  { label: "Student Handbook", href: "/about#rules" },
  { label: "Parent Resources", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground">
                <Image
                  src="/Little Flower English School/ Little Flower English School Logo.svg"
                  alt="Little Flower English School Logo"
                  width={150}
                  height={150}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold">Little Flower</span>
                <span className="text-xs opacity-70 -mt-1">English School</span>
              </div>
            </Link>

            <p className="text-sm opacity-80 leading-relaxed">
              Little Flower English School is committed to providing quality education and nurturing young minds to become future leaders.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 opacity-70 shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">Ballampur Road Rajgarh Shiv Nagar Jhansi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-70" />
                <span className="text-sm opacity-80">+91 93353 78839 <br /> +91 94527 36720</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-70" />
                <span className="text-sm opacity-80">englishschoollittleflower@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Little Flower English School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
