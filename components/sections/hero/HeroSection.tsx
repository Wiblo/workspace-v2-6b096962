import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { businessInfo } from "@/lib/data/business-info"

const size: "large" | "medium" | "small" = "large"
const overlayOpacity = 30

const heroContent = {
  subtitle: "Yoga & Movement in Plettenberg Bay",
  title: "Find Your Balance",
  backgroundImage: "/images/ceire-seated-pose-bali-studio-wide.png",
  backgroundImageAlt: "Ceire in a seated yoga pose at a bamboo studio in Bali during golden hour",
  ctaText: "Book a Class",
  ctaUrl: businessInfo.bookingUrl || "/contact",
}

const sizeClasses = {
  large:
    "mx-auto mt-4 flex max-h-188 min-h-125 max-w-[90rem] flex-col items-center p-2 pt-0 md:h-[calc(100vh-136px)] md:min-h-160 xl:h-[calc(110vh-136px)]",
  medium:
    "mx-auto mt-4 flex max-h-140 min-h-100 max-w-[90rem] flex-col items-center p-2 pt-0 md:min-h-120",
  small:
    "mx-auto mt-4 flex max-h-100 min-h-80 max-w-[90rem] flex-col items-center p-2 pt-0 md:min-h-80",
}

export interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn(sizeClasses[size], className)}>
      <div className="relative flex w-full flex-1 flex-col overflow-hidden rounded-4xl bg-black">
        {/* Background Image */}
        <div className="absolute h-full w-full overflow-hidden rounded-4xl">
          <Image
            src={heroContent.backgroundImage}
            alt={heroContent.backgroundImageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})` }}
          />
        </div>

        {/* Content */}
        <div className="relative flex h-full flex-1 flex-col justify-end gap-8 p-8 pt-52 lg:p-20 lg:pb-20">
          <div className="max-w-200 bg-transparent">
            <div className="flex flex-col gap-6 text-balance">
              <span className="text-white">
                <span className="border-l-4 border-primary pl-4 text-lg font-medium md:text-xl">
                  {heroContent.subtitle}
                </span>
              </span>

              <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl font-semibold">
                {heroContent.title}
              </h1>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex">
            <Link
              href={heroContent.ctaUrl}
              className="group relative flex min-h-12 items-center justify-center rounded-lg bg-[var(--play-button-bg)] px-6 py-3 font-medium text-[var(--play-button-fg)] transition-[filter] ease-in-out hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <span className="pointer-events-none absolute inset-0 rounded-lg bg-black/10 opacity-0 transition-opacity group-hover:opacity-100"></span>
              <span className="flex flex-1 items-center justify-center gap-x-2">
                <span className="flex flex-row items-center gap-x-1">
                  {heroContent.ctaText}
                  <span className="relative inline-block h-4 w-4">
                    <ChevronRight
                      className="absolute left-0 top-0 h-4 w-4 transition-[transform,opacity] duration-200 group-hover:translate-x-1 group-hover:opacity-0"
                      aria-hidden="true"
                    />
                    <ArrowRight
                      className="absolute left-0 top-0 h-4 w-4 -translate-x-1 opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
