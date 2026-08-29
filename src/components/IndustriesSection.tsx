'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { brands, industries } from '@/lib/brands'

export function IndustriesSection() {
  return (
    <section id="industries" className="border-t border-gold/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16 max-w-2xl"
        >
          <p className="section-label">Industries</p>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">
            Vertically-tailored solutions for{' '}
            <span className="italic text-gold-light">service professionals</span>
          </h2>
          <p className="mt-5 font-light leading-relaxed text-muted">
            Our portfolio is organized by the industries we serve — not by a single product. Each
            vertical has dedicated software built for the workflows and standards of that profession.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {industries.map((industry, i) => {
            const industryBrands = brands.filter((b) => industry.brands.includes(b.id))
            return (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-sm glass-panel p-8 transition-colors hover:border-gold/25"
              >
                <p className="section-label">{industry.name}</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-foreground">
                  {industry.headline}
                </h3>
                <p className="mt-4 font-light leading-relaxed text-muted">{industry.description}</p>

                <div className="luxury-divider my-6" />

                <ul className="space-y-3">
                  {industryBrands.map((brand) => (
                    <li key={brand.id}>
                      {brand.url ? (
                        <a
                          href={brand.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-4"
                        >
                          <div>
                            <span className="font-medium text-foreground group-hover:text-gold">
                              {brand.name}
                            </span>
                            <span className="mt-0.5 block text-sm text-muted">{brand.tagline}</span>
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-gold/40 group-hover:text-gold" />
                        </a>
                      ) : (
                        <div>
                          <span className="font-medium text-foreground">{brand.name}</span>
                          <span className="mt-0.5 block text-sm text-muted">{brand.tagline}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
