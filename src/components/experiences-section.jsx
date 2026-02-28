import { useState, useEffect, useRef } from "react";

const experiencesData = [
  {
    id: 1,
    time: "February 2025 - February 2026",
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
      { threshold: 0.1 } // Lower threshold for mobile
    );

    const elements = document.querySelectorAll("[data-timeline-item]");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-22 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            A journey through my career milestones and professional growth
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Left on mobile, Center on desktop */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-white/10 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-4">
            {experiencesData.map((experience, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={experience.id}
                  data-id={experience.id}
                  data-timeline-item
                  className={`relative flex flex-col md:flex-row items-center md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node - Left on mobile, Center on desktop */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-gray-800 rounded-full border-2 md:border-4 border-gray-900 z-10 shadow-lg mt-1 md:mt-0 top-0 md:top-1/2 md:-translate-y-1/2">
                    <div className="w-full h-full rounded-full bg-white/30"></div>
                  </div>

                  {/* Connecting Line - Hidden on Mobile */}
                  <div className={`hidden md:block absolute top-1/2 w-1/2 h-px bg-white/20 ${
                    isLeft ? 'left-1/2 ml-3' : 'right-1/2 mr-3'
                  }`}></div>

                  {/* Experience Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 
                    ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"} 
                    ${visibleItems.has(experience.id.toString())
                        ? "animate-fade-in-up opacity-100"
                        : "opacity-0 translate-y-8"
                    } transition-all duration-700 ease-out`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Time Label */}
                    <div className={`inline-block mb-3 md:mb-4 ${
                      isLeft ? "md:text-right w-full" : "md:text-left"
                    }`}>
                      <span className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm">
                        {experience.time}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 group">
                      {/* Card Header */}
                      <div className={`mb-4 ${isLeft ? "md:text-left" : "md:text-right"}`}>
                        <h3 className="text-white font-bold text-lg md:text-xl">{experience.title}</h3>
                        <p className="text-gray-300 font-medium text-sm">{experience.company}</p>
                      </div>

                      {/*QV Card Content */}
                      <p className={`text-gray-300 text-sm md:text-base leading-relaxed ${
                        isLeft ? "md:text-left" : "md:text-right"
                      }`}>
                        {experience.description}
                      </p>

                      {/* Skills Section */}
                      <div className={`mt-4 flex flex-wrap gap-2 ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}>
                        {experience.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 md:px-3 text-xs bg-white/10 rounded-full text-white/80 border border-white/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}