import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const posts = [
    {
      title: "New School Opens in Rural Tanzania",
      category: "Education",
      date: "December 10, 2024",
      excerpt:
        "We're thrilled to announce the opening of our newest school facility, serving 300 students in a previously underserved community.",
      image: "school+building+opening+ceremony+celebration",
      slug: "new-school-tanzania",
    },
    {
      title: "Mobile Health Clinic Reaches 10,000 Patient Milestone",
      category: "Healthcare",
      date: "November 28, 2024",
      excerpt:
        "Our mobile health clinic program has now served over 10,000 patients across Southeast Asia, providing essential healthcare to remote villages.",
      image: "healthcare+mobile+clinic+patients",
      slug: "health-clinic-milestone",
    },
    {
      title: "Clean Water Initiative Expands to 5 New Communities",
      category: "Community Development",
      date: "November 15, 2024",
      excerpt:
        "Through partnerships with local leaders, we're bringing clean water access to 5 additional communities in West Africa.",
      image: "water+well+installation+community",
      slug: "clean-water-expansion",
    },
    {
      title: "Success Story: Maria's Journey to Entrepreneurship",
      category: "Stories from the Field",
      date: "October 30, 2024",
      excerpt:
        "Meet Maria, who transformed her life through our vocational training program and now runs a successful tailoring business.",
      image: "woman+entrepreneur+sewing+business",
      slug: "maria-success-story",
    },
    {
      title: "Annual Impact Report 2024 Released",
      category: "Reports",
      date: "October 15, 2024",
      excerpt:
        "Our 2024 impact report highlights the incredible achievements made possible by our supporters this year.",
      image: "annual+report+document+charts",
      slug: "annual-report-2024",
    },
    {
      title: "Teacher Training Workshop Concludes in Kenya",
      category: "Education",
      date: "September 22, 2024",
      excerpt:
        "50 teachers completed our professional development workshop, gaining new skills to enhance student learning outcomes.",
      image: "teachers+workshop+training+session",
      slug: "teacher-training-kenya",
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
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">News & Stories</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Stay updated on our latest projects, success stories, and the impact we're creating together in
                communities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Badge>Featured Story</Badge>
            </div>
            <Card className="overflow-hidden border-2 border-primary">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video w-full bg-muted md:aspect-auto">
                  <img
                    src={`/.jpg?height=600&width=800&query=${posts[0].image}`}
                    alt={posts[0].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <Badge className="mb-4 w-fit">{posts[0].category}</Badge>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">{posts[0].title}</h2>
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <p className="mb-6 text-muted-foreground leading-relaxed">{posts[0].excerpt}</p>
                  <Button asChild>
                    <Link href={`/news/${posts[0].slug}`}>
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="border-t bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-2xl font-bold">Recent Updates</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(1).map((post) => (
                <Card key={post.slug} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video w-full bg-muted">
                    <img
                      src={`/.jpg?height=300&width=400&query=${post.image}`}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="mb-2 w-fit" variant="secondary">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-balance">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/news/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline">Load More Stories</Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">Stay Connected</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed text-pretty">
                Subscribe to our newsletter to receive the latest updates and stories delivered to your inbox.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <input type="email" placeholder="Your email address" className="rounded-md border px-4 py-2 sm:w-80" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
