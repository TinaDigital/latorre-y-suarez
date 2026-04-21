import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.estudiolatorresuarez.com.ar"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Latorre & Suárez Abogadas | Derecho a la Salud - Amparos',
    template: '%s | Latorre & Suárez Abogadas',
  },
  description:
    'Estudio jurídico especializado en amparos de salud y discapacidad. Defendemos tu derecho a la cobertura médica. Consultas por WhatsApp.',
  applicationName: 'Latorre & Suárez Abogadas',
  keywords: [
    'amparo de salud',
    'amparos de salud',
    'derecho a la salud',
    'amparo discapacidad',
    'abogada obra social',
    'abogada prepaga',
    'estudio jurídico Quilmes',
    'abogadas Quilmes',
  ],
  authors: [{ name: 'Latorre & Suárez Abogadas' }],
  creator: 'Latorre & Suárez Abogadas',
  publisher: 'Latorre & Suárez Abogadas',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: 'Latorre & Suárez Abogadas',
    title: 'Latorre & Suárez Abogadas | Derecho a la Salud - Amparos',
    description:
      'Estudio jurídico especializado en amparos de salud y discapacidad. Defendemos tu derecho a la cobertura médica.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 1200,
        alt: 'Latorre & Suárez Abogadas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latorre & Suárez Abogadas | Derecho a la Salud - Amparos',
    description:
      'Estudio jurídico especializado en amparos de salud y discapacidad. Defendemos tu derecho a la cobertura médica.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased cursor-none`}>
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
