'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'savitrixlimited@gmail.com',
    href: 'mailto:savitrixlimited@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Entity',
    value: 'Savitrix Limited · Canada',
    href: null,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-cyan/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build something niche
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Interested in partnering, acquiring, or joining our portfolio? We&apos;re always open
              to conversations with operators who share our long-term mindset.
            </p>

            <div className="mt-8 space-y-4">
              {contacts.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-subtle">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground hover:text-cyan">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl glass-panel p-8 glow-cyan"
          >
            <h3 className="text-lg font-semibold">Partner with Savitrix</h3>
            <p className="mt-2 text-sm text-muted">
              Whether you&apos;re a founder looking for a long-term home, an investor aligned with
              vertical SaaS, or a practitioner with product ideas — reach out.
            </p>
            <a
              href="mailto:savitrixlimited@gmail.com?subject=Partnership%20inquiry"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-blue px-5 py-3 text-sm font-semibold text-void transition-transform hover:scale-[1.02]"
            >
              Send an inquiry
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
