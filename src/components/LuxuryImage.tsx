'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type LuxuryImageProps = {
  src: string
  alt: string
  caption?: string
  className?: string
  priority?: boolean
  aspect?: 'video' | 'square' | 'portrait' | 'auto'
  overlay?: 'dark' | 'gold' | 'none'
  parallax?: boolean
}

export function LuxuryImage({
  src,
  alt,
  caption,
  className = '',
  priority = false,
  aspect = 'video',
  overlay = 'dark',
  parallax = true,
}: LuxuryImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion || !parallax ? [0, 0] : [-24, 24])
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion || !parallax ? [1, 1] : [1.08, 1])

  const aspectClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    auto: 'min-h-[280px]',
  }[aspect]

  const overlayClass = {
    dark: 'from-void/80 via-void/20 to-transparent',
    gold: 'from-void/70 via-gold/10 to-transparent',
    none: '',
  }[overlay]

  return (
    <figure className={`group ${className}`}>
      <div ref={ref} className={`luxury-frame relative overflow-hidden ${aspectClass}`}>
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        {overlay !== 'none' && (
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${overlayClass}`}
            aria-hidden
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(212,168,83,0.08) 0%, transparent 70%)',
          }}
          aria-hidden
        />
      </div>
      {caption && (
        <figcaption className="editorial-caption mt-3">{caption}</figcaption>
      )}
    </figure>
  )
}
