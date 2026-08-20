import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-paper"
            >
              <Logo />
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-dim">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-paper-dim">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-paper-dim transition-colors hover:text-paper"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-paper-dim">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper-dim transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-paper-dim">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper-dim transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </Container>
    </footer>
  );
}
