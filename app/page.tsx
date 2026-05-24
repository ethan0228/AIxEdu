import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InsightsSection } from "@/components/InsightsSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { TalksSection } from "@/components/TalksSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <InsightsSection />
        <TalksSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
