"use client";

import { Italiana } from "next/font/google";
import Image from "next/image";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const MeasurableSuccessSection = () => {
  return (
    <section className="bg-[#101415] py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Title and Stats Grid */}
          <div>
            {/* Title */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-white mb-4">
                A Decade of
              </h2>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-300 ${italiana.className}`}
              >
                Measurable Success
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2">
              {/* Stat 1 */}
              <div className="border-r border-b border-gray-600 pb-10">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
                  10+
                </div>
                <div className="text-sm sm:text-base text-gray-300 uppercase">
                  YEARS OF GROWTH
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-b border-gray-600 pl-10">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
                  5
                </div>
                <div className="text-sm sm:text-base text-gray-300 uppercase">
                  FLAGSHIP SECTORS
                </div>
              </div>

              {/* Stat 3 */}
              <div className="border-b border-r border-gray-600 py-10">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
                  200+
                </div>
                <div className="text-sm sm:text-base text-gray-300 uppercase">
                  PROJECTS COMPLETED
                </div>
              </div>

              {/* Stat 4 */}
              <div className="border-b border-gray-600 py-10 pl-10">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
                  £3M+
                </div>
                <div className="text-sm sm:text-base text-gray-300 uppercase">
                  VALUE CREATED
                </div>
              </div>

              {/* Stat 5 */}
              <div className="border-r border-gray-600 py-10 col-span-1">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
                  IT
                </div>
                <div className="text-sm sm:text-base text-gray-300 uppercase">
                  ACROSS 3 CONTINENTS
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CEO Image and Message */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            {/* CEO Image Container - Relative positioning for button */}
            <div className="relative w-full max-w-md lg:max-w-lg mb-12 sm:mb-16">
              <Image
                src="/image/about/ceo.jpg"
                alt="CEO"
                className="w-full h-auto rounded-lg"
                width={600}
                height={600}
                priority
              />
              
              {/* CEO Message Button - Positioned below image with half overlapping */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max z-10">
                <div className="bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-3xl text-center shadow-lg">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-black whitespace-nowrap">
                    <span className={`${italiana.className} text-black`}>
                      CEO
                    </span>
                    <span> Message</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* CEO Message Text */}
            <div className="w-full max-w-md lg:max-w-lg text-white text-center px-4">
              <p className="text-sm sm:text-base leading-relaxed">
                We've been at the forefront of innovation for over 25 years,
                delivering results that make a real difference for our
                clients. Our focus is to help the businesses in all aspects
                of the business, from efficiently utilizing their available
                resources to improving those resources and building new
                ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurableSuccessSection;
