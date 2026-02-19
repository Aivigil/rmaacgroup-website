"use client";

import { Italiana } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Navigation items data structure - Company timeline cards
const navigationItems = [
  {
    id: "our-work",
    title: "Our Work",
    href: "/portfolio",
    icon: "/image/hero/navigation/our-work.png",
    grayIcon: "/image/hero/navigation/our-work-gray.png",
  },
  {
    id: "work-with-us",
    title: "Work with us",
    href: "/contact",
    icon: "/image/hero/navigation/work-with-us.png", 
    grayIcon: "/image/hero/navigation/work-with-us-gray.png",
  },
  {
    id: "services",
    title: "Services",
    href: "/services",
    icon: "/image/hero/navigation/services.png", 
    grayIcon: "/image/hero/navigation/services-gray.png",
  },
  {
    id: "about-us",
    title: "About Us",
    href: "/about",
    icon: "/image/hero/navigation/about-us.png",
    grayIcon: "/image/hero/navigation/about-us-gray.png",
  },
];

const AINavigationSection = () => {
  return (
    <section className="min-h-screen relative bg-[#17181b] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center min-h-[400px] lg:min-h-[400px]">
            {/* Left Content - Takes up 2/3 of the space */}
            <div className="lg:col-span-1 text-white">
              <h1
                className={`text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal mb-8`}
              >
                YOUR FUTURE,
                <br />
                <span className={`${italiana.className} text-gray-300`}>
                  ENGINEERED BY AI
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-base text-gray-300">
                FROM SMARTER HEALTHCARE TO SECURE IT AND MODERN LIVING, WE
                DESIGN VENTURES THAT BRING AI INTO EVERYDAY IMPACT.
              </p>
            </div>

            {/* Right Image - Takes up 1/3 of the space */}
            <div className="lg:col-span-1">
              <Image
                src="/image/hero/navigation/image.jpg"
                alt="AI Future Background"
                width={600}
                height={400}
                className="w-full h-[300px] lg:h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {navigationItems.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-[#18181a] border border-gray-800 rounded-xl pr-6 pb-6 hover:bg-[#d9d9d9] transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-14 bg-[#d9d9d9] rounded-tl-lg rounded-br-lg flex items-center justify-center relative overflow-hidden">
                    {/* Gray icon - shown by default */}
                    <Image
                      src={item.grayIcon}
                      alt={`${item.title} icon`}
                      width={40}
                      height={40}
                      className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                    />
                    {/* Colored icon - shown on hover */}
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={40}
                      height={40}
                      className="object-contain absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="size-10 bg-black rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300 mt-4 -mr-3">
                    <ArrowRightIcon className="size-6 text-white group-hover:text-black group-hover:-rotate-45 transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-white group-hover:text-black text-2xl font-normal pl-4 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AINavigationSection;
