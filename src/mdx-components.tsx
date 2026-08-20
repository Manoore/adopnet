import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="font-display text-3xl font-semibold tracking-tight text-paper" {...props} />
    ),
    h2: (props) => (
      <h2
        className="mt-10 font-display text-2xl font-semibold tracking-tight text-paper"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-8 font-display text-lg font-semibold text-paper" {...props} />
    ),
    p: (props) => <p className="mt-4 text-sm leading-relaxed text-paper-dim" {...props} />,
    ul: (props) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-paper-dim" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-paper-dim" {...props} />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    a: ({ href, ...props }) =>
      href ? (
        <Link href={href} className="text-paper underline underline-offset-4" {...props} />
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a {...props} />
      ),
    code: (props) => (
      <code
        className="rounded bg-ink-elevated px-1.5 py-0.5 font-mono text-[0.85em] text-paper"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="mt-4 border-l-2 border-accent-soft pl-4 text-sm italic text-paper-dim"
        {...props}
      />
    ),
    ...components,
  };
}
