'use client'

import { motion } from 'framer-motion'
import { companyValues, pillars } from '@/lib/brands'

export function MissionSection() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About us</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">
              A holding company built for{' '}
              <span className="italic text-gold-light">the long term</span>
            </h2>
            <p className="mt-6 font-light leading-relaxed text-muted">
              Savitrix Limited is a Canadian parent company. We acquire, build, and steward a
              portfolio of software brands — each serving professionals in its own vertical with
              clarity and purpose.
            </p>

            <div className="mt-10 space-y-6">
              {companyValues.map((item) => (
                <div key={item.title} className="rounded-sm glass-panel p-6">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold/70">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-light leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-sm glass-panel p-6">
              <p className="font-light leading-relaxed text-muted">
                Our operating companies include{' '}
                <a href="https://counselca.com" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  CounselCA
                </a>{' '}
                and{' '}
                <a href="https://lawnest.co" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                  LawNest
                </a>
                . Customers work with those brands directly — Savitrix provides the enduring
                ownership structure behind them.
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-sm glass-panel p-7 transition-colors hover:border-gold/20"
              >
                <div className="flex items-start gap-5">
                  <span className="font-display text-3xl font-light text-gold/25">{pillar.metric}</span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground">{pillar.title}</h3>
                    <p className="mt-3 font-light leading-relaxed text-muted">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
