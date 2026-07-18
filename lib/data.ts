export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  type: "empresa" | "hackathon" | "personal" | "open-source";
  role: string;
  stack: string[];
  status: "produccion" | "beta" | "en-desarrollo" | "archivado" | "rol-concluido";
  year: string;
  link?: string;
  repo?: string;
  icon?: string;
  iconSize?: "sm" | "md" | "lg";
  wordmark?: { primary: string; secondary?: string };
  highlights: string[];
  accent: "mint" | "violet" | "warm" | "rose";
};

export const projects: Project[] = [
  {
    id: "derbiplay",
    title: "DerbiPlay",
    icon: "/icon-derbiplay.png",
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
    id: "vecinos",
    title: "VecinOS",
    icon: "/icon-vecinos.png",
    tagline: "Plataforma de gestión residencial",
    description:
      "Plataforma de gestión residencial (SaaS multi-tenant) desarrollada dentro de Cooweb.co. Módulos de portería con QR y escaneo de paquetes vía IA, gestión de incidencias/PQRS, comunicación con la comunidad y asistente de IA (Gemini) para normativa y clasificación automática de casos.",
    type: "empresa",
    role: "Tech Lead",
    stack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Firebase",
      "Redis",
      "Gemini",
      "Docker",
      "Google Cloud Run",
    ],
    status: "produccion",
    year: "2026",
    link: "https://vecinos.club",
    highlights: [
      "Rol de Tech Lead liderando un equipo de desarrolladores junto a un compañero par",
      "Módulos de portería (QR + escaneo de paquetes con IA)",
      "Asistente de IA (Gemini) para normativa y clasificación automática de casos",
      "CI/CD con Google Cloud Build hacia Cloud Run, contenedores Docker",
      "PWA con soporte offline",
    ],
    accent: "rose",
  },
  {
    id: "dailyhumano",
    title: "DailyHumano",
    icon: "/icon-dailyhumano.png",
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
    title: "Avanzo Créditos",
    icon: "/icon-avanzo.png",
    wordmark: { primary: "Avanzo", secondary: "Créditos" },
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
    status: "rol-concluido",
    year: "2026",
    link: "https://avanzo.co/",
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
    status: "rol-concluido",
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
    icon: "/icon-vialink.svg",
    iconSize: "sm",
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
    year: "2026",
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
      "LLMs (Claude, Gemini)",
      "RAG",
      "Agentes con Anthropic SDK",
      "Prompt engineering",
      "Gestión de contexto y bases de conocimiento para multi-agentes",
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
  {
    category: "Mobile",
    items: ["React Native (en práctica)"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "Google Cloud Run",
      "Cloud Build (CI/CD)",
      "Artifact Registry",
    ],
  },
  {
    category: "Liderazgo",
    items: [
      "Tech Lead / gestión de producto",
      "Coordinación de equipos de desarrollo",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  companyLogo?: string;
  companyLink?: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    role: "Tech Lead · Proyecto VecinOS",
    company: "Cooweb.co",
    companyLogo: "/logo-cooweb.png",
    companyLink: "https://cooweb.co",
    period: "Jun 2026 — presente",
    description:
      "Lidero, junto a un compañero par, a un equipo de desarrolladores en la construcción de VecinOS, plataforma de gestión residencial.",
    achievements: [
      "Dirección técnica de un equipo de desarrolladores",
      "Arquitectura full stack: Next.js 14, Firebase, Redis",
      "IA con Gemini para normativa y auto-asignación de incidencias",
      "Infraestructura en Google Cloud: Docker, Cloud Run, Cloud Build",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Cooweb.co",
    companyLogo: "/logo-cooweb.png",
    companyLink: "https://cooweb.co",
    period: "Dic 2025 — presente",
    description: "Desarrollo full stack en múltiples productos de la empresa.",
    achievements: [
      "DerbiPlay: plataforma de fútbol amateur en producción",
      "DailyHumano: PWA con IA conversacional y voz",
    ],
  },
  {
    role: "QA Engineer (rol concluido)",
    company: "Cooweb.co",
    companyLogo: "/logo-cooweb.png",
    companyLink: "https://cooweb.co",
    period: "Dic 2025 — Jul 2026",
    description:
      "QA manual sobre productos en producción; cerré el ciclo capacitando a mi reemplazo antes de transicionar a desarrollo.",
    achievements: [
      "Avanzo Créditos: QA manual sobre 4 entornos con tooling propio",
      "Cava: cobertura de calidad sobre producto en producción",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    title: "Hackatón Barranqui-IA 2026 (3ª edición) — Build with AI",
    issuer: "Google Developer Groups Barranquilla",
    date: "Mayo 2026",
    detail: "48 horas — certificado de participación",
  },
  {
    title: "Hackatón Barranqui-IA 2025 (2ª edición) — Build with AI",
    issuer: "Google Developer Groups Barranquilla",
    date: "Mayo 2025",
    detail: "48 horas — certificado de participación",
  },
];

export type Stat = {
  number: string;
  label: string;
};

export const stats: Stat[] = [
  { number: "6+ meses", label: "Experiencia profesional" },
  { number: "3", label: "Proyectos en producción activos" },
  { number: "4", label: "Disciplinas: AI · Frontend · Cloud · Liderazgo" },
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
