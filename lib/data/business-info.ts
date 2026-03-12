/**
 * Central business information - single source of truth.
 * Update this file to change business details across the entire site.
 *
 * Used by: Navbar, Footer, JSON-LD schemas, contact pages, metadata
 */
export const businessInfo = {
  // Core Business Details
  name: "Soma Studio",
  tagline: "Yoga & Movement Studio",
  description:
    "A yoga and movement studio in Plettenberg Bay, South Africa. Offering Vinyasa, Yin, Alignment Yoga Sculpt, and Rebounding classes for all levels.",

  // Contact Information
  phone: "+27 78 511 1889",
  phoneSecondary: "",
  email: "hello@studiosoma.co.za",

  // Physical Location
  address: {
    street: "Plettenberg Bay",
    area: "",
    city: "Plettenberg Bay",
    state: "Western Cape",
    zip: "",
    country: "ZA",
  },

  // Coordinates for maps (Plettenberg Bay centre)
  geo: {
    latitude: -34.0527,
    longitude: 23.3716,
  },

  // Google Maps configuration
  maps: {
    placeId: "",
    locationName: "Soma Studio",
    apiKey: "",
  },

  // Business Hours
  hours: {
    monday: "6:00 AM - 6:00 PM",
    tuesday: "6:00 AM - 6:00 PM",
    wednesday: "6:00 AM - 6:00 PM",
    thursday: "6:00 AM - 6:00 PM",
    friday: "6:00 AM - 6:00 PM",
    saturday: "6:00 AM - 6:00 PM",
    sunday: "6:00 AM - 12:00 PM",
  } as Record<string, string>,

  // Timezone for open/closed status calculation
  timezone: "Africa/Johannesburg",

  // Social Media
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/somastudioplett",
    twitter: "",
    linkedin: "",
    youtube: "",
  },

  // Website
  url: "https://studiosoma.co.za",
  logo: "",

  // Booking
  bookingUrl: "/book",
  showBookingButton: true,

  // Optional: Price range for schema.org
  priceRange: "$$",
}

// Type export for use in other files
export type BusinessInfo = typeof businessInfo

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get Google Maps embed URL using Place ID or coordinates
 */
export function getGoogleMapsEmbedUrl(): string {
  const { maps, geo, address } = businessInfo

  // Prefer Place ID if available
  if (maps.placeId) {
    return `https://www.google.com/maps/embed/v1/place?key=${maps.apiKey || "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}&q=place_id:${maps.placeId}`
  }

  // Fall back to coordinates
  if (geo.latitude && geo.longitude) {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${geo.longitude}!3d${geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus`
  }

  // Fall back to address search
  const addressString = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  return `https://www.google.com/maps/embed/v1/place?key=${maps.apiKey || "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}&q=${encodeURIComponent(addressString)}`
}

/**
 * Get Google Maps directions URL
 */
export function getGoogleMapsDirectionsUrl(): string {
  const { maps, address } = businessInfo

  if (maps.placeId) {
    return `https://www.google.com/maps/dir/?api=1&destination_place_id=${maps.placeId}`
  }

  const addressString = `${address.street}, ${address.city}, ${address.state} ${address.zip}`
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressString)}`
}

/**
 * Get tel: link for phone number
 */
export function getPhoneLink(phone?: string): string {
  const phoneNumber = phone || businessInfo.phone
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

/**
 * Get mailto: link for email
 */
export function getEmailLink(): string {
  return `mailto:${businessInfo.email}`
}

/**
 * Get formatted full address string
 */
export function getFullAddress(): string {
  const { address } = businessInfo
  const parts = [address.street]
  if (address.area) parts.push(address.area)
  parts.push(`${address.city}, ${address.state} ${address.zip}`.trim())
  return parts.join(", ")
}
