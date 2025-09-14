// components/SuccessStories.tsx
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

// Success stories data array
const successStories = [
  {
    id: 1,
    organization: "Osmania University",
    quote:
      "AI Linc gave our students confidence for placements with real AI projects.",
    author: "Training & Placement Officer",
    certified: 3000,
    certifiedLabel: "certified",
    growth: 40,
    growthLabel: "placement growth",
    icon: (
      <Image
        src="/images/osmania.jpg"
        alt="Osmania University"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-blue-500 to-blue-600",
    certifiedMax: 3500,
    growthMax: 50,
  },
  {
    id: 2,
    organization: "Kakatiya University",
    quote:
      "The credit-based AI electives helped us improve both NAAC scores and student skills.",
    author: "Dean, Academics",
    certified: 2200,
    certifiedLabel: "certified",
    growth: 0.5,
    growthLabel: "NAAC uplift",
    icon: (
      <Image
        src="/images/kakatiya.jpg"
        alt="Kakatiya University"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-purple-500 to-purple-600",
    certifiedMax: 3000,
    growthMax: 1,
  },
  {
    id: 3,
    organization: "Career Bridge",
    quote:
      "Through AI Linc, we could deliver industry-ready candidates to our hiring partners.",
    author: "Director, Career Bridge",
    certified: 1000,
    certifiedLabel: "upskilled",
    growth: 70,
    growthLabel: "placed",
    icon: "🚀",
    bgGradient: "from-green-500 to-green-600",
    certifiedMax: 1500,
    growthMax: 100,
  },
];

// Optimized Animated Progress Bar Component
const AnimatedProgressBar = ({
  value,
  maxValue,
  color,
  delay = 0,
}: {
  value: number;
  maxValue: number;
  color: string;
  delay?: number;
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full will-change-transform`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: "easeOut",
          }}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
      </div>
    </div>
  );
};

// Optimized Animated Circular Progress Component
const AnimatedCircularProgress = ({
  value,
  maxValue,
  //eslint-disable-next-line
  color,
  delay = 0,
}: {
  value: number;
  maxValue: number;
  color: string;
  delay?: number;
}) => {
  const percentage = (value / maxValue) * 100;
  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-16 h-16">
      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 50 50">
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#e5e7eb"
          strokeWidth="4"
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: "easeOut",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-xs font-bold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </div>
    </div>
  );
};

// Optimized Animated Bar Chart Component
const AnimatedBarChart = ({
  value,
  maxValue,
  color,
  delay = 0,
}: {
  value: number;
  maxValue: number;
  color: string;
  delay?: number;
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="flex items-end justify-center h-16 w-full">
      <motion.div
        className={`bg-gradient-to-t ${color} rounded-t-lg`}
        style={{ width: "40%" }}
        initial={{ height: 0 }}
        animate={{ height: `${percentage}%` }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

const SuccessStories = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Optimized variants with smoother transitions
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 md:py-28 bg-white"
      ref={sectionRef}
      id="success-stories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Success{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from our education partners across India
            </p>
          </motion.div>

          {/* Success Stories Cards - Optimized Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex flex-col h-full group will-change-transform"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Card Header - Fixed Icon Container */}
                <div className="flex items-center mb-6">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden mr-4 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    {/* Background gradient for image icons */}
                    {typeof story.icon !== "string" && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${story.bgGradient} opacity-20`}
                      />
                    )}

                    {/* Icon content - either image or emoji */}
                    {typeof story.icon === "string" ? (
                      <div
                        className={`w-full h-full bg-gradient-to-r ${story.bgGradient} flex items-center justify-center text-2xl rounded-xl`}
                      >
                        {story.icon}
                      </div>
                    ) : (
                      <div className="w-full h-full relative">{story.icon}</div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {story.organization}
                    </h3>
                    <p className="text-sm text-gray-500">{story.author}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-grow mb-6">
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic group-hover:text-gray-800 transition-colors duration-200">
                    &quot;{story.quote}&quot;
                  </blockquote>
                </div>

                {/* Statistics - Simplified Animation */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  {/* Certified Students */}
                  <div className="text-center space-y-3">
                    <motion.div
                      className="text-3xl font-bold text-gray-900 mb-1"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {story.certified.toLocaleString()}+
                    </motion.div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                      {story.certifiedLabel}
                    </div>
                    <AnimatedProgressBar
                      value={story.certified}
                      maxValue={story.certifiedMax}
                      color={story.bgGradient}
                      delay={0.8 + index * 0.1}
                    />
                  </div>

                  {/* Growth/Placement */}
                  <div className="text-center space-y-3">
                    <motion.div
                      className="text-3xl font-bold text-gray-900 mb-1"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      {story.growth}
                      {story.growthLabel.includes("NAAC") ? "" : "%"}
                    </motion.div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                      {story.growthLabel}
                    </div>
                    <div className="flex justify-center">
                      <AnimatedCircularProgress
                        value={story.growth}
                        maxValue={story.growthMax}
                        color={story.bgGradient}
                        delay={1 + index * 0.1}
                      />
                    </div>
                  </div>
                </div>

                {/* Simplified Bar Chart */}
                <div className="mt-6 pt-4 border-t border-gray-50">
                  <div className="text-center text-xs text-gray-400 mb-2">
                    Performance Overview
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <AnimatedBarChart
                        value={story.certified}
                        maxValue={story.certifiedMax}
                        color="from-blue-400 to-blue-600"
                        delay={1.2 + index * 0.1}
                      />
                      <div className="text-xs text-gray-400 mt-1">Students</div>
                    </div>
                    <div className="text-center">
                      <AnimatedBarChart
                        value={story.growth}
                        maxValue={story.growthMax}
                        color="from-green-400 to-green-600"
                        delay={1.4 + index * 0.1}
                      />
                      <div className="text-xs text-gray-400 mt-1">Growth</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Overall Stats - Simplified */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Total Impact Across All Partners
              </h3>
              <p className="text-gray-600">
                Combined results from AI Linc implementations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  6,200+
                </motion.div>
                <div className="text-gray-600 font-semibold mb-4">
                  Students Certified
                </div>
                <AnimatedProgressBar
                  value={6200}
                  maxValue={7000}
                  color="from-blue-600 to-purple-600"
                  delay={1.5}
                />
              </div>

              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  52%
                </motion.div>
                <div className="text-gray-600 font-semibold mb-4">
                  Avg. Placement Growth
                </div>
                <div className="flex justify-center">
                  <AnimatedCircularProgress
                    value={52}
                    maxValue={100}
                    color="from-green-600 to-blue-600"
                    delay={1.7}
                  />
                </div>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6 }}
                >
                  0.5
                </motion.div>
                <div className="text-gray-600 font-semibold mb-4">
                  Avg. NAAC Uplift
                </div>
                <AnimatedBarChart
                  value={0.5}
                  maxValue={1}
                  color="from-purple-600 to-pink-600"
                  delay={1.9}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
