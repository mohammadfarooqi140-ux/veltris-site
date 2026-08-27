"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import SceneLighting from "./SceneLighting";
import ThresholdArchitecture from "./ThresholdArchitecture";
import CityState from "./CityState";
import CoastState from "./CoastState";
import MountainState from "./MountainState";
import MaterialStudies from "./MaterialStudies";

interface NarrativeSceneProps {
  progress: number;
}

export default function NarrativeScene({ progress }: NarrativeSceneProps) {
  const { camera } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(0, 0, -2));
  const targetCamPos = useRef(new THREE.Vector3(0, 0.4, 4.5));
  const targetLookAt = useRef(new THREE.Vector3(0, 0.1, -2));

  useFrame(() => {
    // 1. Calculate target camera position and target lookAt based on progress (0 to 1)
    if (progress <= 0.14) {
      // Scene 1: The Threshold (0.00 - 0.14)
      const t = progress / 0.14;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(0, 0, t),
        THREE.MathUtils.lerp(0.4, 0.2, t),
        THREE.MathUtils.lerp(4.5, 2.2, t)
      );
      targetLookAt.current.set(0, 0.1, -2);
    } else if (progress <= 0.28) {
      // Scene 2: The Point of View (0.14 - 0.28)
      const t = (progress - 0.14) / 0.14;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(0, -0.4, t),
        THREE.MathUtils.lerp(0.2, 0.05, t),
        THREE.MathUtils.lerp(2.2, 0.2, t)
      );
      targetLookAt.current.set(
        THREE.MathUtils.lerp(0, 0.3, t),
        0.0,
        THREE.MathUtils.lerp(-2, -4.5, t)
      );
    } else if (progress <= 0.45) {
      // Scene 3: City (0.28 - 0.45)
      const t = (progress - 0.28) / 0.17;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(-0.4, -1.3, t),
        THREE.MathUtils.lerp(0.05, 0.25, t),
        THREE.MathUtils.lerp(0.2, -1.8, t)
      );
      targetLookAt.current.set(
        THREE.MathUtils.lerp(0.3, -1.0, t),
        -0.1,
        THREE.MathUtils.lerp(-4.5, -5.0, t)
      );
    } else if (progress <= 0.62) {
      // Scene 4: Coast (0.45 - 0.62)
      const t = (progress - 0.45) / 0.17;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(-1.3, 1.4, t),
        THREE.MathUtils.lerp(0.25, 0.35, t),
        THREE.MathUtils.lerp(-1.8, -2.0, t)
      );
      targetLookAt.current.set(
        THREE.MathUtils.lerp(-1.0, 1.2, t),
        0.0,
        THREE.MathUtils.lerp(-5.0, -5.2, t)
      );
    } else if (progress <= 0.78) {
      // Scene 5: Mountain (0.62 - 0.78)
      const t = (progress - 0.62) / 0.16;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(1.4, 0.0, t),
        THREE.MathUtils.lerp(0.35, -0.3, t),
        THREE.MathUtils.lerp(-2.0, -2.4, t)
      );
      targetLookAt.current.set(
        THREE.MathUtils.lerp(1.2, 0.0, t),
        -0.3,
        THREE.MathUtils.lerp(-5.2, -5.5, t)
      );
    } else if (progress <= 0.90) {
      // Scene 6 & 7: Material Library & Composed Home (0.78 - 0.90)
      const t = (progress - 0.78) / 0.12;
      targetCamPos.current.set(
        THREE.MathUtils.lerp(0.0, 0.0, t),
        THREE.MathUtils.lerp(-0.3, 0.25, t),
        THREE.MathUtils.lerp(-2.4, 0.8, t)
      );
      targetLookAt.current.set(0, 0.0, -4.5);
    } else {
      // Scene 8: Enquiry (0.90 - 1.00)
      const t = (progress - 0.90) / 0.10;
      targetCamPos.current.set(
        0,
        THREE.MathUtils.lerp(0.25, 0.4, t),
        THREE.MathUtils.lerp(0.8, 2.0, t)
      );
      targetLookAt.current.set(0, 0.0, -3.5);
    }

    // 2. Smoothly lerp camera position with calm damping
    camera.position.lerp(targetCamPos.current, 0.05);

    // 3. Smoothly lerp camera lookAt vector
    currentLookAt.current.lerp(targetLookAt.current, 0.05);
    camera.lookAt(currentLookAt.current);
  });

  return (
    <>
      <SceneLighting progress={progress} />
      <ThresholdArchitecture progress={progress} />
      <CityState progress={progress} />
      <CoastState progress={progress} />
      <MountainState progress={progress} />
      <MaterialStudies progress={progress} />
    </>
  );
}
