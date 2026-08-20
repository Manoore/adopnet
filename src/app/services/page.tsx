import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Stagger, StaggerItem } from "@/components/stagger";
import { HoverLift } from "@/components/hover-lift";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing, AI solutions, web development, mobile apps, digital transformation, and consulting — for US companies moving fast.",
};

export default function ServicesPage() {
  return (
    <Container className="py-24">
      <FadeIn>
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Everything it takes to build and grow, in one place.
        </h1>
        <p className="mt-5 max-w-xl text-paper-dim">
          Pick a single discipline or combine several into one package. Every engagement is run by
          the same accountable team.
        </p>
      </FadeIn>

      <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <HoverLift className="h-full rounded-2xl border border-line transition-colors hover:border-accent-soft">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col p-8"
              >
                <ServiceIcon icon={service.icon} size={24} className="text-accent-soft" />
                <h2 className="mt-5 font-display text-xl font-semibold text-paper">
                  {service.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-dim">
                  {service.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-paper">
                  Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn>
        <div className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-line bg-ink-soft p-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-paper">
              Not sure what you need?
            </h2>
            <p className="mt-2 text-sm text-paper-dim">
              Tell us the problem, not the solution. We&apos;ll map it to the right service.
            </p>
          </div>
          <Button href="/contact">Talk to us</Button>
        </div>
      </FadeIn>
    </Container>
  );
}
