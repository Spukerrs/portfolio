import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoProjects } from "@/components/sections/BentoProjects";
import { StackAndWorkflow } from "@/components/sections/StackAndWorkflow";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-accent/25 selection:text-foreground">
      {/* Floating Centered Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Presentation */}
        <Hero />

        {/* Bento Grid with Filterable Projects */}
        <BentoProjects />

        {/* Methodology Manifesto & Technical Stack */}
        <StackAndWorkflow />

        {/* Direct Contact & Interaction */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
