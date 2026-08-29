import { brands } from '@/lib/brands'

const navLinks = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#capabilities', label: 'AI Stack' },
  { href: '#mission', label: 'Mission' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-cyan/10 bg-deep/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/20 to-violet/20 text-sm font-bold text-cyan ring-1 ring-cyan/30">
                S
              </span>
              <span className="font-display text-lg font-semibold">Savitrix Limited</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              AI-native vertical SaaS studio. Building niche software for legal and professional
              services with long-term ownership.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-subtle">Navigate</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-subtle">Ventures</h4>
            <ul className="mt-4 space-y-2">
              {brands
                .filter((b) => b.url)
                .map((brand) => (
                  <li key={brand.id}>
                    <a
                      href={brand.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-cyan"
                    >
                      {brand.name}
                    </a>
                  </li>
                ))}
              <li>
                <a
                  href="mailto:savitrixlimited@gmail.com"
                  className="text-sm text-muted transition-colors hover:text-cyan"
                >
                  savitrixlimited@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cyan/10 pt-8 sm:flex-row">
          <p className="font-mono text-[10px] text-subtle">
            © {new Date().getFullYear()} Savitrix Limited. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-subtle">savitrix.com · AI-native vertical SaaS</p>
        </div>
      </div>
    </footer>
  )
}
