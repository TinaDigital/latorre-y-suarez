"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="contacto" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gold/5 to-transparent hidden md:block" />
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              Contacto
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-charcoal mt-3 md:mt-4 mb-6 md:mb-8 leading-tight">
              Consultá tu caso{" "}
              <span className="italic text-gold">sin compromiso</span>
            </h2>

            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Se pueden comunicar por WhatsApp para coordinar una consulta personal 
              o por videollamada. Lo importante es que no te quedes con la duda.
            </p>

            {/* Main CTA - WhatsApp */}
            <motion.a
              href="https://wa.me/5491112345678?text=Hola,%20quisiera%20consultar%20sobre%20mi%20caso"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative inline-flex items-center justify-center gap-3 md:gap-4 bg-gold text-charcoal px-6 md:px-8 py-4 md:py-5 text-base md:text-lg font-medium active:bg-gold-dark hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden w-full md:w-auto"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
              <span className="relative z-10">Escribinos por WhatsApp</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.a>

            {/* Contact Info - Stacked on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-12 space-y-3 md:space-y-6"
            >
              <div className="flex items-center gap-3 md:gap-4 group bg-cream md:bg-transparent p-3 md:p-0">
                <div className="p-2 md:p-3 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-cream transition-all">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Teléfono</p>
                  <p className="text-foreground font-medium text-sm md:text-base">+54 11 1234-5678</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 group bg-cream md:bg-transparent p-3 md:p-0">
                <div className="p-2 md:p-3 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-cream transition-all">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium text-sm md:text-base break-all">contacto@latorresuarez.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 group bg-cream md:bg-transparent p-3 md:p-0">
                <div className="p-2 md:p-3 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-cream transition-all">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">Ubicación</p>
                  <p className="text-foreground font-medium text-sm md:text-base">Buenos Aires, Argentina</p>
                </div>
              </div>
            </motion.div>

            {/* Schedule Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 md:mt-10 p-4 md:p-6 bg-cream border-l-4 border-gold"
            >
              <p className="text-charcoal font-medium text-sm md:text-base">
                Atención personalizada
              </p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">
                Consultas presenciales y por videollamada. Coordinamos un horario 
                que se adapte a tus necesidades.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Logo Visual - Hidden on mobile, shown as smaller version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-gold/20" />
              <div className="absolute inset-8 border border-gold/10" />
              
              {/* Logo Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LATORRE%20SUAREZ%20LOGO-02-isxjqMBDcp4HgnaLvI5DxIXlpSNSqB.png"
                    alt="Latorre & Suárez"
                    width={200}
                    height={200}
                    className="mx-auto mb-8"
                  />
                  <h3 className="font-serif text-2xl md:text-3xl text-gold tracking-wide">
                    LATORRE & SUÁREZ
                  </h3>
                  <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mt-2">
                    Abogadas
                  </p>
                  <p className="text-xs text-muted-foreground mt-4">
                    Derecho a la Salud • Amparos
                  </p>
                </motion.div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
