import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-wider text-cyan/70">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-gradient-ai">Signal lost</h1>
      <p className="mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist in our network.</p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-gradient-to-r from-cyan to-blue px-6 py-3 text-sm font-semibold text-void"
      >
        Return home
      </Link>
    </div>
  )
}
