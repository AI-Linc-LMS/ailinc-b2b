// components/IncubationSupport.tsx
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

const IncubationSupport = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeSlide, setActiveSlide] = useState(0);
  const t = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const slideVariants: Variants = {
    enter: {
      x: 100,
      opacity: 0,
      scale: 0.95,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 1.2,
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

  // Video data
  const featuredVideo = {
    title: t("Bill Gates on navigating an AI future"),
    credits: t("Credits - CNN"),
    youtubeUrl: "https://youtu.be/Ny-qhl4N9dY?si=q267VRCxsx8-sVRA",
    embedUrl: "https://www.youtube.com/embed/Ny-qhl4N9dY",
    videoId: "Ny-qhl4N9dY",
  };

  const pitchSlides = [
    {
      id: 1,
      title: t("Student Entrepreneurship Programs"),
      subtitle: t("Building Tomorrow's Innovators"),
      description: t(
      "Transform student ideas into viable startups with comprehensive entrepreneurship programs, mentorship, and AI-powered business development tools."
      ),
      illustration: (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1 }}
          style={{ filter: "hue-rotate(0deg)" }}
        >
          <Image src="/pitchdeck/1.jpg" alt="funding" fill
            className="object-center" // Added object-center for better positioning
            sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 440px"
            priority={false} />
        </motion.div>
      ),
      features: [
      t("Business Model Canvas Workshops"),
      t("AI-Powered Market Research"),
      t("Product Development Guidance"),
      t("Go-to-Market Strategy Planning"),
      ],
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: 2,
      title: t("AI Project Mentoring"),
      subtitle: t("Expert Technical Guidance"),
      description: t(
        "Connect students with industry experts for personalized mentoring on AI projects, research initiatives, and technical skill development."
      ),
      illustration: (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1 }}
          style={{ filter: "hue-rotate(0deg)" }}
        >
          <Image src="/pitchdeck/2.jpg" alt="funding" fill
            className="object-center" // Added object-center for better positioning
            sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 440px"
            priority={false} />
        </motion.div>
      ),
      features: [
      t("One-on-One Technical Sessions"),
      t("Algorithm Optimization Support"),
      t("Research Paper Guidance"),
      t("Industry Best Practices"),
      ],
      color: "from-purple-600 to-violet-700",
    },
    {
      id: 3,
      title: t("Industry Collaborations"),
      subtitle: t("Strategic Partnership Network"),
      description: t(
        "Foster meaningful partnerships between academia and industry to create research opportunities, internships, and startup collaborations."
      ),
      illustration: (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1 }}
          style={{ filter: "hue-rotate(0deg)" }}
        >
          <Image src="/pitchdeck/3.jpg" alt="funding" fill
            className="object-center" // Added object-center for better positioning
            sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 440px"
            priority={false}/>
        </motion.div>
      ),
      features: [
      t("Corporate Partnership Programs"),
      t("Joint Research Initiatives"),
      t("Internship Placement Support"),
      t("Technology Transfer Assistance"),
      ],
      color: "from-emerald-600 to-teal-700",
    },
    {
      id: 4,
      title: t("Funding & Pitch Training"),
      subtitle: t("Investment Readiness Program"),
      description: t(
        "Prepare students for the investment world with comprehensive pitch training, financial modeling, and investor presentation skills."
      ),
      illustration: (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1 }}
          style={{ filter: "hue-rotate(0deg)" }}
        >
          <Image src="/pitchdeck/4.jpg" alt="funding" fill
            className="object-center" // Added object-center for better positioning
            sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, 440px"
            priority={false} />
        </motion.div>
      ),
      features: [
      t("Pitch Deck Development"),
      t("Financial Modeling Training"),
      t("Mock Investor Sessions"),
      t("Presentation Skills Workshop"),
      ],
      color: "from-amber-600 to-orange-700",
    },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % pitchSlides.length);
      }, 45000);

      return () => clearInterval(interval);
    }
  }, [isInView, pitchSlides]);

  return (
    <section
      className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden"
      ref={sectionRef}
      id="incubation-support"
    >
      {/* Light Theme Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Light Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Light Theme Header */}
          <motion.div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-full mb-6 border border-blue-200/30 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div
                className="w-3 h-3 bg-blue-600 rounded-full mr-3"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-blue-700 text-sm font-bold tracking-wide">
                {t("LIVE PRESENTATION")}
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              {t("Beyond AI Training:")}
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {t("Incubation Support")}
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {t("We help colleges build startup incubation cells powered by AI tools")}
            </motion.p>
          </motion.div>

          {/* Featured Video Section - INLINE PLAYBACK */}
          <motion.div
            variants={videoVariants}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gray-300 rounded-xl p-2">
                <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden group">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src={featuredVideo.embedUrl}
                    title={featuredVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="bg-gray-300 rounded-b-lg h-2 mx-2"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 text-white"
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
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full shadow-lg flex items-center justify-center"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </motion.div>

            {/* Video Credits Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-0.5 rounded-full text-[10px] font-medium"
            >
              {featuredVideo.credits}
            </motion.div>
          </motion.div>

          {/* Rest of your existing pitch deck slides code... */}
          <div className="relative">
            <div className="bg-white backdrop-blur-xl rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              {/* Light Slide Header */}
              <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">
                    {t("AI Linc Incubation Deck")}
                  </span>
                </div>
                <div className="text-gray-500 text-sm">
                  {String(activeSlide + 1).padStart(2, "0")} /{" "}
                  {String(pitchSlides.length).padStart(2, "0")}
                </div>
              </div>

              {/* Light Slide Content */}
              <div className="min-h-[600px] p-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid lg:grid-cols-2 gap-12 items-center h-full"
                  >
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                      >
                        <div
                          className={`inline-block px-4 py-2 bg-gradient-to-r ${pitchSlides[activeSlide].color} rounded-lg text-white text-sm font-bold mb-4`}
                        >
                          {t("SOLUTION")} #{activeSlide + 1}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
                          {pitchSlides[activeSlide].title}
                        </h3>
                        <p
                          className={`text-lg font-semibold bg-gradient-to-r ${pitchSlides[activeSlide].color} bg-clip-text text-transparent mb-6`}
                        >
                          {pitchSlides[activeSlide].subtitle}
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {pitchSlides[activeSlide].description}
                        </p>
                      </motion.div>

                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 1.0 }}
                      >
                        <h4 className="text-gray-900 font-bold text-lg mb-4">
                          {t("Key Features:")}
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {pitchSlides[activeSlide].features.map(
                            (feature, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 1.8 + idx * 0.3,
                                  duration: 0.9,
                                }}
                              >
                                <motion.div
                                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${pitchSlides[activeSlide].color}`}
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: idx * 0.5,
                                  }}
                                />
                                <span className="text-gray-700 font-medium">
                                  {t(feature)}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side - Illustration */}
                    <motion.div
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, scale: 0.7, rotateY: 20 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ delay: 1.0, duration: 1.5 }}
                    >
                      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                        {/* Fixed aspect ratio container */}
                        <div className="aspect-[4/3] relative w-full">
                          {pitchSlides[activeSlide].illustration}
                        </div>
                      </div>
                    </motion.div>

                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Light Slide Controls */}
              <div className="px-8 py-6 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                <motion.button
                  onClick={() =>
                    setActiveSlide(
                      (prev) =>
                        (prev - 1 + pitchSlides.length) % pitchSlides.length
                    )
                  }
                  className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-lg transition-colors border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="text-sm font-medium">{t("Previous")}</span>
                </motion.button>

                {/* Progress Dots */}
                <div className="flex space-x-2">
                  {pitchSlides.map((_, idx) => (
                    <motion.button
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-colors ${idx === activeSlide ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      onClick={() => setActiveSlide(idx)}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={() =>
                    setActiveSlide((prev) => (prev + 1) % pitchSlides.length)
                  }
                  className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded-lg transition-colors border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">{t("Next")}</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Auto-play Progress Bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, repeat: Infinity }}
              key={activeSlide}
            />
          </div>

          {/* Light Theme CTA */}
          <Link href="/#contact" passHref>
            <motion.div className="text-center mt-16">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-xl transition-all duration-300 inline-flex items-center space-x-3 cursor-pointer"
              >
                <span>{t("Launch Your Incubation Program")}</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IncubationSupport;
