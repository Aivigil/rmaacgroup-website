"use client";

import { useEffect, useState } from "react";
import { cn } from "@/util/util";
import Navbar from "@/components/ui/Navbar";
import { Italiana } from "next/font/google";
import { ArrowDown, Star } from "lucide-react";
import { useParams } from "next/navigation";
import { getServiceBySlug } from "@/util/servicesData";
import Image from "next/image";
import Button from "@/components/ui/button";
import InnovationSection from "@/components/services/Innovation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const items: {
  image: string;
  title: string;
}[] = [
  {
    image: "/image/services/slider-1.jpg",
    title: "BRANDING",
  },
  {
    image: "/image/services/slider-2.jpg",
    title: "CONSTRUCTION",
  },
  {
    image: "/image/services/slider-5.jpg",
    title: "IT SOLUTIONS",
  },
  {
    image: "/image/services/slider-4.jpg",
    title: "DIGITAL MARKETING",
  },
  {
    image: "/image/services/slider-3.jpg",
    title: "APP DEVELOPMENT",
  },
  {
    image: "/image/services/slider-6.png",
    title: "CONSULTING",
  },
];

export default function ServiceDetailPage() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [animationActive, setAnimationActive] = useState(false);
  const params = useParams();
  const slug = params.name as string;
  const service = getServiceBySlug(slug);

  useEffect(() => {
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimationActive(true);
    }, 500);

    // Hide scroll indicator when user scrolls
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!service) {
    return (
      <div className="text-white h-screen flex items-center justify-center">
        <Navbar />
        <h1 className="text-3xl">Service not found</h1>
      </div>
    );
  }

  let firstPart = "";
  let secondPart = "";

  if (service.title === "Real Estate Development") {
    firstPart = "REAL";
    secondPart = "ESTATE DEVELOPMENT";
  } else {
    const titleWords = service.title.split(" ");
    firstPart = titleWords[0];
    secondPart = titleWords.slice(1).join(" ");
  }

  return (
    <div className="text-white relative overflow-hidden">
      {/* Hero section with video background */}
      <section className="relative h-screen">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/services-bg.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#17181b] to-transparent z-10"></div>
        {/* Navbar positioned with higher z-index */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full -mt-24 sm:-mt-16 lg:-mt-20 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Large animated service title */}
          <div className="overflow-hidden h-24 sm:h-28 md:h-32 lg:h-48 flex items-center justify-center px-4">
            <h1
              className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] 2xl:text-8xl 3xl:text-[150px] transition-transform duration-1500 ease-in-out ${
                animationActive ? "translate-y-0" : "translate-y-full"
              }`}
              style={{
                animation: animationActive
                  ? "fade-in-up-out 3s infinite"
                  : "none",
                whiteSpace: "nowrap", // Prevent line breaks
              }}
            >
              {firstPart.toUpperCase()}
              {secondPart && (
                <span
                  className={cn(
                    italiana.className,
                    "ml-1 sm:ml-2 md:ml-4 lg:ml-8"
                  )}
                >
                  {secondPart.toUpperCase()}
                </span>
              )}
            </h1>
          </div>

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden">
              {/* <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden backdrop-blur-sm"> */}
                <ArrowDown className="size-4 sm:size-5 lg:size-6 text-white animate-scroll-arrow" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Section */}
      {service.detailContent?.tagline && (
        <section className="py-20 px-4 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-5 uppercase">
                  <h2
                    className={cn(
                      italiana.className,
                      "text-3xl md:text-4xl lg:text-5xl font-semibold text-white italiana-bold"
                    )}
                  >
                    {service.detailContent.tagline.firstLine}
                  </h2>
                  <span
                    className={cn(
                      "text-3xl md:text-4xl lg:text-5xl font-semibold text-white",
                      italiana.className
                    )}
                  >
                    {service.detailContent.tagline.secondLine}
                  </span>
                </div>

                {/* Description */}
                <div className="space-y-4 pt-4">
                  <p className="text-gray-300 text-base">
                    {service.detailContent.description}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4 -ml-5 uppercase">
                  <Button href="/contact">
                    {service.detailContent.buttonText}
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <Image
                  src={service.detailContent.images.image1}
                  alt={`${service.title} Service`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {service.detailContent?.philosophyTitleFirstLine && (
        <section className="bg-[#17181b] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
              {/* Left Column - Flowchart Image */}
              <div className="order-2 lg:order-1">
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <Image
                    src={service.detailContent.images.image2}
                    alt="Project Vision Flowchart"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <h2
                  className={cn(
                    italiana.className,
                    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white uppercase"
                  )}
                >
                  {service.detailContent.philosophyTitleFirstLine}
                  <br />
                  <span className={italiana.className}>
                    {service.detailContent.philosophyTitleSecondLine}
                  </span>
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-white text-base sm:text-base md:text-xl lg:text-xl">
                    {service.detailContent.philosophyDescription}
                  </p>

                  <h3 className="text-white text-xl sm:text-xl md:text-2xl lg:text-2xl font-normal">
                    What We Do Best:
                  </h3>

                  {service.detailContent.philosophyPoints &&
                    service.detailContent.philosophyPoints.length > 0 && (
                      <ul className="space-y-2 mt-6">
                        {service.detailContent.philosophyPoints.map(
                          (point, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3 text-gray-300"
                            >
                              <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                              <span>{point}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.detailContent?.spotlightProject && (
        <section className="bg-[#17181b] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
              {/* Left Column - Flowchart Image */}
              <div className="order-2">
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <Image
                    src={service.detailContent.images.image3}
                    alt="Project Vision Flowchart"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 sm:space-y-8 order-1">
                <div className="space-y-2">
                  <h2
                    className={cn(
                      italiana.className,
                      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white uppercase italiana-bold"
                    )}
                  >
                    {service.detailContent.spotlightProject.title}
                  </h2>
                  <span
                    className={cn(
                      italiana.className,
                      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white uppercase"
                    )}
                  >
                    {service.detailContent.spotlightProject.name}
                  </span>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-white text-base sm:text-base md:text-lg lg:text-xl">
                    {service.detailContent.spotlightProject.description}
                  </p>

                  <p className="text-[#BEBEBE] text-sm sm:text-sm md:text-base lg:text-lg font-light">
                    {service.detailContent.spotlightProject.extendedDescription}
                  </p>

                  {service.detailContent.spotlightProject.valuePoints &&
                    service.detailContent.spotlightProject.valuePoints.length >
                      0 && (
                      <>
                        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-normal text-white">
                          {service.detailContent.spotlightProject.pointsHeading}
                        </h1>
                        <ul className="space-y-3 mt-6">
                          {service.detailContent.spotlightProject.valuePoints.map(
                            (point, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3 text-gray-300"
                              >
                                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                                <span>{point}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.detailContent?.testimonials &&
        service.detailContent.testimonials.testimonials.length > 0 && (
          <section className="bg-[#17181b] py-12 sm:py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Title */}
              <div className="mb-8 sm:mb-12 lg:mb-16 flex items-center justify-center uppercase max-w-4xl mx-auto">
                <h2
                  className={cn(
                    italiana.className,
                    "text-center text-4xl sm:text-4xl md:text-4xl lg:text-6xl 2xl:text-6xl 3xl:text-[120px] font-normal text-white italiana-bold"
                  )}
                >
                  {service.detailContent.testimonials.firstLine}{" "}
                  <span className={italiana.className}>
                    {service.detailContent.testimonials.secondLine}
                  </span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 sm:gap-8">
                {service.detailContent.testimonials.testimonials.map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="bg-[#0b0c0f] p-6 sm:p-8 md:p-10 lg:p-12 rounded-sm relative overflow-hidden"
                    >
                      <div className="flex flex-col h-full relative z-10">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
                          {testimonial.name} — {testimonial.role}
                        </h3>
                        <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base max-w-4xl">
                          {testimonial.text}
                        </p>
                        <div className="flex mt-auto">
                          <div className="flex">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, starIndex) => (
                                <Star
                                  key={starIndex}
                                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                                  fill="white"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-12">
                        <video
                          className="bg-transparent"
                          src="/video/quote.mov"
                          width={200}
                          height={400}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}

      {service.detailContent?.innovationSections && (
        <section className="bg-[#17181b]">
          <InnovationSection
            firstLine={service.detailContent.innovationSections.firstLine}
            secondLine={service.detailContent.innovationSections.secondLine}
            innovationSections={
              service.detailContent.innovationSections.InnovationSection
            }
          />
        </section>
      )}

      {service.detailContent?.ctaSection && (
        <section className="bg-[#17181b] py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10">
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white uppercase max-w-5xl mx-auto">
                <span className={cn(italiana.className, "italiana-bold")}>
                  {service.detailContent.ctaSection.firstLine}{" "}
                </span>
                <span className={italiana.className}>
                  {service.detailContent.ctaSection.secondLine}
                </span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-4xl mx-auto uppercase">
                {service.detailContent.ctaSection.subtitle}
              </p>

              <div className="pt-6 sm:pt-8 md:pt-10 uppercase">
                <Button href="/contact">
                  {service.detailContent.ctaSection.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="flex flex-col antialiased items-center justify-center relative overflow-hidden pb-20 -mt-10 bg-[#17181b]">
        <InfiniteMovingCards items={items} direction="left" speed="fast" />
      </section>
    </div>
  );
}
