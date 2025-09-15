import React from "react";
import { motion } from "framer-motion";

interface CourseCardProps {
  heading: string;
  text: string;
  bgColor?: string;
  accentColor?: string;
  progress?: number;
  videosCompleted?: number;
  totalVideos?: number;
  nextLesson?: string;
  duration?: string;
  streak?: number;
  badges?: number;
}

const CourseCard = ({
  heading,
  text,
  bgColor = "from-slate-50 to-blue-50",
  accentColor = "emerald",
  progress = 15,
  videosCompleted = 12,
  totalVideos = 247,
  nextLesson = "Advanced Dashboard Creation",
  duration = "12 min",
  streak = 7,
  badges = 3,
}: CourseCardProps) => {
  const circumference = 2 * Math.PI * 14;
  const strokeDasharray = `${
    (progress / 100) * circumference
  } ${circumference}`;

  return (
    <motion.div
      className={`max-w-md mx-auto bg-gradient-to-br ${bgColor} border border-gray-200 rounded-2xl shadow-lg p-6`}
      whileHover={{ y: -4, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Header Section */}
      <motion.div
        className="flex justify-between items-start mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{heading}</h1>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
              {text}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Microsoft", "IBM", "Cisco"].map((company, index) => (
                <motion.span
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="inline-flex items-center px-3 py-1 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 shadow-sm"
                >
                  {company}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress Section */}
      <motion.div
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center space-x-4">
          {/* Circular Progress */}
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 32 32">
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-gray-200"
              />
              <motion.circle
                cx="16"
                cy="16"
                r="14"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className={`text-${accentColor}-500`}
                strokeDasharray={circumference}
                strokeDashoffset={
                  circumference - (progress / 100) * circumference
                }
                initial={{ strokeDashoffset: circumference }}
                animate={{
                  strokeDashoffset:
                    circumference - (progress / 100) * circumference,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                className="text-lg font-bold text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {progress}%
              </motion.span>
            </div>
          </div>
          {/* Progress Info */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">
              Course Progress
            </h3>
            <p className="text-sm text-gray-600">
              {videosCompleted}/{totalVideos} videos
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex space-x-4">
          {[
            { value: streak, label: "Day Streak", icon: "🔥" },
            { value: badges, label: "Badges", icon: "🏆" },
            { value: videosCompleted, label: "Videos", icon: "📹" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 bg-${accentColor}-100 rounded-full mb-1`}
              >
                <span className="text-sm">{stat.icon}</span>
              </div>
              <div className="text-lg font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Next Up Section */}
      <motion.div
        className={`bg-${accentColor}-50 border border-${accentColor}-200 rounded-lg p-4 mb-6`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className={`text-sm font-medium text-${accentColor}-800`}>
            Next Up
          </span>
          <span className={`text-sm font-medium text-${accentColor}-700`}>
            {duration}
          </span>
        </div>
        <div className="flex items-center">
          <div
            className={`w-2 h-2 bg-${accentColor}-500 rounded-full mr-3`}
          ></div>
          <h4 className={`text-sm font-semibold text-${accentColor}-900`}>
            {nextLesson}
          </h4>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        className={`block w-full bg-${accentColor}-600 hover:bg-${accentColor}-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Enroll Now
      </motion.a>
    </motion.div>
  );
};

export default CourseCard;
