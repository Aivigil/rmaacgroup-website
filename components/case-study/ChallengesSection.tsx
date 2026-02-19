"use client";

interface ChallengesSectionProps {
  title?: string;
  content?: string;
  cta?: string;
  improvements?: string[];
  marketing?: {
    title?: string;
    content?: string;
    strategies?: string[];
  };
}

const ChallengesSection = ({
  title = "Challenges to Triumphs",
  content,
  cta,
  improvements = [],
  marketing = {
    title: "Marketing Strategy & Execution",
    content: "",
    strategies: [],
  },
}: ChallengesSectionProps) => {
  // Split content into paragraphs if provided
  const contentParagraphs = content
    ? content.split("\n\n")
    : [];

  // Split marketing content into paragraphs if provided
  const marketingContentParagraphs = marketing.content
    ? marketing.content.split("\n\n")
    : [];

  return (
    <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Column - Challenges to Triumphs */}
          <div className="space-y-6 sm:space-y-8">
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

              {cta && (
                <p className="text-gray-400 text-sm sm:text-base">
                  {cta}
                </p>
              )}

              {improvements && improvements.length > 0 && (
                <div className="mt-6">
                  <ul className="space-y-3">
                    {improvements.map((improvement, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Marketing Strategy & Execution */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              {marketing.title}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {marketingContentParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-400 text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {marketing.strategies && marketing.strategies.length > 0 && (
                <div className="mt-6">
                  <ul className="space-y-3">
                    {marketing.strategies.map((strategy, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                        <span>{strategy}</span>
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

export default ChallengesSection;
