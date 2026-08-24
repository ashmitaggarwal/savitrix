'use client'

import { motion } from 'framer-motion'
import { editorialGallery } from '@/lib/images'
import { LuxuryImage } from './LuxuryImage'

export function EditorialGallery() {
  return (
    <section className="relative py-8 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="editorial-caption mb-2 !text-left">The Savitrix standard</p>
            <h2 className="font-display text-3xl font-light tracking-tight text-ivory sm:text-4xl">
              Where <span className="italic text-gold-light">precision</span> meets ambition
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            We curate vertical software the way private offices curate portfolios — with
            discipline, taste, and an eye for enduring value.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5">
          {editorialGallery.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={item.span}
            >
              <LuxuryImage
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                aspect={i === 0 ? 'auto' : i === 1 ? 'portrait' : 'video'}
                className="h-full"
                overlay={i === 1 ? 'gold' : 'dark'}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
