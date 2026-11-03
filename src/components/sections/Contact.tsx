"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, Mail, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
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

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20">
      <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-surface border border-border overflow-hidden text-center flex flex-col items-center">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Small header pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border text-xs font-mono text-muted mb-6">
          <MessageSquare className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
          <span>Hablemos de ingeniería & producto</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          ¿Tienes un proyecto o desafío técnico en mente?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-muted max-w-lg mb-10 leading-relaxed">
          Estoy disponible para consultoría, desarrollo de plugins/automatizaciones para DaVinci Resolve, pipelines en
          Python o creación de productos digitales asistidos por IA.
        </p>

        {/* Email Copy Card */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto p-2 rounded-2xl bg-background/90 border border-border/80 shadow-inner mb-8">
          <div className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-foreground select-all">
            <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>{profile.email}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copiar correo de contacto al portapapeles"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-border text-xs font-medium text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span className="text-accent font-semibold">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copiar</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-background text-xs font-semibold hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Escribir</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-4 text-sm font-mono text-muted">
          {profile.socials.map((social) => {
            const Icon = social.icon === "github" ? GithubIcon : social.icon === "linkedin" ? LinkedinIcon : Mail;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar perfil en ${social.name}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-white/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
