const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroContent() {
  return (
    <main className="relative flex items-center justify-center px-8 py-24 z-10">
      <div className="max-w-6xl w-full flex items-center justify-between gap-12">
        {/* Left Side - Content */}
        <div className="flex-1">
          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-light text-white mb-6">
            <span className="font-medium italic">Jason Therawan</span>
          </h1>

          {/* Short Biography */}
          <p className="text-lg md:text-xl font-light text-white/90 mb-4 leading-relaxed">
            Architecting Scalable Solutions, Engineering Clean Code
          </p>

          {/* Short Description */}
          <p className="text-sm font-light text-white/70 mb-8 leading-relaxed">
            From system blueprints to final deployment, I specialize in the full software lifecycle. I am dedicated to building solutions that are not only powerful and scalable but also elegant and a pleasure to maintain.
          </p>

          {/* Education Details */}
          <p className="text-sm font-light text-white/70 mb-8 leading-relaxed">
            3<sup>rd</sup> year Computer Science student at BINUS University, with current GPA of 3.83.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm transition-all duration-300 hover:bg-white/20 cursor-pointer flex items-center"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-full bg-white/10 text-white border border-white/20 font-normal text-sm transition-all duration-300 hover:bg-white/20 cursor-pointer flex items-center"
            >
              Contact Me
            </button>
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