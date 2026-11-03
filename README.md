# Shair Fernando Cuello López (`spukerrs`) — Portfolio

> **AI Product Builder & Creative Technologist**  
> Automatización de flujos de trabajo, plugins para DaVinci Resolve, pipelines audiovisuales y soluciones digitales asistidas por IA.

[![Next.js](https://img.shields.io/badge/Next.js-16_App_Router-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-v12-FF0055?logo=framer)](https://motion.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)

---

## 🏛️ Filosofía de Arquitectura (Desacople Total de Datos)

El código visual de este portfolio no contiene textos ni proyectos quemados (hardcoded). Toda la información proviene de un único motor tipado en TypeScript:

👉 **[`src/data/portfolio.ts`](src/data/portfolio.ts)**

### ¿Cómo agregar un proyecto nuevo en 1 minuto?
1. Abre `src/data/portfolio.ts`.
2. Agrega un nuevo elemento al array `projects`:
   ```ts
   {
     id: "nuevo-proyecto",
     title: "Nombre del Proyecto",
     category: "Automatización & IA", // o "Video & Plugins" | "Apps & Web"
     tagline: "Descripción concisa en una línea",
     problem: "Qué fricción o dolor existía",
     solution: "Cómo se resolvió técnicamente",
     metrics: "Resultado cuantificable (ej: -60% tiempo de proceso)",
     tags: ["Python", "FastAPI", "Docker"],
     status: "En producción", // "En producción" | "En desarrollo" | "Prototipo"
     featured: true,
     span: "md:col-span-2", // o "md:col-span-1"
     githubUrl: "https://github.com/spukerrs/nuevo-proyecto",
     abstractVisual: {
       type: "pipeline",
       accentColor: "#10B981"
     }
   }
   ```
3. Guarda el archivo y ejecuta `git push`. Vercel compila y publica automáticamente la tarjeta en el Bento Grid con filtros y animaciones.

---

## 🎨 Dirección de Arte: Dark Editorial Engineering

Diseño riguroso basado en principios *Anti-Slop Visual* (sin degradados neón cliché de IA):
* **Fondo Base (`#090A0F`):** Negro obsidiana profundo.
* **Superficie de Tarjetas (`#11131A`):** Carbón con bordes reactivos `rgba(255, 255, 255, 0.08)`.
* **Acento Técnico (`#10B981`):** Verde esmeralda de precisión.
* **Tipografía Dual:**
  * Interfaz y Títulos: `Plus Jakarta Sans` con tracking ajustado.
  * Metadatos y Código: `JetBrains Mono`.
* **Accesibilidad:** Cumplimiento WCAG AA/AAA (contraste 18.2:1 en texto principal), navegación por teclado completa y soporte para `prefers-reduced-motion`.

---

## 📂 Estructura del Proyecto

```text
Portfolio/
├── public/
│   ├── cv/
│   │   └── cv-shair-cuello.pdf          # CV descargable
│   └── projects/                        # Assets y capturas de proyectos
├── src/
│   ├── app/
│   │   ├── globals.css                  # Tokens semánticos y Tailwind v4
│   │   ├── layout.tsx                   # Fuentes Google, SEO y Sonner Toaster
│   │   └── page.tsx                     # Server Component que ensambla la web
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Barra flotante estilo cápsula con blur
│   │   │   └── Footer.tsx               # Cierre sobrio y retorno al inicio
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 # Presentación, badge y acción rápida de email
│   │   │   ├── BentoProjects.tsx        # Bento Grid dinámico con mockups abstractos
│   │   │   ├── StackAndWorkflow.tsx     # Manifiesto AI Product Builder y stack
│   │   │   └── Contact.tsx              # Llamado a la acción y redes sociales
│   │   └── ui/
│   │       └── BrandIcons.tsx           # Iconos SVG de alta definición (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolio.ts                 # ARCHIVO ÚNICO DE DATOS
│   └── lib/
│       └── utils.ts                     # Helper de combinación condicional clsx + twMerge
├── PLAN/
└── README.md
```

---

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:3000
npm run dev

# Validar tipos y compilar para producción
npm run build

# Analizar con linter
npm run lint
```

---

## 🌐 Despliegue en Vercel

El proyecto está optimizado para despliegue en Vercel con $0 costo de mantenimiento:
1. Sube tu código a GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit portfolio shair cuello"
   git remote add origin https://github.com/spukerrs/portfolio.git
   git push -u origin main
   ```
2. Entra a [vercel.com](https://vercel.com), selecciona **Add New Project** e importa el repositorio `portfolio`.
3. El build framework se detectará automáticamente como **Next.js**. Haz clic en **Deploy**.
