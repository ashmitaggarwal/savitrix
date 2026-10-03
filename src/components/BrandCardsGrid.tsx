'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { brands } from '@/lib/brands'

const statusLabel: Record<string, string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'In development',
}

export function BrandCardsGrid() {
  return (
    <div className="mt-14 grid gap-4 sm:grid-cols-2">
      {brands.map((brand, i) => (
        <motion.article
          key={brand.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: i * 0.06 }}
          className="modern-card group relative overflow-hidden p-6 md:p-7"
        >
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
            style={{ background: brand.accent }}
          />
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className="inline-block h-1 w-8 rounded-full"
                style={{ background: brand.accent }}
              />
              <h3 className="mt-4 font-display text-2xl font-medium text-foreground">{brand.name}</h3>
              <p className="mt-1 text-sm text-muted">{brand.tagline}</p>
            </div>
            <span className="tag-pill shrink-0">{statusLabel[brand.status]}</span>
          </div>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted">{brand.description}</p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-subtle">{brand.focus}</span>
            {brand.url ? (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-light"
              >
                Visit
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="text-sm text-subtle">Coming soon</span>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  )
}
