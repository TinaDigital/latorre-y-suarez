"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Clock, Scale, FileText, BadgeCheck } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Consulta Inicial",
    description: "Analizamos tu caso y te explicamos tus opciones legales sin compromiso."
  },
  {
    number: "02",
    icon: Scale,
    title: "Preparación del Amparo",
    description: "Reunimos la documentación necesaria y preparamos la presentación judicial."
  },
  {
    number: "03",
    icon: Clock,
    title: "Presentación Rápida",
    description: "Iniciamos el proceso judicial de manera urgente para obtener una resolución veloz."
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Cobertura Lograda",
    description: "Obtenemos la resolución favorable que obliga a la obra social a cumplir."
  }
]

export function Amparo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="amparo" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Line - Desktop only */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/30 to-gold/0 hidden lg:block"
        style={{ left: '10%', originY: 0 }}
      />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              El Proceso
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-charcoal mt-3 md:mt-4 mb-6 md:mb-8 leading-tight">
              ¿Qué es un{" "}
              <span className="italic text-gold">amparo</span>?
            </h2>

            <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                El amparo es un proceso judicial rápido que se inicia ante la negativa 
                de cobertura o demora de una prestación (tratamiento, medicación, etc.) 
                por parte de la obra social o empresa de medicina prepaga.
              </p>
              <p>
                Si bien hay un reclamo previo en la superintendencia de salud, 
                <span className="text-charcoal font-medium"> el amparo es el camino más rápido 
                y efectivo</span> para que la obra social cubra esa prestación que rechaza.
              </p>
            </div>

            {/* Highlighted Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 md:mt-10 p-4 md:p-6 bg-gold/10 border-l-4 border-gold"
            >
              <p className="text-charcoal font-medium italic text-base md:text-lg">
                &ldquo;¿Lo que me niega la obra social, me lo tiene que cubrir?&rdquo;
              </p>
              <p className="text-muted-foreground mt-2 md:mt-3 text-sm md:text-base">
                Lo más probable es que sí. Si tu condición de salud lo requiere, 
                te lo tienen que cubrir. No te quedes con lo que te dicen en la obra social.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 md:mt-8"
            >
              <Link
                href="#contacto"
                className="group inline-flex items-center gap-3 bg-gold text-charcoal px-6 md:px-8 py-3 md:py-4 font-medium active:bg-gold-dark hover:bg-gold-dark transition-all duration-300 text-sm md:text-base w-full md:w-auto justify-center md:justify-start"
              >
                Consultá tu caso ahora
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="group relative bg-card p-5 md:p-8 border border-border active:border-gold/30 hover:border-gold/30 transition-all duration-500 hover:shadow-lg"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <span className="block text-3xl md:text-5xl font-serif text-gold/20 group-hover:text-gold/40 group-active:text-gold/40 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1 pt-1 md:pt-2">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                      <h3 className="font-serif text-lg md:text-xl text-charcoal group-hover:text-gold group-active:text-gold transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Connecting Line - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="absolute -bottom-4 md:-bottom-6 left-8 md:left-12 w-px h-4 md:h-6 bg-border group-hover:bg-gold/30 transition-colors hidden md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
