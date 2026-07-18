"use client";

import type { SVGProps } from "react";

const items = [
  "AI Engineering",
  "Frontend",
  "QA Automation",
  "Design Systems",
  "Accesibilidad",
  "Performance",
  "Animaciones",
  "Testing",
  "LLMs",
  "RAG",
  "TypeScript",
  "Next.js",
  "Tech Lead",
  "Cloud & DevOps",
  "React Native",
];

function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
      <path d="M12 3 L12 21 M3 12 L21 12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Diamond(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Cross(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Asterisk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
      <path
        d="M12 3 L12 21 M3 12 L21 12 M5.6 5.6 L18.4 18.4 M18.4 5.6 L5.6 18.4"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

const icons = [Plus, Diamond, Cross, Asterisk];
const colors = [
  "var(--color-accent)",
  "var(--color-accent-2)",
  "var(--color-accent-warm)",
  "var(--color-accent-rose)",
];

export function Marquee() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-[--color-border] bg-[--color-bg-elev]/30 py-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[--color-bg] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[--color-bg] to-transparent"
      />
      <div className="flex w-max animate-marquee gap-12">
        {[...items, ...items].map((item, i) => {
          const Icon = icons[i % icons.length];
          const color = colors[i % colors.length];
          return (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-12 font-display text-3xl italic text-[--color-fg-muted] md:text-4xl"
            >
              <span>{item}</span>
              <span style={{ color }} className="inline-flex">
                <Icon />
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
