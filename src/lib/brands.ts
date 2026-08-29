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
  focus: string
}

export const categories: { id: BrandCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All companies' },
  { id: 'legal', label: 'Legal services' },
  { id: 'business', label: 'Business operations' },
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
    focus: 'Legal discovery',
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
    focus: 'Practice operations',
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
    focus: 'Business billing',
  },
  {
    id: 'venture-4',
    name: 'New venture',
    tagline: 'Vertical software in discovery',
    description:
      'We are actively exploring new verticals where specialized software can replace spreadsheets and legacy tools for professional services.',
    url: null,
    category: 'coming-soon',
    status: 'coming-soon',
    accent: '#c9a87c',
    focus: 'In evaluation',
  },
]

export const industries = [
  {
    id: 'legal',
    name: 'Legal Services',
    headline: 'Software for lawyers and legal consumers',
    description:
      'Purpose-built solutions for law firms, solo practitioners, and Canadians seeking trusted legal counsel — from practice management to verified directory discovery.',
    brands: ['counselca', 'lawnest'],
  },
  {
    id: 'business',
    name: 'Business Operations',
    headline: 'Tools for small business professionals',
    description:
      'Streamlined software for invoicing, client management, and day-to-day operations — designed for freelancers and SMBs who need clarity without enterprise overhead.',
    brands: ['invoiceflow'],
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Portfolio companies' },
  { value: 2, suffix: '', label: 'Industry verticals' },
  { value: 100, suffix: '%', label: 'Founder-led stewardship' },
  { value: 1, suffix: '', label: 'Unified mission' },
]

export const pillars = [
  {
    title: 'Vertical specialization',
    description:
      'Each company serves a defined professional market — legal services, business operations — with software shaped by real practitioner workflows.',
    metric: '01',
  },
  {
    title: 'Brand independence',
    description:
      'Our portfolio companies maintain their own identity and customer relationships. Savitrix provides long-term ownership and shared stewardship.',
    metric: '02',
  },
  {
    title: 'Enduring ownership',
    description:
      'We build and hold for the long term — nurturing brands with operator discipline, not short-term extraction or growth-at-all-costs logic.',
    metric: '03',
  },
]

export const companyValues = [
  {
    title: 'Our mission',
    body: 'To simplify and empower professionals whose work supports communities every day — through tailored software that respects the nuance of their industries.',
  },
  {
    title: 'Our purpose',
    body: 'Savitrix exists to acquire, build, and steward software brands that practitioners trust — compounding value for customers, teams, and partners over years.',
  },
]
