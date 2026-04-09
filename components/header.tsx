"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "#nosotras", label: "Nosotras" },
  { href: "#servicios", label: "Servicios" },
  { href: "#amparo", label: "El Amparo" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-2 md:py-3"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LATORRE%20SUAREZ%20LOGO-02-isxjqMBDcp4HgnaLvI5DxIXlpSNSqB.png"
              alt="Latorre & Suárez Abogadas"
              width={50}
              height={50}
              className="w-9 h-9 md:w-12 md:h-12"
            />
            <div className="hidden sm:block">
              <span className="text-gold font-serif text-base md:text-xl font-semibold tracking-wide">
                LATORRE & SUÁREZ
              </span>
              <span className="block text-[10px] md:text-xs text-muted-foreground tracking-[0.3em] uppercase">
                Abogadas
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#contacto"
              className="bg-gold text-charcoal px-6 py-2.5 text-sm font-medium hover:bg-gold-dark transition-all duration-300 rounded-sm"
            >
              Consultar
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-cream"
          >
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A24C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="flex flex-col h-full relative">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center justify-between p-4 border-b border-gold/10"
              >
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LATORRE%20SUAREZ%20LOGO-02-isxjqMBDcp4HgnaLvI5DxIXlpSNSqB.png"
                    alt="Latorre & Suárez Abogadas"
                    width={40}
                    height={40}
                    className="w-9 h-9"
                  />
                  <span className="text-gold font-serif text-lg font-semibold">L&S</span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-gold transition-colors bg-gold/10 rounded-full"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center justify-center flex-1 gap-6 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.15 + index * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-gold/10 text-charcoal active:text-gold transition-colors"
                    >
                      <span className="text-2xl font-serif">{link.label}</span>
                      <motion.span 
                        className="w-2 h-2 bg-gold rounded-full opacity-0 group-active:opacity-100"
                        layoutId="activeIndicator"
                      />
                    </Link>
                  </motion.div>
                ))}
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-4"
                >
                  <Link
                    href="#contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex items-center gap-2 bg-gold text-charcoal px-10 py-4 text-lg font-medium active:bg-gold-dark transition-all duration-300"
                  >
                    Consultar Ahora
                  </Link>
                </motion.div>
              </nav>

              {/* Footer decoration */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 text-center border-t border-gold/10"
              >
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  Derecho a la Salud
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
