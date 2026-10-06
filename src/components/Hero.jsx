import portfolioImage from "../assets/my_portfolio_img.png";
import reactIcon from "../assets/react-2.svg";
import nodejsIcon from "../assets/nodejs-2.svg";
import flutterIcon from "../assets/flutter.svg";
import firebaseIcon from "../assets/firebase-1.svg";
import javascriptIcon from "../assets/javascript-2.svg";
import awsIcon from "../assets/aws-2.svg";
import dartIcon from "../assets/dart.svg";
import Activity from "./Activity";

function Hero() {
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
    <section className="min-h-screen flex items-center justify-center px-5 pt-40 md:pt-44 xl:pt-24 pb-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative min-w-0 flex flex-col gap-8 md:block md:h-[600px]">
            {/* Below the portrait on mobile; preserve the desktop background offsets. */}
            <div className="order-2 relative min-w-0 md:absolute md:top-[-20px] md:left-[-50px] md:right-0 z-0 px-1 md:opacity-70 pointer-events-auto">
              <Activity />
            </div>

            <div className="order-1 relative flex items-center justify-center h-[600px]">
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

              <div className="relative z-10 max-w-full pointer-events-none">
                <img
                  src={portfolioImage}
                  alt="Vedant Salvekar"
                  className="h-[500px] md:h-[600px] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 text-center md:text-left space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                <span style={{ color: "#ccd6f6" }}>hi, </span>
                <span style={{ color: "#64ffda" }}>Vedant</span>
                <span
                  className="whitespace-nowrap"
                  style={{ color: "#ccd6f6" }}
                >
                  {" here."}
                  <span className="hero-cursor" aria-hidden="true" />
                </span>
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
                  I&apos;m a software engineer and artist who loves building
                  things that feel both functional and expressive. I enjoy
                  working end-to-end, designing clean interfaces, architecting
                  scalable systems, and bringing ideas to life.
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
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 " />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
