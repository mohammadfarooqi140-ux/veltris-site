"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MaterialStudiesProps {
  progress: number;
}

export default function MaterialStudies({ progress }: MaterialStudiesProps) {
  const groupRef = useRef<THREE.Group>(null);

  const materials = useMemo(() => {
    return {
      honedStone: new THREE.MeshStandardMaterial({
        color: "#D5CEBF", // Honed limestone
        roughness: 0.5,
        metalness: 0.05,
      }),
      flutedTimber: new THREE.MeshStandardMaterial({
        color: "#68533F", // Smoked tactile oak
        roughness: 0.55,
        metalness: 0.08,
      }),
      drapedLinen: new THREE.MeshPhysicalMaterial({
        color: "#F2EDE4", // Raw natural linen
        roughness: 0.92,
        transmission: 0.35,
        thickness: 0.15,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      }),
    };
  }, []);

  useFrame((state) => {
    if (groupRef.current && progress >= 0.75 && progress <= 0.92) {
      // Gentle floating rotation to appreciate tactile light interaction
      const time = state.clock.elapsedTime;
      groupRef.current.position.y = Math.sin(time * 0.7) * 0.04;
    }
  });

  const isMaterialScene = progress >= 0.74 && progress <= 0.92;
  if (!isMaterialScene) return null;

  return (
    <group ref={groupRef} position={[0, 0.1, -3.2]}>
      {/* 1. Stone Moment: Honed limestone block */}
      <group position={[-1.8, 0, 0]}>
        <mesh castShadow receiveShadow material={materials.honedStone}>
          <boxGeometry args={[1.1, 1.4, 0.7]} />
        </mesh>
        <mesh position={[0, -0.8, 0]} receiveShadow material={materials.honedStone}>
          <cylinderGeometry args={[0.65, 0.7, 0.2, 32]} />
        </mesh>
      </group>

      {/* 2. Timber Moment: Tactile fluted oak block */}
      <group position={[0, 0.2, 0.2]}>
        <mesh castShadow receiveShadow material={materials.flutedTimber}>
          <cylinderGeometry args={[0.45, 0.45, 1.6, 32]} />
        </mesh>
      </group>

      {/* 3. Linen Moment: Translucent linen draped plane */}
      <group position={[1.8, 0, 0]}>
        <mesh castShadow receiveShadow material={materials.drapedLinen} rotation={[0, -0.3, 0]}>
          <planeGeometry args={[1.2, 1.7]} />
        </mesh>
      </group>
    </group>
  );
}
