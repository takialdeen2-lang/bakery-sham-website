'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function BreadModel() {
  const gltf = useGLTF('/models/bread.glb')
  const breadRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (breadRef.current) {
      breadRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <primitive
      ref={breadRef}
      object={gltf.scene}
      scale={1.5}
      position={[0, 0, 0]}
    />
  )
}

useGLTF.preload('/models/bread.glb')