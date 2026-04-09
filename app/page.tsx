import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Amparo } from "@/components/amparo"
import { Testimonial } from "@/components/testimonial"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Amparo />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
