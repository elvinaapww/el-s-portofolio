import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackgroundGrid } from "@/components/layout/background-grid";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { LoadingScreen } from "@/components/motion/animations";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <BackgroundGrid />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
