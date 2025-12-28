import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookOpen, Stethoscope, Home, Droplet, Utensils, Lightbulb, ArrowRight, MapPin, Calendar } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Rural Schools Initiative",
      category: "Education",
      location: "Tanzania, East Africa",
      status: "Active",
      icon: BookOpen,
      image: "children+in+classroom+learning",
      description:
        "Building and renovating schools in rural communities, providing quality education to over 2,000 children.",
      impact: ["5 schools built", "12 schools renovated", "2,000+ students enrolled"],
      timeframe: "2020 - Present",
    },
    {
      title: "Mobile Health Clinics",
      category: "Healthcare",
      location: "Southeast Asia",
      status: "Active",
      icon: Stethoscope,
      image: "healthcare+worker+with+patient",
      description: "Delivering essential healthcare services to remote villages, reaching 15,000+ patients annually.",
      impact: ["15,000+ patients served", "8 mobile units", "24 healthcare workers"],
      timeframe: "2018 - Present",
    },
    {
      title: "Clean Water Access",
      category: "Community Development",
      location: "West Africa",
      status: "Active",
      icon: Droplet,
      image: "water+well+community+celebration",
      description: "Installing water wells and sanitation facilities in communities without access to clean water.",
      impact: ["30+ wells installed", "50,000 people served", "15 communities reached"],
      timeframe: "2019 - Present",
    },
    {
      title: "Maternal & Child Health",
      category: "Healthcare",
      location: "South Asia",
      status: "Active",
      icon: Stethoscope,
      image: "mother+and+baby+healthcare",
      description: "Providing prenatal care, safe deliveries, and postnatal support for mothers and newborns.",
      impact: ["3,000+ safe deliveries", "5,000+ prenatal checkups", "8 health centers"],
      timeframe: "2017 - Present",
    },
    {
      title: "Vocational Training Centers",
      category: "Community Development",
      location: "Central America",
      status: "Active",
      icon: Lightbulb,
      image: "people+learning+skills+workshop",
      description: "Empowering youth and adults with marketable skills through comprehensive training programs.",
      impact: ["1,200+ trained", "75% employment rate", "6 training centers"],
      timeframe: "2021 - Present",
    },
    {
      title: "School Nutrition Program",
      category: "Education",
      location: "Latin America",
      status: "Active",
      icon: Utensils,
      image: "children+eating+healthy+meal",
      description: "Providing nutritious meals to students to improve health, attendance, and learning outcomes.",
      impact: ["5,000+ daily meals", "20 schools", "95% attendance rate"],
      timeframe: "2022 - Present",
    },
    {
      title: "Women Empowerment Initiative",
      category: "Community Development",
      location: "Middle East & North Africa",
      status: "Completed",
      icon: Home,
      image: "women+group+workshop+empowerment",
      description: "Microfinance and business training programs to help women become financially independent.",
      impact: ["800+ women trained", "$500K in microloans", "600+ businesses started"],
      timeframe: "2015 - 2023",
    },
    {
      title: "Teacher Training Program",
      category: "Education",
      location: "Sub-Saharan Africa",
      status: "Active",
      icon: BookOpen,
      image: "teachers+in+training+session",
      description: "Professional development for educators to improve teaching quality and student outcomes.",
      impact: ["500+ teachers trained", "15 training workshops", "30,000+ students impacted"],
      timeframe: "2016 - Present",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">
                Our Programs & Projects
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Discover the initiatives creating lasting change in communities worldwide through education, healthcare,
                and sustainable development.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => {
                const Icon = program.icon
                return (
                  <Card key={program.title} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-video w-full bg-muted">
                      <img
                        src={`/.jpg?height=300&width=400&query=${program.image}`}
                        alt={program.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant={program.status === "Active" ? "default" : "secondary"}>{program.status}</Badge>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                      <CardTitle className="text-balance">{program.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {program.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {program.timeframe}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{program.description}</p>

                      <div className="mb-4 space-y-1">
                        <div className="text-xs font-semibold">Impact:</div>
                        {program.impact.map((item, i) => (
                          <div key={i} className="text-xs text-muted-foreground">
                            • {item}
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">Support Our Programs</h2>
              <p className="mb-8 text-primary-foreground/90 leading-relaxed text-pretty">
                Your contribution helps us expand these life-changing programs to more communities in need.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
