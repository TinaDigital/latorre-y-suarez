"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { HeartHandshake, MessagesSquare, UserRound } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const attentionPoints = [
    {
      icon: UserRound,
      title: "Misma abogada de principio a fin",
      text: "Si comenzaste tu caso con nosotras, lo seguís con nosotras. Sin derivaciones a terceros ni intermediarios que desconozcan tu historia.",
    },
    {
      icon: MessagesSquare,
      title: "Comunicación directa",
      text: "Consultas presenciales cuando hace falta, videollamadas y seguimiento cercano. Te explicamos cada paso en lenguaje claro, sin vueltas.",
    },
    {
      icon: HeartHandshake,
      title: "Enfoque en tu situación",
      text: "Cada expediente es distinto. Nos tomamos el tiempo de entender tu cobertura, la negativa o la demora de la obra social o prepaga, y qué necesitás resolver.",
    },
  ]

  return (
    <section id="nosotras" className="pt-20 sm:pt-24 md:pt-32 pb-14 sm:pb-16 md:pb-32 bg-background relative overflow-hidden scroll-mt-24">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent hidden md:block" />
      
      <div className="container mx-auto px-4 sm:px-6" ref={ref}>
        <nav
          aria-label="Migas de pan"
          className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 md:mb-10"
        >
          <Link href="/" className="hover:text-gold transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-border" aria-hidden>
            /
          </span>
          <span className="text-charcoal">Nosotras</span>
        </nav>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-start lg:items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[5/4] sm:aspect-[4/3] md:aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 z-10" />
              <Image
                src="/about_us.jpg"
                alt="Abogadas profesionales"
                fill
                className="object-cover"
              />
            </div>
            {/* Mobile year badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="md:hidden mt-4 inline-flex items-center gap-3 bg-card px-4 py-3 border border-gold/20"
            >
              <span className="text-2xl font-serif text-gold leading-none">2013</span>
              <p className="text-xs text-muted-foreground">Año de fundación</p>
            </motion.div>

            {/* Desktop floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block absolute -bottom-8 right-8 bg-card p-6 shadow-xl max-w-xs"
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
            <span className="text-gold text-[11px] sm:text-xs md:text-sm tracking-[0.24em] sm:tracking-[0.3em] uppercase font-medium">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-[1.8rem] sm:text-4xl lg:text-5xl text-charcoal mt-3 md:mt-4 mb-5 sm:mb-6 md:mb-8 leading-tight">
              Dos amigas, una{" "}
              <span className="italic text-gold">misión</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-[15px] md:text-base">
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

            {/* Timeline */}
            <div className="mt-8 md:mt-12">
              {/* Mobile Timeline - Vertical */}
              <div className="md:hidden space-y-3">
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
                    className="flex items-center gap-4 pb-3 border-b border-border/70 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xl font-serif text-gold w-12 shrink-0">{item.year}</span>
                    <span className="text-sm text-foreground">{item.text}</span>
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

        {/* Atención personalizada */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14 sm:mt-16 md:mt-24 max-w-5xl mx-auto"
        >
          <div className="relative">
            <span className="text-gold text-[11px] sm:text-xs md:text-sm tracking-[0.24em] sm:tracking-[0.3em] uppercase font-medium">
              Cómo trabajamos
            </span>
            <h3 className="font-serif text-[1.45rem] sm:text-2xl md:text-3xl text-charcoal mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">
              Atención <span className="italic text-gold">personalizada</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] md:text-base mb-7 sm:mb-8 md:mb-10 max-w-3xl">
              El estudio es chico a propósito: priorizamos el vínculo de confianza y el seguimiento real de cada persona. No hay “equipo de ventas” ni respuestas genéricas: escuchamos tu caso y definimos la estrategia jurídica en función de lo que vos necesitás.
            </p>

            <ul className="grid gap-5 sm:gap-6 md:gap-7">
              {attentionPoints.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + index * 0.1 }}
                  className="group flex gap-3 sm:gap-4 md:gap-5 pb-5 md:pb-6 border-b border-border/70 last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:border-gold/50 transition-colors">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" aria-hidden />
                  </div>
                  <div>
                    <h4 className="font-serif text-base md:text-lg text-charcoal mb-1 md:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-7 sm:mt-8 md:mt-10 pt-5 sm:pt-6 md:pt-7 border-t border-gold/20">
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-3xl">
                La primera consulta sirve para evaluar si tu situación encaja en un amparo u otra vía, y qué documentación conviene reunir.
              </p>
              <p className="mt-3 text-sm sm:text-[15px] md:text-base text-charcoal leading-relaxed">
                Podés{" "}
                <Link href="/#contacto" className="text-gold font-medium hover:text-gold-dark transition-colors underline-offset-4 hover:underline">
                  escribirnos desde el inicio
                </Link>{" "}
                y coordinamos el modo de contacto que te resulte más cómodo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
