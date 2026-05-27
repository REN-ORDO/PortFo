"use client";

import { motion } from "framer-motion";
import { Brain, Code2, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { stats } from "@/lib/data";

type Pillar = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  icon: ReactNode;
  accent: string;
};

const pillars: Pillar[] = [
  {
    id: "ai",
    label: "01 · AI Engineering",
    title: "IA dentro del producto, no como demo.",
    description:
      "Integro modelos en flujos reales: agentes con Anthropic SDK, voz con Whisper, contenido generativo con Gemini. Lo que importa es que el usuario sienta valor, no que el stack suene bien.",
    bullets: [
      "Agentes con Anthropic Claude",
      "Voz + multimodal (Gemini, Whisper)",
      "Provider abstractions para swap sin tocar UI",
    ],
    icon: <Brain size={20} />,
    accent: "var(--color-accent)",
  },
  {
    id: "frontend",
    label: "02 · Frontend Craft",
    title: "Interfaces que se sienten cuidadas.",
    description:
      "Next.js App Router, React 19 con Server Components y Server Actions. Componentes con Radix + Tailwind, animaciones con Framer Motion y PWA cuando suma. Cada pixel responde a una decisión.",
    bullets: [
      "Next.js 16 + React 19",
      "Tailwind v4 + Radix + shadcn",
      "Framer Motion + GSAP con propósito",
    ],
    icon: <Code2 size={20} />,
    accent: "var(--color-accent-2)",
  },
  {
    id: "qa",
    label: "03 · Quality Engineering",
    title: "Si no se prueba, no existe.",
    description:
      "QA manual sobre 4 entornos con tooling propio: tracker HTML con persistencia local, smoke scripts en Python stdlib, reportes go/no-go accionables. Y automation (Playwright + Vitest) cuando el flujo lo justifica.",
    bullets: [
      "Tracker HTML + smoke scripts propios",
      "Playwright + Vitest cuando aplica",
      "Reportes accionables para stakeholders",
    ],
    icon: <ShieldCheck size={20} />,
    accent: "var(--color-accent-warm)",
  },
];

export function About() {
  return (
    <section
      id="sobre-mi"
      aria-label="Sobre mí"
      className="relative px-6 py-32 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" label="Sobre mí" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          Tres disciplinas, <span className="font-display italic text-[--color-fg-muted]">una</span> obsesión:{" "}
          <span className="text-gradient">la experiencia.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[--color-fg-muted]"
        >
          Mi trabajo vive en la intersección de la inteligencia artificial,
          el diseño de interfaces y la garantía de calidad. No me interesa
          ser experto en uno: me obsesiona orquestar los tres para crear
          productos que se sientan bien usar.
        </motion.p>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[--color-border-strong] hover:bg-[--color-surface]"
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30"
                style={{ background: pillar.accent }}
              />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[--color-border] bg-[--color-bg-elev]">
                <span style={{ color: pillar.accent }}>{pillar.icon}</span>
              </div>

              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[--color-fg-subtle]">
                {pillar.label}
              </p>

              <h3 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight">
                {pillar.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[--color-fg-muted]">
                {pillar.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2">
                {pillar.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-[--color-fg-muted]"
                  >
                    <span
                      aria-hidden
                      className="inline-block h-1 w-3 rounded-full"
                      style={{ background: pillar.accent }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-border] md:grid-cols-4"
        >
          {stats.map((s) => (
            <Stat key={s.label} number={s.number} label={s.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[--color-fg-subtle]"
    >
      <span className="text-[--color-accent]">{index}</span>
      <span className="h-px w-12 bg-[--color-border]" />
      <span>{label}</span>
    </motion.div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[--color-bg] p-8">
      <div className="font-display text-4xl tracking-tight text-[--color-fg] md:text-5xl">
        {number}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.15em] text-[--color-fg-subtle]">
        {label}
      </div>
    </div>
  );
}
