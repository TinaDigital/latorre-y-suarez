import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"

/** Formato YYYY-MM-DD; mejor compatibilidad con Search Console que ISO con fracciones. */
function lastModDate(): string {
  return new Date().toISOString().slice(0, 10)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const lastModified = lastModDate()

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
