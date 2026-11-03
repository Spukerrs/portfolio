import { portfolioData } from "@/data/portfolio";
import { CheckCircle2, Cpu, Layers, Workflow } from "lucide-react";

export function StackAndWorkflow() {
  const { workflow, skills, profile } = portfolioData;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-border/40">
      {/* Editorial AI Product Builder Manifesto */}
      <div id="metodologia" className="mb-24 scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
            Metodología & Filosofía
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Cómo construyo software con IA
          </h2>
          <p className="text-muted max-w-2xl text-sm sm:text-base leading-relaxed">
            No utilizo IA para generar código genérico a ciegas. La empleo como un multiplicador de ingeniería:
            especificación técnica rigurosa, orquestación de agentes especializados y auditoría humana línea por línea.
          </p>
        </div>

        {/* Engineering & Ethics Quote Block */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-surface via-surface to-surface-hover border border-border/80 relative overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              Manifiesto de Trabajo & Ética
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-accent/10 border border-accent/25 text-accent">
              {profile.philosophy.highlight}
            </span>
          </div>
          <blockquote className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed italic border-l-2 border-accent pl-4 my-2">
            &ldquo;{profile.philosophy.quote}&rdquo;
          </blockquote>
        </div>

        {/* 3-Step Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflow.map((step) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-8 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-border-hover transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-mono font-bold text-accent">
                    {step.step}
                  </span>
                  <Workflow className="w-5 h-5 text-muted-dark" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <span className="text-[11px] font-mono uppercase text-muted-dark tracking-wider block mb-2">
                  Entregables:
                </span>
                <ul className="space-y-1.5 text-xs font-mono text-muted">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack & Technical Skills Section */}
      <div id="stack" className="scroll-mt-24">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-accent-sky mb-2">
            Capacidades Técnicas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Stack & Herramientas
          </h2>
          <p className="text-muted max-w-xl text-sm sm:text-base">
            Tecnologías de producción seleccionadas para rendimiento, fiabilidad y cero fricción operativa.
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, idx) => {
            const icons = [Cpu, Workflow, Layers, CheckCircle2];
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-border-hover transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-foreground font-semibold">
                    <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                    <h3 className="text-base font-bold">{category.title}</h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-accent/10 border border-accent/30 text-accent font-medium"
                          : "bg-background border border-border/60 text-muted"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
