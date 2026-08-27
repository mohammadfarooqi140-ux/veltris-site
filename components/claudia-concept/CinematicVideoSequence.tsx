"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CinematicVideoSequenceProps {
  progress: number;
}

const clips = [
  {
    id: "threshold-city",
    src: "/media/claudia-concept/01-threshold-to-city.mp4",
    range: [0.0, 0.25],
    fallbackImg: "/media/claudia-concept/fallback/00-threshold.jpg",
    nextImg: "/media/claudia-concept/fallback/01-city.jpg",
  },
  {
    id: "city-coast",
    src: "/media/claudia-concept/02-city-to-coast.mp4",
    range: [0.25, 0.5],
    fallbackImg: "/media/claudia-concept/fallback/01-city.jpg",
    nextImg: "/media/claudia-concept/fallback/02-coast.jpg",
  },
  {
    id: "coast-mountain",
    src: "/media/claudia-concept/03-coast-to-mountain.mp4",
    range: [0.5, 0.75],
    fallbackImg: "/media/claudia-concept/fallback/02-coast.jpg",
    nextImg: "/media/claudia-concept/fallback/03-mountain.jpg",
  },
  {
    id: "mountain-composed",
    src: "/media/claudia-concept/04-mountain-to-composed.mp4",
    range: [0.75, 1.0],
    fallbackImg: "/media/claudia-concept/fallback/03-mountain.jpg",
    nextImg: "/media/claudia-concept/fallback/04-composed-home.jpg",
  },
];

const fallbackImages = [
  { name: "Threshold", src: "/media/claudia-concept/fallback/00-threshold.jpg", range: [0.0, 0.2] },
  { name: "City", src: "/media/claudia-concept/fallback/01-city.jpg", range: [0.2, 0.4] },
  { name: "Coast", src: "/media/claudia-concept/fallback/02-coast.jpg", range: [0.4, 0.6] },
  { name: "Mountain", src: "/media/claudia-concept/fallback/03-mountain.jpg", range: [0.6, 0.8] },
  { name: "Composed Home", src: "/media/claudia-concept/fallback/04-composed-home.jpg", range: [0.8, 1.0] },
];

export default function CinematicVideoSequence({ progress }: CinematicVideoSequenceProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [useFallback, setUseFallback] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<boolean[]>([false, false, false, false]);
  const rafId = useRef<number | null>(null);

  // Check for prefers-reduced-motion or mobile
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isSmallScreen = window.innerWidth < 768;

    if (motionQuery.matches || isSmallScreen) {
      setUseFallback(true);
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) setUseFallback(true);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Update video currentTime based on scroll progress
  useEffect(() => {
    if (useFallback) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      clips.forEach((clip, index) => {
        const video = videoRefs.current[index];
        if (!video || !video.duration || isNaN(video.duration)) return;

        const [start, end] = clip.range;
        const localProgress = Math.min(Math.max((progress - start) / (end - start), 0), 1);
        const targetTime = localProgress * video.duration;

        // Only seek if difference is noticeable to avoid excessive seek thrashing
        if (Math.abs(video.currentTime - targetTime) > 0.04) {
          video.currentTime = targetTime;
        }
      });
    });

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [progress, useFallback]);

  // Compute opacities with smooth crossfade at boundaries
  const getClipOpacity = (index: number) => {
    const [start, end] = clips[index].range;
    const fadeWindow = 0.03; // Seamless transition window

    if (progress < start - fadeWindow || progress > end + fadeWindow) {
      return 0;
    }
    if (progress >= start && progress <= end) {
      return 1;
    }
    if (progress < start) {
      return Math.max(0, (progress - (start - fadeWindow)) / fadeWindow);
    }
    if (progress > end) {
      return Math.max(0, ((end + fadeWindow) - progress) / fadeWindow);
    }
    return 0;
  };

  // Fallback mode for mobile / reduced motion / video fallback
  if (useFallback) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#F5F1E9]">
        {fallbackImages.map((img, idx) => {
          const [start, end] = img.range;
          const isActive = progress >= start && progress <= end;
          return (
            <div
              key={img.name}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={`Claudia Dorsch Concept Study - ${img.name}`}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-[#F5F1E9]/15 pointer-events-none" />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#F5F1E9]">
      {/* Base poster underlay to prevent white/blank flashing during initial buffer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/media/claudia-concept/fallback/00-threshold.jpg"
          alt="Architectural Threshold Concept"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#F5F1E9]/10 pointer-events-none" />
      </div>

      {/* 4 Multi-layered silent video tracks */}
      {clips.map((clip, index) => {
        const opacity = getClipOpacity(index);
        return (
          <video
            key={clip.id}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={clip.src}
            muted
            playsInline
            preload="auto"
            onError={() => setUseFallback(true)}
            onLoadedData={() => {
              setLoadedVideos((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 pointer-events-none select-none"
            style={{
              opacity,
              zIndex: opacity > 0 ? 10 + index : 0,
            }}
          />
        );
      })}

      {/* Soft warm vignette & subtle architectural grade */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-t from-[#F5F1E9]/30 via-transparent to-[#F5F1E9]/20" />
    </div>
  );
}
