"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, Clock, Wrench } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
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

export function BentoProjects() {
  const [selectedCategory, setSelectedCategory] = useState<"Todos" | ProjectCategory>("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: Project["status"]) => {
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

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
          Portafolio de Soluciones
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Proyectos & Herramientas
        </h2>
        <p className="text-muted max-w-xl text-sm sm:text-base">
          Software construido para resolver fricciones reales en video, automatización y desarrollo digital.
        </p>

        {/* Category Filters with layoutId */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-surface border border-border">
          {portfolioData.categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected ? "text-foreground font-semibold" : "text-muted hover:text-foreground"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="categoryPill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-border"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const statusConfig = getStatusBadge(project.status);
            const StatusIcon = statusConfig.icon;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 ${
                  project.span === "md:col-span-2" ? "md:col-span-2" : "md:col-span-1"
                }`}
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

                  {/* Visualizer / Interactive Abstract Mockup */}
                  <div className="mb-6">
                    <ProjectVisual project={project} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-muted mb-4">{project.tagline}</p>

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
                        ⚡ {project.metrics}
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
                    {project.githubUrl && (
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
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
