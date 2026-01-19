import { useState } from "react";
import { motion } from "framer-motion";

function Work() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "GIGIFY",
      location: "Cork, Ireland",
      role: "Full-Stack Developer",
      period: "DEC 2024 - SEPT 2025",
      highlights: [
        "Architected and deployed 10+ serverless Firebase Cloud Functions handling gig lifecycle management (creation, acceptance, cancellation), reducing booking coordination time by 70% through automated workflows with Firestore transactions, conflict detection, and real-time FCM/SMS notifications",
        "Engineered automated invoice generation system using Puppeteer and Handlebars, dynamically generating VAT-compliant PDF invoices and delivering them via Nodemailer, eliminating manual billing processes and ensuring regulatory compliance for 100% of confirmed gigs",
        "Resolved critical frontend bugs in React/Next.js calendar, booking, and authentication flows",
        "Optimized Firestore database performance by implementing composite indexes, server-side caching, and chunked batch operations to bypass query limits, improving read/write performance by 40% across artist and venue dashboards",
        
      ],
    },
    {
      company: "WAJOOBA LLC",
      location: "Pune, India",
      role: "Software Engineer",
      period: "AUG 2023 - AUG 2024",
      highlights: [
        "Engineered interactive mental health assessment and CBT activity workflows for children using Node.js APIs, reducing therapist consultation prep time by 40% through structured question flows, real-time scoring, and automated progress tracking",
        "Developed admin interfaces for psychologists to manage assessment templates, review student responses, and book consultations, decreasing administrative overhead by 35% through automated workflows and data visualization.",
        "Integrated Razorpay and Stripe payment systems with subscription logic, webhook handlers, and transaction reconciliation for course purchases and memberships",
        "Designed RESTful APIs for S3-backed video delivery, progress analytics, enabling therapists to track 12+ behavioural metrics per child across CBT modules and activities",
      ],
    },
    {
      company: "OMUNIM SOFTWARE PVT LTD",
      location: "Pune, India",
      role: "Front-End Developer",
      period: "JAN 2023 - JUNE 2023",
      highlights: [
        "Built browser-based ERP modules by translating core desktop workflows into web interfaces, improving accessibility and user adoption by 30%",
        "Implemented authentication flows and integrated payment features to support secure access and transactions",
        "Worked directly with stakeholders to simplify complex ERP processes into intuitive UI flows, reducing user errors and support queries by 25%",
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
