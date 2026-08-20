export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: "megaphone" | "sparkles" | "code" | "smartphone" | "workflow" | "compass";
};

export const services: Service[] = [
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short: "Marketing",
    summary: "Demand generation systems built on paid, organic, and lifecycle channels.",
    description:
      "We build marketing engines, not campaigns. That means paid media that compounds, SEO and answer-engine optimization built for how people actually search in 2026, and lifecycle email/SMS that turns first purchases into repeat ones.",
    deliverables: [
      "Paid media (Google, Meta, LinkedIn, TikTok) with weekly optimization",
      "SEO and AI answer-engine optimization (AEO)",
      "Content systems and editorial calendars",
      "Lifecycle email and SMS automation",
      "Marketing analytics and attribution dashboards",
    ],
    icon: "megaphone",
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    short: "AI",
    summary: "Custom AI agents, automations, and product features that ship to production.",
    description:
      "We design and build applied AI — not proofs of concept that die in a slide deck. Customer-facing agents, internal automations, and AI features embedded directly into your product, built on the same frontier models we use to run this studio.",
    deliverables: [
      "AI strategy and opportunity mapping",
      "Custom chat and voice agents",
      "Workflow automation and internal tooling",
      "LLM feature integration into existing products",
      "Evaluation, guardrails, and monitoring",
    ],
    icon: "sparkles",
  },
  {
    slug: "web-development",
    name: "Web Development",
    short: "Web",
    summary: "Fast, modern websites and web apps built for conversion and scale.",
    description:
      "From marketing sites to full web applications, we build on modern stacks (Next.js, TypeScript, edge infrastructure) so pages load instantly, rank well, and hold up as you grow.",
    deliverables: [
      "Marketing and brand websites",
      "Web applications and customer portals",
      "E-commerce builds and storefront migrations",
      "Performance, accessibility, and Core Web Vitals tuning",
      "Ongoing maintenance and iteration",
    ],
    icon: "code",
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    short: "Mobile",
    summary: "Native and cross-platform apps for iOS and Android.",
    description:
      "We design, build, and ship mobile apps end to end — from first prototype through App Store and Google Play release — using cross-platform frameworks where they fit and native where performance demands it.",
    deliverables: [
      "iOS and Android app design and development",
      "Cross-platform builds (React Native / native modules)",
      "App Store and Google Play submission and launch",
      "Push notifications, payments, and offline support",
      "Post-launch monitoring and iteration",
    ],
    icon: "smartphone",
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    short: "Transformation",
    summary: "Modernizing how a business runs — systems, data, and workflows.",
    description:
      "For teams still running on spreadsheets, disconnected tools, and manual handoffs, we design the modernization path: consolidating systems, integrating data, and automating the workflows that are quietly costing the most time.",
    deliverables: [
      "Digital maturity assessment",
      "Systems and data integration",
      "Legacy tool migration and consolidation",
      "Process automation roadmap",
      "Change management and team enablement",
    ],
    icon: "workflow",
  },
  {
    slug: "consulting",
    name: "Consulting",
    short: "Consulting",
    summary: "Fractional strategy and advisory for teams that need senior judgment on demand.",
    description:
      "Sometimes the constraint isn't execution, it's direction. We embed as fractional strategists — in marketing, product, or AI adoption — bringing senior judgment without a full-time hire.",
    deliverables: [
      "Fractional CMO / digital strategy advisory",
      "AI adoption roadmaps for leadership teams",
      "Go-to-market and positioning workshops",
      "Vendor and tooling audits",
      "Ongoing advisory retainers",
    ],
    icon: "compass",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
