import { useState, useEffect } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIcon from "@mui/icons-material/Phone";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "artworks", label: "Artworks" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md "
      style={{
        backgroundColor: "rgba(2, 12, 27, 0.95)",
        // borderColor: "#233554",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold" style={{ color: "#ccd6f6" }}>
              Vedant Salvekar
            </div>

            <div className="hidden md:flex items-center gap-1 poi">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 transition-all duration-200 cursor-pointer"
                  style={{
                    color: activeSection === item.id ? "#64ffda" : "#ccd6f6",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = "#64ffda";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = "#ccd6f6";
                    }
                  }}
                >
                  <span className="relative font-medium text-sm">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:vedantsalvekar86@gmail.com"
              className="transition-all duration-200 p-2"
              style={{ color: "#8892b0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#64ffda";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8892b0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <EmailRoundedIcon style={{ fontSize: 20 }} />
            </a>

            <a
              href="https://github.com/VedantSalvekar"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 p-2"
              style={{ color: "#8892b0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#64ffda";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8892b0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <GitHubIcon style={{ fontSize: 19 }} />
            </a>

            <a
              href="https://www.linkedin.com/in/vedant-salvekar-7b4a5b211/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 p-2"
              style={{ color: "#8892b0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#64ffda";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8892b0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <LinkedInIcon style={{ fontSize: 21 }} />
            </a>

            {/* <a
              href="https://leetcode.com/u/Vedant_1028/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 p-2"
              style={{ color: "#8892b0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#64ffda";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8892b0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <CodeIcon style={{ fontSize: 20 }} />
            </a> */}

            <a
              href="tel:+353899444772"
              className="transition-all duration-200 p-2"
              style={{ color: "#8892b0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#64ffda";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8892b0";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <PhoneIcon style={{ fontSize: 20 }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
