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
    <section id="contact" className="border-t border-gold/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Contact</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-5xl">
              Inquiries & partnerships
            </h2>
            <p className="mt-5 max-w-md font-light leading-relaxed text-muted">
              For partnership discussions, acquisitions, or general inquiries about Savitrix Limited
              and our portfolio — we welcome thoughtful conversations with aligned operators and
              investors.
            </p>

            <div className="mt-10 space-y-6">
              {contacts.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/15 bg-gold/5 text-gold">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-subtle">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground hover:text-gold">
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
            className="rounded-sm glass-panel p-10 glow-gold"
          >
            <h3 className="font-display text-2xl font-medium">Partner with Savitrix</h3>
            <p className="mt-4 font-light leading-relaxed text-muted">
              Whether you are a founder seeking a long-term home for your software business, an
              investor aligned with vertical SaaS, or a professional with a product vision — we
              are open to a conversation.
            </p>
            <a
              href="mailto:savitrixlimited@gmail.com?subject=Partnership%20inquiry"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-medium tracking-wide text-void transition-opacity hover:opacity-90"
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
