"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
          </div>
          <span className="text-xl font-semibold text-foreground">Hope Foundation</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/programs"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Programs
          </Link>
          <Link
            href="/get-involved"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Get Involved
          </Link>
          <Link href="/news" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            News
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/get-involved">Volunteer</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/get-involved"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Get Involved
            </Link>
            <Link
              href="/news"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" size="sm">
                <Link href="/get-involved">Volunteer</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
