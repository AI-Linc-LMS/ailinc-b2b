"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

const FranchiseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const t = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section
      className="py-20 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden"
      ref={sectionRef}
      id="franchise"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full blur-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-2xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100/80 to-amber-100/80 backdrop-blur-sm rounded-full mb-6 border border-orange-200/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full mr-3 flex items-center justify-center shadow-md"
                animate={{
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(249, 115, 22, 0.4)",
                    "0 0 0 8px rgba(249, 115, 22, 0)",
                  ],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                <svg
                  className="w-3 h-3 text-white"
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
              <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent tracking-wide">
                {t("Franchise Opportunities")}
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                {t("Franchise Operations")}
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t(
                "Expand your business with AI Linc's proven franchise model. Join our network and bring world-class AI education to your region."
              )}
            </motion.p>
          </motion.div>

          {/* Franchise Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Franchise Operations Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 overflow-hidden cursor-pointer h-full flex flex-col"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 opacity-0 group-hover:opacity-5"
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Image */}
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <motion.div
                      className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-200"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src="/images/sheaker-reddy.jpeg"
                        alt="Guntuka Shekhar Reddy"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center mb-6 flex-grow">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t("Franchise Operations")}
                  </motion.h3>
                  <motion.p
                    className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {t("Guntuka Shekhar Reddy")}
                  </motion.p>
                  <motion.p
                    className="text-xs text-gray-500 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    {t("Authorized Partner")}
                  </motion.p>
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {t(
                      "Expand your business with AI Linc's proven franchise model. Join our network and bring world-class AI education to your region with comprehensive support and training."
                    )}
                  </motion.p>
                </div>

                {/* Contact Information */}
                <motion.div
                  className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-xs text-gray-500 mb-2 text-center font-semibold">
                    {t("Contact Information")}
                  </p>
                  <p className="text-xs text-gray-700 text-center mb-2">
                    <span className="font-semibold">Guntuka Shekhar Reddy</span>
                  </p>
                  <a
                    href="tel:+918977936209"
                    className="flex items-center justify-center text-sm text-gray-700 hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 89779 36209
                  </a>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Link href="/#contact" passHref>
                    <span className="relative flex items-center justify-center">
                      {t("Contact Franchise Operations")}
                      <motion.svg
                        className="w-4 h-4 ml-2"
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
                    </span>
                  </Link>
                </motion.button>
              </div>
            </motion.div>

            {/* Glocal Partner Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 overflow-hidden cursor-pointer h-full flex flex-col"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 opacity-0 group-hover:opacity-5"
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <motion.svg
                      className="w-16 h-16 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center mb-6 flex-grow">
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {t("Authorized Partner - Glocal")}
                  </motion.h3>
                  <motion.p
                    className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {t("Franchise, Business Development & Collaborations")}
                  </motion.p>
                  <motion.p
                    className="text-xs text-gray-500 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                  >
                    {t("Authorized Partner")}
                  </motion.p>
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {t(
                      "Glocal is our authorized partner for franchise operations, business development, and strategic collaborations. Partner with Glocal to explore franchise opportunities and grow your business with AI Linc."
                    )}
                  </motion.p>
                </div>

                {/* Contact Information */}
                <motion.div
                  className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-xs text-gray-500 mb-2 text-center font-semibold">
                    {t("Contact Information")}
                  </p>
                  <p className="text-xs text-gray-700 text-center mb-2">
                    <span className="font-semibold">Glocal</span>
                  </p>
                  <a
                    href="tel:+918977936209"
                    className="flex items-center justify-center text-sm text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 89779 36209
                  </a>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Link href="/#contact" passHref>
                    <span className="relative flex items-center justify-center">
                      {t("Contact Glocal")}
                      <motion.svg
                        className="w-4 h-4 ml-2"
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
                    </span>
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseSection;
