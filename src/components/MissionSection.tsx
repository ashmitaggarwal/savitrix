'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pillars } from '@/lib/brands'
import { images } from '@/lib/images'
import { LuxuryImage } from './LuxuryImage'

export function MissionSection() {
  const [activePillar, setActivePillar] = useState(0)

  return (
    <section id="approach" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <LuxuryImage
              src={images.boardroom}
              alt="Executive boardroom representing Savitrix long-term vision"
              caption="The Savitrix philosophy"
              aspect="portrait"
              overlay="gold"
              priority={false}
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 hidden lg:block"
            >
              <LuxuryImage
                src={images.legal}
                alt="Legal profession editorial detail"
                caption="Crafted for professionals"
                aspect="video"
                overlay="dark"
                parallax
              />
            </motion.div>
          </motion.div>

          {/* Content column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="editorial-caption mb-3">Our approach</p>
              <h2 className="font-display text-3xl font-light tracking-tight sm:text-5xl">
                One holding company.
                <br />
                <span className="italic text-gradient-gold">Many focused products.</span>
              </h2>
              <p className="mt-6 text-base font-light leading-relaxed text-muted lg:text-lg">
                Savitrix acquires and builds vertical SaaS with a founder&apos;s obsession for
                product quality. We don&apos;t chase every market — we go deep where professionals
                still rely on tools that weren&apos;t built for them.
              </p>

              <motion.div
                id="about"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-10 shimmer-border rounded-sm"
              >
                <div className="glass-strong rounded-sm p-7">
                  <h3 className="font-display text-2xl font-light text-ivory">About Savitrix Limited</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                    Savitrix Limited is a Canadian company and the parent entity behind{' '}
                    <a
                      href="https://counselca.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gold-light transition-colors hover:text-teal-light"
                    >
                      CounselCA
                    </a>
                    ,{' '}
                    <a
                      href="https://lawnest.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-gold-light transition-colors hover:text-teal-light"
                    >
                      LawNest
                    </a>
                    , and additional ventures in development. We believe enduring software comes
                    from understanding one industry exceptionally well.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive pillars */}
            <div className="relative mt-12">
              <div className="absolute bottom-4 left-6 top-4 w-px bg-white/8" aria-hidden />
              <motion.div
                className="absolute left-6 w-px origin-top bg-gradient-to-b from-gold via-teal to-violet"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: (activePillar + 1) / pillars.length }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ top: '1rem', height: 'calc(100% - 2rem)' }}
                aria-hidden
              />

              <div className="space-y-3">
                {pillars.map((pillar, i) => {
                  const isActive = activePillar === i
                  return (
                    <motion.button
                      key={pillar.title}
                      type="button"
                      onClick={() => setActivePillar(i)}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      whileHover={{ x: 4 }}
                      className={`relative w-full cursor-pointer rounded-sm p-6 pl-14 text-left transition-all duration-300 ${
                        isActive ? 'glass-strong glow-gold' : 'glass hover:glass-strong'
                      }`}
                      aria-expanded={isActive}
                    >
                      <span
                        className={`absolute left-4 top-7 h-3.5 w-3.5 rounded-full border transition-all duration-300 ${
                          isActive
                            ? 'border-gold bg-gold shadow-lg shadow-gold/40'
                            : 'border-gold/30 bg-obsidian'
                        }`}
                        aria-hidden
                      />

                      <div className="flex items-start gap-4">
                        <span
                          className={`font-display text-3xl font-light transition-colors duration-300 ${
                            isActive ? 'text-gold-light' : 'text-white/15'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-light text-ivory">{pillar.title}</h3>
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-3 overflow-hidden text-sm font-light leading-relaxed text-muted"
                              >
                                {pillar.description}
                              </motion.p>
                            )}
                          </AnimatePresence>
                          {!isActive && (
                            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
                              Expand
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
