import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/services";
import { packages } from "@/lib/packages";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)] opacity-20"
        />
        <Container className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs text-paper-dim">
              <Sparkles size={14} className="text-signal" />
              Built for US companies moving fast on AI
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="mt-8 max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
              Marketing, AI, and product — built by one studio.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
              {siteConfig.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/packages" size="lg">
                See packages <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to us
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Service pillars */}
      <section className="border-t border-line">
        <Container className="py-24">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Six disciplines. One accountable team.
            </h2>
            <p className="mt-4 max-w-2xl text-paper-dim">
              Most companies stitch together a marketing agency, a dev shop, and an AI consultant —
              then spend months translating between them. We do all of it under one roof.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full bg-ink p-8 transition-colors hover:bg-ink-soft"
                >
                  <ServiceIcon icon={service.icon} size={22} className="text-accent-soft" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-dim">{service.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-paper opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* AI capability teaser */}
      <section className="border-t border-line bg-ink-soft">
        <Container className="py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs text-paper-dim">
                <Sparkles size={14} className="text-signal" />
                Coming to this site
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                An AI Project Scoper that quotes your project in real time.
              </h2>
              <p className="mt-4 max-w-lg text-paper-dim">
                We&apos;re wiring an AI agent directly into this site — describe what you need built,
                and it recommends a package and rough scope on the spot. It&apos;s the same kind of
                applied-AI feature we build for clients, running live on our own front door.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  Get a scope from us today
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-line bg-ink p-6">
                <div className="flex items-center gap-2 border-b border-line pb-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-signal" />
                  <span className="text-xs text-paper-dim">AI Project Scoper — preview</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="ml-auto max-w-[80%] rounded-xl rounded-br-sm bg-ink-elevated px-4 py-3 text-sm text-paper">
                    We need an iOS app with an AI concierge and a marketing site to launch it.
                  </div>
                  <div className="max-w-[85%] rounded-xl rounded-bl-sm border border-line px-4 py-3 text-sm text-paper-dim">
                    That maps to the <span className="text-paper">Growth</span> package — mobile
                    build, one custom AI feature, and launch marketing. Estimated timeline: 6–8
                    weeks.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Packages preview */}
      <section className="border-t border-line">
        <Container className="py-24">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  Fixed-scope packages, no discovery-call runaround.
                </h2>
                <p className="mt-4 max-w-xl text-paper-dim">
                  Know what you&apos;re getting and what it costs before you talk to anyone.
                </p>
              </div>
              <Button href="/packages" variant="secondary">
                View all packages <ArrowRight size={16} />
              </Button>
            </div>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {packages
              .filter((pkg) => pkg.selfServe)
              .map((pkg, i) => (
                <FadeIn key={pkg.slug} delay={i * 0.05}>
                  <div
                    className={`h-full rounded-2xl border p-8 ${
                      pkg.highlight ? "border-accent-soft bg-ink-soft" : "border-line"
                    }`}
                  >
                    <h3 className="font-display text-xl font-semibold text-paper">{pkg.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper-dim">{pkg.summary}</p>
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-semibold text-paper">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-paper-dim">{pkg.priceNote}</span>
                    </div>
                    <Button href={`/packages#${pkg.slug}`} variant="secondary" className="mt-6 w-full">
                      Details
                    </Button>
                  </div>
                </FadeIn>
              ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line">
        <Container className="py-24 text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              Tell us what you&apos;re trying to build. We&apos;ll tell you what it takes.
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Start a project <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
