"use client";

import { Italiana } from "next/font/google";
import Image from "next/image";
import StatsSection from "./StatsSection";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            RMAAC Group: Where Creative Vision Meets Structural Precision.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6">
              RMAAC Team
            </h3>
            <p className="text-gray-400 text-base sm:text-lg">
              We shape products, platforms, and spaces where people connect,
              grow, and thrive.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <p className="text-gray-400 text-base sm:text-lg">
              From full-scale property development and smart infrastructure
              builds, to launching digital-first products, AI-powered tools, and
              profitable mobile apps, we work across industries with one guiding
              principle: solve real problems with real execution. Our teams
              blend technical precision with creative insight. One day we’re
              rolling out a monetized photo-enhancing app from scratch, the next
              we’re building a brand identity for a wellness resort or launching
              backend infrastructure for an enterprise client. Everything we
              touch is led by strategy, powered by innovation, and delivered
              with craftsmanship — whether it's code, concrete, or a campaign.
              If you're building the future — we’re your execution partners.
            </p>
          </div>
        </div>

        <StatsSection />
      </div>
    </section>
  );
};

export default AboutSection;
