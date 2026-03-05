'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';

export default function BreadModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const { scrollYProgress } = useScroll();

  // Create flour particles
  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const scroll = scrollYProgress.get();
    
    if (meshRef.current) {
      // Rotate based on scroll
      meshRef.current.rotation.y = scroll * Math.PI * 4;
      meshRef.current.rotation.x = scroll * Math.PI;
      
      // Move down and scale down as we scroll
      meshRef.current.position.y = -scroll * 5;
      meshRef.current.scale.setScalar(1 - scroll * 0.8);
      
      // Fade out
      if (meshRef.current.material instanceof THREE.MeshStandardMaterial || 
          meshRef.current.material instanceof THREE.ShaderMaterial) {
        meshRef.current.material.opacity = Math.max(0, 1 - scroll * 2);
      }
    }

    if (particlesRef.current) {
      // Particles become more visible and spread as we scroll
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.position.y = -scroll * 2;
      
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.opacity = scroll > 0.2 ? (scroll - 0.2) * 2 : 0;
      material.size = 0.02 + scroll * 0.05;
    }
  });

  return (
    <group>
      {/* Main Bread Shape (Abstracted as a distorted sphere for now) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color="#D2B48C"
            speed={2}
            distort={0.3}
            radius={1}
            roughness={0.8}
            metalness={0.1}
            transparent
          />
        </Sphere>
      </Float>

      {/* Flour Particles */}
      <Points ref={particlesRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#FFFDD0"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
    </group>
  );
}
