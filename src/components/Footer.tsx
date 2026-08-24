'use client'

import { motion } from 'framer-motion'
import { brands } from '@/lib/brands'

export function Footer() {
  const liveBrands = brands.filter((b) => b.url)

  return (
    <footer className="border-t border-gold/10 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-gold-dark font-display text-xs font-bold text-void">
                S
              </span>
              <span className="font-display text-lg font-semibold text-ivory">Savitrix Limited</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Building vertical SaaS for professionals. Parent company of CounselCA, LawNest, and
              more.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {[
              {
                title: 'Ventures',
                links: liveBrands.map((b) => ({
                  label: b.name,
                  href: b.url!,
                  external: true,
                })),
              },
              {
                title: 'Company',
                links: [
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Approach', href: '#approach' },
                  { label: 'About', href: '#about' },
                  { label: 'Contact', href: '#contact' },
                ],
              },
              {
                title: 'Connect',
                links: [
                  { label: 'hello@savitrix.com', href: 'mailto:hello@savitrix.com' },
                  { label: 'savitrix.com', href: 'https://savitrix.com', external: true },
                ],
              },
            ].map((col, colI) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colI * 0.1, duration: 0.4 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold/50">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...('external' in link && link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="text-sm text-muted transition-colors duration-200 hover:text-gold-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/10 pt-8 sm:flex-row"
        >
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Savitrix Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/30">CounselCA · LawNest · InvoiceFlow</p>
        </motion.div>
      </div>
    </footer>
  )
}
