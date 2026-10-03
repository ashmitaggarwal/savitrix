'use client'

import type { ReactNode } from 'react'
import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Line } from '@react-three/drei'
import * as THREE from 'three'
import { brands } from '@/lib/brands'

const GOLD = '#d4a853'
const HUB = new THREE.Vector3(0, 0, 0)

const orbitBrands = brands.slice(0, 4)

function BrandOrb({
  accent,
  angle,
  radius,
  frozen,
}: {
  accent: string
  angle: number
  radius: number
  frozen: boolean
}) {
  const ref = useRef<THREE.Mesh>(null)
  const base = useMemo(() => new THREE.Vector3(), [])

  useFrame((state) => {
    if (!ref.current) return
    const t = frozen ? 0 : state.clock.elapsedTime * 0.35
    const a = angle + t
    base.set(Math.cos(a) * radius, Math.sin(a * 0.7) * 0.55, Math.sin(a) * radius * 0.65)
    ref.current.position.lerp(base, frozen ? 1 : 0.08)
  })

  return (
    <Float speed={frozen ? 0 : 1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.14, 32, 32]} />
        <meshStandardMaterial
          color={accent}
          emissive={accent}
          emissiveIntensity={0.85}
          roughness={0.25}
          metalness={0.6}
        />
      </mesh>
    </Float>
  )
}

function HubCore({ frozen }: { frozen: boolean }) {
  const outer = useRef<THREE.Mesh>(null)
  const inner = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (frozen) return
    const t = state.clock.elapsedTime
    if (outer.current) outer.current.rotation.y = t * 0.25
    if (inner.current) inner.current.rotation.x = t * 0.18
  })

  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial
          color={GOLD}
          wireframe
          emissive={GOLD}
          emissiveIntensity={0.35}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh ref={inner}>
        <octahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color="#f0d78c"
          emissive="#d4a853"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>
    </group>
  )
}

function ConnectionLines({ frozen }: { frozen: boolean }) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (frozen || !group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <group ref={group}>
      {orbitBrands.map((brand, i) => {
        const angle = (i / orbitBrands.length) * Math.PI * 2
        const radius = 1.85
        const end = new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 0.7) * 0.55,
          Math.sin(angle) * radius * 0.65,
        )
        return (
          <Line
            key={brand.id}
            points={[HUB, end]}
            color={brand.accent}
            lineWidth={1}
            transparent
            opacity={0.45}
          />
        )
      })}
    </group>
  )
}

function MouseParallax({
  frozen,
  children,
}: {
  frozen: boolean
  children: ReactNode
}) {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  useFrame(() => {
    if (frozen || !group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.35, 0.04)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.2, 0.04)
  })

  return <group ref={group}>{children}</group>
}

function HeroParticles({ count, frozen }: { count: number; frozen: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (frozen || !ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.05
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#e8dcc8" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

export function HeroScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[2, 3, 4]} intensity={1.2} color={GOLD} />
      <pointLight position={[-3, -1, 2]} intensity={0.4} color="#2dd4bf" />
      <HeroParticles count={reducedMotion ? 80 : 200} frozen={reducedMotion} />
      <group position={[0.35, 0, 0]}>
        <MouseParallax frozen={reducedMotion}>
          <>
            <ConnectionLines frozen={reducedMotion} />
            <HubCore frozen={reducedMotion} />
            {orbitBrands.map((brand, i) => (
              <BrandOrb
                key={brand.id}
                accent={brand.accent}
                angle={(i / orbitBrands.length) * Math.PI * 2}
                radius={1.85}
                frozen={reducedMotion}
              />
            ))}
          </>
        </MouseParallax>
      </group>
    </>
  )
}
