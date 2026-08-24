'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { images } from '@/lib/images'
import { MagneticButton } from './MagneticButton'
import { PortfolioOrbit } from './PortfolioOrbit'
import { TextReveal } from './TextReveal'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, reduceMotion ? 0 : 160])
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2])
  const imageScale = useTransform(scrollY, [0, 700], [1, reduceMotion ? 1 : 1.12])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Cinematic hero background */}
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/92 to-void/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60" />
      </motion.div>

      {/* Gold accent lines */}
      <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent lg:block" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent lg:block" aria-hidden />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gold/60" aria-hidden />
            <span className="editorial-caption !text-gold/80">Savitrix Limited</span>
            <span className="h-px w-8 bg-gold/60" aria-hidden />
          </motion.div>

          <h1 className="font-display text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            <TextReveal text="Building vertical SaaS for" delay={0.1} as="span" />
            <br />
            <span className="italic text-gradient-gold">
              <TextReveal text="professionals who move the world" delay={0.5} as="span" />
            </span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 max-w-md text-base font-light leading-relaxed tracking-wide text-muted sm:text-lg"
          >
            The private holding company behind CounselCA, LawNest, and a curated family of
            purpose-built software — each crafted for a singular industry.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#portfolio">Explore portfolio</MagneticButton>
            <MagneticButton href="#about" variant="glass">
              Our philosophy
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/35"
          >
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-3.5 w-3.5 text-gold/50" aria-hidden />
            </motion.div>
            Discover our ventures
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Floating image accent behind orbit */}
          <div className="absolute -right-4 -top-8 hidden w-48 overflow-hidden rounded-sm luxury-frame lg:block">
            <div className="relative aspect-[3/4]">
              <Image
                src={images.network}
                alt=""
                fill
                className="object-cover opacity-40"
                sizes="200px"
                aria-hidden
              />
            </div>
          </div>

          <div className="glass-strong relative rounded-3xl p-6 glow-gold lg:p-8">
            <p className="editorial-caption mb-6 text-center">Portfolio constellation</p>
            <PortfolioOrbit />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
