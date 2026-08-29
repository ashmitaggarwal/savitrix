'use client'

import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'

export type PipelineNodeData = {
  label: string
  description: string
  step: number
}

function PipelineNodeComponent({ data, selected }: NodeProps & { data: PipelineNodeData }) {
  return (
    <div
      className={`w-[160px] rounded-xl glass-panel p-4 transition-all ${
        selected ? 'border-cyan/40 glow-cyan' : 'hover:border-cyan/25'
      }`}
    >
      <Handle type="target" position={Position.Left} className="!border-violet/40 !bg-violet/20" />
      <Handle type="source" position={Position.Right} className="!border-cyan/40 !bg-cyan/20" />

      <span className="font-mono text-[10px] text-cyan/60">0{data.step}</span>
      <h4 className="mt-1 text-sm font-semibold text-foreground">{data.label}</h4>
      <p className="mt-2 text-[10px] leading-relaxed text-muted">{data.description}</p>
    </div>
  )
}

export const PipelineNode = memo(PipelineNodeComponent)
