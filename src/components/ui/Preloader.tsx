"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    // Lock body scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Progress bar fill
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic micro-increments
        return Math.min(100, prev + Math.floor(Math.random() * 14 + 10));
      });
    }, 45);

    // Trigger spin when loading completes
    const spinTimer = setTimeout(() => {
      setIsSpinning(true);
    }, 800);

    // Dismiss preloader and notify hero section
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      window.dispatchEvent(new CustomEvent("portfolio:ready"));
      document.body.style.overflow = originalOverflow;
    }, 1250);

    return () => {
      clearInterval(interval);
      clearTimeout(spinTimer);
      clearTimeout(exitTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="portfolio-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
            transition: {
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1],
            },
          }}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-background select-none pointer-events-auto"
          aria-label="Cargando portafolio profesional"
          role="status"
        >
          {/* Subtle technical background grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />

          {/* Radial ambient glow behind icon */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_65%)]"
            aria-hidden="true"
          />

          {/* Central Favicon Terminal Icon Card with Spin Animation */}
          <div className="relative flex flex-col items-center">
            {/* Emerald flare burst during spin */}
            {isSpinning && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.9 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 rounded-full bg-accent/30 blur-xl"
                aria-hidden="true"
              />
            )}

            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{
                scale: isSpinning ? [1, 1.14, 0.96] : 1,
                rotate: isSpinning ? 360 : 0,
                opacity: 1,
              }}
              transition={
                isSpinning
                  ? {
                      duration: 0.6,
                      ease: [0.34, 1.56, 0.64, 1],
                    }
                  : {
                      duration: 0.4,
                      ease: "easeOut",
                    }
              }
              className="relative p-3 rounded-2xl bg-surface/90 border border-border shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_16px_rgba(16,185,129,0.35)]"
                aria-hidden="true"
              >
                <rect
                  width="32"
                  height="32"
                  rx="8"
                  fill="#0e1017"
                  stroke="rgba(255, 255, 255, 0.16)"
                  strokeWidth="1.5"
                />
                {/* Terminal prompt symbol > */}
                <path
                  d="M8 11 L14 16 L8 21"
                  stroke="#f3f4f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Emerald active indicator */}
                <circle cx="21" cy="20" r="2.5" fill="#10b981" />
              </svg>
            </motion.div>

            {/* Technical progress loader strip */}
            <div className="mt-8 flex flex-col items-center gap-2.5">
              <div className="w-36 sm:w-44 h-1 rounded-full bg-surface-hover overflow-hidden border border-border/40">
                <motion.div
                  className="h-full bg-accent shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-muted-dark">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <span>Iniciando entorno</span>
                <span className="text-muted font-semibold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
