"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Model({ scrollProgress }: { scrollProgress: number }) {
  const { scene } = useGLTF("/img_alf/base_basic_pbr.glb");
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (group.current) {
      // Rotate based on scroll progress only
      group.current.rotation.y = scrollProgress * Math.PI * 4;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} scale={2.2} position={[0, -0.3, 0]} />
    </group>
  );
}

useGLTF.preload("/img_alf/base_basic_pbr.glb");

function Scene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} />
      <Model scrollProgress={scrollProgress} />
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.3}
        scale={4}
        blur={2}
      />
    </>
  );
}

export default function Alfajor3D({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <div className="w-full h-full">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-oro/30 border-t-oro animate-spin" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 1.5, 4], fov: 40 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene scrollProgress={scrollProgress} />
        </Canvas>
      </Suspense>
    </div>
  );
}
