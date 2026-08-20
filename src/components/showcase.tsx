import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/fade-in";
import { PhoneMockup } from "@/components/mockups/phone-mockup";
import { BrowserMockup } from "@/components/mockups/browser-mockup";
import { ProcessMockup } from "@/components/mockups/process-mockup";

const tiles = [
  {
    eyebrow: "Mobile Apps",
    title: "iOS and Android, built native to the platform.",
    body: "From first prototype to App Store and Google Play — apps that feel fast because they're built for the device, not just the browser.",
  },
  {
    eyebrow: "Websites & SaaS Platforms",
    title: "Marketing sites and full product dashboards.",
    body: "The same team building your homepage builds the SaaS platform behind it — one codebase, one design system, no handoff gap.",
  },
  {
    eyebrow: "Consulting & Transformation",
    title: "A roadmap before a single line of code.",
    body: "Audit, strategy, build, scale — digital transformation engagements that start with your workflow, not a platform sales pitch.",
  },
];

export function Showcase() {
  return (
    <section className="border-t border-line bg-ink-soft">
      <Container className="py-24">
        <FadeIn>
          <span className="text-xs font-medium uppercase tracking-widest text-accent-soft">
            What We Build
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            Apps, platforms, and the strategy behind them.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <FadeIn className="flex flex-col items-center text-center">
            <PhoneMockup />
            <span className="mt-8 text-xs font-medium uppercase tracking-widest text-accent-soft">
              {tiles[0].eyebrow}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold text-paper">{tiles[0].title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper-dim">{tiles[0].body}</p>
          </FadeIn>

          <FadeIn delay={0.08} className="flex flex-col items-center text-center">
            <BrowserMockup />
            <span className="mt-8 text-xs font-medium uppercase tracking-widest text-accent-soft">
              {tiles[1].eyebrow}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold text-paper">{tiles[1].title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper-dim">{tiles[1].body}</p>
          </FadeIn>

          <FadeIn delay={0.16} className="flex flex-col items-center text-center">
            <ProcessMockup />
            <span className="mt-8 text-xs font-medium uppercase tracking-widest text-accent-soft">
              {tiles[2].eyebrow}
            </span>
            <h3 className="mt-2 font-display text-lg font-semibold text-paper">{tiles[2].title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper-dim">{tiles[2].body}</p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
