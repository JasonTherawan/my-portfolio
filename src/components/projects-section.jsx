import { useState } from "react";
import { Play } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "PlanIt",
    description: "A full-stack productivity and scheduling web application that unifies calendar management, to-do lists, goal tracking, and team collaboration into a single, intelligent platform.",
    fullDescription: "PlantIt was born from a personal problem: the difficulty of finding a digital planner that was both powerful and simple to use. My concept was to create a web app that helps users organize their goals and tasks with a minimalist and intuitive interface.",
    technologies: ["React.js", "Tailwind CSS", "Python", "PostgreSQL", "Vite"],
    images: [
      { src: "/planit1.png", alt: "PlanIt Main Page" },
      { src: "/planit2.png", alt: "PlanIt Learn More Page" },
      { src: "/planit3.png", alt: "PlanIt Landing Page" },
    ],
    link: "https://github.com/JasonTherawan/PlanIt",
    videoLink: "https://youtu.be/fyQQAP_fmcw",
  },
  {
    id: 2,
    title: "Blink Bank",
    description: "A lightweight, command-line based expense tracking system built entirely in C using an AVL Tree data structure to demonstrate proficiency in fundamental programming and memory management.",
    fullDescription: "This project showcases my ability to build a functional application from the ground up using a low-level language, proving my understanding of core computer science concepts without relying on modern frameworks.",
    technologies: ["C"],
    images: [
        { src: "/blinkbank1.png", alt: "Blink Bank Main Page", className: "h-78" },
        { src: "/blinkbank2.png", alt: "Blink Bank Credential Page" },
        { src: "/blinkbank3.png", alt: "Blink Bank Main Menu Page" },
    ],
    link: "https://github.com/JasonTherawan/BlinkBank",
  },
  {
    id: 3,
    title: "Smart Trash Bin",
    description: "A smart trash-sorting prototype capable of sorting waste into categories in real time using a custom-trained CNN model and an ESP32 microcontroller.",
    fullDescription: "A fully functional prototype that uses an ESP32-CAM to capture an image, a CNN model to classify it as organic or inorganic, and then automatically directs it to the correct compartment.",
    technologies: ["IoT", "C for Embedded System", "Python", "Streamlit", "TensorFlow"],
    images: [
      { src: "/smarttrashbin.png", alt: "Smart Trash Bin", className: "h-76" },
    ],
    link: "https://github.com/JasonTherawan/ShijinForge_Stage4",
    videoLink: "https://youtu.be/JbN-0TZBvRU?si=-TiY4cNIgLoOepvC",
  },
  {
    id: 4,
    title: "LOrd Card Shop",
    description: "An online platform dedicated to simplifying the buying and selling of collectible cards, featuring an intuitive interface and efficient management system for collectors and enthusiasts.",
    fullDescription: "A full-featured e-commerce web application developed using the ASP.NET framework. It serves as an online marketplace for trading cards, built on a robust MVC architecture.",
    technologies: ["ASP.NET", "Tailwind CSS", "C#", "RDBMS", "Domain Driven Design"],
    images: [
      { src: "/lordcardshop.png", alt: "LOrd Card Shop Login Page", className: "h-68" },
    ],
    link: "https://github.com/Kimchiigu/LOrdCardShop",
  },
  {
    id: 5,
    title: "Benchmarking Models on Deepfake Detection",
    description: "A research project designed to systematically compare the effectiveness of four state-of-the-art deep learning models on the critical task of detecting deepfakes.",
    fullDescription: "As the lead researcher, I was responsible for the entire scientific process, from literature review and data collection to training and evaluating four distinct models (DenseNet201, CapsNet, DeiT, and VQ-VAE).",
    technologies: ["DenseNet201", "CapsNet", "DeiT", "VQ-VAE"],
    images: [
      { src: "/research.png", alt: "Research Poster", className: "h-88" },
    ],
    link: null,
    videoLink: "https://drive.google.com/file/d/1x7P0HJsEUqSbfdP27soFexfAE7DRNgmF/view?usp=sharing",
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="relative min-h-screen py-22 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            A showcase of my latest work in full-stack development, software application, and system architecture.
          </p>
        </div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                  <p className="text-gray-400 leading-relaxed">{project.fullDescription}</p>
                </div>

                {/* --- ACTION BUTTONS --- */}
                <div className="flex items-center gap-4">
                  {project.link && (
                    <button
                      className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      onClick={() => window.open(project.link, "_blank")}
                      title="View Project Code"
                    >
                      <svg className="w-6 h-6 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                  )}
                  {project.videoLink && (
                    <button
                      className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      onClick={() => window.open(project.videoLink, "_blank")}
                      title="View Video Demo"
                    >
                      <Play className="w-5 h-5 text-white" />
                    </button>
                  )}
                  <span className="text-gray-400 text-sm">
                    {project.link ? "View Project" : (project.videoLink ? "View Presentation" : "")}
                  </span>
                </div>
              </div>

              {/* --- PROJECT IMAGES --- */}
              <div className="flex-1 relative">  
                <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                  {project.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 ${hoveredProject === project.id ? "transform hover:scale-105" : ""} ${
                        imageIndex === 0 ? "col-span-2 h-60" : "h-36"
                      } ${image.className || ""}`}
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}