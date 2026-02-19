import { cn } from "@/util/util";
import { PlayIcon } from "lucide-react";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function TipOfSection({ data }: { data: any }) {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 rounded-t-[100px] relative overflow-hidden">
      {/* Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left vertical line */}
        <div className="absolute left-[12%] top-0 bottom-0 w-px bg-gray-300"></div>
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
        {/* Right vertical line */}
        <div className="absolute right-[12%] top-0 bottom-0 w-px bg-gray-300"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black">
            {data.tipOfIceberg.title.main}{" "}
            <span className={cn(italiana.className, "text-black")}>
              {data.tipOfIceberg.title.italic}
            </span>
          </h2>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-gray-700">
            {data.tipOfIceberg.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.tipOfIceberg.services.map((service: any, index: number) => (
            <div
              key={index}
              className="bg-gray-200 rounded-3xl p-8 h-[400px] flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-8 text-black">
                {service.title}
              </h3>

              <div className="space-y-4 flex-1">
                {service.features.map((feature: any, featureIndex: number) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-black"
                  >
                    <PlayIcon className="size-4 mr-4 fill-black" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
