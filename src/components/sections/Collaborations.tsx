"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData, type Collaboration } from "@/data/portfolio";
import { LinkedinIcon } from "@/components/ui/BrandIcons";
import {
  ArrowUpRight,
  Users2,
  Calendar,
  Award,
  X,
  Sparkles,
  Building2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export function Collaborations() {
  const { collaborations } = portfolioData;
  const [selectedCollab, setSelectedCollab] = useState<Collaboration | null>(null);

  // Strictly unique list — no artificial duplicates
  const displayCollabs = collaborations;

  // Horizontal scroll & drag state
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const hasOverflow = maxScroll > 12;
    setIsOverflowing(hasOverflow);
    setCanScrollLeft(hasOverflow && el.scrollLeft > 10);
    setCanScrollRight(hasOverflow && el.scrollLeft < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
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
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = Math.max(280, el.clientWidth * 0.8);
    const target =
      direction === "left"
        ? Math.max(0, el.scrollLeft - scrollAmount)
        : Math.min(el.scrollWidth - el.clientWidth, el.scrollLeft + scrollAmount);
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isOverflowing) return;
    const el = scrollRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    dragDistanceRef.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.2;
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

  return (
    <section id="colaboraciones" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 border-t border-border/40">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
          Red de Alianzas & Confianza
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
          Entidades & Personas con las que colaboré
        </h2>
        <p className="text-muted max-w-xl text-xs sm:text-sm">
          Colaboraciones técnicas en certámenes y producción comercial. Haz clic en cualquier tarjeta para abrir la ficha técnica y aportes de ingeniería.
        </p>
      </div>

      {/* Container with adaptive controls */}
      <div className="relative w-full">
        {/* Subheader status bar with arrow buttons when overflowing */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/40 text-xs font-mono">
          <div className="flex items-center gap-2 text-muted-dark text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>
              {collaborations.length} colaboraciones verificadas
              {isOverflowing ? " · Desliza o usa las flechas" : " · Haz clic en cualquier tarjeta"}
            </span>
          </div>

          {/* Navigation Arrows (active on mobile or when overflowing) */}
          <div className={`flex items-center gap-1.5 ${!isOverflowing ? "md:hidden" : ""}`}>
            <button
              type="button"
              onClick={() => scrollByOffset("left")}
              disabled={!canScrollLeft}
              aria-label="Colaboración anterior"
              className={`p-1.5 rounded-lg bg-surface border border-border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                canScrollLeft
                  ? "text-foreground hover:bg-white/[0.08] cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-muted"
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByOffset("right")}
              disabled={!canScrollRight}
              aria-label="Colaboración siguiente"
              className={`p-1.5 rounded-lg bg-surface border border-border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                canScrollRight
                  ? "text-foreground hover:bg-white/[0.08] cursor-pointer"
                  : "opacity-30 cursor-not-allowed text-muted"
              }`}
            >
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Dynamic Track: Side-by-side grid on desktop, horizontal snap scroll on mobile */}
        <div
          ref={scrollRef}
          tabIndex={0}
          role="region"
          aria-label="Colaboraciones y alianzas de ingeniería"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onClickCapture={handleClickCapture}
          className={`w-full py-1 ${
            isOverflowing
              ? "flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none cursor-grab active:cursor-grabbing pb-4"
              : "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          }`}
        >
          {displayCollabs.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedCollab(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedCollab(item);
                }
              }}
              aria-label={`Ver ficha técnica y aportes de colaboración en ${item.title}`}
              className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-surface/90 border border-border hover:border-accent/60 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group ${
                isOverflowing ? "w-[85vw] max-w-md shrink-0 snap-center" : "w-full"
              }`}
            >
              <div>
                {/* Card Top: Entity Icon & Live Status Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-background border border-border/80 flex items-center justify-center shrink-0 group-hover:border-accent/50 group-hover:bg-accent/5 transition-colors">
                      <Building2 className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-dark uppercase tracking-wider block">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono font-medium text-muted truncate max-w-[200px] sm:max-w-xs block">
                        {item.entity}
                      </span>
                    </div>
                  </div>

                  {item.id === "fc-construcciones-audiovisual" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-medium shrink-0">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      Activo
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-sky-500/10 border border-sky-500/25 text-sky-400 font-medium shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      Certamen
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2 flex items-center justify-between gap-2">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 opacity-70 group-hover:opacity-100" />
                </h3>

                {/* Role Pill */}
                <div className="mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-background border border-border text-foreground group-hover:border-accent/40 transition-colors">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    <span>{item.role}</span>
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Engineering Contribution Callout */}
                <div className="p-3.5 rounded-xl bg-background/70 border border-border/80 text-xs text-muted mb-4 group-hover:border-accent/30 transition-colors">
                  <div className="flex items-center gap-1.5 text-foreground font-mono text-[11px] font-semibold mb-1">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>Mi aporte específico:</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    {item.myContribution}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tags & Clickable Prompt */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between gap-2 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono text-muted-dark bg-background border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono text-accent font-semibold group-hover:underline">
                  <span>Ver ficha técnica</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Co-developers badges */}
      <div className="w-full flex flex-wrap items-center justify-center gap-2 pt-8 text-xs font-mono text-muted-dark">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-accent-sky" aria-hidden="true" />
          <span>Colegas de desarrollo:</span>
        </span>
        <a
          href="https://www.linkedin.com/in/santiago-rom%C3%A1n-4683ab326/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface hover:bg-surface-hover border border-border text-muted hover:text-foreground transition-colors"
        >
          <LinkedinIcon className="w-3 h-3 text-accent-sky" />
          <span>Santiago Román</span>
        </a>
        <a
          href="https://www.linkedin.com/in/santiago-garay-allasia-654866227/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface hover:bg-surface-hover border border-border text-muted hover:text-foreground transition-colors"
        >
          <LinkedinIcon className="w-3 h-3 text-accent-sky" />
          <span>Santiago Garay Allasia</span>
        </a>
        <a
          href="https://www.linkedin.com/in/pedone-l%C3%B3pez-faustino-3211a2412/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface hover:bg-surface-hover border border-border text-muted hover:text-foreground transition-colors"
        >
          <LinkedinIcon className="w-3 h-3 text-accent-sky" />
          <span>Faustino Pedone López</span>
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-angel-segura-marsal/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface hover:bg-surface-hover border border-border text-muted hover:text-foreground transition-colors"
        >
          <LinkedinIcon className="w-3 h-3 text-accent-sky" />
          <span>Bruno Ángel Segura Marsal</span>
        </a>
      </div>

      {/* Modal Dialog with Gaussian Blur Reveal */}
      <AnimatePresence>
        {selectedCollab && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="collab-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedCollab(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)", y: 12 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)", y: 8 }}
              transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-2xl overflow-hidden text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCollab(null)}
                aria-label="Cerrar detalles de colaboración"
                className="absolute top-5 right-5 p-2 rounded-full bg-background border border-border text-muted hover:text-foreground hover:bg-white/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>

              {/* Role and Period */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 border border-accent/25 text-accent font-medium">
                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  {selectedCollab.role}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {selectedCollab.period}
                </span>
              </div>

              <div className="text-xs font-mono text-muted-dark uppercase tracking-wider mb-1">
                {selectedCollab.entity}
              </div>
              <h3 id="collab-modal-title" className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                {selectedCollab.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-6">
                {selectedCollab.summary}
              </p>

              {/* Specific Contribution Box */}
              <div className="p-4 rounded-2xl bg-background/90 border border-border text-xs leading-relaxed text-muted mb-6">
                <strong className="text-foreground font-mono block mb-1">
                  Mi aporte específico:
                </strong>
                {selectedCollab.myContribution}
              </div>

              {/* Team Members if any */}
              {selectedCollab.team && selectedCollab.team.length > 0 && (
                <div className="mb-6 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-dark mb-3">
                    <Users2 className="w-3.5 h-3.5 text-accent-sky" aria-hidden="true" />
                    <span className="uppercase tracking-wider">Equipo de desarrollo principal:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCollab.team.map((member) => (
                      <a
                        key={member.name}
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-hover hover:bg-white/[0.08] border border-border text-xs font-mono text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <LinkedinIcon className="w-3 h-3 text-accent-sky" />
                        <span>{member.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Action footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCollab.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-background text-[11px] font-mono text-muted-dark border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedCollab.projectUrl && (
                  <a
                    href={selectedCollab.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-background text-xs font-semibold hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span>{selectedCollab.projectUrlLabel || "Ver proyecto"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
