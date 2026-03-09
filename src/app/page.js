import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import LandingSection from "./components/sections/LandingSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ServicesSection from "./components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}