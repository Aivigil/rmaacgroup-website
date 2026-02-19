"use client";

import { useState } from "react";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const faqData = [
  {
    id: "01",
    question: "What industries do you serve?",
    answer:
      "We serve businesses across real estate, construction, healthcare, IT, digital marketing, and app development. From builders managing multi-site projects to SMBs scaling with AI automations, we tailor solutions that meet the unique needs of each sector we work in.",
  },
  {
    id: "02",
    question: "How do we get started with your services?",
    answer:
      "It’s simple. Reach out through our contact form or book a free consultation. We’ll sit down with you to understand your goals, challenges, and timeline and then map out the best-fit solution, whether that’s IT automation, digital campaigns, or a new project build.",
  },
  {
    id: "03",
    question: "How can your services benefit my business?",
    answer:
      "Our services are designed to save time, cut costs, and unlock growth. Whether it’s reducing IT downtime by 70%, running high-conversion ad campaigns, or helping a developer streamline investor reporting, we deliver outcomes that directly impact your bottom line.",
  },
  {
    id: "04",
    question: "Do you offer customized solutions?",
    answer:
      "Yes. No two clients are the same, so we don’t force one-size-fits-all packages. Every engagement is tailored from building an AI chatbot that fits your sales process to creating a real estate portal designed around your investors’ needs.",
  },
  {
    id: "05",
    question: "Do you provide support after the project is completed?",
    answer:
      "Absolutely. We don’t disappear after launch. Whether it’s ongoing IT monitoring, SEO upkeep, or campaign optimization, we provide long-term support to make sure your project keeps delivering results well beyond the initial handover.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#17181b] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-2 sm:mb-4">
            FREQUENTLY ASKED
            <br />
            <span className={italiana.className}>Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-b border-gray-600 group">
                <div
                  className="flex items-center justify-between py-4 sm:py-6 lg:py-8 cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1">
                    <span className="text-xs sm:text-sm text-gray-400 font-mono flex-shrink-0">
                      {faq.id}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`text-white text-lg sm:text-xl lg:text-2xl transition-transform duration-300 group-hover:rotate-45 flex-shrink-0 ml-2 sm:ml-4 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-40 sm:group-hover:max-h-48 lg:group-hover:max-h-56 group-hover:pb-4 sm:group-hover:pb-6 lg:group-hover:pb-8 ${
                    isOpen
                      ? "max-h-40 sm:max-h-48 lg:max-h-56 pb-4 sm:pb-6 lg:pb-8"
                      : "max-h-0"
                  }`}
                >
                  <div className="pl-0 sm:pl-8 lg:pl-12">
                    <p className="text-gray-300 max-w-4xl text-xs sm:text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}