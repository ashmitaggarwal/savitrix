'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type MagneticButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  variant?: 'gold' | 'glass'
}

export function MagneticButton({ href, children, className = '', variant = 'gold' }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const baseClass =
    variant === 'gold'
      ? 'bg-gold text-void hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30'
      : 'glass text-ivory hover:bg-white/10 hover:border-gold/30'

  return (
    <motion.a
      ref={ref}
      href={href}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.4 }}
      onMouseMove={(e) => {
        if (reduceMotion || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        setPosition({
          x: (e.clientX - rect.left - rect.width / 2) * 0.3,
          y: (e.clientY - rect.top - rect.height / 2) * 0.3,
        })
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      className={`inline-flex cursor-pointer items-center rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${baseClass} ${className}`}
    >
      {children}
    </motion.a>
  )
}
