import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">Get in Touch</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Have questions or want to learn more about our work? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Mail className="h-5 w-5" />
                    </div>
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>Send us a message anytime</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@hopefoundation.org" className="text-primary hover:underline">
                      info@hopefoundation.org
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Phone className="h-5 w-5" />
                    </div>
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>Mon-Fri, 9am-5pm EST</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <CardTitle>Visit Us</CardTitle>
                    <CardDescription>Our headquarters</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                      123 Hope Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </address>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Clock className="h-5 w-5" />
                    </div>
                    <CardTitle>Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                      <div>Saturday - Sunday: Closed</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24-48 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name *
                          </label>
                          <Input id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name *
                          </label>
                          <Input id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject *
                        </label>
                        <Input id="subject" placeholder="How can we help?" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message *
                        </label>
                        <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} required />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Send Message
                      </Button>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        * Required fields. By submitting this form, you agree to our privacy policy.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
