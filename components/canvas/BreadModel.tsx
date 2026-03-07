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

  // constant spin
  breadRef.current.rotation.y += 0.005

  // tilt upward
 breadRef.current.rotation.x += (scroll * 1.2 - breadRef.current.rotation.x) * 0.08

  // scale bigger
  const scale = 1.5 + scroll * 1
  breadRef.current.scale.set(scale, scale, scale)
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