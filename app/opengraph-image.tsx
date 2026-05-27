import { ImageResponse } from "next/og";

export const alt = "Sebastian Ordoñez · AI Engineer & Frontend Craftsman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 245, 208, 0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 20%, rgba(181, 148, 255, 0.12), transparent 60%), #07070a",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "#f4f4f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg viewBox="0 0 32 32" width="56" height="56">
            <circle
              cx="16"
              cy="16"
              r="13"
              fill="none"
              stroke="#7cf5d0"
              strokeWidth="1"
              opacity="0.5"
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              fontSize: "16px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            <span style={{ fontWeight: 700 }}>Sebastian</span>
            <span style={{ color: "#a1a1ab", marginTop: "4px" }}>Ordoñez</span>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "100px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Construyo</span>
            <span>
              experiencias{" "}
              <span style={{ color: "#7cf5d0", fontStyle: "italic" }}>
                con intención
              </span>
              .
            </span>
          </div>
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "22px",
              color: "#a1a1ab",
            }}
          >
            <span>AI Engineer</span>
            <span style={{ color: "#6e6e7a" }}>·</span>
            <span>Frontend</span>
            <span style={{ color: "#6e6e7a" }}>·</span>
            <span>QA Engineer</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
