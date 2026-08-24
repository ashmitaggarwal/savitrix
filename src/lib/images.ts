export const images = {
  hero: '/images/hero-luxury.png',
  boardroom: '/images/editorial-boardroom.png',
  network: '/images/editorial-network.png',
  legal: '/images/venture-legal.png',
  business: '/images/venture-business.png',
} as const

export const editorialGallery = [
  {
    src: images.boardroom,
    alt: 'Executive boardroom with champagne ambient lighting',
    caption: 'Built for the long term',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    src: images.network,
    alt: 'Abstract golden network representing connected ventures',
    caption: 'Connected ventures',
    span: 'lg:col-span-5',
  },
  {
    src: images.legal,
    alt: 'Premium legal profession editorial photography',
    caption: 'Legal excellence',
    span: 'lg:col-span-5',
  },
] as const
