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
  aiFeature: string
}

export const categories: { id: BrandCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All ventures' },
  { id: 'legal', label: 'Legal tech' },
  { id: 'business', label: 'Business ops' },
  { id: 'coming-soon', label: 'In R&D' },
]

export const brands: Brand[] = [
  {
    id: 'counselca',
    name: 'CounselCA',
    tagline: "Canada's curated legal directory",
    description:
      'Verified lawyer discovery with AI-assisted search, practice-area matching, and trust signals built for Canadian legal consumers.',
    url: 'https://counselca.com',
    category: 'legal',
    status: 'live',
    accent: '#22d3ee',
    aiFeature: 'Semantic lawyer matching',
  },
  {
    id: 'lawnest',
    name: 'LawNest',
    tagline: 'Practice OS for small firms',
    description:
      'Matters, documents, time, invoicing, and client portals — with AI drafting helpers and intake automation for solo lawyers.',
    url: 'https://lawnest.co',
    category: 'legal',
    status: 'live',
    accent: '#8b5cf6',
    aiFeature: 'Document & intake AI',
  },
  {
    id: 'invoiceflow',
    name: 'InvoiceFlow',
    tagline: 'Smart invoicing for SMBs',
    description:
      'Polished invoices, payment tracking, and client management — with AI line-item suggestions and cash-flow insights.',
    url: null,
    category: 'business',
    status: 'beta',
    accent: '#34d399',
    aiFeature: 'Predictive billing',
  },
  {
    id: 'venture-4',
    name: 'Stealth',
    tagline: 'Next vertical in discovery',
    description:
      'Exploring niches where specialized AI workflows can replace spreadsheets and legacy tools for professional services.',
    url: null,
    category: 'coming-soon',
    status: 'coming-soon',
    accent: '#d946ef',
    aiFeature: 'Agentic workflows',
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Active ventures' },
  { value: 2, suffix: '', label: 'Markets served' },
  { value: 100, suffix: '%', label: 'Founder-led product' },
  { value: 24, suffix: '/7', label: 'AI-assisted ops' },
]

export const pillars = [
  {
    title: 'Vertical depth',
    description:
      'We go deep on one industry at a time — legal, professional services, SMB ops — not horizontal SaaS that tries to be everything.',
    metric: '01',
  },
  {
    title: 'AI-native by default',
    description:
      'Every product embeds AI where practitioners actually need it: search, drafting, intake, billing — not bolt-on chatbots.',
    metric: '02',
  },
  {
    title: 'Long-term ownership',
    description:
      'Built to compound for years. We nurture brands with operator discipline, not growth-at-all-costs flip logic.',
    metric: '03',
  },
]

export const capabilities = [
  {
    title: 'Semantic discovery',
    description: 'Vector search and entity matching tuned for regulated professional directories.',
    icon: 'search',
  },
  {
    title: 'Document intelligence',
    description: 'Drafting, extraction, and classification pipelines for legal and business documents.',
    icon: 'file',
  },
  {
    title: 'Agentic workflows',
    description: 'Multi-step automations that respect compliance boundaries and human review gates.',
    icon: 'bot',
  },
  {
    title: 'Embedded analytics',
    description: 'Operational dashboards with predictive signals — revenue, intake, utilization.',
    icon: 'chart',
  },
]

export const pipelineStages = [
  {
    id: 'discover',
    label: 'Discover',
    description: 'Map workflows, pain points, and regulatory constraints in target verticals.',
  },
  {
    id: 'design',
    label: 'Design',
    description: 'AI-assisted UX, data models, and compliance-aware feature specs.',
  },
  {
    id: 'build',
    label: 'Build',
    description: 'Ship fast with modern stack — Next.js, Supabase, edge inference where it matters.',
  },
  {
    id: 'launch',
    label: 'Launch',
    description: 'Go-to-market with niche positioning, not generic horizontal messaging.',
  },
  {
    id: 'iterate',
    label: 'Iterate',
    description: 'Closed-loop feedback from operators; continuous model and product refinement.',
  },
]
