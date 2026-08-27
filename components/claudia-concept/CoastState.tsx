"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface CoastStateProps {
  progress: number;
}

export default function CoastState({ progress }: CoastStateProps) {
  // Materials for Coast
  const materials = useMemo(() => {
    return {
      mineralBlue: new THREE.MeshStandardMaterial({
        color: "#667D7B", // Muted sea tone
        roughness: 0.75,
        metalness: 0.05,
      }),
      chalkPlaster: new THREE.MeshStandardMaterial({
        color: "#EFEBE1", // Warm chalk
        roughness: 0.9,
        metalness: 0.02,
      }),
      paleOak: new THREE.MeshStandardMaterial({
        color: "#DDD2C1", // Sun-bleached pale wood
        roughness: 0.55,
        metalness: 0.05,
      }),
      wovenLinen: new THREE.MeshStandardMaterial({
        color: "#8FA4A0", // Soft mineral blue-green linen
        roughness: 0.95,
        metalness: 0.01,
      }),
      horizonGradient: new THREE.MeshBasicMaterial({
        color: "#E2ECE9",
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
      }),
    };
  }, []);

  const isDirectCoast = progress >= 0.42 && progress <= 0.65;
  const isComposed = progress >= 0.78 && progress <= 0.95;
  const opacityFactor = isDirectCoast ? 1 : isComposed ? 0.75 : Math.max(0, 1 - Math.abs(progress - 0.53) * 5);

  if (opacityFactor <= 0.01) return null;

  return (
    <group position={[1.4, 0, -4.8]}>
      {/* Low Horizontal Chalk Bench / Daybed Platform */}
      <group position={[0, -1.25, 0]}>
        <mesh castShadow receiveShadow material={materials.chalkPlaster}>
          <boxGeometry args={[3.2, 0.4, 1.1]} />
        </mesh>

        {/* Pale Oak Under-reveal */}
        <mesh position={[0, -0.22, 0]} material={materials.paleOak}>
          <boxGeometry args={[3.0, 0.05, 0.95]} />
        </mesh>

        {/* Textured Mineral Linen Cushion */}
        <mesh position={[-0.4, 0.26, 0]} castShadow receiveShadow material={materials.wovenLinen}>
          <boxGeometry args={[2.0, 0.12, 0.9]} />
        </mesh>

        {/* Architectural Ceramic Bowl */}
        <mesh position={[1.0, 0.28, 0]} castShadow material={materials.mineralBlue}>
          <cylinderGeometry args={[0.22, 0.12, 0.14, 24]} />
        </mesh>
      </group>

      {/* Wide Horizontal Horizon Panel / Light Aperture */}
      <mesh
        position={[0, 0.8, -1.5]}
        receiveShadow
        material={materials.horizonGradient}
      >
        <planeGeometry args={[5.5, 1.8]} />
      </mesh>

      {/* Minimal Pale Louvered Window Fin */}
      <group position={[2.2, 0.6, -0.6]}>
        {[-0.5, 0, 0.5].map((yOffset, i) => (
          <mesh
            key={i}
            position={[0, yOffset, 0]}
            rotation={[0.15, 0, 0]}
            castShadow
            material={materials.paleOak}
          >
            <boxGeometry args={[0.04, 0.2, 1.4]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
