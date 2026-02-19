"use client";

import Navbar from "@/components/ui/Navbar";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0f1114]">
      <Navbar />
      {/* Header Section */}
      <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          {/* <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></span>
              <span className="uppercase">Case Study</span>
            </div>
          </div> */}

          {/* Main Content - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-32 items-start">
            {/* Left Column - Large Title Skeleton */}
            <div>
              <div className="space-y-4">
                <div className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 bg-gray-700 rounded animate-pulse"></div>
                {/* <div className="h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-28 bg-gray-700 rounded animate-pulse w-3/4"></div> */}
              </div>
            </div>

            {/* Right Column - Description Skeleton */}
            <div className="flex justify-start lg:justify-end">
              <div className="max-w-sm sm:max-w-md lg:max-w-lg space-y-3">
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Main Image Section Skeleton */}
      <section className="bg-[#0f1114] px-4 sm:px-6 lg:px-20 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-lg overflow-hidden bg-gray-700 animate-pulse"></div>
        </div>
      </section>

      {/* Section Skeletons */}
      {[...Array(7)].map((_, index) => (
        <section
          key={index}
          className="bg-[#0f1114] px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-8">
              {/* Section Title Skeleton */}
              <div className="h-8 sm:h-10 lg:h-12 bg-gray-700 rounded animate-pulse w-1/3"></div>

              {/* Section Content Skeleton */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
                </div>
                <div className="h-48 sm:h-64 lg:h-80 bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
