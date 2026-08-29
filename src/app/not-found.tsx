import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="editorial-caption">404</p>
      <h1 className="mt-4 font-display text-4xl font-light text-gradient-gold">Page not found</h1>
      <p className="mt-4 max-w-md font-light text-muted">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-gold px-6 py-3 text-sm font-medium tracking-wide text-void"
      >
        Return home
      </Link>
    </div>
  )
}
