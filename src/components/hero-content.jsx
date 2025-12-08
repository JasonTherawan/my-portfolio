const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroContent() {
  return (
    <main className="relative flex items-center justify-center px-6 py-12 md:py-24 z-10 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-12">
        {/* Left Side - Content */}
        <div className="flex-1 text-center md:text-left w-full">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-light text-white mb-6">
            <span className="font-medium italic">Jason Therawan</span>
          </h1>

          {/* Short Biography */}
          <p className="text-lg md:text-xl font-light text-white/90 mb-4 leading-relaxed">
            Architecting Scalable Solutions, Engineering Clean Code
          </p>

          {/* Short Description */}
          <p className="text-sm font-light text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
            From system blueprints to final deployment, I specialize in the full software lifecycle. I am dedicated to building solutions that are not only powerful and scalable but also elegant and a pleasure to maintain.
          </p>

          {/* Education Details */}
          <p className="text-sm font-light text-white/70 mb-8 leading-relaxed">
            3<sup>rd</sup> year Computer Science student at BINUS University, with current GPA of 3.83.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center md:items-start w-full">
             <div className="flex flex-col sm:flex-row gap-4 w-fit sm:w-auto">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm transition-all duration-300 hover:bg-white/20 cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm transition-all duration-300 hover:bg-white/20 cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => window.open("/jasontherawan-resume.pdf", "_blank")}
                  className="md:hidden w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm transition-all duration-300 hover:bg-white/20 cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  View Resume
                </button>
             </div>
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div
              className="w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden relative"
            >
              <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
              <img
                src="/jasontherawan-profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover transform scale-130 translate-y-4"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}