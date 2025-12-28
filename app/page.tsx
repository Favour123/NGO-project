"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Heart, Users, Globe, BookOpen, Stethoscope, Home, ArrowRight, CheckCircle2 } from "lucide-react"
import { Counter } from "@/components/counter"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
                Building Better Communities Together
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl text-pretty"
              >
                Join us in creating lasting change through education, healthcare, and sustainable development programs
                that empower communities worldwide.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button size="lg" asChild>
                  <Link href="/donate">
                    Donate Now
                    <Heart className="ml-2 h-5 w-5" fill="currentColor" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/get-involved">
                    Become a Volunteer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="border-y bg-card py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-4"
            >
              <motion.div variants={itemVariants} className="text-center">
                <Counter end={50000} suffix="+" />
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <Counter end={120} suffix="+" />
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <Counter end={25} suffix="+" />
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <Counter end={15} />
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                We believe every person deserves access to quality education, healthcare, and the opportunity to build a
                sustainable future. Through community-driven initiatives and partnerships, we work to create lasting
                positive change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">Our Focus Areas</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
                We concentrate our efforts on three key pillars that create sustainable impact
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-3"
            >
              <motion.div variants={itemVariants}>
                <Card className="border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle>Education</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Providing access to quality education and learning resources for underserved communities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                        <span>School construction & renovation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                        <span>Teacher training programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                        <span>Scholarship opportunities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Stethoscope className="h-6 w-6" />
                    </div>
                    <CardTitle>Healthcare</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Delivering essential healthcare services and promoting wellness in communities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary flex-shrink-0" />
                        <span>Mobile health clinics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary flex-shrink-0" />
                        <span>Vaccination campaigns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-secondary flex-shrink-0" />
                        <span>Maternal & child health</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Home className="h-6 w-6" />
                    </div>
                    <CardTitle>Community Development</CardTitle>
                    <CardDescription className="leading-relaxed">
                      Building sustainable infrastructure and economic opportunities for lasting change
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                        <span>Clean water access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                        <span>Microfinance programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent flex-shrink-0" />
                        <span>Skills training workshops</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">Featured Projects</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
                See how your support creates real impact in communities around the world
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video w-full bg-muted relative">
                    <img
                      src="/children-learning-classroom-africa.jpg"
                      alt="Children learning in classroom"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Rural Schools Initiative</CardTitle>
                    <CardDescription>Tanzania, East Africa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Building and renovating schools in rural communities, providing 2,000+ children with access to
                      quality education.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/programs/rural-schools">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video w-full bg-muted relative">
                    <img
                      src="/healthcare-worker-with-patient-clinic.jpg"
                      alt="Healthcare worker with patient"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Mobile Health Clinics</CardTitle>
                    <CardDescription>Southeast Asia</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Delivering essential healthcare services to remote villages, reaching 15,000+ patients annually.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/programs/mobile-clinics">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video w-full bg-muted relative">
                    <img
                      src="/water-well-community-celebration-africa.jpg"
                      alt="Community celebrating new water well"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Clean Water Access</CardTitle>
                    <CardDescription>West Africa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Installing water wells and sanitation facilities, providing clean water to 30+ communities.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/programs/clean-water">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <Button variant="outline" asChild>
                <Link href="/programs">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Users className="mx-auto mb-6 h-16 w-16" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Make a Difference Today
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Your support helps us continue our mission to build better communities. Whether through donations,
                volunteering, or partnerships, every contribution creates lasting impact.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/donate">
                    Donate Now
                    <Heart className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  asChild
                >
                  <Link href="/get-involved">
                    Get Involved
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Globe className="mx-auto mb-6 h-12 w-12 text-primary" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Transparency & Accountability
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed text-pretty">
                We believe in complete transparency. 85% of every donation goes directly to programs, and we provide
                regular updates on project progress and financial reports.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about#transparency">
                  View Our Impact Reports
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
