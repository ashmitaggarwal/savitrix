'use client'

import { motion } from 'framer-motion'
import { PortfolioFlow } from './PortfolioFlow'

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="section-label">Portfolio graph</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Interactive venture ecosystem
          </h2>
          <p className="mt-4 text-muted">
            Click any node to expand details. Each product under the Savitrix umbrella ships with
            AI capabilities tuned to its vertical — not generic horizontal features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <PortfolioFlow />
          <p className="mt-4 text-center font-mono text-[10px] text-subtle">
            Drag to pan · scroll to zoom · click nodes for details
          </p>
        </motion.div>
      </div>
    </section>
  )
}
