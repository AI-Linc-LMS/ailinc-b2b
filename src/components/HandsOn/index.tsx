import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- SVG Icons (Self-Contained & Animated) ---

const PlayIcon = () => (
  <svg
    className="w-16 h-16 text-white drop-shadow-lg"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <motion.svg
    className="w-8 h-8 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ x: 3 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m0-7H3"
    />
  </motion.svg>
);

const SQLIcon = () => (
  <motion.svg
    whileHover={{ rotate: 10, scale: 1.1 }}
    className="w-8 h-8 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 16c-3.31 0-6-2.69-6-6s2.69-6 6-6" />
    <path d="M12 20v-4" />
    <path d="M6 20v-4" />
    <path d="M18 10c-3.31 0-6-2.69-6-6s2.69-6 6-6" />
  </motion.svg>
);

const ExcelIcon = () => (
  <motion.svg
    whileHover={{ y: -3, scale: 1.1 }}
    className="w-8 h-8 text-green-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
    <line x1="10" y1="21" x2="8" y2="21" />
  </motion.svg>
);

const TableauIcon = () => (
  <motion.svg
    whileHover={{ scaleX: 1.1, scaleY: 0.9 }}
    className="w-8 h-8 text-orange-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </motion.svg>
);

const AgenticAIIcon = () => (
  <motion.svg
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="w-8 h-8 text-indigo-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 12h8" />
    <path d="M12 16h4" />
  </motion.svg>
);

// --- Data ---
const workshops = [
  {
    id: "workshop-1",
    title: "Build a Website with AI (No Coding)",
    description:
      "Learn to create stunning, functional websites using Agentic AI, without writing a single line of code.",
    videoUrl: "https://www.youtube.com/embed/6H2vFc8cbqQ",
    bookingLink: "https://ailinc.com/workshop-registration",
    bgColor: "from-blue-500 to-blue-700",
  },
  {
    id: "workshop-2",
    title: "Master Top AI Tools",
    description:
      "A deep dive into industry-leading AI tools like Lovable.ai, Heygen, and Zapier to automate and innovate.",
    videoUrl: "https://www.youtube.com/embed/iWNTkX5P-JI",
    bookingLink: "https://ailinc.com/workshop-registration",
    bgColor: "from-purple-500 to-purple-700",
  },
];

const freeCourses = [
  {
    title: "SQL for Beginners",
    link: "https://app.ailinc.com/course/sql-fundamentals",
    icon: <SQLIcon />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Excel Essentials",
    link: "https://app.ailinc.com/course/excel-for-data",
    icon: <ExcelIcon />,
    bgColor: "bg-green-50",
  },
  {
    title: "Tableau Visualization",
    link: "https://app.ailinc.com/course/tableau-visualization",
    icon: <TableauIcon />,
    bgColor: "bg-orange-50",
  },
  {
    title: "Product Dev with Agentic AI",
    link: "https://app.ailinc.com/course/agentic-ai-dev",
    icon: <AgenticAIIcon />,
    bgColor: "bg-indigo-50",
  },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

// --- Main Component ---
function HandsOnLearningSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Hands-On Learning with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Real-World Outcomes
            </span>
          </h2>
        </motion.div>

        {/* --- Workshops with Inline Player --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {workshops.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              variants={itemVariants}
              className={`relative rounded-2xl shadow-lg overflow-hidden cursor-pointer bg-gradient-to-br ${item.bgColor} p-8 flex flex-col justify-between`}
              style={{ minHeight: "280px" }}
              whileHover={{ scale: selectedId ? 1 : 1.03 }}
            >
              <motion.div layout="position" className="text-white">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </motion.div>
              <motion.div
                layout="position"
                className="mt-6 flex justify-center"
              >
                <PlayIcon />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {workshops
                .filter((item) => item.id === selectedId)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={item.id}
                    className={`w-full max-w-4xl bg-gradient-to-br ${item.bgColor} rounded-2xl shadow-2xl overflow-hidden p-4`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-6 right-6 text-white bg-black/30 rounded-full p-1 z-10"
                      whileHover={{ scale: 1.2 }}
                    >
                      <CloseIcon />
                    </motion.button>
                    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
                      <iframe
                        src={`${item.videoUrl}?autoplay=1&rel=0`}
                        title={item.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-4 text-white">
                      <motion.h2
                        layout="position"
                        className="text-2xl font-bold"
                      >
                        {item.title}
                      </motion.h2>
                      <motion.a
                        href={item.bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block w-full text-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
                      >
                        Book Your Slot
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Free Courses --- */}
        <div>
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 mb-2 text-center"
          >
            Start with Our Free Courses
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 mb-8 font-semibold"
          >
            Kickstart your AI & Data journey - No cost, lifetime access
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {freeCourses.map((course, index) => (
              <motion.a
                key={index}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                className={`group block p-6 rounded-2xl border border-gray-200 transition-all ${course.bgColor} hover:bg-white`}
              >
                <div className="mb-4">{course.icon}</div>
                <h4 className="text-lg font-bold text-gray-900">
                  {course.title}
                </h4>
              </motion.a>
            ))}
            <motion.a
              href="https://app.ailinc.com/courses"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                borderColor: "#4f46e5",
              }}
              className="group flex flex-col items-center justify-center text-center p-6 rounded-2xl border-2 border-dashed border-gray-300 hover:bg-indigo-50 transition-all duration-300 lg:col-span-1 sm:col-span-2"
            >
              <div className="mb-4 text-indigo-500 transition-transform group-hover:scale-110">
                <ArrowRightIcon />
              </div>
              <h4 className="text-lg font-bold text-gray-900">
                Explore All Courses
              </h4>
            </motion.a>
          </div>
        </div>

        {/* --- Flagship Program CTA --- */}
        <motion.div
          variants={itemVariants}
          className="mt-24 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center"
        >
          <h3 className="text-2xl font-extrabold mb-2 text-gray-900">
            Advance Your Career with Our Flagship Program
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 font-semibold">
            Get mentorship, industry projects & guaranteed internships.
          </p>
          <motion.a
            href="https://ailinc.com/flagship-course"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-blue-700 transition"
          >
            Contact Us to Enroll
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HandsOnLearningSection;
