"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles, Zap, Target, BrainCircuit, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";
import { Stagger, StaggerItem } from "@/components/stagger";
import { HeroHeadline } from "@/components/hero-headline";
import { Magnetic } from "@/components/magnetic";
import { siteConfig } from "@/lib/site-config";

const trustPoints = [
  {
    icon: Zap,
    title: "Fast delivery",
    body: "Fixed-scope packages ship in weeks, priced before you start.",
  },
  {
    icon: Target,
    title: "Senior-led",
    body: "Every engagement run by specialists who've shipped it before.",
  },
  {
    icon: BrainCircuit,
    title: "Applied AI",
    body: "The AI features we sell are the same ones running this site.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & reliable",
    body: "Modern infrastructure and security practices built in from day one.",
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "45%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[560px] bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_60%)]"
        style={{ y: glowY, opacity: glowOpacity }}
      />
      <Container className="relative pt-24 pb-20 sm:pt-32 sm:pb-28">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs text-paper-dim">
            <Sparkles size={14} className="text-signal" />
            Built for US companies moving fast on AI
          </div>
        </FadeIn>

        <HeroHeadline
          text="Marketing, AI, and product — built by one studio."
          className="mt-8 max-w-3xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl"
        />

        <FadeIn delay={0.5}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
            {siteConfig.description}
          </p>
        </FadeIn>
        <FadeIn delay={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button href="/packages" size="lg">
                See packages <ArrowRight size={16} />
              </Button>
            </Magnetic>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to us
            </Button>
          </div>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-1 divide-y divide-line rounded-2xl border border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <StaggerItem key={point.title}>
              <div className="flex h-full flex-col gap-2 p-6">
                <point.icon size={18} className="text-accent-soft" />
                <h3 className="font-display text-sm font-semibold text-paper">{point.title}</h3>
                <p className="text-xs leading-relaxed text-paper-dim">{point.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
