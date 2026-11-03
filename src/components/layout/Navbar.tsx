"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const github = portfolioData.profile.socials.find((s) => s.icon === "github");

  const navLinks = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Stack", href: "#stack" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        aria-label="Navegación principal"
        className="flex items-center justify-between w-full max-w-5xl px-4 py-2.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300"
      >
        {/* Brand identity */}
        <Link
          href="/"
          className="flex items-center gap-2 px-2 py-1 rounded-md text-sm font-mono font-semibold tracking-tight text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse" />
          shair.dev
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-muted">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full hover:text-foreground hover:bg-white/[0.04] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right action button */}
        <div className="hidden md:flex items-center gap-3">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de GitHub de Shair"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-muted hover:text-foreground bg-surface hover:bg-surface-hover border border-border hover:border-border-hover rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>spukerrs</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          className="md:hidden p-2 text-muted hover:text-foreground rounded-full hover:bg-white/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 p-4 rounded-2xl bg-surface/95 backdrop-blur-xl border border-border shadow-2xl flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-white/[0.06] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 mt-2 rounded-lg text-xs font-mono text-foreground bg-white/[0.04] border border-border"
            >
              <span className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
                github.com/spukerrs
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </header>
  );
}
