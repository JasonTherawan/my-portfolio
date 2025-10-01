const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-6 bg-black/20 backdrop-blur-lg">
      {/* Name */}
      <div className="flex items-center">
        <button onClick={scrollToTop} className="bg-transparent border-none p-0">
          <span className="text-white font-medium text-lg tracking-tight">Jason Therawan</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-2">
        <button
          onClick={() => scrollToSection("skills")}
          className="bg-transparent text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-transparent text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="bg-transparent text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("achievements")}
          className="bg-transparent text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
        >
          Achievements
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-transparent text-white/80 hover:text-white text-sm font-light px-4 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
        >
          Contact
        </button>
      </nav>

      {/* Resume/CV Button */}
      <div>
        <a
          href="/jasontherawan-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm transition-all duration-300 hover:bg-white/20 cursor-pointer h-9 flex items-center"
        >
          Resume
        </a>
      </div>
    </header>
  );
}