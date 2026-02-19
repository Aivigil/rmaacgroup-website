"use client";

import { Italiana } from "next/font/google";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function DigitalImpactSection({ data }: { data: any }) {
  return (
    <div className="bg-[#17181b] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-white">
            {data.digitalImpact.title.main}{" "}
            <span className={cn(italiana.className, "text-white")}>
              {data.digitalImpact.title.italic}
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-600">
          {data.digitalImpact.stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="bg-transparent p-12 border-r border-b border-gray-600 last:border-r-0 md:nth-child(2n):border-r-0 lg:nth-child(2n):border-r lg:nth-child(3n):border-r-0 last:border-b-0 md:nth-last-child(-n+2):border-b-0 lg:nth-last-child(-n+2):border-b lg:nth-last-child(-n+3):border-b-0"
            >
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {stat.value}
                </div>
                <div className="text-lg sm:text-xl text-white/80 font-medium uppercase">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
