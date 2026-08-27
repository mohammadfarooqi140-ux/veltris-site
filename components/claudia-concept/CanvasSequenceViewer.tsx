"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const TOTAL_FRAMES = 720; // 4 sequences * 180 frames

export function getFramePath(index: number): string {
  const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(index)));
  const seqNum = Math.floor(clamped / 180) + 1;
  const frameNum = (clamped % 180) + 1;
  const padded = String(frameNum).padStart(3, "0");
  return `/assets/sequence${seqNum}/ezgif-frame-${padded}.jpg`;
}

interface CanvasSequenceViewerProps {
  onLoadComplete?: () => void;
}

export default function CanvasSequenceViewer({ onLoadComplete }: CanvasSequenceViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // 1. Mutable Image Array Cache (Bypassing React state entirely)
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnIndexRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const isTickingRef = useRef<boolean>(false);
  const isReadyRef = useRef<boolean>(false);

  // HUD Direct DOM refs for zero-render HUD updates
  const hudFrameTextRef = useRef<HTMLSpanElement | null>(null);
  const hudSectionTextRef = useRef<HTMLSpanElement | null>(null);
  const hudProgressBarRef = useRef<HTMLDivElement | null>(null);

  // React state ONLY for initial loading gate
  const [loadPercentage, setLoadPercentage] = useState<number>(0);
  const [isCached, setIsCached] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener("change", handler);
    return () => motionQuery.removeEventListener("change", handler);
  }, []);

  // 2. Hardware Accelerated Draw Function with Object-Cover Math
  const renderFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Fast 2D context with GPU offloading and zero alpha blending
    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    lastDrawnIndexRef.current = frameIdx;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Object-cover calculations
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const drawX = (canvasWidth - drawWidth) * 0.5;
    const drawY = (canvasHeight - drawHeight) * 0.5;

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // 3. Direct DOM HUD updater without React state changes
  const updateHUD = useCallback((progress: number, frameIdx: number) => {
    if (hudFrameTextRef.current) {
      hudFrameTextRef.current.textContent = `Frame ${String(frameIdx + 1).padStart(3, "0")} / 720`;
    }
    if (hudProgressBarRef.current) {
      hudProgressBarRef.current.style.width = `${Math.round(progress * 100)}%`;
    }
    if (hudSectionTextRef.current) {
      hudSectionTextRef.current.textContent =
        progress < 0.25
          ? "01 / Threshold"
          : progress < 0.50
          ? "02 / City"
          : progress < 0.75
          ? "03 / Coast"
          : "04 / Composed Home";
    }
  }, []);

  // 4. RequestAnimationFrame Scroll Throttler (Skipping intermediate frames during fast scroll)
  const onScrollTick = useCallback(() => {
    if (!isReadyRef.current) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;
    const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1))));

    // Skip if frame has not changed
    if (targetFrame !== lastDrawnIndexRef.current) {
      renderFrame(targetFrame);
      updateHUD(progress, targetFrame);
    }

    isTickingRef.current = false;
  }, [renderFrame, updateHUD]);

  // Handle Resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    if (isReadyRef.current) {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1))));
      renderFrame(targetFrame);
    }
  }, [renderFrame]);

  // 5. Strict Caching Blockade: Preload all 720 frames into RAM before unlocking
  useEffect(() => {
    if (isReducedMotion) return;

    let isCancelled = false;
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const updateProgressThrottled = () => {
      if (isCancelled) return;
      const pct = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
      setLoadPercentage(pct);
    };

    // Load a single frame into memory
    const loadFrame = (idx: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = getFramePath(idx);
        img.onload = () => {
          if (!isCancelled) {
            preloadedImages[idx] = img;
            loadedCount++;
            if (loadedCount % 12 === 0 || loadedCount === TOTAL_FRAMES) {
              updateProgressThrottled();
            }
          }
          resolve();
        };
        img.onerror = () => {
          if (!isCancelled) {
            loadedCount++;
            if (loadedCount % 12 === 0 || loadedCount === TOTAL_FRAMES) {
              updateProgressThrottled();
            }
          }
          resolve();
        };
      });
    };

    // Preload in high-throughput concurrent chunks
    const preloadAllFrames = async () => {
      const batchSize = 32;
      for (let i = 0; i < TOTAL_FRAMES; i += batchSize) {
        if (isCancelled) return;
        const batch: Promise<void>[] = [];
        for (let j = i; j < Math.min(i + batchSize, TOTAL_FRAMES); j++) {
          batch.push(loadFrame(j));
        }
        await Promise.all(batch);
      }

      if (!isCancelled) {
        imagesRef.current = preloadedImages;
        isReadyRef.current = true;
        setIsCached(true);
        setLoadPercentage(100);

        // Initial setup and draw
        handleResize();
        renderFrame(0);
        updateHUD(0, 0);

        if (onLoadComplete) {
          onLoadComplete();
        }
      }
    };

    preloadAllFrames();

    return () => {
      isCancelled = true;
    };
  }, [isReducedMotion, handleResize, renderFrame, updateHUD, onLoadComplete]);

  // 6. Native Scroll Listener (Bypassing React updates)
  useEffect(() => {
    if (isReducedMotion) return;

    const handleScroll = () => {
      if (!isTickingRef.current) {
        isTickingRef.current = true;
        rafIdRef.current = requestAnimationFrame(onScrollTick);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isReducedMotion, onScrollTick, handleResize]);

  // Static Fallback for reduced motion
  if (isReducedMotion) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#F5F1E9]">
        <Image
          src="/assets/sequence1/ezgif-frame-001.jpg"
          alt="Claudia Dorsch Interior Design Concept Still"
          fill
          priority
          className="object-cover object-center will-change-transform transform-gpu"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#F5F1E9]/10 pointer-events-none" />
      </div>
    );
  }

  return (
    <>
      {/* 7. Loading Barrier Gate: Locked until 100% (720/720) cached into RAM */}
      {!isCached && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F1E9] text-[#332E28] p-6 transition-opacity duration-700">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#70785B] uppercase font-bold block">
                VELTRIS CONCEPT STUDY 01
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-medium tracking-tight text-[#332E28]">
                Caching Spatial Journey
              </h2>
              <p className="text-xs font-light text-[#332E28]/70 leading-relaxed max-w-sm mx-auto">
                Preloading 720 architectural frames into browser memory for zero-latency scroll navigation.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-[#E9E4DA] rounded-full overflow-hidden border border-[#332E28]/10">
                <div
                  className="h-full bg-[#70785B] transition-all duration-150 ease-out"
                  style={{ width: `${loadPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-[#332E28]/60">
                <span>RAM Cache Status</span>
                <span className="font-semibold text-[#332E28]">{loadPercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. Hardware-Accelerated Isolated Paint Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover select-none pointer-events-none will-change-transform transform-gpu"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Floating Spatial HUD updated directly via DOM refs */}
      <div className="fixed bottom-8 left-6 sm:left-10 z-30 pointer-events-auto hidden md:flex items-center gap-4 bg-[#E9E4DA]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#332E28]/15 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#70785B] animate-pulse" />
          <span
            ref={hudSectionTextRef}
            className="text-[10px] font-mono tracking-[0.2em] text-[#70785B] uppercase font-semibold"
          >
            01 / Threshold
          </span>
        </div>

        <span className="text-[10px] font-mono text-[#332E28]/50">|</span>

        <span
          ref={hudFrameTextRef}
          className="text-[10px] font-mono text-[#332E28]/70"
        >
          Frame 001 / 720
        </span>

        <div className="w-16 h-1 bg-[#332E28]/15 rounded-full overflow-hidden">
          <div
            ref={hudProgressBarRef}
            className="h-full bg-[#70785B] transition-all duration-75"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#F5F1E9]/40 via-transparent to-[#F5F1E9]/20" />
    </>
  );
}
