import { useState } from "react";
import { Play, Globe } from "lucide-react";

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
    websiteLink: "https://planitplanner.vercel.app",
    videoLink: null,
    downloadLink: null,
  },
  {
    id: 2,
    title: "Blink Bank",
    description: "A lightweight, command-line based expense tracking system built entirely in C using an AVL Tree data structure to demonstrate proficiency in fundamental programming and memory management.",
    fullDescription: "This project showcases my ability to build a functional application from the ground up using a low-level language, proving my understanding of core computer science concepts without relying on modern frameworks.",
    technologies: ["C"],
    images: [
        { src: "/blinkbank1.png", alt: "Blink Bank Main Page" },
        { src: "/blinkbank2.png", alt: "Blink Bank Credential Page" },
        { src: "/blinkbank3.png", alt: "Blink Bank Main Menu Page" },
    ],
    link: "https://github.com/JasonTherawan/BlinkBank",
    websiteLink: null,
    videoLink: null,
    downloadLink: null,
  },
  {
    id: 3,
    title: "GoVlash Laundry",
    description: "A desktop-based laundry management system featuring role-based access control that streamlines workflows between customers, admins, receptionists, and laundry staff.",
    fullDescription: "As the project leader, I designed the application's architecture using the MVC pattern. I was responsible for the entire full-stack implementation, connecting the Java backend to a MySQL database and building the complete user interface with JavaFX.",
    technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
    images: [
      { src: "/govlashlaundry1.png", alt: "Admin Dashboard" },
      { src: "/govlashlaundry2.png", alt: "Customer Dashboard" },
      { src: "/govlashlaundry3.png", alt: "Register Page" },
    ],
    link: "https://github.com/JasonTherawan/GoVlashLaundry",
    websiteLink: null,
    videoLink: null,
    downloadLink: "https://github.com/JasonTherawan/GoVlashLaundry/releases/latest",
  },
  {
    id: 4,
    title: "Smart Trash Bin",
    description: "A smart trash-sorting prototype capable of sorting waste into categories in real time using a custom-trained CNN model and an ESP32 microcontroller.",
    fullDescription: "A fully functional prototype that uses an ESP32-CAM to capture an image, a CNN model to classify it as organic or inorganic, and then automatically directs it to the correct compartment.",
    technologies: ["IoT", "C for Embedded System", "Python", "Streamlit", "TensorFlow"],
    images: [
      { src: "/smarttrashbin.png", alt: "Smart Trash Bin" },
    ],
    link: "https://github.com/JasonTherawan/ShijinForge_Stage4",
    websiteLink: null,
    videoLink: "https://youtu.be/JbN-0TZBvRU?si=-TiY4cNIgLoOepvC",
    videoLabel: "View Presentation",
    downloadLink: null,
  },
  {
    id: 5,
    title: "Smart Plant Watering System",
    description: "An IoT-based automated irrigation system using ESP32 that monitors soil moisture and temperature to water plants autonomously or via the Blynk app.",
    fullDescription: "Designed to optimize plant care, this system integrates an ESP32 microcontroller with capacitive soil moisture sensors and temperature monitoring to execute precise watering. It features intelligent scheduling via an RTC module and a safety mechanism using an ultrasonic sensor to detect low water levels and prevent pump dry-runs. The system prioritizes energy efficiency through Deep Sleep modes and offers real-time data visualization and manual override capabilities through a Blynk mobile dashboard.",
    technologies: ["IoT", "C for Embedded System", "Blynk"],
    images: [
      { src: "/smartplantwatering1.png", alt: "Smart Plant Watering System" },
      { src: "/smartplantwatering2.png", alt: "Prototype" },
      { src: "/smartplantwatering3.jpeg", alt: "Blynk Dashboard" },
    ],
    link: null,
    websiteLink: null,
    videoLink: "https://drive.google.com/file/d/18d3ghpS4pgjmyYuDZNCH3406RcHdKE9O/view?usp=sharing",
    videoLabel: "View Demo",
    downloadLink: null,
  },
  {
    id: 6,
    title: "LOrd Card Shop",
    description: "An online platform dedicated to simplifying the buying and selling of collectible cards, featuring an intuitive interface and efficient management system for collectors and enthusiasts.",
    fullDescription: "A full-featured e-commerce web application developed using the ASP.NET framework. It serves as an online marketplace for trading cards, built on a robust MVC architecture.",
    technologies: ["ASP.NET", "Tailwind CSS", "C#", "RDBMS", "Domain Driven Design"],
    images: [
      { src: "/lordcardshop.png", alt: "LOrd Card Shop Login Page" },
    ],
    link: "https://github.com/Kimchiigu/LOrdCardShop",
    websiteLink: null,
    videoLink: null,
    downloadLink: null,
  },
  {
    id: 7,
    title: "Benchmarking Model Performance on Deepfake Detection using Deep Neural Network",
    description: "A comparative study on deepfake detection models presented at the 2025 GEn-CITy conference. This paper benchmarks four state-of-the-art architectures and is currently awaiting publication on IEEE Xplore.",
    fullDescription: "As the lead researcher, I authored and presented this paper at the 2025 International Conference on Green Energy, Computing and Intelligent Technology (GEn-CITy) in Bali. I managed the entire scientific process, from data collection to configuring and evaluating four distinct models (DenseNet201, CapsNet, DeiT, and VQ-VAE). The paper has been accepted and is currently in the publishing process for IEEE Xplore.",
    technologies: ["DenseNet201", "CapsNet", "DeiT", "VQ-VAE"],
    images: [
      { src: "/research.png", alt: "Research Poster" },
    ],
    link: null,
    websiteLink: null,
    videoLink: "https://drive.google.com/file/d/1AkzUwcYo77-SOdmGFgwXt42PN768IfXY/view?usp=sharing",
    videoLabel: "View Presentation",
    downloadLink: null,
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="relative min-h-screen py-16 md:py-22 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto">
            A showcase of my latest work in full-stack development, software application, and system architecture.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Info */}
              <div className="flex-1 space-y-4 md:space-y-6 w-full">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 md:px-3 text-xs md:text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 hover:bg-white/20 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  <p className="text-gray-400 leading-relaxed hidden sm:block">{project.fullDescription}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-6 mt-6">
                  {/* Code Button */}
                  {project.link && (
                    <button
                      className="group flex items-center gap-3 cursor-pointer"
                      onClick={() => window.open(project.link, "_blank")}
                      title="View Project Code"
                    >
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        View Code
                      </span>
                    </button>
                  )}
                  
                  {/* Website Button */}
                  {project.websiteLink && (
                    <button
                      className="group flex items-center gap-3 cursor-pointer"
                      onClick={() => window.open(project.websiteLink, "_blank")}
                      title="View Live Website"
                    >
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <Globe className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        Visit Website
                      </span>
                    </button>
                  )}

                  {/* Video Button */}
                  {project.videoLink && (
                    <button
                      className="group flex items-center gap-3 cursor-pointer"
                      onClick={() => window.open(project.videoLink, "_blank")}
                      title={project.videoLabel || "View Demo"}
                    >
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <Play className="w-4 h-4 md:w-5 md:h-5 text-white transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        {project.videoLabel || "View Demo"}
                      </span>
                    </button>
                  )}

                  {/* Download Button */}
                  {project.downloadLink && (
                    <button
                      className="group flex items-center gap-3 cursor-pointer"
                      onClick={() => window.open(project.downloadLink, "_blank")}
                      title="Download Installer"
                    >
                      <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <Download className="w-4 h-4 md:w-5 md:h-5 text-white transform group-hover:scale-110 group-hover:translate-y-0.5 transition-all duration-300" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        Download .exe
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Project Images */}
              <div className="flex-1 relative w-full">  
                <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto">
                  {project.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`relative overflow-hidden rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 ${hoveredProject === project.id ? "transform hover:scale-105" : ""} ${
                        imageIndex === 0 ? "col-span-2" : ""
                      } ${image.className || ""}`}
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-auto object-contain" />
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