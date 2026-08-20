export type Package = {
  slug: string;
  name: string;
  price: string;
  priceNote: string;
  summary: string;
  bestFor: string;
  features: string[];
  selfServe: boolean;
  highlight?: boolean;
};

export const packages: Package[] = [
  {
    slug: "launch",
    name: "Launch",
    price: "$2,900",
    priceNote: "one-time",
    summary: "A fast, credible digital presence — the foundation before you spend on growth.",
    bestFor: "New businesses and founders who need a professional site live in weeks, not months.",
    features: [
      "Custom marketing website (up to 6 pages)",
      "Mobile-first, fast-loading build on Next.js",
      "Basic on-page SEO setup",
      "Contact and lead-capture forms",
      "2 weeks of post-launch support",
    ],
    selfServe: true,
  },
  {
    slug: "growth",
    name: "Growth",
    price: "$7,500",
    priceNote: "one-time",
    summary: "A web or app build with a working AI feature and a marketing engine to launch it.",
    bestFor: "Companies ready to combine a real product build with the channels to get it in front of people.",
    features: [
      "Everything in Launch",
      "Web app or mobile app build (single platform)",
      "One custom AI feature (agent, automation, or assistant)",
      "Paid + organic marketing setup for launch",
      "30 days of post-launch support",
    ],
    selfServe: true,
    highlight: true,
  },
  {
    slug: "transform",
    name: "Transform",
    price: "$15,000",
    priceNote: "one-time",
    summary: "Full-scope AI and digital transformation — strategy, build, and change management.",
    bestFor: "Established businesses modernizing systems and adopting AI across the organization.",
    features: [
      "Everything in Growth",
      "AI strategy and opportunity mapping",
      "Systems/data integration and workflow automation",
      "Cross-platform mobile build (iOS + Android)",
      "90 days of embedded advisory support",
    ],
    selfServe: true,
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceNote: "scoped quote",
    summary: "Ongoing partnership for organizations with multiple workstreams running in parallel.",
    bestFor: "Teams that need a standing partner across marketing, AI, product, and transformation.",
    features: [
      "Dedicated team across disciplines",
      "Monthly strategy and reporting cadence",
      "Priority turnaround on requests",
      "Custom SOW and pricing",
    ],
    selfServe: false,
  },
];
