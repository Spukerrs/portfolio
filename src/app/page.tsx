import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoProjects } from "@/components/sections/BentoProjects";
import { Collaborations } from "@/components/sections/Collaborations";
import { StackAndWorkflow } from "@/components/sections/StackAndWorkflow";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Preloader } from "@/components/ui/Preloader";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-accent/25 selection:text-foreground">
      {/* System Entrance Preloader with Favicon Terminal Spin */}
      <Preloader />

      {/* Floating Centered Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Hero Presentation */}
        <Hero />

        {/* Pipeline & Filterable Projects */}
        <BentoProjects />

        {/* Collaborations, Alliances & Real Impact */}
        <Collaborations />

        {/* Methodology Manifesto & Technical Stack */}
        <StackAndWorkflow />

        {/* Direct Contact & Interaction */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollToTop />
    </div>
  );
}
