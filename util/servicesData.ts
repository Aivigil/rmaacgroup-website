export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  displayTitle: string;
  description: string;
  features: string[];
  detailContent?: {
    tagline?: {
      firstLine: string;
      secondLine: string;
    };
    description?: string;
    buttonText?: string;
    points?: string[];
    philosophyTitleFirstLine?: string;
    philosophyTitleSecondLine?: string;
    philosophyDescription?: string;
    philosophyPoints?: string[];
    spotlightProject?: {
      title: string;
      name: string;
      description: string;
      extendedDescription?: string;
      pointsHeading?: string;
      valuePoints?: string[];
    };
    testimonials?: {
      firstLine: string;
      secondLine: string;
      testimonials: {
        name: string;
        role: string;
        text: string;
        rating: number;
      }[];
    };
    innovationSections?: {
      firstLine: string;
      secondLine: string;
      InnovationSection: {
        id: string;
        title: string;
        description: string;
      }[];
    };
    ctaSection?: {
      firstLine: string;
      secondLine: string;
      subtitle: string;
      buttonText: string;
    };
    images: {
      image1: string;
      image2: string;
      image3: string;
    };
  };
}

export const services: ServiceData[] = [
  {
    id: "01",
    slug: "construction",
    title: "Real Estate Development",
    displayTitle: "Real Estate\nDevelopment",
    description:
      "Building more than structures — we create investment-ready properties with lasting value and lifestyle-driven design. From site planning to handover, we cover the full development cycle.",
    features: [
      "Luxury serviced apartments & vacation homes",
      "Full-cycle project planning & construction",
      "Sales, investor marketing & after-sale support",
    ],
    detailContent: {
      tagline: {
        firstLine: "WE DONT BUILD BUILDINGS",
        secondLine: "WE BUILD LEGACIES",
      },
      description:
        "At RMAAC, we don't just market properties — we build them. From mountain retreats to urban towers, every project is backed by real timelines, real assets, and real returns. Whether you're diversifying your portfolio or making your first move in real estate, we're here to offer more than just listings — we offer clarity, credibility, and control",
      buttonText: "See Projects",
      philosophyTitleFirstLine: "Spaces that Inspire.",
      philosophyTitleSecondLine: "Structures that Last",
      philosophyDescription:
        "At RMAAC, every square foot tells a story of balance, elevation and quiet confidence",
      philosophyPoints: [
        "Timeless architecture",
        "Sustainable materials",
        "Eco-conscious design",
      ],
      spotlightProject: {
        title: "Spotlight Project",
        name: "Zen Retreats",
        description:
          "Zen Retreats is not a listing we promote. It's a flagship project we imagined, developed, and executed — from land acquisition to design, development approvals to delivery strategy. Nestled in the hills of Barian, Nathia Gali, this hotel apartment project embodies everything we believe real estate in Pakistan can be: bold, wellness-driven, and deeply rooted in nature",
        extendedDescription:
          "As a subsidiary of RMAAC Group, we've spent over a decade building trust in residential development. But with Zen Retreats, we chose to go further — crafting a space that reflects conscious luxury for travelers and strategic return potential for investors.",
        pointsHeading: "Built-In Value",
        valuePoints: [
          "Timeless architecture",
          "Sustainable materials",
          "Eco-conscious design",
        ],
      },
      testimonials: {
        firstLine: "REAL CLIENT",
        secondLine: "VOICES",
        testimonials: [
          {
            name: "Rizwan M",
            role: "Mid-Career Banker, Karachi",
            text: "I've seen too many so-called 'smart' developments that are all branding, no backbone. What caught my eye with RMAAC's project wasn't the flashy bits — it was the ecosystem thinking. The Zen Retreat isn't just pretty — it's future-aligned",
            rating: 5,
          },
          {
            name: "Bilal A",
            role: "Tech Consultant, Dubai",
            text: "Honestly, I wasn't planning to invest in Pakistan anytime soon. Too volatile. But the Enclave pitch made sense — high-demand zone, flexible commercial space, future-proof infrastructure. What sealed it was the transparency: construction timelines, utility provisions, the whole lot",
            rating: 5,
          },
        ],
      },
      innovationSections: {
        firstLine: "THE RMAAC DIFFERENCE",
        secondLine: "INNOVATION IN EVERY BRICK",
        InnovationSection: [
          {
            id: "01",
            title: "Smart Living Infrastructure",
            description:
              "From integrated IoT systems to predictive maintenance, our projects think ahead — so you don’t have to.",
          },
          {
            id: "02",
            title: "Sustainability as Standard",
            description:
              "We design with the land, not against it — using low-impact materials, passive cooling, and renewable energy where possible.",
          },
          {
            id: "03",
            title: "Design with Depth",
            description:
              "Our architecture draws from human psychology, not just blueprints — creating spaces that uplift mood, foster connection, and flow with natural rhythms.",
          },
          {
            id: "04",
            title: "Future-Ready Urbanism",
            description:
              "We go beyond buildings to envision entire ecosystems: tech parks, housing zones, mixed-use communities, and infrastructure-ready plots.",
          },
        ],
      },
      ctaSection: {
        firstLine: "Let's Build Something",
        secondLine: "Real",
        subtitle:
          "We’re not just selling square footage — we’re creating assets that grow with you. If you're looking to invest in projects backed by vision, delivery, and data — start with RMAAC.",
        buttonText: "Book a Discovery Call",
      },
      images: {
        image1: "/image/service/real-estate/image-1.jpg",
        image2: "/image/service/real-estate/image-2.png",
        image3: "/image/service/real-estate/image-3.png",
      },
    },
  },
  {
    id: "02",
    slug: "it-solutions",
    title: "IT Solutions",
    displayTitle: "IT Solutions",
    description:
      "Tech that works for you - from secure systems to scalable infrastructure, we deliver tailored solutions that drive business forward. Built for performance, security, and simplicity.",
    features: [
      "Custom software & enterprise platforms",
      "IT infrastructure & security management",
      "API integrations & cloud transformation",
    ],
    detailContent: {
      tagline: {
        firstLine: "ENTERPRISE TECH WITH",
        secondLine: "A BUILDER'S MINDSET",
      },
      description:
        "At RMAAC IT Solutions, we design and engineer the digital layer behind modern businesses. Whether you're building an Al product, setting up a secure remote infrastructure, or launching a web platform that's SEO-ready from day one — we're your full-stack technology partner.",
      buttonText: "LET'S TALK ABOUT WHAT YOU ARE BUILDING",
      philosophyTitleFirstLine: "Full Service Tech.",
      philosophyTitleSecondLine: "Grounded in Execution",
      philosophyDescription:
        "Unlike typical IT firms, we don’t just deliver “solutions” — we deliver operational impact. Every project we take on is designed around real constraints, real timelines, and measurable outcomes.",
      philosophyPoints: [
        "Custom Web & Mobile Development",
        "AI Integration & Machine Learning",
        "Smart Infrastructure & IoT Systems",
        "Product Strategy & Launch Execution",
        "Backend Architecture & API Engineering",
        "Technical SEO & Web Performance Optimization",
      ],
      spotlightProject: {
        title: "Spotlight Project",
        name: "AI-Vigil",
        description:
          "Project AIVigil is RMAAC’s dedicated initiative to protect businesses from the inside out — not just against known risks, but the ones emerging every day.From phishing-resistant email security to AI-driven threat detection, AIVigil delivers integrated risk management tailored for real-world operations. Whether you're a law firm navigating compliance, a healthcare provider safeguarding PHI, or a logistics company defending uptime — AIVigil equips you with 24/7 monitoring, rapid response, and strategic cybersecurity leadership.",
        extendedDescription: "",
        pointsHeading: "Why AI Vigil",
        valuePoints: [
          "Built on RMAAC’s legacy of compliance-first innovation",
          "Aligned to frameworks like HIPAA, PCI-DSS, GLBA & SOX",
          "Backed by AI, but driven by human insight",
          "Fully scalable for small offices to enterprise networks",
        ],
      },
      testimonials: {
        firstLine: "CLIENT'S WHO'VE BUILT",
        secondLine: "WITH US",
        testimonials: [
          {
            name: "Zahra N",
            role: "Manager,  USA",
            text: "RMAAC helped us move from idea to MVP in six weeks — with backend, AI workflows, and real-world testing included. They’re fast, direct, and think like product people",
            rating: 5,
          },
          {
            name: "Zeeshan I",
            role: "Hotel Owner, Hunza",
            text: "From check-in automation to backend accounting — they built us a platform that just works. It’s already part of how we run the business",
            rating: 5,
          },
        ],
      },
      innovationSections: {
        firstLine: "WHY TEAMS WORK",
        secondLine: "WITH US",
        InnovationSection: [
          {
            id: "01",
            title: "We build for real business needs.",
            description:
              "Every feature we ship has a job — whether it’s speeding up a process, securing a site, or capturing more data.",
          },
          {
            id: "02",
            title: "We combine software, infrastructure, and product thinking.",
            description:
              "Our teams don’t just code. They understand hardware, design, and the day-to-day needs of modern businesses",
          },
          {
            id: "03",
            title: "We plan for scale from day one",
            description:
              "We build products and systems that stay stable, secure, and efficient as you grow — without expensive rebuilds later.",
          }
        ],
      },
      ctaSection: {
        firstLine: "LET'S BUILD THE INFRASTRUCTURE",
        secondLine: "BEHIND YOUR NEXT MOVE",
        subtitle:
          "Whether you're launching a tech-driven product or upgrading the digital core of your operations, RMAAC brings end-to-end execution. We think in roadmaps, data points, and real-world delivery.",
        buttonText: "START YOUR DISCOVERY Call",
      },
      images: {
        image1: "/image/service/ai/image-1.jpg",
        image2: "/image/service/ai/image-2.jpg",
        image3: "/image/service/ai/image-3.png",
      },
    },
  },
  {
    id: "03",
    slug: "digital-marketing",
    title: "Digital Marketing",
    displayTitle: "Digital Marketing",
    description:
      "We don't just market - we grow brands. Our strategies are data-backed, design-led, and focused on real business results across every channel.",
    features: [
      "Performance-driven ad campaigns",
      "Brand strategy & creative storytelling",
      "Email automation, SEO & content systems",
    ],
    detailContent: {
      tagline: {
        firstLine: "NOT JUST CLICKS.",
        secondLine: "WE CREATE BRANDS PEOPLE TRUST",
      },
      description:
        "At RMAAC, we turn your business into a brand, and your brand into performance. From real estate to private healthcare, we blend narrative strategy with data-backed execution to build visibility that doesn’t just look good — it drives revenue. Whether you're launching a product or scaling a service, we offer more than impressions — we offer impact",
      buttonText: "View Our Work",
      philosophyTitleFirstLine: "Strategy That Sells.",
      philosophyTitleSecondLine:
        "Content That Connects. Results That Compound.",
      philosophyDescription:
        "Marketing today isn’t about running ads — it’s about building an engine that works while you sleep. At RMAAC, our digital marketing services are rooted in deep brand thinking and scaled through real-time performance. Here’s how we help you grow:",
      philosophyPoints: [
        "Full-Funnel Growth Strategy",
        "Content that Cuts Through the Noise",
        "Performance Marketing With Accountability",
      ],
      spotlightProject: {
        title: "Flagship Case:",
        name: "Premier Private GP",
        description:
          "When Premier Private GP, a private gp service in Surrey, UK approached us, they didn’t just need a marketing campaign — they needed a full digital identity. We worked from ground zero: creating their brand voice, designing every patient touchpoint, and launching a full-stack performance engine in less than 90 days.",
        extendedDescription: "",
        pointsHeading: "Why Premier Private GP",
        valuePoints: [
          "Luxury brand experience for a concierge medical service",
          "SEO-optimized, conversion-led website",
          "Meta + Google Ads funnel with 7x ROI in first 60 days",
          "EMR & CRM integrations for automated lead handling",
          "Brand photography, tone of voice, and social storytelling",
        ],
      },
      testimonials: {
        firstLine: "REAL CLIENT",
        secondLine: "VOICES",
        testimonials: [
          {
            name: "Mudassir Ahmed",
            role: "Healthcare Founder, London",
            text: "We had the clinic, the vision but zero digital presence. RMAAC built it all from scratch from brand name, logo, story, website, ads, everything. They understood our patients, and it shows in how fast we filled up. Felt like we had a CMO on our side, not an agency.",
            rating: 5,
          },
          {
            name: "Alondra",
            role: "Founder, Virginia",
            text: "I’ve worked with agencies that chase trends — RMAAC isn’t that. They asked hard questions, understood our sales process, and gave us a digital strategy that fit our buyers. The difference? They don’t just market, they partner to grow.",
            rating: 5,
          },
        ],
      },
      innovationSections: {
        firstLine: "Why RMAAC Digital Marketing Works",
        secondLine: "Strategy Meets Soul",
        InnovationSection: [
          {
            id: "01",
            title: "Business First, Not Buzzwords",
            description:
              "We align with your growth goals  not vanity metrics. Every tactic maps to a revenue outcome",
          },
          {
            id: "02",
            title: "Creative That Moves People (and the Needle)",
            description:
              "Our ads don’t just perform — they feel human. Because they’re built around real psychology and clear offers",
          },
          {
            id: "03",
            title: "Radical Transparency",
            description:
              "No hidden dashboards. You’ll know what we’re doing, why we’re doing it, and what it’s earning you.",
          },
          {
            id: "04",
            title: "Industry-Specific Fluency",
            description:
              "We don’t 'learn on the job.' From real estate to healthcare, we speak your market’s language.",
          },
        ],
      },
      ctaSection: {
        firstLine: "LET'S BUILD visibility",
        secondLine: "that performs",
        subtitle:
          " If you’re looking for a digital partner that blends sharp strategy with grounded storytelling — you're in the right place. Let’s take your business from seen to sought-after.",
        buttonText: "book a DISCOVERY Call",
      },
      images: {
        image1: "/image/service/premier/image-1.jpg",
        image2: "/image/service/premier/image-2.jpg",
        image3: "/image/service/premier/image-3.png",
      },
    },
  },
  {
    id: "04",
    slug: "app-development",
    title: "Apps Development",
    displayTitle: "Apps Development",
    description:
      "We design sleek, functional mobile apps that users love — and businesses rely on. From ideation to launch, we build with your growth in mind.",
    features: [
      "Android & iOS app development",
      "UX-focused interface design",
      "Scalable backend & API integration",
    ],
    detailContent: {
      tagline: {
        firstLine: "We Don’t Just Build Apps",
        secondLine: "We Build Digital Products That Earn.",
      },
      description:
        "We don’t do half-builds or MVPs that sit idle. At RMAAC, we take on entire product lifecycles: research, UI/UX, development, deployment, monetization, and growth. Our team doesn’t just write clean code — we write growth stories.",
      buttonText: "Let’s Build an App Together",
      philosophyTitleFirstLine: "Full-Cycle Digital",
      philosophyTitleSecondLine: "Product Development",
      philosophyDescription:
        "From idea to installs to income — we do it all under one roof. Most dev shops stop at handoff. We don’t. With RMAAC, every app we launch is supported by real monetization plans, performance tracking, and infrastructure designed to scale.",
      philosophyPoints: [
        "Ideation to UX/UI Design",
        "Full-Stack Mobile & Web App Development",
        "In-App Monetization & Analytics",
        "Store Deployment & ASO",
        "Growth Strategy & Updates",
        "Ongoing App Ops",
      ],
      spotlightProject: {
        title: "Spotlight Product",
        name: "Photo Enhancer",
        description:
          "Photo Enhancer App is more than a client project — it’s a RMAAC flagship build. Conceptualized, developed, deployed, and scaled entirely in-house, this AI-powered photo app crossed 10,000+ installs in just 6 months with zero external funding.",
        extendedDescription: "",
        pointsHeading: "What We Did:",
        valuePoints: [
          "UI/UX from scratch based on competitive research",
          "Full AI model training and integration",
          "Backend infrastructure to handle high image-processing loads",
          "Google Play Store deployment and ASO strategy",
          "Monetization through freemium + premium feature tiers",
        ],
      },
      testimonials: {
        firstLine: "Founders. Startups. Studios.",
        secondLine: "Here's Why They Work With RMAAC",
        testimonials: [
          {
            name: "Ali M",
            role: "Solo Founder, Lahore",
            text: "I had an idea. That’s it. RMAAC helped me turn it into a working app, monetize it, and scale it to 1,000+ paid users in months.",
            rating: 5,
          },
          {
            name: "Hassan T",
            role: "Marketing Lead, Karachi",
            text: "What impressed me wasn’t the app, it was the growth mindset. The RMAAC team gave me a roadmap, metrics, and actual traction.",
            rating: 5,
          },
        ],
      },
      innovationSections: {
        firstLine: "The RMAAC Approach to",
        secondLine: "App Success",
        InnovationSection: [
          {
            id: "01",
            title: "We Own Delivery",
            description:
              "Every product is treated like our own — from first commit to first customer.",
          },
          {
            id: "02",
            title: "We Build for Monetization",
            description:
              "No vanity features, no bloat — just user-first flows that convert.",
          },
          {
            id: "03",
            title: "We Operate Post-Launch",
            description:
              "We don’t ghost you after launch. We optimize, iterate, and keep shipping.",
          },
        ],
      },
      ctaSection: {
        firstLine: "Got an Idea?",
        secondLine: "Or a Stalled App That Needs Real Traction?",
        subtitle:
          "At RMAAC, we don’t chase downloads. We build digital assets that generate revenue, grow user bases, and prove market fit. Ready to build your next product — with a partner who sees it through?",
        buttonText: "book a strategy Call",
      },
      images: {
        image1: "/image/service/vividly/image-1.jpg",
        image2: "/image/service/vividly/image-2.jpg",
        image3: "/image/service/vividly/evo-2.png",
      },
    },
  },
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};
