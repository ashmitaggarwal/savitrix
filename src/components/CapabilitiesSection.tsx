'use client'

import { motion } from 'framer-motion'
import { Bot, FileSearch, LineChart, Search } from 'lucide-react'
import { capabilities } from '@/lib/brands'

const iconMap = {
  search: Search,
  file: FileSearch,
  bot: Bot,
  chart: LineChart,
} as const

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-t border-cyan/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 max-w-2xl"
        >
          <p className="section-label">AI stack</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Capabilities we embed in every product
          </h2>
          <p className="mt-4 text-muted">
            Not a chatbot wrapper — purpose-built AI layers for regulated, workflow-heavy verticals.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-2xl glass-panel p-6 transition-all hover:border-cyan/25 hover:glow-cyan"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan ring-1 ring-cyan/20 transition-colors group-hover:from-cyan/25 group-hover:to-violet/25">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{cap.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
