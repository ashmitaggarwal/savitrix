'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Briefcase, Receipt, Scale, Sparkles } from 'lucide-react'
import { brands, categories, type Brand, type BrandCategory } from '@/lib/brands'
import { TiltCard } from './TiltCard'

const iconMap = {
  scale: Scale,
  briefcase: Briefcase,
  receipt: Receipt,
  sparkles: Sparkles,
}

const statusLabel = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming soon',
}

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const Icon = iconMap[brand.icon]
  const isExternal = Boolean(brand.url)

  const CardWrapper = isExternal ? 'a' : 'div'
  const wrapperProps = isExternal
    ? { href: brand.url!, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard glowColor={`${brand.accent}22`}>
        <CardWrapper
          {...wrapperProps}
          className={`glass group relative block h-full overflow-hidden rounded-sm transition-all duration-500 hover:glass-strong ${
            isExternal ? 'cursor-pointer' : 'cursor-default'
          }`}
        >
          {/* Luxury image header */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={brand.image}
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 400px"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
            <div
              className="absolute inset-x-0 top-0 h-px opacity-80"
              style={{ background: `linear-gradient(90deg, transparent, ${brand.accent}, transparent)` }}
            />

            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.5 }}
                className="flex h-11 w-11 items-center justify-center rounded-sm backdrop-blur-md"
                style={{ backgroundColor: `${brand.accent}25`, color: brand.accent }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </motion.div>
              <span
                className={`rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] backdrop-blur-md ${
                  brand.status === 'live'
                    ? 'bg-teal/20 text-teal-light'
                    : brand.status === 'beta'
                      ? 'bg-gold/20 text-gold-light'
                      : 'bg-white/10 text-white/50'
                }`}
              >
                {statusLabel[brand.status]}
              </span>
            </div>
          </div>

          <div className="p-6 pt-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-light text-ivory transition-colors group-hover:text-gold-light">
                  {brand.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-gold/70">
                  {brand.tagline}
                </p>
              </div>
              {isExternal && (
                <ArrowUpRight
                  className="mt-1 h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:text-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              )}
            </div>
            <p className="mt-4 text-sm font-light leading-relaxed text-muted">{brand.description}</p>

            {isExternal && (
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-teal-light transition-all group-hover:tracking-[0.2em]">
                Visit {brand.name}
              </p>
            )}
          </div>
        </CardWrapper>
      </TiltCard>
    </motion.article>
  )
}

export function BrandGrid() {
  const [filter, setFilter] = useState<BrandCategory | 'all'>('all')

  const filtered =
    filter === 'all' ? brands : brands.filter((b) => b.category === filter)

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto mb-16 max-w-6xl px-6" aria-hidden />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="editorial-caption mb-3">Portfolio</p>
          <h2 className="font-display text-3xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            Ventures under the{' '}
            <span className="italic text-gradient-gold">Savitrix umbrella</span>
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted lg:text-lg">
            Each brand carries its own identity — united by an uncompromising standard of craft
            and vertical depth.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={filter === cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative cursor-pointer overflow-hidden rounded-sm px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                filter === cat.id
                  ? 'text-void shadow-lg shadow-gold/20'
                  : 'glass text-muted hover:text-ivory'
              }`}
            >
              {filter === cat.id && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-14 grid gap-8 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((brand, i) => (
              <BrandCard key={brand.id} brand={brand} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
