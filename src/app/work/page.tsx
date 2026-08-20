import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from Adopnet client engagements.",
};

export default function WorkPage() {
  return (
    <Container className="py-24">
      <FadeIn>
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Case studies, coming soon.
        </h1>
        <p className="mt-5 max-w-xl text-paper-dim">
          We&apos;re a new studio and our first engagements are underway — case studies will land
          here as projects ship. In the meantime, get in touch and we&apos;ll walk you through
          relevant work directly.
        </p>
        <div className="mt-8">
          <Button href="/contact">Ask us about relevant work</Button>
        </div>
      </FadeIn>
    </Container>
  );
}
