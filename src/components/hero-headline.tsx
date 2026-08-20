"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroHeadline({ text, className }: { text: string; className?: string }) {
  const scope = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.from(".hero-word", {
        yPercent: 115,
        rotateZ: 3,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.06,
        delay: 0.2,
      });
    },
    { scope },
  );

  const words = text.split(" ");

  return (
    <h1 ref={scope} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="mr-[0.28em] inline-block overflow-hidden pb-[0.2em] align-top -mb-[0.2em]"
        >
          <span className="hero-word inline-block">{word}</span>
        </span>
      ))}
    </h1>
  );
}
