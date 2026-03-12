import { generatePageMetadata } from "@/lib/seo/metadata"
import { ContactSection } from "@/components/sections/contact/ContactSection"
import { LocationSection } from "@/components/sections/location/LocationSection"

export const metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Contact Soma Studio, your yoga and movement studio in Plettenberg Bay. Reach us via WhatsApp, phone, or email to book a class or ask a question.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <LocationSection title="Visit the Studio" bookingText="Book a Class" />
    </>
  )
}
