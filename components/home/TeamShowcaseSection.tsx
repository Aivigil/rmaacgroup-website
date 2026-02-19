"use client";

import { Italiana } from "next/font/google";
import { cn } from "@/util/util";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  category: string;
}

const teamMembers: TeamMember[] = [
  // Management
  {
    id: 1,
    name: "MUNEEB AHMED",
    role: "MANAGING DIRECTOR",
    description:
      "Leading with vision and strategy to drive innovation, growth, and success.",
    image: "/image/about/team/muneeb.jpg",
    alt: "Muneeb Ahmed",
    category: "Management",
  },
  {
    id: 2,
    name: "NASAR AHMED",
    role: "CEO",
    description:
      "With 24+ years bridging finance and technology, he is committed to helping enterprises achieve operational excellence through strategic innovation and partnerships.",
    image: "/image/about/ceo.png",
    alt: "Nasar Ahmed",
    category: "Management",
  },
  {
    id: 3,
    name: "HASAN SAIFULLAH",
    role: "CRO & CMO",
    description:
      "Maximizing growth and revenue through strategic, data-driven insights. Elevating brand presence with marketing strategies.",
    image: "/image/about/team/hasan.jpg",
    alt: "Hasan Saifullah",
    category: "Management",
  },
  {
    id: 4,
    name: "SHEZRAH ABBASI",
    role: "PROJECT MANAGER",
    description:
      "Ensuring seamless execution and timely delivery through strategic planning and coordination.",
    image: "/image/about/team/shezrah.jpg",
    alt: "Shezrah Abbasi",
    category: "Management",
  },
  {
    id: 5,
    name: "ANAUM NAWAZ",
    role: "MANAGER OPERATIONS",
    description:
      "Anaum keeps the engine running. With a sharp eye for process and people, she ensures every project moves on time and on point.",
    image: "/image/about/team/anaum.jpg",
    alt: "Anaum Nawaz",
    category: "Management",
  },
  // Marketing
  {
    id: 6,
    name: "SLIHA AWAN",
    role: "HEAD OF CONTENT",
    description:
      "Sliha leads with words that move. Whether it's storytelling or strategy, she builds narratives that connect, convert, and resonate.",
    image: "/image/about/team/sliha.jpg",
    alt: "Sliha Awan",
    category: "Marketing",
  },
  {
    id: 7,
    name: "M. MANSOOR",
    role: "SOCIAL MEDIA MANAGER",
    description:
      "Mansoor oversees digital strategy, content creation, and audience engagement across all platforms.",
    image: "/image/about/team/mansoor.jpg",
    alt: "M. Mansoor",
    category: "Marketing",
  },
  {
    id: 8,
    name: "FAKIHA NADEEM",
    role: "MARKETING EXECUTIVE",
    description:
      "Fakiha creates words with hearts. From websites to campaigns, she turns complex ideas into simple, compelling content.",
    image: "/image/about/team/fakiha.jpg",
    alt: "Fakiha Nadeem",
    category: "Marketing",
  },
  {
    id: 9,
    name: "ABIYA ANJUM",
    role: "DIGITAL MARKETING STRATEGIST",
    description:
      "With a knack for turning raw ideas into scroll-stopping magic, she makes sure every campaign and website feels like it was just for you.",
    image: "/image/about/team/abiya.jpg",
    alt: "Abiya Anjum",
    category: "Marketing",
  },
  // Finance
  {
    id: 10,
    name: "MUHAMMAD UMAIR",
    role: "HEAD OF FINANCE",
    description:
      "Umair makes the numbers talk. From forecasting to financial strategy, he helps us scale with stability and smart decision-making.",
    image: "/image/about/team/umair.jpg",
    alt: "Muhammad Umair",
    category: "Finance",
  },
  // Design and Web Dev
  {
    id: 11,
    name: "HASSAN KHALID",
    role: ".NET DEVELOPER",
    description:
      "Hasan is an expert in cloud infrastructure, API development, and database optimization leading the Development team with his vision.",
    image: "/image/about/team/hassan_khalid.jpg",
    alt: "Hassan Khalid",
    category: "Design and Web Dev",
  },
  {
    id: 12,
    name: "MOHSIN AMIN",
    role: "SR WORDPRESS DEVELOPER",
    description:
      "Mohsin is the creative engine behind our digital presence, a passionate web developer with expertise in CRM and technical SEO.",
    image: "/image/about/team/mohsin.jpg",
    alt: "Mohsin Amin",
    category: "Design and Web Dev",
  },
  {
    id: 13,
    name: "WALEED RATTU",
    role: "UI/GRAPHIC DESIGNER",
    description:
      "Waleed turns ideas into visuals. His design instincts shape how the world sees RMAAC - sleek, clean and unforgettable",
    image: "/image/about/team/waleed.jpg",
    alt: "Waleed Rattu",
    category: "Design and Web Dev",
  },
  {
    id: 14,
    name: "M. NADEEM",
    role: ".NET DEVELOPER",
    description:
      "Nadeem makes the complex simple. He develops scalable .NET solutions that keep our systems efficient and secure.",
    image: "/image/about/team/nadeem.jpg",
    alt: "M. Nadeem",
    category: "Design and Web Dev",
  },
  // Apps
  {
    id: 15,
    name: "HASSAN ALI",
    role: "ASO EXPERT",
    description:
      "Hasan is our ASO Expert who transforms app visibility into real results, making sure every swipe, search, and download counts.",
    image: "/image/about/team/hasan_ali.jpg",
    alt: "Hasan Ali",
    category: "Apps Team",
  },
  {
    id: 16,
    name: "FARAZ ALI",
    role: "MOBILE APP DEVELOPER",
    description:
      "Faraz is a passionate mobile app developer with expertise in Flutter, Kotlin, and Machine Learning, dedicated to building innovative applications.",
    image: "/image/about/team/abdullah.jpg",
    alt: "Faraz Ali",
    category: "Apps Team",
  },
  {
    id: 17,
    name: "M. AWAIS",
    role: "ANDROID DEVELOPER",
    description:
      "Awais is a seasoned Android engineer specializing in building robust, user-centric mobile applications.",
    image: "/image/about/team/awais.jpg",
    alt: "M. Awais",
    category: "Apps Team",
  },
  {
    id: 18,
    name: "ABDULLAH SALEEM",
    role: "JR. DEVELOPER",
    description:
      "Abdullah is a fast learner with strong foundation in UI/UX implementation, RESTful APIs, and agile development.",
    image: "/image/about/team/faraz_ali.jpg",
    alt: "Abdullah Saleem",
    category: "Apps Team",
  },
];

const TeamShowcaseSection = () => {
  const categories = [
    "Management",
    "Marketing",
    "Finance",
    "Design and Web Dev",
    "Apps Team",
  ];

  const getFilteredMembers = (category: string) => {
    return teamMembers.filter((member) => member.category === category);
  };

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

        {/* Tabs */}
        <Tabs defaultValue="Management" className="w-full">
          <TabsList className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center lg:grid lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 bg-transparent mb-24 sm:mb-8 md:mb-8 lg:mb-8 w-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-white data-[state=active]:bg-transparent data-[state=active]:text-white border border-gray-600 data-[state=active]:border-white rounded-2xl py-2 sm:py-3 px-2 sm:px-4 lg:px-6 font-normal uppercase text-[10px] sm:text-sm tracking-wider whitespace-nowrap"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Contents */}
          {categories.map((category) => {
            const members = getFilteredMembers(category);
            const remainder = members.length % 3;

            return (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
                  {members.map((member, index) => {
                    const isLastRow = index >= Math.floor(members.length / 3) * 3;
                    let className = "group relative h-40 sm:h-44 lg:h-52 cursor-pointer transition-all duration-500 ease-in-out hover:bg-white hover:text-black bg-[#17181b] border border-[#2a3441] hover:border-gray-300 hover:scale-105 rounded-none lg:col-span-2";

                    if (isLastRow) {
                      if (remainder === 1) {
                        className += " lg:col-start-3";
                      } else if (remainder === 2 && index === members.length - 2) {
                        className += " lg:col-start-2";
                      }
                    }

                    return (
                      <div
                        key={member.id}
                        className={className}
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
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-black">
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
                    );
                  })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default TeamShowcaseSection;
