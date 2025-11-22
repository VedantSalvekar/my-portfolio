import { useState, useEffect } from "react";
import artwork1 from "../assets/artworks/IMG_0036.jpg";
import artwork2 from "../assets/artworks/IMG_0037.jpg";
import artwork3 from "../assets/artworks/IMG_0038.jpg";
import artwork4 from "../assets/artworks/IMG_0039.jpg";
import artwork5 from "../assets/artworks/IMG_0040.jpg";
import artwork6 from "../assets/artworks/IMG_0041.jpg";
import artwork7 from "../assets/artworks/IMG_0042.jpg";
import artwork8 from "../assets/artworks/IMG_0043.jpg";
import artwork9 from "../assets/artworks/IMG_0044.jpg";

function Artworks() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const artworks = [
    artwork1,
    artwork2,
    artwork3,
    artwork4,
    artwork5,
    artwork6,
    artwork7,
    artwork8,
    artwork9,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [artworks.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  const getPosition = (index) => {
    const diff = index - currentIndex;
    const total = artworks.length;

    let position = diff;
    if (position > total / 2) position -= total;
    if (position < -total / 2) position += total;

    return position;
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span style={{ color: "#64ffda" }}>/ </span>
            <span style={{ color: "#ccd6f6" }}>artworks</span>
          </h2>
        </div>

        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center mb-8 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {artworks.map((artwork, index) => {
              const position = getPosition(index);
              const isCenter = position === 0;
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${position * 350}px) scale(${
                      isCenter ? 1 : 0.6
                    }) translateZ(${isCenter ? 0 : -200}px)`,
                    opacity: isCenter ? 1 : 0.4,
                    zIndex: isCenter ? 10 : 5 - Math.abs(position),
                  }}
                >
                  <img
                    src={artwork}
                    alt={`Artwork ${index + 1}`}
                    className="max-w-[500px] max-h-[600px] w-auto h-auto object-contain"
                    draggable="false"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 border flex items-center justify-center text-xl transition-all duration-300"
            style={{ borderColor: "#233554", color: "#ccd6f6" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#64ffda";
              e.currentTarget.style.backgroundColor = "#64ffda1a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#233554";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            ←
          </button>

          <div className="text-center">
            <div
              className="font-mono text-sm mb-2"
              style={{ color: "#8892b0" }}
            >
              {currentIndex + 1} / {artworks.length}
            </div>
            <div className="flex gap-2">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300`}
                  style={{
                    width: index === currentIndex ? "32px" : "8px",
                    backgroundColor:
                      index === currentIndex ? "#64ffda" : "#233554",
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.backgroundColor = "#8892b0";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.backgroundColor = "#233554";
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 border flex items-center justify-center text-xl transition-all duration-300"
            style={{ borderColor: "#233554", color: "#ccd6f6" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#64ffda";
              e.currentTarget.style.backgroundColor = "#64ffda1a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#233554";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Artworks;
