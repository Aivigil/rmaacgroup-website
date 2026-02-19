"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PortfolioData } from "@/util/portfolioData";

interface CaseStudyCarouselProps {
  cards: PortfolioData[];
}

export default function CaseStudyCarousel({ cards }: CaseStudyCarouselProps) {
  return (
    <div className="bg-[#17181b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {cards.map((card) => (
              <CarouselItem
                key={card.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-[#272525] rounded-3xl h-[650px]">
                  {/* Top Section with Background Image and Logo */}
                  <div className="relative h-66 flex items-center justify-center rounded-t-3xl">
                    <Image src={card.bgImage} alt={card.title} fill />
                    <div className="relative z-10">
                      <Image
                        src={card.logo}
                        alt={card.title}
                        width={card.logoWidth}
                        height={card.logoHeight}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Bottom Section with Title and Description */}
                  <div className="p-8">
                    <h3 className="text-white text-base mb-4 font-semibold leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-white text-[13px]">{card.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation buttons positioned below the carousel */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0">Previous</CarouselPrevious>
            <CarouselNext className="static translate-y-0">Next</CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
