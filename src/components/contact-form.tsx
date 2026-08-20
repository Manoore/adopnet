"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { packages } from "@/lib/packages";

const inputClasses =
  "w-full rounded-lg border border-line bg-ink-soft px-4 py-3 text-sm text-paper placeholder:text-paper-dim/60 outline-none transition-colors focus:border-accent-soft";

export function ContactForm() {
  const searchParams = useSearchParams();
  const packageSlug = searchParams.get("package");
  const matchedPackage = packages.find((pkg) => pkg.slug === packageSlug);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState(
    matchedPackage ? `I'm interested in the ${matchedPackage.name} package.` : "",
  );
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = matchedPackage
      ? `${matchedPackage.name} package inquiry`
      : "Project inquiry from adopnet.com";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company: company || undefined,
        message,
        packageSlug: matchedPackage?.slug,
      }),
    }).catch(() => {
      // Best-effort persistence — the mailto fallback below is the source of truth either way.
    });

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {matchedPackage && (
        <div className="rounded-lg border border-accent-soft/40 bg-accent-soft/10 px-4 py-3 text-sm text-paper">
          Inquiring about the <span className="font-medium">{matchedPackage.name}</span> package
          ({matchedPackage.price} {matchedPackage.priceNote})
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs text-paper-dim">
            Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs text-paper-dim">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-xs text-paper-dim">
          Company (optional)
        </label>
        <input
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClasses}
          placeholder="Company, Inc."
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs text-paper-dim">
          What are you trying to build?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClasses}
          placeholder="Tell us about your project, timeline, and budget range."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send message <Send size={16} />
      </Button>

      {sent && (
        <p className="text-sm text-paper-dim">
          Your email app should have opened with this filled in — if not, reach us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-paper underline">
            {siteConfig.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
