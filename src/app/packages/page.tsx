import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Stagger, StaggerItem } from "@/components/stagger";
import { HoverLift } from "@/components/hover-lift";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Fixed-scope packages for web development, mobile apps, AI features, and digital transformation — priced up front.",
};

export default function PackagesPage() {
  return (
    <Container className="py-24">
      <FadeIn>
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          Packages, priced up front.
        </h1>
        <p className="mt-5 max-w-xl text-paper-dim">
          Every package below is fixed scope. Need something in between, or an ongoing
          partnership? Enterprise is scoped to you.
        </p>
      </FadeIn>

      <Stagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">
        {packages.map((pkg) => (
          <StaggerItem key={pkg.slug}>
            <HoverLift
              id={pkg.slug}
              glow
              className={`flex h-full scroll-mt-28 flex-col rounded-2xl border p-8 ${
                pkg.highlight ? "border-accent-soft bg-ink-soft" : "border-line"
              }`}
            >
              {pkg.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent-soft/15 px-3 py-1 text-xs font-medium text-accent-soft">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-xl font-semibold text-paper">{pkg.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{pkg.summary}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-paper">{pkg.price}</span>
                <span className="text-sm text-paper-dim">{pkg.priceNote}</span>
              </div>

              <p className="mt-4 text-xs text-paper-dim">
                <span className="text-paper">Best for:</span> {pkg.bestFor}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-paper-dim">
                    <Check size={15} className="mt-0.5 shrink-0 text-signal" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={`/contact?package=${pkg.slug}`}
                variant={pkg.highlight ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {pkg.selfServe ? `Get ${pkg.name}` : "Request a quote"}
              </Button>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn>
        <p className="mt-10 text-center text-xs text-paper-dim">
          Self-serve checkout is coming online shortly — for now, package requests route straight
          to our team so we can confirm scope before you pay.
        </p>
      </FadeIn>
    </Container>
  );
}
