import type { SVGProps } from "react";

export function Monogram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="none"
      aria-hidden
      {...props}
    >
      <circle
        cx="16"
        cy="16"
        r="14.5"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M21 11.5 C 21 10 19.5 9 18 9 L 14 9 C 12.5 9 11 10 11 11.5 C 11 13 12.5 14 14 14 L 18 14 C 19.5 14 21 15 21 16.5 C 21 18 19.5 19 18 19 L 14 19 C 12.5 19 11 18 11 16.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
