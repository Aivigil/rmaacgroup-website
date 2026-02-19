"use client";

import { Italiana } from "next/font/google";
import Image from "next/image";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const BrandsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#17181b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                OUR LEGACY{" "}
                <span
                  className={cn(
                    italiana.className,
                    "text-4xl sm:text-4xl md:text-5xl lg:text-6xl"
                  )}
                >
                  OUR BRANDS
                </span>
              </h1>
            </div>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-3 sm:mt-4 text-white flex items-center justify-center px-2">
              <div className="hidden sm:block size-1.5 bg-white rounded-full mr-3 md:mr-4"></div>
              <span className="text-center leading-relaxed">
                WORKING TOGETHER FOR EXCELLENCE – MAKING A DIFFERENCE WITH ♥
              </span>
              <div className="hidden sm:block size-1.5 bg-white rounded-full ml-3 md:ml-4"></div>
            </div>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="border-gray-600 border-b border-l border-t flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/markalytics.svg"
              alt="Markalytics"
              width={110}
              height={110}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/markalytics-colored.svg"
              alt="Markalytics Colored"
              width={110}
              height={110}
              className="object-contain hidden group-hover:block"
            />
          </div>

          <div className="border-gray-600 border-b border-l border-t border-r sm:border-r-0 md:border-r-0 lg:border-r-0 flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/zen-retreats.svg"
              alt="Zen Retreats"
              width={80}
              height={80}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/zen-retreats-colored.svg"
              alt="Zen Retreats Colored"
              width={80}
              height={80}
              className="object-contain hidden group-hover:block"
            />
          </div>

          <div className="border-gray-600 border-b border-l border-t flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/rmaac-developers.svg"
              alt="RMAAC Developers"
              width={90}
              height={90}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/rmaac-developers-colored.svg"
              alt="RMAAC Developers Colored"
              width={90}
              height={90}
              className="object-contain hidden group-hover:block"
            />
          </div>

          <div className="border-gray-600 border-b border-l border-t border-r flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/dev-nest.svg"
              alt="Dev Nest"
              width={80}
              height={80}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/dev-nest-colored.svg"
              alt="Dev Nest Colored"
              width={80}
              height={80}
              className="object-contain hidden group-hover:block"
            />
          </div>

          <div className="border-gray-600 border-b border-l flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/rmaac-technologies.svg"
              alt="RMAAC Technologies"
              width={160}
              height={160}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/rmaac-technologies-colored.svg"
              alt="RMAAC Technologies Colored"
              width={160}
              height={160}
              className="object-contain hidden group-hover:block"
            />
          </div>

          <div className="border-gray-600 border-b border-l border-r sm:border-r-0 md:border-r-0 lg:border-r-0 flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/premier-private-gp.svg"
              alt="Premier Private GP"
              width={160}
              height={160}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/premier-private-gp-colored.svg"
              alt="Premier Private GP Colored"
              width={160}
              height={160}
              className="object-contain hidden group-hover:block"
            />
          </div>

          <div className="border-gray-600 border-b border-l flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/sehat-zindagi.svg"
              alt="Sehat Zindagi"
              width={160}
              height={160}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/sehat-zindagi-colored.svg"
              alt="Sehat Zindagi Colored"
              width={160}
              height={160}
              className="object-contain hidden group-hover:block"
            />
          </div>

          <div className="border-gray-600 border-b border-l border-r flex items-center justify-center h-32 md:h-66 opacity-80 hover:opacity-100 transition-all duration-300 group hover:bg-white hover:scale-105 hover:z-10">
            <Image
              src="/image/svg/evo-studio.svg"
              alt="Evo Studio"
              width={90}
              height={90}
              className="object-contain group-hover:hidden"
            />
            <Image
              src="/image/svg/evo-studio-colored.svg"
              alt="Evo Studio Colored"
              width={90}
              height={90}
              className="object-contain hidden group-hover:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
