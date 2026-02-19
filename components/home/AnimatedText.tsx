"use client";

import { useState, useEffect } from "react";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const AnimatedText = () => {
  const textArray = ["GROWTH", "INNOVATION", "SUCCESS"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animState, setAnimState] = useState<
    | "hidden"
    | "comingFromTopToBottom"
    | "comingFromBottomRightToTopLeft"
    | "comingFromBottomLeftToTopRight"
  >("hidden");

  useEffect(() => {
    let enterTimeout: NodeJS.Timeout;
    let visibleTimeout: NodeJS.Timeout;
    let exitTimeout: NodeJS.Timeout;

    const runAnimation = () => {
      // Start hidden
      setAnimState("hidden");
      setTimeout(() => {
        // Slide in from bottom with scale
        setAnimState("comingFromTopToBottom");
        enterTimeout = setTimeout(() => {
          // Stay visible
          setAnimState("comingFromBottomRightToTopLeft");
          visibleTimeout = setTimeout(() => {
            // Exit with fade and slight upward movement
            setAnimState("comingFromBottomLeftToTopRight");
            exitTimeout = setTimeout(() => {
              // Next text
              setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
              runAnimation();
            }, 500);
          }, 1400);
        }, 1700);
      }, 100);
    };

    runAnimation();
    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(visibleTimeout);
      clearTimeout(exitTimeout);
    };
  }, [textArray.length]);

  const variantClasses: Record<string, string> = {
    hidden: "opacity-0 blur-sm",
    comingFromTopToBottom: "opacity-100 translate-y-[-40%] blur-0", // Start above, animate down
    comingFromBottomRightToTopLeft:
      "opacity-0 translate-x-10 -translate-y-10 blur-0", // top left
    comingFromBottomLeftToTopRight:
      "opacity-0 -translate-x-10 -translate-y-10 blur-0", // top right
  };

  const getTransitionClass = () => {
    switch (animState) {
      case "comingFromTopToBottom":
        return "transition-all duration-800 ease-out transform";
      case "comingFromBottomLeftToTopRight":
        return "transition-all duration-600 ease-in transform";
      case "comingFromBottomRightToTopLeft":
        return "transition-all duration-300 ease-out transform";
      default:
        return "";
    }
  };

  return (
    <div className="relative h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40">
      <div
        className={`absolute inset-0 ${
          italiana.className
        } ${getTransitionClass()} ${
          variantClasses[animState]
        } text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-[150px] 2xl:text-[170px] font-light will-change-transform`}
        style={{
          filter:
            animState === "comingFromTopToBottom"
              ? "blur(0px)"
              : animState === "hidden"
              ? "blur(2px)"
              : "blur(0px)",
          transition:
            animState === "comingFromTopToBottom"
              ? "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.8s ease-out"
              : undefined,
        }}
      >
        {textArray[currentTextIndex]}
      </div>
    </div>
  );
};

export default AnimatedText;
