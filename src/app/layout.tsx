import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: "%s | Heems Holdings",
    default: "Heems Holdings - Premium Real Estate Investment & Development",
  },
  description: "Disciplined investment strategy focused on premium properties across logistics, residential, and hospitality sectors. Sustainable long-term growth in high-value markets.",
  keywords: [
    "real estate investment", 
    "property development", 
    "commercial real estate", 
    "logistics properties", 
    "residential development", 
    "hospitality real estate",
    "Heems Holdings",
    "premium properties",
    "investment strategy"
  ],
  authors: [{ name: "Heems Holdings LLC" }],
  creator: "Heems Holdings LLC",
  publisher: "Heems Holdings LLC",
  metadataBase: new URL("https://heemsholdings.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heemsholdings.com",
    siteName: "Heems Holdings",
    title: "Premium Real Estate Investment & Development",
    description: "Disciplined investment strategy focused on premium properties across logistics, residential, and hospitality sectors.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heems Holdings - Premium Real Estate Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@heemsholdings",
    creator: "@heemsholdings",
    title: "Premium Real Estate Investment & Development",
    description: "Disciplined investment strategy focused on premium properties across high-value markets.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code-here",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  )
}