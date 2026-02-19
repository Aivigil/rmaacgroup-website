export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  images: string[];
  href: string;
  sections: {
    aboutProject: {
      title: string;
      content: string;
      scope: string[];
      rightTitle: string;
      rightContent: string;
      focus: string[];
      challenges: string[];
      roles: string[];
      technical: string[];
    };
    vision: {
      title: string;
      content: string;
      points: string[];
    };
    branding: {
      title: string;
      content: string;
      points: string[];
      cta: string;
      image: string;
    };
    website: {
      title: string;
      content: string;
      features: string[];
      image: string;
    };
    challenges: {
      title: string;
      content: string;
      cta: string;
      improvements: string[];
      marketing: {
        title: string;
        content: string;
        strategies: string[];
      };
    };
    conclusion: {
      title: string;
      content: string;
    };
  };
}

// Case studies data
export const caseStudies: CaseStudy[] = [
  {
    id: "shiptquick",
    title: "SHIPTQUICK",
    description:
      "ShiptQuick is a US-based third-party logistics and eCommerce fulfillment provider focused on helping DTC brands scale with streamlined operations, real-time integrations, and fast national delivery.",
    images: [
      "/image/portfolio/shiptquick-1.svg",
      "/image/portfolio/shiptquick-2.svg",
      "/image/portfolio/shiptquick-3.svg",
    ],
    href: "/case-studies/shiptquick",
    sections: {
      aboutProject: {
        title: "Details About the Project",
        content:
          "ShiptQuick approached us with a clear objective — to reimagine their brand and digital presence into something modern, trustworthy, and performance-ready. Their previous website lacked a defined structure, failed to communicate value clearly, and didn't reflect their capabilities in serving high-growth DTC brands.",
        scope: [],
        rightTitle: "A Comprehensive Revamp",
        rightContent:
          "Our goal was to create a brand identity and website that felt bold, efficient, and trustworthy — just like their operations. We introduced a clean, modular design system with thoughtful typography and a sharp green-black color palette that evoked clarity and confidence.",
        focus: [],
        challenges: [
          "No clear brand hierarchy",
          "Disconnected page structure",
          "Poor mobile optimization",
          "Weak lead conversion funnel",
        ],
        roles: [
          "Brand Strategy",
          "Creative Direction",
          "Content Structure Development",
        ],
        technical: [
          "UI/UX Design",
          "Webflow Development",
          "CMS Integration",
          "Frontend Animation & Interaction Logic",
        ],
      },
      vision: {
        title: "Laying the Foundation: A Vision Takes Shape",
        content:
          "We began with a complete information architecture overhaul. The site was mapped around user behavior and SEO objectives:",
        points: [
          "Clear navigation across services, pricing, integrations, and FAQs",
          "Highlighting core user journeys: from discovery to onboarding",
          "Strong emphasis on trust markers like partner logos and customer quotes",
        ],
      },
      branding: {
        title: "Creating Marketing Material & Branding",
        content:
          "To support their internal sales and outreach, we also designed:",
        points: [
          "Custom decks and one-pagers",
          "Brand book and digital guidelines",
          "Consistent iconography and graphic assets",
          "A refined tone of voice for high-conversion landing pages",
        ],
        cta: "These assets helped ShiptQuick communicate consistently across all touchpoints.",
        image: "/image/case-studies/details/ship-1.png",
      },
      website: {
        title: "Website Built",
        content:
          "The final build was executed in Webflow with a CMS-powered backend allowing for easy updates.",
        features: [
          "Responsive layouts optimized for fast load",
          "Visual animations that reinforce movement and efficiency",
          "Modular blocks for pricing, services, case studies",
          "API-ready backend structure for future integrations",
        ],
        image: "/image/case-studies/details/ship-2.png",
      },
      challenges: {
        title: "Challenges to Triumphs",
        content:
          "We transformed a disjointed and static website into a conversion-focused digital platform that now supports ShiptQuick's sales and inbound marketing funnel.",
        cta: "They now receive higher lead engagement and improved session durations thanks to:",
        improvements: [
          "Mobile-first design",
          "Clear value proposition above-the-fold",
          "Interactive CTAs and simplified navigation",
        ],
        marketing: {
          title: "Marketing Strategy & Execution",
          content:
            "Our team focused on creating marketing-ready layouts that guide users through a clear funnel:",
          strategies: [
            "Homepage focused on benefits and trust",
            "Service pages segmented by vertical (eCommerce, Health, etc.)",
            "Blog-ready CMS to boost SEO",
            "Conversion triggers like testimonials, FAQ blocks, and a strong CTA system",
          ],
        },
      },
      conclusion: {
        title: "Conclusion & Future Growth",
        content:
          "ShiptQuick's new platform is now equipped to support their expansion — both in logistics operations and client acquisition. The brand now has a scalable foundation that matches their ambition, allowing them to pitch confidently, attract new partners, and better support fast-growing DTC brands.",
      },
    },
  },
  {
    id: "ai-vigil",
    title: "AI-VIGIL",
    description:
      "AIVIGIL MSP is a North American managed IT and Al automation provider delivering proactive cybersecurity, monitoring, and helpdesk support. Their brand needed a modern, tech-forward digital presence to highlight their Al-enhanced capabilities.",
    images: [
      "/image/portfolio/ai-1.svg",
      "/image/portfolio/ai-2.svg",
      "/image/portfolio/ai-3.svg",
    ],
    href: "/case-studies/ai-vigil",
    sections: {
      aboutProject: {
        title: "Details About The Project",
        content:
          "AIVIGIL approached us to transform their dated website into a polished, modern platform that clearly communicates advanced IT services and automated Al solutions.",
        scope: [
          "Redesigned UI/UX with a clean, technology-forward aesthetic",
          "Mobile-first responsive development",
          "Updated content architecture for clarity",
          "SEO-friendly structure to improve trust and lead generation",
        ],
        rightTitle: "A Comprehensive Revamp",
        rightContent:
          "Our mission was to visually express AIVIGIL's Al-powered MSP offering-conveying reliability, intelligence, and technical professionalism.",
        focus: [
          "Modern, tech-inspired visuals",
          "Service-first user journeys",
          "Clear, hierarchical content",
          "Scalable backend with CMS flexibility",
        ],
        challenges: [
          "Dense service offerings requiring simplified presentation",
          "Lack of visual cohesion across pages",
          "Weak SEO organization limiting new business inquiries",
        ],
        roles: [
          "Brand Refresh & Creative UI Direction",
          "Frontend Implementation",
        ],
        technical: [
          "Wordpress + Webflow Hybrid",
          "Figma for design system & wireframes",
          "Custom API Integrations (e.g. security tools)",
          "Mobile-responsive & Tablet-friendly designs",
          "On-page SEO & Schema Markup",
        ],
      },
      vision: {
        title: "Laying the Foundation: A Vision Takes Shape",
        content:
          "To present AIVIGIL as both cutting-edge and trustworthy, we restructured content into clear categories:",
        points: [
          "Our Products (FinGuard, MedShield)",
          "Our Services (RMM, Cybersecurity, Helpdesk)",
          "Industries We Serve",
          "Why AI-VIGIL? (value proposition blocks)",
          "Lead funnel in hero section",
          "Clearly segmented services pages",
          "Trust markers (testimonials + uptime stats)",
        ],
      },
      branding: {
        title: "Creating Marketing Material & Branding",
        content:
          "We crafted additional assets to support AIVIGIL's commercial and lead-gen efforts:",
        points: [
          "Product thumbnails and icons",
          "Hero banners with Al-driven themes",
          "Content blocks for case studies & data sheets",
          "Migration path visuals and architecture diagrams",
        ],
        cta: "",
        image: "/image/case-studies/details/ai-1.png",
      },
      website: {
        title: "Website Built",
        content:
          "The new website, built in WordPress with Webflow front-end components, includes:",
        features: [
          "Responsive, modular page layouts",
          "CMS-powered blog and case study integration",
          "Schema markup for MSP services and security claims",
          "Conversion-focused contact forms and chat triggers",
        ],
        image: "/image/case-studies/details/ai-2.png",
      },
      challenges: {
        title: "Challenges to Triumphs",
        content:
          "AIVIGIL had a complex service mix with outdated presentation — we streamlined it into a powerful, modern digital footprint.",
        cta: "",
        improvements: [
          "Cohesive visual tone that matches branding",
          "Improved clarity around Al-enhanced solutions",
          "SEO-ready site structure with rich snippet optimization",
          "Lead conversions supported by a marketing-first layout",
        ],
        marketing: {
          title: "Marketing Strategy & Execution",
          content:
            "We designed the front-end experience from a lead-generation standpoint:",
          strategies: [
            "Hero CTA prompts (Ask Our Experts)",
            "Service-tracking contact forms",
            "Uptime and support metrics showcased dynamically",
            "Employee benefits and industries baked into Ul blocks",
          ],
        },
      },
      conclusion: {
        title: "Conclusion & Future Growth",
        content:
          "AIVIGIL now presents as a forward-thinking Al-based MSP with a compelling digital experience. Their new site positions them as reliable tech partners, ready for enterprise clients, healthcare, financial firms, and more.",
      },
    },
  },
  {
    id: "scootsee",
    title: "SCOOTSEE",
    description:
      "Scootsee is a Canadian smart mobility startup providing electric scooter-sharing services. We helped launch their brand from scratch - building everything from the name and identity to the full website and marketing materials.",
    images: [
      "/image/portfolio/scootsee-1.svg",
      "/image/portfolio/scootsee-2.svg",
      "/image/portfolio/scootsee-3.svg",
    ],
    href: "/case-studies/scootsee",
    sections: {
      aboutProject: {
        title: "Details About The Project",
        content:
          "Scootsee was starting from zero - no brand, no visuals, no platform. We helped them build a full digital identity and presence to support public launch, media outreach, and future investor alignment.",
        scope: [
          "Naming consultation and brand messaging",
          "Website design & development",
          "Launch strategy & marketing collateral",
          "Scalable CMS & performance optimization",
        ],
        rightTitle: "A Comprehensive Revamp",
        rightContent:
          "We weren't just designing a website — we were launching a brand. The challenge was to bring Scootsee to life as a credible, smart, and accessible solution for city mobility.",
        focus: [
          "Building visual & verbal identity from scratch",
          "Creating scalable page design for riders and partners",
          "Establishing user trust through thoughtful UX and clean Ul",
          "Delivering in a tight pre-launch timeline",
        ],
        challenges: [
          "Brand had no previous visual assets",
          "Unclear user journey or brand messaging",
          "Needed to serve multiple stakeholders (riders, cities, investors)",
        ],
        roles: [
          "We led the end-to-end strategy & creative execution - turning a game into a brand, and an idea into a digital presence",
          "Brand idetity (visual + verbal)",
          "Full UI/UX design",
          "Webflow website design",
          "Marketing & PR launch materials",
        ],
        technical: [
          "The digital experience needed to be fast, clean, and future-proof. We used flexible tools that would allow their internal team to scale later.",
          "Figma (wireframes, UI kit, prototype)",
          "Webflow (frontend & CMS)",
          "On-page SEO structure",
          "Analytics & lead tracking setup",
        ],
      },
      vision: {
        title: "Laying the Foundation: A Vision Takes Shape",
        content:
          "We began with defining brand tone and core architecture. Scootsee needed to feel urban, friendly, and trustworthy.",
        points: [
          "Brand language developement (mission, tone, tagline)",
          "Page architecture around core flows: ride, partner, explore",
          "Moible-first sitemap and navigation flow",
          "Hero content blocks crafted for conversion",
        ],
      },
      branding: {
        title: "Creating Marketing Material & Branding",
        content:
          "We equipped the Scootsee team with everything needed for launch and early traction",
        points: [
          "Logo system and iconography",
          "Digital color pallete and typography kit",
          "Social post templates",
          "Marketing one-pagers and decks",
          "City partner pitch visuals",
          "PR graphics and announcements",
        ],
        cta: "",
        image: "/image/case-studies/details/scoot-2.png",
      },
      website: {
        title: "Website Built",
        content:
          "The site was designed to be modular, fast, and rider-friendly. We built a scalable webflow system that their team could update without dev support",
        features: [
          "Fully responsive layout",
          "CMS for updates, FAQs, news",
          "SEO-optimized structure",
          "Partner-ready and mobile-friendly UX",
          "Lightweight animations to reinforce modernity",
        ],
        image: "/image/case-studies/details/scoot-2.svg",
      },
      challenges: {
        title: "Challenges to Triumphs",
        content:
          "In just a few weeks, we brought Scootsee from concept to launch-ready — with a brand identity and digital home that builds trust and traction.",
        cta: "",
        improvements: [
          "Built full identity + site in under 5 weeks",
          "Ready for pre-beta rollout and city partner demos",
          "Supported marketing and press coverage",
          "Delivered handover for in-house use",
        ],
        marketing: {
          title: "Marketing Strategy & Execution",
          content:
            "Our design thinking was rooted in marketing performance and public perception.",
          strategies: [
            "Conversion-first homepage layout",
            "Flexible landing page structure",
            "Email outreach content",
            "Social assets aligned with brand personality",
            "Press-ready visual kit",
          ],
        },
      },
      conclusion: {
        title: "Conclusion & Future Growth",
        content:
          "Scootsee is now equipped with a professional, scalable brand system — ready to grow across cities, onboard riders, and pitch new partners. Their digital presence reflects their ambition and communicates their values clearly: simple, smart, sustainable mobility.",
      },
    },
  },
  {
    id: "zen-retreats",
    title: "ZEN RETREATS",
    description:
      "Zen Retreats is a boutique serviced apartment project nestled in the scenic Barrian Valley near Nathia Gali. We helped bring the project to life from the ground up by developing everything from the digital brand identity to investor-focused messaging, marketing assets, and a conversion-ready online experience.",
    images: [
      "/image/portfolio/zen-1.svg",
      "/image/portfolio/zen-2.svg",
      "/image/portfolio/zen-3.svg",
    ],
    href: "/case-studies/zen-retreats",
    sections: {
      aboutProject: {
        title: "Details About The Project",
        content:
          "Zen Retreats started with a powerful vision: To build a serviced apartment experience — a blend of natural calm and commercial return — in the heart of Galivat. There was no digital presence, no cohesive message, and no system to target investors or future guests. We helped create a full-spectrum digital launch from brand clarity to market materials, digital assets, and investor engagement tools.",
        scope: [],
        rightTitle: "A Comprehensive Revamp",
        rightContent:
          "This wasn't just a property listing — it was a lifestyle investment product. Our role was to transform Zen Retreats into a premium real estate brand that appeals to both local and overseas Pakistani investors, while staying rooted in its core promise: peace that pays.",
        focus: [],
        challenges: [
          "No previous brand assets or investor communication system",
          "Needed to attract multiple personas: investors, buyers, and city-based agents",
          "Project based in a remote area, requiring digital-first storytelling",
          "Needed to explain both vacation value and income logic clearly",
        ],
        roles: [
          "Led brand strategy and creative execution",
          "Transformed vision into digital presence",
          "Led full scale construction and architecural planning for the site",
        ],
        technical: [
          "Figma (design, layout systems)",
          "Webflow + manual CMS (light build)",
        ],
      },
      vision: {
        title: "Laying the Foundation: A Vision Takes Shape",
        content:
          "We began with the essence of the project — a getaway that grows in value. The brand language was crafted to appeal to aspirational investors who value nature, simplicity, and passive income. We built the website architecture around investor needs:",
        points: [
          "Scenic value",
          "ROI insights",
          "Payment flexibility",
          "Ease of management",
          "Construction credibility",
        ],
      },
      branding: {
        title: "Marketing & Branding Assets",
        content:
          "We equipped the Zen Retreats team with tools to attract, inform, and convert investors — all tailored for digital-first selling.",
        points: [
          "Logo system + iconography",
          "PDF brochures (pricing, floor plan, amenities)",
          "Reels scripts + visual guidelines",
          "Construction update templates",
          "WhatsApp and email message templates",
          "Overseas Pakistani targeting headlines",
        ],
        cta: "",
        image: "/image/case-studies/details/zen-1.png",
      },
      website: {
        title: "Website Built",
        content:
          "A fully responsive, performance-focused site was created to convert visitors into leads and make it easy for the Zen team to update on the go.",
        features: [
          "Hero video + scenic imagery",
          "ROI-focused layout blocks",
          "Embedded brochure + floor plan downloads",
          "Whatsapp CTAs with pre-filled investor pitch copy",
          "Mobile-first design",
          "SEO-optimized meta and schema",
        ],
        image: "/image/case-studies/details/zen-2.svg",
      },
      challenges: {
        title: "From Vision to Traction",
        content:
          "In just a few weeks, Zen Retreats transformed from concept to credible brand.",
        cta: "With a luxury tone, focused visuals and ROl-first messaging, we helped the project earn attention from both domestic investors and overseas Pakistani buyers.",
        improvements: [],
        marketing: {
          title: "Marketing Strategy & Execution",
          content: "Outcomes",
          strategies: [
            "Digital brand + website built in under 4 weeks",
            "Assets used for launch events and city partner demos",
            "Ready for construction updates + marketing rollout",
            "Enabled WhatsApp-based investor conversations",
            "Equipped team with brand system + internal CMS",
          ],
        },
      },
      conclusion: {
        title: "Conclusion & Future Growth",
        content:
          "Zen Retreats is now positioned as Pakistan's first modern hill investment brand offering luxury, lifestyle, and income in a single asset. With a foundation rooted in brand clarity, digital readiness, and real-time scalability, Zen Retreats is ready to expand across phases and elevate Barrian Valley into a national investment landmark.",
      },
    },
  },
  {
    id: "premier-private-gp",
    title: "PREMIER PRIVATE GP",
    description:
      "Premier Private GP is a premium private healthcare provider based in Surrey, designed to offer time-rich, discreet, and fully personalised GP care. As a project led by RMAAC, our mission was to evolve PPGP from a traditional clinic into a high-conversion private healthcare brand — trusted by patients, preferred by partners, and primed for scale.",
    images: [
      "/image/portfolio/premier-1.svg",
      "/image/portfolio/premier-2.svg",
      "/image/portfolio/premier-3.svg",
    ],
    href: "/case-studies/premier-private-gp",
    sections: {
      aboutProject: {
        title: "Details About The Project",
        content:
          "Premier Private GP was founded with a clear ambition: To redefine what private care feels like - blending modern medicine with a concierge approach, focused on continuity, convenience, and care that doesn't rush. They had a solid clinical offering but lacked the brand clarity, digital systems, and messaging to match their ambition. RMAAC stepped in to lead the entire creative and strategic build - from brand language and website to digital funnels, social presence, and campaign-ready marketing assets.",
        scope: [],
        rightTitle: "A Comprehensive Revamp",
        rightContent:
          "This wasn't just a medical service; it was a lifestyle-led healthcare experience. Our role was to reimagine PPGP as a premium, patient-first brand that resonates with high-value patients, while supporting growth across partnerships, screenings, and memberships.",
        focus: [],
        challenges: [
          "Needed to reflect high-end positioning with premium messaging and visuals",
          "No previous digital system for social, email, or paid marketing",
          "Clinic services were under-communicated and lacked conversion triggers",
          "Competitive private GP space, especially in Surrey & Berkshire",
          "Built a responsive app for patients' convenience",
        ],
        roles: [
          "Led brand narrative and tone-of-voice development",
          "Designed and developed the entire website",
        ],
        technical: [
          "Figma (branding, web UI/UX design)",
          "Webflow (performance website, custom CMS)",
          "Meta Ads Manager (audience, funnel, campaign builds)",
        ],
      },
      vision: {
        title: "Laying the Foundation: A Vision Takes Shape",
        content:
          "We began by establishing what the PPGP brand truly stands for - high access, high trust, no compromises. From that core, we built a digital foundation designed to make patients feel cared for before they even walk in.",
        points: [
          "Speed, mobile-first performance, and UX clarity",
          "Easy online bookings and clinic discovery",
          "Clear breakdown of services like health screenings, scans, home visits",
          "Pathways for phone consults, same-day care, and weight loss support",
          "Membership comparison pages to encourage retention",
        ],
      },
      branding: {
        title: "Marketing & Branding Assets",
        content:
          "RMAAC equipped the PPGP team with a suite of digital and offline tools to attract, convert, and retain patients — especially those coming via new ad campaigns.",
        points: [
          "Membership flyers (digital + print) for clinic display",
          "PDF brochures and onboarding kits",
          "Co-branded vouchers and discounts for patient footfall",
          "Meta + Google ads targeting high-income families and individuals",
          "WhatsApp templates and email copy for follow-up journeys",
          "Social content with a premium, educational tone",
        ],
        cta: "",
        image: "/image/case-studies/details/premier-1.png",
      },
      website: {
        title: "Website Built",
        content:
          "Our site was designed to handle two things seamlessly: bookings and belief-building. We wanted prospective patients to trust PPGP instantly and act fast.",
        features: [
          "Hero section with real human copy, not generic health stock messaging",
          "Scroll-stopping hooks for each service",
          "Highly optimized webcopy",
          "Membership comparison block with embedded lead CTAs",
          "Geo-specific SEO (Surrey/Berkshire)",
          "Clinic-specific landing pages for future locations",
        ],
        image: "/image/case-studies/details/premier-2.png",
      },
      challenges: {
        title: "From Vision to Traction",
        content:
          "Within the first month post-launch, Premier Private GP saw marked increases in inquiries, same-day bookings, and phone consult requests. The membership pages helped convert first-time visitors into loyal monthly subscribers.",
        cta: "",
        improvements: [],
        marketing: {
          title: "Marketing Strategy & Execution",
          content: "Outcomes",
          strategies: [
            "Website designed and launched in under 4 weeks",
            "Meta campaigns with 3x return on ad spend (in first month)",
            "Patient onboarding materials increased call bookings by 40%",
            "Brand tone, design, and flow built for long-term internal use",
          ],
        },
      },
      conclusion: {
        title: "Conclusion & Future Growth",
        content:
          "Premier Private GP is now positioned as one of Surrey's most reliable private clinics - offering same-day appointments, elite screening options, and a truly personalised GP experience. With a digital ecosystem built by RMAAC, they are now scaling across services, locations, and partnerships — with every new patient welcomed into a brand that reflects care, class, and continuity.",
      },
    },
  },
  {
    id: "vividly-app",
    title: "VIVIDLY APP",
    description:
      "Enhahcer wasn't built to be 'just another photo editor.' It was designed to make powerful Al photo tools feel invisible. Most people don't want more features. They want one tap that works. Whether it's removing a messy background, restoring an old photo, or colorizing a black & white memory - the goal was the same:",
    images: [
      "/image/portfolio/vividly-1.svg",
      "/image/portfolio/vividly-2.svg",
      "/image/portfolio/vividly-3.svg",
    ],
    href: "/case-studies/vividly-app",
    sections: {
      aboutProject: {
        title: "Details About The Project",
        content: "Build and launch a mobile photo app that could:",
        scope: [
          "Compete in the crowded photo tools category",
          "Feel intuitive to a global, non-technical audience",
          "Monetize without overwhelming users with ads",
          "Scale across 86 languages",
          "And do all that... without sacrificing beauty or performance",
        ],
        rightTitle: "A Comprehensive Revamp",
        rightContent: "Make photo magic effortless.",
        focus: [
          "This wasn't just app development. It was full-stack product thinking, from Ul polish to ad strategy to backend architecture.",
        ],
        challenges: [
          "The tech was there. But turning it into something mass-ready, monetizable, and multilingual needed something more. That's where RMAAC stepped in.",
        ],
        roles: [
          "We wore every hat on this one - designer, dev, growth strategist, and user advocate.",
          "Development & Architecture",
          "UI/UX & Store Presence",
          "Growth & Localization",
        ],
        technical: [],
      },
      vision: {
        title: "Laying the Foundation: A Vision Takes Shape",
        content: "Development & Architecture",
        points: [
          "Built using Kotlin + Jetpack Compose",
          "Clean architecture for long-term stability",
          "Remote config + custom events for live feature control",
          "Integrated ad monetization across banners, interstitials, and rewarded flows",
        ],
      },
      branding: {
        title: "Creating Marketing Material & Branding",
        content: "UI/UX & Store Presence",
        points: [
          "Ul that feels light, premium, and genuinely useful",
          "Store listing graphics, icon design, and walkthrough screenshots",
          "Competitor & keyword research across global markets",
          "ASO metadata optimized in 86 languages",
          "Google ad groups, A/B tests, and in-app performance tracking",
        ],
        cta: "",
        image: "/image/case-studies/details/vividly-1.png",
      },
      website: {
        title: "What We Built Behind the Scenes",
        content: "",
        features: [
          "A remote control panel using Firebase Remote Config to manage feature throttling, ad logic, and seasonal promos",
          "Event tracking to see exactly which tools people loved (and which they ignored)",
          "A lightweight UX that didn't need a tutorial to understand",
        ],
        image: "/image/case-studies/details/vividly-2.png",
      },
      challenges: {
        title: "Results We're Proud Of",
        content:
          "50,000+ downloads in just a few months and 10,000+ monthly active users",
        cta: "Users from",
        improvements: [
          "India",
          "Indonesia",
          "Europe",
          "4* star average rating with zero ad fatigue complaints",
        ],
        marketing: {
          title: "What Made Enhancer Work",
          content:
            "Honestly? We respected the user. Just good tech, wrapped in quiet design and backed by smart growth systems.",
          strategies: [
            "The Lesson",
            "People don't fall in love with Al",
            "They fall in love with what it lets them do",
          ],
        },
      },
      conclusion: {
        title: "Final Word",
        content:
          "Enhancer is now a fast-growing photo suite with loyal users, solid revenue, and a growth engine that doesn't need duct tape. From backend to brand voice, RMAAC helped turn a cool tech idea into a living, breathing product — one that earns its place on users' phones every day.",
      },
    },
  },
];
