import type { Metadata } from 'next'
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { NeuralBackground } from '@/components/NeuralBackground'
import { ScrollProgress } from '@/components/ScrollProgress'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://savitrix.com'),
  title: {
    default: 'Savitrix — AI-Native Vertical SaaS Studio',
    template: '%s | Savitrix',
  },
  description:
    'Savitrix Limited builds AI-native vertical SaaS for legal and professional services. Parent company of CounselCA, LawNest, and a growing portfolio of niche software.',
  keywords: [
    'Savitrix',
    'AI-native SaaS',
    'vertical SaaS',
    'legal technology',
    'CounselCA',
    'LawNest',
    'AI product studio',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://savitrix.com',
    siteName: 'Savitrix',
    title: 'Savitrix — AI-Native Vertical SaaS Studio',
    description:
      'We acquire, build, and nurture vertical SaaS — powered by AI workflows, founder obsession, and long-term ownership.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savitrix — AI-Native Vertical SaaS Studio',
    description: 'Building niche software for professionals with AI at the core.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <NeuralBackground />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
