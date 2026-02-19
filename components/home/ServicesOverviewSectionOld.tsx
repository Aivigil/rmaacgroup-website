"use client";

import Image from "next/image";

const ServicesOverviewSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left - Static Image with moving text (50% width) */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            {/* Building image */}
            <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-400">
              <Image
                src="/image/image1.png"
                alt="RMAAC Building"
                fill
                className="object-cover grayscale"
              />
            </div>

            {/* Moving text overlay */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 z-20 overflow-hidden">
              <div className="animate-marquee whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-white">
                CONSTRUCTION * DESIGN * INNOVATION * CONSTRUCTION * DESIGN *
                INNOVATION *
              </div>
            </div>
          </div>

          {/* Right - Rotating Images and Titles (50% width) */}
          <div className="relative px-4 sm:px-6 lg:px-8 ml-0 sm:ml-2 lg:ml-5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-end">
            {/* Service 1 - Construction Development */}
            <div className="absolute inset-0 animate-service-rotate-1 px-2 sm:px-4 lg:px-8 flex flex-col justify-end">
              <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-gray-500 to-gray-300 text-transparent bg-clip-text">
                  CONSTRUCTION
                  <br />
                  DEVELOPMENT
                </h3>
              </div>
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Image
                  src="/image/image3.jpg"
                  alt="Construction Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service 2 - IT Services */}
            <div className="absolute inset-0 animate-service-rotate-2 px-2 sm:px-4 lg:px-8 flex flex-col justify-end">
              <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-gray-500 to-gray-300 text-transparent bg-clip-text">
                  IT
                  <br />
                  SERVICES
                </h3>
              </div>
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Image
                  src="/image/image2.png"
                  alt="IT Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Service 3 - Marketing & Sales */}
            <div className="absolute inset-0 animate-service-rotate-3 px-2 sm:px-4 lg:px-8 flex flex-col justify-end">
              <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-b from-gray-500 to-gray-300 text-transparent bg-clip-text">
                  MARKETING & SALES
                  <br />
                  OPTIMIZATION
                </h3>
              </div>
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Image
                  src="/image/image4.jpg"
                  alt="Marketing & Sales"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
