"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-paper"
            onClick={() => setOpen(false)}
          >
            <Logo />
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-paper-dim transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/packages" size="sm">
              Get Started
            </Button>
          </div>

          <button
            className="text-paper md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm text-paper-dim transition-colors hover:bg-ink-soft hover:text-paper"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/packages" size="sm" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
