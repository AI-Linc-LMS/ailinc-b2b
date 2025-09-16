// components/TopTrainers.tsx
import { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { AmazonLogo } from "../../../public/icons/AmazonLogo";

// Trainers data array - exactly as you specified
const trainers = [
  {
    id: 1,
    name: "Shubham Lal",
    title: "SDE-2 & Founder",
    experience: "8 years",
    photo: "/trainers/shubham_lal.jpg",
    companies: [{ name: "Microsoft", Logo: MicrosoftLogo }],
    specialization: "AI Product Developer",
    studentsmentored: 1200,
    rating: 4.9,
    location: "Hyderabad, India",
    country: "India",
    linkedin: "https://www.linkedin.com/in/shubhamlal/",
    certifications: [
      "Azure AI Engineer",
      "Microsoft Certified",
      "AWS Solutions Architect",
    ],
    videoUrl: "/videos/shubham-intro.mp4",
    achievements: "Built AI products used by 10M+ users at Microsoft",
    mentorshipStyle: "Hands-on coding sessions with real-world projects",
  },
  {
    id: 2,
    name: "Yamini Bandi",
    title: "SDE-2 & ML Engineer",
    experience: "12 years",
    photo: "/trainers/yamini_bandi.jpg",
    companies: [{ name: "Amazon", Logo: AmazonLogo }],
    specialization: "ML Engineer",
    studentsmentored: 980,
    rating: 4.8,
    location: "Hyderabad, India",
    country: "India",
    linkedin: "https://www.linkedin.com/in/yaminibandi/",
    certifications: [
      "AWS ML Specialty",
      "Google Cloud ML",
      "TensorFlow Developer",
    ],
    videoUrl: "/videos/yamini-intro.mp4",
    achievements:
      "Developed ML models handling 1B+ daily predictions at Amazon",
    mentorshipStyle: "Real-time doubt solving with industry case studies",
  },
  {
    id: 3,
    name: "Divyansh Dubey",
    title: "Gen AI Expert",
    experience: "10 years",
    photo: "/trainers/Divyansh_dubey.jpg",
    companies: [{ name: "Google", Logo: GoogleLogo }],
    specialization: "Prompt & GenAI Expert",
    studentsmentored: 850,
    rating: 4.7,
    linkedin: "https://www.linkedin.com/in/divyansh-dubey/",
    location: "Bengaluru, India",
    country: "India",
    certifications: [
      "Google Cloud AI",
      "Prompt Engineering Certified",
      "LangChain Expert",
    ],
    videoUrl: "/videos/divyansh-intro.mp4",
    achievements: "Created viral GenAI applications with 5M+ users at Google",
    mentorshipStyle: "Career guidance with placement-focused training",
  },
  {
    id: 4,
    name: "Abirami Sukumari",
    title: "Staff Developer Advocate",
    experience: "15 years",
    photo: "/trainers/Abirami_sukumari.jpg",
    companies: [{ name: "Google", Logo: GoogleLogo }],
    specialization: "Cloud AI and Databases",
    studentsmentored: 5000,
    rating: 4.9,
    linkedin: "https://www.linkedin.com/in/abiramisukumaran/",
    location: "Bengaluru, India",
    country: "India",
    certifications: [
      "Google Cloud Architect",
      "Oracle Database Expert",
      "AI/ML Professional",
    ],
    videoUrl: "/videos/abirami-intro.mp4",
    achievements: "22 years of experience with Fortune 500 companies",
    mentorshipStyle: "Personalized career mentoring and skill development",
  },
];

const TopTrainers = () => {
  const sectionRef = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
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

  // Show ALL trainers in every feature (updated function)
  const getTrainersForFeature = (featureId: string) => {
    return trainers; // Return all trainers for every feature
  };

  // Helper function to render company logo
  const renderCompanyLogo = (
    company: {
      name: string;
      Logo?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      logo?: string;
    },
    size: string = "w-4 h-4"
  ) => {
    if (company.Logo) {
      // SVG Component
      const LogoComponent = company.Logo;
      return <LogoComponent className={size} />;
    } else if (company.logo) {
      // Image path
      return (
        <Image
          src={company.logo}
          alt={company.name}
          width={16}
          height={16}
          className={`${size} object-contain`}
        />
      );
    }
    return null;
  };

  const features = [
    {
      id: "expertise",
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
        "Our trainers are certified professionals from leading tech giants like Microsoft, AWS, Salesforce, Google, and Oracle",
      companyLogos: [MicrosoftLogo, GoogleLogo, AmazonLogo],
      hoverTitle: "Meet Our MAANG Experts",
    },
    {
      id: "track-record",
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
        "Each trainer has 8–15 years of industry experience in Fortune 500 companies",
      companyLogos: [GoogleLogo, AmazonLogo, MicrosoftLogo],
      hoverTitle: "Industry Veterans",
    },
    {
      id: "certified",
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
        "90% of our trainers hold multiple international certifications (AWS, Azure, Salesforce, Data Science, AI/ML)",
      companyLogos: [AmazonLogo, MicrosoftLogo, GoogleLogo],
      hoverTitle: "Certification Masters",
    },
    {
      id: "global-reach",
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
      title: "Global Reach",
      description:
        "Tutors from India, US, UK, and Middle East, ensuring diverse learning perspectives",
      companyLogos: [GoogleLogo, MicrosoftLogo, AmazonLogo],
      hoverTitle: "Worldwide Expertise",
    },
    {
      id: "mentorship",
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
      companyLogos: [GoogleLogo, AmazonLogo, MicrosoftLogo],
      hoverTitle: "Personal Mentors",
    },
    {
      id: "placement",
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
        "Trainers design content that directly matches industry job requirements",
      companyLogos: [MicrosoftLogo, GoogleLogo, AmazonLogo],
      hoverTitle: "Job-Ready Training",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden"
      ref={sectionRef}
      id="trainers"
    >
      {/* Background Pattern */}
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
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
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

          {/* Enhanced Features Grid with Trainer Hover */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => {
              const featureTrainers = getTrainersForFeature(feature.id);

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => {
                    setHoveredFeature(null);
                    setPlayingVideo(null);
                  }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/20 text-center group relative overflow-hidden cursor-pointer transition-all duration-300"
                  style={{
                    minHeight: hoveredFeature === feature.id ? "750px" : "auto",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="relative z-10 h-full">
                    {/* Default Content */}
                    <div
                      className={`transition-all duration-300 ${
                        hoveredFeature === feature.id
                          ? "opacity-0 absolute"
                          : "opacity-100"
                      }`}
                    >
                      <div className="flex justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>

                      {/* Company Logos */}
                      <div className="flex justify-center space-x-3">
                        {feature.companyLogos
                          .slice(0, 3)
                          .map((Logo, logoIndex) => (
                            <div
                              key={logoIndex}
                              className="w-8 h-8 bg-white rounded-full p-1.5 shadow-sm"
                            >
                              <Logo className="w-full h-full" />
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Hover Content - ALL Trainers */}
                    <div
                      className={`transition-all duration-300 ${
                        hoveredFeature === feature.id
                          ? "opacity-100"
                          : "opacity-0 absolute pointer-events-none"
                      }`}
                    >
                      {hoveredFeature === feature.id &&
                        featureTrainers.length > 0 && (
                          <div className="h-full flex flex-col">
                            <div className="text-center mb-4 flex-shrink-0">
                              <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {feature.hoverTitle}
                              </h4>
                              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-3 max-h-[650px]">
                              {featureTrainers.map((trainer) => (
                                <div
                                  key={trainer.id}
                                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-xl border border-blue-100"
                                >
                                  {/* Trainer Header */}
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="relative w-10 h-10 flex-shrink-0">
                                      <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                          <Image
                                            src={trainer.photo}
                                            alt={trainer.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                          />
                                        </div>
                                      </div>

                                      {/* Company Logo Badge */}
                                      <div className="absolute -bottom-0.5 -right-0.5">
                                        {trainer.companies[0] && (
                                          <div className="bg-white rounded-full p-0.5 shadow-md">
                                            {renderCompanyLogo(
                                              trainer.companies[0],
                                              "w-3 h-3"
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex-1 text-left">
                                      <h5 className="font-bold text-gray-900 text-sm">
                                        {trainer.name}
                                      </h5>
                                      <p className="text-blue-600 font-semibold text-xs">
                                        {trainer.title}
                                      </p>
                                      <p className="text-gray-500 text-xs">
                                        {trainer.location}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Companies worked at */}
                                  <div className="mb-2">
                                    <div className="text-xs font-semibold text-gray-700 mb-1">
                                      Companies
                                    </div>
                                    <div className="flex space-x-1">
                                      {trainer.companies.map((company, idx) => (
                                        <div
                                          key={idx}
                                          className="flex items-center space-x-1 bg-white px-2 py-0.5 rounded border"
                                        >
                                          {renderCompanyLogo(
                                            company,
                                            "w-3 h-3"
                                          )}
                                          <span className="text-xs text-gray-600">
                                            {company.name}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Key Info */}
                                  <div className="grid grid-cols-3 gap-2 mb-2 text-xs">
                                    <div className="text-center">
                                      <div className="font-bold text-blue-600">
                                        {trainer.experience}
                                      </div>
                                      <div className="text-gray-500 text-xs">
                                        Experience
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <div className="font-bold text-purple-600">
                                        {trainer.studentsmentored}+
                                      </div>
                                      <div className="text-gray-500 text-xs">
                                        Students
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <div className="font-bold text-green-600">
                                        {trainer.rating}⭐
                                      </div>
                                      <div className="text-gray-500 text-xs">
                                        Rating
                                      </div>
                                    </div>
                                  </div>

                                  {/* Certifications */}
                                  <div className="mb-2">
                                    <div className="text-xs font-semibold text-gray-700 mb-1">
                                      Certifications
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                      {trainer.certifications
                                        .slice(0, 2)
                                        .map((cert, idx) => (
                                          <span
                                            key={idx}
                                            className="bg-white px-1.5 py-0.5 rounded text-xs text-gray-600 border"
                                          >
                                            {cert}
                                          </span>
                                        ))}
                                      {trainer.certifications.length > 2 && (
                                        <span className="bg-blue-100 px-1.5 py-0.5 rounded text-xs text-blue-600 border border-blue-200">
                                          +{trainer.certifications.length - 2}
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Achievement/Specialization */}
                                  <div className="bg-white p-2 rounded-lg mb-2">
                                    <p className="text-xs text-gray-700 font-medium mb-1">
                                      {feature.id === "expertise" &&
                                        "🏆 Achievement"}
                                      {feature.id === "track-record" &&
                                        "💼 Experience"}
                                      {feature.id === "certified" &&
                                        "🎯 Specialization"}
                                      {feature.id === "global-reach" &&
                                        "🌍 Global Impact"}
                                      {feature.id === "mentorship" &&
                                        "🎓 Mentorship Style"}
                                      {feature.id === "placement" &&
                                        "💡 Training Focus"}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                      {feature.id === "expertise" &&
                                        trainer.achievements}
                                      {feature.id === "track-record" &&
                                        `${trainer.experience} at Fortune 500 companies`}
                                      {feature.id === "certified" &&
                                        `${trainer.certifications.length} active certifications`}
                                      {feature.id === "global-reach" &&
                                        `Training students globally from ${trainer.country}`}
                                      {feature.id === "mentorship" &&
                                        trainer.mentorshipStyle}
                                      {feature.id === "placement" &&
                                        trainer.mentorshipStyle}
                                    </p>
                                  </div>

                                  {/* LinkedIn Link */}
                                  <div className="flex justify-center">
                                    <a
                                      href={trainer.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center justify-center w-5 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm"
                                      title="View LinkedIn Profile"
                                    >
                                      <svg
                                        className="w-3 h-3 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
        </motion.div>
      </div>
    </section>
  );
};

export default TopTrainers;
