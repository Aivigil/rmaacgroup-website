"use client";

import { useState, useEffect, use } from "react";
import Navbar from "@/components/ui/Navbar";
import { ArrowDown, ChevronDown } from "lucide-react";
import { Italiana, Inter } from "next/font/google";
import { cn } from "@/util/util";
import Button from "@/components/ui/button";
import Image from "next/image";
import DigitalImpactSection from "@/components/automations/DigitalImpactSection";
import TipOfSection from "@/components/automations/TipOfSection";
import { notFound, useRouter } from "next/navigation";
import { automationsPageData } from "@/util/automationsData";
import Link from "next/link";
import CaseStudyCarousel from "@/components/automations/CaseStudyCarousel";
import { portfolioData } from "@/util/portfolioData";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

interface AutomationsPageProps {
  params: Promise<{
    title: string;
  }>;
}

export default function Automations({ params }: AutomationsPageProps) {
  const resolvedParams = use(params);
  const automationData = automationsPageData.find(
    (data) => data.title.toLowerCase() === resolvedParams.title.toLowerCase()
  );

  if (!automationData) {
    notFound();
  }

  // Determine background image based on automation type
  let backgroundImage = "";
  switch (automationData.title) {
    case "automations":
      backgroundImage = "/image/portfolio/bg/automations-bg.jpg";
      break;
    case "digital-success":
      backgroundImage = "/image/portfolio/bg/digital-bg.jpg";
      break;
    case "real-estate":
      backgroundImage = "/image/portfolio/bg/real-estate-bg.jpg";
      break;
    case "mobile-solutions":
      backgroundImage = "/image/portfolio/bg/mobile-bg.jpg";
      break;
    case "healthcare":
      backgroundImage = "/image/portfolio/bg/health-bg.jpg";
      break;
    default:
      backgroundImage = "";
  }

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [animationActive, setAnimationActive] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>("");
  const router = useRouter();

  const handleCardClick = (card: string) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

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

  return (
    <div className="text-white relative overflow-hidden">
      {/* Hero section with dark background */}
      <div className="relative h-[140vh] bg-gradient-to-br from-[#0f1114] via-[#17181b] to-[#1a1b1e]">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/automations-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Navbar positioned with higher z-index */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-16 pb-12">
          {/* Small indicator text */}
          {/* <div className="mb-10 -mt-20">
            <p className="text-sm sm:text-base text-white uppercase">
              • {automationData.hero.indicator}
            </p>
          </div> */}

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <div className="size-20 sm:size-24 lg:size-32 rounded-full bg-white/10 border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors overflow-hidden">
                <ArrowDown className="size-4 sm:size-5 lg:size-6 text-white animate-scroll-arrow" />
              </div>
            </div>
          )}

          {/* Large animated "MEET THE AUTOMATIONS" text */}
          <div className="overflow-hidden flex flex-col items-center justify-center px-4 text-center mt-8">
            <h1
              // className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl transition-transform duration-1500 ease-in-out ${
              //   animationActive ? "translate-y-0" : "translate-y-full"
              // }`}
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl transition-transform duration-1500 ease-in-out"
              // style={{
              //   animation: animationActive
              //     ? "fade-in-up-out 3s infinite"
              //     : "none",
              // }}
            >
              <span className={cn(italiana.className, "block mb-2 lg:mb-4")}>
                {automationData.hero.title.line1}
              </span>
            </h1>

            <h1
              className={`text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl mt-10`}
            >
              <span className="block mb-2 lg:mb-4">
                {automationData.hero.title.line2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 lg:mb-16 mt-10">
              {automationData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>{automationData.hero.buttons.primary}</Button>
              {automationData.hero.buttons.secondary && (
                <Button>{automationData.hero.buttons.secondary}</Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Digital Solutions Section */}
      <div className="bg-[#17181b] py-20 px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {automationData.digitalSolutions.title.main}{" "}
              <span className={italiana.className}>
                {automationData.digitalSolutions.title.italic}
              </span>
            </h2>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto">
              {automationData.digitalSolutions.description}
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto">
            {automationData.digitalSolutions.solutions.map(
              (solution, index) => (
                <div
                  key={index}
                  className="bg-[#1e2127] rounded-2xl overflow-hidden"
                >
                  <div className="bg-white flex items-center justify-center">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={330}
                      height={330}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-3 text-center">
                      {solution.title}
                    </h3>
                    <p className="text-white/80 text-sm text-center">
                      {solution.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#17181b] pb-20 px-4 sm:px-6 lg:px-8">
        <Link href={automationData.digitalSolutions.button.link}>
          <Button>{automationData.digitalSolutions.button.text}</Button>
        </Link>
      </div>
      {/* Case Studies Section */}
      <div className="bg-[#17181b] py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Image with Overlay */}
        {backgroundImage && (
          <>
            <div className="absolute inset-0 z-0">
              <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover opacity-20"
              />
            </div>
            {/* Gradient Overlay for smooth blending */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#17181b] via-transparent to-[#17181b]"></div>
          </>
        )}
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6">
              {automationData.caseStudies.title.main}{" "}
              <span className={italiana.className}>
                {automationData.caseStudies.title.italic}
              </span>
            </h2>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(automationData.caseStudies.cases).map(
              ([caseKey, caseData], index) => {
                const isAiVigil =
                  caseData.logo === "/image/portfolio/case/ai-vigil.png";
                const isScalingSuite =
                  caseData.logo === "/image/portfolio/case/scaling-suite.png";
                const isPremierGP =
                  caseData.logo ===
                  "/image/portfolio/case/premier-private-gp.png";
                const isShiptQuick =
                  caseData.logo === "/image/portfolio/case/shipt-quick.png";
                const isZenRetreats =
                  caseData.logo === "/image/portfolio/case/zen-retreats.png";
                const isBackify = caseData.mainTitle === "Backify";
                const isMagicAI = caseData.mainTitle === "Magic Ai";
                const isShipFinder = caseData.mainTitle === "Ship Finder";
                const isSIMPLHealth =
                  caseData.logo === "/image/portfolio/case/simpl.png";
                const isSehatZindagi =
                  caseData.logo === "/image/portfolio/case/sehat-zindgi.png";
                const hasCustomGradient =
                  isAiVigil ||
                  isScalingSuite ||
                  isPremierGP ||
                  isShiptQuick ||
                  isZenRetreats ||
                  isBackify ||
                  isMagicAI ||
                  isShipFinder ||
                  isSIMPLHealth ||
                  isSehatZindagi;
                const gradientClass = hasCustomGradient
                  ? ""
                  : "bg-gradient-to-br from-[#0f1c2d] to-[#1c3654]";
                const borderColor = isAiVigil
                  ? "border-purple-400"
                  : "border-blue-400";

                let gradientStyle;
                if (isAiVigil) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(43,32,78) 0%, rgb(26, 26, 62) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isScalingSuite) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(32, 52, 74) 0%, rgb(32, 52, 74) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isPremierGP) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(48, 42, 72) 0%, rgb(48, 42, 72) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isBackify) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(42, 40, 28) 0%, rgb(42, 40, 28) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isShiptQuick || isZenRetreats) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(12, 40, 38) 0%, rgb(12, 40, 38) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isMagicAI) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(52, 28, 72) 0%, rgb(52, 28, 72) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isShipFinder) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(38, 28, 58) 0%, rgb(38, 28, 58) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isSIMPLHealth) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(18, 28, 22) 0%, rgb(18, 28, 22) 45%, rgb(13, 13, 13) 100%)",
                  };
                } else if (isSehatZindagi) {
                  gradientStyle = {
                    background:
                      "linear-gradient(to bottom right, rgb(28, 48, 38) 0%, rgb(28, 48, 38) 45%, rgb(13, 13, 13) 100%)",
                  };
                }

                return (
                  <div
                    key={caseKey}
                    className={`${gradientClass} rounded-3xl overflow-hidden`}
                    style={gradientStyle}
                  >
                    <div className="p-10">
                      <div className="mb-6">
                        <div className="flex items-center">
                          {caseData.logo ? (
                            <Image
                              src={caseData.logo}
                              alt=""
                              width={caseData.logoWidth}
                              height={caseData.logoHeight}
                              className="-mr-20"
                            />
                          ) : (
                            <h3 className="text-2xl sm:text-5xl font-semibold ">
                              {caseData.mainTitle}
                            </h3>
                          )}
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-normal mb-4 mt-10 text-center">
                        {caseData.title}
                      </h3>
                      <p className="text-white/80 mb-8 text-center">
                        {caseData.description}
                      </p>
                      <button
                        onClick={() => handleCardClick(caseKey)}
                        className="flex items-center text-white font-medium"
                      >
                        {caseData.buttonText}
                        <ChevronDown className="ml-2 mt-1" />
                      </button>
                      {expandedCard === caseKey && (
                        <div className="mt-6">
                          <h4 className="text-2xl font-semibold mb-4">
                            {caseData.expandedContent.title}
                          </h4>
                          {caseData.expandedContent.description && (
                            <p className="text-white/80 mb-6">
                              {caseData.expandedContent.description}
                            </p>
                          )}
                          <div className="space-y-6">
                            {caseData.expandedContent.phases.map(
                              (phase, phaseIndex) => (
                                <div
                                  key={phaseIndex}
                                  className={`border-l-4 ${borderColor} pl-6 py-4`}
                                >
                                  <h5 className="text-xl font-semibold mb-3 text-white">
                                    {phase.title}
                                  </h5>
                                  <p className="text-white/80">
                                    {phase.description}
                                  </p>
                                </div>
                              )
                            )}
                          </div>
                          <div
                            className="text-white rounded-2xl p-4 mt-10 text-center flex flex-col items-center justify-center"
                            style={gradientStyle}
                          >
                            {caseData.expandedContent.numbers.map(
                              (number, index) => (
                                <div key={index}>
                                  <h1 className="text-3xl font-semibold mb-4">
                                    {number.title}
                                  </h1>
                                  {number.points.map((point, index) => (
                                    <p
                                      className="text-2xl text-white/80 mb-2"
                                      key={index}
                                    >
                                      {point}
                                    </p>
                                  ))}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Case Study Carousel */}
      {automationData.title === "digital-success" && (
        <CaseStudyCarousel
          cards={portfolioData.map((item, index) => ({
            id: index.toString(),
            bgImage: item.bgImage,
            logo: item.logo,
            title: item.title,
            logoWidth: item.logoWidth,
            logoHeight: item.logoHeight,
            description: item.description,
          }))}
        />
      )}

      {/* Digital Impact Section */}
      <DigitalImpactSection data={automationData} />

      {/* Tip of the Iceberg Section */}
      <TipOfSection data={automationData} />

      <div className="bg-[#17181b] py-10 px-4 sm:px-6 lg:px-8" />

      {/* Final CTA Section */}
      <div className="bg-[#0b0c0f] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Stats */}
          <div>
            <h2
              className={cn(
                italiana.className,
                "text-4xl sm:text-5xl lg:text-5xl mb-4 text-white"
              )}
            >
              <span
                className={cn(
                  inter.className,
                  "text-white font-bold text-4xl sm:text-5xl lg:text-5xl"
                )}
              >
                {automationData.finalCTA.stats.bold1
                  ?.split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}{" "}
                      {index <
                        automationData.finalCTA.stats.bold1!.split("\n")
                          .length -
                          1 && <br />}
                    </span>
                  ))}
              </span>
              {automationData.finalCTA.stats.italic1
                ?.split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}{" "}
                    {index <
                      automationData.finalCTA.stats.italic1!.split("\n")
                        .length -
                        1 && <br />}
                  </span>
                ))}
              <span
                className={cn(
                  inter.className,
                  "text-white font-bold text-4xl sm:text-5xl lg:text-5xl"
                )}
              >
                {automationData.finalCTA.stats.bold2
                  ?.split("\n")
                  .map((line, index) => (
                    <span key={index}>
                      {line}{" "}
                      {index <
                        automationData.finalCTA.stats.bold2!.split("\n")
                          .length -
                          1 && <br />}
                    </span>
                  ))}
              </span>
              {automationData.finalCTA.stats.italic2
                ?.split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}{" "}
                    {index <
                      automationData.finalCTA.stats.italic2!.split("\n")
                        .length -
                        1 && <br />}
                  </span>
                ))}
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-5xl font-semibold text-white leading-relaxed">
              {automationData.finalCTA.stats.bold3
                ?.split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}{" "}
                    {index <
                      automationData.finalCTA.stats.bold3!.split("\n").length -
                        1 && <br />}
                  </span>
                ))}
            </h3>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center pt-10 pb-20 px-4">
        {/* Main Content */}
        <div>
          <h4 className="text-3xl sm:text-3xl lg:text-4xl font-normal mb-8 text-white">
            {automationData.finalCTA.title.split(" ").slice(0, 6).join(" ")}{" "}
            <br className="hidden sm:block" />
            {automationData.finalCTA.title.split(" ").slice(6).join(" ")}
          </h4>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
            {automationData.finalCTA.description}
          </p>
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center"
          onClick={() => router.push("/contact")}
        >
          <Button size="lg" className="w-[300px]">
            {automationData.finalCTA.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
