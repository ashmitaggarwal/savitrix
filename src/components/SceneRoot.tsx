'use client'

import { SiteBackgroundCanvas } from '@/components/three/SiteBackgroundCanvas'
import { ScrollProgress } from '@/components/ScrollProgress'

export function SceneRoot() {
  return (
    <>
      <SiteBackgroundCanvas />
      <ScrollProgress />
    </>
  )
}
