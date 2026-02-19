"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Italiana } from "next/font/google";
import { ArrowLeft, ArrowRight } from "lucide-react";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const CompanyEvolutionSection = () => {
  // Company evolution data with milestones
  const companyMilestones = [
    {
      image: "/image/hero/rmaac-group.png",
      hoverImage: "/image/hero/rmaac-group-white.png",
      title: "RMAAC GROUP",
      href: "/about#legacy-2012",
      year: 2012,
    },
    {
      image: "/image/hero/rmaac-tech.png",
      hoverImage: "/image/hero/rmaac-tech-white.png",
      title: "RMAAC TECHNOLOGIES",
      href: "/about#legacy-2015",
      year: 2015,
    },
    {
      image: "/image/hero/360-digital.png",
      hoverImage: "/image/hero/360-digital-white.png",
      title: "360 DIGITAL",
      href: "/about#legacy-2024",
      year: 2024,
    },
    {
      image: "/image/hero/automation.png",
      hoverImage: "/image/hero/automation-white.png",
      title: "AUTOMATION",
      href: "/about#legacy-2025",
      year: 2025,
    },
    {
      image: "/image/hero/zen-retreats.png",
      hoverImage: "/image/hero/zen-retreats-white.png",
      title: "ZEN RETREATS",
      href: "/about#legacy-2020",
      year: 2020,
    },
    {
      image: "/image/hero/enclave-business.png",
      hoverImage: "/image/hero/enclave-business-white.png",
      title: "ENCLAVE BUSINESS",
      href: "/about#legacy-2015",
      year: 2015,
    },
    {
      image: "/image/hero/markalytics.png",
      hoverImage: "/image/hero/markalytics-white.png",
      title: "MARKALYTICS",
      href: "/about#legacy-2019",
      year: 2019,
    },
    {
      image: "/image/hero/marketing.png",
      hoverImage: "/image/hero/marketing-white.png",
      title: "MARKETING",
      href: "/about#legacy-2019",
      year: 2019,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start with second card as center

  const nextCard = () => {
    setCurrentIndex((prev) =>
      prev === companyMilestones.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? companyMilestones.length - 1 : prev - 1
    );
  };

  const getVisibleCards = (isMobile: boolean = false) => {
    const cards = [];
    // On mobile, only show the center card
    const range = isMobile ? 0 : 1;
    for (let i = -range; i <= range; i++) {
      const index =
        (currentIndex + i + companyMilestones.length) %
        companyMilestones.length;
      cards.push({
        ...companyMilestones[index],
        position: i,
        isCenter: i === 0,
      });
    }
    return cards;
  };

  return (
    <section className="min-h-screen relative bg-[#17181b] py-20">
      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-6 sm:mb-8`}
          >
            BUILT BRICK BY BRICK,
            <span className={`${italiana.className}`}> IDEA BY IDEA</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mx-auto max-w-5xl px-2">
            OUR STORY ISN'T ABOUT OVERNIGHT SUCCESS. IT'S ABOUT BOLD MOVES,
            SMART PARTNERSHIPS, AND STEADY GROWTH ACROSS INDUSTRIES.
          </p>
        </div>

        {/* Arrow-Controlled Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Cards Container - Desktop (3 cards) */}
          <div className="hidden md:flex items-center justify-center space-x-6 md:space-x-24 mx-20 mt-10">
            {getVisibleCards(false).map((card, index) => (
              <div
                key={`${card.title}-${currentIndex}-${index}`}
                className={`
                  relative transition-all duration-500 ease-in-out cursor-pointer group
                  ${
                    card.isCenter
                      ? "scale-140 z-20"
                      : Math.abs(card.position) === 1
                      ? "scale-120 opacity-90 z-10"
                      : "scale-120 opacity-60 z-0"
                  }
                  ${Math.abs(card.position) > 1 ? "hidden lg:block" : ""}
                `}
                onClick={() =>
                  !card.isCenter &&
                  setCurrentIndex(
                    (currentIndex + card.position + companyMilestones.length) %
                      companyMilestones.length
                  )
                }
              >
                {card.isCenter ? (
                  <Link href={card.href} className="block">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="relative mb-8">
                        <Image
                          src={card.hoverImage}
                          alt={card.title}
                          width={400}
                          height={400}
                          className="w-60 h-60 md:w-60 md:h-60 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="relative mb-8">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={400}
                          height={400}
                          className="w-50 h-50 md:w-56 md:h-56 transition-all duration-300"
                        />

                        {/* Hover image for side cards */}
                        <Image
                          src={card.hoverImage}
                          alt={card.title}
                          width={400}
                          height={400}
                          className="absolute top-0 left-0 w-40 h-40 md:w-48 md:h-48 transition-opacity duration-300 opacity-0"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cards Container - Mobile (1 card) */}
          <div className="flex md:hidden items-center justify-center mx-20 mt-10">
            {getVisibleCards(true).map((card, index) => (
              <div
                key={`${card.title}-${currentIndex}-${index}`}
                className="relative transition-all duration-500 ease-in-out cursor-pointer group scale-140 z-20"
              >
                <Link href={card.href} className="block">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="relative mb-8">
                      <Image
                        src={card.hoverImage}
                        alt={card.title}
                        width={400}
                        height={400}
                        className="w-60 h-60 transition-all duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-10">
          {/* Left Arrow */}
          <button
            onClick={prevCard}
            className=" z-10 p-4 hover:scale-110 transition-transform duration-200 text-[#454649] hover:text-white"
          >
            <ArrowLeft size={50} strokeWidth={1} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextCard}
            className="z-10 p-4 hover:scale-110 transition-transform duration-200 text-[#454649] hover:text-white"
          >
            <ArrowRight size={50} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyEvolutionSection;
