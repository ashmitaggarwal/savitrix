'use client'

import { useMemo } from 'react'
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  BackgroundVariant,
  MarkerType,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { pipelineStages } from '@/lib/brands'
import { PipelineNode, type PipelineNodeData } from './flow/PipelineNode'

const nodeTypes = { pipeline: PipelineNode }

export function BuildPipeline() {
  const initialNodes: Node[] = useMemo(
    () =>
      pipelineStages.map((stage, i) => ({
        id: stage.id,
        type: 'pipeline',
        position: { x: i * 200, y: 0 },
        data: {
          label: stage.label,
          description: stage.description,
          step: i + 1,
        } satisfies PipelineNodeData,
        draggable: false,
      })),
    [],
  )

  const initialEdges: Edge[] = useMemo(
    () =>
      pipelineStages.slice(0, -1).map((stage, i) => ({
        id: `${stage.id}-${pipelineStages[i + 1].id}`,
        source: stage.id,
        target: pipelineStages[i + 1].id,
        animated: true,
        style: { stroke: '#22d3ee', strokeWidth: 2, opacity: 0.6 },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#22d3ee', width: 18, height: 18 },
      })),
    [],
  )

  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="h-[220px] w-full overflow-x-auto rounded-2xl border border-violet/10 bg-deep/50">
      <div className="h-full min-w-[900px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={true}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Lines} gap={24} color="rgba(139,92,246,0.06)" />
        </ReactFlow>
      </div>
    </div>
  )
}
