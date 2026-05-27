"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const roles = [
  { label: "AI Engineer", color: "var(--color-accent)" },
  { label: "Frontend Specialist", color: "var(--color-accent-2)" },
  { label: "QA Engineer", color: "var(--color-accent-warm)" },
  { label: "Full-Stack Developer", color: "var(--color-accent-rose)" },
];

function RoleRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  const current = roles[index];
  return (
    <span className="relative inline-block min-w-[12ch] align-baseline">
      <motion.span
        key={current.label}
        initial={{ y: 18, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        exit={{ y: -18, opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block font-display italic"
        style={{ color: current.color }}
      >
        {current.label}
      </motion.span>
    </span>
  );
}

function MagneticHeadline({ children }: { children: string }) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(sy, [-100, 100], [4, -4]);
  const rotateY = useTransform(sx, [-100, 100], [-4, 4]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handler = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set(e.clientX - cx);
      y.set(e.clientY - cy);
    };
    const reset = () => {
      x.set(0);
      y.set(0);
    };
    window.addEventListener("mousemove", handler);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseleave", reset);
    };
  }, [x, y]);

  return (
    <motion.h1
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-[9rem]"
    >
      {children}
    </motion.h1>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-32 pb-24 md:px-12"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 border-grid opacity-[0.04]"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[--color-accent]/10 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-surface]/50 px-3 py-1.5 text-xs font-mono backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-[--color-accent] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[--color-accent]" />
          </span>
          <span className="text-[--color-fg-muted]">
            Disponible para nuevos proyectos · 2026
          </span>
        </motion.div>

        <MagneticHeadline>
          Construyo
        </MagneticHeadline>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-2 text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-[9rem]"
        >
          experiencias{" "}
          <RoleRotator />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-[--color-fg-muted] sm:text-xl"
        >
          Llevo <span className="text-[--color-fg]">6 meses</span> construyendo
          productos reales en <span className="text-[--color-fg]">Cooweb.co</span>.
          Me muevo entre Full Stack, IA y QA según lo que pida el equipo. Me
          obsesiona que cada pixel y cada interacción tengan intención — si el
          usuario duda, fallé.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <a
            href="#proyectos"
            data-cursor="Ver"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[--color-fg] px-6 py-3 text-sm font-medium text-[--color-bg] transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">Ver proyectos</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
            <span
              aria-hidden
              className="absolute inset-0 -z-0 bg-gradient-to-r from-[--color-accent] to-[--color-accent-2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </a>
          <a
            href="#contacto"
            data-cursor="Hola"
            className="group inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-surface]/40 px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-[--color-border-strong] hover:bg-[--color-surface]"
          >
            Contactar
            <span className="text-[--color-fg-subtle] transition-colors group-hover:text-[--color-accent]">
              ↗
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <a
            href="#sobre-mi"
            aria-label="Desplázate para ver más"
            className="group flex flex-col items-center gap-2 text-[--color-fg-subtle] transition-colors hover:text-[--color-accent]"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-[--color-border]">
              <motion.span
                animate={{ y: [4, 18, 4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current"
              />
            </span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
