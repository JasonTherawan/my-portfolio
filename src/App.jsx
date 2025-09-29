import Header from "./components/header"
import HeroContent from "./components/hero-content"
import ShaderBackground from "./components/shader-background"
import SkillsSection from "./components/skills-section"
import ContactSection from "./components/contact-section"

export default function App() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </ShaderBackground>
  )
}
