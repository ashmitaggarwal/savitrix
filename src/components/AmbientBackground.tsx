'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function AmbientBackground() {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    if (reduceMotion) return

    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [reduceMotion])

  const blobStyle = (offsetX: number, offsetY: number) =>
    reduceMotion
      ? {}
      : {
          transform: `translate(${(mouse.x - 0.5) * offsetX}px, ${(mouse.y - 0.5) * offsetY}px)`,
        }

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Aurora blobs */}
      <div
        className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] transition-transform duration-700 ease-out"
        style={blobStyle(-80, -60)}
      />
      <div
        className="absolute -right-24 top-1/4 h-[450px] w-[450px] rounded-full bg-teal/10 blur-[100px] transition-transform duration-700 ease-out"
        style={blobStyle(60, -40)}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-violet/8 blur-[110px] transition-transform duration-700 ease-out"
        style={blobStyle(-40, 50)}
      />
      <div
        className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-rose/5 blur-[90px] transition-transform duration-700 ease-out"
        style={blobStyle(50, 30)}
      />

      {/* Floating orbs */}
      {!reduceMotion && (
        <>
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-gold/60"
          />
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-teal/60"
          />
          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute left-[60%] top-[70%] h-1 w-1 rounded-full bg-violet/60"
          />
        </>
      )}
    </div>
  )
}
