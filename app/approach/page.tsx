"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import { Italiana } from "next/font/google";
import { cn } from "@/util/util";
import Button from "@/components/ui/button";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StrategyModelCard from "@/components/approach/StrategyModelCard";
import { strategicModels } from "@/util/strategicModelsData";
import WhatWeLookFor from "@/components/approach/WhatWeLookFor";
import MoreWorkSection from "@/components/case-study/MoreWorkSection";
import Link from "next/link";
import AnimatedTextSequence from "@/components/ui/AnimatedTextSequence";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Approach() {
  return (
    <div className="text-white relative overflow-hidden min-h-screen">
      {/* Hero section with video background */}
      <div className="relative min-h-screen -mb-20">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full min-h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/approach-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navbar positioned with higher z-index */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero Content Section */}
        <section className="relative z-10 pt-8 pb-16 px-4 md:px-6 lg:px-8 mx-auto max-w-7xl min-h-[calc(100vh-120px)] flex flex-col justify-center mt-10">
          <div className="max-w-3xl">
            {/* Main heading */}

            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-normal">
                OUR STRATEGIC
                <span className="block">
                  INVESTMENT{" "}
                  <span className={italiana.className}>APPROACH</span>
                </span>
              </h1>
            </div>

            <div className="mb-16">
              <p className="text-lg md:text-xl lg:text-3xl text-[#bebebe] font-light">
                We partner where capability meets conviction.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-normal mb-8">
                BEYOND CAPITAL:
              </h2>

              {/* Animated text sequence */}
              <AnimatedTextSequence
                textItems={["WE BUILD", "BACK", "AND DELIVER"]}
                className="h-10 md:h-12 lg:h-16"
                textClassName={`text-xl md:text-2xl lg:text-5xl ${italiana.className}`}
                transitionDuration={800}
                displayDuration={3500}
                transitionDelay={200}
              />

              <div className="max-w-[655px]">
                <p className="text-base md:text-lg lg:text-xl text-[#bebebe] font-light mb-12 leading-10">
                  We don't just invest capital — we deploy strategy, systems,
                  and execution support to scale real ventures. Whether it's an
                  internal incubation or a strategic partnership, our approach
                  is anchored in product-market fit, operational clarity, and
                  long-term value creation.
                </p>
              </div>
            </div>
            {/* </AnimatedSection> */}

            {/* CTA Button */}
            <Link href="/contact">
              <Button className="w-96">
                EXPLORE PARTNERSHIP OPPORTUNITIES
              </Button>
            </Link>
          </div>
        </section>

        {/* Investment Philosophy Section */}
        <SectionWrapper className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column - Title and Image */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-normal">
                  <span className="block">OUR INVESTMENT</span>
                  <span
                    className={cn(
                      "block sm:text-4xl md:text-5xl lg:text-7xl mt-5",
                      italiana.className
                    )}
                  >
                    PHILOSOPHY
                  </span>
                </h2>
              </div>

              {/* Image */}
              <Image
                src="/image/approach/philosophy.jpg"
                alt="Investment Philosophy"
                width={700}
                height={200}
                className="w-full max-w-[700px] h-[250px] object-cover pt-5"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-[33px] font-light mb-0">
                  <span className="text-4xl lg:text-5xl">AT</span>{" "}
                  <span className="font-medium text-5xl">RMAAC</span>, WE
                  BELIEVE
                  <br />
                  SUSTAINABLE VENTURES ARE BUILT ON
                  <br />
                  THREE FUNDAMENTALS:
                </h3>

                <AnimatedTextSequence
                  textItems={[
                    "CLEAR VALUE",
                    "SCALABLE SYSTEMS",
                    "AND CAPABLE TEAMS",
                  ]}
                  className="h-10 md:h-12 lg:h-16"
                  textClassName="text-lg md:text-xl lg:text-[33px] font-light"
                  transitionDuration={800}
                  displayDuration={3500}
                  transitionDelay={200}
                />
              </div>

              <div>
                <p className="text-base md:text-[24px] text-[#bebebe] font-light">
                  We selectively invest in or co-build digital-first businesses
                  where our strategic involvement leads to exponential outcomes.
                  Our vertical experience across real estate, healthcare, IT,
                  and product ventures gives us the operational insight needed
                  to support, not just fund, growth.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Strategic Models Section */}
        <SectionWrapper className="relative z-10">
          <div className="text-center mb-12 lg:mb-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              <span className="font-medium">OUR STRATEGIC </span>
              <span className={cn(italiana.className)}>MODEL</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
              WE OPERATE ACROSS THREE CORE ENGAGEMENT MODELS:
            </p>
          </div>

          {/* Strategic Models - Using reusable component */}
          {strategicModels.map((model) => (
            <StrategyModelCard key={model.id} model={model} />
          ))}
        </SectionWrapper>
      </div>

      <div className="bg-black">
        <WhatWeLookFor />
      </div>

      <div className="bg-[#0f1114] py-12">
        <div className="mx-auto max-w-4xl text-center items-center flex flex-col gap-4">
          <h1 className="text-4xl font-medium">
            Let's Discuss Strategic Alignment
          </h1>
          <p className="text-lg text-gray-300 font-light">
            We’re actively exploring high-potential partnerships in healthtech,
            proptech, SaaS, digital platforms, and product-based ventures. If
            you’re building something scalable and require a partner with real
            delivery capacity, we’d like to hear from you.
          </p>
          <Button>
            <Link href="/contact">
              <p>BOOK A STRATEGIC CALL</p>
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-black">
        <MoreWorkSection />
      </div>
    </div>
  );
}
