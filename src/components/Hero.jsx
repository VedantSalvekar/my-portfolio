import portfolioImage from "../assets/my_portfolio_img.png";
import reactIcon from "../assets/react-2.svg";
import nodejsIcon from "../assets/nodejs-2.svg";
import flutterIcon from "../assets/flutter.svg";
import firebaseIcon from "../assets/firebase-1.svg";
import javascriptIcon from "../assets/javascript-2.svg";
import awsIcon from "../assets/aws-2.svg";
import dartIcon from "../assets/dart.svg";

const CV_DRIVE_URL = "1oDyM9zKtaMCZajGuggcNfbFykI05yb1I";
//https://drive.google.com/file/d/1oDyM9zKtaMCZajGuggcNfbFykI05yb1I/view?usp=sharing
function Hero() {
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
    { name: "Dart", icon: dartIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "AWS", icon: awsIcon },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-24 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative flex items-center justify-center h-[600px]">
            <div className="absolute left-[-15px] md:left-[-51px] bottom-67 md:bottom-66 z-0">
              <h2
                className="text-4xl md:text-6xl font-bold"
                style={{
                  color: "#ccd6f6",
                  textShadow: "2px 2px 8px rgba(2,12,27,0.8)",
                }}
              >
                Developer
              </h2>
            </div>

            <div className="absolute right-[20px] md:right-[55px] bottom-67 md:bottom-66 z-0">
              <h2
                className="text-4xl md:text-6xl font-bold"
                style={{
                  color: "#ccd6f6",
                  textShadow: "2px 2px 8px rgba(2,12,27,0.8)",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span style={{ color: "#ccd6f6" }}>hi, </span>
                <span style={{ color: "#64ffda" }}>Vedant</span>
                <span style={{ color: "#ccd6f6" }}> here.</span>
              </h1>
              <h2
                className="text-2xl md:text-4xl font-bold mb-6"
                style={{ color: "#8892b0" }}
              >
                I create stuff sometimes.
              </h2>

              <div
                className="space-y-6 text-lg leading-relaxed"
                style={{ color: "#8892b0" }}
              >
                <p>
                  I'm a software engineer and artist who loves building things
                  that feel both functional and expressive. I enjoy working
                  end-to-end, designing clean interfaces, architecting scalable
                  systems, and bringing ideas to life.
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
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 grayscale"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={downloadCV}
                className="px-6 py-2 border text-sm transition-all duration-300 cursor-pointer"
                style={{ borderColor: "#64ffda", color: "#64ffda" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#64ffda1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Download CV
              </button>
            </div>

            {/* <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target={social.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    social.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="transition-all duration-300"
                  style={{ filter: "grayscale(100%) brightness(0.7)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(0%) brightness(1) sepia(1) hue-rotate(140deg) saturate(3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter =
                      "grayscale(100%) brightness(0.7)";
                  }}
                >
                  {social.icon ? (
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6"
                    />
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#8892b0" }}
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
