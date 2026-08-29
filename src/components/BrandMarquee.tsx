'use client'

const items = [
  'Savitrix Limited',
  'CounselCA',
  'LawNest',
  'InvoiceFlow',
  'Legal Services',
  'Business Operations',
  'Vertical Software',
  'Professional Services',
  'Long-term Ownership',
  'Portfolio Stewardship',
]

export function BrandMarquee() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-gold/10 bg-deep/30 py-5">
      <div className="animate-marquee flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap editorial-caption !text-muted/50"
          >
            {item}
            <span className="ml-12 text-gold/20">—</span>
          </span>
        ))}
      </div>
    </div>
  )
}
