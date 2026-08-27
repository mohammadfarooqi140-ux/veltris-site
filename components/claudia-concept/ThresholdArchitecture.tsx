"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ThresholdArchitectureProps {
  progress: number;
}

export default function ThresholdArchitecture({ progress }: ThresholdArchitectureProps) {
  const curtainMeshRef = useRef<THREE.Mesh>(null);
  const lightPlaneRef = useRef<THREE.Mesh>(null);

  // Subtle wave motion for linen curtain/screen
  useFrame((state) => {
    if (curtainMeshRef.current) {
      const time = state.clock.elapsedTime;
      curtainMeshRef.current.rotation.y = Math.sin(time * 0.8) * 0.03;
      curtainMeshRef.current.position.x = -1.6 + Math.sin(time * 0.5) * 0.02;
    }
    if (lightPlaneRef.current) {
      // Light beam opacity shifts with progress
      const mat = lightPlaneRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, progress > 0.05 && progress < 0.35 ? 0.25 : 0.08, 0.05);
      }
    }
  });

  // Materials
  const materials = useMemo(() => {
    return {
      chalkWall: new THREE.MeshStandardMaterial({
        color: "#E9E4DA",
        roughness: 0.85,
        metalness: 0.02,
      }),
      stoneThreshold: new THREE.MeshStandardMaterial({
        color: "#D8CFBE",
        roughness: 0.7,
        metalness: 0.05,
      }),
      woodFloor: new THREE.MeshStandardMaterial({
        color: "#C8BBA7",
        roughness: 0.6,
        metalness: 0.08,
      }),
      darkTimber: new THREE.MeshStandardMaterial({
        color: "#332E28",
        roughness: 0.5,
        metalness: 0.1,
      }),
      linenScreen: new THREE.MeshPhysicalMaterial({
        color: "#F5F1E9",
        roughness: 0.9,
        transmission: 0.45,
        thickness: 0.1,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
      }),
      lightBeam: new THREE.MeshBasicMaterial({
        color: "#FFFDF2",
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      }),
    };
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {/* Floor Plane */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.8, -4]}
        receiveShadow
        material={materials.woodFloor}
      >
        <planeGeometry args={[24, 28]} />
      </mesh>

      {/* Primary Threshold Frame (Stone Portal) */}
      <group position={[0, 0, -2]}>
        {/* Left Stone Pillar */}
        <mesh position={[-2.4, 0.6, 0]} castShadow receiveShadow material={materials.stoneThreshold}>
          <boxGeometry args={[0.45, 4.8, 0.6]} />
        </mesh>

        {/* Right Stone Pillar */}
        <mesh position={[2.4, 0.6, 0]} castShadow receiveShadow material={materials.stoneThreshold}>
          <boxGeometry args={[0.45, 4.8, 0.6]} />
        </mesh>

        {/* Top Stone Lintel / Beam */}
        <mesh position={[0, 2.9, 0]} castShadow receiveShadow material={materials.stoneThreshold}>
          <boxGeometry args={[5.25, 0.4, 0.6]} />
        </mesh>

        {/* Base Stone Plinth */}
        <mesh position={[0, -1.75, 0]} castShadow receiveShadow material={materials.stoneThreshold}>
          <boxGeometry args={[5.25, 0.1, 0.8]} />
        </mesh>
      </group>

      {/* Back Wall with Architectural Openings */}
      <group position={[0, 0, -8]}>
        {/* Left Back Wall */}
        <mesh position={[-4.5, 0.5, 0]} receiveShadow material={materials.chalkWall}>
          <boxGeometry args={[4, 5, 0.2]} />
        </mesh>

        {/* Right Back Wall */}
        <mesh position={[4.5, 0.5, 0]} receiveShadow material={materials.chalkWall}>
          <boxGeometry args={[4, 5, 0.2]} />
        </mesh>

        {/* Top Header Beam */}
        <mesh position={[0, 2.5, 0]} receiveShadow material={materials.chalkWall}>
          <boxGeometry args={[5, 1, 0.2]} />
        </mesh>
      </group>

      {/* Linen Screen / Architectural Curtain (Responding gently) */}
      <mesh
        ref={curtainMeshRef}
        position={[-1.6, 0.5, -3.2]}
        material={materials.linenScreen}
      >
        <planeGeometry args={[1.6, 4.2]} />
      </mesh>

      {/* Plane of Light crossing the floor */}
      <mesh
        ref={lightPlaneRef}
        rotation={[-Math.PI / 2 + 0.05, 0.25, -0.4]}
        position={[0.8, -1.78, -3.5]}
        material={materials.lightBeam}
      >
        <planeGeometry args={[3.2, 7]} />
      </mesh>

      {/* Left Wall Framing Plane */}
      <mesh position={[-5.5, 0.5, -1]} rotation={[0, Math.PI / 2, 0]} receiveShadow material={materials.chalkWall}>
        <boxGeometry args={[12, 5, 0.2]} />
      </mesh>

      {/* Right Wall Framing Plane */}
      <mesh position={[5.5, 0.5, -1]} rotation={[0, -Math.PI / 2, 0]} receiveShadow material={materials.chalkWall}>
        <boxGeometry args={[12, 5, 0.2]} />
      </mesh>
    </group>
  );
}
