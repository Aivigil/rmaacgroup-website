"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/util/util";
import Image from "next/image";

export const InfiniteMovingCardsCompany = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    title: string;
    hoverImage: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items multiple times to ensure seamless scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Add one more set of duplicates for extra safety
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div ref={containerRef} className={cn("scroller relative", className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4 items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={`relative max-w-full shrink-0 overflow-hidden cursor-pointer transition-all duration-300 ease-in-out ${
              hoveredIndex === idx
                ? "w-[370px] z-10 rounded-2xl"
                : "w-[320px] z-0"
            }`}
            key={`${item.title}-${idx}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`relative flex items-center justify-center transition-all duration-300 ease-in-out ${
                hoveredIndex === idx
                  ? "h-[430px] bg-white/95 rounded-2xl"
                  : "h-[380px]"
              }`}
            >
              {/* Logo container */}
              <div
                className={`relative w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
                  hoveredIndex === idx ? "scale-110 p-8" : "scale-100"
                }`}
              >
                <div className="relative flex-1 w-full flex items-center justify-center">
                  <Image
                    src={hoveredIndex === idx ? item.hoverImage : item.image}
                    alt={item.title}
                    fill
                    className="object-contain transition-all duration-300 ease-in-out"
                  />
                </div>
                {hoveredIndex === idx && (
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
