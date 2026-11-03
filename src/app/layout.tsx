import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shaircuello.vercel.app"),
  title: {
    default: "Shair Cuello — AI Product Builder & Creative Technologist",
    template: "%s | Shair Cuello",
  },
  description:
    "Transformo problemas reales en software funcional, herramientas de automatización y flujos audiovisuales combinando arquitectura de producto e inteligencia artificial.",
  keywords: [
    "Shair Fernando Cuello López",
    "spukerrs",
    "AI Product Builder",
    "Creative Technologist",
    "DaVinci Resolve Automation",
    "Python Developer",
    "Next.js Portfolio",
    "Agentic Workflows",
  ],
  authors: [{ name: "Shair Fernando Cuello López", url: "https://github.com/spukerrs" }],
  creator: "Shair Cuello",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://shaircuello.vercel.app",
    title: "Shair Cuello — AI Product Builder & Creative Technologist",
    description:
      "Transformo problemas reales en software funcional, herramientas de automatización y flujos audiovisuales combinando arquitectura de producto e inteligencia artificial.",
    siteName: "Shair Cuello Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shair Cuello — AI Product Builder & Creative Technologist",
    description:
      "Transformo problemas reales en software funcional, herramientas de automatización y flujos audiovisuales combinando arquitectura de producto e inteligencia artificial.",
    creator: "@spukerrs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/25 selection:text-foreground">
        {children}
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#11131a",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#f3f4f6",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
