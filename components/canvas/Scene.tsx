'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import BreadModel from './BreadModel';

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <BreadModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
