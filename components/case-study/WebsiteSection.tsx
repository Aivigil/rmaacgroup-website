"use client";

import Image from "next/image";

interface WebsiteSectionProps {
  title?: string;
  content?: string;
  features?: string[];
  image?: string;
}

const WebsiteSection = ({
  title = "Website Built",
  content,
  features = [],
  image,
}: WebsiteSectionProps) => {
  // Split content into paragraphs if provided
  const contentParagraphs = content
    ? content.split("\n\n")
    : ["", ""];

  return (
    <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 bg-[#1e2127] rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center py-8 sm:py-12 lg:py-16">
          {/* Left Column - Website Mockups */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-transparent rounded-lg overflow-hidden">
              <Image
                src={image || "/image/case-studies/shiptquick-container.svg"}
                alt="ShiptQuick Website Pages"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
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

              {features && features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white mb-4">
                    Key features:
                  </h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteSection;
