import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adopnet is a US-based digital studio combining marketing, AI, and product development under one accountable team.",
};

const principles = [
  {
    title: "One team, not a chain of vendors",
    body: "Marketing, engineering, and AI work sit under the same roof, so nothing gets lost translating between an agency, a dev shop, and a consultant.",
  },
  {
    title: "We use what we sell",
    body: "The AI features we build for clients get tested on our own studio operations first. If it doesn't hold up for us, it doesn't ship for you.",
  },
  {
    title: "Fixed scope, fixed price",
    body: "Packages are priced before you talk to anyone. Custom work gets a real quote, not a 'let's hop on a call.'",
  },
];

export default function AboutPage() {
  return (
    <>
      <Container className="py-24">
        <FadeIn>
          <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
            A studio built for how companies actually grow now.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-dim">
            Adopnet exists because the old model — a marketing agency here, a dev shop there, an AI
            consultant bolted on top — doesn&apos;t match how modern products actually get built.
            We run marketing, engineering, and applied AI as one practice, for companies across the
            US who need to move at the speed their category demands.
          </p>
        </FadeIn>
      </Container>

      <section className="border-t border-line">
        <Container className="py-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-paper">
              How we work
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {principles.map((principle, i) => (
              <FadeIn key={principle.title} delay={i * 0.05}>
                <h3 className="font-display text-lg font-semibold text-paper">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{principle.body}</p>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-20">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-paper">
              What we cover
            </h2>
            <p className="mt-3 max-w-xl text-paper-dim">
              Six disciplines, run by people who&apos;ve shipped each of them in production —
              not generalists spread thin.
            </p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => (
              <span
                key={service.slug}
                className="rounded-full border border-line px-4 py-2 text-sm text-paper-dim"
              >
                {service.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-24 text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-xl text-balance font-display text-3xl font-semibold tracking-tight text-paper">
              Want to see if we&apos;re the right fit?
            </h2>
            <div className="mt-8">
              <Button href="/contact" size="lg">
                Get in touch
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
