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
  media?: {
    type: "image" | "video";
    src: string;
    poster?: string;
    alt?: string;
  };
  abstractVisual: {
    type: "waveform" | "pipeline" | "vision-guard" | "sqlite-grid";
    accentColor: string;
  };
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
  workflow: WorkflowStep[];
  skills: SkillCategory[];
  categories: ("Todos" | ProjectCategory)[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Shair Fernando Cuello López",
    alias: "spukerrs",
    role: "AI Product Builder & Creative Technologist",
    location: "Córdoba, Argentina",
    status: {
      available: true,
      label: "Disponible para nuevos proyectos y colaboraciones",
    },
    pitch:
      "Transformo problemas reales en software funcional, herramientas de automatización y flujos audiovisuales combinando arquitectura de producto e inteligencia artificial.",
    bio: [
      "Constructor de soluciones de alto impacto asistido por IA. Mi enfoque se centra en la especificación técnica rigurosa, la orquestación de agentes especializados y la auditoría exhaustiva de código.",
      "Conecto el desarrollo de software moderno (Next.js, Python, TypeScript) con la ingeniería audiovisual avanzada (DaVinci Resolve API, visión computacional) para automatizar lo repetitivo y potenciar la creatividad.",
    ],
    email: "cuello.shair@gmail.com",
    cvUrl: "/cv/cv-shair-cuello.pdf",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/spukerrs",
        label: "github.com/spukerrs",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shair-cuello",
        label: "linkedin.com/in/shair-cuello",
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
      id: "davinci-autocut",
      title: "DaVinci Resolve Auto-Cut Plugin",
      category: "Video & Plugins",
      tagline: "Corte automático de silencios e ingesta asistida con IA local",
      problem:
        "La edición manual de tomas largas requiere horas eliminando pausas y silencios en la línea de tiempo.",
      solution:
        "Plugin desarrollado en Python que procesa el audio localmente con faster-whisper y envía instrucciones directas a la API de DaVinci Resolve para generar cortes instantáneos a costo $0.",
      metrics: "Ahorra un 70% del tiempo de primer corte sin enviar datos a la nube",
      tags: ["Python", "DaVinci Resolve API", "faster-whisper", "FFmpeg", "Audio Processing"],
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
      id: "video-automation-backups",
      title: "Automatización Inteligente de Video & Backups",
      category: "Automatización & IA",
      tagline: "Pipeline desatendido de ingesta, compresión y redundancia",
      problem:
        "La gestión de múltiples cámaras y tarjetas SD genera cuellos de botella y riesgos de pérdida de archivos brutos.",
      solution:
        "Pipeline en Python y Bash para indexación automática por metadatos/timestamps, compresión con aceleración por hardware y sincronización redundante hacia almacenamiento local y nube.",
      metrics: "Organización de 50GB+ de metraje en minutos con verificación SHA-256",
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
      id: "focusguard-app",
      title: "FocusGuard — Anti-Doomscrolling con Visión",
      category: "Apps & Web",
      tagline: "Bloqueo físico de pantallas condicionado por visión artificial",
      problem:
        "Los bloqueadores de pantalla convencionales son fáciles de eludir y no crean hábitos físicos reales.",
      solution:
        "Aplicación interactiva que exige cumplir metas físicas tangibles verificadas en tiempo real mediante cámara frontal y MediaPipe antes de desbloquear la pantalla.",
      metrics: "Reconocimiento de posturas y repeticiones a 30 FPS en el dispositivo",
      tags: ["TypeScript", "MediaPipe", "Computer Vision", "React Native", "UX/UI"],
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

