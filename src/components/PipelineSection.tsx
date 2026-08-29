'use client'

import { motion } from 'framer-motion'
import { BuildPipeline } from './BuildPipeline'

export function PipelineSection() {
  return (
    <section id="pipeline" className="border-t border-cyan/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="section-label">Build pipeline</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            From discovery to iteration
          </h2>
          <p className="mt-4 text-muted">
            Our AI-native product loop: deep vertical research, compliance-aware design, fast
            engineering, niche go-to-market, and continuous operator feedback.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <BuildPipeline />
        </motion.div>
      </div>
    </section>
  )
}
