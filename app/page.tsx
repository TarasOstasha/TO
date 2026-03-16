import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageTransition } from "@/components/layout/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ServicesSection />
      <ContactSection />
    </PageTransition>
  );
}

