'use client'

const items = [
  'CounselCA',
  'LawNest',
  'InvoiceFlow',
  'Vertical SaaS',
  'AI-native',
  'Legal tech',
  'Professional services',
  'Savitrix Limited',
  'Semantic search',
  'Agentic workflows',
  'Long-term ownership',
]

export function AIMarquee() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-cyan/10 bg-deep/40 py-4">
      <div className="animate-marquee flex w-max gap-8">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-muted/60"
          >
            {item}
            <span className="ml-8 text-cyan/30">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
