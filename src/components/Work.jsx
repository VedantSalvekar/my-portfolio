import { motion } from "framer-motion";

function Work() {
  const experiences = [
    {
      company: "GIGIFY",
      location: "Cork, Ireland",
      website: "gigify.ie",
      role: "Full-Stack Developer Intern",
      period: "Dec 2024 – Sept 2025",
      highlights: [
        "Developed and optimized gig scheduling, invoice generation, and secure payment integration workflows",
        "Automated invoice generation using dynamic PDFs, streamlining billing processes",
        "Integrated cloud services (Firebase Functions, Firestore) for scalable, serverless architecture",
        "Optimized database queries and indexing for improved read/write performance",
        "Built responsive front-end components with React.js, Next.js, and Tailwind CSS",
      ],
      tech: "JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Node.js, Firebase, Algolia, Twilio, Vercel",
    },
    {
      company: "WAJOOBA LLC",
      location: "Pune, India",
      role: "Software Engineer",
      period: "Aug 2023 – Aug 2024",
      highlights: [
        "Developed and optimized flagship Android and iOS applications",
        "Integrated payment gateways like Stripe and Razorpay",
        "Managed continuous deployment processes for Play Store and App Store releases",
        "Reviewed and optimized codebases for improved maintainability and security",
      ],
      tech: "Flutter, Dart, Firebase, Stripe API, Razorpay API, Android, iOS",
    },
    {
      company: "OMUNIM SOFTWARE PVT LTD",
      location: "Pune, India",
      role: "Front-End Developer",
      period: "Jan 2023 – June 2023",
      highlights: [
        "Built and delivered 3+ core mobile applications replicating key ERP product features",
        "Integrated secure authentication and cloud-based payment gateways",
        "Led the mobile team and mentored 5 junior interns",
      ],
      tech: "Flutter, Dart, Firebase, REST APIs",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Work Experience
          </h2>
          
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-800 hidden md:block"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative mb-16 md:mb-20 ${
                  isLeft ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:text-left"
                }`}
              >
                <div
                  className={`absolute top-0 hidden md:block ${
                    isLeft
                      ? "right-0 transform translate-x-1/2"
                      : "left-0 transform -translate-x-1/2"
                  } w-4 h-4 bg-white border-4 border-black z-10`}
                ></div>

                {/* Content card */}
                <div
                  className={`md:w-[75%] ${
                    isLeft ? "md:ml-auto md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="border border-gray-800 hover:border-white transition-all duration-300 p-6 bg-black group flex flex-col">
                    <div className="flex-1">
                      <div className="mb-4 text-left">
                        <span className="inline-block px-3 py-1 border border-gray-700 text-xs text-gray-400">
                          {exp.period}
                        </span>
                      </div>

                      <div className="mb-3 text-left">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">
                          {exp.company}
                        </h3>
                        {exp.website && (
                          <a
                            href={`https://${exp.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                          >
                            {exp.website}
                          </a>
                        )}
                        <p className="text-gray-500 text-sm mt-1">
                          {exp.location}
                        </p>
                      </div>

                      <p className="text-base text-gray-300 font-medium mb-2 text-left">
                        {exp.role}
                      </p>

                      <ul className="space-y-2 mb-2 text-left">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-400 text-base"
                          >
                            <span className="text-white mt-0.5 flex-shrink-0">
                              •
                            </span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-800 text-left">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                        Tech Stack
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {exp.tech}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
