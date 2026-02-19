"use client";

import { useState } from "react";
import { Italiana } from "next/font/google";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import AnimatedText from "./AnimatedText";
import VideoBackground from "./VideoBackground";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const HeroSection = () => {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleVideoClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsVideoExpanded(true);
      setIsTransitioning(false);
    }, 300);
  };

  const handleCloseExpandedVideo = () => {
    setIsTransitioning(true);
    setIsVideoExpanded(false);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const handleSectionClick = (e: React.MouseEvent) => {
    if (isVideoExpanded && !isTransitioning) {
      handleCloseExpandedVideo();
    }
  };

  return (
    <section className="min-h-screen relative" onClick={handleSectionClick}>
      {/* Background Image - Full section including navbar */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-500 ${
          isVideoExpanded ? "opacity-0 scale-110" : "opacity-100 scale-100"
        }`}
      >
        <Image
          src="/image/layer-image.jpg"
          alt="Background texture"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#17181b] to-transparent z-10"></div>
      </div>

      {/* Video Background - appears when expanded */}
      <div className="absolute inset-0 z-0">
        {/* Large background video (bg-video.mp4) */}
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Bottom gradient overlay for video background */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#17181b] to-transparent z-10"></div>
      </div>

      {/* Navbar positioned with higher z-index */}
      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative z-10 min-h-screen flex items-center -mt-12 sm:-mt-16 lg:-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative z-20 px-4 sm:px-8 lg:ml-20 text-center lg:text-left">
              <div
                className={`${italiana.className} text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-[150px] 2xl:text-[170px] font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16`}
              >
                POWERING
              </div>
              <div>
                <AnimatedText />
              </div>
            </div>

            {/* <div className={`flex justify-center lg:justify-end relative z-10 transition-all duration-500 px-4 sm:px-8 ${
              isVideoExpanded ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'
            }`}>
              <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <VideoBackground 
                  onClick={handleVideoClick}
                  isExpandable={!isVideoExpanded && !isTransitioning}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
