// components/PartnerCollaboration.tsx
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";

const PartnerCollaboration = () => {
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

  // Partnership Models Data
  const partnershipModels = [
    {
      id: 1,
      title: t("Corporate Training Partners"),
      subtitle: t("Enterprise Learning Solutions"),
      description: t(
        "Transform your workforce with AI Linc's comprehensive training programs. Perfect for companies looking to upskill employees in cutting-edge technologies."
      ),
      icon: (
        <motion.svg
          className="w-16 h-16 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </motion.svg>
      ),
      benefits: [
        t("Custom curriculum development"),
        t("Dedicated success manager"),
        t("Bulk enrollment discounts"),
        t("Progress tracking & analytics"),
        t("Certificate programs"),
      ],
      features: [
        t("Tailored Learning Paths"),
        t("Real-time Analytics"),
        t("Industry Certifications"),
        t("Team Management Tools"),
      ],
      cta: t("Become a Corporate Partner"),
      color: "from-blue-600 to-indigo-700",
      bgPattern: "corporate",
    },
    {
      id: 2,
      title: t("Educational Institution Partners"),
      subtitle: t("Academic Excellence Program"),
      description: t(
        "Integrate AI Linc's industry-relevant curriculum into your academic programs. Enhance student outcomes with practical, job-ready skills."
      ),
      icon: (
        <motion.svg
          className="w-16 h-16 text-purple-600"
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
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01-.665-6.479L12 14z"
          />
        </motion.svg>
      ),
      benefits: [
        t("Faculty training & certification"),
        t("Student placement assistance"),
        t("Curriculum integration support"),
        t("Research collaboration opportunities"),
        t("Academic licensing rates"),
      ],
      features: [
        t("Faculty Development"),
        t("Placement Support"),
        t("Curriculum Integration"),
        t("Research Collaboration"),
      ],
      cta: t("Join Academic Network"),
      color: "from-purple-600 to-pink-600",
      bgPattern: "academic",
    },
    {
      id: 3,
      title: t("Technology Integration Partners"),
      subtitle: t("Platform & API Partnerships"),
      description: t(
        "Integrate AI Linc's learning solutions into your platform or offer white-label training programs to your customers."
      ),
      icon: (
        <motion.svg
          className="w-16 h-16 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </motion.svg>
      ),
      benefits: [
        t("API access & documentation"),
        t("White-label solutions"),
        t("Revenue sharing models"),
        t("Technical support & integration"),
        t("Co-marketing opportunities"),
      ],
      features: [
        t("API Integration"),
        t("White-label Options"),
        t("Revenue Sharing"),
        t("Technical Support"),
      ],
      cta: t("Explore Tech Partnership"),
      color: "from-green-600 to-teal-600",
      bgPattern: "tech",
    },
  ];

  return (
    <section
      className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/40 relative overflow-hidden"
      ref={sectionRef}
      id="solutions"
    >
      {/* Background Pattern - Fixed blur issue */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements - Reduced blur */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100/80 to-purple-100/80 backdrop-blur-sm rounded-full mb-6 border border-indigo-200/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mr-3 flex items-center justify-center shadow-md"
                animate={{
                  rotate: [0, 360],
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0.4)",
                    "0 0 0 8px rgba(99, 102, 241, 0)",
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
              <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                {t("Collaboration Opportunities")}
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
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t("Partner with AI Linc")}
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {t("and Transform Education")}
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t(
                "Join forces with AI Linc to deliver world-class technology education. Whether you're a corporation, educational institution, or technology company, we have the perfect partnership model for you."
              )}
            </motion.p>
          </motion.div>

          {/* Partnership Models - Fixed hover effects */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {partnershipModels.map((model, index) => (
              <motion.div
                key={model.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 overflow-hidden cursor-pointer"
              >
                {/* Background Gradient - Fixed blur */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-5`}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Elements - Reduced blur */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {model.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {model.title}
                    </motion.h3>
                    <motion.p
                      className={`text-sm font-semibold bg-gradient-to-r ${model.color} bg-clip-text text-transparent mb-4`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {model.subtitle}
                    </motion.p>
                    <motion.p
                      className="text-gray-600 text-sm leading-relaxed mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {model.description}
                    </motion.p>
                  </div>

                  {/* Features */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <p className="text-xs text-gray-500 mb-3 text-center font-semibold tracking-wide">
                      {t("Key Features")}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {model.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="text-xs bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-2 py-2 rounded-lg text-center border border-gray-200 font-medium"
                          whileHover={{
                            backgroundColor: "#f0f9ff",
                            borderColor: "#bfdbfe",
                            scale: 1.02,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Benefits */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className="text-xs text-gray-500 mb-3 text-center font-semibold tracking-wide">
                      {t("Partnership Benefits")}
                    </p>
                    <div className="space-y-2">
                      {model.benefits.slice(0, 3).map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-xs text-gray-600"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${model.color} rounded-full mr-2 flex-shrink-0`}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.2,
                            }}
                          />
                          {benefit}
                        </motion.div>
                      ))}
                      {model.benefits.length > 3 && (
                        <div className="text-xs text-gray-400 text-center">
                          +{model.benefits.length - 3} {t("more benefits")}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-6 py-3 bg-gradient-to-r ${model.color} text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <Link href="/#contact" passHref>
                      <span className="relative flex items-center justify-center">
                        {model.cta}
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
            ))}
          </motion.div>

          {/* Partnership Process - Updated with SVG icons */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="text-center mb-12">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {t("How It Works")}
              </motion.h3>
              <motion.p
                className="text-base text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {t(
                  "Our streamlined partnership process gets you started quickly and efficiently"
                )}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: t("Apply & Connect"),
                  description: t(
                    "Submit your partnership application and connect with our dedicated partnership team."
                  ),
                  icon: (
                    <svg
                      className="w-12 h-12 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: t("Collaborate & Plan"),
                  description: t(
                    "Work together to define partnership goals, requirements, and implementation timeline."
                  ),
                  icon: (
                    <svg
                      className="w-12 h-12 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: t("Launch & Grow"),
                  description: t(
                    "Go live with your partnership program and scale together with ongoing support."
                  ),
                  icon: (
                    <svg
                      className="w-12 h-12 text-pink-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  ),
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {process.icon}
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {process.step}
                    </motion.div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {process.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section - Fixed blur effects */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            {/* Background Pattern - Reduced blur */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 25% 25%, white 2px, transparent 2px)",
                backgroundSize: "50px 50px",
              }}
            />

            <div className="relative z-10 text-center">
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
              >
                {t("Ready to Partner with Us?")}
              </motion.h3>
              <motion.p
                className="text-base text-indigo-100 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
              >
                {t(
                  "Let's discuss how we can work together to deliver exceptional learning experiences and drive mutual growth."
                )}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" passHref>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group"
                  >
                    <span>{t("Schedule a Partnership Call")}</span>
                    <motion.svg
                      className="w-5 h-5 ml-2"
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </motion.svg>
                  </motion.button>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/10k-1w7lltuFKSRnzvRBsSN_Mas5K7-6G/view?usp=drive_link"
                  target="_blank"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-base hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                  >
                    <span>{t("Download Partnership Guide")}</span>
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ y: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </motion.svg>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerCollaboration;
