"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, MessageCircle } from "lucide-react"

const navLinks = [
  { href: "#nosotras", label: "Nosotras" },
  { href: "#servicios", label: "Servicios" },
  { href: "#amparo", label: "El Amparo" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://wa.me/5491112345678", icon: MessageCircle, label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Brand - Centered on mobile */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex flex-col items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LATORRE%20SUAREZ%20LOGO-02-isxjqMBDcp4HgnaLvI5DxIXlpSNSqB.png"
                alt="Latorre & Suárez"
                width={50}
                height={50}
              />
              <div>
                <span className="block text-gold font-serif text-lg tracking-wide">
                  LATORRE & SUÁREZ
                </span>
                <span className="block text-[10px] text-cream/60 tracking-[0.3em] uppercase">
                  Abogadas
                </span>
              </div>
            </Link>
            <p className="text-cream/60 text-sm max-w-xs mx-auto leading-relaxed">
              Especialistas en derecho a la salud y amparos.
            </p>
          </div>

          {/* Navigation - Horizontal on mobile */}
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/60 active:text-gold transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2 text-sm text-cream/60 mb-8">
            <p>+54 11 1234-5678</p>
            <p>contacto@latorresuarez.com</p>
            <p>Buenos Aires, Argentina</p>
          </div>

          {/* Social Links - Centered */}
          <div className="flex justify-center gap-4 mb-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-cream/10 text-cream/60 active:bg-gold active:text-cream transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-cream/10 text-center text-xs text-cream/40 space-y-2">
            <p>© {new Date().getFullYear()} Latorre & Suárez Abogadas</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-4 mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LATORRE%20SUAREZ%20LOGO-02-isxjqMBDcp4HgnaLvI5DxIXlpSNSqB.png"
                  alt="Latorre & Suárez"
                  width={60}
                  height={60}
                />
                <div>
                  <span className="block text-gold font-serif text-xl tracking-wide">
                    LATORRE & SUÁREZ
                  </span>
                  <span className="block text-xs text-cream/60 tracking-[0.3em] uppercase">
                    Abogadas
                  </span>
                </div>
              </Link>
              <p className="text-cream/60 max-w-md leading-relaxed">
                Especialistas en derecho a la salud y amparos. Defendemos tu derecho 
                a la cobertura médica que necesitás.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-gold font-medium mb-6 text-sm tracking-wider uppercase">
                Navegación
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/60 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gold font-medium mb-6 text-sm tracking-wider uppercase">
                Contacto
              </h4>
              <ul className="space-y-3 text-sm text-cream/60">
                <li>+54 11 1234-5678</li>
                <li>contacto@latorresuarez.com</li>
                <li>Buenos Aires, Argentina</li>
              </ul>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-cream/10 text-cream/60 hover:bg-gold hover:text-cream transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/40">
            <p>
              © {new Date().getFullYear()} Latorre & Suárez Abogadas. Todos los derechos reservados.
            </p>
            <p>
              Derecho a la Salud • Amparos • Buenos Aires, Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
