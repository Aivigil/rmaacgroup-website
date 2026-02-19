"use client";

import { PlayIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface AnimatedTextSequenceProps {
  textItems: string[];
  transitionDuration?: number; // in milliseconds
  displayDuration?: number; // in milliseconds
  transitionDelay?: number; // in milliseconds
  className?: string;
  textClassName?: string;
}

export default function AnimatedTextSequence({
  textItems,
  transitionDuration = 800, // default 0.8s
  displayDuration = 3500, // default 3.5s
  transitionDelay = 200, // default 0.2s
  className = "",
  textClassName = "",
}: AnimatedTextSequenceProps) {
  const [animationActive, setAnimationActive] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimationActive(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animationActive || textItems.length <= 1) return;

    // Cycle through the texts with fast transitions but longer display time
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, displayDuration);

    return () => clearInterval(interval);
  }, [animationActive, displayDuration, textItems.length]);

  // If no text items provided, return null
  if (!textItems.length) return null;

  // If only one text item, just display it without animation
  if (textItems.length === 1) {
    return (
      <div className={`relative ${className}`}>
        <div className={`${textClassName}`}>{textItems[0]}</div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden relative ${className}`}>
      {textItems.map((text, index) => (
        <div
          key={index}
          className={`absolute w-full ${textClassName} ${
            animationActive
              ? index === currentTextIndex
                ? "translate-y-0 opacity-100"
                : index ===
                  (currentTextIndex - 1 + textItems.length) % textItems.length
                ? "-translate-y-full opacity-0" // Previous text moves up and fades out
                : "translate-y-full opacity-0" // Next text waits below
              : index === 0
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
          style={{
            transition: `all ${transitionDuration / 1000}s ease-in-out`,
            transitionDelay:
              index === currentTextIndex ? `${transitionDelay}ms` : "0ms",
          }}
        >
          <div className="flex items-center space-x-3">
            <PlayIcon className="size-4 mt-1 fill-white" /> 
            <h1>{text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
