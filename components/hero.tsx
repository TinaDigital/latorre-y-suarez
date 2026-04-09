"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A24C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Gold Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "30%" }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-gold/0 via-gold to-gold/0"
      />

      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-24 pb-8 md:pb-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LATORRE%20SUAREZ%20LOGO-02-isxjqMBDcp4HgnaLvI5DxIXlpSNSqB.png"
              alt="Latorre & Suárez"
              width={120}
              height={120}
              className="w-20 h-20 md:w-32 md:h-32"
              priority
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block text-gold text-xs md:text-base tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 md:mb-6 font-medium">
              Derecho a la Salud
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-3xl md:text-6xl lg:text-7xl text-charcoal leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 text-balance px-2"
          >
            Defendemos tu derecho{" "}
            <span className="text-gold italic">a la cobertura</span>{" "}
            que necesitás
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed text-pretty px-2"
          >
            Especialistas en amparos de salud y discapacidad. Te acompañamos para que 
            obtengas la cobertura que tu obra social o prepaga te niega.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4"
          >
            <Link
              href="#contacto"
              className="group relative w-full sm:w-auto bg-gold text-charcoal px-8 md:px-10 py-4 text-base font-medium overflow-hidden transition-all duration-500 active:scale-[0.98] hover:shadow-2xl hover:shadow-gold/40"
            >
              {/* Background that slides in from left */}
              <span className="absolute inset-0 bg-charcoal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {/* Text that changes color */}
              <span className="relative z-10 tracking-wide group-hover:text-gold transition-colors duration-500">Consultá tu caso</span>
            </Link>
            <Link
              href="#servicios"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto text-charcoal px-8 py-4 text-base font-medium border border-charcoal/20 hover:border-gold active:border-gold active:text-gold hover:text-gold transition-all duration-300"
            >
              Conocé más
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Stats - Optimized for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gold/20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { number: "+10", label: "Años experiencia" },
                { number: "+500", label: "Casos resueltos" },
                { number: "100%", label: "Cobertura lograda" },
                { number: "24hs", label: "Respuesta rápida" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center p-3 md:p-0"
                >
                  <span className="block text-2xl md:text-4xl font-serif text-gold mb-1 md:mb-2">
                    {stat.number}
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Mobile swipe indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <ArrowDown className="w-4 h-4 text-gold/60" />
          <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Deslizá</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
