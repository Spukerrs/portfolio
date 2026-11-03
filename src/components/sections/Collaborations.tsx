import { portfolioData } from "@/data/portfolio";
import { LinkedinIcon } from "@/components/ui/BrandIcons";
import { ArrowUpRight, Users2, Calendar, Award } from "lucide-react";

export function Collaborations() {
  const { collaborations } = portfolioData;

  return (
    <section id="colaboraciones" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 border-t border-border/40">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
          Prueba Social & Trabajo en Equipo
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Colaboraciones & Alianzas
        </h2>
        <p className="text-muted max-w-2xl text-sm sm:text-base leading-relaxed">
          Proyectos desarrollados junto a instituciones académicas, equipos interdisciplinarios y emprendimientos,
          aportando arquitectura técnica, apoyo conceptual y producción de medios.
        </p>
      </div>

      {/* Collaborations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {collaborations.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 border border-accent/25 text-accent font-medium">
                  <Award className="w-3.5 h-3.5" aria-hidden="true" />
                  {item.role}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {item.period}
                </span>
              </div>

              {/* Entity & Title */}
              <div className="text-xs font-mono text-muted-dark uppercase tracking-wider mb-1">
                {item.entity}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-muted leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* Specific contribution box */}
              <div className="p-4 rounded-xl bg-background/80 border border-border/80 text-xs leading-relaxed text-muted mb-6">
                <strong className="text-foreground font-mono block mb-1">
                  Mi aporte específico:
                </strong>
                {item.myContribution}
              </div>

              {/* Team Members with LinkedIn links */}
              {item.team && item.team.length > 0 && (
                <div className="mb-6 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-dark mb-3">
                    <Users2 className="w-3.5 h-3.5 text-accent-sky" aria-hidden="true" />
                    <span className="uppercase tracking-wider">Equipo de desarrollo principal:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.team.map((member) => (
                      <a
                        key={member.name}
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-hover/80 hover:bg-white/[0.08] border border-border hover:border-border-hover text-xs font-mono text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <LinkedinIcon className="w-3 h-3 text-accent-sky" aria-hidden="true" />
                        <span>{member.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-50" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Tags and Action */}
            <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-background text-[11px] font-mono text-muted-dark border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
                >
                  <span>{item.projectUrlLabel || "Ver proyecto"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
