import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="editorial-caption mb-4">404</p>
      <h1 className="font-display text-4xl font-light text-ivory">Page not found</h1>
      <Link
        href="/"
        className="mt-8 rounded-sm border border-gold/30 px-6 py-3 text-sm uppercase tracking-[0.15em] text-gold-light transition-colors hover:bg-gold/10"
      >
        Return home
      </Link>
    </div>
  )
}
