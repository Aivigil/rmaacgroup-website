import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image: string;
}

// Service data array
const services: Service[] = [
  {
    title: "Real Estate Development",
    description:
      "A premier residential project redefining community living in Nathia Gali",
    image: "/image/makeimpact/real.png",
  },
  {
    title: "Healthcare & Wellness",
    description:
      "Personalized private healthcare & wellness screenings, Healthcare Tech Investments, Backing digital innovation in patient experience & clinic automation",
    image: "/image/makeimpact/health.svg",
  },
  {
    title: "AI & Automation",
    description:
      "Managed IT & AI automation services for SMEs, AI Tools & Conversational Bots, Custom solutions for healthcare, sales and operations",
    image: "/image/makeimpact/ai.svg",
  },
  {
    title: "Technology & Mobile Innovation",
    description:
      "RMAAC Technologies: Delivering GTM Strategy apps, and digital platforms under Matkalytics. Proven track record in successful app launches & monetization",
    image: "/image/makeimpact/evo.png",
  },
];

const MakeImpactSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-white text-center">
            WHERE WE MAKE IMPACT
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-row items-center justify-between py-6 sm:py-8 md:py-12 border-b border-[#5c5e60] group hover:bg-gray-900/20 transition-colors duration-300 relative"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-16 xl:space-x-32 flex-1">
                <div className="hidden sm:flex size-10 sm:size-12 md:size-16 lg:size-20 rounded-full border border-[#5c5e60] items-center justify-center group-hover:border-white group-hover:bg-white transition-all duration-300 cursor-pointer ml-2 sm:ml-4 lg:ml-0 flex-shrink-0">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#5c5e60] group-hover:text-black group-hover:rotate-90 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-4xl font-semibold text-[#5c5e60] group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-sm sm:text-base md:text-lg max-w-4xl lg:text-xl text-[#5c5e60] group-hover:text-white transition-colors duration-300 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20">
                    {service.description}
                  </span>
                </div>
              </div>

              {/* Animated Bottom Line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ zIndex: 10000 }}
              />
              <Link href="/services" className="hover:cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={70}
                  height={50}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeImpactSection;
