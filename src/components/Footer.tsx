import { brands } from '@/lib/brands'

const navLinks = [
  { href: '#companies', label: 'Companies' },
  { href: '#industries', label: 'Industries' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-deep/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/25 bg-gold/5 font-display text-lg font-semibold text-gold">
                S
              </span>
              <div>
                <span className="block font-display text-lg font-medium text-foreground">
                  Savitrix Limited
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gold/50">
                  Parent company
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm font-light leading-relaxed text-muted">
              A portfolio of vertically-tailored software for legal and professional services —
              acquired, built, and stewarded for the long term.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-subtle">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-subtle">Portfolio</h4>
            <ul className="mt-5 space-y-3">
              {brands
                .filter((b) => b.url)
                .map((brand) => (
                  <li key={brand.id}>
                    <a
                      href={brand.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {brand.name}
                    </a>
                  </li>
                ))}
              <li>
                <a
                  href="mailto:savitrixlimited@gmail.com"
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  savitrixlimited@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="luxury-divider mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[11px] uppercase tracking-wider text-subtle">
            © {new Date().getFullYear()} Savitrix Limited. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-wider text-subtle">savitrix.com</p>
        </div>
      </div>
    </footer>
  )
}
