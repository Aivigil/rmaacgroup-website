import { Italiana } from "next/font/google";
import Image from "next/image";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ReasonsSection = () => {
  const reasons = [
    {
      id: "01",
      title: "EXPERTISE & SPECIALIZATION",
      iconBlack: "/image/about/expertise-black.svg",
      iconWhite: "/image/about/expertise-white.svg",
      description: "We incubate and create new ventures with real-world relevance",
    },
    {
      id: "02",
      title: "RESULTS DRIVEN APPROACH",
      iconBlack: "/image/about/results-black.svg",
      iconWhite: "/image/about/results-white.svg",
      description: "We invest with aligned teams and startegic collaborators"
    },
    {
      id: "03",
      title: "SEAMLESS COLLABORATION",
      iconBlack: "/image/about/seamless-black.svg",
      iconWhite: "/image/about/seamless-white.svg",
      description: "We apply systems, automation, and market insight to grow efficiently",
    },
  ];

  return (
    <section className="bg-white text-black relative overflow-hidden py-12 sm:py-16 lg:py-20 rounded-t-[30px] sm:rounded-t-[40px] lg:rounded-t-[60px]">
      {/* 4 Vertical Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 max-w-7xl mx-auto">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-300"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-light max-w-3xl mx-auto">
            <span className='font-normal'>
              HERE ARE SOME REASONS
            </span>
            <span className={italiana.className}> WHY YOU WILL LOVE RMAAC</span>
          </h2>
          {/* <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto mt-2">
            Our approach is hands-on, strategic, and execution-led. We partner
            with founders and operators to drive growth, de-risk innovation, and
            unlock long-term value.
          </p> */}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={`group relative h-[500px] cursor-pointer transition-all duration-500 ease-in-out hover:bg-black hover:text-white bg-gray-100 ${
                index < reasons.length - 1
                  ? "border-r py-6 sm:py-8 lg:py-10 border-black md:border-black"
                  : "py-6 sm:py-8 lg:py-10"
              }`}
              style={{
                animationDuration: "0.6s",
                animationTimingFunction: "ease-out",
                animationFillMode: "both",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animation = "jelly-bounce 0.6s ease-out";
              }}
              onAnimationEnd={(e) => {
                e.currentTarget.style.animation = "";
              }}
            >
              {/* Card Content */}
              <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between items-center md:items-start text-center md:text-left">
                {/* Icon */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  {/* Show white icon on hover (black background), black icon by default */}
                  <div className="hidden group-hover:block">
                    <Image
                      src={reason.iconWhite}
                      alt={`${reason.title} icon`}
                      width={82}
                      height={82}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto md:mx-0"
                    />
                  </div>
                  <div className="block group-hover:hidden">
                    <Image
                      src={reason.iconBlack}
                      alt={`${reason.title} icon`}
                      width={82}
                      height={82}
                      className="w-20 h-20 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto md:mx-0"
                    />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-2 sm:mb-3 lg:mb-4 w-full text-center md:text-left mt-5">
                  {/* <span className="text-lg sm:text-2xl font-light opacity-70">
                    {reason.id}
                  </span> */}
                </div>

                {/* Title */}
                <div className="mb-4 sm:mb-6 lg:mb-8 w-full">
                  <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-normal whitespace-pre-line">
                    {reason.title}
                  </h3>
                </div>

                {/* Description - Only visible on hover */}
                <div className="transition-all duration-500 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 sm:group-hover:max-h-40 overflow-hidden w-full">
                  <p className="text-2xl sm:text-sm md:text-base mb-4 sm:mb-6 lg:mb-8">
                    {reason.description}
                  </p>
                </div>

                {/* Work With Us Button */}
                <div className="mt-auto flex flex-col items-center text-center md:items-start w-full">
                  <div className="w-40 sm:w-28 lg:w-32 h-px bg-current mb-2 sm:mb-3 lg:mb-4" />
                  <div className="ml-1.5">
                    <button className="text-lg sm:text-sm font-medium hover:opacity-70 transition-opacity hover:cursor-pointer mx-auto block">
                      WORK WITH US
                    </button>
                  </div>
                  <div className="w-40 sm:w-28 lg:w-32 h-px bg-current mt-2 sm:mt-3 lg:mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
