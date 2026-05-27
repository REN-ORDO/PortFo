"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = "todos" | "empresa" | "hackathon" | "personal";

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "empresa", label: "Empresa" },
  { id: "hackathon", label: "Hackathon" },
  { id: "personal", label: "Personales" },
];

const accentMap: Record<Project["accent"], string> = {
  mint: "var(--color-accent)",
  violet: "var(--color-accent-2)",
  warm: "var(--color-accent-warm)",
  rose: "var(--color-accent-rose)",
};

const statusLabel: Record<Project["status"], string> = {
  produccion: "Producción",
  beta: "Beta",
  "en-desarrollo": "En desarrollo",
  archivado: "Archivado",
};

export function Projects() {
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = useMemo(() => {
    if (filter === "todos") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section
      id="proyectos"
      aria-label="Proyectos"
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
          <span className="text-[--color-accent]">03</span>
          <span className="h-px w-12 bg-[--color-border]" />
          <span>Proyectos</span>
        </motion.div>

        <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Cosas que <span className="font-display italic">he construido</span> recientemente.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex max-w-full flex-wrap items-center justify-start gap-1 rounded-2xl border border-[--color-border] bg-[--color-surface]/40 p-1 backdrop-blur-sm sm:flex-nowrap sm:rounded-full"
            role="tablist"
            aria-label="Filtrar proyectos"
          >
            {filters.map((f) => {
              const isActive = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors active:scale-[0.97]",
                    isActive
                      ? "text-[--color-fg]"
                      : "text-[--color-fg-muted] hover:text-[--color-fg]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-active"
                      className="absolute inset-0 rounded-full bg-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{f.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center text-sm text-[--color-fg-subtle]"
        >
          Algunos proyectos corporativos no se muestran por confidencialidad.{" "}
          <a href="#contacto" className="text-[--color-fg] underline-offset-4 hover:underline">
            Contáctame para más detalles
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const accent = accentMap[project.accent];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 220, damping: 22, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 220, damping: 22, mass: 0.5 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-6, 6]);
  const glowX = useTransform(smx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(smy, [-0.5, 0.5], ["20%", "80%"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: -8 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-surface]/30 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-[--color-border-strong] will-change-transform"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(circle at ${x} ${y}, ${accent}22, transparent 60%)`
          ),
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accent}55, transparent 50%, ${accent}22)`,
          maskImage:
            "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          padding: 1,
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-[--color-border] bg-[--color-bg-elev]">
        <ProjectVisual project={project} hovered={hovered} />
      </div>

      <div className="relative flex flex-1 flex-col p-7" style={{ transform: "translateZ(20px)" }}>
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.15em]">
          <span
            className="rounded-full border px-2.5 py-1"
            style={{
              borderColor: `${accent}40`,
              color: accent,
            }}
          >
            {project.type === "empresa"
              ? "Empresa"
              : project.type === "hackathon"
                ? "Hackathon"
                : project.type === "personal"
                  ? "Personal"
                  : "Open Source"}
          </span>
          <span className="rounded-full border border-[--color-border] px-2.5 py-1 text-[--color-fg-muted]">
            {statusLabel[project.status]}
          </span>
          <span className="text-[--color-fg-subtle]">{project.year}</span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="mt-1 text-sm font-display italic text-[--color-fg-muted]">
          {project.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[--color-fg-muted]">
          {project.description}
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.15em] text-[--color-fg-subtle]">
          {project.role}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ y: -3, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="inline-block cursor-default rounded-md border border-[--color-border] bg-[--color-bg-elev]/60 px-2 py-1 font-mono text-[10px] text-[--color-fg-muted] transition-colors duration-300 hover:text-[--color-fg]"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${accent}80`;
                e.currentTarget.style.boxShadow = `0 6px 14px -8px ${accent}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <details className="mt-6 group/details">
          <summary className="flex cursor-pointer items-center justify-between rounded-xl border border-[--color-border] bg-[--color-bg-elev]/40 px-4 py-3 text-xs font-medium text-[--color-fg-muted] transition-colors hover:bg-[--color-bg-elev] hover:text-[--color-fg] [&::-webkit-details-marker]:hidden">
            <span>Resultados clave</span>
            <span className="transition-transform duration-300 group-open/details:rotate-180">
              ↓
            </span>
          </summary>
          <ul className="mt-3 flex flex-col gap-2 px-4 py-2 text-sm text-[--color-fg-muted]">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span
                  className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full"
                  style={{ background: accent }}
                />
                {h}
              </li>
            ))}
          </ul>
        </details>

        <div className="mt-6 flex items-center gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium hover:text-[--color-accent]"
            >
              Ver proyecto
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[--color-fg-muted] hover:text-[--color-fg]"
            >
              <GithubIcon width={14} height={14} />
              Código
            </a>
          )}
          {!project.link && !project.repo && (
            <span className="text-xs text-[--color-fg-subtle]">
              {project.type === "empresa"
                ? "Detalles bajo NDA — disponible a solicitud"
                : project.type === "hackathon"
                  ? "Proyecto archivado"
                  : "Próximamente público"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectVisual({
  project,
  hovered,
}: {
  project: Project;
  hovered: boolean;
}) {
  const accent = accentMap[project.accent];

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${accent}25, transparent 60%), radial-gradient(circle at 70% 70%, ${accent}15, transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 border-grid opacity-20"
      />

      <div className="relative flex h-full items-center justify-center p-6">
        {project.icon ? (
          <motion.div
            animate={
              hovered
                ? { rotate: -4, scale: 1.05, y: -4 }
                : { rotate: 0, scale: 1, y: 0 }
            }
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center gap-5"
            style={{
              filter: hovered
                ? `drop-shadow(0 20px 40px ${accent}55)`
                : "drop-shadow(0 12px 30px rgba(0,0,0,0.4))",
              transition: "filter 0.5s ease",
              maxWidth: "80%",
              transform: "translateZ(40px)",
            }}
          >
            <div
              className={cn(
                "relative flex shrink-0 items-center justify-center",
                project.wordmark
                  ? "h-20 w-20"
                  : project.iconSize === "sm"
                    ? "h-[160px] w-[160px]"
                    : project.iconSize === "md"
                      ? "h-[200px] w-[200px]"
                      : "h-[260px] w-[260px]"
              )}
            >
              <Image
                src={project.icon}
                alt={`${project.title} icon`}
                width={400}
                height={400}
                className="max-h-full max-w-full object-contain"
                unoptimized={project.icon.endsWith(".svg")}
              />
            </div>
            {project.wordmark && (
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-semibold tracking-tight text-[--color-fg]">
                  {project.wordmark.primary}
                </span>
                {project.wordmark.secondary && (
                  <span className="mt-1 text-3xl font-light tracking-tight text-[--color-fg-muted]">
                    {project.wordmark.secondary}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            animate={
              hovered
                ? { rotate: 6, scale: 1.05, y: -4 }
                : { rotate: 0, scale: 1, y: 0 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col gap-2 rounded-2xl border border-[--color-border-strong] bg-[--color-bg]/80 p-4 backdrop-blur-md shadow-2xl"
            style={{ width: "70%", transform: "translateZ(40px)" }}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[--color-fg-subtle]/40" />
              <span className="h-2 w-2 rounded-full bg-[--color-fg-subtle]/40" />
              <span className="h-2 w-2 rounded-full bg-[--color-fg-subtle]/40" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-3/4 rounded-full bg-[--color-border-strong]" />
              <div className="h-2 w-1/2 rounded-full bg-[--color-border]" />
              <div
                className="h-2 w-2/3 rounded-full"
                style={{ background: `${accent}80` }}
              />
              <div className="h-2 w-2/5 rounded-full bg-[--color-border]" />
            </div>
            <div className="mt-1 flex gap-1.5">
              <span
                className="h-5 w-12 rounded-md"
                style={{ background: `${accent}30` }}
              />
              <span className="h-5 w-10 rounded-md bg-[--color-border]" />
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-mono uppercase tracking-[0.15em] text-[--color-fg-subtle]">
        <span>{project.id}</span>
        <span style={{ color: accent }}>● {project.year}</span>
      </div>
    </div>
  );
}
