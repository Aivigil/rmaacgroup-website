"use client";

import Image from "next/image";

interface Service {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}

interface ServicesOverviewSectionNewProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    id: 1,
    title: "CONSTRUCTION",
    subtitle: "DEVELOPMENTS",
    image: "/image/service/service-2.jpg",
    alt: "Construction Development",
  },
  {
    id: 2,
    title: "IT",
    subtitle: "SERVICES",
    image: "/image/service/service-3.jpg",
    alt: "IT Services",
  },
  {
    id: 3,
    title: "MARKETING & SALES",
    subtitle: "OPTIMIZATION",
    image: "/image/service/service-1.jpg",
    alt: "Marketing & Sales",
  },
];

const ServicesOverviewSectionNew = ({
  services = defaultServices,
}: ServicesOverviewSectionNewProps) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-0">
      <div className="max-w-7xl mx-auto lg:mx-0 lg:max-w-none">
        <div>
          {/* Right - Rotating Images and Titles (50% width) */}
          <div className="relative px-4 sm:px-6 lg:px-8 ml-0 sm:ml-2 lg:ml-5 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] xl:h-[700px] flex flex-col justify-end">
            {services.map((service) => (
              <div
                key={service.id}
                className={`absolute inset-0 animate-service-rotate-${service.id} px-2 sm:px-4 lg:px-8 flex flex-col justify-end`}
              >
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-gray-500 to-gray-300 text-transparent bg-clip-text">
                    {service.title}
                    {service.subtitle && (
                      <>
                        <br />
                        {service.subtitle}
                      </>
                    )}
                  </h3>
                </div>
                <div className="relative h-screen bg-gray-700 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSectionNew;
