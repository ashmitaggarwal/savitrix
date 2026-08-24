'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { brands } from '@/lib/brands'

const orbitBrands = brands.filter((b) => b.status !== 'coming-soon' || b.id === 'venture-4')

export function PortfolioOrbit() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [rotation, setRotation] = useState(0)
  const reduceMotion = useReducedMotion()
  const activeId = hoveredId ?? selectedId
  const activeBrand = orbitBrands.find((b) => b.id === activeId)

  return (
    <div className="w-full max-w-md">
      <div
        className="relative mx-auto aspect-square w-full"
        role="img"
        aria-label="Interactive map of Savitrix portfolio brands orbiting the company hub"
      >
        {/* Pulse rings */}
        {!reduceMotion && (
          <>
            <div className="absolute inset-[8%] rounded-full border border-gold/10" />
            <motion.div
              animate={{ scale: [1, 1.15], opacity: [0.4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-[8%] rounded-full border border-teal/20"
            />
            <motion.div
              animate={{ scale: [1, 1.25], opacity: [0.3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
              className="absolute inset-[8%] rounded-full border border-violet/15"
            />
          </>
        )}

        {/* Rotating orbit container */}
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? {} : { rotate: rotation }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-[12%] rounded-full border border-dashed border-white/5" />
          <div className="absolute inset-[24%] rounded-full border border-white/5" />

          {orbitBrands.map((brand, i) => {
            const angle = (i / orbitBrands.length) * 360 - 90
            const radius = 42
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180)
            const isActive = activeId === brand.id

            return (
              <motion.button
                key={brand.id}
                type="button"
                className="absolute z-20 flex cursor-pointer flex-col items-center"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={reduceMotion ? {} : { rotate: -rotation }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const next = selectedId === brand.id ? null : brand.id
                  setSelectedId(next)
                  if (next) setRotation((r) => r - angle - 90)
                }}
                onMouseEnter={() => setHoveredId(brand.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`${brand.name}: ${brand.tagline}`}
                aria-pressed={isActive}
              >
                <span
                  className={`relative flex h-14 w-14 items-center justify-center rounded-xl font-display text-xs font-bold text-white transition-all duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}
                  style={{
                    backgroundColor: brand.accent,
                    boxShadow: isActive ? `0 0 40px ${brand.accent}88, 0 0 80px ${brand.accent}33` : `0 4px 20px ${brand.accent}44`,
                  }}
                >
                  {brand.name.slice(0, 2).toUpperCase()}
                  {isActive && !reduceMotion && (
                    <span
                      className="absolute inset-0 rounded-xl border-2 border-white/30"
                      style={{ animation: 'pulse-ring 1.5s ease-out infinite' }}
                    />
                  )}
                </span>
              </motion.button>
            )
          })}

          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
            {orbitBrands.map((brand, i) => {
              const angle = (i / orbitBrands.length) * 360 - 90
              const radius = 42
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180)
              const isActive = activeId === brand.id
              return (
                <motion.line
                  key={brand.id}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke={isActive ? brand.accent : 'rgba(255,255,255,0.06)'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isActive ? undefined : '4 4'}
                  animate={{ opacity: isActive ? 0.8 : 0.4 }}
                  transition={{ duration: 0.3 }}
                />
              )
            })}
          </svg>
        </motion.div>

        {/* Center hub */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl glass-strong glow-gold"
        >
          <span className="font-display text-3xl font-bold text-gold-light">S</span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gold/60">
            Savitrix
          </span>
        </motion.div>
      </div>

      {/* Active brand detail panel */}
      <AnimatePresence mode="wait">
        {activeBrand && (
          <motion.div
            key={activeBrand.id}
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 overflow-hidden"
          >
            <div
              className="glass-strong rounded-2xl p-5"
              style={{ borderColor: `${activeBrand.accent}44` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ivory">{activeBrand.name}</h3>
                  <p className="mt-1 text-sm text-gold/80">{activeBrand.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{activeBrand.description}</p>
                </div>
                {activeBrand.url && (
                  <a
                    href={activeBrand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all hover:scale-105"
                    style={{ backgroundColor: `${activeBrand.accent}22`, color: activeBrand.accent }}
                  >
                    Visit
                    <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeBrand && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-xs text-white/30"
        >
          Click a node to pin · hover to preview
        </motion.p>
      )}
    </div>
  )
}
