export type BrandCategory = 'legal' | 'business' | 'coming-soon'

export type Brand = {
  id: string
  name: string
  tagline: string
  description: string
  url: string | null
  category: BrandCategory
  status: 'live' | 'beta' | 'coming-soon'
  accent: string
  icon: 'scale' | 'briefcase' | 'receipt' | 'sparkles'
  image: string
}

import { images } from './images'

export const categories: { id: BrandCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All ventures' },
  { id: 'legal', label: 'Legal tech' },
  { id: 'business', label: 'Business ops' },
  { id: 'coming-soon', label: 'In development' },
]

export const brands: Brand[] = [
  {
    id: 'counselca',
    name: 'CounselCA',
    tagline: "Canada's curated legal directory",
    description:
      'A verified directory connecting Canadians with lawyers across practice areas — built for trust, discovery, and professional growth.',
    url: 'https://counselca.com',
    category: 'legal',
    status: 'live',
    accent: '#2dd4bf',
    icon: 'scale',
    image: images.legal,
  },
  {
    id: 'lawnest',
    name: 'LawNest',
    tagline: 'Practice management for small firms',
    description:
      'Everything solo lawyers and small firms need — leads, matters, documents, time tracking, invoicing, and client portals in one calm workspace.',
    url: 'https://lawnest.co',
    category: 'legal',
    status: 'live',
    accent: '#d4a853',
    icon: 'briefcase',
    image: images.boardroom,
  },
  {
    id: 'invoiceflow',
    name: 'InvoiceFlow',
    tagline: 'Invoicing for freelancers & SMBs',
    description:
      'Create polished invoices and estimates, track payments, and manage clients — without the complexity of enterprise accounting software.',
    url: null,
    category: 'business',
    status: 'beta',
    accent: '#8b7cf6',
    icon: 'receipt',
    image: images.business,
  },
  {
    id: 'venture-4',
    name: 'New venture',
    tagline: 'Vertical SaaS in discovery',
    description:
      'We are actively exploring new verticals where specialized software can replace spreadsheets and legacy tools.',
    url: null,
    category: 'coming-soon',
    status: 'coming-soon',
    accent: '#f472b6',
    icon: 'sparkles',
    image: images.network,
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Active ventures' },
  { value: 2, suffix: '', label: 'Markets served' },
  { value: 100, suffix: '%', label: 'Founder-led product' },
  { value: 1, suffix: '', label: 'Unified mission' },
]

export const pillars = [
  {
    title: 'Vertical depth',
    description:
      'We build for specific industries — legal, professional services, and small business — not generic horizontal tools.',
  },
  {
    title: 'Operator mindset',
    description:
      'Every product is shaped by real workflows. We ship software practitioners actually want to use every day.',
  },
  {
    title: 'Long-term ownership',
    description:
      'Savitrix is built to nurture brands for years, not flip them. Sustainable growth over growth-at-all-costs.',
  },
]
