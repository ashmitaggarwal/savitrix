'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#capabilities', label: 'AI Stack' },
  { href: '#mission', label: 'Mission' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-cyan/10 bg-void/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/20 to-violet/20 text-sm font-bold text-cyan ring-1 ring-cyan/30">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Savitrix
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-gradient-to-r from-cyan/20 to-violet/20 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-cyan ring-1 ring-cyan/25 transition-all hover:from-cyan/30 hover:to-violet/30 md:inline-block"
        >
          Partner with us
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-cyan/10 bg-void/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-wider text-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  )
}
