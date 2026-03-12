import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b py-16 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Brand Identity Guide
        </p>
        <h1 className="mt-4 font-heading text-6xl font-light tracking-tight md:text-7xl">
          Soma Studio
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          A yoga and movement studio in Plettenberg Bay, South Africa.
          Grounded in nature, guided by intention.
        </p>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-24 space-y-32">
        {/* ── Brand Signature Colors ── */}
        <section>
          <SectionHeading
            title="Brand Colors"
            subtitle="Three signature colors matched to Ceire's Plascon paint references — earthy sage, warm cream, and rich burgundy."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <BrandSwatch
              name="Sage"
              subtitle="Sheer Stone (GN4)"
              hex="#A3A793"
              description="Primary brand color. A muted gray-green, grounding and natural."
              className="bg-sage"
              value="oklch(0.719 0.029 116)"
            />
            <BrandSwatch
              name="Blush"
              subtitle="Inspiring Morning (LN1)"
              hex="#E3DDCF"
              description="Warm cream/beige. Used for accents and soft section backgrounds."
              className="bg-blush"
              value="oklch(0.898 0.020 88)"
            />
            <BrandSwatch
              name="Wine"
              subtitle="Wine Sensation (RB1)"
              hex="#853643"
              description="Warm burgundy. Used sparingly for emphasis and richness."
              className="bg-wine"
              value="oklch(0.445 0.109 13)"
            />
          </div>

          {/* Light variants */}
          <h3 className="mt-12 font-heading text-xl font-medium">
            Light Variants
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Subtle tints for backgrounds and sections.
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            <SmallSwatch
              name="Sage Light"
              className="bg-sage-light"
              value="oklch(0.88 0.018 116)"
            />
            <SmallSwatch
              name="Blush Light"
              className="bg-blush-light"
              value="oklch(0.95 0.010 88)"
            />
            <SmallSwatch
              name="Wine Light"
              className="bg-wine-light"
              value="oklch(0.85 0.06 13)"
            />
          </div>
        </section>

        {/* ── Color Comparison ── */}
        <section>
          <SectionHeading
            title="Color Comparison"
            subtitle="Current paint-matched colors (v2) vs the original colors (v1) side by side."
          />

          <div className="mt-12 space-y-10">
            {/* Sage comparison */}
            <div>
              <h3 className="font-heading text-xl font-medium">Sage</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <SmallSwatch
                  name="Sage v2 (current)"
                  className="bg-sage"
                  value="oklch(0.719 0.029 116)"
                />
                <SmallSwatch
                  name="Sage v1"
                  style={{ backgroundColor: "oklch(0.52 0.07 155)" }}
                  value="oklch(0.52 0.07 155)"
                />
                <SmallSwatch
                  name="Sage Light v2 (current)"
                  className="bg-sage-light"
                  value="oklch(0.88 0.018 116)"
                />
                <SmallSwatch
                  name="Sage Light v1"
                  style={{ backgroundColor: "oklch(0.90 0.04 155)" }}
                  value="oklch(0.90 0.04 155)"
                />
              </div>
            </div>

            {/* Blush comparison */}
            <div>
              <h3 className="font-heading text-xl font-medium">Blush</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <SmallSwatch
                  name="Blush v2 (current)"
                  className="bg-blush"
                  value="oklch(0.898 0.020 88)"
                />
                <SmallSwatch
                  name="Blush v1"
                  style={{ backgroundColor: "oklch(0.88 0.04 15)" }}
                  value="oklch(0.88 0.04 15)"
                />
                <SmallSwatch
                  name="Blush Light v2 (current)"
                  className="bg-blush-light"
                  value="oklch(0.95 0.010 88)"
                />
                <SmallSwatch
                  name="Blush Light v1"
                  style={{ backgroundColor: "oklch(0.95 0.02 15)" }}
                  value="oklch(0.95 0.02 15)"
                />
              </div>
            </div>

            {/* Wine comparison */}
            <div>
              <h3 className="font-heading text-xl font-medium">Wine</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <SmallSwatch
                  name="Wine v2 (current)"
                  className="bg-wine"
                  value="oklch(0.445 0.109 13)"
                />
                <SmallSwatch
                  name="Wine v1"
                  style={{ backgroundColor: "oklch(0.38 0.10 340)" }}
                  value="oklch(0.38 0.10 340)"
                />
                <SmallSwatch
                  name="Wine Light v2 (current)"
                  className="bg-wine-light"
                  value="oklch(0.85 0.06 13)"
                />
                <SmallSwatch
                  name="Wine Light v1"
                  style={{ backgroundColor: "oklch(0.88 0.05 340)" }}
                  value="oklch(0.88 0.05 340)"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Design Tokens ── */}
        <section>
          <SectionHeading
            title="Design Tokens"
            subtitle="The full palette of semantic color tokens used throughout the UI."
          />
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <TokenGroup title="Surfaces">
              <TokenSwatch
                name="Background"
                className="bg-background"
                value="--background"
              />
              <TokenSwatch
                name="Card"
                className="bg-card"
                value="--card"
              />
              <TokenSwatch
                name="Popover"
                className="bg-popover"
                value="--popover"
              />
              <TokenSwatch
                name="Muted"
                className="bg-muted"
                value="--muted"
              />
            </TokenGroup>

            <TokenGroup title="Text">
              <TokenSwatch
                name="Foreground"
                className="bg-foreground"
                value="--foreground"
              />
              <TokenSwatch
                name="Card Foreground"
                className="bg-card-foreground"
                value="--card-foreground"
              />
              <TokenSwatch
                name="Muted Foreground"
                className="bg-muted-foreground"
                value="--muted-foreground"
              />
            </TokenGroup>

            <TokenGroup title="Interactive">
              <TokenSwatch
                name="Primary"
                className="bg-primary"
                value="--primary"
              />
              <TokenSwatch
                name="Secondary"
                className="bg-secondary"
                value="--secondary"
              />
              <TokenSwatch
                name="Accent"
                className="bg-accent"
                value="--accent"
              />
              <TokenSwatch
                name="Ring"
                className="bg-ring"
                value="--ring"
              />
            </TokenGroup>

            <TokenGroup title="Foregrounds">
              <TokenSwatch
                name="Primary FG"
                className="bg-primary-foreground"
                value="--primary-foreground"
              />
              <TokenSwatch
                name="Secondary FG"
                className="bg-secondary-foreground"
                value="--secondary-foreground"
              />
              <TokenSwatch
                name="Accent FG"
                className="bg-accent-foreground"
                value="--accent-foreground"
              />
            </TokenGroup>

            <TokenGroup title="Borders">
              <TokenSwatch
                name="Border"
                className="bg-border"
                value="--border"
              />
              <TokenSwatch
                name="Input"
                className="bg-input"
                value="--input"
              />
            </TokenGroup>

            <TokenGroup title="Status">
              <TokenSwatch
                name="Destructive"
                className="bg-destructive"
                value="--destructive"
              />
            </TokenGroup>
          </div>
        </section>

        {/* ── Typography ── */}
        <section>
          <SectionHeading
            title="Typography"
            subtitle="Cormorant Garamond for headings brings elegance. DM Sans for body text ensures readability."
          />

          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            {/* Heading font */}
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Heading Font
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Cormorant Garamond — Elegant serif
              </p>
              <Separator className="my-6" />
              <div className="space-y-4">
                <p className="font-heading text-6xl font-light tracking-tight">
                  Aa
                </p>
                <p className="font-heading text-5xl font-light">
                  Find Your Balance
                </p>
                <p className="font-heading text-4xl font-light">
                  Movement is Medicine
                </p>
                <p className="font-heading text-3xl font-light">
                  Breathe, Flow, Transform
                </p>
                <p className="font-heading text-2xl font-light">
                  Vinyasa &middot; Yin &middot; Sculpt &middot; Rebounding
                </p>
                <p className="font-heading text-xl font-light">
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </p>
                <p className="font-heading text-xl font-light">
                  a b c d e f g h i j k l m n o p q r s t u v w x y z
                </p>
                <p className="font-heading text-xl font-light">
                  0 1 2 3 4 5 6 7 8 9
                </p>
              </div>
            </div>

            {/* Body font */}
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Body Font
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                DM Sans — Clean sans-serif
              </p>
              <Separator className="my-6" />
              <div className="space-y-4">
                <p className="text-6xl font-light tracking-tight">Aa</p>
                <p className="text-lg leading-relaxed">
                  Soma Studio is a yoga and movement space in the heart of
                  Plettenberg Bay. Founded by Ceire Cunningham, a 200-hour
                  certified yoga teacher trained in Ubud, Bali, the studio
                  offers Vinyasa, Yin, Alignment Yoga Sculpt, and Rebounding
                  fitness classes.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  With a background in gymnastics, ballet, and dance, Ceire
                  brings a deep understanding of movement and alignment to
                  every class. Whether you are a complete beginner or an
                  experienced practitioner, you will find a class that meets
                  you where you are.
                </p>
                <p className="text-sm text-muted-foreground">
                  Small text / captions — Classes run daily from 06:00 to
                  18:00. Book online or via WhatsApp at +27 78 511 1889.
                </p>
              </div>
            </div>
          </div>

          {/* Font weights */}
          <div className="mt-16">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Font Weights
            </p>
            <Separator className="my-6" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-heading text-3xl font-light">Light 300</p>
                <p className="text-sm text-muted-foreground">
                  Cormorant Garamond
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-normal">
                  Regular 400
                </p>
                <p className="text-sm text-muted-foreground">
                  Cormorant Garamond
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-medium">
                  Medium 500
                </p>
                <p className="text-sm text-muted-foreground">
                  Cormorant Garamond
                </p>
              </div>
              <div>
                <p className="font-heading text-3xl font-semibold">
                  Semibold 600
                </p>
                <p className="text-sm text-muted-foreground">
                  Cormorant Garamond
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── UI Components ── */}
        <section>
          <SectionHeading
            title="Components"
            subtitle="Core UI elements styled with the Soma Studio palette."
          />

          {/* Buttons */}
          <div className="mt-12">
            <h3 className="font-heading text-xl font-medium">Buttons</h3>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button>Book a Class</Button>
              <Button variant="secondary">View Schedule</Button>
              <Button variant="outline">Learn More</Button>
              <Button variant="ghost">Contact</Button>
              <Button variant="link">Read more</Button>
              <Button variant="destructive">Cancel</Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Button size="lg">Book a Class</Button>
              <Button size="default">Book a Class</Button>
              <Button size="sm">Book a Class</Button>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Badges */}
          <div>
            <h3 className="font-heading text-xl font-medium">Badges</h3>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>Vinyasa</Badge>
              <Badge variant="secondary">Yin Yoga</Badge>
              <Badge variant="outline">Sculpt</Badge>
              <Badge variant="destructive">Full</Badge>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Cards */}
          <div>
            <h3 className="font-heading text-xl font-medium">Cards</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-medium">
                    Vinyasa Flow
                  </CardTitle>
                  <CardDescription>
                    Dynamic, breath-linked movement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A flowing practice that links breath with movement,
                    building strength, flexibility, and mindfulness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-secondary/50">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-medium">
                    Yin Yoga
                  </CardTitle>
                  <CardDescription>
                    Deep stretches, long holds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A slow, meditative practice targeting deep connective
                    tissues. Perfect for restoration and flexibility.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent/60">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-medium">
                    Rebounding
                  </CardTitle>
                  <CardDescription>
                    High-energy fitness on mini trampolines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A fun, low-impact cardio workout that improves balance,
                    coordination, and cardiovascular health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Inputs */}
          <div>
            <h3 className="font-heading text-xl font-medium">Inputs</h3>
            <div className="mt-6 grid max-w-md gap-4">
              <Input placeholder="Full name" />
              <Input type="email" placeholder="Email address" />
              <Input type="tel" placeholder="+27 78 511 1889" />
            </div>
          </div>
        </section>

        {/* ── Color Combinations ── */}
        <section>
          <SectionHeading
            title="Color Combinations"
            subtitle="How the brand colors work together in context."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* Sage on white */}
            <div className="rounded-xl border p-8">
              <p className="font-heading text-3xl font-light text-primary">
                Sage on White
              </p>
              <p className="mt-2 text-muted-foreground">
                Primary text and CTAs over light backgrounds.
              </p>
              <Button className="mt-4">Book Now</Button>
            </div>

            {/* White on primary sage */}
            <div className="rounded-xl bg-primary p-8 text-primary-foreground">
              <p className="font-heading text-3xl font-light">
                White on Sage
              </p>
              <p className="mt-2 opacity-80">
                Hero sections, banners, and featured areas.
              </p>
            </div>

            {/* Blush background */}
            <div className="rounded-xl bg-blush p-8">
              <p className="font-heading text-3xl font-light text-foreground">
                Warm Cream Section
              </p>
              <p className="mt-2 text-muted-foreground">
                Inspiring Morning — warm alternate sections and highlights.
              </p>
            </div>

            {/* Wine accent */}
            <div className="rounded-xl bg-wine p-8 text-white">
              <p className="font-heading text-3xl font-light">Wine Accent</p>
              <p className="mt-2 opacity-80">
                Special callouts, premium features, testimonial backgrounds.
              </p>
            </div>

            {/* Sage light section */}
            <div className="rounded-xl bg-sage-light p-8">
              <p className="font-heading text-3xl font-light text-foreground">
                Sage Light Section
              </p>
              <p className="mt-2 text-muted-foreground">
                Subtle green-tinted backgrounds for visual separation.
              </p>
            </div>

            {/* Wine light section */}
            <div className="rounded-xl bg-wine-light p-8">
              <p className="font-heading text-3xl font-light text-foreground">
                Wine Light Section
              </p>
              <p className="mt-2 text-muted-foreground">
                Soft rosewood tint for elegant feature areas.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sample Section ── */}
        <section>
          <SectionHeading
            title="Sample Section"
            subtitle="How a typical page section might look with this brand system."
          />
          <div className="mt-12 rounded-2xl bg-secondary/50 p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary">Now Open in Plett</Badge>
              <h2 className="mt-6 font-heading text-4xl font-light tracking-tight md:text-5xl">
                Find stillness in movement
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                Whether you are stepping onto the mat for the first time or
                deepening an existing practice, Soma Studio offers a space to
                move, breathe, and reconnect with your body.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">Book Your First Class</Button>
                <Button variant="outline" size="lg">
                  View Schedule
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

/* ── Helper Components ── */

function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div>
      <h2 className="font-heading text-3xl font-light tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>
      <Separator className="mt-6" />
    </div>
  )
}

function BrandSwatch({
  name,
  subtitle,
  hex,
  description,
  className,
  value,
}: {
  name: string
  subtitle: string
  hex: string
  description: string
  className: string
  value: string
}) {
  return (
    <div className="space-y-4">
      <div
        className={cn("h-40 rounded-xl border shadow-sm", className)}
      />
      <div>
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        <p className="mt-2 font-mono text-xs text-muted-foreground">
          {hex} &middot; {value}
        </p>
      </div>
    </div>
  )
}

function SmallSwatch({
  name,
  className,
  value,
  style,
}: {
  name: string
  className?: string
  value: string
  style?: React.CSSProperties
}) {
  return (
    <div className="space-y-3">
      <div
        className={cn("h-20 rounded-xl border shadow-sm", className)}
        style={style}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}

function TokenGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function TokenSwatch({
  name,
  className,
  value,
}: {
  name: string
  className: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn("size-10 shrink-0 rounded-lg border shadow-sm", className)}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}
