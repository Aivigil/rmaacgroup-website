"use client";

interface ConclusionSectionProps {
  title?: string;
  content?: string;
}

const ConclusionSection = ({
  title = "Conclusion & Future Growth",
  content = "",
}: ConclusionSectionProps) => {
  return (
    <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
