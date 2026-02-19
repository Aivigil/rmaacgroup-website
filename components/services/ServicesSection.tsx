import { ArrowRightIcon } from "lucide-react";
import { Italiana } from "next/font/google";
import Link from "next/link";
import { services } from "@/util/servicesData";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ServicesSection = () => {
  return (
    <section className="bg-white text-black relative overflow-hidden py-12 sm:py-16 lg:py-20 rounded-t-[30px] sm:rounded-t-[40px] lg:rounded-t-[60px]">
      {/* 4 Vertical Lines - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block max-w-7xl mx-auto">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-300"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center lg:text-left mb-8 sm:mb-12 lg:mb-16 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span>Beyond Services</span>
            <br />
            We Deliver <span className={italiana.className}>Success</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative h-[300px] sm:h-[350px] lg:h-[400px] cursor-pointer transition-all duration-500 ease-in-out bg-[#eeeeee] hover:bg-black hover:text-white hover:scale-105 block"
            >
              {/* Card Content */}
              <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  {/* Title */}
                  <div className="mb-4 sm:mb-6 mt-2 sm:mt-5 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl whitespace-pre-line min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] flex items-start">
                      {service.displayTitle}
                    </h3>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex">
                    <div className="size-16 sm:size-20 lg:size-24 bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors duration-500">
                      <ArrowRightIcon className="text-white group-hover:text-black transition-all duration-500 group-hover:-rotate-45 size-4 sm:size-5 lg:size-6" />
                    </div>
                  </div>
                </div>

                {/* Description - Always visible */}
                <div className="mb-4 sm:mb-6 flex-grow">
                  <p className="text-gray-600 group-hover:text-gray-300 text-xs sm:text-sm transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Features - Only visible on hover */}
                <div className="transition-all duration-500 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 sm:group-hover:max-h-40 overflow-hidden">
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-xs sm:text-sm text-gray-300 flex items-center"
                      >
                        <span className="w-1 h-1 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
