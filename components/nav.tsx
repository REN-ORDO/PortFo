"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Monogram } from "@/components/monogram";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    for (const item of navItems) {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-6xl px-4 transition-all duration-500",
            scrolled && "px-2"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between rounded-full border border-transparent transition-all duration-500",
              scrolled &&
                "border-[--color-border] bg-[--color-bg-elev]/80 px-4 py-2 backdrop-blur-xl"
            )}
          >
            <a
              href="#inicio"
              className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.03]"
              aria-label="Sebastian Ordoñez · Inicio"
            >
              <Monogram className="text-[--color-accent] transition-transform duration-500 group-hover:rotate-[20deg]" />
              <span className="hidden sm:flex flex-col leading-none font-mono text-[11px] tracking-tight">
                <span className="font-semibold uppercase tracking-[0.18em]">
                  Sebastian
                </span>
                <span className="text-[--color-fg-subtle] uppercase tracking-[0.18em]">
                  Ordoñez
                </span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative rounded-full px-3 py-1.5 text-sm transition-colors",
                      isActive
                        ? "text-[--color-fg]"
                        : "text-[--color-fg-muted] hover:text-[--color-fg]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/5"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-[--color-fg-subtle]">
                        {item.index}
                      </span>
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </nav>

            <a
              href="#contacto"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[--color-fg] px-4 py-1.5 text-sm font-medium text-[--color-bg] transition-transform duration-300 hover:scale-[1.03]"
            >
              Hablemos
              <span className="text-base">→</span>
            </a>

            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-[--color-border] bg-[--color-surface]"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[--color-bg]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-2.5">
                <Monogram className="text-[--color-accent]" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  Sebastian Ordoñez
                </span>
              </div>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[--color-border]"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-6 pt-12">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                  className="group flex items-baseline justify-between border-b border-[--color-border] py-6 transition-colors hover:text-[--color-accent]"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[--color-fg-subtle]">
                      {item.index}
                    </span>
                    <span className="text-3xl font-semibold tracking-tight">
                      {item.label}
                    </span>
                  </span>
                  <span className="text-2xl text-[--color-fg-subtle] transition-transform group-hover:translate-x-1 group-hover:text-[--color-accent]">
                    →
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
