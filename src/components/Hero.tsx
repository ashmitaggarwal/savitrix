'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="tag-pill">
            <Sparkles className="h-3 w-3" />
            AI-native vertical SaaS studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient-ai">Niche software</span>
          <br />
          <span className="text-foreground">for professionals who</span>
          <br />
          <span className="text-gradient-cyan">deserve better tools</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          Savitrix Limited acquires, builds, and nurtures vertical SaaS — embedding AI where
          practitioners actually work. Parent company of{' '}
          <a href="https://counselca.com" className="text-cyan hover:underline" target="_blank" rel="noopener noreferrer">
            CounselCA
          </a>{' '}
          and{' '}
          <a href="https://lawnest.co" className="text-cyan hover:underline" target="_blank" rel="noopener noreferrer">
            LawNest
          </a>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="rounded-xl bg-gradient-to-r from-cyan to-blue px-6 py-3 text-sm font-semibold text-void transition-transform hover:scale-[1.02]"
          >
            Explore portfolio
          </a>
          <a
            href="#pipeline"
            className="rounded-xl glass-panel px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-cyan/30"
          >
            See our build pipeline
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-6 font-mono text-[10px] uppercase tracking-wider text-subtle"
        >
          <span>Legal tech</span>
          <span className="text-cyan/30">·</span>
          <span>Practice management</span>
          <span className="text-cyan/30">·</span>
          <span>SMB operations</span>
          <span className="text-cyan/30">·</span>
          <span>Agentic workflows</span>
        </motion.div>
      </div>

      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-subtle transition-colors hover:text-cyan"
        aria-label="Scroll to portfolio"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  )
}
