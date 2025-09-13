import { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { servicesData } from "../../data/servicesData";
import type { ServiceData } from "../../data/servicesData";

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(
    null
  );

  const handleLearnMore = (service: ServiceData) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full opacity-20"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Do at Ai Linc
            </h2>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Transforming education through AI-powered solutions, comprehensive
              skill development, and institutional excellence programs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.3 }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 100,
                  rotateX: 30,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <ServiceCard
                  service={service}
                  onLearnMore={() => handleLearnMore(service)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, staggerChildren: 0.1 }}
          >
            {[
              {
                value: "800+",
                label: "Institutions Served",
                color: "text-blue-600",
              },
              {
                value: "100k+",
                label: "Students Trained",
                color: "text-purple-600",
              },
              { value: "250+", label: "AI Courses", color: "text-green-600" },
              { value: "98%", label: "Success Rate", color: "text-indigo-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.2,
                    textShadow: "0 0 20px currentColor",
                    transition: { duration: 0.2 },
                  }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>

                {/* Animated underline */}
          {/* <motion.div
                  className={`h-1 bg-gradient-to-r from-transparent via-current to-transparent mt-2 mx-auto rounded-full opacity-0 group-hover:opacity-100`}
                  style={{
                    color:
                      stat.color.replace("text-", "") === "blue-600"
                        ? "#2563eb"
                        : stat.color.replace("text-", "") === "purple-600"
                        ? "#9333ea"
                        : stat.color.replace("text-", "") === "green-600"
                        ? "#16a34a"
                        : "#4f46e5",
                  }}
                  initial={{ scaleX: 0, width: 0 }}
                  whileHover={{ scaleX: 1, width: "60px" }}
                  transition={{ duration: 0.3 }}
                /> */}
          {/* </motion.div> */}
          {/* ))} */}
          {/* </motion.div> */}

          {/* Global USP Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative inline-flex items-center space-x-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl px-12 py-6 shadow-2xl overflow-hidden"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 60px -12px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-indigo-400/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* 3D Mockup Elements */}
              <motion.div
                className="relative z-10 flex items-center space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Mobile App Mockup */}
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-8 h-12 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg relative overflow-hidden">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="absolute top-2.5 left-0.5 right-0.5 bottom-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded"></div>
                    <div className="absolute top-3 left-1 right-1 h-1 bg-white/20 rounded-sm"></div>
                    <div className="absolute top-4.5 left-1 right-1 h-0.5 bg-white/10 rounded-sm"></div>
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
    
                {/* Course Dashboard Mockup */}
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.1,
                    rotateY: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-12 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg relative overflow-hidden border">
                    <div className="absolute top-1 left-1 right-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-sm"></div>
                    <div className="absolute top-2.5 left-1 w-3 h-0.5 bg-gray-400 rounded-sm"></div>
                    <div className="absolute top-3.5 left-1 w-2 h-0.5 bg-gray-300 rounded-sm"></div>
                    <div className="absolute top-2.5 right-1 w-2 h-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-sm"></div>
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-purple-500/20 rounded-lg blur-sm opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              {/* Lightbulb Icon */}
              {/* <motion.span
                className="text-3xl relative z-10"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 15,
                  filter: "drop-shadow(0 0 20px rgba(255, 193, 7, 0.8))",
                  transition: { duration: 0.3 },
                }}
              >
                💡
              </motion.span> */}

              {/* USP Text */}
              <motion.p
                className="text-lg font-semibold text-gray-800 leading-relaxed max-w-4xl relative z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold"
                  whileHover={{
                    backgroundSize: "200% 200%",
                    transition: { duration: 0.3 },
                  }}
                >
                  AI-linc
                </motion.span>{" "}
                is the only platform that combines AI-powered apps, skill
                development, and institutional transformation under one
                white-labeled solution — built for higher education.
              </motion.p>

              {/* More 3D Elements on the right */}
              <motion.div
                className="relative z-10 flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {/* AI Brain Icon */}
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.15,
                    rotateY: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full shadow-lg relative overflow-hidden">
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                    <div className="absolute top-2.5 right-1.5 w-1 h-1 bg-white/40 rounded-full"></div>
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-0.5 bg-white/20 rounded-full"></div>
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-pink-500/30 rounded-full blur-sm opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Analytics Chart */}
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.15,
                    rotateX: 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-8 h-6 bg-gradient-to-br from-green-400 to-teal-600 rounded-lg shadow-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-1 w-1 h-2 bg-white/40 rounded-t-sm"></div>
                    <div className="absolute bottom-0 left-3 w-1 h-4 bg-white/60 rounded-t-sm"></div>
                    <div className="absolute bottom-0 right-1 w-1 h-3 bg-white/50 rounded-t-sm"></div>
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-green-500/30 rounded-lg blur-sm opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              {/* Floating particles effect */}
              <motion.div
                className="absolute top-2 left-10 w-1 h-1 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-4 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-60"
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal service={selectedService} onClose={handleCloseModal} />
    </>
  );
};

export default WhatWeDo;
