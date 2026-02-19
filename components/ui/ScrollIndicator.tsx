"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

interface ScrollIndicatorProps {
  /** Target scroll position when clicked. Defaults to window height */
  scrollTarget?: number;
  /** Threshold for hiding indicator when scrolled. Defaults to 50px */
  hideThreshold?: number;
  /** Custom className for styling */
  className?: string;
}

export default function ScrollIndicator({
  scrollTarget,
  hideThreshold = 50,
  className = "",
}: ScrollIndicatorProps) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > hideThreshold) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hideThreshold]);

  const handleClick = () => {
    const target = scrollTarget || window.innerHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  if (!showScrollIndicator) return null;

  return (
    <div onClick={handleClick}>
      <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden">
        <ArrowDown className="size-4 sm:size-5 lg:size-6 text-white animate-scroll-arrow" />
      </div>
    </div>
  );
}
