export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Profile {
  name: string;
  alias: string;
  role: string;
  location: string;
  status: {
    available: boolean;
    label: string;
  };
  pitch: string;
  bio: string[];
  philosophy: {
    intro: string;
    closing: string;
    quote: string;
    highlight: string;
  };
  email: string;
  cvUrl: string;
  avatarUrl?: string;
  socials: SocialLink[];
}

export type ProjectCategory = "Automatización & IA" | "Video & Plugins" | "Apps & Web";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  problem: string;
  solution: string;
  metrics?: string;
  tags: string[];
  status: "En producción" | "En desarrollo" | "Prototipo";
  featured: boolean;
  span: "md:col-span-2" | "md:col-span-1";
  githubUrl?: string;
  demoUrl?: string;
  repoStatus?: "public" | "private" | "coming_soon";
  coAuthor?: TeamMember;
  media?: {
    type: "image" | "video";
    src: string;
    poster?: string;
    alt?: string;
  };
  abstractVisual: {
    type: "waveform" | "pipeline" | "vision-guard" | "sqlite-grid" | "habit-breathe" | "accessibility" | "web-remaster";
    accentColor: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  linkedinUrl?: string;
}

export interface Collaboration {
  id: string;
  title: string;
  entity: string;
  role: string;
  period: string;
  summary: string;
  myContribution: string;
  team?: TeamMember[];
  tags: string[];
  projectUrl?: string;
  projectUrlLabel?: string;
  blogSlug?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  collaborations: Collaboration[];
  workflow: WorkflowStep[];
  skills: SkillCategory[];
  categories: ("Todos" | ProjectCategory)[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Shair Fernando Cuello López",
    alias: "spukerrs",
    role: "AI Product Builder & Creative Technologist",
    location: "Argentina (Remoto)",
    avatarUrl: "/profile/avatar.webp",
    status: {
      available: true,
      label: "Disponible para nuevos proyectos y colaboraciones",
    },
    pitch:
      "No provengo del desarrollo tradicional de código de memoria: mi verdadero valor está en la arquitectura de soluciones, una atención casi obsesiva al detalle y una capacidad implacable de testing para encontrar errores antes de que lleguen a producción. Orquesto IA como motor técnico, pero audito cada línea para que todo funcione a la perfección.",
    philosophy: {
      intro:
        "Soy 100% transparente: no programo escribiendo sintaxis a mano desde cero. Mi habilidad radica en la visión de producto, la detección temprana de fallos y un testing meticuloso, a veces obsesivo. En una era donde cualquiera puede pedirle código a una IA, a mí me importa el detalle extremo: que todo funcione perfecto, seguro y sin errores. Me pueden llamar 'vibecoder' o como quieran; para mí lo prioritario es la satisfacción del cliente y mi vocación de ayudar.",
      quote:
        "No escribo código tradicional, pero tengo una obsesión incansable por el detalle y el testing para que nada falle. Me pueden decir vibecoder o lo que quieran: a mí lo que me importa es la seguridad, que el cliente quede satisfecho y ayudar a construir soluciones reales.",
      closing:
        "Mi vocación es ayudar. No busco aparentar que sé programar a la antigua: orquesto inteligencia artificial, audito cada flujo con rigor obsesivo y entrego software testeado a fondo que cumple su propósito.",
      highlight: "Testing Obsesivo · Atención al Detalle · Seguridad Real",
    },
    bio: [
      "Constructor de soluciones de alto impacto asistido por IA. Mi enfoque se centra en la especificación técnica rigurosa, la orquestación de agentes especializados y la auditoría exhaustiva de código.",
      "Conecto el desarrollo de software moderno (Next.js, Python, TypeScript) con la ingeniería audiovisual avanzada (DaVinci Resolve API, visión computacional) para automatizar lo repetitivo y potenciar la creatividad.",
    ],
    email: "cuello.shair@gmail.com",
    cvUrl: "/cv/cv-shair-cuello.pdf",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/Spukerrs",
        label: "github.com/Spukerrs",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shair-fernando-cuello-lopez-86364529a",
        label: "linkedin.com/in/shair-fernando-cuello-lopez",
        icon: "linkedin",
      },
      {
        name: "Email",
        url: "mailto:cuello.shair@gmail.com",
        label: "cuello.shair@gmail.com",
        icon: "mail",
      },
    ],
  },

  categories: ["Todos", "Automatización & IA", "Video & Plugins", "Apps & Web"],

  projects: [
    {
      id: "just-breathe",
      title: "Just Breathe — Bienestar, Hábitos & Sueño",
      category: "Apps & Web",
      tagline: "Trackeo unificado de hábitos, ciclos de sueño y respiración consciente",
      problem:
        "La fragmentación entre apps de hábitos (como HabitNow) y apps de sueño (como Sleep as Android) obliga a usar múltiples interfaces, cuentas y suscripciones dispersas.",
      solution:
        "Aplicación integral para iOS y Android desarrollada en conjunto con Santiago Román que unifica el registro diario de hábitos, análisis de descanso y módulos de meditación guiada en una sola experiencia.",
      metrics: "Arquitectura móvil integral orientada al orden y la salud mental",
      tags: ["TypeScript", "React Native", "Habit Tracking", "Sleep Cycles", "Health Tech"],
      status: "En desarrollo",
      featured: true,
      span: "md:col-span-2",
      githubUrl: "https://github.com/Spukerrs/just-breathe",
      repoStatus: "public",
      coAuthor: {
        name: "Santiago Román",
        role: "Co-desarrollador",
        linkedinUrl: "https://www.linkedin.com/in/santiago-rom%C3%A1n-4683ab326/",
      },
      abstractVisual: {
        type: "habit-breathe",
        accentColor: "#10B981",
      },
    },
    {
      id: "davinci-autocut",
      title: "DaVinci Resolve Auto-Cut & Auto-Sub Plugin",
      category: "Video & Plugins",
      tagline: "Corte automático de silencios y generación de subtítulos con IA local",
      problem:
        "La edición manual de tomas largas requiere horas eliminando pausas muertas y subtitulando palabra por palabra.",
      solution:
        "Plugin de código abierto integrado en la API nativa de DaVinci Resolve que procesa el audio con faster-whisper local para detectar silencios, generar una nueva línea de tiempo cortada y exportar subtítulos sincronizados a costo $0.",
      metrics: "Ahorra un 70% del tiempo de primer corte con 100% privacidad offline",
      tags: ["Python", "DaVinci Resolve API", "faster-whisper", "FFmpeg", "AutoSub"],
      status: "En desarrollo",
      featured: true,
      span: "md:col-span-2",
      githubUrl: "https://github.com/spukerrs/davinci-autocut-plugin",
      repoStatus: "coming_soon",
      abstractVisual: {
        type: "waveform",
        accentColor: "#10B981",
      },
    },
    {
      id: "focusguard-app",
      title: "FocusGuard — Bloqueo Anti-Doomscrolling con Visión",
      category: "Apps & Web",
      tagline: "Uso de redes condicionado a ejercicio físico verificado por cámara",
      problem:
        "Los bloqueadores de pantalla convencionales son fáciles de ignorar o desactivar durante el consumo compulsivo de redes sociales como TikTok o Reels.",
      solution:
        "Al sobrepasar 15 minutos de pantalla, la app bloquea el dispositivo y exige cumplir flexiones o sentadillas físicas verificadas en tiempo real mediante la cámara frontal y visión computacional.",
      metrics: "Trackeo de posturas y repeticiones a 30 FPS en el dispositivo",
      tags: ["Computer Vision", "MediaPipe", "Android", "Digital Wellbeing"],
      status: "Prototipo",
      featured: false,
      span: "md:col-span-1",
      githubUrl: "https://github.com/spukerrs/focusguard-vision",
      repoStatus: "coming_soon",
      abstractVisual: {
        type: "vision-guard",
        accentColor: "#F59E0B",
      },
    },
    {
      id: "video-automation-backups",
      title: "Automatización de Ingesta & Respaldo de Video",
      category: "Automatización & IA",
      tagline: "Clasificación automática por antigüedad (>30 días) y redundancia",
      problem:
        "La acumulación de gigabytes de grabaciones satura los discos y genera riesgo constante de pérdida de material bruto al formatear o limpiar la PC.",
      solution:
        "Script desatendido que detecta clips con más de un mes de antigüedad, los traslada a directorios de archivo y gestiona copias de seguridad redundantes en la nube para resguardo permanente.",
      metrics: "Clasificación desatendida y tolerancia cero a pérdida de metraje",
      tags: ["Python", "Bash", "FFmpeg", "Cloud Storage", "Automation"],
      status: "En producción",
      featured: false,
      span: "md:col-span-1",
      githubUrl: "https://github.com/spukerrs/video-ingest-pipeline",
      repoStatus: "coming_soon",
      abstractVisual: {
        type: "pipeline",
        accentColor: "#38BDF8",
      },
    },
    {
      id: "san-agustin-remaster",
      title: "Remasterización Web — Instituto San Agustín",
      category: "Apps & Web",
      tagline: "Propuesta de modernización de la plataforma institucional del colegio",
      problem:
        "Plataformas institucionales con interfaces anticuadas, lenta carga y mala experiencia de usuario en teléfonos móviles para alumnos y docentes.",
      solution:
        "Propuesta técnica de rediseño integral con arquitectura Next.js, diseño responsivo accesible y navegación fluida para información académica y novedades del colegio.",
      metrics: "100/100 Lighthouse performance y cumplimiento estricto WCAG AA",
      tags: ["Next.js", "Tailwind CSS", "A11y", "Responsive Design"],
      status: "En desarrollo",
      featured: false,
      span: "md:col-span-1",
      githubUrl: "https://github.com/spukerrs/san-agustin-web-remaster",
      repoStatus: "coming_soon",
      abstractVisual: {
        type: "web-remaster",
        accentColor: "#38BDF8",
      },
    },
    {
      id: "accesibilidad-acv",
      title: "Asistente de Comunicación Adaptada & ACV",
      category: "Automatización & IA",
      tagline: "Compensación sensorial asistida para personas con secuelas comunicativas",
      problem:
        "Personas que sufrieron un ACV o con discapacidades del habla y escucha enfrentan una brecha severa de comunicación cotidiana al no poder expresarse de forma estándar.",
      solution:
        "Interfaz adaptativa diseñada para compensar capacidades: si el usuario no puede hablar o escuchar, utiliza iconografía táctil contextual, texto asistido y síntesis de voz simplificada para comunicarse con su entorno.",
      metrics: "Diseño inclusivo centrado en accesibilidad cognitiva y motriz",
      tags: ["Accesibilidad", "Inclusión", "UX Adaptativa", "Health Tech"],
      status: "Prototipo",
      featured: false,
      span: "md:col-span-1",
      githubUrl: "https://github.com/spukerrs/accessibility-assist-acv",
      repoStatus: "coming_soon",
      abstractVisual: {
        type: "accessibility",
        accentColor: "#EC4899",
      },
    },
    {
      id: "ironbot-ecovida",
      title: "Gestor IronBot 2026 & EcoVida",
      category: "Automatización & IA",
      tagline: "Plataforma de eventos con persistencia SQLite y clasificación ecológica",
      problem:
        "Gestión fragmentada de participantes en torneos tecnológicos y necesidad de clasificación automatizada de residuos.",
      solution:
        "Arquitectura dual: panel de control con base de datos SQLite ACID para torneos de robótica y prototipado de inferencia visual para reconocimiento y separación de reciclables.",
      metrics: "Latencia de consulta < 5ms y arquitectura local resiliente",
      tags: ["Python", "SQLite", "Computer Vision", "Tailwind CSS", "Architecture"],
      status: "En producción",
      featured: true,
      span: "md:col-span-2",
      githubUrl: "https://github.com/spukerrs/ironbot-ecovida-manager",
      repoStatus: "coming_soon",
      abstractVisual: {
        type: "sqlite-grid",
        accentColor: "#8B5CF6",
      },
    },
  ],

  collaborations: [
    {
      id: "saver-ucc-aguas-cordobesas",
      title: "Saver — Plataforma contra el Derroche de Agua Potable",
      entity: "Universidad Católica de Córdoba (TechCamp UCC 2026) · Aguas Cordobesas",
      role: "Soporte Técnico & Análisis de Viabilidad",
      period: "Agosto 2026 - Octubre 2026",
      summary:
        "Solución tecnológica orientada a prevenir y mitigar el derroche de agua en la red pública de Aguas Cordobesas, desarrollada durante el certamen universitario TechCamp UCC.",
      myContribution:
        "Participación en el análisis técnico, soporte intelectual en arquitectura y viabilidad de prototipado para el equipo interdisciplinario.",
      projectUrl: "https://cromop1.github.io/saver_UCC/",
      projectUrlLabel: "Ver prototipo Saver",
      team: [
        {
          name: "Santiago Garay Allasia",
          role: "Co-creador & Desarrollo",
          linkedinUrl: "https://www.linkedin.com/in/santiago-garay-allasia-654866227/",
        },
        {
          name: "Faustino Pedone López",
          role: "Co-creador & Desarrollo",
          linkedinUrl: "https://www.linkedin.com/in/pedone-l%C3%B3pez-faustino-3211a2412/",
        },
        {
          name: "Bruno Ángel Segura Marsal",
          role: "Co-creador & Desarrollo",
          linkedinUrl: "https://www.linkedin.com/in/bruno-angel-segura-marsal/",
        },
      ],
      tags: ["Trabajo en Equipo", "Impacto Comunitario", "IoT Conceptual", "TechCamp 2026"],
      blogSlug: "saver-techcamp-ucc",
    },
    {
      id: "fc-construcciones-audiovisual",
      title: "FC Construcciones — Contenido & Presencia Digital",
      entity: "FC Construcciones (Emprendimiento Familiar de Construcción)",
      role: "Editor Audiovisual & Media (Medio Tiempo)",
      period: "2024 - Presente",
      summary:
        "Producción de contenido audiovisual para redes comerciales en el sector de la construcción y remodelación de obras.",
      myContribution:
        "Edición y montaje de videos cortos (Reels / Shorts) en DaVinci Resolve, corrección básica de color, sincronización de audio y subtitulado dinámico para comunicación comercial.",
      projectUrl: "https://www.instagram.com/fcconstruccionesokk/",
      projectUrlLabel: "Ver @fcconstruccionesokk en Instagram",
      tags: ["DaVinci Resolve", "Edición Dinámica", "Redes Sociales", "Media"],
      blogSlug: "fc-construcciones-edicion",
    },
  ],

  workflow: [
    {
      step: "01",
      title: "Especificación Técnica & Arquitectura",
      description:
        "Desglose meticuloso del problema antes de escribir código. Definición de contratos de datos, selección de stack y arquitectura desacoplada para evitar retrabajo.",
      deliverables: ["Especificaciones funcionales", "Modelos de datos", "Diagramas de flujo"],
    },
    {
      step: "02",
      title: "Construcción con Agentes & Automatización",
      description:
        "Aceleración de desarrollo combinando agentes de IA especializados, prompts técnicos estructurados y scripts ad-hoc para generar código limpio y modular.",
      deliverables: ["Prototipos funcionales", "Pipelines de automatización", "Tests unitarios"],
    },
    {
      step: "03",
      title: "Auditoría de Código, Pulido & Despliegue",
      description:
        "Revisión humana línea por línea. Optimización de rendimiento (60fps, 0 CLS), verificación estricta de accesibilidad (WCAG AA/AAA) y despliegue continuo con CI/CD.",
      deliverables: ["Auditoría de seguridad/a11y", "CI/CD en Vercel/GitHub", "Documentación viva"],
    },
  ],

  skills: [
    {
      title: "AI & Product Building",
      description: "Diseño y ejecución de productos de software potenciados por modelos de lenguaje y visión.",
      skills: [
        { name: "Orquestación de Agentes", highlight: true },
        { name: "Ingeniería de Contexto & Prompts", highlight: true },
        { name: "Visión Artificial (MediaPipe / OpenCV)", highlight: true },
        { name: "Arquitectura de Software Asistida" },
        { name: "Auditoría & Refactorización de Código" },
      ],
    },
    {
      title: "Automatización & Backend",
      description: "Scripts, microservicios y tuberías de datos locales y cloud para eliminar trabajo manual.",
      skills: [
        { name: "Python 3", highlight: true },
        { name: "Bash & Scripting Unix", highlight: true },
        { name: "SQLite / PostgreSQL" },
        { name: "FFmpeg & Audio Processing", highlight: true },
        { name: "REST APIs & Webhooks" },
      ],
    },
    {
      title: "Frontend & UI Engineering",
      description: "Interfaces reactivas, rápidas y accesibles con atención milimétrica a la estética y el movimiento.",
      skills: [
        { name: "Next.js (App Router)", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "Tailwind CSS v4", highlight: true },
        { name: "Framer Motion", highlight: true },
        { name: "Accesibilidad WCAG (AA/AAA)" },
      ],
    },
    {
      title: "Audiovisual & Media",
      description: "Integración de pipelines creativos con automatización de software.",
      skills: [
        { name: "DaVinci Resolve Scripting API", highlight: true },
        { name: "Ingesta y Transcodificación Automatizada" },
        { name: "Sincronización & Edición Multicámara" },
        { name: "Compresión y Distribución de Medios" },
      ],
    },
  ],
};

