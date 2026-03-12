import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: "left" | "right"
}

export interface FeaturesSectionProps {
  className?: string
}

/**
 * About page features section with alternating image/text layout.
 * Edit the blocks array below to customize for your business.
 */
export function AboutFeatures({ className }: FeaturesSectionProps) {
  const blocks: FeatureBlock[] = [
    {
      id: "journey",
      title: "My Journey",
      description:
        "From pirouettes in ballet class to warrior poses on the beach, my path has always been shaped by movement. Years of gymnastics, ballet, and dance gave me a deep appreciation for how the body moves, builds strength, and finds grace under pressure. When I discovered yoga, everything clicked \u2014 it brought together the discipline I loved with a mindfulness I had been searching for. That fusion of power and presence is at the heart of how I teach today.",
      image: "/images/ceire-warrior-pose-beach.jpg",
      imageAlt: "Ceire leading a warrior pose class on the beach",
      imagePosition: "right",
    },
    {
      id: "training",
      title: "Training & Certification",
      description:
        "I travelled to Ubud, Bali to complete my 200-hour Yoga Teacher Training \u2014 an immersive experience of daily practice, anatomy study, and self-discovery in one of the most beautiful settings on earth. Alongside my YTT, I am certified in Alignment Yoga Sculpt, which blends precise alignment with strength-building flows, and I am a qualified Bounti Instructor, specialising in rebounding fitness. These diverse qualifications allow me to offer classes that are both dynamic and deeply intentional.",
      image: "/images/ceire-ytt-certificate-half-body.jpg",
      imageAlt: "Ceire holding her Yoga Teacher Training certificate in Bali",
      imagePosition: "left",
    },
    {
      id: "vision",
      title: "The Soma Studio Vision",
      description:
        "Soma means \u201Cbody\u201D in Greek \u2014 and that is exactly where everything begins. Soma Studio was born from a desire to create a warm, inclusive space in Plettenberg Bay where people can reconnect with their bodies, quiet their minds, and leave feeling stronger than when they arrived. Whether you are here for a vigorous flow or a gentle stretch, the studio is designed to meet you where you are. My vision is simple: a community grounded in movement, breath, and belonging.",
      image: "/images/ceire-standing-balance-bali-studio.jpg",
      imageAlt: "Ceire in a standing balance pose at a Bali yoga studio",
      imagePosition: "right",
    },
  ]

  return (
    <SectionWrapper className={cn("bg-transparent", className)}>
      <Container>
        {blocks.map((block, index) => (
          <div key={block.id} className={cn(index > 0 && "mt-20 md:mt-32")}>
            <div
              className={cn(
                "flex flex-col items-center gap-10 md:gap-20 xl:gap-[140px]",
                block.imagePosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              )}
            >
              {/* Desktop Image */}
              <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col gap-8">
                {/* Heading */}
                <div className="flex w-full justify-center md:justify-start">
                  <h2 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                    {block.title}
                  </h2>
                </div>

                {/* Mobile Image */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Description */}
                <div className="flex w-full flex-col gap-8">
                  <p className="text-base font-medium leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </SectionWrapper>
  )
}
