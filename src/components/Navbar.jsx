import { useState, useEffect } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIcon from "@mui/icons-material/Phone";

const CV_DRIVE_ID = "1oDyM9zKtaMCZajGuggcNfbFykI05yb1I";

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
      },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 xl:py-4">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 xl:flex xl:justify-between">
          <div className="min-w-0 flex items-center gap-6">
            <div className="text-base sm:text-xl font-bold" style={{ color: "#ccd6f6" }}>
              Vedant Salvekar
            </div>

            <div className="hidden xl:flex items-center gap-1">
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

          <div className="contents xl:flex xl:items-center xl:gap-3">
            <a
              href={`https://drive.google.com/uc?export=download&id=${CV_DRIVE_ID}`}
              download="Vedant_Salvekar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap px-3 sm:px-4 border text-xs sm:text-sm transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#64ffda]"
              style={{ borderColor: "#64ffda", color: "#64ffda" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#64ffda1a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Download CV
            </a>
            <div className="col-span-2 flex flex-wrap items-center justify-center gap-1 sm:justify-end">
              <a
                href="mailto:vedantsalvekar86@gmail.com"
                aria-label="Email Vedant"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center transition-all duration-200"
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
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center transition-all duration-200"
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
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center transition-all duration-200"
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

              <a
                href="https://leetcode.com/u/Vedant_1028/"
                aria-label="LeetCode profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center transition-all duration-200"
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
              </a>

              <a
                href="tel:+353899444772"
                aria-label="Call Vedant"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center transition-all duration-200"
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
      </div>
    </nav>
  );
}

export default Navbar;
