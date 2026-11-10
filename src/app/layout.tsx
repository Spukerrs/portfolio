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
  metadataBase: new URL("https://spukerrs.vercel.app"),
  alternates: {
    canonical: "https://spukerrs.vercel.app",
  },
  title: {
    default: "Shair Cuello — AI Product Builder & Creative Technologist",
    template: "%s | Shair Cuello",
  },
  description:
    "Transformo problemas en software funcional, herramientas de automatización y flujos audiovisuales con arquitectura de producto e inteligencia artificial.",
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
    url: "https://spukerrs.vercel.app",
    title: "Shair Cuello — AI Product Builder & Creative Technologist",
    description:
      "Transformo problemas en software funcional, herramientas de automatización y flujos audiovisuales con arquitectura de producto e inteligencia artificial.",
    siteName: "Shair Cuello Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shair Fernando Cuello López — AI Product Builder & Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shair Cuello — AI Product Builder & Creative Technologist",
    description:
      "Transformo problemas en software funcional, herramientas de automatización y flujos audiovisuales con arquitectura de producto e inteligencia artificial.",
    creator: "@spukerrs",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://spukerrs.vercel.app/#person",
      name: "Shair Fernando Cuello López",
      alternateName: "spukerrs",
      url: "https://spukerrs.vercel.app",
      image: "https://spukerrs.vercel.app/profile/avatar.webp",
      jobTitle: "AI Product Builder & Creative Technologist",
      description:
        "Transformo problemas en software funcional, herramientas de automatización y flujos audiovisuales con arquitectura de producto e inteligencia artificial.",
      email: "cuello.shair@gmail.com",
      sameAs: [
        "https://github.com/Spukerrs",
        "https://www.linkedin.com/in/shair-fernando-cuello-lopez-86364529a",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Agentic Workflows",
        "DaVinci Resolve API",
        "Python",
        "TypeScript",
        "Next.js",
        "Product Engineering",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://spukerrs.vercel.app/#website",
      url: "https://spukerrs.vercel.app",
      name: "Shair Cuello Portfolio",
      alternateName: "spukerrs.dev",
      description:
        "Transformo problemas en software funcional, herramientas de automatización y flujos audiovisuales con arquitectura de producto e inteligencia artificial.",
      publisher: {
        "@id": "https://spukerrs.vercel.app/#person",
      },
      inLanguage: "es",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://spukerrs.vercel.app/#profilepage",
      url: "https://spukerrs.vercel.app",
      name: "Shair Cuello — AI Product Builder & Creative Technologist",
      isPartOf: {
        "@id": "https://spukerrs.vercel.app/#website",
      },
      mainEntity: {
        "@id": "https://spukerrs.vercel.app/#person",
      },
      dateCreated: "2026-11-02",
      dateModified: "2026-11-10",
      inLanguage: "es",
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
