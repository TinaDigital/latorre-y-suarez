"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Shield, Heart, FileCheck, Users, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
  {
    icon: Shield,
    title: "Amparos de Salud",
    subtitle: "Acción judicial rápida",
    description: "Proceso judicial rápido ante la negativa de cobertura o demora de una prestación por parte de la obra social o prepaga.",
    features: ["Tratamientos médicos", "Medicación", "Estudios diagnósticos"],
    stat: "95%",
    statLabel: "Casos resueltos favorablemente"
  },
  {
    icon: Heart,
    title: "Discapacidad",
    subtitle: "Cobertura integral",
    description: "Especialistas en cobertura integral para personas con condiciones de discapacidad. Si tenés dudas para tramitar el CUD te podemos orientar.",
    features: ["Cobertura 100%", "Trámite de CUD", "Terapias especializadas"],
    stat: "100%",
    statLabel: "De cobertura por ley"
  },
  {
    icon: FileCheck,
    title: "Cobertura PMO",
    subtitle: "Programa médico obligatorio",
    description: "Las obras sociales y las empresas de medicina prepaga deben cumplir con el Programa Médico Obligatorio. Te ayudamos a obtener lo que te corresponde por ley.",
    features: ["Análisis de cobertura", "Reclamos formales", "Seguimiento continuo"],
    stat: "+500",
    statLabel: "Prestaciones obligatorias"
  },
  {
    icon: Users,
    title: "Asesoramiento Integral",
    subtitle: "Atención personal y dedicada",
    description: "Acompañamos personalmente cada caso, desde la primera consulta hasta la resolución favorable, manteniendo comunicación directa y constante. Siempre vas a ser atendido por la misma abogada: si comenzaste con nosotras, seguís con nosotras, sin intermediarios.",
    features: ["Consultas personales", "Videollamadas", "Comunicación directa y continua"],
    stat: "100%",
    statLabel: "Atención personalizada"
  }
]

const coverageTypes = [
  { title: "Discapacidad", law: "Ley 24.901", description: "Sistema de prestaciones básicas para personas con discapacidad" },
  { title: "Diabetes", law: "Ley 23.753", description: "Cobertura total de medicación e insumos para diabéticos" },
  { title: "Oncología", law: "Ley 26.689", description: "Cobertura integral para enfermedades oncológicas" },
  { title: "Pacientes Trasplantados", law: "Ley 26.928", description: "Cobertura de medicamentos, estudios y atención para pacientes trasplantados" },
  { title: "Enfermedades Poco Frecuentes", law: "Ley 26.689", description: "Cobertura específica para personas con enfermedades poco frecuentes" },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [activeService, setActiveService] = useState(0)

  return (
    <section id="servicios" className="py-16 md:py-32 bg-cream relative">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4A24C 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-charcoal mt-3 md:mt-4 mb-4 md:mb-6 text-balance">
            Especialistas en{" "}
            <span className="italic text-gold">derecho a la salud</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed px-2">
            Nos dedicamos exclusivamente a defender tu derecho a la cobertura médica 
            que necesitás. No te quedes con lo que te dicen en la obra social.
          </p>
        </motion.div>

        {/* Mobile Services — Radix Accordion (touch / a11y) */}
        <Accordion
          type="single"
          collapsible
          className="md:hidden mb-12 space-y-3"
        >
          {services.map((service, index) => (
            <AccordionItem
              key={service.title}
              value={`service-${index}`}
              className="overflow-hidden rounded-none border border-border bg-card"
            >
              <AccordionTrigger className="group items-center gap-3 px-4 py-4 hover:no-underline [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-gold data-[state=open]:[&>svg]:rotate-180">
                <div className="flex min-w-0 flex-1 items-center gap-3 text-left">
                  <div className="shrink-0 bg-gold/10 p-2 text-gold transition-all duration-300 group-data-[state=open]:bg-gold group-data-[state=open]:text-cream">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium text-charcoal text-sm">{service.title}</h3>
                    <p className="text-xs text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="border-t border-border/50 px-4 pb-4 pt-2 text-left">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-serif text-gold">{service.stat}</span>
                  <span className="text-xs text-muted-foreground">{service.statLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-3 py-1.5 bg-gold/10 text-charcoal text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Desktop Services - Interactive Display */}
        <div className="hidden md:grid lg:grid-cols-12 gap-8 mb-24">
          {/* Service Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-2"
          >
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-5 transition-all duration-500 group relative overflow-hidden ${
                  activeService === index 
                    ? 'bg-card border-l-4 border-gold shadow-lg' 
                    : 'bg-transparent border-l-4 border-transparent hover:bg-card/50 hover:border-gold/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 transition-all duration-300 ${
                      activeService === index ? 'bg-gold text-cream' : 'bg-gold/10 text-gold group-hover:bg-gold/20'
                    }`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-medium transition-colors ${
                        activeService === index ? 'text-charcoal' : 'text-charcoal/70 group-hover:text-charcoal'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{service.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                    activeService === index ? 'text-gold translate-x-0 opacity-100' : 'text-gold/0 -translate-x-2 opacity-0'
                  }`} />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Service Detail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-card p-8 md:p-12 border border-border relative overflow-hidden h-full">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent" />
              
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Stat Badge */}
                <div className="inline-flex items-baseline gap-1 mb-6">
                  <span className="text-5xl md:text-6xl font-serif text-gold">
                    {services[activeService].stat}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {services[activeService].statLabel}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                  {services[activeService].title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {services[activeService].description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {services[activeService].features.map((feature, idx) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="px-4 py-2 bg-gold/10 text-charcoal text-sm font-medium border border-gold/20"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                <Link
                  href="#contacto"
                  className="group inline-flex items-center gap-2 text-gold font-medium hover:text-gold-dark transition-colors"
                >
                  Consultar sobre este servicio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Coverage Laws Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Elegant border frame */}
          <div className="absolute inset-0 border border-gold/20 hidden md:block" />
          <div className="absolute inset-2 border border-gold/10 hidden md:block" />
          
          <div className="relative bg-gradient-to-br from-cream via-background to-cream p-6 md:p-16 border border-gold/20 md:border-0">
            <div className="text-center mb-8 md:mb-12">
              <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
                Marco Legal
              </span>
              <h3 className="font-serif text-xl md:text-3xl text-charcoal mt-3 md:mt-4 text-balance">
                Leyes que amplían tu cobertura al{" "}
                <span className="text-gold">100%</span>
              </h3>
            </div>

            {/* Grid: md 3 cols; lg 6 cols + spans so la última fila (2 ítems) queda simétrica */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
              {coverageTypes.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`group text-center relative ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
                >
                  {/* Decorative line */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-px bg-gold/40" />
                  
                  <div className="py-6">
                    <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-medium tracking-wider mb-4">
                      {item.law}
                    </span>
                    <h4 className="font-serif text-xl text-charcoal mb-3 group-hover:text-gold transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 border-b border-r border-gold/30 rotate-45 translate-y-4" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-center mt-8 md:mt-12"
            >
              <Link
                href="#contacto"
                className="group inline-flex items-center gap-3 text-charcoal font-medium hover:text-gold active:text-gold transition-colors text-sm md:text-base"
              >
                <span className="w-8 md:w-12 h-px bg-gold/40 group-hover:w-12 md:group-hover:w-16 transition-all" />
                Conocé si aplica a tu caso
                <span className="w-8 md:w-12 h-px bg-gold/40 group-hover:w-12 md:group-hover:w-16 transition-all" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
