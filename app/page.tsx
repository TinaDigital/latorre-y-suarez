import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Amparo } from "@/components/amparo"
import { Testimonial } from "@/components/testimonial"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Latorre & Suárez Abogadas | Derecho a la Salud - Amparos",  
  description:
    "Abogadas especialistas en amparos de salud y discapacidad. Asesoramiento legal personalizado para reclamos contra obras sociales y prepagas.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Amparo />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
