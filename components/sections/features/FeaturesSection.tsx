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

export function FeaturesSection({ className }: FeaturesSectionProps) {
  const blocks: FeatureBlock[] = [
    {
      id: "feature-1",
      title: "All Levels Welcome",
      description:
        "Whether you are stepping onto the mat for the first time or deepening an existing practice, every class offers modifications so you can work at your own level. Soma Studio is a judgment-free space where everyone belongs.",
      image: "/images/bali-training-group-meditation.jpg",
      imageAlt: "Group meditation session during yoga teacher training in Bali",
      imagePosition: "right",
    },
    {
      id: "feature-2",
      title: "Movement Beyond the Mat",
      description:
        "With roots in gymnastics, ballet, and dance, Ceire brings a unique understanding of how the body moves. From flowing Vinyasa to high-energy Rebounding, Soma Studio offers variety so you never get stuck in a rut.",
      image: "/images/ceire-standing-balance-bali-studio.jpg",
      imageAlt: "Ceire demonstrating a standing balance pose in a Bali yoga studio",
      imagePosition: "left",
    },
    {
      id: "feature-3",
      title: "A Space to Reconnect",
      description:
        "Soma Studio is more than a workout. It is a space to slow down, breathe, and reconnect with your body. In the natural beauty of Plettenberg Bay, find stillness in movement and strength in softness.",
      image: "/images/ceire-mindful-meditation-closeup.jpg",
      imageAlt: "Ceire in a mindful meditation with hands on chest",
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
                <div className="flex w-full justify-center md:justify-start">
                  <h2 className="font-heading text-balance text-center text-3xl font-semibold text-foreground md:text-left md:text-4xl lg:text-5xl">
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
