import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    institutions: 0,
    students: 0,
    faculty: 0,
    engagement: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finalStats = {
      institutions: 1000,
      students: 1000000,
      faculty: 1000,
      engagement: 90,
    };

    let timer: number | null = null;
    let timeout: number | null = null;

    if (hasAnimated) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      timer = setInterval(() => {
        setCounters((prev) => ({
          institutions: Math.min(
            prev.institutions + finalStats.institutions / steps,
            finalStats.institutions
          ),
          students: Math.min(
            prev.students + finalStats.students / steps,
            finalStats.students
          ),
          faculty: Math.min(
            prev.faculty + finalStats.faculty / steps,
            finalStats.faculty
          ),
          engagement: Math.min(
            prev.engagement + finalStats.engagement / steps,
            finalStats.engagement
          ),
        }));
      }, stepTime);

      timeout = setTimeout(() => {
        if (timer) clearInterval(timer);
        setCounters(finalStats);
      }, duration);
    }

    return () => {
      if (timer) clearInterval(timer);
      if (timeout) clearTimeout(timeout);
    };
  }, [hasAnimated]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    const refCurrent = sectionRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
      observer.disconnect();
    };
  }, [hasAnimated]);

  const stats = [
    {
      value:
        Math.floor(counters.institutions) >= 1000
          ? "1000+"
          : `${Math.floor(counters.institutions)}`,
      label: "Institutions Served",
      color: "text-blue-600",
    },
    {
      value:
        Math.floor(counters.students) >= 1000000
          ? "1M+"
          : `${Math.floor(counters.students)}${
              counters.students >= 1000 ? "+" : ""
            }`,
      label: "Students Empowered",
      color: "text-purple-600",
    },
    {
      value:
        Math.floor(counters.faculty) >= 1000
          ? "1000+"
          : `${Math.floor(counters.faculty)}${
              counters.faculty >= 100 ? "+" : ""
            }`,
      label: "Faculty Trained",
      color: "text-green-600",
    },
    {
      value: `${Math.floor(counters.engagement)}%`,
      label: "Student Engagement Rates",
      color: "text-indigo-600",
    },
  ];

  const accreditations = [
    {
      name: "Microsoft",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
          className="h-8 w-auto"
        />
      ),
    },
    {
      name: "AWS",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
          className="h-8 w-auto"
        />
      ),
    },
    {
      name: "Google",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="h-8 w-auto"
        />
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
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
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Transforming education through measurable impact and innovative
            solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
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

        {/* Accreditations */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          
          <motion.div
            className="flex justify-center items-center space-x-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {accreditations.map((acc, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl border border-blue-200 hover:bg-opacity-90 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="mb-2 flex items-center justify-center">
                  {acc.logo}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
