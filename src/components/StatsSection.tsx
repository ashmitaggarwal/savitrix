'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/brands'

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-gradient-cyan md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted">{label}</p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="border-y border-cyan/10 bg-deep/30 px-6 py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <AnimatedStat {...stat} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
