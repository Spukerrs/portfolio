# Plan Maestro Definitivo: Portfolio Profesional Escalable (Next.js + Tailwind v4 + Framer Motion + Vercel)

**Perfil:** Shair Fernando Cuello López (`spukerrs`) — *AI Product Builder · Automatización, Herramientas de Video & Soluciones Digitales*  
**Stack de Producción:** Next.js (App Router + TypeScript) + Tailwind CSS + Framer Motion + shadcn/ui + Lucide Icons  
**Infraestructura y Hosting:** GitHub + Vercel (`shaircuello.vercel.app` / `spukerrs.vercel.app`) — $0 costo de mantenimiento, despliegue continuo automático (CI/CD).

---

## 1. Arquitectura Escalable: Cómo modificarlo a futuro sin tocar el diseño

El secreto de un portfolio profesional que no se vuelve un dolor de cabeza en 6 meses es **separar los datos de la interfaz**.  
En lugar de meter textos sueltos adentro del código visual, todo tu contenido vivirá en un único archivo maestro: `src/data/portfolio.ts`.

* **¿Terminaste un proyecto nuevo en enero?** Solo agregás un bloque de 8 líneas en `src/data/portfolio.ts` y automáticamente se crea la tarjeta en el Bento Grid, con sus animaciones, etiquetas, enlaces y página de detalle.
* **¿Cambiaste tu CV o sumaste una habilidad?** Editás una línea en ese mismo archivo y se actualiza toda la web en Vercel en 30 segundos.

```text
shair-portfolio/
├── public/
│   ├── cv/
│   │   └── cv-shair-cuello.pdf          <-- Tu CV Harvard descargable
│   └── projects/                        <-- Capturas WebP o videos cortos (.mp4/.webm) de demos
│       ├── davinci-autocut.webp
│       ├── video-automation.webp
│       └── anti-doomscrolling.webp
├── src/
│   ├── data/
│   │   └── portfolio.ts                 <-- ARCHIVO ÚNICO DE DATOS (Editás todo tu portfolio acá)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               <-- Barra flotante minimalista con blur
│   │   │   └── Footer.tsx               <-- Cierre limpio y links directos
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 <-- Presentación de alto impacto + CTA
│   │   │   ├── BentoProjects.tsx        <-- Grilla asimétrica estilo Apple/Linear con tus proyectos
│   │   │   ├── StackAndWorkflow.tsx     <-- Cómo construís con IA, Python y DaVinci
│   │   │   └── Contact.tsx              <-- Botón de copiar correo con feedback toast (Sonner)
│   │   └── ui/                          <-- Componentes atómicos de shadcn/ui
│   └── app/
│       ├── globals.css                  <-- Tokens de diseño y variables de color Anti-Slop
│       ├── layout.tsx                   <-- Fuentes (Geist / Plus Jakarta Sans + JetBrains Mono) y SEO
│       └── page.tsx                     <-- Ensamblaje limpio de Server Components
├── README.md                            <-- Documentación técnica del repositorio
└── package.json
```

---

## 2. Dirección de Arte y Sistema Visual (Anti-Slop)

Alineado con tus reglas activas en `frontend-design-mastery` y las skills `taste` e `impeccable`:

* **Estética:** *Dark Editorial Engineering* (inspirado en Linear, Vercel, Raycast y sitios premiados en Awwwards).
* **Paleta de Colores Intencional (Cero degradados violetas/neón cliché de IA):**
  * **Fondo base (`#090A0F`):** Negro obsidiana profundo con ruido sutil opcional.
  * **Superficie de tarjetas (`#11131A`):** Gris carbón con bordes de `1px solid rgba(255, 255, 255, 0.07)` que se iluminan sutilmente al acercar el cursor (`rgba(255, 255, 255, 0.18)`).
  * **Texto primario (`#F3F4F6`):** Blanco hueso (contraste AAA sin encandilar).
  * **Texto secundario (`#9CA3AF`):** Gris técnico para descripciones y contexto.
  * **Acento semántico (`#10B981` Esmeralda Técnico / `#38BDF8` Acero):** Usado con precisión quirúrgica en indicadores de estado ("Disponible para proyectos"), tags técnicos y foco de teclado.
* **Tipografía Dual:**
  * **Títulos y Cuerpo:** `Geist Sans` o `Plus Jakarta Sans` (tracking `-0.03em` en titulares grandes).
  * **Metadatos, Stack y Métricas:** `Geist Mono` o `JetBrains Mono` (transmite ingeniería real).

---

## 3. Plan de Ejecución Paso a Paso en Antigravity IDE (Las 6 Calls)

Ejecutá este flujo en orden desde tu terminal y el **Sidebar Agent Mode** de Antigravity IDE.

### Fase 0: Inicialización en Terminal (2 minutos)
Abrí la terminal en tu carpeta de proyectos y corré estos dos comandos para crear la base limpia:

```bash
npx create-next-app@latest shair-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd shair-portfolio
npm install motion lucide-react sonner clsx tailwind-merge
```

Luego abrí la carpeta `shair-portfolio` en **Antigravity IDE** y empezá con las Calls en el chat lateral:

---

### Call 1: Configurar el Sistema de Diseño y Fuentes (`globals.css` + `layout.tsx`)
**Skills que actúan:** `design-system`, `taste`, `tailwind-design-system`, `web-design-guidelines`

```text
Usa las skills `design-system`, `taste`, `tailwind-design-system` y `web-design-guidelines` para configurar la base visual en `src/app/layout.tsx` y `src/app/globals.css`.

REQUERIMIENTOS:
1. Configura las fuentes `Plus Jakarta Sans` (o `Geist`) para interfaz y `JetBrains Mono` para código/etiquetas técnicas usando `next/font/google`.
2. En `src/app/globals.css`, define tokens semánticos oscuros siguiendo las reglas de `frontend-design-mastery` (prohibido usar morados o neones genéricos de IA):
   - Fondo base: `#090A0F`
   - Superficie de tarjeta: `#11131A`
   - Borde sutil: `rgba(255, 255, 255, 0.08)`
   - Texto principal: `#F3F4F6`
   - Texto secundario: `#9CA3AF`
   - Acento primario: `#10B981` (Esmeralda técnico)
3. Configura metadatos SEO reales en `layout.tsx` para "Shair Cuello — AI Product Builder & Creative Technologist", incluye el componente `<Toaster />` de `sonner` y asegura scroll suave con respeto por `prefers-reduced-motion`.
```

---

### Call 2: Crear el Motor Escalable de Datos (`src/data/portfolio.ts`)
**Skills que actúan:** `vercel-composition-patterns`, `brand`

```text
Usa las skills `vercel-composition-patterns` y `brand` para crear el archivo `src/data/portfolio.ts` con tipado estricto en TypeScript.
Toda la información de mi portfolio debe salir de este archivo para que sea 100% escalable y fácil de editar a futuro sin tocar los componentes visuales.

Incluye interfaces exportadas y los datos reales para:
1. `profile`:
   - Nombre: "Shair Fernando Cuello López"
   - Alias: "spukerrs"
   - Rol: "AI Product Builder & Creative Technologist"
   - Ubicación: "Córdoba, Argentina"
   - Estado: "Disponible para nuevos proyectos y colaboraciones"
   - Pitch corto: "Transformo problemas reales en software funcional, herramientas de automatización y flujos audiovisuales combinando arquitectura de producto e inteligencia artificial."
   - Bio: Enfoque honesto como constructor de soluciones asistido por IA (especificación técnica, orquestación de agentes, lectura y auditoría de código, testing y despliegue rápido).
   - Email: "cuello.shair@gmail.com"
   - Redes: GitHub y LinkedIn.
2. `projects` (con soporte para tamaño en Bento Grid: `featured: boolean`, `span: "col-span-1" | "col-span-2"`, `status: "En producción" | "En desarrollo" | "Prototipo"`):
   - Proyecto 1 (Destacado - 2 columnas): "DaVinci Resolve Auto-Cut Plugin" — Herramienta en Python que integra `faster-whisper` local con la API de DaVinci Resolve para eliminar silencios y generar cortes automáticos en la línea de tiempo sin costo de servidor.
   - Proyecto 2 (1 columna): "Automatización Inteligente de Video & Backups" — Pipeline en Python/Bash para organización automática por timestamps, compresión y respaldo en la nube para creadores de contenido.
   - Proyecto 3 (1 columna): "FocusGuard — App Anti-Doomscrolling con Visión Artificial" — Aplicación móvil diseñada para bloquear el consumo compulsivo de pantalla exigiendo objetivos físicos verificados en tiempo real con cámara y MediaPipe.
   - Proyecto 4 (2 columnas): "Gestor de Eventos IronBot 2026 & EcoVida" — Sistemas de gestión con persistencia en SQLite y prototipado de clasificación de residuos mediante visión por computadora.
3. `workflow` (Mi metodología en 3 pasos: 1. Especificación & Arquitectura, 2. Construcción con Agentes & Automatización, 3. Auditoría, Pulido & Despliegue).
4. `skills` categorizadas en: "AI & Product Building", "Automatización & Backend", "Frontend & UI", "Audiovisual & Media".
```

---

### Call 3: Construir el Hero Editorial y Barra de Navegación Flotante
**Skills que actúan:** `frontend-design`, `taste`, `framer-motion-animator`, `apple-design`, `lucide-icons`

```text
Activa las skills `frontend-design`, `taste`, `framer-motion-animator`, `apple-design` y `lucide-icons` para crear `src/components/layout/Navbar.tsx` y `src/components/sections/Hero.tsx`.

DISEÑO Y COMPORTAMIENTO:
1. `Navbar.tsx`: Barra superior flotante centrada (estilo cápsula o borde completo minimalista con `backdrop-blur-md` y fondo `bg-[#090A0F]/80`), con mi marca `shair.dev` en fuente monoespaciada, enlaces suaves a `#proyectos`, `#metodologia`, `#stack`, `#contacto` y un botón directo a GitHub.
2. `Hero.tsx`:
   - Badge superior con punto verde pulsante (`#10B981`) mostrando el estado desde `portfolio.ts`.
   - Título principal con jerarquía tipográfica fuerte (`clamp`), limpio y directo.
   - Subtítulo claro explicando qué resuelvo.
   - Dos botones de acción: "Explorar proyectos" (primario, alto contraste) y "Descargar CV" + botón rápido para copiar mi email al portapapeles usando `sonner` (`ask-sonner`) que muestre un toast confirmando "Correo copiado: cuello.shair@gmail.com".
   - Animación de entrada escalonada con `motion` usando curvas físicas suaves (solo `opacity` y `transform: translateY` para mantener 60fps según `animation-performance`).
```

---

### Call 4: Construir el Bento Grid de Proyectos y Sección de Metodología
**Skills que actúan:** `ui-ux-pro-max`, `impeccable`, `vercel-composition-patterns`, `framer-motion-animator`

```text
Usa las skills `ui-ux-pro-max`, `impeccable`, `vercel-composition-patterns` y `framer-motion-animator` para construir `src/components/sections/BentoProjects.tsx` y `src/components/sections/StackAndWorkflow.tsx`.

REQUERIMIENTOS DE `BentoProjects.tsx`:
1. Renderiza dinámicamente los proyectos desde `src/data/portfolio.ts` en un CSS Grid responsivo (`grid-cols-1 md:grid-cols-3 gap-6`).
2. Cada tarjeta debe verse como una pieza de ingeniería editorial:
   - Badge de estado ("En desarrollo", "Arquitectura", etc.) en tipografía monoespaciada.
   - Problema que resuelve vs. Solución construida claramente diferenciados.
   - Visualizador gráfico o mockup abstracto en SVG/CSS dentro de la tarjeta (para que luzca impecable incluso antes de subir capturas reales).
   - Tags del stack técnico con `JetBrains Mono` y enlaces a GitHub / Demo con iconos de `lucide-react`.
   - Microinteracción sutil en hover (elevación mínima y cambio de iluminación del borde).
3. Incluye un filtro rápido por categoría ("Todos", "Automatización & IA", "Video & Plugins", "Apps & Web") con transiciones de layout fluidas de Framer Motion (`layoutId`).

REQUERIMIENTOS DE `StackAndWorkflow.tsx`:
1. Muestra con transparencia y autoridad mi perfil como "AI Product Builder": cómo combino criterio de producto, lectura de código, agentes especializados y herramientas como Python y DaVinci Resolve para entregar soluciones reales rápido.
2. Muestra mi stack técnico agrupado en tarjetas limpias.
```

---

### Call 5: Sección de Contacto, Ensamblaje en `page.tsx` y Auditoría Anti-Roturas
**Skills que actúan:** `vercel-react-best-practices`, `break-ui`, `web-design-guidelines`, `ask-sonner`

```text
Usa las skills `vercel-react-best-practices`, `break-ui`, `web-design-guidelines` y `ask-sonner` para:
1. Crear `src/components/sections/Contact.tsx` y `src/components/layout/Footer.tsx` con llamado a la acción directo, copia de correo en 1 clic con notificación de Sonner y enlaces a redes.
2. Ensamblar todas las secciones en `src/app/page.tsx` manteniendo Server Components por defecto y dejando `'use client'` únicamente en las hojas interactivas.
3. Auditar todo el sitio con `break-ui` y `web-design-guidelines`:
   - Verificar que en móviles de 360px de ancho el Bento Grid colapse a 1 columna sin scroll horizontal.
   - Asegurar que todos los botones de icono tengan `aria-label`, foco visible (`focus-visible:ring-2`) y contraste WCAG AA/AAA.
   - Ejecutar `npm run build` en la terminal para confirmar que hay 0 errores de TypeScript o ESLint.
```

---

### Call 6: Despliegue en Vivo con GitHub + Vercel
**Skills que actúan:** `deploy-to-vercel`, `vercel-optimize`

```text
Usa las skills `vercel-optimize` y `deploy-to-vercel` para dejar el repositorio listo para producción:
1. Crea un `README.md` profesional documentando la arquitectura del portfolio, el stack (Next.js, Tailwind CSS, Framer Motion) y cómo agregar nuevos proyectos desde `src/data/portfolio.ts`.
2. Inicializa Git, haz el commit inicial y guíame o ejecuta el despliegue hacia GitHub y Vercel para publicarlo bajo mi dominio gratuito `.vercel.app`.
```

---

## 4. Cómo vas a mantener y escalar este portfolio a futuro

1. **Agregar un proyecto en 1 minuto:** Abrís `src/data/portfolio.ts`, copiás un objeto del array `projects`, cambiás el título, descripción y tecnologías, guardás y hacés `git push`. Vercel actualiza la web sola.
2. **Sumar páginas de caso de estudio (v2.0):** Como está en Next.js App Router, el día que quieras que al hacer clic en el plugin de DaVinci se abra una página entera con un video de YouTube mostrando cómo corta silencios y el link de descarga, solo le pedís a Antigravity: *"Crea la ruta dinámica `src/app/proyectos/[slug]/page.tsx` leyendo los datos de `portfolio.ts`"*.
3. **Conectar tu dominio propio barato cuando quieras:** Arrancás hoy gratis con `shaircuello.vercel.app`. El día que compres `shaircuello.com.ar` (en NIC.ar) o `shaircuello.dev` (en Cloudflare), entrás a `Vercel -> Settings -> Domains`, escribís el dominio y queda andando sin tocar ni una línea de código.