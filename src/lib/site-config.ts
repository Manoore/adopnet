export const siteConfig = {
  name: "Adopnet",
  tagline: "Digital growth, engineered.",
  description:
    "Adopnet is a US-based digital studio building marketing systems, AI products, websites, and mobile apps for companies that want to move faster than their category.",
  url: "https://adopnet.com",
  email: "manoore@offika.com",
  location: "United States",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
  ],
  footerLinks: {
    company: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
    ],
  },
} as const;
