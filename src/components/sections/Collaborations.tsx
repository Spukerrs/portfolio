"use client";

import { useState } from "react";
import { portfolioData, type Collaboration } from "@/data/portfolio";
import { LinkedinIcon } from "@/components/ui/BrandIcons";
import { ArrowUpRight, Users2, Calendar, Award, X, Sparkles, Building2 } from "lucide-react";

export function Collaborations() {
  const { collaborations } = portfolioData;
  const [selectedCollab, setSelectedCollab] = useState<Collaboration | null>(null);

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
          Haz clic en cualquier colaboración para ver los detalles técnicos y el rol específico desarrollado.
        </p>
      </div>

      {/* Infinite scrolling ticker / ribbon */}
      <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
          {[...collaborations, ...collaborations].map((item, index) => (
            <button
              key={`${item.id}-${index}`}
              type="button"
              onClick={() => setSelectedCollab(item)}
              className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface border border-border hover:border-accent/50 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-background border border-border/80 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                <Building2 className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>

              <div>
                <div className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors flex items-center gap-1.5 whitespace-nowrap">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-3 h-3 text-muted group-hover:text-accent opacity-60" aria-hidden="true" />
                </div>
                <div className="text-[11px] font-mono text-muted-dark whitespace-nowrap">
                  {item.entity} · <span className="text-muted">{item.role}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Co-developers badges */}
      <div className="w-full flex flex-wrap items-center justify-center gap-2 pt-6 text-xs font-mono text-muted-dark">
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

      {/* Modal Dialog with Details */}
      {selectedCollab && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="collab-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCollab(null)}
        >
          <div
            className="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-surface border border-border shadow-2xl overflow-hidden text-left animate-in zoom-in-95 duration-200"
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
          </div>
        </div>
      )}
    </section>
  );
}
