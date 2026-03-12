import { HeroSection } from "@/components/sections/hero/HeroSection"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutPreview } from "@/components/sections/about/AboutPreview"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { FAQSection } from "@/components/sections/faq/FAQSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <AboutPreview />
      <FeaturesSection />
      <CTASection />
      <FAQSection />
    </>
  )
}
