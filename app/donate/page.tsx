"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Heart, Shield, TrendingUp, CheckCircle2, Building2, Globe2, Copy, Check } from "lucide-react"
import { useState } from "react"

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

const nigerianBanks = [
  { name: "Access Bank", accountNumber: "0123456789", accountName: "Hope Foundation" },
  { name: "GTBank", accountNumber: "0987654321", accountName: "Hope Foundation" },
  { name: "Zenith Bank", accountNumber: "1234567890", accountName: "Hope Foundation" },
  { name: "First Bank", accountNumber: "9876543210", accountName: "Hope Foundation" },
  { name: "UBA", accountNumber: "5555666677", accountName: "Hope Foundation" },
]

const internationalBank = {
  name: "Standard Chartered Bank",
  accountNumber: "GB29 NWBK 6016 1331 9268 19",
  swiftCode: "SCBLGB2L",
  accountName: "Hope Foundation International",
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 w-8 p-0">
      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
    </Button>
  )
}

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-3xl text-center"
            >
              <Heart className="mx-auto mb-6 h-16 w-16 text-primary" fill="currentColor" />
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">Make a Donation</h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Your support creates lasting change in communities worldwide. Every contribution makes a difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="border-b bg-card py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid gap-6 md:grid-cols-3"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Secure Donations</div>
                  <div className="text-sm text-muted-foreground">SSL encrypted</div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">85% to Programs</div>
                  <div className="text-sm text-muted-foreground">Direct impact</div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Tax Deductible</div>
                  <div className="text-sm text-muted-foreground">501(c)(3) nonprofit</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Choose Your Contribution</CardTitle>
                  <CardDescription>Select an amount or enter a custom donation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Donation Amounts */}
                    <div>
                      <label className="mb-4 block text-sm font-medium">Donation Amount</label>
                      <div className="grid gap-3 md:grid-cols-4">
                        {[50, 100, 250, 500].map((amount) => (
                          <Button key={amount} variant="outline" size="lg" className="text-lg bg-transparent">
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-3">
                        <Button variant="outline" size="lg" className="w-full text-lg bg-transparent">
                          Custom Amount
                        </Button>
                      </div>
                    </div>

                    {/* Frequency */}
                    <div>
                      <label className="mb-4 block text-sm font-medium">Frequency</label>
                      <div className="grid gap-3 md:grid-cols-2">
                        <Button variant="outline" size="lg">
                          One-Time Donation
                        </Button>
                        <Button variant="default" size="lg">
                          Monthly Donation
                        </Button>
                      </div>
                    </div>

                    {/* Where to Help */}
                    <div>
                      <label className="mb-4 block text-sm font-medium">Where Your Gift Helps Most</label>
                      <div className="grid gap-3">
                        <Button variant="outline" className="justify-start bg-transparent">
                          Where It's Needed Most
                        </Button>
                        <Button variant="outline" className="justify-start bg-transparent">
                          Education Programs
                        </Button>
                        <Button variant="outline" className="justify-start bg-transparent">
                          Healthcare Initiatives
                        </Button>
                        <Button variant="outline" className="justify-start bg-transparent">
                          Community Development
                        </Button>
                      </div>
                    </div>

                    <Button size="lg" className="w-full">
                      Continue to Payment
                    </Button>

                    <p className="text-center text-xs text-muted-foreground leading-relaxed">
                      By clicking continue, you'll be redirected to our secure payment processor. Your information is
                      protected with industry-standard encryption.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bank Transfer Details */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              <div className="mb-12 text-center">
                <Building2 className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">Bank Transfer Details</h2>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  You can also make a direct bank transfer to any of our accounts below
                </p>
              </div>

              {/* Nigerian Banks */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">🇳🇬</span> Nigerian Banks
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="grid gap-4 md:grid-cols-2"
                >
                  {nigerianBanks.map((bank) => (
                    <motion.div key={bank.name} variants={itemVariants}>
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{bank.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Account Name:</span>
                            <span className="font-medium">{bank.accountName}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Account Number:</span>
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-medium">{bank.accountNumber}</span>
                              <CopyButton text={bank.accountNumber} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* International Bank */}
              <div>
                <h3 className="mb-4 text-xl font-semibold flex items-center gap-2">
                  <Globe2 className="h-5 w-5" /> International Bank
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">💳</span> Donate with Paystack
                      </CardTitle>
                      <CardDescription>Quick and secure online payment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                        Make an instant donation using your debit card, bank transfer, or USSD through Paystack's secure
                        payment gateway.
                      </p>
                      <Button size="lg" className="w-full">
                        Donate via Paystack
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8"
              >
                <Card className="border-2 border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">💳</span> Donate with Paystack
                    </CardTitle>
                    <CardDescription>Quick and secure online payment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Make an instant donation using your debit card, bank transfer, or USSD through Paystack's secure
                      payment gateway.
                    </p>
                    <Button size="lg" className="w-full">
                      Donate via Paystack
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                After making a transfer, please email us at <strong>donations@hopefoundation.org</strong> with your
                transaction reference for confirmation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Examples */}
        <section className="border-t py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance">Your Impact</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
                See how your contribution creates real change
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="mx-auto max-w-3xl space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>$50</CardTitle>
                    <CardDescription>Provides school supplies for 5 students for one year</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>$100</CardTitle>
                    <CardDescription>
                      Funds a week of mobile health clinic operations reaching 100+ patients
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>$250</CardTitle>
                    <CardDescription>Supplies clean water access for a family of 6 for an entire year</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>$500</CardTitle>
                    <CardDescription>
                      Provides vocational training and job placement support for 2 individuals
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Other Ways to Give */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-balance">Other Ways to Give</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Corporate Matching</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Many employers match charitable donations. Check if your company participates to double your
                      impact.
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stock & Securities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Donate appreciated stock directly and potentially receive additional tax benefits.
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Wire Transfer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      For large donations, wire transfers may be more convenient. Contact us for details.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legacy Giving</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Include Hope Foundation in your estate planning to create a lasting legacy.
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More
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
