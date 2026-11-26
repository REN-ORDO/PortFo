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
  iconRounded?: boolean;  wordmark?: { primary: string; secondary?: string };
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
    role: "Desarrollador principal · ~95% del producto",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Firebase",
      "Tailwind",
      "Framer Motion",
      "Gemini",
      "Vitest",
      "Playwright",
      "WhatsApp Cloud API",
    ],
    status: "produccion",
    year: "2026",
    link: "https://derbiplay.com",
    highlights: [
      "4.000+ jugadores, 469 equipos, 35 torneos, ~1.700 partidos y 9.485 goles",
      "Arquitectura híbrida Supabase/Firebase: identidad compartida con custom tokens, migración idempotente de equipos y tiempo real para planilleros",
      "~1.015 tests automatizados, RLS y RPCs transaccionales",
      "Cromos con Gemini, bot de WhatsApp e integración con Meta",
    ],
    accent: "mint",
  },
  {
    id: "semillero",
    title: "Semillero de Cooweb",
    icon: "/icon-semillero.png",
    iconSize: "md",
    iconRounded: true,
    tagline: "Programa de formación con diagnóstico por IA",
    description:
      "Sitio público del semillero de Cooweb: postulaciones, diagnóstico empresarial con Gemini y módulo administrativo de correos. Principal contribuidor del repositorio en un equipo de cuatro.",
    type: "empresa",
    role: "Full Stack Developer",
    stack: ["Next.js", "Firestore", "Vertex AI", "Nodemailer"],
    status: "produccion",
    year: "2026",
    link: "https://semillero.cooweb.co",
    highlights: [
      "126 commits: principal contribuidor en un equipo de cuatro",
      "Diagnóstico empresarial con Gemini sobre Vertex AI",
      "Módulo administrativo de correos y flujo de postulaciones",
    ],
    accent: "violet",
  },
  {
    id: "vecinos",
    title: "VecinOS",
    icon: "/icon-vecinos.png",
    tagline: "Plataforma de gestión residencial",
    description:
      "Plataforma de gestión residencial (SaaS multi-tenant) desarrollada dentro de Cooweb.co. Módulos de portería con QR y escaneo de paquetes vía IA, gestión de incidencias/PQRS, comunicación con la comunidad y asistente de IA (Gemini) para normativa y clasificación automática de casos.",
    type: "empresa",
    role: "Full Stack Developer",
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
    id: "saldo",
    title: "Saldo",
    icon: "/icon-saldo.png",
    iconSize: "md",
    iconRounded: true,
    tagline: "Finanzas personales local-first para iOS",
    description:
      "App iOS de finanzas sin backend: los datos viven en el dispositivo, con captura mediante Shortcuts y URL scheme. Compilada desde Windows/WSL2 con xtool. Arquitectura feature-first, persistencia versionada y exportación a CSV.",
    type: "personal",
    role: "Desarrollo individual",
    stack: ["Swift 6", "SwiftUI", "WSL2", "xtool"],
    status: "en-desarrollo",
    year: "2026",
    highlights: [
      "~12.200 líneas de Swift y 336 tests",
      "57 decisiones de arquitectura documentadas",
      "Local-first: sin backend, captura vía Shortcuts y URL scheme",
    ],
    accent: "mint",
  },
  {
    id: "creditos",
    title: "Plataforma de créditos",
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
    highlights: [
      "Tracker HTML propio con persistencia local + export JSON",
      "Smoke script Python sin dependencias para validar env pre-test",
      "Reportes go/no-go accionables con evidencia para stakeholders",
    ],
    accent: "warm",
  },
  {
    id: "produccion",
    title: "Producto en producción",
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
    status: "archivado",
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
      "Gemini · Vertex AI",
      "Whisper",
      "Claude · OpenAI",
      "Anthropic SDK",
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
      "Firebase · Firestore",
      "REST APIs",
      "Redis · BullMQ",
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
    items: ["Swift · SwiftUI", "React Native · Expo"],
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
    role: "Full Stack Developer",
    company: "Cooweb.co",
    companyLogo: "/logo-cooweb.png",
    companyLink: "https://cooweb.co",
    period: "Dic 2025 — presente",
    description:
      "Desarrollo funcionalidades end-to-end para DerbiPlay, DailyHumano, VecinOS y Semillero, con despliegues en Docker y Cloud Run.",
    achievements: [
      "Integro Gemini y Whisper en flujos de diagnóstico, clasificación de incidencias, generación de cromos y transcripción de voz",
      "Pruebas automatizadas con Vitest y Playwright",
      "Flujos de desarrollo agéntico con Claude Code y OpenCode",
    ],
  },
  {
    role: "QA Engineer (rol concluido)",
    company: "Cooweb.co",
    companyLogo: "/logo-cooweb.png",
    companyLink: "https://cooweb.co",
    period: "Dic 2025 — Jul 2026",
    description:
      "Validé productos en producción y flujos financieros en cuatro entornos (DEV, QA, REG y PROD).",
    achievements: [
      "Tracker y scripts de smoke testing propios",
      "Cobertura de escenarios críticos, happy paths y edge cases",
      "Capacité a mi reemplazo antes de pasar a desarrollo",
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
    title: "Mentor · NASA Space Apps Challenge Barranquilla 2026",
    issuer: "CUC, Universidad de la Costa",
    date: "Nov 2026",
    detail: "mentoría a equipos durante el hackathon",
  },
  {
    title: "Mentor voluntario · Eco Hack / EcoFest",
    issuer: "Comunidad",
    date: "Oct 2026",
    detail: "mentoría a equipos participantes",
  },
  {
    title: "Organizador y mentor · Bootcamp Semillero",
    issuer: "Cooweb",
    date: "Oct 2026",
    detail: "~12 personas capacitadas",
  },
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

export const education: { title: string; detail: string }[] = [
  {
    title: "Ingeniería de Sistemas · UAC",
    detail: "4.º semestre · En curso",
  },
  { title: "Fundamentos UI/UX", detail: "Platzi" },
  { title: "Español", detail: "Nativo" },
  { title: "Inglés", detail: "Intermedio (lectura técnica)" },
];

export type Stat = {
  number: string;
  label: string;
};

export const stats: Stat[] = [
  { number: "1 año", label: "Experiencia profesional" },
  { number: "4.000+", label: "Jugadores en DerbiPlay" },
  { number: "~1.015", label: "Tests automatizados" },
  { number: "35", label: "Torneos abiertos" },
  { number: "~12", label: "Personas capacitadas" },
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
