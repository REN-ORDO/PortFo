"use client";

import { motion } from "framer-motion";
import { Monogram } from "@/components/monogram";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[--color-border] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2.5">
            <Monogram className="text-[--color-accent]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold">
              Sebastian Ordoñez
            </span>
          </div>
          <p className="mt-2 text-xs text-[--color-fg-subtle]">
            © {year} · Construido con obsesión por la experiencia.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[--color-fg-subtle]">
          <span>
            Next.js · React · Tailwind · Framer Motion
          </span>
          <motion.a
            whileHover={{ y: -2 }}
            href="#inicio"
            className="rounded-full border border-[--color-border] px-3 py-1.5 font-mono uppercase tracking-[0.15em] text-[--color-fg-muted] transition-colors hover:border-[--color-border-strong] hover:text-[--color-fg]"
          >
            ↑ Volver al inicio
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
