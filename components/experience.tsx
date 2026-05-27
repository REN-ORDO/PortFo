"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences, skills } from "@/lib/data";
import { TiltCard } from "@/components/tilt-card";

const skillAccents = [
  "var(--color-accent)",
  "var(--color-accent-2)",
  "var(--color-accent-warm)",
  "var(--color-accent-rose)",
];

export function Experience() {
  return (
    <section
      id="experiencia"
      aria-label="Experiencia"
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
          <span className="text-[--color-accent]">04</span>
          <span className="h-px w-12 bg-[--color-border]" />
          <span>Experiencia & Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          Trayectoria y <span className="font-display italic">stack</span> técnico.
        </motion.h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[--color-fg-subtle]">
              Recorrido
            </h3>
            <ol className="mt-8 relative border-l border-[--color-border] pl-8">
              {experiences.map((exp, i) => (
                <motion.li
                  key={exp.role + i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative mb-12 last:mb-0"
                >
                  <span className="absolute -left-[37px] top-1.5 flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[--color-accent]/40" />
                    <span className="relative h-3 w-3 rounded-full border-2 border-[--color-bg] bg-[--color-accent]" />
                  </span>

                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[--color-accent]">
                    {exp.period}
                  </span>
                  <h4 className="mt-2 text-xl font-semibold tracking-tight">
                    {exp.role}
                  </h4>
                  <div className="mt-1 flex items-center gap-2.5">
                    {exp.companyLogo && (
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 ring-1 ring-[--color-border]">
                        <Image
                          src={exp.companyLogo}
                          alt={`${exp.company} logo`}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    )}
                    {exp.companyLink ? (
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-display italic text-[--color-fg-muted] underline-offset-4 transition-colors hover:text-[--color-fg] hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <p className="text-sm font-display italic text-[--color-fg-muted]">
                        {exp.company}
                      </p>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[--color-fg-muted]">
                    {exp.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {exp.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-2 text-sm text-[--color-fg-muted]"
                      >
                        <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-[--color-fg-subtle]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[--color-fg-subtle]">
              Stack & habilidades
            </h3>
            <div className="mt-8 flex flex-col gap-3">
              {skills.map((skill, i) => {
                const accent = skillAccents[i % skillAccents.length];
                return (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <TiltCard
                      accent={accent}
                      lift={4}
                      intensity="low"
                      className="rounded-2xl border border-[--color-border] bg-[--color-surface]/30 p-6 backdrop-blur-sm transition-[border-color] duration-500 hover:border-[--color-border-strong]"
                    >
                      <div className="flex items-baseline justify-between">
                        <h4 className="text-base font-semibold tracking-tight">
                          {skill.category}
                        </h4>
                        <span
                          className="font-mono text-[10px]"
                          style={{ color: accent }}
                        >
                          0{i + 1}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {skill.items.map((item) => (
                          <motion.span
                            key={item}
                            whileHover={{ y: -3, scale: 1.06 }}
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 22,
                            }}
                            className="inline-block cursor-default rounded-full border border-[--color-border] bg-[--color-bg-elev]/50 px-3 py-1 text-xs text-[--color-fg-muted] transition-colors duration-300 hover:text-[--color-fg]"
                            style={
                              {
                                "--hover-accent": accent,
                              } as React.CSSProperties
                            }
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = `${accent}80`;
                              e.currentTarget.style.boxShadow = `0 8px 20px -10px ${accent}66`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "";
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
