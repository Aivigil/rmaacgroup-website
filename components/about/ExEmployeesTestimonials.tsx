"use client";

import { Italiana } from "next/font/google";
import { cn } from "@/util/util";
import Image from "next/image";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Faizan",
    role: "Ex Finance manager",
    quote:
      "I spent the whole one year with RMAAC as Manager HR Operations. The best thing that i loved was that the organizational stakeholders were very open to new ideas and their integration into the system. Management is always very keen to listen to the problems and does their best provide solutions to them. Organization focuses on continuous learning and development of employees. Not a single day I felt unheard. It felt like home.",
    rating: 5,
  },
  {
    id: 2,
    name: "Hira",
    role: "Ex Apps Developer",
    quote:
      "From day one it has been full of learning with some very interesting projects. Overall, the team is very supportive and kind, especially the CEO, Sir Nasar, who is one of the coolest CEOs I have ever met. I think leaving a workplace like RMAAC was one of the toughest things I had to do.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sareer",
    role: "Ex ASO Expert",
    quote:
      "RMAAC has given me the opportunity to work, learn, and grow alongside such an incredible team. My time here has been a truly rewarding experience from gaining hands-on exposure in real projects to learning the importance of strategy, teamwork, and leadership. The guidance and trust I've received, especially from Nasar Ahmad, have been instrumental in shaping my professional journey. I'm deeply grateful to my colleagues and mentors for their constant support, encouragement, and collaboration. Every challenge turned into a learning curve, and every success felt bigger because it was achieved together.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fakiha",
    role: "Marketing Executive",
    quote:
      "I started my journey at RMAAC as an intern a year ago and I must say, this one year has provided me with a solid start to my career where I got to work on different projects every single month. What i love the most is how there is absolutely no monotony. For each project, I might be working on websites or social media or emails or campaigns. As an employee at RMAAC, your workday is guaranteed to be exciting every day",
    rating: 5,
  },
];

const ExEmployeesTestimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-white ${
          index < rating ? "opacity-100" : "opacity-30"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="bg-[#17181b] pb-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white">
            <span className="font-normal">SEE WHAT OUR BRILLIANT</span>
            <br />
            <span className={cn(italiana.className)}>
              EX EMPLOYEES HAVE TO SAY
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-[#0b0d0f] border border-[#0b0d0f] p-6 sm:p-8 lg:p-10 rounded-lg"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-white/20 text-6xl sm:text-7xl lg:text-8xl font-serif">
                <Image
                  src="/image/colon.png"
                  alt="Quote"
                  width={80}
                  height={80}
                />
              </div>

              {/* Name and Role */}
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {testimonial.name} - {testimonial.role}
                </h3>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Text Section */}
      <div className="w-full overflow-hidden mt-20">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl text-white inline-block">
            DESIGN * INNOVATION * CONSTRUCTION * DESIGN * INNOVATION *
            CONSTRUCTION * DESIGN * INNOVATION * CONSTRUCTION *
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ExEmployeesTestimonials;
