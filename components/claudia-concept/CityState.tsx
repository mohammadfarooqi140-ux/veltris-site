"use client";

import { useMemo } from "react";
import * as THREE from "three";

interface CityStateProps {
  progress: number;
}

export default function CityState({ progress }: CityStateProps) {
  // Materials for City
  const materials = useMemo(() => {
    return {
      darkOak: new THREE.MeshStandardMaterial({
        color: "#292925", // Soft charcoal / deep timber
        roughness: 0.45,
        metalness: 0.15,
      }),
      honedPietra: new THREE.MeshStandardMaterial({
        color: "#4A463F", // Deep umber stone
        roughness: 0.4,
        metalness: 0.1,
      }),
      oxbloodDetail: new THREE.MeshStandardMaterial({
        color: "#6B3F3D", // Oxblood accent
        roughness: 0.25,
        metalness: 0.3,
      }),
      flutedGlass: new THREE.MeshPhysicalMaterial({
        color: "#D9D6CE",
        roughness: 0.2,
        transmission: 0.7,
        thickness: 0.2,
        transparent: true,
        opacity: 0.65,
      }),
    };
  }, []);

  // Compute visibility / transformation based on progress
  // Active during City section (0.28 - 0.45) and present in composed home (0.80 - 0.95)
  const isDirectCity = progress >= 0.25 && progress <= 0.48;
  const isComposed = progress >= 0.78 && progress <= 0.95;
  const opacityFactor = isDirectCity ? 1 : isComposed ? 0.75 : Math.max(0, 1 - Math.abs(progress - 0.35) * 5);

  if (opacityFactor <= 0.01) return null;

  return (
    <group position={[-1.2, 0, -4.5]}>
      {/* Tall Urban Vertical Architectural Slats (Dark Timber Screen) */}
      <group position={[-1.5, 0.4, 0]}>
        {[-0.45, -0.15, 0.15, 0.45].map((xOffset, i) => (
          <mesh
            key={i}
            position={[xOffset, 0, 0]}
            castShadow
            receiveShadow
            material={materials.darkOak}
          >
            <boxGeometry args={[0.08, 4.2, 0.35]} />
          </mesh>
        ))}
      </group>

      {/* Monolithic Honed Dark Stone Plinth / Console */}
      <group position={[0.6, -1.15, 0.4]}>
        <mesh castShadow receiveShadow material={materials.honedPietra}>
          <boxGeometry args={[2.2, 0.65, 0.75]} />
        </mesh>

        {/* Oxblood Lacquer Accent Inset Line */}
        <mesh position={[0, 0.33, 0.38]} material={materials.oxbloodDetail}>
          <boxGeometry args={[2.1, 0.025, 0.02]} />
        </mesh>

        {/* Sculptural Vessel on Plinth */}
        <mesh position={[0.5, 0.55, 0]} castShadow material={materials.darkOak}>
          <cylinderGeometry args={[0.16, 0.1, 0.42, 24]} />
        </mesh>
      </group>

      {/* Tall Linear Translucent Screen Frame */}
      <mesh position={[2.1, 0.5, -0.3]} receiveShadow material={materials.flutedGlass}>
        <boxGeometry args={[0.9, 3.8, 0.04]} />
      </mesh>
    </group>
  );
}
