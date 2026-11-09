# CONTEXT: Portfolio Profesional — Shair Fernando Cuello López

> **Documento de Memoria Técnica para Agentes de IA.**  
> Fuente de verdad canónica. Diseñado para lectura rápida y alta densidad de contexto en nuevas sesiones de desarrollo.

---

## 1. Identidad, Rol y Filosofía

- **Desarrollador:** Shair Fernando Cuello López (`spukerrs`).
- **Rol:** AI Product Builder, Creative Technologist & Estudiante de 6.° Año de Informática (Instituto Privado Mixto San Agustín).
- **Filosofía de Trabajo:** "Anti-vibecoding" ciego. La IA es un multiplicador de velocidad, pero el código se audita línea por línea, con pruebas estrictas, accesibilidad WCAG AAA, tipado estricto y foco absoluto en la satisfacción del usuario y estabilidad en producción.
- **Ubicación:** Córdoba, Argentina (disponible para proyectos remotos).
- **Contacto:** `cuello.shair@gmail.com` | LinkedIn: `shaircuello` | GitHub: `Spukerrs`.

---

## 2. Stack Tecnológico de Producción

| Capa | Tecnología | Versión | Propósito / Configuración Clave |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.4.4` | Turbopack por defecto (`@tailwindcss/turbopack`), Cache Components, Partial Prerendering (PPR) |
| **Librería UI** | React / React DOM | `19.3.0` | React Server Components por defecto; `'use client'` restringido a hojas interactivas |
| **Lenguaje** | TypeScript | `^5.0.0` | Modo estricto sin `any`, interfaces unificadas en `src/data/portfolio.ts` |
| **Estilos** | Tailwind CSS | `^4.0.0` | `@import "tailwindcss";`, tokens semánticos en `globals.css` |
| **Animaciones** | Motion (Framer Motion) | `^14.9.0` | Transiciones aceleradas por hardware (`transform`, `opacity`), soporte `prefers-reduced-motion` |
| **Iconografía** | Lucide React | `^1.66.0` | Tree-shakable, íconos accesibles con `aria-hidden` o `aria-label` |
| **Notificaciones** | Sonner | `^2.0.8` | Toasts accesibles para acciones de portapapeles y contacto |
| **Utilidades** | clsx + tailwind-merge | `^2.1.1` / `^3.7.0` | Función helper `cn()` en `src/lib/utils.ts` |

---

## 3. Arquitectura del Árbol de Componentes (`src/`)

```text
src/
├── app/
│   ├── layout.tsx         <-- Metadata OpenGraph, fuentes Plus Jakarta Sans & JetBrains Mono, Sonner Toaster
│   ├── page.tsx           <-- Orquestador secuencial de secciones de la SPA
│   ├── globals.css        <-- Tokens semánticos Dark Editorial, scrollbar custom, resets WCAG
│   └── favicon.ico        <-- Icono de marca
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     <-- Header flotante píldora con backdrop-blur, indicator dot y modal de CV
│   │   └── Footer.tsx     <-- Pie minimalista con live clock Argentina y créditos técnicos
│   ├── sections/
│   │   ├── Hero.tsx       <-- Título editorial, avatar circular con gradiente reactivo, pitch y CTAs
│   │   ├── BentoProjects.tsx <-- Horizontal Shelf Carousel con drag-to-scroll, arrows, counter y progress bar
│   │   ├── Collaborations.tsx <-- Tarjetas de impacto real (TechCamp UCC Saver, FC Construcciones, San Agustín) con modal
│   │   ├── StackAndWorkflow.tsx <-- Kanban interactivo unificado con tabs de fase y Gaussian blur reveals
│   │   └── Contact.tsx    <-- Formulario accesible con validación nativa y enlaces directos
│   └── ui/
│       ├── Preloader.tsx  <-- Terminal boot, favicon spin 360°, typing de status y desvelo diagonal de manifiesto
│       ├── BrandIcons.tsx <-- SVGs directos de marcas (Next.js, DaVinci, Python, Tailwind, TypeScript)
│       ├── ShareModal.tsx <-- Modal de previsualización OpenGraph y copia rápida de URL
│       └── ScrollToTop.tsx<-- Botón flotante de retorno suave arriba
├── data/
│   └── portfolio.ts       <-- Base de datos estática tipada: perfil, proyectos, colaboraciones y manifiesto
└── lib/
    └── utils.ts          <-- Helper cn() para composición limpia de clases
```

---

## 4. Decisiones Clave de Arquitectura & UX

1. **Horizontal Shelf Carousel (`BentoProjects.tsx`):**
   - Se reemplazó el antiguo toggle Bento Grid / List View por un carrusel tipo estantería horizontal continua (`overflow-x-auto` con scroll-snap y soporte para drag-to-scroll con ratón y touch).
   - Controles: Botones flotantes Anterior / Siguiente, contador visual `1 / N`, barra de progreso horizontal reactiva y badges semánticos de ciclo de vida (`En producción`, `En desarrollo`, `Prototipo`).
2. **Preloader con Giro de Favicon y Manifiesto (`Preloader.tsx`):**
   - Al cargar la página, se ejecuta una animación de inicialización terminal con favicon girando 360°, efecto de escritura mecánica y desvelo en diagonal con la frase de manifiesto del autor. Desaparece limpiamente con un fade-out suave.
3. **Colaboraciones Interactivas (`Collaborations.tsx`):**
   - Validación y prueba social de clientes y certámenes reales:
     - **Saver (TechCamp UCC 2026):** Proyecto IoT de monitoreo de caudal hídrico para Aguas Cordobesas.
     - **FC Construcciones:** Producción audiovisual comercial y grading en DaVinci Resolve.
     - **Instituto San Agustín:** Liderazgo técnico en informática y proyectos escolares.
   - Cada tarjeta abre un modal con métricas y rol desempeñado.
4. **Flujo de Feedback Dual (Obsidian + Agente):**
   - Agente lee: `docs/agent/CONTEXT.md` y `docs/agent/STATE.json`.
   - Humano visualiza: `docs/visual/dashboard.html`, `docs/visual/pr-explainer.html` y `docs/visual/feedback-tool.html` (vía plugins `HTML Reader` y `Custom Frames` de Obsidian).

---

## 5. Restricciones y Reglas No Negociables

1. **Anti-Slop Visual:** Prohibido el uso de gradientes morados/azules genéricos cliché de IA. La paleta es Dark Editorial sobria (`#090A0F`, `#11131A`, `#161822`, bordes `#27272A`, acento `#10B981` y `#38BDF8`).
2. **Rendimiento:** 60/120 FPS sostenidos. Animar únicamente propiedades compuestas por GPU (`transform`, `opacity`). Cero CLS (< 0.1).
3. **Accesibilidad WCAG AAA:** Botones e inputs con `aria-label`, foco visible (`focus-visible:ring-2`), soporte obligatorio de `motion-safe:` / `motion-reduce:`.
4. **Respeto a Next.js 16:** Mantener Server Components por defecto. Respetar las convenciones de Turbopack.
