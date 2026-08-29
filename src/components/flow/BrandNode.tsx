'use client'

import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'
import { ExternalLink } from 'lucide-react'

export type BrandNodeData = {
  name: string
  tagline: string
  description: string
  accent: string
  status: string
  focus: string
  url: string | null
}

function BrandNodeComponent({ data, selected }: NodeProps & { data: BrandNodeData }) {
  return (
    <div
      className={`min-w-[180px] max-w-[220px] rounded-sm glass-panel p-4 transition-all duration-300 ${
        selected ? 'glow-gold scale-105' : 'hover:border-gold/25'
      }`}
      style={{ borderColor: selected ? `${data.accent}55` : undefined }}
    >
      <Handle type="target" position={Position.Top} className="!border-gold/30 !bg-gold/10" />

      <div className="flex items-start justify-between gap-2">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm text-xs font-semibold text-void"
          style={{ backgroundColor: data.accent }}
        >
          {data.name.slice(0, 2).toUpperCase()}
        </div>
        <span className="text-[9px] uppercase tracking-wider text-subtle">{data.status}</span>
      </div>

      <h3 className="mt-3 font-display text-base font-medium text-foreground">{data.name}</h3>
      <p className="mt-0.5 text-[11px] text-muted">{data.tagline}</p>

      {selected && (
        <div className="mt-3 space-y-2 border-t border-white/5 pt-3">
          <p className="text-[11px] leading-relaxed text-muted">{data.description}</p>
          <span className="tag-pill !text-[9px] !py-0.5">{data.focus}</span>
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-1 text-[11px] font-medium transition-colors hover:text-gold"
              style={{ color: data.accent }}
            >
              Visit website
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="!border-gold/30 !bg-gold/10" />
    </div>
  )
}

export const BrandNode = memo(BrandNodeComponent)
