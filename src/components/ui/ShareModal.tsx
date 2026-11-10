"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import {
  X,
  Copy,
  Check,
  Share2,
  ExternalLink,
  MessageCircle,
  Send,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/BrandIcons";
import { portfolioData } from "@/data/portfolio";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://shaircuello.vercel.app";

  const shareText = `${profile.name} — ${profile.role}. Soluciones de software, automatización e IA.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Enlace copiado al portapapeles", {
        description: shareUrl,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${profile.name} — ${profile.role}`,
          text: shareText,
          url: shareUrl,
        });
        toast.success("Compartido con éxito");
        onClose();
      } catch (err: unknown) {
        if ((err as Error).name !== "AbortError") {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="share-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 14 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)", y: 10 }}
            transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-lg p-6 sm:p-7 rounded-3xl bg-surface border border-border shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ventana de compartir"
              className="absolute top-5 right-5 p-2 rounded-full bg-background border border-border text-muted hover:text-foreground hover:bg-white/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Header */}
            <div className="mb-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent block mb-1">
                Tarjeta de Difusión
              </span>
              <h3 id="share-modal-title" className="text-xl sm:text-2xl font-bold text-foreground">
                Compartir Portafolio
              </h3>
              <p className="text-xs text-muted mt-1">
                Envía este perfil profesional o cópialo directamente para redes y mensajería.
              </p>
            </div>

            {/* Social Card Miniature Preview (OpenGraph Card) */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-border/80 bg-background group relative shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/opengraph-image.png"
                alt="Vista previa de tarjeta OpenGraph de Shair Cuello"
                width={1200}
                height={630}
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-[1200/630] object-cover"
              />
              <div className="p-3 bg-surface/90 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-dark truncate">spukerrs.vercel.app</span>
                <span className="text-accent text-[11px] font-semibold">OpenGraph 1200×630</span>
              </div>
            </div>

            {/* Direct Social Channels Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-background hover:bg-white/[0.06] border border-border text-muted hover:text-foreground transition-all text-xs font-mono group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-background hover:bg-white/[0.06] border border-border text-muted hover:text-foreground transition-all text-xs font-mono group"
              >
                <LinkedinIcon className="w-4 h-4 text-accent-sky group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-background hover:bg-white/[0.06] border border-border text-muted hover:text-foreground transition-all text-xs font-mono group"
              >
                <ExternalLink className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                <span>X / Twitter</span>
              </a>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-background hover:bg-white/[0.06] border border-border text-muted hover:text-foreground transition-all text-xs font-mono group"
              >
                <Send className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Telegram</span>
              </a>
            </div>

            {/* Direct Link Copy Input Bar */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-background border border-border mb-3">
              <input
                type="text"
                readOnly
                value={shareUrl}
                aria-label="Enlace a compartir"
                className="flex-1 bg-transparent px-3 text-xs font-mono text-muted focus:outline-none select-all"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-background text-xs font-semibold hover:bg-accent/90 transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Native Share Trigger if supported */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={handleNativeShare}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-dark hover:text-foreground transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-accent-sky" aria-hidden="true" />
                <span>Abrir opciones nativas del dispositivo</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

