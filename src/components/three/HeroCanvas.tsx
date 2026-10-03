'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { HeroScene } from './HeroScene'
import { useReducedMotion3d } from './useReducedMotion3d'

function HeroCanvasInner() {
  const reducedMotion = useReducedMotion3d()

  return (
    <Canvas
      className="!bg-transparent"
      camera={{ position: [0.15, 0.05, 4.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        premultipliedAlpha: false,
      }}
      onCreated={({ gl, scene }) => {
        scene.background = null
        gl.setClearColor(0x000000, 0)
      }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <HeroScene reducedMotion={reducedMotion} />
    </Canvas>
  )
}

export function HeroCanvas() {
  return (
    <div
      className="pointer-events-none absolute inset-0 lg:pointer-events-auto"
      aria-hidden
    >
      <div className="absolute inset-y-0 right-0 w-full lg:left-[38%] lg:w-[62%]">
        <Suspense fallback={null}>
          <HeroCanvasInner />
        </Suspense>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 58% 48%, rgba(212,168,83,0.14) 0%, transparent 62%)',
          }}
        />
      </div>
    </div>
  )
}
