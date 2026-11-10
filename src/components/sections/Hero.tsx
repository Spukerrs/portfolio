"use client";

import { useState, useEffect, useCallback } from "react";
import { type Variants, motion, useReducedMotion } from "motion/react";
import { toast } from "sonner";
import { Copy, Check, ArrowDown, FileText, Sparkles, Terminal, Share2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ShareModal } from "@/components/ui/ShareModal";

const TITLE_PART_1 = "AI Product Builder & ";
const TITLE_PART_2 = "Creative Technologist";
const FULL_TITLE = `${TITLE_PART_1}${TITLE_PART_2}`;

type TypingPhase = "idle" | "typing-title" | "revealing-pitch" | "done";

export function Hero() {
  const { profile } = portfolioData;
  const FULL_PITCH = profile.pitch;
  const shouldReduceMotion = useReducedMotion();

  const [copied, setCopied] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const isReduced = Boolean(shouldReduceMotion);

  const [phase, setPhase] = useState<TypingPhase>("idle");
  const [titleCharCount, setTitleCharCount] = useState<number>(0);

  const activePhase = isReduced ? "done" : phase;
  const activeTitleCount = isReduced ? FULL_TITLE.length : titleCharCount;
  const isPitchRevealed = activePhase === "revealing-pitch" || activePhase === "done";

  const handleSkipAnimation = useCallback(() => {
    if (activePhase !== "done") {
      setTitleCharCount(FULL_TITLE.length);
      setPhase("done");
    }
  }, [activePhase]);

  // Synchronize start with preloader dismissal or fallback timeout
  useEffect(() => {
    if (shouldReduceMotion) return;

    let started = false;
    const startTitleTyping = () => {
      if (started) return;
      started = true;
      setPhase("typing-title");
    };

    window.addEventListener("portfolio:ready", startTitleTyping);

    // Fallback timer if event already fired or preloader was skipped
    const fallbackTimer = setTimeout(startTitleTyping, 1400);

    return () => {
      window.removeEventListener("portfolio:ready", startTitleTyping);
      clearTimeout(fallbackTimer);
    };
  }, [shouldReduceMotion]);

  // Title typing stream
  useEffect(() => {
    if (phase !== "typing-title") return;

    if (titleCharCount < FULL_TITLE.length) {
      const char = FULL_TITLE[titleCharCount];
      let delay = 22;
      if (char === " ") delay = 28;
      if (char === "&") delay = 45;

      const timeout = setTimeout(() => {
        setTitleCharCount((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      // Title complete: pause 120ms then trigger pitch diagonal shine sweep
      const timeout = setTimeout(() => {
        setPhase("revealing-pitch");
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [phase, titleCharCount]);

  // Pitch reveal timer: transition from revealing to done once diagonal shine sweep finishes
  useEffect(() => {
    if (phase !== "revealing-pitch") return;

    const timeout = setTimeout(() => {
      setPhase("done");
    }, 950);
    return () => clearTimeout(timeout);
  }, [phase]);

  const part1Length = TITLE_PART_1.length;
  const part1VisibleCount = Math.min(activeTitleCount, part1Length);
  const part1Visible = TITLE_PART_1.slice(0, part1VisibleCount);
  const part1Hidden = TITLE_PART_1.slice(part1VisibleCount);

  const part2Count = Math.max(0, activeTitleCount - part1Length);
  const part2Visible = TITLE_PART_2.slice(0, part2Count);
  const part2Hidden = TITLE_PART_2.slice(part2Count);

  const showPart1Cursor = activePhase === "typing-title" && activeTitleCount <= part1Length;
  const showPart2Cursor = activePhase === "typing-title" && activeTitleCount > part1Length;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Correo copiado al portapapeles", {
        description: profile.email,
        duration: 3500,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("No se pudo copiar el correo");
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      aria-label="Presentación principal"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <noscript>
        <style>{`
          .typewriter-hidden {
            opacity: 1 !important;
            user-select: text !important;
            pointer-events: auto !important;
          }
        `}</style>
      </noscript>

      {/* Background technical grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center max-w-3xl"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 border border-border text-xs font-mono text-muted shadow-sm hover:border-border-hover transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span>{profile.status.label}</span>
          </div>
        </motion.div>

        {/* Editorial Portrait Card */}
        {profile.avatarUrl && (
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative group w-36 h-44 sm:w-44 sm:h-52 md:w-48 md:h-56 rounded-3xl p-1.5 bg-gradient-to-b from-white/15 via-surface to-surface border border-border/80 hover:border-accent/40 shadow-[0_16px_48px_rgba(0,0,0,0.65)] overflow-hidden mx-auto transition-all duration-300 hover:scale-[1.02]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatarUrl}
                alt={`Retrato profesional de ${profile.name} — AI Product Builder & Creative Technologist`}
                width={192}
                height={224}
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-[22px] object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>
        )}

        {/* Name and Role Subtitle */}
        <motion.div variants={itemVariants} className="mb-3">
          <span className="inline-block text-xs sm:text-sm font-mono tracking-wider uppercase text-muted-dark">
            {profile.name} · <span className="text-accent">{profile.alias}</span>
          </span>
        </motion.div>

        {/* Main Title (Editorial hierarchy with typewriter animation) */}
        <motion.h1
          variants={itemVariants}
          onClick={handleSkipAnimation}
          title={phase !== "done" ? "Haz clic para completar la escritura" : undefined}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6 select-text cursor-default"
        >
          <span className="sr-only">{FULL_TITLE}</span>
          <span aria-hidden="true">
            <span>{part1Visible}</span>
            {showPart1Cursor && (
              <span className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.85em] bg-accent align-baseline ml-1 rounded-xs shadow-[0_0_12px_rgba(16,185,129,0.9)] animate-cursor-blink select-none" />
            )}
            <span className="opacity-0 select-none pointer-events-none typewriter-hidden">
              {part1Hidden}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted">
              {part2Visible}
            </span>
            {showPart2Cursor && (
              <span className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.85em] bg-accent align-baseline ml-1 rounded-xs shadow-[0_0_12px_rgba(16,185,129,0.9)] animate-cursor-blink select-none" />
            )}
            <span className="opacity-0 select-none pointer-events-none typewriter-hidden text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted">
              {part2Hidden}
            </span>
          </span>
        </motion.h1>

        {/* Pitch Statement with diagonal reveal from top-left to bottom-right and shine beam */}
        <motion.div
          variants={itemVariants}
          onClick={handleSkipAnimation}
          title={activePhase !== "done" ? "Haz clic para completar la revelación" : undefined}
          className="relative max-w-2xl mb-6 select-text cursor-default p-2 -m-2 rounded-xl"
        >
          {/* Accessible text for screen readers and SEO */}
          <p className="sr-only">{FULL_PITCH}</p>

          {/* Visual text container with diagonal mask reveal */}
          <div
            aria-hidden="true"
            className={`text-base sm:text-lg md:text-xl text-muted leading-relaxed diagonal-reveal-mask ${
              isPitchRevealed ? "revealed" : ""
            }`}
          >
            <span>{FULL_PITCH}</span>
            {/* Persistent blinking typing cursor at the end */}
            {isPitchRevealed && (
              <span className="inline-block w-[2px] sm:w-[2.5px] h-[1.15em] bg-accent align-[-0.15em] ml-1 rounded-xs shadow-[0_0_8px_rgba(16,185,129,0.85)] animate-cursor-blink select-none" />
            )}
          </div>

          {/* Diagonal luminous shine beam sweeping from top-left to bottom-right */}
          {activePhase === "revealing-pitch" && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
            >
              <div className="absolute w-[220%] h-[220%] -top-[60%] -left-[60%] bg-[linear-gradient(135deg,transparent_42%,rgba(16,185,129,0.3)_47%,rgba(255,255,255,0.85)_50%,rgba(16,185,129,0.35)_53%,transparent_58%)] animate-diagonal-shine" />
            </div>
          )}
        </motion.div>

        {/* Introductory Personal Philosophy Callout */}
        <motion.div
          variants={itemVariants}
          className="mb-10 max-w-2xl p-4 sm:p-5 rounded-2xl bg-surface/80 border border-border/80 text-left relative overflow-hidden group hover:border-accent/40 transition-colors shadow-sm"
        >
          <div className="flex items-start gap-3.5">
            <span className="w-1.5 h-16 rounded-full bg-accent shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              <strong className="text-foreground font-semibold">Mi filosofía: </strong>
              {profile.philosophy.intro}
            </p>
          </div>
        </motion.div>

        {/* Interactive Actions CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-white transition-all shadow-[0_0_24px_rgba(243,244,246,0.15)] hover:shadow-[0_0_32px_rgba(243,244,246,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Explorar proyectos</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>

          {/* Download CV CTA */}
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface hover:bg-surface-hover border border-border hover:border-border-hover text-foreground font-medium text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FileText className="w-4 h-4 text-muted" aria-hidden="true" />
            <span>Descargar CV</span>
          </a>

          {/* Share Profile Action */}
          <button
            type="button"
            onClick={() => setShareModalOpen(true)}
            aria-label="Compartir portafolio profesional"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-surface hover:bg-surface-hover border border-border hover:border-border-hover text-foreground font-medium text-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Share2 className="w-4 h-4 text-muted group-hover:text-foreground" aria-hidden="true" />
            <span>Compartir</span>
          </button>

          {/* Copy Email Fast Action */}
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copiar dirección de correo electrónico al portapapeles"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-surface hover:bg-surface-hover border border-border hover:border-border-hover text-xs font-mono text-muted hover:text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="text-accent">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span>{profile.email}</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div
          variants={itemVariants}
          className="mt-14 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-muted"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>DaVinci Resolve API & Python</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-accent-sky" aria-hidden="true" />
            <span>Orquestación de Agentes IA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>{profile.location}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Share Profile Modal Dialog */}
      <ShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </section>
  );
}
