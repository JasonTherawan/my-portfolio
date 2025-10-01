const SkillBubble = ({ skill, delay = 0 }) => {
  return (
    <div
      className="inline-flex items-center px-4 py-2 mx-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium whitespace-nowrap shadow-lg hover:bg-white/20 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </div>
  )
}

const MarqueeRow = ({ skills, direction = "left", speed = "slow" }) => {
  const animationClass = direction === "left" ? `animate-marquee-${speed}` : `animate-marquee-reverse-${speed}`

  return (
    <div className="relative overflow-hidden py-4">
      <div className={`flex ${animationClass}`}>
        {/* First set of skills */}
        <div className="flex shrink-0">
          {skills.map((skill, index) => (
            <SkillBubble key={`first-${index}`} skill={skill} delay={index * 100} />
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0">
          {skills.map((skill, index) => (
            <SkillBubble key={`second-${index}`} skill={skill} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const programmingSkills = [
    "C", "Java", "JavaFX", "HTML", "CSS", "JavaScript", "Node.js", "React JS",
    "Tailwind CSS", "ASP.NET", "Python", "Flask API", "TensorFlow", "Keras",
    "Numpy", "Scikit-learn", "Pandas", "Streamlit", "PostgreSQL", "Embedded System",
  ]

  const methodologies = [
    "Agile Software Development", "Model-View-Controller", "Pattern Design",
    "Code Reengineering", "Software Architecture", "System Design", "CI/CD",
  ]

  const softSkills = [
    "Leadership", "Project Management", "Strategic Planning", "Public Speaking",
    "Mentorship", "Team Collaboration", "Creative Problem-Solving", "Communication",
  ]

  // Injecting CSS animations directly into the component
  const animationStyles = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0%); }
    }
    .animate-marquee-slow { animation: marquee 60s linear infinite; }
    .animate-marquee-medium { animation: marquee 40s linear infinite; }
    .animate-marquee-fast { animation: marquee 20s linear infinite; }
    .animate-marquee-reverse-slow { animation: marquee-reverse 60s linear infinite; }
    .animate-marquee-reverse-medium { animation: marquee-reverse 40s linear infinite; }
    .animate-marquee-reverse-fast { animation: marquee-reverse 20s linear infinite; }
  `;

  return (
    <section className="relative py-22 px-4">
      <style>{animationStyles}</style>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities, methodologies, and soft skills
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-8">
          {/* Programming Skills - Moving Right */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white/90 text-center mb-4">Programming & Technologies</h3>
            <MarqueeRow skills={programmingSkills} direction="right" speed="slow" />
          </div>

          {/* Methodologies - Moving Left */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white/90 text-center mb-4">Methodologies & Practices</h3>
            <MarqueeRow skills={methodologies} direction="left" speed="medium" />
          </div>

          {/* Soft Skills - Moving Right */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white/90 text-center mb-4">Soft Skills & Leadership</h3>
            <MarqueeRow skills={softSkills} direction="right" speed="fast" />
          </div>
        </div>
      </div>
    </section>
  )
}