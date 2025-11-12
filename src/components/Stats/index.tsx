"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { AWSLogo } from "../../../public/icons/AWSLogo";
import { useTranslation } from "@/context/LanguageContext";

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  description?: string;
  hoverData?: {
    title: string;
    institutions: Array<{
      name: string;
      logo: string;
      location: string;
    }>;
  };
}

const stats: StatItem[] = [
  {
    number: 1000,
    suffix: "+",
    label: "Organizations",
    description: "Trusted by leading institutions",
    hoverData: {
      title: "Partner Institutions",
      institutions: [
        {
          name: "Osmania University",
          logo: "/images/institutions/osmania.jpg",
          location: "Hyderabad, India",
        },
        {
          name: "Kakatiya University",
          logo: "/images/institutions/kakatiya.jpg",
          location: "Warangal, India",
        },
        {
          name: "JNTUH",
          logo: "/images/institutions/jntuh.jpg",
          location: "Hyderabad, India",
        },
        {
          name: "IIT Hyderabad",
          logo: "/images/institutions/iith.jpg",
          location: "Hyderabad, India",
        },
        {
          name: "BITS Pilani",
          logo: "/images/institutions/bits.jpg",
          location: "Pilani, India",
        },
        {
          name: "NIT Warangal",
          logo: "/images/institutions/nitw.jpg",
          location: "Warangal, India",
        },
      ],
    },
  },
  {
    number: 1000000,
    suffix: "M+",
    label: "Students",
    description: "Empowered with AI skills",
    hoverData: {
      title: "Student Programs",
      institutions: [
        {
          name: "AI Foundation Course",
          logo: "/images/programs/ai-foundation.jpg",
          location: "Online & Campus",
        },
        {
          name: "Machine Learning Bootcamp",
          logo: "/images/programs/ml-bootcamp.jpg",
          location: "Intensive Program",
        },
        {
          name: "Data Science Certificate",
          logo: "/images/programs/data-science.jpg",
          location: "6-Month Program",
        },
        {
          name: "Deep Learning Specialization",
          logo: "/images/programs/deep-learning.jpg",
          location: "Advanced Track",
        },
        {
          name: "AI for Business",
          logo: "/images/programs/ai-business.jpg",
          location: "Executive Program",
        },
        {
          name: "Research Projects",
          logo: "/images/programs/research.jpg",
          location: "University Partnerships",
        },
      ],
    },
  },
  {
    number: 1000,
    suffix: "+",
    label: "Faculty Trained",
    description: "Upskilled educators",
    hoverData: {
      title: "Faculty Development Programs",
      institutions: [
        {
          name: "AI Teaching Methodology",
          logo: "/images/faculty/teaching-method.jpg",
          location: "Pedagogy Training",
        },
        {
          name: "Research Collaboration",
          logo: "/images/faculty/research-collab.jpg",
          location: "Joint Research",
        },
        {
          name: "Industry Connect",
          logo: "/images/faculty/industry-connect.jpg",
          location: "Industry Exposure",
        },
        {
          name: "Certification Programs",
          logo: "/images/faculty/certification.jpg",
          location: "Professional Development",
        },
        {
          name: "Workshop Series",
          logo: "/images/faculty/workshops.jpg",
          location: "Regular Training",
        },
        {
          name: "Mentorship Network",
          logo: "/images/faculty/mentorship.jpg",
          location: "Peer Learning",
        },
      ],
    },
  },
  {
    number: 90,
    suffix: "%",
    label: "Student Engagement",
    description: "Active learning rates",
    hoverData: {
      title: "Engagement Metrics",
      institutions: [
        {
          name: "Interactive Sessions",
          logo: "/images/engagement/interactive.jpg",
          location: "95% Participation",
        },
        {
          name: "Project Completion",
          logo: "/images/engagement/projects.jpg",
          location: "88% Success Rate",
        },
        {
          name: "Peer Collaboration",
          logo: "/images/engagement/collaboration.jpg",
          location: "92% Team Projects",
        },
        {
          name: "Industry Projects",
          logo: "/images/engagement/industry-projects.jpg",
          location: "85% Real Projects",
        },
        {
          name: "Assessment Scores",
          logo: "/images/engagement/assessments.jpg",
          location: "90% Above Average",
        },
        {
          name: "Course Completion",
          logo: "/images/engagement/completion.jpg",
          location: "93% Finish Rate",
        },
      ],
    },
  },
];

const accreditations = [
  { name: "Microsoft", logo: <MicrosoftLogo className="h-6 w-6" /> },
  { name: "AWS", logo: <AWSLogo className="h-6 w-6" /> },
  { name: "Google", logo: <GoogleLogo className="h-6 w-6" /> },
];

// Scrollable Overlay Components
const StatHoverOverlay = ({
  stat,
  onClose,
}: {
  stat: StatItem;
  onClose: () => void;
}) => (
  <motion.div
    className="fixed inset-0 z-[9999] flex items-start justify-center pt-16 pb-8 px-4 bg-black/30 backdrop-blur-sm"
    style={{ overflowY: "auto", WebkitOverflowScrolling: "touch" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    onClick={onClose}
  >
    <motion.div
      className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-gray-100 my-8"
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">
            {stat.hoverData?.title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      </div>

      <div
        className="max-h-96 overflow-y-auto p-6"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="grid grid-cols-2 gap-3">
          {stat.hoverData?.institutions.map((institution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-xs font-bold text-blue-700 shadow-sm">
                {institution.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h4 className="text-xs font-semibold text-gray-900 text-center mb-1">
                {institution.name}
              </h4>
              <p className="text-xs text-gray-500 text-center">
                {institution.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

// Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const accreditationVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function CountUpNumber({
  end,
  duration = 2000,
  suffix = "",
  isVisible = false,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  isVisible?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isVisible]);

  const formatDisplayNumber = (num: number, suffix: string) => {
    if (suffix === "M+") {
      return (num / 1000000).toFixed(1);
    }
    if (suffix === "K+") {
      return (num / 1000).toFixed(0);
    }
    return num.toLocaleString();
  };

  return (
    <motion.span
      className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0.8,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      }}
    >
      {formatDisplayNumber(count, suffix)}
      {suffix}
    </motion.span>
  );
}

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslation();

  // Disable body scroll when any overlay is open
  useEffect(() => {
    if (hoveredStat !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [hoveredStat]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <>
      <motion.section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 right-20 w-32 h-32 bg-purple-500 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div className="text-center mb-16" variants={headingVariants}>
            <motion.h2
              className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight"
              variants={headingVariants}
            >
              {t("Our Impact in")} {" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("Numbers")}
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-4"
              variants={headingVariants}
              transition={{ delay: 0.2 }}
            >
              {t(
                "Transforming education through AI-powered solutions and measurable results"
              )}
            </motion.p>

            {/* Clickability Hint */}
            <motion.p
              className="text-sm text-blue-600 font-medium flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              {t("Click on any card to explore details")}
            </motion.p>
          </motion.div>

          {/* Stats Grid - Single Line Layout */}
          <motion.div
            className="flex flex-wrap justify-center items-stretch gap-4 md:gap-6 lg:gap-8 mb-16"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
                className="relative text-center p-4 md:p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all duration-300 min-h-[180px] w-full max-w-[200px] md:max-w-[220px] lg:max-w-[240px] flex flex-col justify-center cursor-pointer select-none group"
                onClick={() =>
                  hoveredStat === index
                    ? setHoveredStat(null)
                    : setHoveredStat(index)
                }
              >
                {/* Click Indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mb-4 flex-shrink-0">
                  <CountUpNumber
                    end={stat.number}
                    duration={2500 + index * 200}
                    isVisible={isVisible}
                    suffix={stat.suffix}
                  />
                </div>
                <motion.h3
                  className="text-base md:text-lg font-semibold text-gray-900 mb-2 tracking-wide flex-shrink-0 group-hover:text-blue-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {t(stat.label)}
                </motion.h3>
                <motion.p
                  className="text-xs md:text-sm text-gray-600 font-light flex-shrink-0 group-hover:text-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {stat.description ? t(stat.description) : null}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* Simplified Certifications Section - Single Line */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.3,
                },
              }}
            >
              <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
                {t("Get industry certifications from")}
              </span>

              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  variants={accreditationVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: {
                      type: "spring",
                      bounce: 0.6,
                      duration: 0.2,
                    },
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <motion.div
                    className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {accreditation.logo}
                  </motion.div>
                  <span className="text-base md:text-lg font-semibold text-gray-800 tracking-wide hover:text-blue-700 transition-colors duration-300">
                    {accreditation.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Thunder Effect Impact Statement */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.9,
            }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-200/30 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Thunder Effect */}
              <motion.div className="relative mr-3">
                <motion.div
                  className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full blur-md opacity-30 -top-1 -left-1"
                  animate={{
                    opacity: [0.2, 0.8, 0.3, 1, 0.1, 0.6, 0.2],
                    scale: [1, 1.4, 1.1, 1.6, 1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.2, 0.25, 0.4, 0.6, 1],
                  }}
                />

                {[...Array(3)].map((_, index) => (
                  <motion.svg
                    key={index}
                    className="absolute w-6 h-6 stroke-white stroke-2 drop-shadow-lg"
                    fill="none"
                    viewBox="0 0 24 24"
                    style={{
                      filter: `hue-rotate(${
                        index * 60
                      }deg) brightness(1.5) drop-shadow(0 0 4px rgba(59, 130, 246, 0.8))`,
                    }}
                    animate={{
                      opacity: [0, 1, 0, 1, 0, 0, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                      times: [0, 0.05, 0.1, 0.12, 0.17, 0.3, 1],
                    }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 1, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                        times: [0, 0.05, 0.15, 0.2],
                      }}
                    />
                  </motion.svg>
                ))}

                <motion.svg
                  className="w-6 h-6 text-blue-600 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{
                    scale: [1, 1.1, 1, 1.05, 1],
                    filter: [
                      "brightness(1)",
                      "brightness(1.5) drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
                      "brightness(1)",
                      "brightness(1.3)",
                      "brightness(1)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </motion.svg>

                {[...Array(8)].map((_, index) => {
                  const angle = index * 45 * (Math.PI / 180);
                  const radius = 15 + Math.random() * 10;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={`spark-${index}`}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        x: x,
                        y: y,
                      }}
                      animate={{
                        opacity: [0, 1, 0, 1, 0, 0, 1, 0],
                        scale: [0, 2, 0, 1.5, 0, 0, 1.8, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.2 + Math.random() * 0.5,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}

                {[...Array(4)].map((_, index) => (
                  <motion.div
                    key={`crack-${index}`}
                    className="absolute bg-white opacity-60"
                    style={{
                      width: "1px",
                      height: `${8 + Math.random() * 6}px`,
                      left: `${40 + index * 5}%`,
                      top: `${30 + Math.random() * 40}%`,
                      transformOrigin: "bottom",
                    }}
                    animate={{
                      scaleY: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                      rotate: [0, Math.random() * 30 - 15, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 2 + Math.random() * 3,
                      delay: index * 0.4,
                    }}
                  />
                ))}

                <motion.div
                  className="absolute inset-0 bg-white rounded-full mix-blend-screen"
                  animate={{
                    opacity: [0, 0, 0.8, 0, 0, 0.6, 0, 0, 0, 0.9, 0],
                    scale: [1, 1, 2, 1, 1, 1.5, 1, 1, 1, 2.5, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    times: [
                      0, 0.1, 0.12, 0.14, 0.3, 0.32, 0.34, 0.7, 0.8, 0.82, 1,
                    ],
                  }}
                />
              </motion.div>

              <span className="text-lg font-medium text-gray-800 tracking-wide relative z-10">
                {t("Driving Digital Transformation in Education")}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Scrollable Modal Overlays */}
      <AnimatePresence>
        {hoveredStat !== null && stats[hoveredStat]?.hoverData && (
          <StatHoverOverlay
            stat={{
              ...stats[hoveredStat],
              hoverData: stats[hoveredStat].hoverData
                ? {
                    ...stats[hoveredStat].hoverData,
                    title: t(stats[hoveredStat].hoverData?.title ?? ""),
                institutions:
                  stats[hoveredStat].hoverData?.institutions ?? [],
                  }
                : undefined,
            }}
            onClose={() => setHoveredStat(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Stats;
