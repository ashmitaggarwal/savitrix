'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { SiteBackgroundScene } from './SiteBackgroundScene'
import { useReducedMotion3d } from './useReducedMotion3d'

function SiteBackgroundInner() {
  const reducedMotion = useReducedMotion3d()

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <SiteBackgroundScene reducedMotion={reducedMotion} />
    </Canvas>
  )
}

const SiteBackgroundCanvasClient = dynamic(
  () => Promise.resolve({ default: SiteBackgroundInner }),
  { ssr: false },
)

export function SiteBackgroundCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-void" />
      <Suspense fallback={null}>
        <SiteBackgroundCanvasClient />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />
      <div className="absolute inset-0 grid-subtle opacity-30" />
    </div>
  )
}
