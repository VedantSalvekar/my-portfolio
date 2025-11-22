import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Artworks from "./components/Artworks";
import Work from "./components/Work";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#020c1b" }}>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="work" className="scroll-mt-20">
        <Work />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="artworks" className="scroll-mt-20">
        <Artworks />
      </section>

      {/* Footer */}
      <footer
        className="py-12 border-t mt-16"
        style={{ borderColor: "#233554" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p style={{ color: "#8892b0" }}>
            Built and designed by Vedant Salvekar
          </p>
          <p style={{ color: "#8892b0" }} className="mt-2">
            All rights reserved. ©
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
