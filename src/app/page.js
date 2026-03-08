import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import LandingSection from "./components/sections/LandingSection";
import ProjectsSection from "./components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}