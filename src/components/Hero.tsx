'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { HeroCanvas } from '@/components/three/HeroCanvas'

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroCanvas />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void from-0% via-void/92 via-45% to-transparent to-85%"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-28 lg:max-w-none lg:px-12 xl:px-16">
        <div className="max-w-xl text-center lg:max-w-2xl lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-void/40 px-4 py-1.5 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="editorial-caption !text-gold/80">Savitrix Limited · Canada</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.25rem]"
          >
            <span className="text-gradient-gold">Parent company</span>
            <br />
            <span className="text-foreground">for professional</span>
            <br />
            <span className="italic text-gold-light">software brands</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 text-base font-light leading-relaxed text-muted md:text-lg"
          >
            Savitrix acquires, builds, and nurtures vertically-tailored software for legal and
            professional services. Each brand serves its market directly — we provide long-term
            ownership and stewardship from behind the scenes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#companies"
              className="pointer-events-auto rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-void shadow-[0_0_40px_rgba(212,168,83,0.25)] transition-transform hover:scale-[1.02]"
            >
              Explore portfolio
            </a>
            <a
              href="#contact"
              className="pointer-events-auto modern-card rounded-full border-gold/20 bg-void/30 px-8 py-3.5 text-sm font-medium tracking-wide text-foreground backdrop-blur-sm transition-colors hover:border-gold/35"
            >
              Partner with us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-subtle lg:justify-start"
          >
            <span className="text-gold/70">CounselCA</span>
            <span className="text-gold/20">·</span>
            <span>LawNest</span>
            <span className="text-gold/20">·</span>
            <span>InvoiceFlow</span>
          </motion.div>
        </div>

        <motion.a
          href="#companies"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="pointer-events-auto absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-subtle transition-colors hover:text-gold lg:left-12 lg:translate-x-0"
          aria-label="Scroll to companies"
        >
          <span className="editorial-caption !text-subtle">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
