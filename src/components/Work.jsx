import { useState } from "react";
import { motion } from "framer-motion";

function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "GIGIFY - UCC IGNITE PROGRAMME",
      location: "Cork, Ireland",
      role: "Software Engineer",
      period: "Dec 2024 - Dec 2025",
      highlights: [
        "Designed and shipped an autonomous, tool-using AI agent (OpenAI, agentic orchestration, Next.js) that plans and executes read-only tool calls across Algolia/Firestore, search, clash detection, and fee calculation, returning ranked results with an auditable, reviewable execution trace before any action is confirmed.",
        "Worked AI-first across design, implementation, and review, partnering with product and design to translate business requirements into a spec-driven agent design, integrated end-to-end into the venue create-gig flow.",
        "Built an automated invoice generation pipeline (Puppeteer, Handlebars) producing VAT-compliant PDFs, eliminating a manual billing process.",
        "Improved Firestore performance by 40% via indexing, caching, and batch operations, while shipping scalable, full-stack React/Next.js features across artist and venue dashboards.",
      ],
    },
    {
      company: "WAJOOBA LLC",
      location: "India",
      role: "Software Engineer",
      period: "Aug 2023 - Sep 2024",
      highlights: [
        "Built secure, scalable RESTful APIs with authentication and validation, integrating Stripe and Razorpay payment systems with subscriptions, webhooks, and transaction reconciliation, applying web security principles throughout.",
        "Built Node.js-based mental health assessment and CBT workflows, reducing therapist consultation preparation time by 40% through automated scoring and structured, rules-driven flows.",
        "Engineered cloud-native media delivery services using AWS S3 and API Gateway, enabling secure, low-latency content access at scale.",
        "Partnered directly with clients and mental health professionals across international markets to translate clinical requirements into production-ready features, delivering 8 major product releases, cutting admin overhead by 35%.",
      ],
    },
    {
      company: "OMUNIM SOFTWARE PVT LTD",
      location: "India",
      role: "Software Developer",
      period: "Jan 2023 - Jul 2023",
      highlights: [
        "Built browser-based ERP modules by translating core desktop workflows into web interfaces, improving accessibility and user adoption by 30%.",
        "Implemented authentication flows and integrated payment features to support secure access and transactions.",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span style={{ color: "#64ffda" }}>/ </span>
            <span style={{ color: "#ccd6f6" }}>experience</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Company list */}
          <div className="md:w-1/3">
            <div className="flex md:flex-col gap-0 overflow-x-auto md:overflow-visible">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="px-4 py-3 text-left whitespace-nowrap md:whitespace-normal transition-all duration-200 border-l-2 md:border-l-2 cursor-pointer"
                  style={{
                    color: activeIndex === index ? "#64ffda" : "#8892b0",
                    borderColor: activeIndex === index ? "#64ffda" : "#233554",
                    backgroundColor:
                      activeIndex === index ? "#64ffda0d" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (activeIndex !== index) {
                      e.currentTarget.style.backgroundColor = "#64ffda05";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeIndex !== index) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <span className="font-medium text-sm">{exp.company}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Experience details */}
          <div className="md:w-2/3 md:pl-8">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                <span style={{ color: "#ccd6f6" }}>
                  {experiences[activeIndex].role}
                </span>
                <span style={{ color: "#64ffda" }}> @ </span>
                <span style={{ color: "#64ffda" }}>
                  {experiences[activeIndex].company}
                </span>
              </h3>

              <div className="flex items-center gap-2">
                <p className="text-sm mb-4" style={{ color: "#8892b0" }}>
                  {experiences[activeIndex].location}
                </p>
                <p className="text-sm mb-4" style={{ color: "#8892b0" }}>
                  {experiences[activeIndex].period}
                </p>
              </div>

              <ul className="space-y-4">
                {experiences[activeIndex].highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ color: "#8892b0" }}
                  >
                    <span style={{ color: "#64ffda", fontSize: "0.8em" }}>
                      /
                    </span>
                    <span className="leading-relaxed text-base">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
