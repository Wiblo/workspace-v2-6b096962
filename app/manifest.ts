import type { MetadataRoute } from "next"

import { businessInfo } from "@/lib/data/business-info"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessInfo.name,
    short_name: businessInfo.name,
    description: businessInfo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#E3DDCF",
    theme_color: "#A3A793",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
