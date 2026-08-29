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
      className={`relative flex h-28 w-28 flex-col items-center justify-center rounded-2xl glass-panel transition-all ${
        selected ? 'glow-cyan' : ''
      }`}
    >
      <Handle type="target" position={Position.Top} className="!opacity-0" />
      <Handle type="source" position={Position.Bottom} className="!opacity-0" />
      <Handle type="source" position={Position.Left} className="!opacity-0" id="left" />
      <Handle type="source" position={Position.Right} className="!opacity-0" id="right" />

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/10 via-violet/5 to-transparent" />

      <span className="relative font-display text-3xl font-bold text-gradient-cyan">S</span>
      <span className="relative mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan/70">
        Savitrix
      </span>

      {!selected && (
        <span className="absolute -bottom-6 whitespace-nowrap font-mono text-[9px] text-subtle">
          portfolio hub
        </span>
      )}
    </div>
  )
}

export const HubNode = memo(HubNodeComponent)
