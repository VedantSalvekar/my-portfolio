import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import Projects from './components/Projects';
import Artworks from './components/Artworks';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <AnimatedBackground />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      
      <section id="work">
        <Work />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="artworks">
        <Artworks />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
