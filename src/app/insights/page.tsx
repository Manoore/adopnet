import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on marketing, AI, and digital transformation from the Adopnet team.",
};

export default function InsightsPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Container className="py-24">
      <FadeIn>
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Insights
        </h1>
        <p className="mt-5 max-w-xl text-paper-dim">
          Notes on marketing, applied AI, and digital transformation — written from work we&apos;re
          actually doing.
        </p>
      </FadeIn>

      <div className="mt-16 divide-y divide-line border-t border-line">
        {sorted.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.04}>
            <Link href={`/insights/${post.slug}`} className="group flex flex-col gap-2 py-8">
              <div className="flex items-center gap-3 text-xs text-paper-dim">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-display text-xl font-semibold text-paper transition-colors group-hover:text-accent-soft sm:text-2xl">
                {post.title}
              </h2>
              <p className="max-w-2xl text-sm text-paper-dim">{post.description}</p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-paper opacity-0 transition-opacity group-hover:opacity-100">
                Read <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}
