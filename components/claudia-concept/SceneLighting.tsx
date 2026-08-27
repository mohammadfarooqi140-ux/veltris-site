"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SceneLightingProps {
  progress: number;
}

export default function SceneLighting({ progress }: SceneLightingProps) {
  const dirLightRef = useRef<THREE.DirectionalLight>(null);
  const fillLightRef = useRef<THREE.DirectionalLight>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);

  // Target color and position values based on scene progress
  useFrame(() => {
    if (!dirLightRef.current || !fillLightRef.current || !ambientLightRef.current) return;

    let targetSunColor = new THREE.Color("#FFF8EE");
    let targetSunIntensity = 2.0;
    let targetSunPos = [6, 8, 4];

    let targetFillColor = new THREE.Color("#E2DFD2");
    let targetFillIntensity = 0.6;

    let targetAmbientColor = new THREE.Color("#F5F1E9");
    let targetAmbientIntensity = 0.8;

    if (progress < 0.14) {
      // Scene 1: The Threshold (Quiet morning daylight)
      targetSunColor.set("#FFF6E5");
      targetSunIntensity = 1.8;
      targetSunPos = [5, 7, 3];
      targetFillColor.set("#E5DFD3");
      targetAmbientColor.set("#F5F1E9");
      targetAmbientIntensity = 0.85;
    } else if (progress < 0.28) {
      // Scene 2: Point of View (Linen light beam, soft architectural illumination)
      targetSunColor.set("#FFF9EE");
      targetSunIntensity = 2.2;
      targetSunPos = [7, 6, 2];
      targetFillColor.set("#DCD5C5");
      targetAmbientColor.set("#F0EAE0");
      targetAmbientIntensity = 0.8;
    } else if (progress < 0.45) {
      // Scene 3: City (Sharper directional light, deeper contrast, controlled shadows)
      targetSunColor.set("#FFFDF7");
      targetSunIntensity = 2.6;
      targetSunPos = [4, 9, 2];
      targetFillColor.set("#C5BDB0");
      targetFillIntensity = 0.4;
      targetAmbientColor.set("#E6DFD5");
      targetAmbientIntensity = 0.7;
    } else if (progress < 0.62) {
      // Scene 4: Coast (Airy diffused daylight, horizon gradient, mineral blue bounce)
      targetSunColor.set("#F8FAFC");
      targetSunIntensity = 2.4;
      targetSunPos = [8, 5, 5];
      targetFillColor.set("#8FA4A0"); // Mineral blue fill
      targetFillIntensity = 0.85;
      targetAmbientColor.set("#EBF1F0");
      targetAmbientIntensity = 0.95;
    } else if (progress < 0.78) {
      // Scene 5: Mountain (Warm hearth amber, heavy timber shadows, sheltered comfort)
      targetSunColor.set("#F6D8A8"); // Warm amber/gold
      targetSunIntensity = 1.9;
      targetSunPos = [3, 4, 3];
      targetFillColor.set("#70785B"); // Olive fill
      targetFillIntensity = 0.5;
      targetAmbientColor.set("#EDE4D4");
      targetAmbientIntensity = 0.75;
    } else if (progress < 0.90) {
      // Scene 6 & 7: Material Library & Composed Home (Rich balanced gallery lighting)
      targetSunColor.set("#FFF5E4");
      targetSunIntensity = 2.1;
      targetSunPos = [6, 7, 4];
      targetFillColor.set("#C8BBA7");
      targetFillIntensity = 0.7;
      targetAmbientColor.set("#F5F1E9");
      targetAmbientIntensity = 0.85;
    } else {
      // Scene 8: Enquiry (Calm, resting warm paper glow)
      targetSunColor.set("#FFF7EA");
      targetSunIntensity = 1.7;
      targetSunPos = [5, 6, 4];
      targetFillColor.set("#DDD5C7");
      targetFillIntensity = 0.6;
      targetAmbientColor.set("#F5F1E9");
      targetAmbientIntensity = 0.85;
    }

    // Lerp colors & intensities smoothly
    dirLightRef.current.color.lerp(targetSunColor, 0.08);
    dirLightRef.current.intensity = THREE.MathUtils.lerp(dirLightRef.current.intensity, targetSunIntensity, 0.08);
    dirLightRef.current.position.x = THREE.MathUtils.lerp(dirLightRef.current.position.x, targetSunPos[0], 0.05);
    dirLightRef.current.position.y = THREE.MathUtils.lerp(dirLightRef.current.position.y, targetSunPos[1], 0.05);
    dirLightRef.current.position.z = THREE.MathUtils.lerp(dirLightRef.current.position.z, targetSunPos[2], 0.05);

    fillLightRef.current.color.lerp(targetFillColor, 0.08);
    fillLightRef.current.intensity = THREE.MathUtils.lerp(fillLightRef.current.intensity, targetFillIntensity, 0.08);

    ambientLightRef.current.color.lerp(targetAmbientColor, 0.08);
    ambientLightRef.current.intensity = THREE.MathUtils.lerp(ambientLightRef.current.intensity, targetAmbientIntensity, 0.08);
  });

  return (
    <>
      <ambientLight ref={ambientLightRef} intensity={0.85} color="#F5F1E9" />
      <directionalLight
        ref={dirLightRef}
        position={[6, 8, 4]}
        intensity={2.0}
        color="#FFF6E5"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />
      <directionalLight
        ref={fillLightRef}
        position={[-6, -2, -3]}
        intensity={0.6}
        color="#E5DFD3"
      />
    </>
  );
}
