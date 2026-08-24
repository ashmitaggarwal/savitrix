'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, Building2 } from 'lucide-react'
import { images } from '@/lib/images'
import { MagneticButton } from './MagneticButton'

const contactItems = [
  {
    icon: Mail,
    label: 'General inquiries',
    value: 'hello@savitrix.com',
    href: 'mailto:hello@savitrix.com',
  },
  {
    icon: Building2,
    label: 'Company',
    value: 'Savitrix Limited',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Canada',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto mb-16 max-w-6xl px-6" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="shimmer-border overflow-hidden rounded-sm"
        >
          <div className="glass-strong overflow-hidden rounded-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="editorial-caption mb-3">Contact</p>
                <h2 className="font-display text-3xl font-light tracking-tight sm:text-5xl">
                  Let&apos;s build something{' '}
                  <span className="italic text-gradient-teal">together</span>
                </h2>
                <p className="mt-5 max-w-md font-light text-muted">
                  Partnerships, press inquiries, or conversations with founders — we welcome them
                  all with equal care.
                </p>

                <ul className="mt-10 space-y-6">
                  {contactItems.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 border-b border-gold/8 pb-6 last:border-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/20 bg-gold/5">
                        <item.icon className="h-4 w-4 text-gold-light" aria-hidden />
                      </span>
                      <div>
                        <p className="editorial-caption !text-left !text-white/35">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block font-display text-lg font-light text-ivory transition-colors hover:text-gold-light"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 font-display text-lg font-light text-ivory">{item.value}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[360px] overflow-hidden border-t border-gold/10 lg:min-h-0 lg:border-l lg:border-t-0">
                <Image
                  src={images.business}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-br from-void/90 via-void/75 to-void/50" />

                <div className="relative flex h-full flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="editorial-caption mb-3">Partnerships</p>
                    <h3 className="font-display text-2xl font-light text-ivory lg:text-3xl">
                      Partner with Savitrix
                    </h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                      We&apos;re always open to conversations with founders building in legal tech,
                      professional services, and vertical SaaS.
                    </p>
                    <div className="mt-8">
                      <MagneticButton
                        href="mailto:hello@savitrix.com?subject=Partnership%20inquiry"
                        className="!bg-gradient-to-r !from-teal !to-teal-dark !text-void hover:!shadow-teal/30"
                      >
                        Start a conversation
                      </MagneticButton>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
