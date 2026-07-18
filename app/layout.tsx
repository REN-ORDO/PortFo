import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sebastian Ordoñez — Full Stack Developer & Tech Lead",
  description:
    "Portfolio de Sebastian Ordoñez. Full Stack Developer, Tech Lead y AI Engineer. Construyo experiencias digitales con foco obsesivo en UX y calidad.",
  keywords: [
    "Full Stack",
    "Tech Lead",
    "AI Engineer",
    "Frontend",
    "Cloud & DevOps",
    "Portfolio",
    "Next.js",
    "React",
    "UX",
  ],
  authors: [{ name: "Sebastian Ordoñez" }],
  openGraph: {
    title: "Sebastian Ordoñez — Full Stack Developer & Tech Lead",
    description:
      "Full Stack Developer, Tech Lead y AI Engineer. Construyo experiencias digitales con foco en UX y calidad.",
    locale: "es_ES",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="grain">{children}</body>
    </html>
  );
}
