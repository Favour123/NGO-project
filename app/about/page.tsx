"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Target, Eye, Heart, Award, Users2, Globe2 } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">About Hope Foundation</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                For 15 years, we've been dedicated to creating lasting positive change in communities worldwide through
                education, healthcare, and sustainable development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div variants={itemVariants}>
                <Card className="border-2 h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Target className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower underserved communities worldwide by providing access to quality education, essential
                      healthcare, and sustainable development opportunities that create lasting positive change for
                      generations to come.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="border-2 h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                      <Eye className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      A world where every individual has the opportunity to reach their full potential, with access to
                      the resources, education, and support needed to build thriving, sustainable communities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">Our Core Values</h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-3"
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Compassion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We approach every community with empathy, respect, and a genuine commitment to understanding their
                  unique needs.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We maintain the highest standards of transparency, accountability, and ethical conduct in all our
                  operations.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Users2 className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Collaboration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe in working together with communities, partners, and supporters to create sustainable
                  solutions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-balance md:text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hope Foundation was established in 2010 by a group of dedicated humanitarians who witnessed firsthand
                  the challenges faced by underserved communities around the world. What began as a small grassroots
                  initiative has grown into a comprehensive organization serving 25+ countries.
                </p>
                <p>
                  Over the past 15 years, we've completed 120+ projects, impacting over 50,000 lives through our
                  education, healthcare, and community development programs. Our approach is rooted in partnership—we
                  work alongside communities to identify their needs and develop sustainable solutions.
                </p>
                <p>
                  Today, we're proud to have a global network of volunteers, partners, and supporters who share our
                  vision of a more equitable world. Together, we're not just providing aid—we're empowering communities
                  to create lasting change.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">Leadership Team</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
                Meet the dedicated professionals guiding our mission
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { name: "Sarah Mitchell", role: "Executive Director", bio: "15+ years in international development" },
                { name: "Dr. James Chen", role: "Director of Healthcare", bio: "Former WHO medical advisor" },
                { name: "Maria Rodriguez", role: "Director of Education", bio: "EdD in International Education" },
                { name: "David Okonkwo", role: "Director of Operations", bio: "MBA, NGO management expert" },
              ].map((member) => (
                <motion.div key={member.name} variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 aspect-square w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src={`/diverse-professionals-meeting.png?height=300&width=300&query=professional+${member.role.toLowerCase()}`}
                          alt={member.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Transparency */}
        <section id="transparency" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <Globe2 className="mx-auto mb-6 h-12 w-12 text-primary" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Financial Transparency
              </h2>
              <p className="mb-8 text-muted-foreground leading-relaxed text-pretty">
                We're committed to transparency and accountability. Here's how your donations are used:
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="mb-12 grid gap-6 text-left md:grid-cols-3"
              >
                <motion.div variants={itemVariants} className="rounded-lg border-2 border-primary bg-primary/5 p-6">
                  <div className="mb-2 text-4xl font-bold text-primary">85%</div>
                  <div className="text-sm font-medium">Programs & Services</div>
                </motion.div>
                <motion.div variants={itemVariants} className="rounded-lg border-2 p-6">
                  <div className="mb-2 text-4xl font-bold">10%</div>
                  <div className="text-sm font-medium">Fundraising</div>
                </motion.div>
                <motion.div variants={itemVariants} className="rounded-lg border-2 p-6">
                  <div className="mb-2 text-4xl font-bold">5%</div>
                  <div className="text-sm font-medium">Administration</div>
                </motion.div>
              </motion.div>

              <Button asChild>
                <Link href="#">Download 2024 Annual Report</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
