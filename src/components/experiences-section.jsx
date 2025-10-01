import { useState, useEffect, useRef } from "react";

const experiencesData = [
  {
    id: 1,
    time: "February 2025 - Present",
    title: "IT Staff",
    company: "Bina Nusantara English Club (BNEC)",
    description:
      "As an IT Staff, I took the initiative to learn PHP and Laravel to support the club's digital infrastructure. I am contributing to a full-stack web application with an MVC architecture to manage member registration and event listings, sharpening my problem-solving and web development skills.",
    skills: ["Full-Stack Development", "Web Maintenance", "MVC", "PHP", "Laravel"],
  },
  {
    id: 2,
    time: "February 2025 - July 2025",
    title: "Scholarship Mentor",
    company: "BINUS University",
    description:
      "As a Scholarship Mentor, I guided three mentees through a full academic semester, providing personalized academic assistance in subjects like Data Structures, Software Engineering, Scientific Computing, and Computational Biology. I designed targeted study plans and conducted one-on-one sessions, helping all three improve their academic performance and confidence.",
    skills: ["Mentorship", "Communication", "Data Structures", "Software Engineering", " Scientific Computing", "Computational Biology"],
  },
  {
    id: 3,
    time: "April 2025",
    title: "Peer Exam Tutor",
    company: "BINUS University",
    description:
      "Appointed as a tutor for the Code Reengineering mid-term exam, I conducted review sessions covering key refactoring concepts in Java. I clarified complex implementations and emphasized clean code principles, improving my technical communication skills and deepening my understanding of Java OOP.",
    skills: ["Code Reengineering", "Refactoring", "Tutoring", "Java", "OOP"],
  },
];

export default function ExperiencesSection() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll("[data-timeline-item]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-22 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey through my career milestones and professional growth
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-4">
            {experiencesData.map((experience, index) => (
              <div
                key={experience.id}
                data-id={experience.id}
                data-timeline-item
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-800 rounded-full border-4 border-gray-900 z-10 shadow-lg">
                  <div className="w-full h-full rounded-full bg-white/30"></div>
                </div>

                {/* Connecting Line */}
                <div className={`absolute top-1/2 w-1/2 h-px bg-white/20 ${index % 2 === 0 ? 'left-1/2 ml-3' : 'right-1/2 mr-3'}`}></div>

                {/* Experience Card */}
                <div
                  className={`w-full max-w-xl py-4 ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"} ${
                    visibleItems.has(experience.id.toString())
                      ? "animate-fade-in-up opacity-100"
                      : "opacity-0 translate-y-8"
                  } transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`inline-block mb-4 ${index % 2 === 0 ? "text-right w-full" : "text-left"}`}>
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm">
                      {experience.time}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 group">
                    {/* Card Header */}
                    <div className={`mb-4 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <h3 className="text-white font-bold text-xl">{experience.title}</h3>
                      <p className="text-gray-300 font-medium text-sm">{experience.company}</p>
                    </div>

                    {/* Card Content */}
                    <p className={`text-gray-300 leading-relaxed ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      {experience.description}
                    </p>

                    {/* Skills Section */}
                    <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                      {experience.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}