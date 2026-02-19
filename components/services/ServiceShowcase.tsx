"use client";

import { cn } from "@/util/util";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

// Data structure for case studies
interface ServiceShowcase {
  id: string;
  title?: string;
  description: string;
  images: string[];
}

const serviceShowcase: ServiceShowcase[] = [
  {
    id: "shiptquick",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      "/image/portfolio/shiptquick-1.svg"
    ],
  },
  {
    id: "zen-retreats",
    title: "Zen Retreats",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
    images: ["/image/portfolio/zen-1.svg"],
  },
];

interface ImageSlideshowProps {
  images: string[];
  altPrefix: string;
  interval?: number;
}

function ImageSlideshow({
  images,
  altPrefix,
  interval = 3000,
}: ImageSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={src}
            alt={`${altPrefix} Interface ${index + 1}`}
            width={400}
            height={350}
            className="w-full h-full object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
        </div>
      ))}
    </div>
  );
}

interface ServiceSectionProps {
  service: ServiceShowcase;
  imagePosition: "left" | "right";
}

function ServiceSection({ service, imagePosition }: ServiceSectionProps) {
  const contentSection = (
    <div
      className={cn(
        "space-y-8",
        imagePosition === "right" ? "text-left" : "text-left flex flex-col"
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        {service.title}
      </h2>
      <p className="text-gray-300 text-base max-w-lg">
        {service.description}
      </p>
    </div>
  );

  const imageSection = (
    <div className="relative">
      <ImageSlideshow images={service.images} altPrefix={service.id} />
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {imagePosition === "left" ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  );
}

export default function CaseStudyShowcase() {
  return (
    <section className="bg-gradient-to-b from-[#0f1114] to-[#17181b] py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-32 px-4">
        {serviceShowcase.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            imagePosition={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
