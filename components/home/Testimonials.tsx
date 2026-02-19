"use client";

import { useState } from "react";
import Image from "next/image";

// Testimonial interface
interface Testimonial {
  name: string;
  quote: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "JASON H.",
      quote:
        '"RELIABLE, PROFESSIONAL, AND HIGHLY SKILLED. WE COULDN\'T BE HAPPIER WITH THE RESULTS!"',
    },
    {
      name: "BRIAN SCHILLER",
      quote:
        '"EXCELLENT SERVICE AND OUTSTANDING QUALITY! THEY TRULY CARE ABOUT THEIR CLIENTS AND DELIVER BEYOND EXPECTATIONS!"',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstTestimonial = currentIndex === 0;
    const newIndex = isFirstTestimonial
      ? testimonials.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastTestimonial = currentIndex === testimonials.length - 1;
    const newIndex = isLastTestimonial ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {/* add a separator line */}
      <div className="w-full h-px bg-gray-600 mb-6 sm:mb-8 mt-12 sm:mt-16 border-t border-gray-600" />

      {/* Customer Testimonial */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8">
        <div className="transition-opacity duration-300 flex-1">
          <h4 className="text-white uppercase text-xs sm:text-sm mb-2 font-semibold">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-4xl">
            {testimonials[currentIndex].quote}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-4 sm:space-x-6 self-center sm:self-auto">
          <button
            className="text-gray-600 hover:text-white transition-colors p-2"
            onClick={goToPrevious}
          >
            <Image
              src="/image/arrow-left.svg"
              alt="Previous Testimonial"
              width={100}
              height={100}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-30 hover:opacity-100 transition-opacity"
            />
          </button>
          <button
            className="text-gray-600 hover:text-white transition-colors p-2"
            onClick={goToNext}
          >
            <Image
              src="/image/arrow-right.svg"
              alt="Next Testimonial"
              width={100}
              height={100}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-30 hover:opacity-100 transition-opacity"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
