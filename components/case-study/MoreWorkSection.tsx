"use client";

import { Italiana } from "next/font/google";
import { InfiniteMovingCardsCase } from "../ui/infinite-moving-cards-case";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Sample projects data
const projectItems = [
  {
    image: "/image/portfolio/scootsee-1.svg",
    alt: "Scootsee Project",
    href: "/case-studies/scootsee",
  },
  {
    image: "/image/portfolio/zen-1.svg",
    alt: "Zen Retreats Project",
    href: "/case-studies/zen-retreats",
  },
  {
    image: "/image/portfolio/ai-1.svg",
    alt: "AI-VIGIL Project",
    href: "/case-studies/ai-vigil",
  },
  {
    image: "/image/portfolio/premier-1.svg",
    alt: "Premier Private GP Project",
    href: "/case-studies/premier-private-gp",
  },
  {
    image: "/image/portfolio/vividly-1.svg",
    alt: "Vividly App Project",
    href: "/case-studies/vividly-app",
  },
];

const MoreWorkSection = () => {
  return (
    <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white uppercase mb-2 sm:mb-4">
            Take A Look Around
          </h2>
          <h3
            className={`${italiana.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white`}
          >
            Our Work
          </h3>
        </div>

        <div className="mt-8 sm:mt-12">
          <InfiniteMovingCardsCase
            items={projectItems}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreWorkSection;
