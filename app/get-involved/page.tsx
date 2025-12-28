import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Heart, Users, Handshake, Building2, ArrowRight } from "lucide-react"

export default function GetInvolvedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">Get Involved</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                There are many ways to support our mission and make a lasting impact in communities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Help */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Heart className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Make a Donation</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Your financial support directly funds our programs and helps us reach more communities in need.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                    <li>• One-time or monthly donations</li>
                    <li>• 85% goes directly to programs</li>
                    <li>• Tax-deductible receipts provided</li>
                    <li>• Complete transparency on fund usage</li>
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/donate">
                      Donate Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Users className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Volunteer</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Join our team of dedicated volunteers making a hands-on difference in communities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                    <li>• Field volunteer opportunities</li>
                    <li>• Remote support positions</li>
                    <li>• Professional skills volunteering</li>
                    <li>• Short-term and long-term options</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#volunteer">
                      Volunteer Application
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card id="partner" className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Handshake className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Partner With Us</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Collaborate with us to amplify impact through strategic partnerships and joint initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                    <li>• NGO and nonprofit partnerships</li>
                    <li>• Academic collaborations</li>
                    <li>• Government agency partnerships</li>
                    <li>• Co-create sustainable solutions</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact">
                      Explore Partnership
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card id="corporate" className="border-2 transition-all hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">Corporate Sponsorship</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Engage your company in meaningful corporate social responsibility initiatives.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                    <li>• Project sponsorship opportunities</li>
                    <li>• Employee volunteer programs</li>
                    <li>• Cause marketing campaigns</li>
                    <li>• Custom partnership packages</li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact">
                      Contact Corporate Relations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Form Section */}
        <section id="volunteer" className="border-t bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">Volunteer Application</h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Tell us about yourself and how you'd like to contribute to our mission.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    Thank you for your interest in volunteering with Hope Foundation. Please fill out our online
                    application form, and a member of our volunteer coordination team will contact you within 5-7
                    business days.
                  </p>
                  <Button asChild>
                    <Link href="#">Access Volunteer Application Form</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Other Ways */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-balance">Other Ways to Help</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fundraise for Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Create your own fundraising campaign for birthdays, marathons, or special events. We provide all
                      the tools and support you need.
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legacy Giving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Leave a lasting legacy by including Hope Foundation in your will or estate planning.
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Spread the Word</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Follow us on social media and share our stories to help raise awareness about our mission and
                      impact.
                    </p>
                    <Button variant="outline" size="sm">
                      Follow Us
                    </Button>
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
