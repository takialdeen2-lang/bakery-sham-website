'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useScroll } from 'framer-motion'
import * as THREE from 'three'

export default function BreadModel() {
  const gltf = useGLTF('/models/bread.glb')
  const breadRef = useRef<THREE.Group>(null)

  const { scrollYProgress } = useScroll()

  useFrame(() => {
    if (!breadRef.current) return

    const scroll = scrollYProgress.get()

    // rotate constantly
    breadRef.current.rotation.y += 0.005

    // scale from 1.5 → 2.5
    const scale = 1.5 + scroll * 1
    breadRef.current.scale.set(scale, scale, scale)

    // fade out
    const opacity = 1 - scroll * 1.5

    breadRef.current.traverse((child: any) => {
      if (child.isMesh) {
        child.material.transparent = true
        child.material.opacity = Math.max(opacity, 0)
      }
    })
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