import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface LegacyItem {
  year: number;
  title: string;
  description: string;
  image: string;
  logo?: string;
}

interface LegacyBrandSectionProps {
  items?: LegacyItem[];
}

const defaultItems: LegacyItem[] = [
  {
    year: 2025,
    title: "TECH & AUTOMATIONS ERA",
    description:
      "Now in 2025, we've launched AI-Vigil and beyond advancing SMBs with cybersecurity, AI chatbots, GHL integrations, and industry-specific automation projects, including a marine-tech app in progress.",
    image: "/image/about/legacy/ai-image.png",
    logo: "/image/about/legacy/ai-logo.png",
  },
  {
    year: 2024,
    title: "APPS & DIGITAL TOOLS",
    description:
      "In 2024, we entered app development with products like Vividly, a creative suite featuring background remover, enhancer, and colorizer tools.",
    image: "/image/about/legacy/vividly-image.png",
  },
  {
    year: 2023,
    title: "HEALTHCARE INNOVATION",
    description:
      "2023 saw the birth of Premier Private GP (PPGP), a private healthcare venture in UK redefining patient-first private care in Surrey.",
    image: "/image/about/legacy/premier-image.png",
  },
  {
    year: 2020,
    title: "SCENIC RETREATS",
    description:
      "We expanded again in 2020, this time into luxury real estate, breaking ground with Zen Retreats in Barrian Valley, a project blending design and lifestyle. ",
    image: "/image/about/legacy/zen-image.png",
    logo: "/image/about/legacy/zen-logo.png",
  },
  {
    year: 2019,
    title: "MARKALYTICS TAKES OFF",
    description:
      "In 2019, we launched Markalytics, a full-scale marketing agency that powered global campaigns, web platforms, and brand transformations.",
    image: "/image/about/legacy/markalytics-image.png",
    logo: "/image/about/legacy/markalytics-logo.png",
  },
  {
    year: 2015,
    title: "REAL ESTATE EXPANSION",
    description:
      "By 2015, we moved into large-scale real estate, delivering both commercial and residential projects with Enclave Business Center marking a major milestone.",
    image: "/image/about/legacy/real-estate-image.png",
  },
  {
    year: 2012,
    title: "OUR BEGINNING",
    description:
      "We launched in 2012, laying the foundation of RMAAC with a vision to shape industries through smart, future-driven projects.",
    image: "/image/about/legacy/rmaac-group-image.png",
  },
];

export default function LegacyBrandSection({
  items = defaultItems,
}: LegacyBrandSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeYear, setActiveYear] = useState<number>(items[0].year);
  const totalHeight = 2800; // Total height of the timeline

  useEffect(() => {
    const handleScroll = () => {
      let closestYear = items[0].year;
      let closestDistance = Infinity;

      items.forEach((item) => {
        const el = document.getElementById(`legacy-${item.year}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(elCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestYear = item.year;
          }
        }
      });

      setActiveYear(closestYear);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on section scroll position
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      let progress = 0;

      if (sectionTop <= 0) {
        // Section is scrolled past the top
        const scrolledIntoSection = Math.abs(sectionTop);
        const maxScroll = sectionHeight - windowHeight;
        progress = Math.min(1, Math.max(0, scrolledIntoSection / maxScroll));
      } else if (sectionTop < windowHeight) {
        // Section is entering viewport
        progress = 0;
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#17181b] text-white py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative z-20 py-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4">
            OUR LEGACY OUR BRANDS
          </h2>
          <p
            className={`${italiana.className} text-4xl md:text-5xl lg:text-6xl font-normal`}
          >
            VISUALISED STEP BY STEP
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Gray boundary lines */}
          <div className="absolute top-0 right-[630px] h-[2800px] w-[1px] bg-gray-600" />
          <div className="absolute top-0 right-[645px] h-[2800px] w-[1px] bg-gray-600 rounded-full" />

          {/* White loader lines */}
          <div
            className="absolute top-0 right-[630px] w-[1px] bg-white"
            style={{ height: `${scrollProgress * totalHeight}px` }}
          />
          <div
            className="absolute top-0 right-[645px] w-[1px] bg-white rounded-full"
            style={{ height: `${scrollProgress * totalHeight}px` }}
          />

          {/* Thick white line loader (centered between boundaries) */}
          <div
            className="absolute top-0 right-[633px] w-[10px] bg-white rounded-full"
            style={{ height: `${scrollProgress * totalHeight}px` }}
          />

          {/* Bottom cap */}
          <div
            className="absolute top-[2800px] right-[631px] h-[1px] w-[14px] bg-white rounded-full"
            style={{
              opacity: scrollProgress >= 0.95 ? 1 : 0,
            }}
          />

          {/* Year markers */}
          {items.map((item, i) => {
            const isActive = activeYear === item.year;
            const isLeft = i % 2 !== 0;

            // base top offset + spacing between markers
            const topOffset = 245 + i * 388;

            return (
              <div
                key={`year-marker-${item.year}`}
                className={`absolute ${
                  isLeft ? "right-[619px]" : "right-[553px]"
                } flex items-center ${isLeft ? "" : "space-x-4"}`}
                style={{ top: `${topOffset}px` }} // <-- FIX HERE
              >
                {/* Left side year */}
                {isLeft && (
                  <span
                    className={`mr-4 text-[26px] ${
                      isActive ? "text-green-500" : "text-white"
                    }`}
                  >
                    {item.year}
                  </span>
                )}

                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="32"
                  viewBox="0 0 22 27"
                  fill="none"
                >
                  <path
                    d={
                      isLeft
                        ? "M21.96 13.5748L0.928794 0.961679L0.859315 26.0713L21.96 13.5748Z"
                        : "M0.039964 13.5748L21.0712 0.961679L21.1407 26.0713L0.039964 13.5748Z"
                    }
                    fill={isActive ? "#76C463" : "#F5F5F5"}
                  />
                </svg>

                {/* Right side year */}
                {!isLeft && (
                  <span
                    className={`ml-0 text-[26px] ${
                      isActive ? "text-green-500" : "text-white"
                    }`}
                  >
                    {item.year}
                  </span>
                )}
              </div>
            );
          })}

          {/* Cards */}
          {items.map((item, index) => (
            <div
              key={item.year}
              id={`legacy-${item.year}`}
              className="relative mb-0 last:mb-0"
            >
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } pt-16`}
              >
                <div
                  className={`w-full max-w-md ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div className="bg-[#474748] rounded-lg overflow-hidden shadow-lg">
                    <div className="relative h-48 -mt-2.5 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      {item.logo && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="relative w-72 h-32">
                            <Image
                              src={item.logo}
                              alt="Logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold mb-3 text-white">
                        {item.title}
                      </h3>
                      <p className="text-white text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
