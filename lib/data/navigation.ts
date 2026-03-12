/**
 * Navigation configuration for the site.
 * Used by: Navbar, Footer, mobile menu
 */

import {
  Instagram,
  Mail,
  type LucideIcon,
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
}

/**
 * Main navigation items shown in header and footer.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

/**
 * Footer quick links
 */
export const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

/**
 * Social media link definitions.
 * URLs are populated dynamically from businessInfo.
 */
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "", icon: Instagram },
  { label: "Email", href: "", icon: Mail },
]

/**
 * Get navigation items.
 */
export function getNavItems(): NavItem[] {
  return navItems
}

/**
 * Get social links with URLs populated from businessInfo.
 */
export function getSocialLinksWithUrls(businessInfo: {
  social?: Record<string, string | undefined>
  email?: string
}): SocialLink[] {
  return socialLinks
    .map((link) => {
      let href = link.href

      if (link.label === "Instagram" && businessInfo.social?.instagram) {
        href = businessInfo.social.instagram
      } else if (link.label === "Email" && businessInfo.email) {
        href = `mailto:${businessInfo.email}`
      }

      return { ...link, href }
    })
    .filter((link) => link.href)
}

/**
 * Get quick links with optional booking URL appended.
 */
export function getQuickLinksWithBooking(bookingUrl?: string): NavItem[] {
  const links = [...quickLinks]

  if (bookingUrl) {
    links.push({
      label: "Book a Class",
      href: bookingUrl,
    })
  }

  return links
}
