import portfolioImage from "../assets/my_portfolio_img.png";
import reactIcon from "../assets/react-2.svg";
import nodejsIcon from "../assets/nodejs-2.svg";
import flutterIcon from "../assets/flutter.svg";
import firebaseIcon from "../assets/firebase-1.svg";
import javascriptIcon from "../assets/javascript-2.svg";
import githubIcon from "../assets/github-icon-2.svg";
import linkedinIcon from "../assets/linkedin-icon-2.svg";
import gmailIcon from "../assets/gmail-icon.svg";
import leetcodeIcon from "../assets/leetcode-1.svg";

const CV_DRIVE_URL = "1s15bA8xrhXCAv9WFcgKkx1kDjzf5RG5i";

function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${CV_DRIVE_URL}`;

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Vedant_Salvekar_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "React", icon: reactIcon },
    { name: "NodeJs", icon: nodejsIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Flutter", icon: flutterIcon },
    { name: "Firebase", icon: firebaseIcon },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: githubIcon,
      link: "https://github.com/VedantSalvekar",
    },
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/vedant-salvekar-7b4a5b211/",
    },
    {
      name: "Email",
      icon: gmailIcon,
      link: "mailto:vedantsalvekar86@gmail.com",
    },
    {
      name: "LeetCode",
      icon: leetcodeIcon,
      link: "https://leetcode.com/u/Vedant_1028/",
    },
    { name: "Phone", icon: null, link: "tel:+353899444772" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-20 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex items-center justify-center h-[600px]">
            <div className="absolute left-[-17px] md:left-[-22px] bottom-66 z-0">
              <h2
                className="text-4xl md:text-6xl font-bold"
                style={{
                  color: "#ffffff",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                Developer
              </h2>
            </div>

            <div className="absolute right-[31px] md:right-[71px] bottom-66 z-0">
              <h2
                className="text-4xl md:text-6xl font-bold"
                style={{
                  color: "#ffffff",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                Artist
              </h2>
            </div>

            <div className="relative z-10">
              <img
                src={portfolioImage}
                alt="Vedant Salvekar"
                className="h-[500px] md:h-[600px] w-auto object-contain"
              />
            </div>
          </div>

          <div className="text-center md:text-left space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Vedant Salvekar
              </h1>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I’m a software engineer and a traditional artist who loves
                  building things that feel both functional and expressive. I
                  enjoy working end-to-end, designing clean interfaces,
                  architecting scalable systems, and bringing ideas to life.
                </p>
                <p>
                  Outside of coding, I paint nature, portraits, and expressive
                  pieces. Blending creativity with engineering helps me approach
                  problems with both structure and imagination.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 " />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* <button
                onClick={scrollToWork}
                className="px-6 py-2 border border-gray-600 text-gray-300 text-sm
                         hover:border-gray-400 hover:text-white transition-all duration-300"
              >
                View Work
              </button> */}
              <button
                onClick={downloadCV}
                className="px-6 py-2 border border-gray-600 text-gray-300 text-sm
                         hover:border-gray-400 hover:text-white transition-all duration-300"
              >
                Download CV
              </button>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target={social.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    social.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  {social.icon ? (
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6 "
                    />
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
