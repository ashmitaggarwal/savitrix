'use client'

import { motion } from 'framer-motion'
import { pillars } from '@/lib/brands'

export function MissionSection() {
  return (
    <section id="mission" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Mission</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Built for operators,
              <br />
              <span className="text-gradient-ai">not acquirers</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Savitrix acquires and builds vertical SaaS with a founder&apos;s obsession for product
              quality. We don&apos;t chase vanity metrics — we ship software practitioners rely on
              every day, with AI woven into the workflows that matter.
            </p>
            <div className="mt-8 rounded-2xl glass-panel p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-cyan">About Savitrix Limited</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                A Canadian company and the parent entity behind{' '}
                <a href="https://counselca.com" className="text-cyan hover:underline" target="_blank" rel="noopener noreferrer">
                  CounselCA
                </a>
                ,{' '}
                <a href="https://lawnest.co" className="text-cyan hover:underline" target="_blank" rel="noopener noreferrer">
                  LawNest
                </a>
                , and a growing portfolio of niche professional software. We believe the best tools
                come from deep vertical focus — not horizontal platforms trying to serve everyone.
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl glass-panel p-6 transition-all hover:border-cyan/20"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl font-bold text-cyan/30">{pillar.metric}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
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
