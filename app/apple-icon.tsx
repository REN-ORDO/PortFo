import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#07070a",
          borderRadius: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 32 32" width="140" height="140">
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="none"
            stroke="#7cf5d0"
            strokeWidth="1"
            opacity="0.45"
          />
          <path
            d="M21 11.5 C 21 10 19.5 9 18 9 L 14 9 C 12.5 9 11 10 11 11.5 C 11 13 12.5 14 14 14 L 18 14 C 19.5 14 21 15 21 16.5 C 21 18 19.5 19 18 19 L 14 19 C 12.5 19 11 18 11 16.5"
            stroke="#7cf5d0"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    size
  );
}
