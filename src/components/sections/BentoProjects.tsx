"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Wrench,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { portfolioData, type Project, type ProjectCategory } from "@/data/portfolio";

function ProjectVisual({ project }: { project: Project }) {
  const { type } = project.abstractVisual;

  if (type === "waveform") {
    return (
      <div className="relative w-full h-36 rounded-xl bg-background/90 border border-border/80 p-3 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
        {/* Top header bar */}
        <div className="flex items-center justify-between text-muted-dark">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-foreground font-semibold">faster-whisper · local VAD</span>
          </div>
          <span className="text-accent font-mono">00:04:18:14</span>
        </div>

        {/* Waveform graphic with cut zones */}
        <div className="flex items-center justify-between gap-1 h-14 px-1 py-2 bg-surface/60 rounded-lg border border-border/40">
          {[40, 65, 80, 20, 10, 5, 8, 12, 75, 90, 85, 30, 10, 6, 70, 95, 60, 45, 15, 8, 5, 50, 75, 40].map(
            (height, i) => {
              const isCutZone = (i >= 3 && i <= 7) || (i >= 11 && i <= 13) || (i >= 18 && i <= 20);
              return (
                <div key={i} className="flex-1 flex flex-col justify-center items-center h-full">
                  <div
                    style={{ height: `${height}%` }}
                    className={`w-full max-w-[6px] rounded-full transition-colors ${
                      isCutZone ? "bg-red-500/40 border-b border-red-400" : "bg-accent/80"
                    }`}
                  />
                </div>
              );
            }
          )}
        </div>

        {/* Action feedback */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted">DaVinci Timeline: 14 cortes</span>
          <span className="text-accent font-medium">Latencia: 0ms (Local)</span>
        </div>
      </div>
    );
  }

  if (type === "pipeline") {
    return (
      <div className="relative w-full h-36 rounded-xl bg-background/90 border border-border/80 p-3 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
        <div className="flex items-center justify-between text-muted-dark">
          <span className="text-foreground font-semibold">Pipeline Ingesta</span>
          <span className="text-accent-sky">FFmpeg NVENC</span>
        </div>

        {/* Workflow Nodes */}
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded bg-surface border border-border/60 text-center">
            <span className="text-muted-dark block text-[10px]">INGEST</span>
            <span className="text-foreground font-semibold text-xs">SD Card</span>
          </div>
          <div className="p-2 rounded bg-accent-sky/10 border border-accent-sky/30 text-center">
            <span className="text-accent-sky block text-[10px]">SHA-256</span>
            <span className="text-foreground font-semibold text-xs">Verified</span>
          </div>
          <div className="p-2 rounded bg-surface border border-border/60 text-center">
            <span className="text-muted-dark block text-[10px]">SYNC</span>
            <span className="text-foreground font-semibold text-xs">Cloud + NAS</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted">
          <span>Batch: 128 clips</span>
          <span className="text-accent-sky font-medium">100% Redundante</span>
        </div>
      </div>
    );
  }

  if (type === "vision-guard") {
    return (
      <div className="relative w-full h-36 rounded-xl bg-background/90 border border-border/80 p-3 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
        <div className="flex items-center justify-between text-muted-dark">
          <span className="text-foreground font-semibold">MediaPipe Vision Pose</span>
          <span className="text-amber-400">30 FPS Live</span>
        </div>

        {/* Tracking wireframe simulation */}
        <div className="relative h-14 bg-surface/60 rounded-lg border border-border/40 flex items-center justify-center">
          <div className="absolute inset-x-8 h-[1px] bg-amber-400/30" />
          <div className="flex items-center gap-6">
            <div className="w-3 h-3 rounded-full border border-amber-400 bg-amber-400/20" />
            <div className="w-5 h-5 rounded-full border-2 border-accent bg-accent/20 animate-pulse" />
            <div className="w-3 h-3 rounded-full border border-amber-400 bg-amber-400/20" />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-muted">Desbloqueo físico</span>
          <span className="text-amber-400 font-medium">Condición Cumplida</span>
        </div>
      </div>
    );
  }

  if (type === "habit-breathe") {
    return (
      <div className="relative w-full h-36 rounded-xl bg-background/90 border border-border/80 p-3 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
        <div className="flex items-center justify-between text-muted-dark">
          <span className="text-foreground font-semibold">Just Breathe Core</span>
          <span className="text-accent">Sleep + Habit Sync</span>
        </div>
        <div className="flex items-center justify-between gap-3 my-auto">
          <div className="flex-1 p-2 rounded bg-surface border border-border/60">
            <span className="text-[10px] text-muted-dark block">HÁBITOS DIARIOS</span>
            <div className="flex gap-1 mt-1.5">
              {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                <div key={d} className="w-2.5 h-2.5 rounded-sm bg-accent/80" />
              ))}
            </div>
          </div>
          <div className="flex-1 p-2 rounded bg-accent/10 border border-accent/30 text-center">
            <span className="text-[10px] text-accent block">SUEÑO PROFUNDO</span>
            <span className="text-xs font-bold text-foreground">7h 45m · 92%</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Bienestar Integral</span>
          <span className="text-accent font-medium">Ciclo Activo</span>
        </div>
      </div>
    );
  }

  if (type === "web-remaster") {
    return (
      <div className="relative w-full h-36 rounded-xl bg-background/90 border border-border/80 p-3 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
        <div className="flex items-center justify-between text-muted-dark">
          <span className="text-foreground font-semibold">San Agustín Web Remaster</span>
          <span className="text-accent-sky">Next.js App Router</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2 rounded bg-surface border border-border/60 text-center">
            <span className="text-[10px] text-muted-dark block">PERF</span>
            <span className="text-xs font-bold text-accent">100/100</span>
          </div>
          <div className="p-2 rounded bg-surface border border-border/60 text-center">
            <span className="text-[10px] text-muted-dark block">A11Y</span>
            <span className="text-xs font-bold text-accent-sky">WCAG AA</span>
          </div>
          <div className="p-2 rounded bg-surface border border-border/60 text-center">
            <span className="text-[10px] text-muted-dark block">MOBILE</span>
            <span className="text-xs font-bold text-foreground">Fluid</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Portal Institucional</span>
          <span className="text-accent-sky font-medium">Rediseño</span>
        </div>
      </div>
    );
  }

  if (type === "accessibility") {
    return (
      <div className="relative w-full h-36 rounded-xl bg-background/90 border border-border/80 p-3 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
        <div className="flex items-center justify-between text-muted-dark">
          <span className="text-foreground font-semibold">Asistente Accesibilidad ACV</span>
          <span className="text-pink-400">Compensación Sensorial</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="p-2 rounded bg-surface border border-border/60">
            <span className="text-[10px] text-muted-dark block">MODO HABLA</span>
            <span className="text-xs text-foreground font-semibold">Texto a Síntesis</span>
          </div>
          <div className="p-2 rounded bg-surface border border-border/60">
            <span className="text-[10px] text-muted-dark block">MODO ESCUCHA</span>
            <span className="text-xs text-foreground font-semibold">Transcripción Visual</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Inclusión Cognitiva</span>
          <span className="text-pink-400 font-medium">Accesible</span>
        </div>
      </div>
    );
  }

  // default: sqlite-grid
  return (
    <div className="relative w-full h-36 rounded-xl bg-background/90 border border-border/80 p-3 overflow-hidden flex flex-col justify-between font-mono text-[11px]">
      <div className="flex items-center justify-between text-muted-dark">
        <span className="text-foreground font-semibold">IronBot & EcoVida Core</span>
        <span className="text-purple-400">SQLite WAL Mode</span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">
        <div className="p-2 rounded bg-surface border border-border/60">
          <div className="text-[10px] text-muted-dark">TORNEO ROBÓTICA</div>
          <div className="text-xs text-foreground font-semibold">120+ Teams / &lt;2ms</div>
        </div>
        <div className="p-2 rounded bg-surface border border-border/60">
          <div className="text-[10px] text-muted-dark">ECOVIDA INFERENCE</div>
          <div className="text-xs text-foreground font-semibold">Clasificación Residuos</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-muted">
        <span>Persistencia ACID</span>
        <span className="text-purple-400 font-medium">Local-First</span>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  layoutSpanClass?: string;
  isShelfCard?: boolean;
}

function ProjectCard({ project, layoutSpanClass = "", isShelfCard = false }: ProjectCardProps) {
  const getStatusConfig = (status: Project["status"]) => {
    switch (status) {
      case "En producción":
        return {
          icon: CheckCircle2,
          color: "text-accent border-accent/30 bg-accent/10",
        };
      case "En desarrollo":
        return {
          icon: Clock,
          color: "text-accent-sky border-accent-sky/30 bg-accent-sky/10",
        };
      case "Prototipo":
        return {
          icon: Wrench,
          color: "text-amber-400 border-amber-400/30 bg-amber-400/10",
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);
  const StatusIcon = statusConfig.icon;

  return (
    <article
      className={`group relative flex flex-col justify-between ${
        isShelfCard
          ? "w-[88vw] sm:w-[420px] shrink-0 snap-start p-6 rounded-3xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] select-none h-full"
          : "p-6 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:-translate-y-0.5"
      } ${layoutSpanClass}`}
    >
      {/* Card Top: Badges & Category */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono text-muted tracking-tight">
            {project.category}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${statusConfig.color}`}
          >
            <StatusIcon className="w-3 h-3" aria-hidden="true" />
            {project.status}
          </span>
        </div>

        {/* Visualizer / Interactive Abstract Mockup or Real Media */}
        <div className="mb-6 pointer-events-auto">
          {project.media ? (
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-border/80 bg-background/80">
              {project.media.type === "video" ? (
                <video
                  src={project.media.src}
                  poster={project.media.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.media.src}
                  alt={project.media.alt || project.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          ) : (
            <ProjectVisual project={project} />
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-muted mb-3">{project.tagline}</p>

        {/* Co-Author Badge (e.g. Santiago Román) */}
        {project.coAuthor && (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-border/60 text-xs font-mono text-muted mb-4">
            <span>Co-desarrollado con</span>
            <a
              href={project.coAuthor.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-sky hover:underline"
            >
              <LinkedinIcon className="w-3 h-3 text-accent-sky" aria-hidden="true" />
              <span className="font-semibold text-foreground">{project.coAuthor.name}</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-60" aria-hidden="true" />
            </a>
          </div>
        )}

        {/* Editorial Problem vs Solution breakdown */}
        <div className="space-y-2.5 text-xs text-muted leading-relaxed mb-6">
          <p>
            <strong className="text-foreground/90 font-semibold font-mono">Problema: </strong>
            {project.problem}
          </p>
          <p>
            <strong className="text-accent font-semibold font-mono">Solución: </strong>
            {project.solution}
          </p>
          {project.metrics && (
            <div className="inline-block px-3 py-1.5 rounded-lg bg-background/80 border border-border text-foreground font-mono text-[11px]">
              {project.metrics}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Tech tags & Links */}
      <div className="pt-4 border-t border-border/60">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-background text-[11px] font-mono text-muted border border-border/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          {project.repoStatus === "coming_soon" ? (
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted/70 bg-white/[0.03] px-2.5 py-1 rounded-md border border-border/40">
              <GithubIcon className="w-3.5 h-3.5 opacity-40" aria-hidden="true" />
              <span>Repo en preparación</span>
            </div>
          ) : project.repoStatus === "private" ? (
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted/70 bg-white/[0.03] px-2.5 py-1 rounded-md border border-border/40">
              <GithubIcon className="w-3.5 h-3.5 opacity-40" aria-hidden="true" />
              <span>Código privado</span>
            </div>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Ver código</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

type StageFilter = "Todas" | Project["status"];

interface StageMeta {
  status: StageFilter;
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  badgeClass: string;
  dotColor: string;
  icon: typeof CheckCircle2;
}

const KANBAN_STAGES: StageMeta[] = [
  {
    status: "Todas",
    id: "stage-todas",
    title: "Todas las Fases",
    shortLabel: "Todas",
    description: "Ciclo completo de ingeniería: desde prototipo experimental hasta producción",
    badgeClass: "text-foreground border-border bg-white/[0.04]",
    dotColor: "bg-foreground",
    icon: Layers,
  },
  {
    status: "En producción",
    id: "stage-produccion",
    title: "En Producción",
    shortLabel: "Producción",
    description: "Sistemas estables, operativos y verificados en terreno real",
    badgeClass: "text-accent border-accent/30 bg-accent/10",
    dotColor: "bg-accent",
    icon: CheckCircle2,
  },
  {
    status: "En desarrollo",
    id: "stage-desarrollo",
    title: "En Desarrollo Activo",
    shortLabel: "Desarrollo",
    description: "Iteración técnica continua, refactor y nuevas características",
    badgeClass: "text-accent-sky border-accent-sky/30 bg-accent-sky/10",
    dotColor: "bg-accent-sky",
    icon: Clock,
  },
  {
    status: "Prototipo",
    id: "stage-prototipo",
    title: "Laboratorio & Prototipos",
    shortLabel: "Prototipos",
    description: "Pruebas de concepto, visión artificial e inclusión asistiva",
    badgeClass: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    dotColor: "bg-amber-400",
    icon: Wrench,
  },
];

export function BentoProjects() {
  const [viewMode, setViewMode] = useState<"shelf" | "bento">("shelf");
  const [selectedCategory, setSelectedCategory] = useState<"Todos" | ProjectCategory>("Todos");
  const [selectedStage, setSelectedStage] = useState<StageFilter>("Todas");

  // Shelf Drag & Scroll State
  const shelfRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const filteredBentoProjects =
    selectedCategory === "Todos"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const filteredShelfProjects =
    selectedStage === "Todas"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.status === selectedStage);

  const activeStageMeta = KANBAN_STAGES.find((s) => s.status === selectedStage) || KANBAN_STAGES[0];

  const updateScrollState = useCallback(() => {
    const el = shelfRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);

    const progress = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));

    // Approximate active card (card width ~420px + gap 24px)
    const cardStep = 444;
    const index = Math.min(
      filteredShelfProjects.length - 1,
      Math.max(0, Math.round(el.scrollLeft / cardStep))
    );
    setActiveIndex(index);
  }, [filteredShelfProjects.length]);

  useEffect(() => {
    const el = shelfRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByOffset = (direction: "left" | "right") => {
    const el = shelfRef.current;
    if (!el) return;
    const offset = direction === "left" ? -444 : 444;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = shelfRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const el = shelfRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    el.scrollLeft = scrollLeftRef.current - walk;
    dragDistanceRef.current += Math.abs(e.movementX);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (dragDistanceRef.current > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByOffset("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByOffset("right");
    }
  };

  const handleSelectStage = (stage: StageFilter) => {
    setSelectedStage(stage);
    if (shelfRef.current) {
      shelfRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
          Portafolio de Soluciones
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Proyectos & Herramientas
        </h2>
        <p className="text-muted max-w-xl text-sm sm:text-base mb-8">
          Software construido para resolver fricciones reales en video, automatización y desarrollo digital.
        </p>

        {/* View Mode Switcher: Shelf vs Bento */}
        <div className="inline-flex items-center p-1 rounded-2xl bg-surface border border-border mb-6">
          <button
            type="button"
            onClick={() => setViewMode("shelf")}
            aria-label="Ver proyectos en carrusel horizontal con navegación continua"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              viewMode === "shelf"
                ? "bg-white/[0.08] text-foreground font-semibold shadow-sm border border-border"
                : "text-muted hover:text-foreground"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>Cinta Horizontal (Shelf)</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("bento")}
            aria-label="Ver proyectos en grilla Bento tradicional"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              viewMode === "bento"
                ? "bg-white/[0.08] text-foreground font-semibold shadow-sm border border-border"
                : "text-muted hover:text-foreground"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Grilla Bento</span>
          </button>
        </div>

        {/* CONTROLS: Shelf Stage Tags with Motion Spring */}
        {viewMode === "shelf" && (
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-surface border border-border">
              {KANBAN_STAGES.map((stage) => {
                const count =
                  stage.status === "Todas"
                    ? portfolioData.projects.length
                    : portfolioData.projects.filter((p) => p.status === stage.status).length;
                const isSelected = selectedStage === stage.status;
                const StageIcon = stage.icon;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => handleSelectStage(stage.status)}
                    className={`relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isSelected ? "text-foreground font-semibold" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="shelfStagePill"
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-border"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                    <StageIcon className="w-3.5 h-3.5 relative z-10" aria-hidden="true" />
                    <span className="relative z-10">{stage.title}</span>
                    <span className="relative z-10 text-[10px] opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Stage Description Context Banner */}
            <motion.div
              key={activeStageMeta.id}
              initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="text-xs font-mono text-muted-dark max-w-xl text-center"
            >
              <span className="text-foreground/90 font-medium">{activeStageMeta.title}: </span>
              <span>{activeStageMeta.description}</span>
            </motion.div>
          </div>
        )}

        {/* CONTROLS: Bento Category Filters */}
        {viewMode === "bento" && (
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-surface border border-border">
            {portfolioData.categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected ? "text-foreground font-semibold" : "text-muted hover:text-foreground"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="bentoCategoryPill"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-border"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* VIEW 1: HORIZONTAL SHELF (Opción A - Apple/Linear Style) */}
      {viewMode === "shelf" && (
        <div className="relative w-full">
          {/* Top Control Bar: Active position counter, hints, and arrow navigation */}
          <div className="flex items-center justify-between pb-4 mb-2 border-b border-border/40 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-surface border border-border text-foreground font-semibold">
                {String(activeIndex + 1).padStart(2, "0")} / {String(filteredShelfProjects.length).padStart(2, "0")}
              </span>
              <span className="text-muted-dark hidden sm:inline">
                Arrastra con el ratón o usa las flechas
              </span>
            </div>

            {/* Navigation Buttons (< and >) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByOffset("left")}
                disabled={!canScrollLeft}
                aria-label="Proyecto anterior"
                className={`p-2 rounded-xl bg-surface border border-border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  canScrollLeft
                    ? "hover:bg-white/[0.08] text-foreground hover:border-border-hover"
                    : "opacity-35 cursor-not-allowed text-muted"
                }`}
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByOffset("right")}
                disabled={!canScrollRight}
                aria-label="Proyecto siguiente"
                className={`p-2 rounded-xl bg-surface border border-border transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  canScrollRight
                    ? "hover:bg-white/[0.08] text-foreground hover:border-border-hover"
                    : "opacity-35 cursor-not-allowed text-muted"
                }`}
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Left and right gradient fade masks for smooth visual blending */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-14 bottom-6 w-12 bg-gradient-to-r from-background via-background/70 to-transparent z-10 hidden sm:block rounded-l-2xl" />
          )}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-14 bottom-6 w-16 bg-gradient-to-l from-background via-background/70 to-transparent z-10 hidden sm:block rounded-r-2xl" />
          )}

          {/* Horizontal Track Container */}
          <div
            ref={shelfRef}
            tabIndex={0}
            role="region"
            aria-label="Carrusel horizontal de proyectos"
            onKeyDown={handleKeyDown}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onClickCapture={handleClickCapture}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 scrollbar-none cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/40 rounded-2xl items-stretch"
          >
            <AnimatePresence mode="popLayout">
              {filteredShelfProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16, filter: "blur(8px)", scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, y: -10, filter: "blur(6px)", scale: 0.98 }}
                  transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                  className="shrink-0 flex h-full"
                >
                  <ProjectCard project={project} isShelfCard={true} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom Progress Bar Track */}
          <div className="w-full h-1 bg-surface rounded-full overflow-hidden mt-2 border border-border/40">
            <div
              style={{ width: `${scrollProgress}%` }}
              className="h-full bg-accent transition-all duration-150 ease-out rounded-full"
            />
          </div>
        </div>
      )}

      {/* VIEW 2: BENTO GRID with Gaussian Blur Reveal */}
      {viewMode === "bento" && (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredBentoProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16, filter: "blur(8px)", scale: 0.98 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)", scale: 0.98 }}
                transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                className={project.span === "md:col-span-2" ? "md:col-span-2" : "md:col-span-1"}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
