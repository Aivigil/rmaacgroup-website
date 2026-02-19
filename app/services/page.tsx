"use client";

import { useEffect, useState } from "react";
import { cn } from "@/util/util";
import Navbar from "@/components/ui/Navbar";
import { Italiana } from "next/font/google";
import { ArrowDown } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import ServicesSection from "@/components/services/ServicesSection";
import FAQSection from "@/components/services/FAQSection";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const items: {
  image: string;
  title: string;
}[] = [
  {
    image: "/image/services/slider-1.jpg",
    title: "BRANDING",
  },
  {
    image: "/image/services/slider-2.jpg",
    title: "CONSTRUCTION",
  },
  {
    image: "/image/services/slider-5.jpg",
    title: "IT SOLUTIONS",
  },
  {
    image: "/image/services/slider-4.jpg",
    title: "DIGITAL MARKETING",
  },
  {
    image: "/image/services/slider-3.jpg",
    title: "APP DEVELOPMENT",
  },
  {
    image: "/image/services/slider-6.png",
    title: "CONSULTING",
  },
];

export default function Services() {
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
            <source src="/video/services-bg.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#17181b] to-transparent z-10"></div>

        {/* Navbar positioned with higher z-index */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full -mt-24 sm:-mt-16 lg:-mt-20">
          {/* Large animated "OUR SERVICES" text */}
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
                SERVICES
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

      <section className="flex flex-col antialiased items-center justify-center relative overflow-hidden bg-transparent">
        <InfiniteMovingCards items={items} direction="left" speed="fast" />
      </section>

      <section className="flex flex-col antialiased items-center justify-center relative overflow-hidden bg-transparent">
        <ServicesSection />
      </section>

      <section className="bg-gradient-to-b from-[#0f1114] to-[#17181b] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2
              className={cn(
                "text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white"
              )}
            >
              Shaping Success{" "}
              <span className={italiana.className}>Together</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl mt-5">
              We aim to build more than just projects; we build opportunities,
              trust, and long-term success for our cients
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 sm:gap-y-6 lg:gap-8 bg-black py-10 sm:py-12 lg:py-12 h-auto lg:h-[400px] px-6 sm:px-10 lg:px-14">
            {[
              {
                title: ".Excellence",
                description:
                  "We strive to exceed expectations by combining expertise, innovation, and attention",
              },
              {
                title: ".Partnerships",
                description:
                  "Our goal is to build trusted relationships with clients by delivering consistent value",
              },
              {
                title: ".Growth",
                description:
                  "We focus on solutions that will create a solid foundation for future success",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative text-center lg:text-left h-auto min-h-[180px] flex flex-col py-4 sm:py-6"
              >
                <div className="h-[60px] sm:h-[80px] flex items-center justify-center lg:justify-start mt-10">
                  <h3
                    className={cn(
                      "text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white"
                    )}
                  >
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base mt-2 sm:mt-4 px-4 lg:px-0 lg:pr-8">
                  {step.description}
                </p>
                {/* Vertical line separator for desktop */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-[300px] bg-white mr-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
