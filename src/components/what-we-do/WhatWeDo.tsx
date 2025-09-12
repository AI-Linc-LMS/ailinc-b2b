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

          {/* Stats Section */}
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
                <motion.div
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
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal service={selectedService} onClose={handleCloseModal} />
    </>
  );
};

export default WhatWeDo;
