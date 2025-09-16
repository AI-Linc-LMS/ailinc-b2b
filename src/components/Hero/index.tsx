"use client";

import { motion, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { AWSLogo } from "../../../public/icons/AWSLogo";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";
import { SalesforceLogo } from "../../../public/icons/SalesForceLogo";
import { ZapierLogo } from "../../../public/icons/ZapierLogo";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const textHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

function Hero() {
  const [isHoveringHeading, setIsHoveringHeading] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHoveringDescription, setIsHoveringDescription] = useState(false);
  const [isHoveringTrust, setIsHoveringTrust] = useState(false);

  const [headingMousePos, setHeadingMousePos] = useState({
    x: "50%",
    y: "50%",
  });
  const [descriptionMousePos, setDescriptionMousePos] = useState({
    x: "50%",
    y: "50%",
  });
  const [trustMousePos, setTrustMousePos] = useState({ x: "50%", y: "50%" });

  const rotatingWords = [
    "Education",
    "Enterprises",
    "Creators",
    "Startups",
    "Institutions",
    "Organizations",
  ];

  // Rotate words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(
        (prevIndex) => (prevIndex + 1) % rotatingWords.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLParagraphElement>(null);

  const handleHeadingMouseMove = (e: React.MouseEvent) => {
    if (!headingRef.current) return;
    const rect = headingRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHeadingMousePos({ x: `${x}px`, y: `${y}px` });
  };

  const handleDescriptionMouseMove = (e: React.MouseEvent) => {
    if (!descriptionRef.current) return;
    const rect = descriptionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDescriptionMousePos({ x: `${x}px`, y: `${y}px` });
  };

  const handleTrustMouseMove = (e: React.MouseEvent) => {
    if (!trustRef.current) return;
    const rect = trustRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTrustMousePos({ x: `${x}px`, y: `${y}px` });
  };

  const wordRotateVariants: Variants = {
    enter: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    center: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: 90,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const partnerLogos = [
    { Logo: MicrosoftLogo, name: "Microsoft" },
    { Logo: AWSLogo, name: "AWS" },
    { Logo: GoogleLogo, name: "Google" },
    { Logo: SalesforceLogo, name: "Salesforce" },
    { Logo: ZapierLogo, name: "Zapier" },
  ];

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Contrasting Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circular Gradient - Top Right */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)",
          }}
        />

        {/* Medium Circular Gradient - Bottom Left */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)",
          }}
        />

        {/* Small Accent Circle - Top Left */}
        <div
          className="absolute top-20 left-20 w-40 h-40 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-6 h-6 bg-blue-200 rounded-full opacity-40"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-purple-200 rotate-45 opacity-30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/12 w-8 h-8 border-2 border-emerald-200 rounded-full opacity-25"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle Light Rays */}
        <div
          className="absolute top-0 left-1/2 w-px h-full opacity-10 transform -translate-x-1/2 rotate-12"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.3) 20%, rgba(59, 130, 246, 0.1) 80%, transparent 100%)",
          }}
        />

        <div
          className="absolute top-0 right-1/3 w-px h-full opacity-8 transform rotate-[-12deg]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(147, 51, 234, 0.2) 30%, rgba(147, 51, 234, 0.05) 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <motion.div variants={fadeInUpVariants}>
            <motion.h1
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight cursor-pointer transition-all duration-300 px-2 sm:px-0"
              initial="rest"
              whileHover="hover"
              variants={textHoverVariants}
              onMouseEnter={() => setIsHoveringHeading(true)}
              onMouseLeave={() => setIsHoveringHeading(false)}
              onMouseMove={handleHeadingMouseMove}
              style={{
                backgroundImage: isHoveringHeading
                  ? `radial-gradient(circle at ${headingMousePos.x} ${headingMousePos.y}, rgba(59, 130, 246, 1) 0px, rgba(17, 24, 39, 1) 16vw)`
                  : "none",
                backgroundClip: isHoveringHeading ? "text" : "initial",
                WebkitBackgroundClip: isHoveringHeading ? "text" : "initial",
                color: isHoveringHeading ? "transparent" : "#111827",
              }}
            >
              <span className="block w-full text-center">
                AI-Powered Platform for
              </span>
              <span className="block w-full text-center relative min-h-[1.2em]">
                <motion.span
                  key={currentWordIndex}
                  variants={wordRotateVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={fadeInUpVariants}>
            <motion.p
              ref={descriptionRef}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed cursor-pointer transition-all duration-300"
              initial="rest"
              whileHover="hover"
              variants={textHoverVariants}
              onMouseEnter={() => setIsHoveringDescription(true)}
              onMouseLeave={() => setIsHoveringDescription(false)}
              onMouseMove={handleDescriptionMouseMove}
              style={{
                backgroundImage: isHoveringDescription
                  ? `radial-gradient(circle at ${descriptionMousePos.x} ${descriptionMousePos.y}, rgba(147, 51, 234, 1) 0px, rgba(75, 85, 99, 1) 16vw)`
                  : "none",
                backgroundClip: isHoveringDescription ? "text" : "initial",
                WebkitBackgroundClip: isHoveringDescription
                  ? "text"
                  : "initial",
                color: isHoveringDescription ? "transparent" : "#4B5563",
              }}
            >
              We help colleges and organizations with a 100% white-labeled AI
              app, integrated AI courses, and full institutional support — from
              digitalization to faculty training and placements — making every
              institution future-ready.
            </motion.p>
          </motion.div>

          {/* Trust Badge - Updated */}
          <motion.div variants={fadeInUpVariants}>
            <motion.p
              ref={trustRef}
              className="text-base sm:text-lg font-medium text-blue-600 tracking-wide cursor-pointer transition-all duration-300"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              onMouseEnter={() => setIsHoveringTrust(true)}
              onMouseLeave={() => setIsHoveringTrust(false)}
              onMouseMove={handleTrustMouseMove}
              style={{
                backgroundImage: isHoveringTrust
                  ? `radial-gradient(circle at ${trustMousePos.x} ${trustMousePos.y}, rgba(59, 130, 246, 1) 0px, rgba(37, 99, 235, 1) 16vw)`
                  : "none",
                backgroundClip: isHoveringTrust ? "text" : "initial",
                WebkitBackgroundClip: isHoveringTrust ? "text" : "initial",
                color: isHoveringTrust ? "transparent" : "#2563EB",
              }}
            >
              Trusted by 1000+ Organizations | 1M+ Students
            </motion.p>
          </motion.div>

          {/* Partner Logos - Updated with 5 logos */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-3 sm:px-4 md:px-6 py-3 md:py-4 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 max-w-5xl mx-auto"
            variants={fadeInUpVariants}
            whileHover={{
              scale: 1.02,
              y: -2,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.3,
              },
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Static label */}
            <span className="text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
              Powered by
            </span>
            {/* Animated logos */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {partnerLogos.map(({ Logo, name }, index) => (
                <motion.div
                  key={name}
                  className="flex items-center px-1 sm:px-2 py-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  variants={logoVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: {
                      type: "spring",
                      bounce: 0.6,
                      duration: 0.2,
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <Logo className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-600 whitespace-nowrap">
              for startups
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUpVariants}>
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg md:text-xl font-medium rounded-full overflow-hidden tracking-wide"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Glow Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-75"
                animate={{ opacity: [0.75, 1, 0.75] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <a href="#contact">
                <span className="relative z-10 flex items-center">
                  Book A Demo
                  <motion.svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </span>
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
