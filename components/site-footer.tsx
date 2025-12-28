import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-semibold text-foreground">Hope Foundation</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building better communities through education, healthcare, and sustainable development programs worldwide.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://facebook.com" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://instagram.com" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Programs
              </Link>
              <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                News & Stories
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Get Involved</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/donate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Donate
              </Link>
              <Link href="/get-involved" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Volunteer
              </Link>
              <Link
                href="/get-involved#partner"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Partner With Us
              </Link>
              <Link
                href="/get-involved#corporate"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Corporate Sponsorship
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Subscribe to receive updates on our programs and impact stories.
            </p>
            <form className="flex flex-col gap-2">
              <Input type="email" placeholder="Your email address" className="bg-background" />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hope Foundation. All rights reserved. | Tax ID: 12-3456789
          </p>
        </div>
      </div>
    </footer>
  )
}
