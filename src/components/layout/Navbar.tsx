"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight, Share2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { portfolioData } from "@/data/portfolio";
import { ShareModal } from "@/components/ui/ShareModal";

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const github = portfolioData.profile.socials.find((s) => s.icon === "github");

  useEffect(() => {
    if (shouldReduceMotion) return;

    let shown = false;
    const handleReady = () => {
      if (shown) return;
      shown = true;
      setIsReady(true);
    };

    window.addEventListener("portfolio:ready", handleReady);

    // Fallback timer if event already fired or preloader was omitted
    const timer = setTimeout(handleReady, 1350);

    return () => {
      window.removeEventListener("portfolio:ready", handleReady);
      clearTimeout(timer);
    };
  }, [shouldReduceMotion]);

  const showNavbar = Boolean(shouldReduceMotion) || isReady;

  const navLinks = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Colaboraciones", href: "#colaboraciones" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Stack", href: "#stack" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -32, opacity: 0 }}
      animate={showNavbar ? { y: 0, opacity: 1 } : { y: -32, opacity: 0 }}
      transition={{
        duration: 0.55,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.08,
      }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
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

        {/* Right action buttons */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShareModalOpen(true)}
            aria-label="Compartir enlace del portafolio"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-muted hover:text-foreground bg-surface hover:bg-surface-hover border border-border hover:border-border-hover rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Share2 className="w-3.5 h-3.5 text-accent-sky" aria-hidden="true" />
            <span>Compartir</span>
          </button>

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
          {/* Mobile Share Action */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setShareModalOpen(true);
            }}
            className="flex items-center justify-between px-4 py-2.5 mt-2 rounded-lg text-xs font-mono text-foreground bg-white/[0.04] border border-border cursor-pointer text-left"
          >
            <span className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-accent-sky" aria-hidden="true" />
              Compartir portafolio
            </span>
            <span className="text-[10px] text-muted">Tarjeta</span>
          </button>

          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-mono text-foreground bg-white/[0.04] border border-border"
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

      {/* Share Profile Modal Dialog */}
      <ShareModal isOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </motion.header>
  );
}
