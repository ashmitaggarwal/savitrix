'use client'

import { motion, useReducedMotion } from 'framer-motion'

type TextRevealProps = {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'p' | 'span'
}

export function TextReveal({ text, className = '', delay = 0, as = 'span' }: TextRevealProps) {
  const reduceMotion = useReducedMotion()
  const words = text.split(' ')
  const Tag = motion[as] as typeof motion.span

  if (reduceMotion) {
    const StaticTag = as
    return <StaticTag className={className}>{text}</StaticTag>
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
