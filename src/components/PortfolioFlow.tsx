'use client'

import { useCallback, useMemo } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  BackgroundVariant,
  MarkerType,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { brands } from '@/lib/brands'
import { BrandNode, type BrandNodeData } from './flow/BrandNode'
import { HubNode, type HubNodeData } from './flow/HubNode'

const nodeTypes = {
  brand: BrandNode,
  hub: HubNode,
}

const positions: Record<string, { x: number; y: number }> = {
  counselca: { x: -220, y: -120 },
  lawnest: { x: 220, y: -120 },
  invoiceflow: { x: -220, y: 120 },
  'venture-4': { x: 220, y: 120 },
}

export function PortfolioFlow() {
  const initialNodes: Node[] = useMemo(
    () => [
      {
        id: 'hub',
        type: 'hub',
        position: { x: 0, y: 0 },
        data: { label: 'Savitrix', sublabel: 'portfolio hub' } satisfies HubNodeData,
        draggable: false,
      },
      ...brands.map((brand) => ({
        id: brand.id,
        type: 'brand' as const,
        position: positions[brand.id] ?? { x: 0, y: 0 },
        data: {
          name: brand.name,
          tagline: brand.tagline,
          description: brand.description,
          accent: brand.accent,
          status: brand.status,
          aiFeature: brand.aiFeature,
          url: brand.url,
        } satisfies BrandNodeData,
      })),
    ],
    [],
  )

  const initialEdges: Edge[] = useMemo(
    () =>
      brands.map((brand) => ({
        id: `hub-${brand.id}`,
        source: 'hub',
        target: brand.id,
        animated: true,
        style: { stroke: brand.accent, strokeWidth: 1.5, opacity: 0.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: brand.accent, width: 16, height: 16 },
      })),
    [],
  )

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.id === 'hub') return
    },
    [],
  )

  return (
    <div className="h-[520px] w-full rounded-2xl border border-cyan/10 bg-deep/50 md:h-[560px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.35 }}
        minZoom={0.5}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
        className="rounded-2xl"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="rgba(34,211,238,0.08)" />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={(n) => (n.type === 'hub' ? '#22d3ee' : '#8b5cf6')}
          maskColor="rgba(2, 6, 23, 0.8)"
          className="!rounded-lg !border !border-cyan/10 !bg-panel/90"
        />
      </ReactFlow>
    </div>
  )
}
