'use client'

import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type HubNodeData = {
  label: string
  sublabel: string
}

function HubNodeComponent({ selected }: NodeProps & { data: HubNodeData }) {
  return (
    <div
      className={`relative flex h-28 w-28 flex-col items-center justify-center rounded-sm glass-panel transition-all ${
        selected ? 'glow-gold' : ''
      }`}
    >
      <Handle type="target" position={Position.Top} className="!opacity-0" />
      <Handle type="source" position={Position.Bottom} className="!opacity-0" />
      <Handle type="source" position={Position.Left} className="!opacity-0" id="left" />
      <Handle type="source" position={Position.Right} className="!opacity-0" id="right" />

      <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-gold/10 to-transparent" />

      <span className="relative font-display text-3xl font-semibold text-gold-light">S</span>
      <span className="relative mt-1 text-[9px] uppercase tracking-[0.25em] text-gold/60">
        Savitrix
      </span>

      {!selected && (
        <span className="absolute -bottom-6 whitespace-nowrap text-[9px] uppercase tracking-wider text-subtle">
          Parent co.
        </span>
      )}
    </div>
  )
}

export const HubNode = memo(HubNodeComponent)
