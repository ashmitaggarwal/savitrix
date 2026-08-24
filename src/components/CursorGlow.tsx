'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  if (reduceMotion || isTouch) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
      style={{
        left: pos.x,
        top: pos.y,
        background: 'radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(45,212,191,0.04) 40%, transparent 70%)',
      }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      aria-hidden
    />
  )
}
