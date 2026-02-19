"use client";

import Image from "next/image";
import AnimatedTextSequence from "../ui/AnimatedTextSequence";
import AnimatedImageSequence from "../ui/AnimatedImageSequence";

interface StrategyModel {
  id: string;
  title: string;
  description: string;
  image: string[];
  layout: "imageLeft" | "imageRight";
  scopeIncludes: string[];
}

interface StrategyModelCardProps {
  model: StrategyModel;
}

export default function StrategyModelCard({ model }: StrategyModelCardProps) {
  const ImageComponent = (
    <div className="space-y-6">
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[600px] overflow-hidden">
        <AnimatedImageSequence
          imageUrls={model.image}
          altText={model.title}
          className="w-full h-full"
          transitionDuration={800}
          displayDuration={4000}
          transitionDelay={200}
        />
      </div>
    </div>
  );

  const ContentComponent = (
    <div className="space-y-4 flex flex-col justify-center">
      <h3 className="text-2xl md:text-4xl font-medium">{model.title}</h3>

      <p className="text-base md:text-lg text-[#bebebe] font-light mt-8">
        {model.description}
      </p>

      {/* Scope Includes */}
      <div className="space-y-3 mt-5">
        <h4 className="text-2xl md:text-4xl font-medium">Scope Includes:</h4>
        <ul className="space-y-2">
          <AnimatedTextSequence
            textItems={model.scopeIncludes}
            className="h-10 md:h-12 lg:h-20"
            textClassName="text-base md:text-2xl text-white mt-10"
            transitionDuration={600}
            displayDuration={2500}
            transitionDelay={150}
          />
        </ul>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-32">
      {model.layout === "imageLeft" ? (
        <>
          {ImageComponent}
          {ContentComponent}
        </>
      ) : (
        <>
          {ContentComponent}
          {ImageComponent}
        </>
      )}
    </div>
  );
}
