/**
 * FAQ data for Soma Studio.
 * Used by: FAQSection component (includes FAQPage JSON-LD schema)
 */

export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Do I need experience to attend a class?",
    answer:
      "Not at all! All classes at Soma Studio are designed to be accessible for beginners and experienced practitioners alike. Ceire offers modifications throughout every class so you can work at your own level. Just bring an open mind and a willingness to move.",
  },
  {
    id: "faq-2",
    question: "What should I bring to class?",
    answer:
      "Wear comfortable clothing that allows you to move freely. Bring a water bottle and a towel. Yoga mats are available at the studio, but you are welcome to bring your own. For Rebounding classes, supportive athletic shoes are recommended.",
  },
  {
    id: "faq-3",
    question: "How do I book a class?",
    answer:
      "You can book classes directly through our website or reach out via WhatsApp at +27 78 511 1889. We recommend booking in advance as spaces are limited to ensure everyone gets personal attention.",
  },
  {
    id: "faq-4",
    question: "Do you offer private sessions?",
    answer:
      "Yes! Ceire offers private 1-on-1 sessions for those who prefer personalised attention or have specific goals they would like to work towards. Contact us to arrange a private session at a time that suits you.",
  },
  {
    id: "faq-5",
    question: "What is Rebounding and do I need to be fit to try it?",
    answer:
      "Rebounding is a fun, low-impact cardio workout performed on individual mini trampolines. It is suitable for all fitness levels because you control the intensity. The trampoline absorbs most of the impact, making it much gentler on your joints than running or other high-impact exercise.",
  },
  {
    id: "faq-6",
    question: "What styles of yoga do you offer?",
    answer:
      "We offer Vinyasa Yoga (dynamic, breath-linked flow), Alignment Yoga Sculpt (precision alignment with toning elements), and Yin Yoga (slow, deep-stretch restorative practice). Each style offers different benefits, and many of our members enjoy mixing them throughout the week.",
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

export function getAllFAQs(): FAQ[] {
  return faqs
}

export function getFAQsPreview(count: number = 3): FAQ[] {
  return faqs.slice(0, count)
}
