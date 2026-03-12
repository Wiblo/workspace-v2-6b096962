import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutFullSectionProps {
  className?: string
}

/**
 * Full about section for the dedicated about page.
 * Edit the content below to customize for your business.
 */
export function AboutFullSection({ className }: AboutFullSectionProps) {
  return (
    <SectionWrapper className={cn("bg-transparent", className)}>
      <Container>
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20 xl:gap-[140px]">
          {/* Desktop Image */}
          <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
            <Image
              src="/images/ceire-headshot-portrait.jpg"
              alt="Ceire Cunningham, yoga instructor and founder of Soma Studio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col gap-8">
            {/* Heading */}
            <div className="flex w-full justify-center md:justify-start">
              <h1 className="font-heading text-balance text-center text-3xl font-light tracking-tight text-foreground md:text-left md:text-4xl lg:text-5xl">
                Meet Ceire
              </h1>
            </div>

            {/* Mobile Image */}
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
              <Image
                src="/images/ceire-headshot-portrait.jpg"
                alt="Ceire Cunningham, yoga instructor and founder of Soma Studio"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Paragraphs */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Movement has been part of my life for as long as I can remember.
                Growing up, I trained in gymnastics, ballet, and dance &mdash;
                disciplines that taught me the beauty of control, expression, and
                what the body is truly capable of. That love for movement never
                left me; it simply evolved.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My yoga journey led me to Ubud, Bali, where I completed my
                200-hour Yoga Teacher Training surrounded by rice fields and
                open-air studios. It was a transformative experience that
                deepened my understanding of alignment, breathwork, and the
                connection between body and mind. I also hold certifications in
                Alignment Yoga Sculpt and as a qualified Bounti Instructor,
                blending strength, flexibility, and mindful movement into every
                class I teach.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Now, back home in Plettenberg Bay, I have poured that passion
                into Soma Studio &mdash; a welcoming space for people of all
                levels to explore yoga, build strength, and find stillness. Whether
                you are stepping onto the mat for the first time or deepening an
                existing practice, my goal is to guide you with warmth,
                intention, and a genuine love for what movement can do.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
