import { Italiana } from "next/font/google";
import Image from "next/image";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const EmpoweringSection = () => {
  return (
    <section className="min-h-screen relative">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-40 rotate-180"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/video/about-landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#17181b] to-transparent z-10"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="bg-[#18181a] rounded-2xl backdrop-blur-sm relative h-full">
              {/* Image Container */}
              <div className="relative h-52 -mt-1">
                <Image
                  src="/image/about/empowering/empowering-1.jpg"
                  alt="Empowering Visionaries"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="p-6 flex flex-col">
                {/* Main Heading */}
                <h2
                  className="text-3xl sm:text-3xl lg:text-4xl font-semibold h-20"
                >
                  DRIVEN BY AI
                </h2>

                {/* Description */}
                <p className="text-base text-[#BEBEBE] ">
                  WE BUILD SMARTER TOOLS POWERED BY DATA AND AUTOMATION TO OPEN DOORS TO NEW POSSIBILITIES.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-[#18181a] rounded-2xl backdrop-blur-sm relative h-full">
              {/* Image Container */}
              <div className="relative h-52 -mt-1">
                <Image
                  src="/image/about/empowering/empowering-2.jpg"
                  alt="Mission Statement"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="p-6 flex flex-col">
                {/* Mission Statement */}
                <h2
                  className="text-3xl sm:text-3xl lg:text-4xl font-semibold h-20"
                >
                  OUR VISION
                </h2>

                <p className="text-base text-[#BEBEBE]">
                  WE BELIEVE TECHNOLOGY SHOULD SERVE HUMANITY, AND WE WORK EVERYDAY TO MAKE THAT VISION REAL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
