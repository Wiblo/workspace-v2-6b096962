import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutPreviewProps {
  className?: string
}

export function AboutPreview({ className }: AboutPreviewProps) {
  return (
    <SectionWrapper className={cn("bg-transparent", className)}>
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
          {/* Image Container */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/ceire-headshot-portrait.jpg"
                alt="Ceire Cunningham, founder of Soma Studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 400px, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full md:w-1/2 md:px-8 lg:w-7/12">
            <div className="max-w-xl">
              <h2 className="font-heading mb-6 text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                Meet Ceire
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                With a lifelong love of movement rooted in gymnastics, ballet,
                and dance, Ceire brings a deep understanding of the body to
                every class. After completing her 200-hour Yoga Teacher Training
                in Ubud, Bali, she founded Soma Studio to share the
                transformative power of yoga and movement with the Plettenberg
                Bay community.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-base font-medium text-wine transition-colors hover:text-wine/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                More About Ceire
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
