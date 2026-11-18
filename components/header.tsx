"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Menu,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

import { Badge } from "@/components/ui/badge"
import { Image } from '@imagekit/next';

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics", },
  { label: "Admissions", href: "/admissions" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="font-medium">Admissions Open for 2026-27!</span>
        <Link href="/admissions" className="ml-2 underline hover:no-underline">
          Apply Now
        </Link>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center text-primary-foreground">
              <Image
                src="/Little Flower English School/ Little Flower English School Logo.svg"
                alt="Little Flower English School Logo"
                width={150}
                height={150}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-foreground">Little Flower</span>
              <span className="text-xs text-muted-foreground -mt-1">English School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-1">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button key={item.label} variant="ghost" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button asChild>
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="lg:hidden !h-12 !w-12"
                aria-label="Open navigation menu"
              >
                <Menu style={{ width: "24px", height: "24px" }} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[min(88vw,380px)] flex-col gap-0 border-l p-0"
            >
              {/* Brand Header */}
              <SheetHeader className="border-b px-6 py-6 pr-16 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Image
                      src="/Little Flower English School/ Little Flower English School Logo.svg"
                      alt="Little Flower English School Logo"
                      width={150}
                      height={150}
                      priority
                    />
                  </div>

                  <div className="flex flex-col gap-0">
                    <SheetTitle className="font-serif text-xl font-bold">
                      Little Flower
                    </SheetTitle>

                    <SheetDescription className="text-xs">
                      English School
                    </SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              {/* Navigation Links */}
              <nav
                aria-label="Mobile navigation"
                className="flex-1 overflow-y-auto px-4 py-4">

                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div className="rounded-xl bg-muted/50 px-3 py-3">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-1 text-[15px] font-semibold text-foreground transition-colors hover:text-primary"
                          >
                            {item.label}
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </Link>

                          <div className="ml-1 mt-3 space-y-1 border-l-2 border-primary/20 pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-3.5 text-[15px] font-medium text-foreground transition-all hover:bg-muted hover:text-primary"
                        >
                          {item.label}

                          <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </nav>

              {/* Bottom Admission CTA */}
              <div className="mt-auto border-t bg-muted/30 p-5">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-xl text-base">
                  <Link
                    href="/admissions"
                    onClick={() => setIsOpen(false)} >
                    Apply for Admission
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}