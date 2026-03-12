import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import {
  businessInfo,
  getPhoneLink,
  getEmailLink,
  getFullAddress,
} from "@/lib/data/business-info"

export interface ContactSectionProps {
  className?: string
}

/**
 * Contact section with contact cards and a prominent WhatsApp CTA.
 * Displays phone/WhatsApp, email, location, and hours.
 */
export function ContactSection({ className }: ContactSectionProps) {
  const contactCards = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: businessInfo.phone,
      href: getPhoneLink(),
      description: "Call or message us anytime",
    },
    {
      icon: Mail,
      label: "Email",
      value: businessInfo.email,
      href: getEmailLink(),
      description: "We'll get back to you shortly",
    },
    {
      icon: MapPin,
      label: "Location",
      value: getFullAddress(),
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getFullAddress())}`,
      description: "Find us in Plettenberg Bay",
      external: true,
    },
    {
      icon: Clock,
      label: "Studio Hours",
      value: "Mon–Sat: 6 AM – 6 PM",
      secondaryValue: "Sun: 6 AM – 12 PM",
      description: "Classes run throughout the day",
    },
  ]

  return (
    <SectionWrapper className={cn("bg-transparent", className)}>
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We would love to hear from you. Reach out via WhatsApp for the
            fastest response, or use any of the options below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {contactCards.map((card) => {
            const Icon = card.icon
            const content = (
              <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-accent/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Icon
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="font-medium text-foreground">{card.value}</p>
                  {"secondaryValue" in card && card.secondaryValue && (
                    <p className="font-medium text-foreground">
                      {card.secondaryValue}
                    </p>
                  )}
                </div>
                <p className="mt-auto text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            )

            if (card.href) {
              return (
                <Link
                  key={card.label}
                  href={card.href}
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {content}
                </Link>
              )
            }

            return (
              <div key={card.label}>
                {content}
              </div>
            )
          })}
        </div>
      </Container>
    </SectionWrapper>
  )
}
