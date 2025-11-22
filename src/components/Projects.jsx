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
      title: "GitTogether",
      subtitle: "Developer Networking Platform",
      description:
        "Full-featured social networking web application enabling developers to connect professionally with intuitive profile management and connection requests.",
      tech: "React, Node.js (Socket.io), MongoDB, Tailwind CSS",
      github: "#",
      screenshot: gitTogether,
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
      title: "AllerTeens",
      subtitle: "Allergy Self-Management Mobile App",
      description:
        "Cross-platform mobile app developed in collaboration with UCC School of Nursing & Midwifery and CUH Paediatric Allergy Unit to support adolescents transitioning to self-management of severe food allergies.",
      tech: "Flutter, Dart, Firebase, Firestore, Google Cloud Functions, OpenAI GPT-3.5",
      github: "#",
      screenshot: allerteens,
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
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span style={{ color: "#64ffda" }}>/ </span>
            <span style={{ color: "#ccd6f6" }}>projects</span>
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
              className="group relative overflow-hidden border transition-all duration-300"
              style={{ borderColor: "#233554" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#64ffda")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#233554")
              }
            >
              <div
                className="aspect-video flex items-center justify-center relative"
                style={{ backgroundColor: "#0a192f" }}
              >
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto"
                      fill="none"
                      stroke="#233554"
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
                <div
                  className="absolute bottom-0 left-0 right-0 h-3/4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col p-4 overflow-hidden"
                  style={{ backgroundColor: "rgba(10, 25, 47, 0.98)" }}
                >
                  <div className="flex-1 overflow-y-auto project-overlay">
                    {/* Title with GitHub icon */}
                    <div className="flex items-center justify-start mb-1.5">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "#ccd6f6" }}
                      >
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 border transition-colors flex items-center justify-center flex-shrink-0 ml-2"
                        style={{ borderColor: "#233554" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor = "#64ffda")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor = "#233554")
                        }
                        onClick={(e) => e.stopPropagation()}
                      >
                        <img
                          src={githubIcon}
                          alt="GitHub"
                          className="w-3.5 h-3.5 invert"
                        />
                      </a>
                    </div>

                    <p
                      className="text-sm leading-snug mb-3"
                      style={{ color: "#8892b0" }}
                    >
                      {project.description}
                    </p>
                    <div
                      className="border-t pt-2"
                      style={{ borderColor: "#233554" }}
                    >
                      <p
                        className="text-[10px] uppercase tracking-wider mb-1"
                        style={{ color: "#64ffda" }}
                      >
                        Tech Stack
                      </p>
                      <p
                        className="text-xs leading-tight"
                        style={{ color: "#8892b0" }}
                      >
                        {project.tech}
                      </p>
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
