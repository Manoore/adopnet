export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: "why-marketing-ai-and-web-should-be-one-team",
    title: "Why marketing, AI, and web development should be one team",
    description:
      "Splitting your growth stack across three vendors creates translation loss at every handoff. Here's what changes when one team owns all of it.",
    date: "2026-06-02",
    readTime: "6 min read",
  },
  {
    slug: "answer-engine-optimization-2026-guide",
    title: "Answer-engine optimization: the 2026 guide for US businesses",
    description:
      "Search is no longer just Google's ten blue links. Here's how to structure content so AI answer engines cite your business.",
    date: "2026-07-10",
    readTime: "8 min read",
  },
  {
    slug: "shipping-ai-features-that-dont-break",
    title: "Shipping AI features that don't break in production",
    description:
      "Demos are easy. Reliable AI features that survive real users, edge cases, and cost constraints are a different discipline.",
    date: "2026-07-28",
    readTime: "7 min read",
  },
  {
    slug: "digital-transformation-without-the-buzzwords",
    title: "Digital transformation, without the buzzwords",
    description:
      "Most transformation projects fail because they start with a platform decision instead of a workflow audit. A practical starting point.",
    date: "2026-08-11",
    readTime: "5 min read",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
