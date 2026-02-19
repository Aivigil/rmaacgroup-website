"use client";

import { Italiana } from "next/font/google";
import Image from "next/image";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ImpactSection = () => {
  const impactImages = [
    {
      src: "/image/about/impact/1-1.jpg",
      alt: "Impact Image 1",
    },
    {
      src: "/image/about/impact/2-2.jpg",
      alt: "Impact Image 2",
    },
    {
      src: "/image/about/impact/3-3.png",
      alt: "Impact Image 3",
    },
    {
      src: "/image/about/impact/4-4.jpg",
      alt: "Impact Image 4",
    },
  ];

  return (
    <section className="bg-[#17181b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center justify-center">
          <h2
            className={cn(
              italiana.className,
              "text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 text-center italiana-bold"
            )}
          >
            A TEAM THAT{" "}
            <span className={italiana.className}>BUILDS TOGETHER</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-4xl text-center">
            At RMAAC, we believe great work starts with great people and even
            better vibes. We're not just coworkers, we're a crew that celebrates
            wins, learns from losses, and genuinely enjoys building cool things
            together. Our values? Ownership, honesty, curiosity, and growth —
            both personal and professional.
          </p>
        </div>

        {/* Image Grid - Masonry Style Layout */}
        <div className="grid grid-cols-12 grid-rows-2 gap-2 sm:gap-3 lg:gap-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-16 sm:mb-24 lg:mb-32">
          {/* First image - top left, spans 6 columns */}
          <div className="col-span-6 row-span-1 relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:z-10">
            <Image
              src={impactImages[0].src}
              alt={impactImages[0].alt}
              fill
              className="object-cover transition-all duration-500 ease-in-out"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>

          {/* Second image - bottom left, spans 6 columns */}
          <div className="col-span-6 row-span-1 row-start-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:z-10">
            <Image
              src={impactImages[1].src}
              alt={impactImages[1].alt}
              fill
              className="object-cover transition-all duration-500 ease-in-out"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>

          {/* Third image - top right, spans 3 columns, spans 2 rows */}
          <div className="col-span-3 col-start-7 row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:z-10">
            <Image
              src={impactImages[2].src}
              alt={impactImages[2].alt}
              fill
              className="object-cover transition-all duration-500 ease-in-out"
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 25vw, (max-width: 1024px) 25vw, 25vw"
            />
          </div>

          {/* Fourth image - bottom right, spans 3 columns, spans 2 rows */}
          <div className="col-span-3 col-start-10 row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:z-10">
            <Image
              src={impactImages[3].src}
              alt={impactImages[3].alt}
              fill
              className="object-cover transition-all duration-500 ease-in-out"
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 25vw, (max-width: 1024px) 25vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
