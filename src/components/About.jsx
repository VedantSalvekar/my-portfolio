import { motion } from 'framer-motion';

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 w-full lg:w-1/3 flex justify-center lg:justify-start"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-gray-700/50 flex items-center justify-center backdrop-blur-sm">
              <span className="text-gray-500 text-sm">Illustration/Avatar Placeholder</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                About Me
              </h2>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
                  Developer
                </span>
                <span className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
                  Artist
                </span>
              </div>
            </div>

            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
              <p>
                I'm a developer and a visual artist who loves building things that are both{' '}
                <span className="text-white font-medium">functional and beautiful</span>. My passion lies in creating products end-to-end — from designing clean interfaces, to architecting scalable systems, to managing small teams and bringing ideas to life.
              </p>
              
              <p>
                When I'm not writing code, I'm usually{' '}
                <span className="text-white font-medium">painting nature, portraits, and expressive visual pieces</span>. I've always believed that technology and art complement each other, and I bring this mindset into every project I build: balancing precision with creativity, and engineering with storytelling.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

