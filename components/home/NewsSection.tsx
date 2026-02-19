"use client";

import { useState, useEffect, useRef } from "react";
import { Italiana } from "next/font/google";
import { cn } from "@/util/util";
import Image from "next/image";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface NewsItem {
  id: number;
  title: string;
  subtitle?: string;
  dateRange: string;
  dateDescription: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";

}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "RMAAC GROUP TO ATTEND DATTOCON 25 -",
    subtitle: "Leading MSP Conference",
    dateRange: "Oct 6 to 8, 2025",
    dateDescription: "Monday to Wednesday",
    image: "/image/whats-new/new-1.jpg",
    imageAlt: "DattoCon 25 Conference",
    imagePosition: "left",
  },
  {
    id: 2,
    title: "RMAAC LAUNCHES AI CHATBOTS &",
    subtitle: "Voice Receptionists",
    dateRange: "September 6 to 8, 2025",
    dateDescription: "Saturday to Monday",
    image: "/image/whats-new/new-2.jpg",
    imageAlt: "AI Chatbot Launch",
    imagePosition: "right",
  },
];

const NewsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let closestDistance = Infinity;

      newsItems.forEach((item) => {
        const el = document.getElementById(`news-${item.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(elCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      // Calculate progress based on timeline position
      const timelineTop = rect.top;
      const timelineBottom = rect.bottom;

      let progress = 0;

      if (timelineBottom < 0) {
        // Completely scrolled past
        progress = 1;
      } else if (timelineTop > windowHeight) {
        // Not yet in view
        progress = 0;
      } else {
        // Calculate based on how much of timeline has passed through viewport
        const scrollableDistance = timelineHeight + windowHeight;
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white uppercase"
            )}
          >
            WHAT'S NEW AT{" "}
            <span className={cn(italiana.className)}>RMAAC</span>?
          </h1>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Gray boundary lines */}
          <div className="hidden lg:block absolute top-0 left-1/2 -ml-[7.5px] h-full w-[1px] bg-gray-600" />
          <div className="hidden lg:block absolute top-0 left-1/2 ml-[7.5px] h-full w-[1px] bg-gray-600" />

          {/* White loader lines */}
          <div
            className="hidden lg:block absolute top-0 left-1/2 -ml-[7.5px] w-[1px] bg-white transition-all duration-300"
            style={{
              height: `${scrollProgress * 100}%`,
              transformOrigin: 'top'
            }}
          />
          <div
            className="hidden lg:block absolute top-0 left-1/2 ml-[7.5px] w-[1px] bg-white transition-all duration-300"
            style={{
              height: `${scrollProgress * 100}%`,
              transformOrigin: 'top'
            }}
          />

          {/* Thick white line loader (centered) */}
          <div
            className="hidden lg:block absolute top-0 left-1/2 -ml-[5px] w-[10px] bg-white rounded-full transition-all duration-300"
            style={{
              height: `${scrollProgress * 100}%`,
              transformOrigin: 'top'
            }}
          />

          {/* News Items */}
          <div className="space-y-8 lg:space-y-0">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                id={`news-${item.id}`}
                className="relative"
              >
                <div
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-0",
                    item.imagePosition === "right" && "lg:grid-flow-dense"
                  )}
                >
                  {/* Image */}
                  <div
                    className={cn(
                      "relative h-[300px] lg:h-[500px] bg-transparent p-6 lg:p-8 flex items-center justify-center",
                      item.imagePosition === "right" && "lg:col-start-2"
                    )}
                  >
                    <div className="relative w-full h-[300px] rounded-3xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "relative h-[400px] lg:h-[500px] flex flex-col justify-center px-8 lg:px-16",
                      item.imagePosition === "right" &&
                        "lg:col-start-1 lg:row-start-1"
                    )}
                  >
                    {/* Title */}
                    <h2
                      className={cn(
                        "text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-white mb-8 lg:mb-12 leading-[3rem]"
                      )}
                    >
                      {item.title}{" "}
                      <span className={cn(italiana.className, "uppercase")}>
                        {item.subtitle}
                      </span>
                    </h2>

                    {/* Date Info */}
                    <div className="flex items-start gap-4">
                      <Image
                        src="/image/whats-new/date.png"
                        alt="Calendar"
                        width={50}
                        height={50}
                        className="mt-1.5"
                      />
                      <div>
                        <p className="text-base lg:text-lg text-white font-light mb-1">
                          {item.dateDescription}
                        </p>
                        <p className="text-base lg:text-lg text-white font-light">
                          {item.dateRange}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
