"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface CanvasSequenceViewerProps {
  scrollProgress: number; // 0 to 1
}

const TOTAL_FRAMES = 720; // 4 sequences * 180 frames

// Helper to get image path for a frame index (0 to 719)
export function getFramePath(index: number): string {
  const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(index)));
  const seqNum = Math.floor(clamped / 180) + 1;
  const frameNum = (clamped % 180) + 1;
  const padded = String(frameNum).padStart(3, "0");
  return `/assets/sequence${seqNum}/ezgif-frame-${padded}.jpg`;
}

export default function CanvasSequenceViewer({ scrollProgress }: CanvasSequenceViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedCountRef = useRef<number>(0);
  const lastDrawnIndexRef = useRef<number>(-1);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener("change", handler);
    return () => motionQuery.removeEventListener("change", handler);
  }, []);

  // Deterministic Canvas Draw Function with "object-cover" math
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Find requested frame or nearest loaded frame
    let imgToDraw: HTMLImageElement | null = imagesRef.current[frameIdx];
    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      // Search outward for closest loaded frame to avoid blank flash
      for (let offset = 1; offset < 30; offset++) {
        const prev = imagesRef.current[frameIdx - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          imgToDraw = prev;
          break;
        }
        const next = imagesRef.current[frameIdx + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          imgToDraw = next;
          break;
        }
      }
    }

    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      return;
    }

    lastDrawnIndexRef.current = frameIdx;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = imgToDraw.naturalWidth;
    const imgHeight = imgToDraw.naturalHeight;

    // Object-cover calculations
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(imgToDraw, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Handle Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Re-draw current frame
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(scrollProgress * (TOTAL_FRAMES - 1))));
      drawFrame(targetFrame);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollProgress, drawFrame]);

  // Sequential Progressive Preloading Engine
  useEffect(() => {
    if (isReducedMotion) return;

    let isCancelled = false;

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]) {
          resolve(imagesRef.current[index]!);
          return;
        }
        const img = new window.Image();
        img.src = getFramePath(index);
        img.onload = () => {
          if (!isCancelled) {
            imagesRef.current[index] = img;
            loadedCountRef.current += 1;
            const pct = Math.round((loadedCountRef.current / TOTAL_FRAMES) * 100);
            setLoadingProgress(pct);

            // Once sequence 1 (first 180 frames) or first 60 frames are ready, enable interactive view
            if (loadedCountRef.current >= 45 && !isInitialReady) {
              setIsInitialReady(true);
            }
          }
          resolve(img);
        };
        img.onerror = () => {
          resolve(img);
        };
      });
    };

    // Load in batches: Sequence 1 prioritized, then 2, 3, 4
    const startSequentialPreload = async () => {
      // 1. Initial critical frame
      await loadSingleImage(0);
      drawFrame(0);

      // 2. Load Sequence 1 (0 to 179) with high concurrency
      const batchSize = 12;
      for (let i = 0; i < 180; i += batchSize) {
        if (isCancelled) return;
        const batch: Promise<HTMLImageElement>[] = [];
        for (let j = i; j < Math.min(i + batchSize, 180); j++) {
          batch.push(loadSingleImage(j));
        }
        await Promise.all(batch);
      }
      setIsInitialReady(true);

      // 3. Load Sequence 2, 3, 4 (180 to 719) sequentially in background
      for (let i = 180; i < TOTAL_FRAMES; i += batchSize) {
        if (isCancelled) return;
        const batch: Promise<HTMLImageElement>[] = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadSingleImage(j));
        }
        await Promise.all(batch);
      }

      if (!isCancelled) {
        setIsFullyLoaded(true);
      }
    };

    startSequentialPreload();

    return () => {
      isCancelled = true;
    };
  }, [isReducedMotion, drawFrame, isInitialReady]);

  // RequestAnimationFrame Paint Loop linked to scrollProgress
  useEffect(() => {
    if (isReducedMotion) return;

    let rafId: number;
    const targetFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(scrollProgress * (TOTAL_FRAMES - 1)))
    );

    const renderLoop = () => {
      if (lastDrawnIndexRef.current !== targetFrame) {
        drawFrame(targetFrame);
      }
    };

    rafId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(rafId);
  }, [scrollProgress, drawFrame, isReducedMotion]);

  // Static Fallback for reduced-motion or mobile non-canvas
  if (isReducedMotion) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#F5F1E9]">
        <Image
          src="/assets/sequence1/ezgif-frame-001.jpg"
          alt="Claudia Dorsch Architectural Interior Concept"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#F5F1E9]/10 pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#F5F1E9]">
      {/* HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Elegant Minimal Preloading Progress Overlay */}
      {!isFullyLoaded && (
        <div className="absolute top-6 right-6 z-30 pointer-events-none flex items-center gap-3 bg-[#E9E4DA]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#332E28]/15 shadow-sm transition-opacity duration-500">
          <div className="w-2 h-2 rounded-full bg-[#70785B] animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#332E28]/80 uppercase font-semibold">
            {isInitialReady ? `Caching Spatial Model ${loadingProgress}%` : `Initializing Architecture ${loadingProgress}%`}
          </span>
        </div>
      )}

      {/* Ambient Vignette & Warm Tint */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#F5F1E9]/40 via-transparent to-[#F5F1E9]/20" />
    </div>
  );
}
