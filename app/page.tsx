"use client";

import HeroSection from "@/components/home/HeroSection";
import AINavigationSection from "@/components/home/AINavigationSection";
import NewsSection from "@/components/home/NewsSection";
import BrandsSection from "@/components/home/BrandsSection";
import TeamSection from "@/components/home/TeamSection";
import TeamShowcaseSection from "@/components/home/TeamShowcaseSection";
import MakeImpactSection from "@/components/home/MakeImpact";
import EmpoweringSection from "@/components/home/EmpoweringSection";
import CompanyEvolutionSection from "@/components/home/CompanyEvolutionSection";
import MeasurableSuccessSection from "@/components/home/MeasurableSuccessSection";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[#17181b] text-white relative overflow-hidden">
      <HeroSection />
      <AINavigationSection />
      <NewsSection />
      <EmpoweringSection />
      <MakeImpactSection />
      <CompanyEvolutionSection />
      <BrandsSection />
      <MeasurableSuccessSection />
      <TeamShowcaseSection />
      <TeamSection />
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              Let's Build the Future Together
            </h2>

            {/* Description */}
            <p className="text-white text-base sm:text-lg md:text-xl max-w-[860px] mx-auto px-4 sm:px-0">
              We're more than investors. We're creators shaping real estate,
              healthcare, and AI solutions that stand the test of time. Ready to
              explore what's next with RMAAC?
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="w-fit">START THE CONVERSATION</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
