"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AnimatedImageSequenceProps {
  imageUrls: string[];
  altText: string;
  transitionDuration?: number; // in milliseconds
  displayDuration?: number; // in milliseconds
  transitionDelay?: number; // in milliseconds
  className?: string;
  imageClassName?: string;
}

export default function AnimatedImageSequence({
  imageUrls,
  altText,
  transitionDuration = 800, // default 0.8s
  displayDuration = 3500, // default 3.5s
  transitionDelay = 200, // default 0.2s
  className = "",
  imageClassName = "",
}: AnimatedImageSequenceProps) {
  const [animationActive, setAnimationActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimationActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animationActive || imageUrls.length <= 1) return;

    // Cycle through the images with transitions
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, displayDuration);

    return () => clearInterval(interval);
  }, [animationActive, displayDuration, imageUrls.length]);

  // If no image URLs provided, return null
  if (!imageUrls.length) return null;

  // If only one image, just display it without animation
  if (imageUrls.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative w-full h-full">
          <Image
            src={imageUrls[0]}
            alt={altText}
            fill
            className={`object-cover ${imageClassName}`}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden relative ${className}`}>
      {imageUrls.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute w-full h-full ${
            animationActive
              ? index === currentImageIndex
                ? "opacity-100 scale-100"
                : index === (currentImageIndex - 1 + imageUrls.length) % imageUrls.length
                ? "opacity-0 scale-100" // Previous image fades out and slightly scales down
                : "opacity-0 scale-100" // Next image waits slightly scaled up
              : index === 0
              ? "opacity-100 scale-100"
              : "opacity-0 scale-100"
          }`}
          style={{
            transition: `all ${transitionDuration / 1000}s ease-in-out`,
            transitionDelay: index === currentImageIndex ? `${transitionDelay}ms` : "0ms",
          }}
        >
          <Image
            src={imageUrl}
            alt={`${altText} ${index + 1}`}
            fill
            className={`object-cover ${imageClassName}`}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
        </div>
      ))}
    </div>
  );
}