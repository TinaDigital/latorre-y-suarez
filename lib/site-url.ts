const DEFAULT_SITE_URL = "https://www.estudiolatorresuarez.com.ar"

/** Origen canónico sin barra final (sitemap, robots, enlaces públicos). */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL
  return raw.replace(/\/+$/, "")
}
