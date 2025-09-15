"use client";

import { motion, Variants } from "framer-motion";
import { useEffect } from "react";

// Properly typed variants
const dotVariants: Variants = {
  animate: {
    scale: [1, 1.5, 1],
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const loadingTextVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};

const progressBarVariants: Variants = {
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 2.3,
      ease: "easeInOut",
    },
  },
};

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  useEffect(() => {
    // Simulate loading time - you can replace with actual loading logic
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 z-50"
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      {/* AI-themed animated logo */}
      <div className="flex items-center space-x-3 mb-8">
        {/* Animated dots representing AI processing */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              variants={dotVariants}
              animate="animate"
              transition={{ delay: index * 0.2 }}
            />
          ))}
        </div>

        {/* Pulsing AI circuit element */}
        <motion.div
          className="relative"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-blue-600 border-dashed opacity-30">
            <motion.div
              className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* More animated dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
              variants={dotVariants}
              animate="animate"
              transition={{ delay: (2 - index) * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Company name with typing effect */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          AI Linc
        </h1>
      </motion.div>

      {/* Loading text with dots animation */}
      <motion.div
        className="flex items-center space-x-1"
        variants={loadingTextVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-gray-600 text-lg">Initializing AI Linc</span>
        <div className="flex space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="text-blue-600 text-lg font-bold"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
            >
              .
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-gray-200 rounded-full mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          variants={progressBarVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </motion.div>
  );
}
