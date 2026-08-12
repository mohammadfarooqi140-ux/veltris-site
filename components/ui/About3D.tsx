"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LuxuryTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.y += 0.012;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1}>
        <torusKnotGeometry args={[1.2, 0.35, 64, 16]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={3}
          thickness={0.8}
          roughness={0.15}
          transmission={0.95}
          ior={1.4}
          chromaticAberration={0.03}
          anisotropy={0.2}
          color="#222222"
          attenuationDistance={2}
          attenuationColor="#ffffff"
        />
      </mesh>
    </Float>
  );
}

export default function About3D() {
  return (
    <div className="w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.6} color="#555555" />
        
        <LuxuryTorus />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
