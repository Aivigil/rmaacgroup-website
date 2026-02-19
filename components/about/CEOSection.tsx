"use client";

import { Italiana } from "next/font/google";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const CEOSection = () => {
  return (
    <section className="bg-[#17181b] text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0">
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 flex flex-col justify-center">
            <div>
              <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4">
                <span>
                  OUR
                </span>{" "}
                <span className={cn(italiana.className)}>CEO</span>
              </h2>
            </div>

            <div className="max-w-lg">
              <p className="text-base sm:text-lg text-[#BEBEBE] font-light">
                We've been at the forefront of innovation for over 25 years,
                delivering results that make a real difference for our clients.
                Whether it's construction, IT, or digital marketing, our diverse
                expertise fuels our success. Our focus is to help the businesses
                in all aspects of the business, from efficiently utilizing their
                available resources to improving those resources and building
                new ones. Our services are not limited to the fields mentioned
                above, but we also offer assistance in other fields where
                needed.
              </p>
            </div>
          </div>

          {/* Right side - CEO Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg aspect-square">
              {/* CEO Image - Square */}
              <div className="absolute overflow-hidden">
                <img
                  src="/image/about/ceo.jpg"
                  alt="CEO Portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
