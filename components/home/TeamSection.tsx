"use client";

import { Italiana } from "next/font/google";
import CustomerImageCycler from "./CustomerImageCycler";
import Testimonials from "./Testimonials";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const TeamSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#17181b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Profile images */}
          <div className="order-1 lg:order-1">
            <div className="flex">
              <CustomerImageCycler />
            </div>
          </div>

          {/* Center - Trusted by text */}
          <div className="order-3 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-normal text-white">
              <span>TRUSTED BY 25,000+</span>
              <br />
              <span className={italiana.className}>HAPPY CUSTOMERS</span>
            </h2>
          </div>

          {/* Right side - Testimonial */}
          <div className="order-2 lg:order-3 md:max-w-md text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-white">
              "AN INCREDIBLE EXPERIENCE FROM START TO FINISH! THE TEAM WENT
              ABOVE AND BEYOND TO MEET OUR NEEDS. HIGHLY RECOMMEND!"
            </p>
          </div>
        </div>

        {/* Testimonials Component */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
