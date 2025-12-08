import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    return true;
  }
  return false;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-6 bg-black/20 backdrop-blur-lg border-b border-white/5">
        {/* Name / Logo */}
        <div className="flex items-center z-50">
          <button onClick={scrollToTop} className="bg-transparent border-none p-0 cursor-pointer">
            <span className="text-white font-medium text-lg md:text-xl tracking-tight">Jason Therawan</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="bg-transparent text-white/80 hover:text-white text-sm font-light px-3 py-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 z-50">
          {/* Resume Button (Desktop) */}
          <a
            href="/jasontherawan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-6 py-2 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm transition-all duration-300 hover:bg-white/20 cursor-pointer h-9 items-center"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#1a1a1a] z-[100] flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button inside menu for easier access */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
        >
          <X size={32} />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-white text-2xl md:text-3xl font-light tracking-wide hover:text-blue-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="w-16 h-px bg-white/10 my-4" />

        {/* Mobile Resume Button */}
        <a
          href="/jasontherawan-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 text-white border border-white/20 font-bold text-lg hover:bg-white/20 transition-all"
        >
          <FileText size={20} />
          View Resume
        </a>
      </div>
    </>
  );
}