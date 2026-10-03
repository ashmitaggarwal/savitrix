'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const GOLD = new THREE.Color('#d4a853')
const CHAMPAGNE = new THREE.Color('#f0d78c')

function AmbientParticles({ count, frozen }: { count: number; frozen: boolean }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 28
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (frozen || !ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.015
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={CHAMPAGNE}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function CoreGlow({ frozen }: { frozen: boolean }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (frozen || !ref.current) return
    ref.current.rotation.z = state.clock.elapsedTime * 0.12
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04
    ref.current.scale.setScalar(s)
  })

  return (
    <mesh ref={ref} position={[3.5, 1.2, -8]}>
      <torusGeometry args={[2.2, 0.02, 8, 120]} />
      <meshBasicMaterial color={GOLD} transparent opacity={0.22} />
    </mesh>
  )
}

export function SiteBackgroundScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <color attach="background" args={['#050608']} />
      <fog attach="fog" args={['#050608', 8, 32]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 6, 4]} intensity={0.6} color={GOLD} />
      <AmbientParticles count={reducedMotion ? 120 : 320} frozen={reducedMotion} />
      <CoreGlow frozen={reducedMotion} />
    </>
  )
}
