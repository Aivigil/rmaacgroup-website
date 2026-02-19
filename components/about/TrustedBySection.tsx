"use client";

import { Plus, Star } from "lucide-react";
import { Italiana } from "next/font/google";
import { cn } from "@/util/util";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const TrustedBySection = () => {
  const testimonials = [
    {
      title: "FAST AND SECURE",
      content:
        "What stood out was how seriously the RMAAC team took our business. They weren't just building us a site — they were thinking through the sales logic, how the pages would convert, even how our LinkedIn outreach should sound. It's rare to find a team that can handle strategy, design, and execution at this level.",
      author: "Fatima Shah",
    },
    {
      title: "",
      content:
        "The difference before and after RMAAC is night and day. I used to spend hours explaining services to patients manually — now, everything is clear and easy to book online. They didn't just build us a website, they built us a system that works. Our patient flow has nearly doubled.",
      author: "Dr. Muddassar Ahmed",
    },
    {
      title: "",
      content:
        "We were growing fast and drowning in chaos — our website didn't reflect who we were, and leads weren't converting. RMAAC completely reworked our brand from the ground up. The site, the messaging, the campaigns... everything just clicked. We've had more qualified leads in the last 3 months than we did all last year.",
      author: "John Edward",
    },
  ];

  const profileImages = [
    "/image/about/rate-1.png",
    "/image/about/rate-2.png",
    "/image/about/rate-3.png",
  ];

  return (
    <section className="bg-[#17181b] text-white pt-12 sm:pt-16 lg:pt-20">
      <div>
        <div className="w-full h-px bg-gray-600" />
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
          {/* Left Side - Scrollable (60%) */}
          <div className="w-full lg:w-6/11 pl-4 sm:pl-6 lg:pl-52">
            <div className="max-h-[500px] sm:max-h-[600px] lg:max-h-[750px] overflow-y-auto">
              <div className="py-8 sm:py-12 lg:py-20">
                <div className="max-w-md">
                  {/* Main heading */}
                  <h2
                    className={cn(
                      italiana.className,
                      "text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 mt-2 sm:mt-5 italiana-bold"
                    )}
                  >
                    TRUSTED BY
                    <br />
                    25,000+
                    <br />
                    <span className={italiana.className}>CUSTOMERS</span>
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-10 lg:mb-12">
                    We're proud to work with passionate clients-and even prouder
                    to earn their trust. Here's what they had to say.
                  </p>

                  {/* Divider line */}
                  <div className="w-full h-px bg-gray-600 mb-8 sm:mb-10 lg:mb-12"></div>

                  {/* Rating section */}
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {/* Star icon */}
                    <div className="bg-[#2f3032] rounded-lg p-2 sm:p-3">
                      <Star
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                        fill="white"
                      />
                    </div>

                    {/* Rating text */}
                    <div>
                      <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
                        Rated{" "}
                        <span className="font-semibold text-white">4.9/5</span>{" "}
                        from over
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        <span className="font-semibold text-white">600</span>{" "}
                        review
                      </p>
                    </div>

                    {/* Profile images */}
                    <div className="flex -space-x-1 sm:-space-x-2">
                      {profileImages.map((image, index) => (
                        <div
                          key={index}
                          className="size-8 sm:size-10 lg:size-12 rounded-full border-2 border-[#17181b] overflow-hidden"
                        >
                          <img
                            src={image}
                            alt={`Profile ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="size-8 sm:size-10 lg:size-12 rounded-full border-2 border-gray-600 bg-white flex items-center justify-center">
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block w-px h-[500px] sm:h-[600px] lg:h-[750px] bg-gray-600"></div>

          {/* Right Side - Sticky (40%) */}
          <div className="w-full lg:w-5/11 lg:sticky lg:top-0 h-[500px] sm:h-[600px] lg:h-[750px]">
            <div className="bg-[#17181b] rounded-lg py-6 sm:py-8 lg:py-12 h-full overflow-y-auto">
              <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-4 sm:space-y-6">
                    {/* Title */}
                    <h3 className="text-xs sm:text-sm text-white font-medium px-4 sm:px-8 lg:px-20 pt-8 sm:pt-12 lg:pt-16">
                      {testimonial.title}
                    </h3>

                    {/* Content */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#bebebe] px-4 sm:px-8 lg:px-20 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <p className="italicExcellence text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-8 lg:px-20 pb-8 sm:pb-12 lg:pb-16">
                      {testimonial.author}
                    </p>

                    {/* Divider */}
                    {index < testimonials.length - 1 && (
                      <div className="w-full h-px bg-gray-600 mt-6 sm:mt-8 lg:mt-12"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
