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
        data: { label: 'Savitrix', sublabel: 'Parent company' } satisfies HubNodeData,
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
          focus: brand.focus,
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
        style: { stroke: '#d4a853', strokeWidth: 1.5, opacity: 0.4 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#d4a853', width: 16, height: 16 },
      })),
    [],
  )

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    if (node.id === 'hub') return
  }, [])

  return (
    <div className="modern-card h-[520px] w-full overflow-hidden md:h-[560px]">
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
        className="rounded-sm"
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1} color="rgba(212,168,83,0.06)" />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={(n) => (n.type === 'hub' ? '#d4a853' : '#8b8fa3')}
          maskColor="rgba(5, 6, 8, 0.85)"
          className="!rounded-sm !border !border-gold/10 !bg-panel/90"
        />
      </ReactFlow>
    </div>
  )
}
