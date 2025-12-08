import { useState, useEffect } from "react";
import { Menu, X, FileText, ChevronRight } from "lucide-react";

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
      <header className="sticky top-0 z-40 flex items-center justify-between p-4 md:p-6 bg-black/20 backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center">
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
        <div className="flex items-center gap-3">
          {/* Resume Button (Desktop Only) */}
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
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#1a1a1a] border-l border-white/10 z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col overflow-x-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <span className="text-white font-bold text-lg">Menu</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto py-4 px-2 overflow-x-hidden">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full flex items-center justify-between p-4 text-white/90 hover:bg-white/5 rounded-xl transition-all group"
              >
                <span className="text-lg font-light">{item.label}</span>
                <ChevronRight size={16} className="text-white/30 group-hover:text-white/70 transition-colors" />
              </button>
            ))}
          </nav>

          <div className="h-px w-[90%] bg-white/10 my-6 mx-auto" />

          <div className="px-4">
             <p className="text-white/40 text-xs uppercase font-bold tracking-wider mb-4 px-2">Resources</p>
             <a
              href="/jasontherawan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 text-white/90 hover:bg-white/5 rounded-xl transition-all"
            >
              <FileText size={20} className="text-blue-400" />
              <span className="text-lg font-light">View Resume</span>
            </a>
          </div>
        </div>
        
        {/* Drawer Footer */}
        <div className="p-6 border-t border-white/5">
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Jason Therawan
          </p>
        </div>
      </div>
    </>
  );
}