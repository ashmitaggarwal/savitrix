'use client'

import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type TiltCardProps = {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function TiltCard({ children, className = '', glowColor = 'rgba(212, 168, 83, 0.15)' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [transform, setTransform] = useState('')
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMove = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -12
    const rotateY = (x - 0.5) * 12
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlow({ x: x * 100, y: y * 100, opacity: 1 })
  }

  const handleLeave = () => {
    setTransform('')
    setGlow({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: reduceMotion ? undefined : 'transform 0.15s ease-out' }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: glow.opacity,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, ${glowColor}, transparent 60%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
