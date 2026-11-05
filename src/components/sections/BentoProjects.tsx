"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Wrench,
  LayoutGrid,
  Kanban as KanbanIcon,
  Layers,
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
          <span className="text-muted">DaVinci Timeline: 14 cortes aplicados</span>
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
  isKanbanCard?: boolean;
}

function ProjectCard({ project, layoutSpanClass = "", isKanbanCard = false }: ProjectCardProps) {
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
        isKanbanCard ? "p-5 sm:p-6" : "p-6"
      } rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 ${layoutSpanClass}`}
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
        <div className="mb-6">
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
  const [viewMode, setViewMode] = useState<"bento" | "kanban">("kanban");
  const [selectedCategory, setSelectedCategory] = useState<"Todos" | ProjectCategory>("Todos");
  const [selectedStage, setSelectedStage] = useState<StageFilter>("Todas");

  const filteredBentoProjects =
    selectedCategory === "Todos"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const filteredKanbanProjects =
    selectedStage === "Todas"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.status === selectedStage);

  const activeStageMeta = KANBAN_STAGES.find((s) => s.status === selectedStage) || KANBAN_STAGES[0];

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
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

        {/* View Mode Switcher: Bento vs Kanban */}
        <div className="inline-flex items-center p-1 rounded-2xl bg-surface border border-border mb-6">
          <button
            type="button"
            onClick={() => setViewMode("kanban")}
            aria-label="Ver proyectos en pipeline Kanban por ciclo de vida"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              viewMode === "kanban"
                ? "bg-white/[0.08] text-foreground font-semibold shadow-sm border border-border"
                : "text-muted hover:text-foreground"
            }`}
          >
            <KanbanIcon className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Pipeline Kanban</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("bento")}
            aria-label="Ver proyectos en grilla Bento"
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

        {/* CONTROLS: Bento Category Filters with Motion Blur */}
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
                      layoutId="categoryPill"
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

        {/* CONTROLS: Kanban Stage Tags (PC & Mobile Unified) */}
        {viewMode === "kanban" && (
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
                    onClick={() => setSelectedStage(stage.status)}
                    className={`relative flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isSelected ? "text-foreground font-semibold" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="kanbanStagePill"
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
      </div>

      {/* VIEW 1: BENTO GRID with Gaussian Blur Reveal */}
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

      {/* VIEW 2: KANBAN PIPELINE (Etiquetas + Scroll Vertical en PC y Móvil) */}
      {viewMode === "kanban" && (
        <div className="relative w-full">
          {selectedStage === "Todas" ? (
            /* Todas las fases agrupadas verticalmente para escrollear continuo */
            <div className="space-y-12">
              {KANBAN_STAGES.filter((s) => s.status !== "Todas").map((stage) => {
                const stageProjects = portfolioData.projects.filter((p) => p.status === stage.status);
                const StageIcon = stage.icon;

                return (
                  <section key={stage.id} className="scroll-mt-24">
                    {/* Sticky Engineering Phase Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-border/60">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${stage.badgeClass}`}
                        >
                          <StageIcon className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{stage.title}</span>
                        </span>
                        <span className="text-xs font-mono text-muted">
                          {stageProjects.length} {stageProjects.length === 1 ? "proyecto" : "proyectos"}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-muted-dark">
                        {stage.description}
                      </p>
                    </div>

                    {/* Vertical Cards Grid with Blur Reveal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {stageProjects.map((project) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, y: 16, filter: "blur(8px)", scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                          transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <ProjectCard project={project} isKanbanCard={true} />
                        </motion.div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            /* Fase específica seleccionada: scroll vertical fluido de esa etiqueta */
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredKanbanProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 18, filter: "blur(10px)", scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, y: -12, filter: "blur(8px)", scale: 0.97 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <ProjectCard project={project} isKanbanCard={true} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
}
