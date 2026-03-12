import { generatePageMetadata } from "@/lib/seo/metadata"
import { AboutFullSection } from "@/components/sections/about/AboutFullSection"
import { AboutFeatures } from "@/components/sections/features/AboutFeatures"
import { CTASection } from "@/components/sections/cta/CTASection"

export const metadata = generatePageMetadata({
  title: "About Ceire Cunningham",
  description:
    "Meet Ceire Cunningham, certified yoga instructor and founder of Soma Studio in Plettenberg Bay. Trained in Bali with a background in gymnastics, ballet, and dance.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <AboutFullSection />
      <AboutFeatures />
      <CTASection />
    </>
  )
}
