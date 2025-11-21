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
    <section className="min-h-screen py-20 px-6 relative flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            My Artworks
          </h2>
         
        </div>

        <div className="relative h-[600px] flex items-center justify-center mb-8 overflow-hidden">
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
            className="w-12 h-12 border border-gray-700 hover:border-white flex items-center justify-center text-xl
              text-white transition-all duration-300 hover:bg-white/10"
          >
            ←
          </button>

          <div className="text-center">
            <div className="text-gray-400 font-mono text-sm mb-2">
              {currentIndex + 1} / {artworks.length}
            </div>
            <div className="flex gap-2">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-2 bg-gray-700 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 border border-gray-700 hover:border-white flex items-center justify-center text-xl
              text-white transition-all duration-300 hover:bg-white/10"
          >
            →
          </button>
        </div>

        <div className="text-center mt-6 text-gray-500 text-xs">
          Auto-rotating every 3 seconds
        </div>
      </div>
    </section>
  );
}

export default Artworks;
