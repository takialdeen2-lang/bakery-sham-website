'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

export default function BreadModel() {
  const meshRef = useRef<THREE.Object3D>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { scrollYProgress } = useScroll();

  // Load the real 3D bread model
  const { scene } = useGLTF('/models/bread.glb');

  // Flour particles
  const particleCount = 1200;
  const positions = new Float32Array(particleCount * 3).map(() => (Math.random() - 0.5) * 10);

  useFrame(() => {
    const scroll = scrollYProgress.get();

    if (meshRef.current) {
      // Rotate slowly on scroll
      meshRef.current.rotation.y = scroll * Math.PI * 2;
      meshRef.current.position.y = -scroll * 0.5;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.opacity = scroll > 0.2 ? (scroll - 0.2) * 2 : 0;
      material.size = 0.02 + scroll * 0.05;
    }
  });

  return (
    <group>
      {/* Real 3D Bread */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        <primitive ref={meshRef} object={scene} scale={2} rotation={[0.2, 0, 0]} />
      </Float>

      {/* Flour particles */}
      <Points ref={particlesRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#FFFDD0"
          size={0.05}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Lights */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
    </group>
  );
}
