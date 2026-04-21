"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, type ReactNode } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "¿Qué es un amparo de salud?",
    answer: "El amparo es un proceso judicial rápido que se inicia ante la negativa de cobertura o demora de una prestación (tratamiento, medicación, etc.) por parte de la obra social o empresa de medicina prepaga. Es el camino más efectivo para obtener lo que te corresponde por ley."
  },
  {
    question: "¿Cuánto tiempo demora el proceso?",
    answer: "El amparo es un proceso de urgencia. Generalmente, en pocas semanas podemos obtener una medida cautelar que obliga a la obra social a brindar la cobertura mientras dura el juicio. Los tiempos pueden variar según el caso y el juzgado interviniente."
  },
  {
    question: "¿Puedo consultar a un médico que no sea de mi obra social?",
    answer: "Sí, podés consultar a cualquier médico de tu confianza. El dictamen médico que justifique la necesidad del tratamiento es fundamental para el amparo, independientemente de si el profesional pertenece o no a la cartilla de tu obra social."
  },
  {
    question: "¿Qué documentación necesito?",
    answer: (
      <>
        Generalmente necesitás: la negativa de la obra social (puede ser verbal o escrita), los estudios médicos que justifiquen el tratamiento, la prescripción del médico tratante, y tu DNI. En la consulta inicial te indicamos exactamente qué necesitamos según tu caso.{" "}
        <strong className="font-semibold text-charcoal">
          Si no tenés la negativa, la podés obtener con nosotros.
        </strong>
      </>
    )
  },
  {
    question: "¿Cuánto sale un amparo?",
    answer: "Sabemos que es algo que preocupa mucho al momento de iniciar un amparo, no todos los amparos son iguales y no siempre es necesario llegar al amparo, te ofrecemos una entrevista virtual orientativa para que veamos si necesitas nuestros servicios y los costos."
  },
  {
    question: "¿Qué pasa si mi obra social no responde a los reclamos?",
    answer: "La falta de respuesta o demora excesiva se considera una negativa. pero sera necesario realizar una intimacion formal y para esto necesitas nuestro asesoramiento para que se realice de manera correcta y eficiente "
  }
]

function FAQItem({ question, answer, isOpen, onClick, index, isInView }: {
  question: string
  answer: ReactNode
  isOpen: boolean
  onClick: () => void
  index: number
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-border last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-4 md:py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-base md:text-xl text-charcoal group-hover:text-gold group-active:text-gold transition-colors pr-4 md:pr-8">
          {question}
        </span>
        <span className={`flex-shrink-0 p-1.5 md:p-2 transition-all ${
          isOpen ? 'bg-gold text-cream' : 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-cream group-active:bg-gold group-active:text-cream'
        }`}>
          {isOpen ? <Minus className="w-3 h-3 md:w-4 md:h-4" /> : <Plus className="w-3 h-3 md:w-4 md:h-4" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-4 md:pb-6 text-muted-foreground leading-relaxed pr-8 md:pr-12 text-sm md:text-base">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-32 bg-cream relative">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 self-start"
          >
            <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              Preguntas Frecuentes
            </span>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-charcoal mt-3 md:mt-4 mb-6 md:mb-8 leading-tight">
              Resolvemos tus{" "}
              <span className="italic text-gold">dudas</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
              Sabemos que iniciar un proceso judicial puede generar incertidumbre. 
              Acá respondemos las consultas más comunes, pero recordá que cada caso 
              es único y merece atención personalizada.
            </p>
            
            <div className="p-4 md:p-6 bg-gold/10 border-l-4 border-gold">
              <p className="text-charcoal font-medium text-sm md:text-base">
                ¿Tenés otra pregunta?
              </p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">
                Contactanos por WhatsApp para una consulta personalizada. 
                No te quedes con la duda.
              </p>
            </div>
          </motion.div>

          {/* Right - FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-5 md:p-10 shadow-sm"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
