import type { Metadata } from 'next'
import { Cormorant, Montserrat } from 'next/font/google'
import { SceneRoot } from '@/components/SceneRoot'
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
    default: 'Savitrix Limited — Parent Company for Professional Software',
    template: '%s | Savitrix Limited',
  },
  description:
    'Savitrix Limited is the parent company behind CounselCA, LawNest, and a portfolio of vertically-tailored software for legal and professional services.',
  keywords: [
    'Savitrix',
    'holding company',
    'vertical SaaS',
    'legal technology',
    'CounselCA',
    'LawNest',
    'professional software',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://savitrix.com',
    siteName: 'Savitrix Limited',
    title: 'Savitrix Limited — Parent Company for Professional Software',
    description:
      'We acquire, build, and nurture best-in-class software brands for professionals — each with its own identity, united under one long-term owner.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savitrix Limited',
    description: 'Parent company for vertically-tailored professional software.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <SceneRoot />
        {children}
      </body>
    </html>
  )
}
