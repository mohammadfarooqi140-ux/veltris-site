"use client";

import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import NarrativeScene from "./NarrativeScene";
import ConceptFallback from "./ConceptFallback";

interface ConceptNarrativeCanvasProps {
  progress: number;
}

export default function ConceptNarrativeCanvas({ progress }: ConceptNarrativeCanvasProps) {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // 1. Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleMotionChange);

    // 2. Check for WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // During SSR or initial mount
  if (hasWebGL === false || prefersReducedMotion) {
    return <ConceptFallback />;
  }

  return (
    <div className="w-full h-full relative">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-[#F5F1E9]">
            <div className="text-xs font-mono tracking-widest text-[#70785B] uppercase animate-pulse">
              Calibrating Interior Architecture…
            </div>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0.4, 4.5], fov: 42, near: 0.1, far: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 1.5]}
          shadows
          className="w-full h-full"
        >
          <NarrativeScene progress={progress} />
        </Canvas>
      </Suspense>
    </div>
  );
}
