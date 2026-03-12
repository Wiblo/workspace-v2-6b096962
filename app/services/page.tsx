import { generatePageMetadata } from "@/lib/seo/metadata"
import { ServicesHero } from "@/components/sections/hero/ServicesHero"
import { ServicesGrid } from "@/components/sections/services/ServicesGrid"
import { CTASection } from "@/components/sections/cta/CTASection"

export const metadata = generatePageMetadata({
  title: "Classes",
  description:
    "Explore yoga classes at Soma Studio in Plettenberg Bay — Vinyasa, Alignment Yoga Sculpt, Yin Yoga, and Rebounding. Find the perfect class for your practice.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <CTASection />
    </>
  )
}
