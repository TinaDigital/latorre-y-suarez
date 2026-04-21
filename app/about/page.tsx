import type { Metadata } from "next"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Nosotras",
  description:
    "Conocé la historia del estudio Latorre & Suárez y cómo trabajamos: atención personalizada, especialización en amparos de salud y derecho a la salud.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Nosotras | Latorre & Suárez Abogadas",
    description:
      "Conocé la historia del estudio Latorre & Suárez y cómo trabajamos: atención personalizada y especialización en amparos de salud.",
    url: "/about",
    type: "article",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  )
}
