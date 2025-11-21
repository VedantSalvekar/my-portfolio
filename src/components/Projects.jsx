import { motion } from "framer-motion";
import githubIcon from "../assets/github-icon-2.svg";
import cosmicHub from "../assets/projects/cosmic-hub.png";
import netflixGpt from "../assets/projects/netflix-gpt.png";
import f1LiveSim from "../assets/projects/f1_live_sim.png";
import allerteens from "../assets/projects/allerteens.png";
import gitTogether from "../assets/projects/gitTogether.png";

function Projects() {
  const projects = [
    {
      title: "AllerTeens",
      subtitle: "Allergy Self-Management Mobile App",
      description:
        "Cross-platform mobile app developed in collaboration with UCC School of Nursing & Midwifery and CUH Paediatric Allergy Unit to support adolescents transitioning to self-management of severe food allergies.",
      tech: "Flutter, Dart, Firebase, Firestore, Google Cloud Functions, OpenAI GPT-3.5",
      github: "#",
      screenshot: allerteens,
    },
    {
      title: "GitTogether",
      subtitle: "Developer Networking Platform",
      description:
        "Full-featured social networking web application enabling developers to connect professionally with intuitive profile management and connection requests.",
      tech: "React, Vite, Redux Toolkit, Tailwind CSS, DaisyUI, React Router",
      github: "#",
      screenshot: gitTogether,
    },
    {
      title: "Netflix GPT",
      subtitle: "AI-Powered Movie Recommendation Platform",
      description:
        "React web application replicating Netflix interface with integrated OpenAI-powered movie recommendations, combining real-time movie data with AI-driven personalized suggestions.",
      tech: "React, OpenAI API, JavaScript, CSS",
      github: "https://github.com/VedantSalvekar/netflix-gpt",
      screenshot: netflixGpt,
    },
    {
      title: "Cosmic Hub",
      subtitle: "Cosmic Awareness Platform",
      description:
        "Full-stack web application for cosmic awareness and mindfulness practices, providing users with tools and resources for meditation and self-reflection.",
      tech: "JavaScript, React, Node.js, MongoDB",
      github: "https://github.com/VedantSalvekar/cosmic-hub",
      screenshot: cosmicHub,
    },
    {
      title: "F1 Live Sim",
      subtitle: "F1 Telemetry Visualization",
      description:
        "Real-time F1 telemetry visualization and simulation project displaying live racing data and analytics.",
      tech: "Python, Data Visualization Libraries",
      github: "https://github.com/VedantSalvekar/F1-Live-Sim",
      screenshot: f1LiveSim,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.1,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden border border-gray-800 hover:border-white transition-all duration-300"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                {/* Hover overlay - slides from bottom, 3/4 height */}
                <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-black/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col p-4 overflow-hidden">
                  <div className="flex-1 overflow-y-auto project-overlay">
                    {/* Title with GitHub icon */}
                    <div className="flex items-center justify-start mb-1.5">
                      <h3 className="text-lg font-bold text-white">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 border border-gray-700 hover:border-white transition-colors flex items-center justify-center flex-shrink-0 ml-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={githubIcon}
                          alt="GitHub"
                          className="w-3.5 h-3.5 invert"
                        />
                      </a>
                    </div>
                    
                    {/* <p className="text-gray-400 text-xs mb-1.5">
                      {project.subtitle}
                    </p> */}
                    <p className="text-gray-300 text-sm leading-snug mb-3">
                      {project.description}
                    </p>
                    <div className="border-t border-gray-800 pt-2">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                        Tech Stack
                      </p>
                      <p className="text-xs text-gray-400 leading-tight">{project.tech}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
