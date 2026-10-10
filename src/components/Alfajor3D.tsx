"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, PresentationControls, Float } from "@react-three/drei";
import * as THREE from "three";

function Model(props: any) {
  const { scene } = useGLTF("/img_alf/base_basic_pbr.glb");
  const group = useRef<THREE.Group>(null);
  
  // Continuous rotation even when not scrolling
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.5; // continuous spin
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={2.5} position={[0, -0.5, 0]} />
    </group>
  );
}

// Preload the model
useGLTF.preload("/img_alf/base_basic_pbr.glb");

export default function Alfajor3D() {
  return (
    <div className="w-full h-full relative z-20">
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Model />
          </PresentationControls>
        </Float>
      </Canvas>
    </div>
  );
}
