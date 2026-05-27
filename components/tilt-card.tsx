"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  accent?: string;
  intensity?: "low" | "medium" | "high";
  lift?: number;
  glow?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "style">;

export function TiltCard({
  children,
  className,
  accent = "rgba(255, 255, 255, 0.5)",
  intensity = "medium",
  lift = 6,
  glow = true,
  ...rest
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const amp = intensity === "high" ? 8 : intensity === "low" ? 3 : 5;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 220, damping: 22, mass: 0.5 });
  const smy = useSpring(my, { stiffness: 220, damping: 22, mass: 0.5 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [amp, -amp]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-amp, amp]);
  const glowX = useTransform(smx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(smy, [-0.5, 0.5], ["20%", "80%"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: -lift }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative will-change-transform", className)}
      {...rest}
    >
      {glow && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500"
            style={{
              opacity: hovered ? 1 : 0,
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x} ${y}, ${accent}1f, transparent 60%)`
              ),
            }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500"
            style={{
              opacity: hovered ? 1 : 0,
              background: `linear-gradient(135deg, ${accent}44, transparent 50%, ${accent}22)`,
              maskImage:
                "linear-gradient(black, black) content-box, linear-gradient(black, black)",
              maskComposite: "exclude",
              padding: 1,
            }}
          />
        </>
      )}
      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
