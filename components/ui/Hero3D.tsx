"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function LuxuryShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(0.85);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.7); // Smaller scale on mobile to prevent cutting off
      } else {
        setScale(1.21); // Increased desktop size by 15%
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#18181b"
          roughness={0.12}
          metalness={0.88}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(1, 0)]} />
          <lineBasicMaterial color="#444444" linewidth={1} />
        </lineSegments>
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.6} color="#c8a84e" />
        
        <LuxuryShape />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
