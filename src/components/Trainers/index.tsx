// components/TopTrainers.tsx
import { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

// Trainers data array (same as before)
const trainers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Senior AI/ML Engineer",
    experience: "12 years",
    photo: "/assets/trainer1.jpg",
    companies: ["Microsoft", "Google", "Accenture"],
    certifications: [
      "AWS Solutions Architect",
      "Azure AI Engineer",
      "Google Cloud ML",
    ],
    specialization: "Machine Learning & Data Science",
    studentsmentored: 1200,
    rating: 4.9,
    location: "Hyderabad, India",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Cloud Solutions Architect",
    experience: "15 years",
    photo: "/assets/trainer2.jpg",
    companies: ["Amazon", "Salesforce", "Wipro"],
    certifications: ["AWS Certified", "Salesforce Admin", "Azure Expert"],
    specialization: "Cloud Computing & DevOps",
    studentsmentored: 980,
    rating: 4.8,
    location: "Seattle, USA",
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Data Science Lead",
    experience: "10 years",
    photo: "/assets/trainer3.jpg",
    companies: ["Oracle", "Cognizant", "TCS"],
    certifications: [
      "Data Science Professional",
      "Python Expert",
      "R Analytics",
    ],
    specialization: "Big Data & Analytics",
    studentsmentored: 1500,
    rating: 4.9,
    location: "Mumbai, India",
  },
  {
    id: 4,
    name: "David Chen",
    title: "Full Stack Developer",
    experience: "8 years",
    photo: "/assets/trainer4.jpg",
    companies: ["Meta", "Netflix", "Infosys"],
    certifications: ["React Expert", "Node.js Professional", "AWS Developer"],
    specialization: "Web Development & Mobile Apps",
    studentsmentored: 850,
    rating: 4.7,
    location: "London, UK",
  },
  {
    id: 5,
    name: "Ahmed Al-Rashid",
    title: "Cybersecurity Expert",
    experience: "14 years",
    photo: "/assets/trainer5.jpg",
    companies: ["IBM", "Cisco", "HCL"],
    certifications: ["CISSP", "CEH", "AWS Security"],
    specialization: "Cybersecurity & Ethical Hacking",
    studentsmentored: 750,
    rating: 4.8,
    location: "Dubai, UAE",
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    title: "AI Research Scientist",
    experience: "11 years",
    photo: "/assets/trainer6.jpg",
    companies: ["Apple", "Tesla", "Capgemini"],
    certifications: ["TensorFlow Expert", "PyTorch Professional", "AI Ethics"],
    specialization: "Artificial Intelligence & NLP",
    studentsmentored: 1100,
    rating: 4.9,
    location: "San Francisco, USA",
  },
];

const TopTrainers = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Optimized scroll animation using useEffect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Reduced speed for smoother animation
    const cardWidth = 272; // 64 * 4 + 16 (card width + gap)
    const totalWidth = cardWidth * trainers.length;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }

        if (scrollContainer) {
          scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  // Simplified variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden"
      ref={sectionRef}
      id="trainers"
    >
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-full mb-6 border border-blue-200/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex items-center justify-center shadow-md">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                TOP TRAINERS AT AI LINC
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              Get trained from the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                top 1% Instructors
              </span>
              <br />
              from MAANG companies
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Learn from industry experts with proven track records at the
              world&apos;s leading technology companies. Experience personalized
              mentorship that transforms careers.
            </motion.p>
          </motion.div>

          {/* Simplified Key Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
                title: "Global Expertise",
                description:
                  "Certified professionals from Microsoft, AWS, Salesforce, Google, and Oracle",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "Proven Track Record",
                description:
                  "8–15 years of industry experience in Fortune 500 companies",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
                    />
                  </svg>
                ),
                title: "International Perspective",
                description:
                  "Trainers from India, US, UK, and Middle East for diverse perspectives",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: "Personalized Mentorship",
                description:
                  "Hands-on guidance, real-time doubt solving, and career mentoring",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3" strokeWidth={2} />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 1v6m0 6v6m11-7h-6m-6 0H1"
                    />
                  </svg>
                ),
                title: "Placement-Oriented",
                description:
                  "Content designed to match industry job requirements perfectly",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
                title: "Certified & Recognized",
                description:
                  "90% hold multiple international certifications (AWS, Azure, Salesforce)",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20 text-center group relative overflow-hidden will-change-transform"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trainer Spotlight Cards */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="text-center">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Expert Trainers
                </span>
              </motion.h3>
              <motion.p
                className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Industry veterans who bring real-world experience to your
                learning journey with personalized attention and proven
                methodologies
              </motion.p>
            </div>

            {/* Optimized Scrolling Cards Container */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50/30 to-purple-50/30 p-4">
              {/* Scroll Indicator */}
              <motion.div
                className="absolute top-3 right-3 z-20 flex items-center space-x-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs text-gray-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                <span>Hover to pause</span>
              </motion.div>

              <div
                className="flex space-x-4 w-max"
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                  transform: "translateZ(0)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Triple the trainers for seamless loop */}
                {[...trainers, ...trainers, ...trainers].map(
                  (trainer, index) => (
                    <motion.div
                      key={`${trainer.id}-${index}`}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.02,
                        y: -4,
                        transition: { duration: 0.2 },
                      }}
                      className="flex-shrink-0 w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-white/30 p-4 relative overflow-hidden group cursor-pointer will-change-transform"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                    >
                      {/* Card Content */}
                      <div className="relative z-10">
                        {/* Trainer Photo & Video Play Button */}
                        <div className="relative mb-4">
                          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-lg">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-sm font-bold text-gray-700 shadow-inner">
                              {trainer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                          </div>

                          {/* Video Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md cursor-pointer">
                              <svg
                                className="w-3 h-3 text-white ml-0.5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>

                          {/* Experience Badge */}
                          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                            {trainer.experience}
                          </div>
                        </div>

                        {/* Trainer Info */}
                        <div className="text-center mb-4">
                          <h4 className="text-base font-bold text-gray-900 mb-1">
                            {trainer.name}
                          </h4>
                          <p className="text-blue-600 font-semibold text-xs mb-2">
                            {trainer.title}
                          </p>
                          <p className="text-xs text-gray-500 mb-2 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 inline-block mr-1 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {trainer.location}
                          </p>
                          <div className="text-xs text-gray-600 mb-3">
                            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                              {trainer.specialization}
                            </span>
                          </div>
                        </div>

                        {/* Companies */}
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-1 text-center font-semibold tracking-wide">
                            WORKED AT
                          </p>
                          <div className="flex flex-wrap justify-center gap-1">
                            {trainer.companies.map((company, idx) => (
                              <div
                                key={idx}
                                className="px-2 py-0.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-xs text-gray-700 font-medium border border-gray-200 shadow-sm"
                              >
                                {company}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Certifications */}
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-1 text-center font-semibold tracking-wide">
                            CERTIFICATIONS
                          </p>
                          <div className="space-y-1">
                            {trainer.certifications
                              .slice(0, 2)
                              .map((cert, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-2 py-1 rounded-md text-center border border-blue-100 font-medium"
                                >
                                  {cert}
                                </div>
                              ))}
                            {trainer.certifications.length > 2 && (
                              <div className="text-xs text-gray-400 text-center font-medium">
                                +{trainer.certifications.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                          <div className="text-center">
                            <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {trainer.studentsmentored.toLocaleString()}+
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Students
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                              {trainer.rating}
                              <svg
                                className="w-3 h-3 text-yellow-400 ml-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Rating
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Counter Stats */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  Our Impact in Numbers
                </motion.h3>
                <motion.p
                  className="text-base text-blue-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  Results that speak for our trainer excellence and student
                  success
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "100+",
                    label: "Certified Trainers",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    ),
                  },
                  {
                    number: "1,000+",
                    label: "Students Mentored Per Trainer",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    ),
                  },
                  {
                    number: "95%",
                    label: "Student Satisfaction Score",
                    icon: (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ),
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <motion.div
                      className="text-3xl md:text-4xl font-black mb-3"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div
                      className="text-blue-100 font-bold text-sm"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.7 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-200 inline-flex items-center space-x-4 relative overflow-hidden group"
            >
              <span className="relative">Meet Our Trainers</span>
              <svg
                className="w-6 h-6 relative group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopTrainers;
