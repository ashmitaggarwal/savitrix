'use client'

export function NeuralBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 grid-neural opacity-60" />
      <div className="absolute inset-0 scanline opacity-30" />

      {/* Ambient orbs */}
      <div
        className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
      />
      <div
        className="absolute -right-32 top-2/3 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
      />
      <div
        className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-10 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #d946ef 0%, transparent 70%)' }}
      />
    </div>
  )
}
