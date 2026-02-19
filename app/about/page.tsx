"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import { ArrowDown, Play } from "lucide-react";
import { Italiana } from "next/font/google";
import { cn } from "@/util/util";
import StatsSection from "@/components/home/StatsSection";
import ReasonsSection from "@/components/about/ReasonsSection";
import CEOSection from "@/components/about/CEOSection";
import TeamSection from "@/components/about/TeamSection";
import ImpactSection from "@/components/home/ImpactSection";
import ExEmployeesTestimonials from "@/components/about/ExEmployeesTestimonials";
import TrustedBySection from "@/components/about/TrustedBySection";
import LegacyBrandSection from "@/components/about/LegacyBrandSection";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function About() {
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

    // Handle anchor scrolling from navigation
    const handleAnchorScroll = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleAnchorScroll();

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
          {/* Large animated "ABOUT RMAAC" text */}
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
              <span className={italiana.className}>ABOUT</span>
              <span className={cn(italiana.className, "ml-2 sm:ml-4 lg:ml-8")}>
                RMAAC
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
              {/* <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden backdrop-blur-sm"> */}
              <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden">
                <ArrowDown className="size-4 sm:size-5 lg:size-6 text-white animate-scroll-arrow" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* About content sections */}
      <section className="bg-gradient-to-b from-[#0f1114] to-[#17181b] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2
                  className={cn(
                    italiana.className,
                    "text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 lg:mb-8 italiana-bold"
                  )}
                >
                  A DIVERSIFIED
                  <br />
                  <span className={cn(italiana.className)}>GROUP OF </span>
                  <span className={cn(italiana.className)}>COMPANIES</span>
                </h2>
              </div>

              <div>
                <p className="text-sm sm:text-base text-gray-300">
                  We are a diversified group specializing in construction,
                  investment, planning, digital marketing, and IT services. Our
                  expertise drives business growth, resource optimization, and
                  expanding partnerships across industries.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-2xl">
                <img
                  src="/image/about/about.png"
                  alt="Office workspace with team collaboration"
                  className="object-cover filter grayscale transition-all duration-700 ease-in-out hover:filter-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section className="bg-[#17181b] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-start lg:ml-10 order-2 lg:order-1">
              <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg transition-all duration-700 ease-in-out hover:scale-110 hover:shadow-2xl">
                <img
                  src="/image/about/about-us.jpg"
                  alt="Modern office interior with team workspace"
                  width={568}
                  height={563}
                  className="w-full h-full object-cover filter grayscale transition-all duration-700 ease-in-out hover:filter-none cursor-pointer"
                />
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="space-y-6 sm:space-y-8 lg:mr-10 order-1 lg:order-2">
              <div>
                <p className="text-2xl sm:text-lg text-white mb-2 sm:mb-4 lg:mb-3 ">
                  From Foundation to Future - A Legacy of Vision
                </p>
                <p className=" text-sm sm:text-base text-gray-300 mb-6 sm:mb-4 lg:mb-6">
                  We are builders at heart - whether its smart communities,
                  meaningful health services, or intelligent software
                </p>
                <h2
                  className={cn(
                    italiana.className,
                    "text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 lg:mb-8 italiana-bold"
                  )}
                >
                  ABOUT <span className={cn(italiana.className)}>US</span>
                </h2>
              </div>

              <div>
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                  RMAAC Group was founded with the belief that great companies
                  are built by combining long-term vision with execution
                  excellence. Our portfolio spans industries — yet every venture
                  shares a common thread: impact, innovation, and sustainable
                  growth. With strategic investments across real estate, private
                  healthcare, Al automation, and mobile technologies, we lead
                  with integrity and build with purpose.
                </p>
              </div>

              {/* Watch Presentation Button */}
              <div>
                <button className="flex items-center space-x-3 sm:space-x-4 group">
                  <div className="size-12 sm:size-14 lg:size-16 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
                    <Play
                      className="size-4 sm:size-5 lg:size-6 text-white"
                      fill="white"
                    />
                  </div>
                  <h1 className="text-white text-sm sm:text-base lg:text-lg font-medium group-hover:text-gray-300 transition-colors duration-300">
                    WATCH PRESENTATION
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <LegacyBrandSection />

      {/* Stats Section */}
      {/* <div className="mt-20 max-w-7xl mx-auto px-4">
        <StatsSection />
      </div> */}

      {/* Reasons Section */}
      <div>
        <ReasonsSection />
      </div>

      {/* CEO Section */}
      <CEOSection />

      {/* Team Section */}
      {/* <TeamSection /> */}

      {/* Impact Section */}
      <ImpactSection />    

      {/* Ex Employees Testimonials */}
      <ExEmployeesTestimonials />

      {/* Trusted By Section */}
      {/* <TrustedBySection /> */}
    </div>
  );
}
