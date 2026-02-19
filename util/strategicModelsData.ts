// Strategic Models Data
export interface StrategyModel {
  id: string;
  title: string;
  description: string;
  image: string[];
  layout: "imageLeft" | "imageRight";
  scopeIncludes: string[];
}

export const strategicModels: StrategyModel[] = [
  {
    id: "built",
    title: "Built",
    description:
      "We incubate products that solve clearly defined problems with commercial viability. These are internally-led ventures where we control the end-to-end lifecycle from market research to product development, brand creation, and monetization.",
    image: [
      "/image/portfolio/shiptquick-1.svg",
      "/image/portfolio/shiptquick-2.svg",
      "/image/portfolio/shiptquick-3.svg",
    ],
    layout: "imageLeft",
    scopeIncludes: [
      "Ideation & validation",
      "Full-Stack product development",
      "Brand & digital asset creation",
      "GTM strategy & execution",
      "Monetization architecture",
    ],
  },
  {
    id: "partner",
    title: "Partner",
    description:
      "We enter select equity or revenue-share partnerships with external ventures where our operational involvement significantly improves business outcomes. This is ideal for early-to-mid-stage companies requiring execution capacity in product, tech, branding, or marketing.",
    image: [
      "/image/portfolio/premier-1.svg",
      "/image/portfolio/premier-2.svg",
      "/image/portfolio/premier-3.svg",
    ],
    layout: "imageRight",
    scopeIncludes: [
      "Technical architecture & system rebuilds",
      "Product-market fit refinement",
      "Marketing automation & digital performance",
      "Brand repositioning",
      "Tech-enabled operational support",
    ],
  },
  {
    id: "scale",
    title: "Scale",
    description:
      "For post-revenue businesses positioned for growth, we provide execution support in infrastructure, paid marketing, analytics, and platform development. Our scale model aligns with companies ready to expand market reach, standardize delivery, or prepare for external funding.",
    image: [
      "/image/portfolio/ai-1.svg",
      "/image/portfolio/ai-2.svg",
      "/image/portfolio/ai-3.svg",
    ],
    layout: "imageLeft",
    scopeIncludes: [
      "System architecture for scalability",
      "Automation of workflows",
      "Performance marketing + analytics integration",
      "GTM strategy for new verticals/markets",
      "Strategic hiring & operational consulting",
    ],
  },
];
