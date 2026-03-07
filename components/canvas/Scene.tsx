'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import BreadModel from './BreadModel'

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 5]} />
          <BreadModel />
        </Suspense>
      </Canvas>
    </div>
  )
  )
}