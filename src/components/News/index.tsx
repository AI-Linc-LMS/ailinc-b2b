// components/NewsVideo.tsx
import { useState, useRef, useMemo } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

// Enhanced news data array - can easily be extended with many more items
const newsItems = [
  {
    id: 1,
    category: "NEWS",
    source: "The Hans India",
    timeToRead: "3 min",
    title:
      "OU's UCE partners with AI LINC to upskill students in AI, ML, and data analytics",
    description:
      "Osmania University's College of Engineering (UCE) has signed an MoA with AI LINC Technologies to upskill students in Artificial Intelligence, Machine Learning, and Data Analytics. The partnership aims to bridge the gap between academia and industry, providing students with practical skills and certifications.",
    link: "https://www.thehansindia.com/amp/telangana/ous-uce-partners-with-ai-linc-to-upskill-students-in-ai-ml-and-data-analytics-1004680",
    imageSrc: "/gallery/1.png",
  },
];

const NewsVideo = () => {
  const [visibleNewsCount, setVisibleNewsCount] = useState(6); // Show first 6 items initially
  const [showAllNews, setShowAllNews] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Memoized filtered news for performance
  const displayedNews = useMemo(() => {
    return showAllNews ? newsItems : newsItems.slice(0, visibleNewsCount);
  }, [showAllNews, visibleNewsCount]);

  // Scroll navigation functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const loadMoreNews = () => {
    if (visibleNewsCount < newsItems.length) {
      setVisibleNewsCount((prev) => Math.min(prev + 3, newsItems.length));
    } else {
      setShowAllNews(true);
    }
  };

  // Properly typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const videoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Utility to return color class for category tag
  function getTagColor(category: string) {
    switch (category.toUpperCase()) {
      case "NEWS":
      case "PARTNERSHIP":
        return "bg-blue-500";
      case "UPDATE":
        return "bg-purple-500";
      case "EVENT":
        return "bg-orange-500";
      case "ACHIEVEMENT":
        return "bg-red-500";
      default:
        return "bg-indigo-500";
    }
  }

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      ref={sectionRef}
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
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-blue-600 mr-2 text-lg"
              >
                📰
              </motion.span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Latest Updates
              </span>
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              Making{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline">
                Headlines
              </span>
            </motion.h2>
          </motion.div>

          {/* Enhanced News Cards Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Header and Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4">
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {displayedNews.length} of {newsItems.length}
                </span>
                <div className="hidden md:flex space-x-2">
                  <button
                    onClick={scrollLeft}
                    className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow hover:shadow-md hover:scale-105 transition-transform"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={scrollRight}
                    className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow hover:shadow-md hover:scale-105 transition-transform"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal Scroll Cards */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4"
              >
                {displayedNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    custom={index}
                    whileHover={{ scale: 1.03 }}
                    className="snap-center flex-shrink-0 w-[320px] md:w-[360px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow transition-transform duration-300"
                  >
                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        fill
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full text-white ${getTagColor(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-black/60 rounded-full">
                          {item.source}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {item.timeToRead} read
                        </span>

                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all hover:scale-95 hover:shadow-lg"
                        >
                          Read Now
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {!showAllNews && visibleNewsCount < newsItems.length && (
                <div className="flex justify-center mt-8">
                  <motion.button
                    onClick={loadMoreNews}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-xl transition-all"
                  >
                    Load More ({newsItems.length - visibleNewsCount} remaining)
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            variants={videoVariants}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Video Content - Updated with your requested content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                See{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ai Linc{" "}
                </span>
                in Action
              </h3>
              <p className="text-gray-600 text-lg">
                Watch our comprehensive product demo to understand how Ai Linc
                transforms educational institutions with cutting-edge AI and ML
                solutions.
              </p>

              {/* What You'll See Section - Enhanced with Motion */}
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.h4
                  className="text-lg font-bold text-gray-800 mb-4 flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-4 h-4 text-blue-600"
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
                  </motion.span>
                  What You&apos;ll See:
                </motion.h4>
                <div className="space-y-3">
                  {[
                    "The problem colleges face with AI adoption",
                    "Ai Linc as the complete solution",
                    "White-label app demo (student & admin side)",
                    "Courses, certifications & placement assistance",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.3, duration: 0.5 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="flex items-start group cursor-pointer"
                    >
                      <motion.span
                        className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-700"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.1 * index + 0.5,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-200">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Key Benefits Section - Enhanced with Better Green Visibility */}
              <motion.div
                className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 shadow-lg border border-green-500 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
                }}
              >
                <motion.h4
                  className="text-lg font-bold text-white mb-4 flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.span
                    className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 shadow-lg"
                    whileHover={{ rotate: 360, backgroundColor: "#22c55e" }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.span>
                  Key Benefits:
                </motion.h4>
                <div className="space-y-3">
                  {[
                    "NAAC score improvement",
                    "Student testimonials & success stories",
                    "Faculty training & development",
                    "Complete digital transformation",
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.6, duration: 0.5 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="flex items-start group cursor-pointer"
                    >
                      <motion.span
                        className="text-green-200 mr-3 flex-shrink-0 font-bold text-lg group-hover:text-white"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.1 * index + 0.8,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        ✓
                      </motion.span>
                      <span className="text-green-50 text-sm font-medium group-hover:text-white transition-colors duration-200">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Video Player - Using Your Requested HTML Structure */}
            <motion.div variants={videoVariants} className="relative">
              <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="bg-gray-300 rounded-2xl p-4">
                  <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden group">
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-xl"
                      src="https://www.youtube.com/embed/enYDlLwAF5I?autoplay=1&rel=0&mute=1"
                      title="AI Linc Explainer Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="bg-gray-300 rounded-b-xl h-3 mx-4"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full shadow-lg flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>

              {/* Video Duration Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                Demo
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default NewsVideo;
