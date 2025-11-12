"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import SQLIcon from "../../../public/icons/SqlIcon";
import ExcelIcon from "../../../public/icons/ExcelIcon";
import TableauIcon from "../../../public/icons/TableauIcon";
import AgenticAIIcon from "../../../public/icons/AgenticIcon";
import { PlayIcon } from "../../../public/icons/PlayIcon";
import ExternalLinkIcon from "../../../public/icons/ExternalLinkIcon";
import { CloseIcon } from "../../../public/icons/CloseIcon";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";
import { IBMLogo } from "../../../public/icons/IBMLogo";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { useTranslation } from "@/context/LanguageContext";

// --- SVG Icons for Stats ---
const FireIcon = () => (
  <svg
    className="w-4 h-4 text-orange-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
      clipRule="evenodd"
    />
  </svg>
);

const BadgeIcon = () => (
  <svg
    className="w-4 h-4 text-yellow-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const VideoIcon = () => (
  <svg
    className="w-4 h-4 text-blue-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
  </svg>
);

// New Icons for Explore Card
const RocketIcon = () => (
  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Helper function to extract YouTube video ID ---
const getYouTubeVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};

// --- Data ---
const workshops = [
  {
    id: "workshop-1",
    title: "Build a Website with AI (No Coding)",
    description:
      "Learn to create stunning, functional websites using Agentic AI, without writing a single line of code.",
    youtubeUrl: "https://youtu.be/6H2vFc8cbqQ?si=Gl_m-Tv3e_6HZWpU",
    videoUrl: "https://www.youtube.com/embed/6H2vFc8cbqQ",
    bookingLink: "/workshop-registration",
  },
  {
    id: "workshop-2",
    title: "Master Top AI Tools",
    description:
      "A deep dive into industry-leading AI tools like Lovable.ai, Heygen, and Zapier to automate and innovate.",
    youtubeUrl: "https://youtu.be/iWNTkX5P-JI?si=HDHnW7Xix4Cpngo_",
    videoUrl: "https://www.youtube.com/embed/iWNTkX5P-JI",
    bookingLink: "/workshop-registration",
  },
];

const freeCourses = [
  {
    title: "SQL for Beginners",
    description: "Master database fundamentals",
    link: "https://app.ailinc.com/course/sql-fundamentals",
    icon: <SQLIcon />,
    bgColor: "from-blue-50 to-blue-100",
    accentColor: "blue",
    progress: 23,
    videosCompleted: 15,
    totalVideos: 65,
    nextLesson: "JOIN Operations & Relationships",
    duration: "8 min",
  },
  {
    title: "Excel Essentials",
    description: "Data analysis & automation",
    link: "https://app.ailinc.com/course/excel-for-data",
    icon: <ExcelIcon />,
    bgColor: "from-green-50 to-green-100",
    accentColor: "green",
    progress: 45,
    videosCompleted: 28,
    totalVideos: 62,
    nextLesson: "Advanced Formulas & Functions",
    duration: "12 min",
  },
  {
    title: "Tableau Visualization",
    description: "Create stunning dashboards",
    link: "https://app.ailinc.com/course/tableau-visualization",
    icon: <TableauIcon />,
    bgColor: "from-orange-50 to-orange-100",
    accentColor: "orange",
    progress: 18,
    videosCompleted: 12,
    totalVideos: 67,
    nextLesson: "Interactive Dashboard Design",
    duration: "15 min",
  },
  {
    title: "Product Dev with Agentic AI",
    description: "Build AI-powered products",
    link: "https://app.ailinc.com/course/agentic-ai-dev",
    icon: <AgenticAIIcon />,
    bgColor: "from-indigo-50 to-indigo-100",
    accentColor: "indigo",
    progress: 67,
    videosCompleted: 42,
    totalVideos: 63,
    nextLesson: "Multi-Agent System Architecture",
    duration: "18 min",
  },
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

// --- Updated Course Card Component ---
const UpdatedCourseCard = ({
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
  link = "#",
}: {
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
  link?: string;
}) => {
  const circumference = 2 * Math.PI * 14;
  const t = useTranslation();

  return (
    <motion.div
      className={`w-full bg-gradient-to-br ${bgColor} border border-gray-200 rounded-2xl shadow-lg p-6 h-full`}
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
          <h1 className="text-xl font-bold text-gray-900 mb-3">{heading}</h1>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 uppercase tracking-wide font-medium">
              {text}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Microsoft", logo: <MicrosoftLogo /> },
                { name: "IBM", logo: <IBMLogo /> },
                { name: "Google", logo: <GoogleLogo /> },
              ].map((company, index) => (
                <motion.span
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="inline-flex items-center px-2 py-1 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 shadow-sm"
                >
                  <div className="w-4 h-4 mr-2 flex items-center justify-center">
                    {company.logo}
                  </div>
                  {company.name}
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
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 32 32">
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
                className="text-sm font-bold text-gray-700"
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
            <h3 className="text-sm font-semibold text-gray-800 mb-1">
              {t("Course Progress")}
            </h3>
            <p className="text-xs text-gray-600">
              {videosCompleted}/{totalVideos} {t("videos")}
            </p>
          </div>
        </div>

        {/* Stats with Better Aligned SVG Icons */}
        <div className="flex space-x-4">
          {[
            { value: streak, label: t("Days"), icon: <FireIcon /> },
            { value: badges, label: t("Badges"), icon: <BadgeIcon /> },
            { value: videosCompleted, label: t("Videos"), icon: <VideoIcon /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 bg-${accentColor}-100 rounded-full mb-1.5`}
              >
                <div className="flex items-center justify-center w-4 h-4">
                  {stat.icon}
                </div>
              </div>
              <div className="text-sm font-bold text-gray-800 leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Button with Better Colors */}
      {(nextLesson || duration) && (
        <div className="mt-4 space-y-1 text-xs text-gray-600">
          {nextLesson && (
            <p>
              <span className="font-semibold text-gray-800">{t("Next")}:</span>{" "}
              {nextLesson}
            </p>
          )}
          {duration && (
            <p>
              <span className="font-semibold text-gray-800">{t("Duration")}:</span>{" "}
              {duration}
            </p>
          )}
        </div>
      )}

      <motion.a
        href={link}
        target="_blank"
        className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-center text-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {t("Enroll Now")}
      </motion.a>
    </motion.div>
  );
};

// --- Main Component ---
function HandsOnLearningSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const t = useTranslation();

  const localizedWorkshops = workshops.map((item) => ({
    ...item,
    title: t(item.title),
    description: t(item.description),
  }));

  const localizedFreeCourses = freeCourses.map((course) => ({
    ...course,
    title: t(course.title),
    description: t(course.description),
    nextLesson: t(course.nextLesson),
    duration: t(course.duration),
  }));

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
            {t("Hands-On Learning with")} {" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t("Real-World Outcomes")}
            </span>
          </h2>
        </motion.div>

        {/* --- Workshops Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {localizedWorkshops.map((item) => {
            const videoId = getYouTubeVideoId(item.youtubeUrl);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative rounded-2xl shadow-lg overflow-hidden bg-white"
                whileHover={{ y: -5 }}
              >
                {/* YouTube Thumbnail with Play Overlay */}
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={thumbnailUrl}
                    alt={item.title}
                    width={1000}
                    height={562}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <PlayIcon onClick={() => setSelectedId(item.id)} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      {t("Watch on YouTube")}
                      <ExternalLinkIcon />
                    </a>
                    <a
                      href={item.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all"
                    >
                      {t("Book Your Slot")}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Inline Video Player Modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {localizedWorkshops
                .filter((item) => item.id === selectedId)
                .map((item) => (
                  <motion.div
                    key={item.id}
                    className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  >
                    <motion.button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-6 right-6 text-white bg-black/50 rounded-full p-2 z-10 hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <CloseIcon />
                    </motion.button>
                    <div className="w-full aspect-video bg-black">
                      <iframe
                        src={`${item.videoUrl}?autoplay=1&rel=0`}
                        title={item.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h2>
                      <a
                        href={item.bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                      >
                        {t("Book Your Slot")}
                      </a>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Free Courses Section --- */}
        <motion.div variants={itemVariants}>
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-gray-800 mb-2 text-center"
          >
            {t("Start with Our Free Courses")}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 mb-12 text-lg font-semibold"
          >
            {t("Kickstart your AI & Data journey - No cost, lifetime access")}
          </motion.p>

          {/* 2x2 Grid for Free Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {localizedFreeCourses.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <UpdatedCourseCard
                  heading={course.title}
                  text={course.description}
                  bgColor={course.bgColor}
                  accentColor={course.accentColor}
                  progress={course.progress}
                  videosCompleted={course.videosCompleted}
                  totalVideos={course.totalVideos}
                  nextLesson={course.nextLesson}
                  duration={course.duration}
                  streak={Math.floor(Math.random() * 10) + 1}
                  badges={Math.floor(Math.random() * 5) + 1}
                  link={course.link}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Explore All Courses Section --- */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden"
              whileHover={{
                y: -6,
                boxShadow: "0px 25px 50px rgba(147, 51, 234, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background decorations */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 right-8 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-white rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white transform rotate-45" />
              </div>

              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <RocketIcon />
                </motion.div>

                {/* Main content */}
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {t("Ready for Premium Courses?")}
                </motion.h3>

                <motion.p
                  className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {t(
                    "Unlock advanced AI courses, get personalized mentorship, work on industry projects, and secure guaranteed placements."
                  )}
                </motion.p>

                {/* Features grid */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {["50+", "1:1", "100+", "10K+"].map((number, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">
                        {number}
                      </div>
                      <div className="text-sm text-purple-200">
                        {t([
                          "Premium Courses",
                          "Mentorship",
                          "Industry Projects",
                          "Success Stories",
                        ][index])}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.a
                  href="https://app.ailinc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span>{t("Explore All Courses")}</span>
                  <motion.div
                    className="ml-3 group-hover:translate-x-1 transition-transform duration-200"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
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
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Flagship Program CTA --- */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center"
        >
          <h3 className="text-2xl font-extrabold mb-2 text-gray-900">
            {t("Advance Your Career with Our Flagship Program")}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 font-semibold">
            {t("Get mentorship, industry projects & guaranteed internships.")}
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg transition"
          >
            {t("Contact Us to Enroll")}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HandsOnLearningSection;
