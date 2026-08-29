'use client'

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 grid-subtle opacity-50" />

      <div
        className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #d4a853 0%, transparent 70%)' }}
      />
      <div
        className="absolute -right-32 bottom-1/4 h-[360px] w-[360px] rounded-full opacity-[0.05] blur-[100px]"
        style={{ background: 'radial-gradient(circle, #f0d78c 0%, transparent 70%)' }}
      />
    </div>
  )
}
