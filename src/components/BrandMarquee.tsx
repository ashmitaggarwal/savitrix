'use client'

import { brands } from '@/lib/brands'

const tickerItems = [
  ...brands.map((b) => b.name),
  'Vertical SaaS',
  'Legal Tech',
  'Professional Software',
  'Savitrix Limited',
]

export function BrandMarquee() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="relative overflow-hidden border-y border-gold/10 bg-obsidian/80 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-obsidian to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-obsidian to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 font-display text-lg tracking-wide text-white/40"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gold/50" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}
