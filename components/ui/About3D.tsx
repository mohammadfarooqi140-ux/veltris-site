"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LuxuryTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={0.75}>
        <torusKnotGeometry args={[1.0, 0.3, 64, 16]} />
        <meshPhysicalMaterial
          color="#18181b"
          roughness={0.15}
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function About3D() {
  return (
    <div className="w-full h-full pointer-events-none z-0 overflow-visible flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={0.8} color="#c8a84e" />
        
        <LuxuryTorus />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
