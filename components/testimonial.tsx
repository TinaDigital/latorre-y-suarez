"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "Gracias a ellas pude conseguir la cobertura completa de las terapias de mi hijo. La obra social me decía que no correspondía, pero ellas supieron cómo manejar todo.",
    author: "María G.",
    role: "Madre de paciente con TEA"
  },
  {
    quote: "Después de meses de espera y negativas, en pocas semanas lograron que me aprobaran el tratamiento oncológico que necesitaba. Profesionales y humanas.",
    author: "Roberto S.",
    role: "Paciente oncológico"
  },
  {
    quote: "Me acompañaron desde el primer momento. No solo son excelentes profesionales, sino que realmente se preocupan por cada caso. Eternamente agradecida.",
    author: "Laura M.",
    role: "Familiar de paciente"
  }
]

export function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A24C 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Decorative Quote - Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-10 left-10 text-gold hidden md:block"
      >
        <Quote className="w-40 h-40" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
            Testimonios
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream mt-3 md:mt-4 text-balance">
            Lo que dicen{" "}
            <span className="italic text-gold">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Mobile Carousel */}
        {isMobile && (
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-cream/5 backdrop-blur-sm p-6 border border-cream/10"
            >
              <Quote className="w-6 h-6 text-gold mb-4" />
              <p className="text-cream/80 leading-relaxed italic text-sm mb-6">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-cream/10">
                <p className="text-cream font-medium text-sm">{testimonials[currentIndex].author}</p>
                <p className="text-cream/50 text-xs">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-cream/10 text-cream active:bg-gold active:text-charcoal transition-colors"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-gold w-6' : 'bg-cream/30'
                    }`}
                    aria-label={`Ir a testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 bg-cream/10 text-cream active:bg-gold active:text-charcoal transition-colors"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Desktop Grid */}
        {!isMobile && (
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="bg-cream/5 backdrop-blur-sm p-8 border border-cream/10 h-full flex flex-col hover:border-gold/30 transition-all duration-500">
                  <Quote className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <p className="text-cream/80 leading-relaxed flex-1 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-8 pt-6 border-t border-cream/10">
                    <p className="text-cream font-medium">{testimonial.author}</p>
                    <p className="text-cream/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

       
      </div>
    </section>
  )
}
