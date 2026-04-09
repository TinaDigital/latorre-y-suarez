"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="nosotras" className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent hidden md:block" />
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Abogadas profesionales"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card - Positioned differently on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-4 right-4 md:-bottom-8 md:right-8 bg-card p-4 md:p-6 shadow-xl max-w-[140px] md:max-w-xs"
            >
              <span className="text-3xl md:text-4xl font-serif text-gold">2013</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">
                Año de fundación
              </p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-charcoal mt-3 md:mt-4 mb-6 md:mb-8 leading-tight">
              Dos amigas, una{" "}
              <span className="italic text-gold">misión</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Somos dos amigas que abrimos el estudio en el año 2013. Inicialmente nos 
                dedicábamos al derecho laboral, asesorando tanto a trabajadores como a empresas.
              </p>
              <p>
                En el año 2018 iniciamos nuestro primer amparo de salud. Por ese entonces 
                el tema era muy nuevo, y si bien no era nuestra área, lo hicimos para ayudar 
                a un cliente que se encontraba en una situación difícil.
              </p>
              <p className="text-charcoal font-medium">
                A partir del 2022 nos dedicamos exclusivamente a los amparos de salud y 
                discapacidad, convirtiendo esta especialización en nuestra vocación.
              </p>
            </div>

            {/* Timeline - Horizontal on mobile */}
            <div className="mt-8 md:mt-12">
              {/* Mobile Timeline - Horizontal scroll */}
              <div className="flex md:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
                {[
                  { year: "2013", text: "Fundación" },
                  { year: "2018", text: "Primer amparo" },
                  { year: "2022", text: "Especialización" },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex-shrink-0 snap-center bg-gold/10 p-4 text-center min-w-[120px]"
                  >
                    <span className="text-2xl font-serif text-gold block">{item.year}</span>
                    <span className="text-xs text-foreground mt-1 block">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Desktop Timeline - Vertical */}
              <div className="hidden md:block space-y-6">
                {[
                  { year: "2013", text: "Fundación del estudio" },
                  { year: "2018", text: "Primer amparo de salud" },
                  { year: "2022", text: "Especialización exclusiva" },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <span className="text-2xl font-serif text-gold w-16 group-hover:scale-110 transition-transform">
                      {item.year}
                    </span>
                    <div className="flex-1 h-px bg-border group-hover:bg-gold transition-colors" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
