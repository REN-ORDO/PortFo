# Portfolio · Sebastian Ordoñez

Personal portfolio. AI Engineer / Full Stack Developer / QA Engineer focused on UX quality. Built as a live demo of my own craft.

🌐 **Live**: pendiente · próximo deploy a Vercel

---

## Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **UI**: React 19, TypeScript, Tailwind CSS v4
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Tipografía**: Geist (sans + mono) · Instrument Serif (display)
- **Iconos**: Lucide React + brand SVGs custom
- **Deploy**: Vercel

## Highlights del proyecto

- **Diseño dark-first** con paleta de 4 acentos (mint · violet · warm · rose) usados consistentemente
- **Cursor custom** (dot + ring + spotlight) con variantes interactive/text y labels contextuales
- **Hero magnético**: headline con tilt 3D + rotador de roles animado
- **Filtro de proyectos** con `layoutId` de Framer Motion (transición fluida del pill)
- **Marquee** con 4 íconos geométricos rotando colores accent
- **Nav responsivo** con hamburger en mobile/tablet, full inline en desktop
- **A11y**: respeto a `prefers-reduced-motion`, focus rings visibles, ARIA labels, lang ES
- **Monograma SO** custom como brand mark

## Estructura

```
app/
  layout.tsx        Fonts + metadata
  page.tsx          Section orchestration
  globals.css       Tokens + grain + utilities

components/
  nav.tsx           Sticky nav con morph al scroll
  hero.tsx          Hero magnético + role rotator
  about.tsx         3 pilares + stats grid
  projects.tsx      Filterable cards (empresa/hackathon/personal)
  experience.tsx    Timeline + skills matrix
  contact.tsx       CTA glassmorphic + email copy
  footer.tsx        Marca + back to top
  marquee.tsx       Cinta animada con iconos geométricos
  cursor-spotlight.tsx  Cursor custom dot+ring+spotlight
  monogram.tsx      Brand mark SVG (SO)
  brand-icons.tsx   GitHub / LinkedIn SVGs

lib/
  data.ts           Proyectos · skills · experiencia · stats · nav
  utils.ts          cn() helper (clsx + tailwind-merge)
```

## Desarrollo

```bash
npm install
npm run dev
```

App en [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run lint     # eslint
npx tsc --noEmit # type check
```

## Contacto

- **Email**: [sebastianordonezgonzalez@gmail.com](mailto:sebastianordonezgonzalez@gmail.com)
- **GitHub**: [@REN-ORDO](https://github.com/REN-ORDO)
- **LinkedIn**: próximamente

---

Construido con obsesión por la experiencia.
