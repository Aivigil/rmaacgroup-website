"use client";

import { cn } from "@/util/util";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

// Data structure for case studies
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  images: string[];
  video: string;
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "automations",
    title: "AUTOMATIONS & CYBERSECURITY",
    description:
      "From AI-driven monitoring to enterprise-grade cybersecurity for SMBs, our automation and IT solutions redefine how businesses operate. With projects like AI-Vigil, we’ve built scalable, secure systems that cut downtime, protect data, and simplify IT for companies across North America.",
    images: ["/image/portfolio/automation-and-cyber.png"],
    video: "/video/automations.mov",
    href: "/automations/automations",
  },
  {
    id: "digital-success",
    title: "DIGITAL SUCCESS",
    description:
      "Through companies like Markalytics, we’ve delivered global digital campaigns, SEO programs, and brand transformations. From web revamps to full-scale marketing automation, our work has helped businesses grow visibility, capture leads, and convert clicks into long-term customers across three continents.",
    images: ["/image/portfolio/digital-success.png"],
    video: "/video/digital.mov",
    href: "/automations/digital-success",
  },
  {
    id: "real-estate",
    title: "REAL ESTATE",
    description:
      "Our journey started in real estate  from Enclave Business Center to luxury projects like Zen Retreats. We combine strong design, investor-focused branding, and tech integrations to create developments that don’t just build spaces, but also generate long-term value and sustainable growth.",
    images: ["/image/portfolio/real-estate.png"],
    video: "/video/real-estate.mov",
    href: "/automations/real-estate",
  },
  {
    id: "mobile-solutions",
    title: "MOBILE SOLUTIONS",
    description:
      "With projects like the Vividly App and upcoming marine-tech platforms, we’ve entered mobile solutions with a focus on usability, speed, and monetization. Our apps are built to merge advanced AI features with simple user experiences delivering tools people actually use every day.",
    images: ["/image/portfolio/mobile-12.png"],
    video: "/video/mobile-solutions.mov",
    href: "/automations/mobile-solutions",
  },
  {
    id: "healthcare",
    title: "HEALTHCARE",
    description:
      "In healthcare, we've built brands like Premier Private GP, a UK-based clinic trusted by 1,000+ patients. Our work spans brand identity, digital infrastructure, and high-conversion campaigns, helping healthcare providers modernize patient experiences while scaling their operations with trust and care. ",
    images: ["/image/portfolio/healthcare.png"],
    video: "/video/healthcare.mov",
    href: "/automations/healthcare",
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
            className="w-full h-full object-contain"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
        </div>
      ))}
    </div>
  );
}

interface CaseStudySectionProps {
  caseStudy: CaseStudy;
  imagePosition: "left" | "right";
}

function CaseStudySection({ caseStudy, imagePosition }: CaseStudySectionProps) {
  const contentSection = (
    <div
      className={cn(
        "space-y-8",
        imagePosition === "left"
          ? "lg:text-left text-justify"
          : "lg:text-right text-justify lg:flex lg:flex-col lg:items-end"
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        {caseStudy.title}
      </h2>

      <p className="text-gray-300 text-base max-w-lg">
        {caseStudy.description}
      </p>

      <div className="w-full lg:w-72">
        <Link href={caseStudy.href} className="w-full block">
          <Button
            size="md"
            className="text-lg font-medium w-full lg:w-auto"
          >
            SEE FULL PORTFOLIO
          </Button>
        </Link>
      </div>
    </div>
  );

  const imageSection = (
    <div className="relative">
      {/* <ImageSlideshow images={caseStudy.images} altPrefix={caseStudy.title} /> */}
      <video src={caseStudy.video} autoPlay loop muted className="w-full h-full object-cover" />
    </div>
  );

  return (
    <div>
      {/* Mobile layout - always image then content */}
      <div className="grid grid-cols-1 gap-16 items-center lg:hidden">
        {imageSection}
        {contentSection}
      </div>

      {/* Desktop layout - respects imagePosition */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
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
    </div>
  );
}

export default function CaseStudyShowcase() {
  return (
    <section className="bg-[#14171a] py-20 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-32 px-4">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudySection
            key={caseStudy.id}
            caseStudy={caseStudy}
            imagePosition={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
