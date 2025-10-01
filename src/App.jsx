import Header from "./components/header"
import HeroContent from "./components/hero-content"
import ShaderBackground from "./components/shader-background"
import SkillsSection from "./components/skills-section"
import ProjectsSection from "./components/projects-section"
import ExperiencesSection from "./components/experiences-section"
import AchievementsSection from "./components/achievements-section"
import ContactSection from "./components/contact-section"

export default function App() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="experience">
        <ExperiencesSection />
      </div>
      <div id="achievements">
        <AchievementsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </ShaderBackground>
  )
}