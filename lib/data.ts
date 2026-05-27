export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  type: "empresa" | "hackathon" | "personal" | "open-source";
  role: string;
  stack: string[];
  status: "produccion" | "beta" | "en-desarrollo" | "archivado";
  year: string;
  link?: string;
  repo?: string;
  highlights: string[];
  accent: "mint" | "violet" | "warm" | "rose";
};

export const projects: Project[] = [
  {
    id: "derbiplay",
    title: "DerbiPlay",
    tagline: "El futuro del fútbol amateur",
    description:
      "Plataforma del fútbol amateur: torneos abiertos, gestión de equipos, estadísticas computadas, pagos vía Nequi, cromos generativos con IA (DerbiCard) y bot de WhatsApp que sincroniza la comunidad. Arquitectura híbrida Supabase + Firebase con bridges seguros entre ambos.",
    type: "empresa",
    role: "Full Stack Developer",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Firebase",
      "Tailwind",
      "Framer Motion",
      "Playwright",
      "WhatsApp Cloud API",
      "OpenAI",
    ],
    status: "produccion",
    year: "2026",
    link: "https://derbiplay.com",
    highlights: [
      "Pico de usuarios durante el debut del Vintage Cup",
      "~1015 tests automatizados pasando (Vitest + Playwright + Firebase Emulator)",
      "Bot de WhatsApp + cromos generativos con IA integrados al flujo",
      "Server Actions + RLS + RPCs transaccionales para flujos críticos",
    ],
    accent: "mint",
  },
  {
    id: "dailyhumano",
    title: "DailyHumano",
    tagline: "PWA con IA conversacional y voz",
    description:
      "Producto digital construido como PWA. Interfaz con IA (Gemini), transcripción por voz (Whisper), jobs en background con BullMQ + Redis y persistencia en Supabase. UI con Radix + shadcn helpers, charts con Recharts y drag-and-drop con dnd-kit.",
    type: "empresa",
    role: "Full Stack Developer",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Supabase",
      "BullMQ",
      "Gemini",
      "Whisper",
      "PWA (serwist)",
    ],
    status: "produccion",
    year: "2026",
    link: "https://dailyhumano.com",
    highlights: [
      "PWA con service worker via serwist",
      "IA conversacional + voz (Gemini + OpenAI Whisper)",
      "Job queue con BullMQ + ioredis para tareas pesadas",
      "Abstracción de providers (AI_PROVIDER, VOICE_PROVIDER) para swap sin tocar UI",
    ],
    accent: "violet",
  },
  {
    id: "avanzo",
    title: "Avanzo",
    tagline: "QA manual sobre 4 entornos",
    description:
      "QA sobre 4 entornos (DEV · QA · REG · PROD) con filosofía manual-first. Tracker HTML custom con persistencia localStorage, smoke script Python stdlib para health-check pre-test, y reportes ejecutivos go/no-go con evidencia para stakeholders.",
    type: "empresa",
    role: "QA Engineer",
    stack: [
      "Browser DevTools",
      "Postman",
      "Python stdlib",
      "HTML Custom Tracker",
      "Git",
      "Markdown + HTML Reports",
    ],
    status: "produccion",
    year: "2026",
    highlights: [
      "Tracker HTML propio con persistencia local + export JSON",
      "Smoke script Python sin dependencias para validar env pre-test",
      "Reportes go/no-go accionables con evidencia para stakeholders",
    ],
    accent: "warm",
  },
  {
    id: "cava",
    title: "Cava",
    tagline: "Cobertura de calidad en producto live",
    description:
      "QA manual sobre producto en producción. Recorridos happy path + edge cases, documentación inline, tickets accionables con reproducción y severidad. Tooling propio portable que sobrevive cualquier handoff.",
    type: "empresa",
    role: "QA Engineer",
    stack: [
      "Browser DevTools",
      "Postman",
      "HTML Custom Tracker",
      "Git",
      "Markdown Reports",
    ],
    status: "produccion",
    year: "2026",
    highlights: [
      "Cobertura happy path + edge cases por módulo",
      "Bugs reportados con reproducción + severidad clara",
      "Filosofía manual-first: comprensión del flujo cliente sobre automation",
    ],
    accent: "rose",
  },
  {
    id: "vialink",
    title: "ViaLink",
    tagline: "Rutas de transporte público en tiempo real",
    description:
      "Aplicación para seguir buses de transporte público en tiempo real. Mapas interactivos, WebSocket para posición en vivo, estado optimizado con Zustand y micro-animaciones para feedback. Hackathon Barranqui IA 2026.",
    type: "hackathon",
    role: "Frontend Lead",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "Mapbox GL",
      "Zustand",
      "TanStack Query",
      "WebSocket",
      "Framer Motion",
    ],
    status: "archivado",
    year: "2025",
    highlights: [
      "Frontend Lead — arquitectura del cliente completo",
      "Posición de buses en tiempo real vía WebSocket",
      "Participación en Hackathon Barranqui IA 2026 con feedback positivo del jurado",
    ],
    accent: "rose",
  },
  {
    id: "omnidashboard",
    title: "OmniDashboard",
    tagline: "Tu centro de control personal",
    description:
      "Dashboard centralizado para las fuentes que reviso a diario. Scraping con Playwright (incluyendo Moodle AJAX), persistencia en Supabase con RLS, y resúmenes generados con Claude API. Sincronización manual vía botón Refresh.",
    type: "personal",
    role: "Creador",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Playwright",
      "Anthropic Claude API",
      "Vercel",
    ],
    status: "en-desarrollo",
    year: "2026",
    highlights: [
      "Scraping multi-fuente con Playwright + fetch directo",
      "Resúmenes generados con Claude API",
      "Postgres con RLS para multi-tenant seguro",
    ],
    accent: "mint",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "AI Engineering",
    items: [
      "LLMs (Claude)",
      "RAG",
      "Agentes con Anthropic SDK",
      "Prompt engineering",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Next.js & React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Design systems",
    ],
  },
  {
    category: "Full Stack",
    items: [
      "Node.js",
      "Supabase",
      "Firebase",
      "REST APIs",
      "Integraciones (WhatsApp)",
    ],
  },
  {
    category: "QA Engineering",
    items: [
      "Playwright",
      "Vitest",
      "CI/CD con GitHub Actions",
      "Test data management",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack & QA Engineer",
    company: "Cooweb.co",
    period: "Dic 2025 — presente",
    description:
      "Trabajo en múltiples productos de la empresa con roles que se adaptan al equipo de cada uno: Full Stack en DerbiPlay y DailyHumano, QA Engineer en Avanzo.",
    achievements: [
      "DerbiPlay (Full Stack): plataforma de fútbol amateur en producción",
      "DailyHumano (Full Stack): PWA con IA conversacional y voz",
      "Avanzo (QA): QA manual sobre 4 entornos con tooling propio",
      "Cava (QA): cobertura de calidad sobre producto live",
    ],
  },
];

export type Stat = {
  number: string;
  label: string;
};

export const stats: Stat[] = [
  { number: "6 meses", label: "Experiencia profesional" },
  { number: "4", label: "Proyectos en producción" },
  { number: "3", label: "Disciplinas: AI · Frontend · QA" },
  { number: "0", label: "Bugs críticos en producción" },
];

export type NavItem = {
  href: string;
  label: string;
  index: string;
};

export const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio", index: "01" },
  { href: "#sobre-mi", label: "Sobre mí", index: "02" },
  { href: "#proyectos", label: "Proyectos", index: "03" },
  { href: "#experiencia", label: "Experiencia", index: "04" },
  { href: "#contacto", label: "Contacto", index: "05" },
];
