"use client";

import { useEffect, useState } from "react";
import { cn } from "@/util/util";
import Navbar from "@/components/ui/Navbar";
import { Italiana } from "next/font/google";
import { ArrowDown } from "lucide-react";
import CaseStudyShowcase from "@/components/portfolio/CaseStudyShowcase";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Portfolio() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimationActive(true);
    }, 500);

    // Hide scroll indicator when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white relative overflow-hidden">
      {/* Hero section with video background */}
      <div className="relative h-screen">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/about-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Navbar positioned with higher z-index */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full -mt-24 sm:-mt-16 lg:-mt-20">
          {/* Large animated "OUR PORTFOLIO" text */}
          <div className="overflow-hidden h-20 sm:h-24 md:h-32 lg:h-48 flex items-center justify-center px-4">
            <h1
              className={`text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[150px] 2xl:text-[170px] transition-transform duration-1500 ease-in-out ${
                animationActive ? "translate-y-0" : "translate-y-full"
              }`}
              style={{
                animation: animationActive
                  ? "fade-in-up-out 3s infinite"
                  : "none",
              }}
            >
              <span className={italiana.className}>OUR</span>
              <span className={cn(italiana.className, "ml-2 sm:ml-4 lg:ml-8")}>
                PORTFOLIO
              </span>
            </h1>
          </div>

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div
              className="absolute bottom-48 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden">
              {/* <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden backdrop-blur-sm"> */}
                <ArrowDown className="size-4 sm:size-5 lg:size-6 text-white animate-scroll-arrow" />
              </div>
            </div>
          )}
        </div>
      </div>

      <CaseStudyShowcase />
    </div>
  );
}
