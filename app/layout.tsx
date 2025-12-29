import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ErrorBoundary from "@/components/error-boundary"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hope Foundation | Building Better Communities Together",
  description:
    "Join us in making a lasting impact through education, healthcare, and community development programs worldwide.",
  icons: {
    icon: [
      {
        url: "/ideogram.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ideogram.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/ideogram.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/ideogram.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
