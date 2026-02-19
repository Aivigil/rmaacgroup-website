"use client";

import { PlayIcon } from "lucide-react";
import Image from "next/image";

const WebsiteSection = () => {
  const criteria = [
    "A clearly defined customer pain point and addressable market",
    "Digital or tech-leveraged delivery model",
    "Demonstrated founder or operational capacity",
    "Room for execution partnership not just capital",
    "Strategic alignment with one or more RMAAC verticals",
  ];

  return (
    <section className="bg-[#0f1114] py-12 sm:py-10 lg:py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-[#1e2127] rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center py-8 sm:py-12 lg:py-16">
          {/* Left Column - Website Mockups */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-transparent rounded-lg overflow-hidden">
              <Image
                src="/image/case-studies/shiptquick-container.svg"
                alt="ShiptQuick Website Pages"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              What We Look For
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-400 text-sm sm:text-base">
                We assess both product potential and partnership viability. Our
                ideal engagements include:
              </p>

              <div className="space-y-0 sm:space-y-1">
                {criteria.map((criterion, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <PlayIcon className="size-4 mt-1 fill-white" />
                    <p className="text-gray-400 text-sm sm:text-base">
                      {criterion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
