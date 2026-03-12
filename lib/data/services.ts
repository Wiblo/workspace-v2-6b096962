/**
 * Services data - defines all classes offered by Soma Studio.
 * Used by: FeaturedServices, ServicesGrid, ServiceCard, /services/[slug] pages
 */

export interface Service {
  slug: string
  name: string
  shortDescription: string
  description: string
  icon?: string
  image?: string
  imageAlt?: string
  featured?: boolean
  duration?: string
  price?: string
  benefits?: string[]
  idealFor?: string[]
}

export const services: Service[] = [
  {
    slug: "vinyasa-yoga",
    name: "Vinyasa Yoga",
    shortDescription:
      "A dynamic, flowing practice that links breath with movement. Build strength, flexibility, and mindfulness in every class.",
    description:
      "Vinyasa is a flowing style of yoga where poses are linked together with the breath, creating a moving meditation. Each class builds heat, strength, and flexibility while cultivating body awareness and mental focus.\n\nClasses are designed to be accessible for all levels, with modifications offered throughout. Whether you are building a foundation or deepening your practice, Vinyasa will meet you where you are.",
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    imageAlt: "Person flowing through a yoga vinyasa sequence",
    featured: true,
    duration: "60 min",
    benefits: [
      "Builds strength and flexibility",
      "Improves cardiovascular fitness",
      "Reduces stress and anxiety",
      "Enhances body awareness and balance",
    ],
    idealFor: [
      "All levels",
      "Those who enjoy dynamic movement",
      "Stress relief",
    ],
  },
  {
    slug: "alignment-yoga-sculpt",
    name: "Alignment Yoga Sculpt",
    shortDescription:
      "Alignment-focused yoga with sculpting and toning elements. Precision meets strength for a full-body workout on the mat.",
    description:
      "Alignment Yoga Sculpt combines precise yoga alignment with targeted sculpting exercises to build lean muscle and improve posture. This class focuses on form and technique, ensuring you get the most out of every pose.\n\nDrawing from Ceire's background in gymnastics and dance, this class emphasises body control and muscular engagement while maintaining the mindfulness of a yoga practice.",
    icon: "Target",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    imageAlt: "Yoga alignment practice with sculpting poses",
    featured: true,
    duration: "55 min",
    benefits: [
      "Improves posture and alignment",
      "Builds lean muscle definition",
      "Increases core strength",
      "Enhances body control and awareness",
    ],
    idealFor: [
      "All levels",
      "Those seeking a toning workout",
      "Improving posture",
    ],
  },
  {
    slug: "yin-yoga",
    name: "Yin Yoga",
    shortDescription:
      "A slow, meditative practice with deep stretches held for longer. Perfect for restoration, flexibility, and letting go.",
    description:
      "Yin Yoga is a slow-paced, meditative practice where poses are held for 3 to 5 minutes, targeting the deep connective tissues, ligaments, and fascia. This class is deeply restorative and provides the perfect counterbalance to more active practices and busy lives.\n\nEach session creates space for stillness and introspection, helping to release tension held deep in the body and calm the nervous system.",
    icon: "Leaf",
    image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&h=600&fit=crop",
    imageAlt: "Peaceful yin yoga practice with deep stretches",
    featured: true,
    duration: "75 min",
    benefits: [
      "Deep flexibility and joint mobility",
      "Calms the nervous system",
      "Releases deep-held tension",
      "Promotes mindfulness and stillness",
    ],
    idealFor: [
      "All levels including beginners",
      "Recovery and restoration",
      "Those experiencing stress or tightness",
    ],
  },
  {
    slug: "rebounding",
    name: "Rebounding",
    shortDescription:
      "A high-energy, low-impact fitness class on mini trampolines. Fun, effective cardio that is easy on the joints.",
    description:
      "Rebounding is a fun, high-energy fitness class performed on individual mini trampolines. This low-impact workout improves cardiovascular health, balance, and coordination while being gentle on the joints.\n\nAs a certified Bounti Instructor, Ceire brings infectious energy and expert programming to every class. Expect music, movement, and a serious sweat.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
    imageAlt: "High-energy rebounding fitness class",
    featured: true,
    duration: "45 min",
    benefits: [
      "Low-impact cardiovascular workout",
      "Improves balance and coordination",
      "Boosts lymphatic system health",
      "Burns calories while having fun",
    ],
    idealFor: [
      "All fitness levels",
      "Those wanting fun cardio",
      "Joint-friendly exercise",
    ],
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

export function getAllServices(): Service[] {
  return services
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
