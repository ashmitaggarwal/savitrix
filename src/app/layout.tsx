import type { Metadata } from 'next'
import { Cormorant, Montserrat } from 'next/font/google'
import { AmbientBackground } from '@/components/AmbientBackground'
import { CursorGlow } from '@/components/CursorGlow'
import { ScrollProgress } from '@/components/ScrollProgress'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://savitrix.com'),
  title: {
    default: 'Savitrix Limited — Building Vertical SaaS for Professionals',
    template: '%s | Savitrix Limited',
  },
  description:
    'Savitrix Limited is the parent company behind CounselCA, LawNest, and a growing portfolio of vertical SaaS products for legal and professional services.',
  keywords: [
    'Savitrix',
    'vertical SaaS',
    'legal technology',
    'CounselCA',
    'LawNest',
    'holding company',
    'professional software',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://savitrix.com',
    siteName: 'Savitrix Limited',
    title: 'Savitrix Limited — Building Vertical SaaS for Professionals',
    description:
      'The umbrella company behind CounselCA, LawNest, and more — purpose-built software for professionals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savitrix Limited',
    description: 'Building vertical SaaS for legal and professional services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <AmbientBackground />
        <CursorGlow />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
