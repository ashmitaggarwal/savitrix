'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#companies', label: 'Companies' },
  { href: '#industries', label: 'Industries' },
  { href: '#about', label: 'About' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-gold/10 bg-void/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 font-display text-lg font-semibold text-gold">
            S
          </span>
          <div className="text-left">
            <span className="block font-display text-lg font-medium tracking-tight text-foreground">
              Savitrix
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold/50">Limited</span>
          </div>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-sm border border-gold/25 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold/5 md:inline-block"
        >
          Partner with us
        </a>

        <button
          type="button"
          className="rounded-sm p-2 text-muted md:hidden"
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
          className="border-b border-gold/10 bg-void/95 px-6 py-6 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium uppercase tracking-wider text-muted"
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
