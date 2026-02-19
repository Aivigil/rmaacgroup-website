interface AutomationsPageData {
  title: string;
  hero: {
    indicator: string;
    title: {
      line1: string;
      line2: string;
    };
    description: string;
    buttons: {
      primary: string;
      secondary?: string;
    };
  };
  digitalSolutions: {
    title: {
      main: string;
      italic: string;
    };
    description: string;
    solutions: {
      title: string;
      description: string;
      image: string;
    }[];
    button: {
      text: string;
      link: string;
    };
  };
  caseStudies: {
    title: {
      main: string;
      italic: string;
    };
    cases: {
      caseStudy1: {
        mainTitle?: string;
        logo?: string;
        logoWidth: number;
        logoHeight: number;
        title: string;
        description: string;
        buttonText: string;
        expandedContent: {
          title: string;
          description?: string;
          phases: {
            title: string;
            description: string;
          }[];
          numbers: {
            title: string;
            points: string[];
          }[];
          image: string;
        };
      };
      caseStudy2?: {
        mainTitle?: string;
        logo?: string;
        logoWidth: number;
        logoHeight: number;
        title: string;
        description: string;
        buttonText: string;
        expandedContent: {
          title: string;
          description?: string;
          phases: {
            title: string;
            description: string;
          }[];
          numbers: {
            title: string;
            points: string[];
          }[];
          image: string;
        };
      };
      caseStudy3?: {
        mainTitle?: string;
        logo?: string;
        logoWidth: number;
        logoHeight: number;
        title: string;
        description: string;
        buttonText: string;
        expandedContent: {
          title: string;
          description?: string;
          phases: {
            title: string;
            description: string;
          }[];
          numbers: {
            title: string;
            points: string[];
          }[];
          image: string;
        };
      };
    };
  };
  digitalImpact: {
    title: {
      main: string;
      italic: string;
    };
    stats: {
      value: string;
      label: string;
    }[];
  };
  tipOfIceberg: {
    title: {
      main: string;
      italic: string;
    };
    description: string;
    services: {
      title: string;
      features: string[];
    }[];
  };
  finalCTA: {
    stats: {
      italic1?: string;
      bold1?: string;
      italic2?: string;
      bold2?: string;
      bold3?: string;
    };
    title: string;
    description: string;
    buttonText: string;
  };
}

export const automationsPageData: AutomationsPageData[] = [
  {
    title: "automations",
    // Hero Section
    hero: {
      indicator: "AUTOMATIONS + CYBERSECURITY",
      title: {
        line1: "MEET THE AUTOMATIONS",
        line2: "THAT FREE UP YOUR SMARTEST PEOPLE",
      },
      description:
        "Every project here started as a goal and became a measurable success. Dive in to see how AI, cybersecurity, and innovation come together.",
      buttons: {
        primary: "VIEW OUR WORK",
        secondary: "START YOUR SUCCESS STORY",
      },
    },

    // Digital Solutions Section
    digitalSolutions: {
      title: {
        main: "THE DIGITAL SOLUTIONS",
        italic: "WE DELIVER",
      },
      description:
        "From fortified security to intelligent automation, these are the tools, systems, and strategies we put in place to help businesses run safer, faster, and smarter.",
      solutions: [
        {
          title: "Web Development & Revamps",
          description:
            "High-performance websites that are secure, responsive, and built to convert from brochure sites to complex platforms.",
          image: "/image/automations/web.png",
        },
        {
          title: "AI Integrations",
          description:
            "Embed intelligence into your operations from predictive analytics to automated decision-making.",
          image: "/image/automations/ai.png",
        },
        {
          title: "Custom Chatbots",
          description:
            "Conversational AI assistants that handle customer queries, book appointments, and collect leads 24/7.",
          image: "/image/automations/chatbot.png",
        },
        {
          title: "Business Dashboards",
          description:
            "Centralised dashboards that pull in live data from across your systems, so decision-making happens in real time.",
          image: "/image/automations/business.png",
        },
        {
          title: "CRM Solutions",
          description:
            "Tailored CRMs that track leads, manage clients, and automate follow-ups — all in one secure hub.",
          image: "/image/automations/crm.png",
        },
        {
          title: "Endpoint Security",
          description:
            "Advanced device protection that stops malware, ransomware, and phishing before they impact your business.",
          image: "/image/automations/security.png",
        },
        {
          title: "Dark Web Monitoring",
          description:
            "Continuous scanning to detect stolen credentials or sensitive company data on the dark web.",
          image: "/image/automations/security.png",
        },
      ],
      button: {
        text: "EXPLORE OUR AUTOMATIONS SOLUTIONS",
        link: "/services",
      },
    },

    // Case Studies Section
    caseStudies: {
      title: {
        main: "THE DIGITAL SOLUTIONS",
        italic: "WE DELIVER",
      },
      cases: {
        caseStudy1: {
          logoWidth: 300,
          logoHeight: 400,
          logo: "/image/portfolio/case/ai-vigil.png", // Special identifier for custom SVG
          title:
            "Delivering AI-Powered IT & Cybersecurity That Cut Downtime by 68% and Reduced Client IT Costs by Over £500K",
          description:
            "Through our end-to-end IT services spanning website builds, AI chatbot integration, secure cloud migrations, automation workflows, advanced cybersecurity, and ongoing IT support, we've helped our clients transform from tech-frustrated to tech-enabled. Today, AI-Vigil MSP powers operations for SMBs across healthcare, finance, logistics, and real estate, cutting downtime by up to 68%.",
          buttonText: "Read Full Case Study",
          expandedContent: {
            title: "How We Built Their IT Growth Engine",
            description:
              "From the first day we plugged in their systems to now running multi-industry campaigns, here's how the journey unfolded.",
            phases: [
              {
                title: "Phase 1: Getting the Basics Locked In",
                description:
                  "We kicked things off by giving AI-Vigil the essentials like secure cloud access, 24/7 helpdesk, and rock-solid endpoint protection.",
              },
              {
                title: "Phase 2: Taking It Industry-Wide",
                description:
                  "Once the foundation was solid, we helped AI-Vigil branch out. Healthcare, finance, logistics, real estate—you name it. We baked in automated reporting from day one.",
              },
              {
                title: "Phase 3: Creating Products That Fit Like a Glove",
                description:
                  "We rolled out tailored solutions like MedShield for clinics, RetailShield for shops, LogiDefend for logistics. Every product came with AI-powered monitoring, instant alerts, and access controls",
              },
              {
                title: "Phase 4: Making Cybersecurity Automatic",
                description:
                  'Instead of "hope nothing happens," we moved to "we\'ll know before it does." AI threat detection, automatic patching, backup routines that never miss a beat',
              },
              {
                title: "Phase 5: Growing the Brand",
                description:
                  "With their tech and security humming, we turned on the marketing engine. Industry-targeted campaigns, security-focused messaging, and lead funnels",
              },
            ],
            numbers: [
              {
                title: "The Numbers We're Seeing: ",
                points: [
                  "68% faster IT response times",
                  "Clients saving £7000+ annually on tech costs",
                  "99.99% uptime across all sectors",
                  "Steady growth in 4+ key industries",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
        caseStudy2: {
          logoWidth: 300,
          logoHeight: 400,
          logo: "/image/portfolio/case/scaling-suite.png",
          mainTitle: "Scaling Suite", // Special identifier for custom SVG
          title:
            "How a SaaS Startup Launched a Fully Branded CRM and Secured 5 Industries in Under 8 Weeks",
          description:
            "ScalingSuite started as an idea for an all-in-one CRM and automation platform, but in just two months, it became a fully launched SaaS brand with paying customers across insurance, legal, real estate, healthcare, and marketing sectors. We handled the full build like brand identity, website, SaaS integrations, Google SSO, industry-specific pages, and social media rollout.",
          buttonText: "Read Full Case Study",
          expandedContent: {
            title: "The Journey We've built with ScalingSuite",
            phases: [
              {
                title: "Phase 1: Built the Brand",
                description:
                  'We kicked things off by giving ScalingSuite its own identity with logo, colors, Webflow site, and a look that screamed "serious SaaS," not "generic template."',
              },
              {
                title: "Phase 2: Made Signing Up Friction-Free",
                description:
                  'We wired up Google SSO, connected every CTA to GHL, and built a pricing page that made "Start my trial" the easiest click of the day.',
              },
              {
                title: "Phase 3: Turned Features into Eye-Candy",
                description:
                  "Plain GHL screenshots? Not on our watch. We custom-designed visuals, animations, and an explainer video so users could see the value instantly.",
              },
              {
                title: "Phase 4: Created a Home for Every Use Case",
                description:
                  "From insurance to funeral services, each niche got its own tailored page showing exactly how ScalingSuite solves their problems.",
              },
              {
                title: "Phase 5: Growing the Brand",
                description:
                  "With the site polished and pages in place, we went live, complete with social media branding, ad campaigns, and a resource hub to keep leads engaged.",
              },
            ],
            numbers: [
              {
                title: "The Numbers We're Seeing: ",
                points: [
                  "+220% increase in trial sign-ups",
                  "70% faster onboarding",
                  "99.9% uptime across all SaaS features",
                  "40% lower design-to-development time",
                ],
              },
            ],
            image: "/image/automations/scaling-card.png",
          },
        },
      },
    },

    // Digital Impact Section
    digitalImpact: {
      title: {
        main: "OUR DIGITAL IMPACT",
        italic: "SAYS IT ALL",
      },
      stats: [
        {
          value: "150+",
          label: "BUSINESSES SECURED",
        },
        {
          value: "300+",
          label: "IT & Automation Projects Delivered",
        },
        {
          value: "£700K+",
          label: "Client Tech Costs Saved",
        },
        {
          value: "500+",
          label: "Cybersecurity Incidents Prevented",
        },
        {
          value: "4",
          label: "Industry-Specific AI Products",
        },
        {
          value: "24/7",
          label: "Helpdesk Coverage",
        },
      ],
    },

    // Tip of the Iceberg Section
    tipOfIceberg: {
      title: {
        main: "That's just the tip of the",
        italic: "Iceberg",
      },
      description:
        "Great outcomes aren't magic - they're method. Behind every polished deliverable is months of precision work.",
      services: [
        {
          title: "IT & Cybersecurity",
          features: [
            "24/7 endpoint protection",
            "AI-powered threat detection",
            "Dark web monitoring",
            "Advanced email security",
            "Compliance-ready backups",
          ],
        },
        {
          title: "Automations",
          features: [
            "AI-driven CRM workflows",
            "Automated onboarding sequences",
            "Smart reporting dashboards",
            "License & tool usage audits",
            "Predictive maintenance alerts",
          ],
        },
        {
          title: "Cloud & Infrastructure",
          features: [
            "Microsoft 365 setup & optimization",
            "Secure cloud migrations",
            "Network monitoring & patching",
            "Disaster recovery solutions",
            "Hardware-as-a-service",
          ],
        },
        {
          title: "Campaigns & Outreach",
          features: [
            "Industry-specific lead funnels",
            "Automated email sequences",
            "Conversion-focused landing pages",
            "Multi-channel remarketing",
            "ROI tracking & reporting",
          ],
        },
      ],
    },

    // Final CTA Section
    finalCTA: {
      stats: {
        bold1: "68%",
        italic1: "FASTER FIXES. \n",
        bold2: "£7K BACK IN YOUR POCKET.",
      },
      title: "Ready to Turn Your IT into a Growth Story?",
      description:
        'Let\'s ditch the endless "IT headaches" and build you a setup that actually fuels your business with airtight security, smart automations, and measurable wins.',
      buttonText: "LET'S GET STARTED",
    },
  },
  {
    title: "digital-success",
    // Hero Section
    hero: {
      indicator: "DIGITAL SUCCESS",
      title: {
        line1: "MEET THE PROOF",
        line2: "OF OUR DIGITAL IMPACT",
      },
      description:
        "Every project here started as a goal and became a measurable success. Dive in to see how strategy, creativity, and execution come together to deliver.",
      buttons: {
        primary: "VIEW OUR WORK",
        secondary: "START YOUR SUCCESS STORY",
      },
    },

    // Digital Solutions Section
    digitalSolutions: {
      title: {
        main: "THE DIGITAL RECIPE",
        italic: "WE WORK ON",
      },
      description:
        "Everything starts with a strategy and ends with results. These are the core moves that make magic happen.",
      solutions: [
        {
          title: "Branding Strategy",
          description:
            "Building brands with a clear voice, sharp visuals, and a story worth remembering.",
          image: "/image/automations/digital/branding.svg",
        },
        {
          title: "Website Revamp",
          description:
            "Taking what’s there, making it faster, cleaner, and built to convert from day one.",
          image: "/image/automations/digital/website.svg",
        },
        {
          title: "Copywriting",
          description:
            "Turning ideas into words that move people and keep them clicking.",
          image: "/image/automations/digital/copywriting.svg",
        },
        {
          title: "SEO",
          description:
            "Making sure the right audience finds you, right when they need you.",
          image: "/image/automations/digital/seo.svg",
        },
        {
          title: "Campaigns",
          description:
            "Launching targeted campaigns that don’t just get noticed, they get results.",
          image: "/image/automations/digital/campaigns.svg",
        },
        {
          title: "Social Media",
          description:
            "Keeping brands active, relevant, and impossible to scroll past.",
          image: "/image/automations/digital/social-media.svg",
        },
      ],
      button: {
        text: "EXPLORE OUR MARKETING SERVICES",
        link: "/services",
      },
    },

    // Case Studies Section
    caseStudies: {
      title: {
        main: "SEE OUR",
        italic: "BOLDEST BUILDS",
      },
      cases: {
        caseStudy1: {
          logoWidth: 250,
          logoHeight: 400,
          logo: "/image/portfolio/case/premier-private-gp.png",
          mainTitle: "Premier Private GP", // Special identifier for custom SVG
          title:
            "Transforming a Vision into a Trusted UK Healthcare Brand Serving Over 1,000 Patients",
          description:
            "We’ve been part of this healthcare clinic’s journey since day one. With our comprehensive services that enclosed the brand development, website development, content, ads, SEO, and conversion of clicks into loyal clients, we have helped Premier Private GP bring its online presence from a nondescript state to one that remains memorable.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "Their Digital Journey",
            description: "",
            phases: [
              {
                title: "Phase 1: Creating Strategy",
                description:
                  "Social media? Check. Website in the works? Double check. This was where the digital foundation was laid, and the first sparks of brand recognition began to fly.",
              },
              {
                title: "Phase 2: Visibility with SEO",
                description:
                  "First, on-page SEO to get the house in order. Then off-page strategies to spread the word. Traffic started picking up as search rankings climbed.",
              },
              {
                title: "Phase 3: Making Bookings with Meddbase",
                description:
                  "Integrated Meddbase, so patients could book without the back-and-forth. Smooth journeys mean happier clients (and fewer missed opportunities)",
              },
              {
                title: "Phase 4: Targeted Ad Campaigns",
                description:
                  "Once the clinic opened its doors, we focused on generating leads and revenue through engaging social media content and targeted ad campaigns for key services. (XYZ ROI on launch campaigns)",
              },
              {
                title: "Phase 5: Brand Essentials for Mrketing",
                description:
                  "Posters, brochures, print , made sure the offline presence matched the online buzz",
              },
              {
                title: "Phase 6: Email Marketing Momentum",
                description:
                  "Rolled out monthly newsletters, packed with updates, offers, and tips  which quickly became one of the highest-converting channels.",
              },
              {
                title: "Phase 7: CRM Power with GHL Integration",
                description:
                  "Implemented GoHighLevel to streamline patient communication, automate follow-ups, and track leads like never before",
              },
              {
                title: "Phase 8: Always-On Support with Chatbot",
                description:
                  "Launched a smart chatbot to answer patient questions 24/7 and guide them to booking",
              },
              {
                title: "Phase 9: Mobile App Launch",
                description:
                  "Launched a mobile app so patients can book and manage appointments with ease. The growth? Still accelerating",
              },
              {
                title: "Today – Still Growing Strong",
                description:
                  "This is an ongoing journey. Today, the project keeps driving revenue and attracting more patients, with more strategies in the pipeline.",
              },
            ],
            numbers: [
              {
                title: "The Numbers We're Seeing: ",
                points: [
                  "3X increase in appointments",
                  "Patient retention rate of 42% year-over-year",
                  "70% reduction in time spent on manual booking",
                  "Expanded to serve 1000+ registered patients",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
        caseStudy2: {
          logoWidth: 300,
          logoHeight: 400,
          logo: "/image/portfolio/case/shipt-quick.png",
          mainTitle: "ShiptQuick", // Special identifier for custom SVG
          title:
            "How a 3PL Avoided $250K in Downtime and Modernized Its Entire Warehouse IT in 6 Weeks",
          description:
            "ShiptQuick began with 120,000 sq. ft. of unused warehouse space in Indiana but  today, it’s a fast-growing 3PL serving 15+ eCommerce brands with 10,000+ orders fulfilled monthly. We delivered a full digital transformation, including brand strategy, a high-converting web redesign, SEO, and marketing automation.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "Mapping the Digital Growth of a 3PL Brand",
            phases: [
              {
                title: "Phase 1: Brand Positioning",
                description:
                  "We started with a discovery session. This led to a clear brand positioning statement tailored for small-to-mid eCommerce businesses seeking reliable Midwest fulfillment",
              },
              {
                title: "Phase 2: Website Revamp & SEO",
                description:
                  "Redesigned the website from the ground up to look and feel like a premium eCommerce brand. Developed it on a scalable CMS with mobile-first UX, optimized every page for search visibility, and created conversion-focused copy for each service.",
              },
              {
                title: "Phase 3: UI/UX Design & Development",
                description:
                  "mplemented an intuitive interface that made it effortless for visitors to understand services, request quotes, and connect with the team",
              },
              {
                title: "Phase 4: SEO & Technical Optimization",
                description:
                  "Went beyond on-page SEO with technical clean-up, site speed improvements, structured data, and backlink outreach to industry blogs and directories.",
              },
              {
                title: "Phase 5: Automation & CRM Integration",
                description:
                  "Deployed a custom CRM to manage leads from first contact to onboarding. Integrated marketing automations including lead scoring and proposal follow-ups.",
              },
              {
                title: "Phase 6 – Hosting & Maintenance",
                description:
                  "Provided lightning-fast hosting, ongoing technical maintenance, and quarterly SEO reviews to ensure ShiptQuick stays competitive",
              },
            ],
            numbers: [
              {
                title: "The Numbers We're Seeing: ",
                points: [
                  "300% year-over-year growth in deliveries",
                  "-75% website build and update times after automation rollout",
                  "99.8% order tracking accuracy maintained",
                  "40% lower operational costs",
                ],
              },
            ],
            image: "/image/automations/scaling-card.png",
          },
        },
      },
    },

    // Digital Impact Section
    digitalImpact: {
      title: {
        main: "OUR DIGITAL EXPERIENCE",
        italic: "SAYS IT ALL",
      },
      stats: [
        {
          value: "500+",
          label: "Websites",
        },
        {
          value: "200+",
          label: "Paid Campaigns",
        },
        {
          value: "$12M+",
          label: "Adwords Budget Managed",
        },
        {
          value: "1000+",
          label: "SEO Campaigns",
        },
        {
          value: "100+",
          label: "Social Media Campaigns",
        },
        {
          value: "300+",
          label: "Clients",
        },
      ],
    },

    // Tip of the Iceberg Section
    tipOfIceberg: {
      title: {
        main: "That's just the tip of the",
        italic: "Iceberg",
      },
      description:
        "Great outcomes aren't magic - they're method. Behind every polished deliverable is months of precision work.",
      services: [
        {
          title: "Web Development",
          features: [
            "Quick web builds",
            "Custom landing pages",
            "SEO-ready structure",
            "Speed optimization",
            "Web and mobile tested product",
          ],
        },
        {
          title: "Campaigns & Advertising",
          features: [
            "Google Ads funnels",
            "Retargeting setups",
            "Market-specific keywords",
            "CRO-optimised creatives",
            "ROI tracking",
          ],
        },
        {
          title: "Social Media",
          features: [
            "Branded short videos",
            "Multi-platform posting",
            "Paid social campaigns",
            "30-day content plans",
            "Engagement boosts",
          ],
        },
        {
          title: "AI & Automation",
          features: [
            "AI chat bots",
            "CRM workflows",
            "GHL integrations",
            "Analytics dashboards",
            "Auto follow-ups",
          ],
        },
      ],
    },

    // Final CTA Section
    finalCTA: {
      stats: {
        italic1: "FUEL GROWTH WITH",
        bold2: "3X",
        italic2: "THE QUALIFIED LEADS",
        bold3: "AND 55% FASTER CONTENT TURNAROUND",
      },
      title: "Ready to Make Your Brand the Next Success Story?",
      description:
        "Let’s turn your vision into a digital powerhouse that drives measurable results.",
      buttonText: "START MY TRANSFORMATION",
    },
  },
  {
    title: "real-estate",
    // Hero Section
    hero: {
      indicator: "REAL ESTATE",
      title: {
        line1: "MEET THE PROOF",
        line2: "OF OUR DIGITAL IMPACT",
      },
      description:
        "We’ve helped real estate and construction brands go from blueprint to breakthrough — building everything from ground-up digital systems that keep projects moving, to marketing that gets buyers lining up before the foundation is set",
      buttons: {
        primary: "VIEW OUR WORK",
        secondary: "START YOUR SUCCESS STORY",
      },
    },

    // Digital Solutions Section
    digitalSolutions: {
      title: {
        main: "THE DIGITAL RECIPE",
        italic: "WE WORK ON",
      },
      description:
        "From the first brick to the final click, we build systems, brands, and campaigns that make your projects profitable faster",
      solutions: [
        {
          title: "Construction Tech Setup",
          description:
            "From project management software to site monitoring tools, we put the tech in place",
          image: "/image/automations/real-estate/construction.svg",
        },
        {
          title: "Branding & Positioning",
          description:
            "We craft an identity buyers remember from logo and colour palette to a story that sells",
          image: "/image/automations/real-estate/branding-positioning.svg",
        },
        {
          title: "Website & Property Portals",
          description:
            "High-converting sites that showcase listings, capture leads, and keep deals moving",
          image: "/image/automations/real-estate/website-portals.svg",
        },
        {
          title: "AI & Automation",
          description:
            "Integrations that handle client follow-ups, project tracking, and data insights",
          image: "/image/automations/real-estate/ai-automation.svg",
        },
        {
          title: "Marketing Campaigns",
          description:
            "From pre-launch buzz to sold-out openings, our campaigns drive the right buyers",
          image: "/image/automations/real-estate/marketing.svg",
        },
        {
          title: "SEO & Local Visibility",
          description:
            "We make sure you’re found by investors and partners exactly when they’re searching.",
          image: "/image/automations/real-estate/seo.svg",
        },
      ],
      button: {
        text: "EXPLORE OUR REAL ESTATE SERVICES",
        link: "/services",
      },
    },

    // Case Studies Section
    caseStudies: {
      title: {
        main: "SEE OUR",
        italic: "BOLDEST BUILDS",
      },
      cases: {
        caseStudy1: {
          logoWidth: 400,
          logoHeight: 500,
          logo: "/image/portfolio/case/zen-retreats.png",
          mainTitle: "Zen Retreats", // Special identifier for custom SVG
          title:
            "How Zen Retreats Sold Out 70% of Units Before Completion and Built a Steady Rental Revenue Stream",
          description:
            "Zen Retreats began as an idea for full-serviced luxury apartments in Nathigali. With the structure now almost complete and 70% of units already sold, it’s on track to become one of the region’s most profitable hospitality ventures. We led the project end-to-end from brand identity and investor marketing to a sleek booking-ready website, property visuals, SEO, and a custom rental portal.",
          buttonText: "View Full Case Study",
          expandedContent: {
            title: "How We Built Their Growth Engine",
            description: "",
            phases: [
              {
                title: "Phase 1: From Concept to Reality",
                description:
                  "Zen Retreats started as an idea: a premium, full-serviced apartment experience in the hills of Nathigali. We began by defining the brand essence.",
              },
              {
                title: "Phase 2: Brand & Visual Identity",
                description:
                  "We designed a clean, sophisticated logo, selected a calming colour palette, and curated photography that captures both the location’s and modern elegance.",
              },
              {
                title: "Phase 3: Digital Foundation",
                description:
                  "We built a fast, mobile-optimised website with seamless booking capabilities, integrated property details, image galleries, and location highlights",
              },
              {
                title: "Phase 4: Marketing & Search Visibility",
                description:
                  "We implemented technical + on-page SEO, wrote compelling property descriptions, and set up social channels with consistent branding",
              },
              {
                title: "Phase 5: Guest Portal Integration",
                description:
                  "After launch, we added a fully functional guest portal allowing customers to manage reservations, request services, and access construction information",
              },
            ],
            numbers: [
              {
                title: "The Numbers We're Seeing: ",
                points: [
                  "70% of units sold before completion",
                  "Projected annual rental yields up to 12%",
                  "Structure 95% complete – full launch in sight",
                  "Direct booking inquiries up 4x since website launch",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
      },
    },

    // Digital Impact Section
    digitalImpact: {
      title: {
        main: "OUR REAL ESTATE IMPACT",
        italic: "IN NUMBERS",
      },
      stats: [
        {
          value: "40+",
          label: "Property & development websites launched",
        },
        {
          value: "70+",
          label: "Construction project tech setups delivered",
        },
        {
          value: "$800K+",
          label: "In property sales driven through our marketing campaigns",
        },
        {
          value: "40+",
          label: "Developers, agents & firms we’ve partnered with",
        },
      ],
    },

    // Tip of the Iceberg Section
    tipOfIceberg: {
      title: {
        main: "That's just the tip of the",
        italic: "Blueprint",
      },
      description:
        "Big results don’t happen by accident, they’re built step-by-step with the right tools, skills, and execution",
      services: [
        {
          title: "Property Development",
          features: [
            "Full-scale project planning to tech integration",
            "Website & portal builds for developments",
            "SEO-ready property listings",
            "Fast-loading, mobile-tested designs",
            "3D virtual tours & interactive floorplans",
          ],
        },
        {
          title: "Marketing & Lead Generation",
          features: [
            "Google Ads funnels for pre-sales",
            "Retargeting to re-engage potential buyers",
            "Market-specific keyword targeting",
            "Conversion-optimised creatives",
            "ROI tracking for every campaign",
          ],
        },
        {
          title: "AI & Smart Tech",
          features: [
            "AI-driven CRM workflows for agents",
            "Automated follow-ups with prospects",
            "Predictive analytics for property trends",
            "Chatbots for 24/7 lead capture",
            "Smart reporting dashboards",
          ],
        },
      ],
    },

    // Final CTA Section
    finalCTA: {
      stats: {
        italic1: "SELL PROPERTIES FASTER WITH",
        bold2: "3X",
        italic2: "MORE",
        bold3: "QUALIFIED LEADS AND 55% QUICKER\n MARKETING TURNAROUNDS",
      },
      title: "Ready to Make Your Brand the Next Success Story?",
      description:
        "Let’s turn your vision into a digital powerhouse that drives measurable results.",
      buttonText: "START MY TRANSFORMATION",
    },
  },
  {
    title: "mobile-solutions",
    // Hero Section
    hero: {
      indicator: "MOBILE SOLUTIONS",
      title: {
        line1: "APPS BUILT TO BE",
        line2: "DOWNLOADED AND USED",
      },
      description:
        "Every tap, swipe, and download is designed for speed, security, and long-term love from your users",
      buttons: {
        primary: "SEE OUR WORK",
      },
    },

    // Digital Solutions Section
    digitalSolutions: {
      title: {
        main: "WHAT EVERY SUCCESSFUL APP",
        italic: "HAS IN ITS DNA",
      },
      description:
        "Apps are built on a rock-solid foundation of security, compliance, and seamless performance. Here’s our “must-have” recipe for every mobile product we create",
      solutions: [
        {
          title: "Secure Data Architecture",
          description: "Encryption at every interaction, from login to logout",
          image: "/image/automations/mobile/secure-data.svg",
        },
        {
          title: "GDPR & CCPA Compliance",
          description: "Global regulations baked in, so you stay compliant",
          image: "/image/automations/mobile/gdpr.svg",
        },
        {
          title: "Lightning-Fast Performance",
          description: "Optimized for speed on every network, from 5G to 3G",
          image: "/image/automations/mobile/lighting-fast.svg",
        },
        {
          title: "Cloud Storage & Transfer",
          description:
            "Safe, scalable, and accessible, so your app grows with your user base",
          image: "/image/automations/mobile/cloud-storage.svg",
        },
        {
          title: "Intuitive UX & UI Design",
          description:
            "User-friendly interfaces so you know exactly what to do without a manual",
          image: "/image/automations/mobile/intuitive.svg",
        },
        {
          title: "Cross-Platform Optimization",
          description:
            "iOS, Android, tablets, your app should shine everywhere.",
          image: "/image/automations/mobile/cross-platform.svg",
        },
      ],
      button: {
        text: "EXPLORE OUR MOBILE SOLUTIONS",
        link: "/services",
      },
    },

    // Case Studies Section
    caseStudies: {
      title: {
        main: "SEE OUR",
        italic: "BOLDEST BUILDS",
      },
      cases: {
        caseStudy1: {
          logoWidth: 300,
          logoHeight: 400,
          mainTitle: "Backify", // Special identifier for custom SVG
          title:
            "An AI background remover loved across the US, Canada, and the Netherlands",
          description:
            "Backify started with a simple mission. Give users a clean, crisp background removal tool without the mess. In a market flooded with complex editors, we focused on speed, accuracy, and ease of use. The result? An AI-powered app with over 100K installs and a loyal user base across multiple countries, praised for its one-tap results and professional-quality cutouts.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "Story That Scales",
            description: "",
            phases: [
              {
                title: "Phase 1: Discovery & Vision Alignment",
                description:
                  "We mapped out the real problem users faced. Slow, clunky photo editing and zeroed in on an AI-first solution that could deliver instant, accurate cutouts",
              },
              {
                title: "Phase 2: AI Core Development",
                description:
                  "Trained a custom image segmentation model optimized for speed without sacrificing edge precision.",
              },
              {
                title: "Phase 3: UX & Feature Layer",
                description:
                  "Added drag-and-drop simplicity, background replacement, batch editing, and high-res exports, all accessible in under 3 taps.",
              },
              {
                title: "Phase 4: Testing & Optimization",
                description:
                  "A/B tested edge detection accuracy, reduced load time by 38%, and optimized UI for both beginners and pros.",
              },
              {
                title: "Phase 5: Launch & Scale",
                description:
                  "Deployed on both Android & iOS with localisation for 8 languages. Marketing push drove 500K+ downloads and a 4.0★ rating within 6 months",
              },
            ],
            numbers: [
              {
                title: "Best Feature Spotlight: ",
                points: [
                  "One-Tap Background Removal",
                  "Instant, clean results powered by advanced AI.",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
        caseStudy2: {
          logoWidth: 300,
          logoHeight: 400,
          mainTitle: "Magic Ai", // Special identifier for custom SVG
          title:
            "Incorporating a smarter way to erase unwanted objects in no time, powered by AI precision.",
          description:
            "Magic AI was built for creators who needed more than a background remover. They wanted full control over what stays and what goes in an image. Our AI detects and removes objects seamlessly, reconstructing the background with natural detail. With 50K+ installs and a stellar 4.5★ rating, it’s now a go-to tool for mobile photo editing worldwide.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "Their Success Is Our Win",
            description: "",
            phases: [
              {
                title: "Phase 1: Problem Identification",
                description:
                  "Recognized demand for object removal that doesn’t distort images.",
              },
              {
                title: "Phase 2: Feature Integration",
                description:
                  "Added AI-assisted background editing and manual tools",
              },
              {
                title: "Phase 3: Testing Across Use Cases",
                description:
                  "Optimized for portraits, landscapes, and product shots.",
              },
              {
                title: "Phase 4: Global Rollout",
                description:
                  "Achieved high ratings and 3.2x repeat user engagement.",
              },
            ],
            numbers: [
              {
                title: "Best Feature Spotlight: ",
                points: [
                  "AI Auto-Detect: Spots and removes unwanted objects in seconds.",
                  "Manual Precision Tool: For detailed, hand-done edits when accuracy matters.",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
        caseStudy3: {
          logoWidth: 300,
          logoHeight: 400,
          mainTitle: "Ship Finder", // Special identifier for custom SVG
          title:
            "Real-time vessel tracking for hobbyists and professionals alike.",
          description:
            "Ship Finder’s vision was to transform the way maritime data is accessed. Designed for both marine industry professionals and enthusiasts, it provides real-time tracking, port schedules, and weather updates in one sleek app. With eight core features, including detailed ship information and global coverage, it’s become a must-have tool for anyone navigating the seas.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "Ocean Mapped in Pocket",
            description: "",
            phases: [
              {
                title: "Phase 1: Industry & User Research",
                description:
                  "Partnered with maritime professionals to shape core needs.",
              },
              {
                title: "Phase 2: Core Functionality Build",
                description:
                  "Implemented live AIS ship tracking, global vessel database, and marine weather updates.",
              },
              {
                title: "Phase 3: Feature Expansion",
                description:
                  "Integration compass, altimeter, and detailed port information for both commercial and hobbyist use",
              },
              {
                title: "Phase 4: Data Optimization & Security",
                description:
                  "Encrypted streams and compliance with global standards.",
              },
              {
                title: "Phase 5: Release & Adoption",
                description:
                  "Launched globally, quickly gaining traction with ship spotters, logistics professionals, and port authorities.",
              },
            ],
            numbers: [
              {
                title: "Best Feature Spotlight: ",
                points: [
                  "Ship Finder: See vessel positions in real time.",
                  "Ship Schedule: Know exactly when and where ships will arrive or depart.",
                  "Port Schedule: Detailed port timetables for better planning.",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
      },
    },

    // Digital Impact Section
    digitalImpact: {
      title: {
        main: "MEASURED",
        italic: "BY NUMBERS",
      },
      stats: [
        {
          value: "150K+",
          label: "App Downloads Across Platforms",
        },
        {
          value: "3",
          label: "Countries Where Our Apps Rank in Top Charts",
        },
        {
          value: "4.5★",
          label: "Average User Rating",
        },
        {
          value: "8+",
          label: "Unique App Categories Developed",
        },
        {
          value: "100%",
          label: "GDPR & CCPA Compliant Apps",
        },
        {
          value: "1M+",
          label: "Monthly Active Users Supported",
        },
      ],
    },

    // Tip of the Iceberg Section
    tipOfIceberg: {
      title: {
        main: "Every Hit App Has a",
        italic: "Backstory",
      },
      description:
        "Clear strategy, flawless execution, and fine-tuning, a process that takes months of meticulous planning, coding, testing, and iteration.",
      services: [
        {
          title: "App Development",
          features: [
            "Rapid prototyping",
            "Custom UI/UX design",
            "Cross-platform builds (iOS & Android)",
            "Optimized performance",
            "Secure architecture",
          ],
        },
        {
          title: "Compliance & Security",
          features: [
            "GDPR & CCPA compliance",
            "End-to-end encryption",
            "Secure data storage",
            "Safe third-party integrations",
            "Regular vulnerability checks",
          ],
        },
        {
          title: "User Engagement & Retention",
          features: [
            "In-app notifications",
            "Loyalty programs",
            "Personalized user journeys",
            "Push messaging strategies",
            "Gamification features",
          ],
        },
        {
          title: "AI & Advanced Features",
          features: [
            "AI-powered object detection",
            "Predictive search",
            "Chatbots for in-app support",
            "Automation workflows",
            "Smart analytics",
          ],
        },
      ],
    },

    // Final CTA Section
    finalCTA: {
      stats: {
        italic1: "POWERING GROWTH WITH",
        bold2: "3X \n HIGHER USER RETENTION"
      },
      title: "Ready to Build the App Everyone’s Talking About?",
      description:
        "Let’s take your idea from concept to a top-performing product that wins users and the market.",
      buttonText: "BUILD MY APP NOW",
    },
  },
  {
    title: "healthcare",
    // Hero Section
    hero: {
      indicator: "HEALTHCARE",
      title: {
        line1: "INNOVATIVE",
        line2: "HEALTHCARE SYSTEMS DELIVERED",
      },
      description:
        "Every tap, each click, and every scroll built for patients, providers, and peace of mind",
      buttons: {
        primary: "SEE OUR WORK",
      },
    },

    // Digital Solutions Section
    digitalSolutions: {
      title: {
        main: "NO ROOM FOR GUESSWORK",
        italic: "FOR WHAT'S IMPORTANT",
      },
      description:
        "Built for trust, speed, and compliance, every RMMAC solution starts with a foundation you can stake your reputation on",
      solutions: [
        {
          title: "Secure Patient Data Systems",
          description:
            "End-to-end encryption so every record stays private, from appointment to archive.",
          image: "/image/automations/healthcare/secure-patient-data.svg",
        },
        {
          title: "Regulatory-Ready Compliance",
          description:
            "HIPAA, GDPR, or local health laws, we bake it in from day one",
          image: "/image/automations/healthcare/regulatory.svg",
        },
        {
          title: "Fast Performance",
          description:
            "Optimized to load in seconds, even on low-bandwidth hospital networks.",
          image: "/image/automations/healthcare/fast-performance.svg",
        },
        {
          title: "Cloud-First Infrastructure",
          description:
            "Scalable, secure storage that grows with your patient base.",
          image: "/image/automations/healthcare/cloud-infrastructure.svg",
        },
        {
          title: "Intuitive Patient & Provider Experience",
          description:
            "Interfaces that feel effortless for everyone, no manuals required.",
          image: "/image/automations/healthcare/intuitive-patient.svg",
        },
        {
          title: "Cross-Device Compatibility",
          description:
            "From desktops to tablets to mobiles, your platform works everywhere, every time",
          image: "/image/automations/healthcare/cross-device.svg",
        },
      ],
      button: {
        text: "EXPLORE OUR HEALTHCARE SOLUTIONS",
        link: "/services",
      },
    },

    // Case Studies Section
    caseStudies: {
      title: {
        main: "SEE OUR",
        italic: "BOLDEST BUILDS",
      },
      cases: {
        caseStudy1: {
          logoWidth: 300,
          logoHeight: 400,
          logo: "/image/portfolio/case/simpl.png",
          mainTitle: "SIMPL Health", // Special identifier for custom SVG
          title:
            "A HIPAA-compliant website built to earn trust, attract leads, and secure investor confidence.",
          description:
            "SIMPL Health needed more than a brochure site, they needed a conversion-ready platform that spoke to patients, providers, and investors alike. RMAAC provided a custom, mobile-first UI/UX, ADA compliance, SEO content, and secure integrations for scheduling and demos. The result: a marketing-driven website that supports their vision and scales with their business.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "Consultations Made Easy",
            description: "",
            phases: [
              {
                title: "The Challenge",
                description:
                  "A healthcare startup needed a website that would gain trust, attract patients, and pass every compliance check.",
              },
              {
                title: "Our Approach",
                description:
                  "RMAAC designed a conversion-driven site with clear navigation, persuasive content, and full HIPAA compliance. Built to be found. Built to be trusted.",
              },
            ],
            numbers: [
              {
                title: "Best Feature Spotlight: ",
                points: [
                  "A homepage experience that boosted sign-ups by 42% in 30 days",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
        caseStudy2: {
          logoWidth: 200,
          logoHeight: 400,
          logo: "/image/portfolio/case/sehat-zindgi.png",
          mainTitle: "Sehat Zindagi", // Special identifier for custom SVG
          title:
            "Connecting UK-Level Primary Care with Every Home in Pakistan. A telehealth platform making trusted healthcare accessible nationwide.",
          description:
            "Sehat Zindagi set out to raise the standard of primary care in Pakistan. We built a full digital ecosystem, from branding and UX to local SEO and marketing that reaches both urban and rural users. Multilingual support, mobile optimization, and integrated patient tools ensure quality care is always within reach.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "Breaking Barriers in Primary Healthcare Access",
            description: "",
            phases: [
              {
                title: "The Challenge",
                description:
                  "Bring quality primary care to remote regions while keeping it accessible for urban patients too",
              },
              {
                title: "Our Approach",
                description:
                  "A multilingual, mobile-first site that loads fast even in low-connectivity areas. Paired with targeted campaigns that spoke the local language, literally",
              },
            ],
            numbers: [
              {
                title: "Best Deliverable Spotlight: ",
                points: [
                  "Geo-targeted SEO that increased rural engagement by 65%",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
        caseStudy3: {
          logoWidth: 250,
          logoHeight: 300,
          logo: "/image/portfolio/case/premier-private-gp.png",
          mainTitle: "Premier Private GP", // Special identifier for custom SVG
          title:
            "From Newcomer to UK Trusted Healthcare Brand Serving 1,000+ Patients.",
          description:
            "RMAAC has been part of Premier Private GP’s journey since day one, transforming it from an unknown name into a go-to private clinic in Surrey. This has been achieved through complete brand development, a custom-built website, SEO, targeted ad campaigns, email marketing, print materials, social media, chatbot automation, GHL integration, and a fully functional mobile app, we’ve built a digital and offline presence that works in perfect sync.",
          buttonText: "Explore Full Case Study",
          expandedContent: {
            title: "The Journey So Far",
            description: "",
            phases: [
              {
                title: "The Challenge",
                description:
                  "Launch a new private GP clinic in Surrey and turn it into a recognisable, trusted healthcare provider, all while making patient bookings, improving retention, and streamlining the patient journey",
              },
              {
                title: "Our Approach",
                description:
                  "We developed the brand identity of the clinic as the ground up, including a logo and site, as well as SEO and paid campaigns. Integrated Meddbase so booking appointments is a smooth process, introduced GHL to automatically follow up on patients, rolled out monthly email marketing, and created print and social content to keep the brand front-of-mind. To elevate convenience, we launched the Premier GP mobile app and added an AI-powered chatbot for 24/7 patient assistance",
              },
            ],
            numbers: [
              {
                title: "Best Deliverables: ",
                points: [
                  "Premier GP App",
                  "GHL CRM integration",
                  "AI chatbot",
                  "Targeted Google + Meta campaigns - Reduced manual admin time by 70%, increased patient retention by 42%, and helped the clinic serve over 1,000 registered patients",
                ],
              },
            ],
            image: "/image/automations/vigil-card.png",
          },
        },
      },
    },

    // Digital Impact Section
    digitalImpact: {
      title: {
        main: "RESULTS LOVED",
        italic: "AND VALUED",
      },
      stats: [
        {
          value: "500K+",
          label: "Patients Reached",
        },
        {
          value: "200+",
          label: "Healthcare Platforms Launched",
        },
        {
          value: "$8M+",
          label: "In Healthcare Campaigns Managed",
        },
        {
          value: "300+",
          label: "Healthcare-specific ad campaigns",
        },
        {
          value: "95%",
          label: "client retention rate",
        },
      ],
    },

    // Tip of the Iceberg Section
    tipOfIceberg: {
      title: {
        main: "Smarter Healthcare,",
        italic: "One Step At A Time",
      },
      description:
        "All the solutions we create to meet the healthcare industry are Research and compliance-driven, as well as patient-focused. It is the process of planning, developing, experimenting and perfecting it to make it safe, smooth and effective.",
      services: [
        {
          title: "Healthcare Solution Development",
          features: [
            "Prototype to validate medical workflows",
            "Custom UI/UX designed for patients & practitioners",
            "Cross-platform compatibility (desktop, mobile, tablets)",
            "Optimized performance for remote & low-bandwidth areas",
          ],
        },
        {
          title: "Compliance & Security",
          features: [
            "HIPAA, GDPR & CCPA compliance built-in",
            "End-to-end encryption for sensitive health data",
            "Secure hosting & cloud storage",
            "Safe integration with EMR/EHR and lab systems",
            "Regular security audits & vulnerability checks",
          ],
        },
        {
          title: "Patient Engagement & Retention",
          features: [
            "Online appointment booking & management",
            "Automated reminders for visits & medication",
            "Personalized health portals for patients",
            "Push/email notifications for follow-ups & care plans",
          ],
        },
        {
          title: "AI & Advanced Features",
          features: [
            "Chatbots for 24/7 patient support",
            "Workflow automation for clinics & hospitals",
          ],
        },
      ],
    },

    // Final CTA Section
    finalCTA: {
      stats: {
        italic1: "PATIENT TRUST, TECHNOLOGY, AND",
        bold2: "3X",
        italic2: "RETENTION",
        bold3: "THAT'S OUR BUILD",
      },
      title: "Your Turn To Go Live",
      description:
        "Whether it’s an app, a patient portal, or a complete healthcare marketing strategy — we’ll make sure it launches right and grows fast.",
      buttonText: "BUILD & MOVE",
    },
  },
];
