"use client";

import { motion } from "framer-motion";
import { Copy, Mail, Check } from "lucide-react";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { TiltCard } from "@/components/tilt-card";

const EMAIL = "sebastianordonezgonzalez@gmail.com";

const socials = [
  {
    href: `mailto:${EMAIL}`,
    icon: <Mail size={16} />,
    label: "Email",
    cursor: "Enviar",
    accent: "var(--color-accent)",
  },
  {
    href: "https://github.com/REN-ORDO",
    icon: <GithubIcon />,
    label: "GitHub · REN-ORDO",
    cursor: "Ver",
    accent: "var(--color-accent-2)",
  },
  {
    href: "https://www.linkedin.com/in/sebastian-ordo%C3%B1ez-dev/",
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    cursor: "Conectar",
    accent: "var(--color-accent-warm)",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <section
      id="contacto"
      aria-label="Contacto"
      className="relative px-6 py-32 md:px-12 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[--color-fg-subtle]"
        >
          <span className="text-[--color-accent]">05</span>
          <span className="h-px w-12 bg-[--color-border]" />
          <span>Contacto</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-[--color-border] bg-[--color-surface]/40 p-6 backdrop-blur-md sm:p-10 md:p-16"
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[--color-accent]/15 blur-[120px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[--color-accent-2]/10 blur-[120px]"
          />

          <div className="relative grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                ¿Tienes una <span className="font-display italic text-gradient">idea</span>{" "}
                que merece construirse bien?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[--color-fg-muted]">
                Estoy abierto a colaboraciones en productos con IA, frontends
                ambiciosos o iniciativas de quality engineering. Cuéntame qué
                estás construyendo.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  data-cursor="Enviar"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[--color-fg] px-6 py-3 text-sm font-medium text-[--color-bg] transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Mail size={16} className="relative z-10" />
                  <span className="relative z-10">Enviar email</span>
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-r from-[--color-accent] to-[--color-accent-2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  data-cursor="Copiar"
                  className="group inline-flex max-w-full items-center gap-2 rounded-full border border-[--color-border] bg-[--color-surface]/60 px-5 py-3 text-sm font-mono transition-colors hover:border-[--color-border-strong] hover:bg-[--color-surface]"
                  aria-label="Copiar email al portapapeles"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="shrink-0 text-[--color-accent]" />
                      <span className="text-[--color-accent]">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="shrink-0" />
                      <span className="hidden sm:inline truncate">{EMAIL}</span>
                      <span className="sm:hidden">Copiar correo</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-[--color-fg-subtle]">
                También en
              </p>
              <ul className="flex flex-col gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <TiltCard
                      accent={s.accent}
                      lift={3}
                      intensity="low"
                      className="rounded-2xl border border-[--color-border] bg-[--color-bg-elev]/40 transition-colors duration-300 hover:border-[--color-border-strong]"
                    >
                      <a
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        data-cursor={s.cursor}
                        className="group flex items-center justify-between px-5 py-4"
                      >
                        <span className="flex items-center gap-3 text-sm">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[--color-border] bg-[--color-surface] text-[--color-fg-muted] transition-colors">
                            <span
                              className="flex items-center justify-center transition-colors duration-300 group-hover:text-[var(--accent)]"
                              style={{ "--accent": s.accent } as React.CSSProperties}
                            >
                              {s.icon}
                            </span>
                          </span>
                          {s.label}
                        </span>
                        <span
                          className="transition-all duration-300 group-hover:translate-x-1"
                          style={{ color: s.accent }}
                        >
                          ↗
                        </span>
                      </a>
                    </TiltCard>
                  </li>
                ))}
              </ul>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="mt-4 rounded-2xl border border-[--color-border] bg-[--color-bg-elev]/40 px-5 py-4 transition-colors duration-300 hover:border-[--color-border-strong] hover:bg-[--color-bg-elev]"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-[--color-accent] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[--color-accent]" />
                  </span>
                  <span className="font-mono uppercase tracking-[0.15em] text-[--color-fg-muted]">
                    Tiempo de respuesta · 24h
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
