'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="editorial-caption mb-8"
        >
          Savitrix Limited
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
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
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-muted md:text-lg"
        >
          Savitrix acquires, builds, and nurtures vertically-tailored software for legal and
          professional services. Each brand in our portfolio serves its market directly — we provide
          long-term ownership and stewardship from behind the scenes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#companies"
            className="rounded-sm bg-gold px-7 py-3.5 text-sm font-medium tracking-wide text-void transition-opacity hover:opacity-90"
          >
            Our companies
          </a>
          <a
            href="#industries"
            className="rounded-sm glass-panel px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-gold/30"
          >
            Industries we serve
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-2 editorial-caption !text-subtle"
        >
          <span>CounselCA</span>
          <span className="text-gold/25">·</span>
          <span>LawNest</span>
          <span className="text-gold/25">·</span>
          <span>InvoiceFlow</span>
        </motion.div>
      </div>

      <motion.a
        href="#companies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-subtle transition-colors hover:text-gold"
        aria-label="Scroll to companies"
      >
        <span className="editorial-caption !text-subtle">Discover</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  )
}
