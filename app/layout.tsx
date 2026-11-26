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
  title: "Sebastian Ordoñez — Full Stack Developer · AI",
  description:
    "Portfolio de Sebastian Ordoñez. Full Stack Developer enfocado en construir productos de punta a punta, integrar IA en producción y diseñar soluciones mantenibles.",
  keywords: [
    "Full Stack",
    "AI",
    "Frontend",
    "Cloud & DevOps",
    "Portfolio",
    "Next.js",
    "React",
    "UX",
  ],
  authors: [{ name: "Sebastian Ordoñez" }],
  openGraph: {
    title: "Sebastian Ordoñez — Full Stack Developer · AI",
    description:
      "Full Stack Developer enfocado en construir productos de punta a punta, integrar IA en producción y diseñar soluciones mantenibles.",
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
