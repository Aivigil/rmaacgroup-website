import Image from "next/image";

const PortfolioSection = () => {
  const projects = [
    { id: 1, name: "ShiptQuick", image: "/image/ship.png", alt: "ShiptQuick" },
    { id: 2, name: "AI-Vigil", image: "/image/ai.png", alt: "AI-Vigil" },
    { id: 3, name: "Scootsee", image: "/image/scoot.png", alt: "Scootsee" },
    {
      id: 4,
      name: "Zen Retreats",
      image: "/image/zen.png",
      alt: "Zen Retreats",
    },
    {
      id: 5,
      name: "Premier Private GP",
      image: "/image/premier.png",
      alt: "Premier Private GP",
    },
  ];

  return (
    <section className="bg-white text-black rounded-t-[30px] sm:rounded-t-[40px] lg:rounded-t-[50px] relative overflow-hidden h-[600px] sm:h-[700px] lg:h-[800px]">
      {/* 4 Vertical Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/5 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="absolute left-2/5 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="absolute left-3/5 top-0 bottom-0 w-px bg-gray-300"></div>
        <div className="absolute left-4/5 top-0 bottom-0 w-px bg-gray-300"></div>
      </div>

      {/* Scrollable Content Container */}
      <div className="h-full overflow-y-auto overflow-hidden scrollbar-thumb-black scrollbar-track-gray-200">
        {/* Tall Content Container */}
        <div className="h-[1500px] sm:h-[1800px] lg:h-[2000px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Large spacer to push content down so images scroll over the text */}
          <div className="h-[600px] sm:h-[700px] lg:h-[800px]"></div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pb-12 sm:pb-16 lg:pb-20 relative z-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative h-[400px] sm:h-[500px] lg:h-screen overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 z-10"></div>
                <Image
                  src={project.image}
                  fill
                  alt={project.alt}
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Additional spacing at bottom */}
          <div className="h-48 sm:h-64 lg:h-96"></div>
        </div>
      </div>

      {/* Fixed Center Title - Positioned outside the scrollable area */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 pointer-events-none px-4">
        <div className="text-center">
          <h2 className="text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-[150px] 2xl:text-8xl 3xl:text-[150px]">
            CREATIVE
            <br />
            PORTFOLIO
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
