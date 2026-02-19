"use client";

import { Italiana } from "next/font/google";
import Image from "next/image";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const WhatWeDoSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-8xl 2xl:text-8xl 3xl:text-[150px] font-normal text-white">
            HERE'S
            <br />
            <span className={italiana.className}>WHAT WE DO</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {/* Service 1 - Real Estate Development */}
          <div className="flex flex-row items-center justify-between py-6 sm:py-8 md:py-12 border-b border-[#5c5e60] group hover:bg-gray-900/20 transition-colors duration-300 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-32 flex-1">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5c5e60]">
                01
              </span>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#5c5e60] group-hover:text-white transition-colors duration-300">
                REAL ESTATE DEVELOPMENT
              </h3>
            </div>

            {/* Animated Bottom Line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ zIndex: 10000 }}
            ></div>

            {/* 3D Object - Square */}
            <div
              className="hidden lg:block absolute pb-14 right-56 top-1/2 transform -translate-y-1/2 translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out"
              style={{ zIndex: 9999 }}
            >
              <Image
                src="/image/square.png"
                alt="Square"
                width={270}
                height={270}
                className="object-contain w-[150px] md:w-[200px] lg:w-[270px]"
              />
            </div>

            <div className="size-10 sm:size-12 md:size-16 lg:size-20 rounded-full border border-[#5c5e60] flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300 cursor-pointer ml-2 sm:ml-4 lg:ml-0 flex-shrink-0">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#5c5e60] group-hover:text-black transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Service 2 - IT Solutions */}
          <div className="flex flex-row items-center justify-between py-6 sm:py-8 md:py-12 border-b border-[#5c5e60] group hover:bg-gray-900/20 transition-colors duration-300 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-32 flex-1">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5c5e60]">
                02
              </span>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#5c5e60] group-hover:text-white transition-colors duration-300">
                IT SOLUTIONS
              </h3>
            </div>

            {/* Animated Bottom Line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ zIndex: 10000 }}
            ></div>

            {/* 3D Object - Cone */}
            <div
              className="hidden lg:block absolute pb-14 right-56 top-1/2 transform -translate-y-1/2 translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out"
              style={{ zIndex: 9999 }}
            >
              <Image
                src="/image/cone.png"
                alt="Cone"
                width={270}
                height={270}
                className="object-contain w-[150px] md:w-[200px] lg:w-[270px]"
              />
            </div>

            <div className="size-10 sm:size-12 md:size-16 lg:size-20 rounded-full border border-[#5c5e60] flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300 cursor-pointer ml-2 sm:ml-4 lg:ml-0 flex-shrink-0">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#5c5e60] group-hover:text-black transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Service 3 - Digital Marketing */}
          <div className="flex flex-row items-center justify-between py-6 sm:py-8 md:py-12 border-b border-[#5c5e60] group hover:bg-gray-900/20 transition-colors duration-300 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-32 flex-1">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5c5e60]">
                03
              </span>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#5c5e60] group-hover:text-white transition-colors duration-300">
                DIGITAL MARKETING
              </h3>
            </div>

            {/* Animated Bottom Line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ zIndex: 10000 }}
            ></div>

            {/* 3D Object - Hexagon */}
            <div
              className="hidden lg:block absolute pb-14 right-56 top-1/2 transform -translate-y-1/2 translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out"
              style={{ zIndex: 9999 }}
            >
              <Image
                src="/image/hexagon.png"
                alt="Hexagon"
                width={270}
                height={270}
                className="object-contain w-[150px] md:w-[200px] lg:w-[270px]"
              />
            </div>

            <div className="size-10 sm:size-12 md:size-16 lg:size-20 rounded-full border border-[#5c5e60] flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300 cursor-pointer ml-2 sm:ml-4 lg:ml-0 flex-shrink-0">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#5c5e60] group-hover:text-black transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Service 4 - Mobile Apps Development */}
          <div className="flex flex-row items-center justify-between py-6 sm:py-8 md:py-12 border-b border-[#5c5e60] group hover:bg-gray-900/20 transition-colors duration-300 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-32 flex-1">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#5c5e60]">
                04
              </span>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#5c5e60] group-hover:text-white transition-colors duration-300">
                MOBILE APPS DEVELOPMENT
              </h3>
            </div>

            {/* Animated Bottom Line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ zIndex: 10000 }}
            ></div>

            {/* 3D Object - Sphere */}
            <div
              className="hidden lg:block absolute pb-14 right-56 top-1/2 transform -translate-y-1/2 translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out"
              style={{ zIndex: 9999 }}
            >
              <Image
                src="/image/sphere.png"
                alt="Sphere"
                width={270}
                height={270}
                className="object-contain w-[150px] md:w-[200px] lg:w-[270px]"
              />
            </div>

            <div className="size-10 sm:size-12 md:size-16 lg:size-20 rounded-full border border-[#5c5e60] flex items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300 cursor-pointer ml-2 sm:ml-4 lg:ml-0 flex-shrink-0">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#5c5e60] group-hover:text-black transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
