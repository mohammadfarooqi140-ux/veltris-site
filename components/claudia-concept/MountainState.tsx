"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface MountainStateProps {
  progress: number;
}

export default function MountainState({ progress }: MountainStateProps) {
  // Materials for Mountain
  const materials = useMemo(() => {
    return {
      heavyTimber: new THREE.MeshStandardMaterial({
        color: "#4A3B2C", // Rich deep smoked oak
        roughness: 0.65,
        metalness: 0.08,
      }),
      hearthStone: new THREE.MeshStandardMaterial({
        color: "#7D7569", // Warm alpine limestone / schist
        roughness: 0.85,
        metalness: 0.04,
      }),
      agedBrass: new THREE.MeshStandardMaterial({
        color: "#AD9670", // Aged brass
        roughness: 0.35,
        metalness: 0.75,
      }),
      oliveWool: new THREE.MeshStandardMaterial({
        color: "#70785B", // Olive wool / upholstery
        roughness: 0.9,
        metalness: 0.02,
      }),
      hearthGlow: new THREE.MeshBasicMaterial({
        color: "#F6A85B",
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      }),
    };
  }, []);

  const isDirectMountain = progress >= 0.60 && progress <= 0.80;
  const isComposed = progress >= 0.78 && progress <= 0.95;
  const opacityFactor = isDirectMountain ? 1 : isComposed ? 0.75 : Math.max(0, 1 - Math.abs(progress - 0.70) * 5);

  if (opacityFactor <= 0.01) return null;

  return (
    <group position={[0, 0, -5.2]}>
      {/* Heavy Timber Header / Architectural Ceiling Beam */}
      <mesh
        position={[0, 2.3, 0]}
        castShadow
        receiveShadow
        material={materials.heavyTimber}
      >
        <boxGeometry args={[6.8, 0.45, 0.45]} />
      </mesh>

      {/* Recessed Hearth / Warm Stone Chimney Structure */}
      <group position={[0, -0.6, -0.5]}>
        {/* Main Hearth Block */}
        <mesh castShadow receiveShadow material={materials.hearthStone}>
          <boxGeometry args={[2.8, 2.4, 0.6]} />
        </mesh>

        {/* Firebox Niche / Opening */}
        <mesh position={[0, -0.4, 0.15]} material={materials.heavyTimber}>
          <boxGeometry args={[1.2, 0.9, 0.4]} />
        </mesh>

        {/* Hearth Warmth Glow Light Mesh */}
        <mesh position={[0, -0.4, 0.25]} material={materials.hearthGlow}>
          <planeGeometry args={[1.0, 0.7]} />
        </mesh>

        {/* Aged Brass Hearth Inset Trim */}
        <mesh position={[0, 0.1, 0.32]} material={materials.agedBrass}>
          <boxGeometry args={[1.3, 0.04, 0.04]} />
        </mesh>
      </group>

      {/* Olive Wool Seating Block / Deep Shadow Corner */}
      <mesh
        position={[-2.4, -1.2, 0.2]}
        castShadow
        receiveShadow
        material={materials.oliveWool}
      >
        <boxGeometry args={[1.4, 0.55, 1.0]} />
      </mesh>

      {/* Aged Brass Wall Sconce Detail */}
      <group position={[1.8, 0.8, -0.2]}>
        <mesh castShadow material={materials.agedBrass}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
        </mesh>
        <mesh position={[0, 0.3, 0.08]} castShadow material={materials.agedBrass}>
          <cylinderGeometry args={[0.08, 0.04, 0.14, 16]} />
        </mesh>
      </group>
    </group>
  );
}
