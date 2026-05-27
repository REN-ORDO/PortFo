"use client";

import { motion } from "framer-motion";
import { experiences, skills } from "@/lib/data";

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
                  <p className="text-sm font-display italic text-[--color-fg-muted]">
                    {exp.company}
                  </p>
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
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-2xl border border-[--color-border] bg-[--color-surface]/30 p-6 backdrop-blur-sm transition-colors hover:border-[--color-border-strong] hover:bg-[--color-surface]"
                >
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-base font-semibold tracking-tight">
                      {skill.category}
                    </h4>
                    <span className="font-mono text-[10px] text-[--color-fg-subtle]">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[--color-border] bg-[--color-bg-elev]/50 px-3 py-1 text-xs text-[--color-fg-muted] transition-all duration-300 hover:border-[--color-accent]/50 hover:text-[--color-fg]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
