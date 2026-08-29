'use client'

import { motion } from 'framer-motion'
import { PortfolioFlow } from './PortfolioFlow'

export function PortfolioSection() {
  return (
    <section id="companies" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="section-label">Portfolio companies</p>
          <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">
            Best-in-class software,
            <span className="italic text-gold-light"> each with its own identity</span>
          </h2>
          <p className="mt-5 font-light leading-relaxed text-muted">
            Like any great parent company, Savitrix holds a portfolio of operating brands. Customers
            engage with CounselCA, LawNest, and our other companies directly — we provide the
            long-term foundation behind them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <PortfolioFlow />
          <p className="mt-5 text-center text-[11px] uppercase tracking-wider text-subtle">
            Select a company to view details
          </p>
        </motion.div>
      </div>
    </section>
  )
}
