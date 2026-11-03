import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { profile } = portfolioData;

  return (
    <footer className="w-full border-t border-border/40 py-12 px-4 sm:px-6 lg:px-8 mt-12 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-muted">
        {/* Left branding and disclaimer */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
          <span className="text-foreground font-semibold">shair.dev</span>
          <span className="hidden sm:inline text-muted-dark">·</span>
          <span>© 2026 {profile.name}</span>
          <span className="hidden sm:inline text-muted-dark">·</span>
          <span className="text-muted-dark">Diseñado con precisión técnica</span>
        </div>

        {/* Right back to top button */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            aria-label="Volver al inicio de la página"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border hover:border-border-hover hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
