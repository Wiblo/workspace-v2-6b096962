# Brand Guide — Soma Studio

## Overview

Grounded, serene aesthetic for a yoga and movement studio in Plettenberg Bay, South Africa. The palette is drawn directly from Ceire's Plascon/Dulux paint selections — muted sage for grounding, warm cream for softness, and burgundy wine for depth.

**Live preview**: Visit `/brand` to see all colors, typography, and components in context.

## Brand Signature Colors

Matched to exact Plascon/Dulux paint references:

| Name | Paint Reference | Hex | OKLCH | Usage |
|------|----------------|-----|-------|-------|
| **Sage** | GN4 "Sheer Stone" | `#A3A793` | `oklch(0.719 0.029 116)` | Primary brand color — muted gray-green |
| **Blush** | LN1 "Inspiring Morning" | `#E3DDCF` | `oklch(0.898 0.020 88)` | Warm cream/beige — accents, section backgrounds |
| **Wine** | RB1 "Wine Sensation" | `#853643` | `oklch(0.445 0.109 13)` | Warm burgundy — sparingly for emphasis |

### Light Variants

| Name | OKLCH | Usage |
|------|-------|-------|
| **Sage Light** | `oklch(0.88 0.018 116)` | Subtle sage section backgrounds |
| **Blush Light** | `oklch(0.95 0.010 88)` | Warm highlight backgrounds |
| **Wine Light** | `oklch(0.85 0.06 13)` | Soft rosewood tinted sections |

### Tailwind Usage

```tsx
// Brand colors available as utilities
className="bg-sage text-sage"
className="bg-blush text-blush"
className="bg-wine text-wine"
className="bg-sage-light bg-blush-light bg-wine-light"
```

## Colors

### Hue Reference

- **Hue 116** = Sage/olive green (Sheer Stone) — muted, earthy, natural
- **Hue 88** = Warm yellow (Inspiring Morning) — cream, beige, soft warmth
- **Hue 13** = Warm red (Wine Sensation) — burgundy, cranberry, richness
- Low chroma throughout — the palette is deliberately muted and natural

### Primary Palette

| Token | Derived From | Usage |
|-------|-------------|-------|
| **Primary** | Sage (darkened) | Buttons, links, CTAs — `oklch(0.48 0.06 116)` |
| **Secondary** | Light sage | Subtle backgrounds — footer, alt sections |
| **Accent** | Warm cream | Hover states, warm highlights |

### Neutral Palette

| Token | Purpose |
|-------|---------|
| **Background** | Page background (warm off-white, hue 88) |
| **Foreground** | Body text (dark with subtle wine undertone, hue 13) |
| **Muted** | Disabled states, quiet backgrounds |
| **Muted Foreground** | Secondary text, captions |
| **Border** | Dividers, input borders (sage-tinted) |

### OKLCH Values

#### Light Mode

```css
--background: oklch(0.985 0.004 88);
--foreground: oklch(0.22 0.02 13);
--primary: oklch(0.48 0.06 116);
--primary-foreground: oklch(0.98 0.005 88);
--secondary: oklch(0.92 0.015 116);
--secondary-foreground: oklch(0.30 0.03 116);
--muted: oklch(0.94 0.008 88);
--muted-foreground: oklch(0.50 0.015 116);
--accent: oklch(0.92 0.018 88);
--accent-foreground: oklch(0.30 0.04 13);
--destructive: oklch(0.55 0.14 22);
--border: oklch(0.90 0.010 116);
--ring: oklch(0.48 0.06 116);
```

#### Dark Mode

```css
--background: oklch(0.15 0.01 116);
--foreground: oklch(0.95 0.005 88);
--primary: oklch(0.65 0.06 116);
--primary-foreground: oklch(0.15 0.01 116);
--secondary: oklch(0.22 0.015 116);
--secondary-foreground: oklch(0.95 0.005 88);
--muted: oklch(0.22 0.01 88);
--muted-foreground: oklch(0.65 0.015 116);
--accent: oklch(0.28 0.02 88);
--accent-foreground: oklch(0.90 0.018 88);
--destructive: oklch(0.65 0.12 22);
--border: oklch(1 0 0 / 10%);
--ring: oklch(0.65 0.06 116);
```

## Typography

### Fonts

| Role | Font | Characteristics |
|------|------|-----------------|
| **Headings** | Cormorant Garamond | Elegant serif — refined, airy, perfect for wellness |
| **Body** | DM Sans | Clean sans-serif — modern, warm, highly readable |
| **Code** | Geist Mono | Monospace (development use only) |

### Implementation

Fonts are loaded via `next/font/google` in `app/layout.tsx`:

```tsx
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})
```

### Tailwind Usage

```tsx
// Heading font (Cormorant Garamond)
className="font-heading text-4xl font-light"

// Body font (DM Sans) — default, no class needed
className="text-base"
```

### Heading Style

- **Preferred weight**: `font-light` (300) for large headings — elegant, airy feel
- **Medium weight**: `font-medium` (500) for smaller headings and subheadings
- Use `tracking-tight` on headings larger than `text-3xl`

## Shape & Space

### Border Radius

| Variable | Value | Components |
|----------|-------|------------|
| `--radius` | `0.75rem` | Base radius |
| `--radius-sm` | `0.5rem` | Small elements |
| `--radius-lg` | `0.75rem` | Cards, modals |
| `--radius-xl` | `1.25rem` | Large containers |
| `--radius-4xl` | `2.25rem` | Hero sections, major blocks |

**Feel**: Soft and rounded — approachable and calming.

### Spacing

Use Tailwind's default spacing scale. Key patterns:
- Section padding: `py-16 md:py-24`
- Card padding: `p-6` or `p-8`
- Gap between items: `gap-4` to `gap-8`

## Visual Guidelines

### Do

- Use primary sage for buttons, links, and key CTAs
- Use blush/cream for warm alternate section backgrounds
- Use wine sparingly — testimonials, premium callouts, emphasis
- Keep backgrounds neutral (warm off-white, light sage, light cream)
- Use generous whitespace — let the design breathe
- Use `font-heading` with `font-light` for large headings
- Maintain strong contrast for readability

### Don't

- Don't use gradients (solid colors only)
- Don't use glow or neon effects
- Don't overuse wine — it's an accent, not a primary
- Don't use pure black (#000) — use the foreground token
- Don't use highly saturated colors — the palette is deliberately muted
- Don't use Cormorant Garamond below `text-lg` — switch to DM Sans for smaller text

## Component Patterns

### Buttons

```tsx
// Primary action (sage)
className="bg-primary text-primary-foreground hover:bg-primary/90"

// Secondary action (light sage)
className="bg-secondary text-secondary-foreground hover:bg-secondary/80"

// Outline
className="border border-primary text-primary hover:bg-accent"
```

### Cards

```tsx
className="bg-card text-card-foreground border border-border rounded-xl"
```

### Section Backgrounds

```tsx
// Sage-tinted section
className="bg-secondary/50"

// Warm cream section
className="bg-accent/50"

// Full sage
className="bg-sage-light"

// Full cream
className="bg-blush-light"

// Wine tint
className="bg-wine-light"
```

## Accessibility

- Primary on white: ~4.5:1 contrast ratio (WCAG AA)
- Foreground on background: ~12:1 contrast ratio (WCAG AAA)
- Wine on white: ~7:1 contrast ratio (WCAG AAA)
- Destructive is softened but still reads clearly as a warning
- All interactive elements have visible focus states
- Minimum touch target: 44x44px
