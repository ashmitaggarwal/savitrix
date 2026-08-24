'use client'

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return null

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-gold via-teal to-violet"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
