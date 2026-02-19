"use client";

import Image from "next/image";

interface BrandingSectionProps {
  title?: string;
  content?: string;
  points?: string[];
  cta?: string;
  image?: string;
}

const BrandingSection = ({
  title = "Creating Marketing Material & Branding",
  content,
  points = [],
  cta,
  image,
}: BrandingSectionProps) => {
  // Split content into paragraphs if provided
  const contentParagraphs = content
    ? content.split("\n\n")
    : ["", ""];

  return (
    <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              {title}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {contentParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-400 text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {points && points.length > 0 && (
                <ul className="space-y-3 mt-6">
                  {points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {cta && (
                <p className="text-gray-400 text-sm sm:text-base">
                  {cta}
                </p>
              )}
            </div>
          </div>

          {/* Right Column - Branding Materials Image */}
          <div className="order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-transparent rounded-lg overflow-hidden">
              <Image
                src={image || "/image/case-studies/shiptquick-container.svg"}
                alt="ShiptQuick Branding Materials"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
