"use client";

import { Italiana } from "next/font/google";
import { cn } from "@/util/util";
import Button from "../ui/button";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "HASAN SAIFULLAH",
    role: "CRO & CMO",
    description:
      "Maximizing growth and revenue through strategic, data-driven insights. Elevating brand presence with marketing strategies.",
    image: "/image/about/team/hasan.jpg",
    alt: "Hasan Saifullah",
  },
  {
    id: 2,
    name: "MUNEEB AHMED",
    role: "MANAGING DIRECTOR",
    description:
      "Leading with vision and strategy to drive innovation, growth, and success.",
    image: "/image/about/team/muneeb.jpg",
    alt: "Muneeb Ahmed",
  },
  {
    id: 3,
    name: "SHEZRAH ABBASI",
    role: "PROJECT MANAGER",
    description:
      "Ensuring seamless execution and timely delivery through strategic planning and coordination.",
    image: "/image/about/team/shezrah.jpg",
    alt: "Shezrah Abbasi",
  },
  {
    id: 4,
    name: "ANAUM NAWAZ",
    role: "MANAGER HR OPERATIONS",
    description:
      "Anaum keeps the engine running. With a sharp eye for process and people, she ensures every project moves on time and on point.",
    image: "/image/about/team/anaum.jpg",
    alt: "Anaum Nawaz",
  },
  {
    id: 5,
    name: "MUHAMMAD UMAIR",
    role: "MANAGER FINANCE",
    description:
      "Umair makes the numbers talk. From forecasting to financial strategy, he helps us scale with stability and smart decision-making.",
    image: "/image/about/team/umair.jpg",
    alt: "Muhammad Umair",
  },
  {
    id: 6,
    name: "SLIHA AWAN",
    role: "SR. DIGITAL MARKETING STRATEGIST",
    description:
      "Sliha leads with words that move. Whether it's storytelling or strategy, she builds narratives that connect, convert, and resonate.",
    image: "/image/about/team/sliha.jpg",
    alt: "Sliha Awan",
  },
  {
    id: 7,
    name: "WALEED RATTU",
    role: "UI/GRAPHIC DESIGNER",
    description:
      "Waleed turns ideas into visuals. His design instincts shape how the world sees RMAAC - sleek, clean and unforgettable",
    image: "/image/about/team/waleed.jpg",
    alt: "Waleed Rattu",
  },
  {
    id: 8,
    name: "FAKIHA NADEEM",
    role: "MARKETING EXECUTIVE",
    description:
      "Fakiha creates words with hearts. From websites to campaigns, she turns complex ideas into simple, compelling content.",
    image: "/image/about/team/fakiha.jpg",
    alt: "Fakiha Nadeem",
  },
  {
    id: 9,
    name: "MOHSIN AMIN",
    role: "SR WORDPRESS DEVELOPER",
    description:
      "Mohsin is the creative engine behind our digital presence, a passionate Wordpress developer who turns ideas into high-performing websites.",
    image: "/image/about/team/mohsin.jpg",
    alt: "Mohsin Amin",
  },
  {
    id: 10,
    name: "ABIYA",
    role: "DIGITAL MARKETING STRATEGIST",
    description:
      "With a knack for turning raw ideas into scroll-stopping magic, she makes sure every campaign and website feels like it was just for you.",
    image: "/image/about/team/abiya.jpg",
    alt: "Abiya",
  },
  {
    id: 11,
    name: "WAQIF",
    role: "SOCIAL MEDIA MANAGER",
    description:
      "Waqif overseas digital strategy, content creation, and audience engagement across all platforms.",
    image: "/image/about/team/waqif.jpg",
    alt: "Waqif",
  },
  {
    id: 12,
    name: "M. NADEEM",
    role: ".NET DEVELOPER",
    description:
      "Nadeem makes the complex simple. He develops scalable .NET solutions that keep our systems efficient and secure.",
    image: "/image/about/team/nadeem.jpg",
    alt: "M. Nadeem",
  },
  {
    id: 13,
    name: "SAREER",
    role: "ASO EXPERT",
    description:
      "Sareer is our ASO Expert who transforms app visibility into real results, making sure every swipe, search, and download counts.",
    image: "/image/about/team/sareer.jpg",
    alt: "Sareer",
  },
  {
    id: 14,
    name: "HIRA",
    role: "MOBILE APP DEVELOPER",
    description:
      "Hira is a passionate mobile app developer with expertise in Flutter, Kotlin, and Machine Learning, dedicated to building innovative applications.",
    image: "/image/about/team/hira.jpg",
    alt: "Hira",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className={cn(
              italiana.className,
              "text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light italiana-bold"
            )}
          >
            THE TEAM BEHIND{" "}
            <span className={cn(italiana.className)}>RMAAC</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative h-40 sm:h-44 lg:h-52 cursor-pointer transition-all duration-500 ease-in-out hover:bg-white hover:text-black bg-[#17181b] border border-[#2a3441] hover:border-gray-300 hover:scale-105 rounded-none"
            >
              <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                {/* Top Section - Image and Name/Role */}
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4 lg:mb-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="size-12 sm:size-14 lg:size-16 rounded-full object-cover border-2 border-gray-600 group-hover:border-gray-400"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="flex-1">
                    {/* Role */}
                    <div className="mb-1 sm:mb-2">
                      <span className="text-xs font-light opacity-60 text-white group-hover:text-gray-800">
                        {member.role}
                      </span>
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-black">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-auto">
                  <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-700 font-light">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
          <Button
            href="/contact"
            size="md"
            className="text-xs sm:text-sm lg:text-base"
          >
            SEE MORE
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default TeamSection;
