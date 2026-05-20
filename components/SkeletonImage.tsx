"use client";

import { useState } from "react";

type SkeletonImageProps = {
  src: string;
  alt?: string;
  className?: string;
  bgColor?: string; // hex background for skeleton
};

export default function SkeletonImage({ src, alt = "", className = "", bgColor = "#0a0a0a" }: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${className}`}>
      {/* Image element */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-200 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
      {/* Skeleton overlay */}
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: bgColor }}
        ></div>
      )}
    </div>
  );
}
