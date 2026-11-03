"use client";

import { useState } from "react";
import { type Variants, motion } from "motion/react";
import { toast } from "sonner";
import { Copy, Check, ArrowDown, FileText, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

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

        {/* Optional Editorial Avatar / Portrait */}
        {profile.avatarUrl && (
          <motion.div variants={itemVariants} className="mb-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-white/10 to-transparent border border-border shadow-xl overflow-hidden mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </motion.div>
        )}

        {/* Name and Role Subtitle */}
        <motion.div variants={itemVariants} className="mb-3">
          <span className="inline-block text-xs sm:text-sm font-mono tracking-wider uppercase text-muted-dark">
            {profile.name} · <span className="text-accent">{profile.alias}</span>
          </span>
        </motion.div>

        {/* Main Title (Editorial hierarchy) */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6"
        >
          AI Product Builder &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted">
            Creative Technologist
          </span>
        </motion.h1>

        {/* Pitch Statement */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10"
        >
          {profile.pitch}
        </motion.p>

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
            <span>Córdoba, Argentina</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
