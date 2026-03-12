import { Cormorant_Garamond, DM_Sans, Geist_Mono, Sora, Titan_One } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { JsonLd, generateLocalBusinessSchema } from "@/lib/seo/json-ld"
import { generateRootMetadata } from "@/lib/seo/metadata"
import { WibloDesignBridge } from "@/components/wiblo-design-bridge"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-titan-one",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata = generateRootMetadata()

/**
 * ROOT LAYOUT
 *
 * Fonts:
 * - Cormorant Garamond (--font-cormorant / font-heading) — Elegant serif for headings
 * - DM Sans (--font-dm-sans / font-sans) — Clean sans-serif for body text
 * - Geist Mono (--font-geist-mono / font-mono) — Monospace for code
 *
 * BEFORE UNCOMMENTING NAVBAR & FOOTER:
 * 1. Update lib/data/business-info.ts with the client's business information
 * 2. Update lib/data/navigation.ts with the site's navigation structure
 * 3. Read docs/brand-guide.md for colors and typography
 * 4. Customize the Navbar and Footer components to match the brand
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} ${sora.variable} ${titanOne.variable}`}
    >
      <body className={`${geistMono.variable} bg-blush font-sans antialiased`}>
        <WibloDesignBridge />

        {/* Skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>

        {/* LocalBusiness JSON-LD for SEO */}
        <JsonLd data={generateLocalBusinessSchema()} />

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
