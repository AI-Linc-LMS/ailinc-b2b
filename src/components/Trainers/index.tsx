// components/TopTrainersHero.tsx
import { useMemo, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { AmazonLogo } from "../../../public/icons/AmazonLogo";
import { useTranslation } from "@/context/LanguageContext";

// Trainers data array
const trainersData = [
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
    linkedin: "https://www.linkedin.com/in/shubhamlal/",
    achievements: "Built AI products used by 10M+ users at Microsoft",
  },
  {
    id: 2,
    name: "Yamini Bandi",
    title: "SDE-2 & ML Engineer",
    experience: "5 years",
    photo: "/trainers/yamini_bandi.jpg",
    companies: [{ name: "Amazon", Logo: AmazonLogo }],
    specialization: "ML Engineer",
    studentsmentored: 980,
    rating: 4.8,
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/yaminibandi/",
    achievements: "Developed ML models handling 1B+ daily predictions at Amazon",
  },
  {
    id: 3,
    name: "Divyansh Dubey",
    title: "Gen AI Expert",
    experience: "7 years",
    photo: "/trainers/Divyansh_dubey.jpg",
    companies: [{ name: "Google", Logo: GoogleLogo }],
    specialization: "Prompt & GenAI Expert",
    studentsmentored: 850,
    rating: 4.7,
    linkedin: "https://www.linkedin.com/in/divyansh-dubey/",
    location: "Bengaluru, India",
    achievements: "Created viral GenAI applications with 5M+ users at Google",
  },
  {
    id: 4,
    name: "Abirami Sukumari",
    title: "Staff Developer Advocate",
    experience: "20 years",
    photo: "/trainers/Abirami_sukumari.jpg",
    companies: [{ name: "Google", Logo: GoogleLogo }],
    specialization: "Cloud AI and Databases",
    studentsmentored: 5000,
    rating: 4.9,
    linkedin: "https://www.linkedin.com/in/abiramisukumaran/",
    location: "Bengaluru, India",
    achievements: "22 years of experience with Fortune 500 companies",
  },
];

const TopTrainersHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const t = useTranslation();

  const localizedTrainers = useMemo(() => {
    return trainersData.map((trainer) => ({
      ...trainer,
      title: t(trainer.title),
      experience: t(trainer.experience),
      specialization: t(trainer.specialization),
      achievements: t(trainer.achievements),
      location: t(trainer.location),
    }));
  }, [t]);

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

  // Helper function to render company logo
  const renderCompanyLogo = (
    company: {
      name: string;
      Logo?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    },
    size: string = "w-5 h-5"
  ) => {
    if (company.Logo) {
      const LogoComponent = company.Logo;
      return <LogoComponent className={size} />;
    }
    return null;
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden"
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
          {/* Hero Header */}
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
                {t("TOP TRAINERS AT AI LINC")}
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              {t("Get trained from the")}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {t("top 1% Instructors")}
              </span>
              <br />
              {t("from MAANG companies")}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t(
                "Learn from industry experts with proven track records at the world's leading technology companies. Experience personalized mentorship that transforms careers."
              )}
            </motion.p>

            {/* Company Logos */}
            <motion.div
              className="flex justify-center items-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="text-base font-semibold text-gray-500">
                {t("Our trainers work at:")}
              </span>
              <div className="flex items-center space-x-4">
                {[MicrosoftLogo, GoogleLogo, AmazonLogo].map((Logo, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-white rounded-full p-2 shadow-md border border-gray-100"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Logo className="w-full h-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Unified Features & Value Proposition */}
          <motion.div
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                {t("Why Choose Our")}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("Elite Training Team")}
                </span>
              </h2>
            </div>

            {/* Combined Features in Paragraphs */}
            <div className="max-w-5xl mx-auto space-y-6 text-center">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {t("Global MAANG Expertise")}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-left md:text-left leading-relaxed">
                    {t(
                      "Our trainers are certified professionals from leading tech giants like Microsoft, Google, Amazon, and Oracle with 8-15 years of Fortune 500 experience. 90% hold multiple international certifications (AWS, Azure, Salesforce, AI/ML)."
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {t("Personalized & Global")}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-left md:text-left leading-relaxed">
                    {t(
                      "Experience hands-on guidance, real-time doubt solving, and career mentoring from tutors across India, US, UK, and Middle East. Our placement-oriented approach ensures content directly matches industry job requirements."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Trainers Showcase with LinkedIn */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                {t("Meet Our")}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("MAANG Experts")}
                </span>
              </h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {t("Learn directly from professionals who have built products used by millions")}
              </p>
            </div>

            {/* Trainers Row with LinkedIn */}
            <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
              {localizedTrainers.map((trainer, index) => (
                <motion.div
                  key={trainer.id}
                  className="flex flex-col items-center group max-w-xs"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Trainer Photo */}
                  <div className="relative w-20 h-20 mb-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={trainer.photo}
                          alt={trainer.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Company Logo Badge */}
                    <div className="absolute -bottom-0.5 -right-0.5">
                      {trainer.companies[0] && (
                        <div className="bg-white rounded-full p-0.5 shadow-lg border border-gray-200">
                          {renderCompanyLogo(trainer.companies[0], "w-5 h-5")}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-center mb-3">
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold mb-1">
                      {trainer.companies[0]?.name} • {trainer.experience}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">
                      {trainer.location}
                    </p>
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-yellow-500 text-sm">⭐</span>
                      <span className="text-sm font-bold text-gray-700 ml-1">
                        {trainer.rating}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({trainer.studentsmentored}+ {t("students")})
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Link */}
                  <a
                    href={trainer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg group-hover:scale-110 group-hover:shadow-xl"
                    title={t("View LinkedIn Profile")}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Connect Text */}
                  <p className="text-xs text-gray-500 mt-2 font-medium">
                    {t("Connect on LinkedIn")}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <p className="text-sm text-gray-600 mb-2">
                <strong>{t("Combined Experience:")}</strong> {t("40+ years at top tech companies")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>{t("Students Mentored:")}</strong> {t("8,000+ professionals trained")} •{" "}
                <strong>{t("Average Rating:")}</strong> {t("4.8/5 ⭐")}
              </p>
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-black mb-3">
                  {t("Our Training Impact")}
                </h3>
                <p className="text-base text-blue-100">
                  {t("Results that demonstrate our commitment to excellence")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "100+",
                    label: t("Certified Trainers"),
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                  },
                  {
                    number: "1,000+",
                    label: t("Average Students per Trainer"),
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ),
                  },
                  {
                    number: "95%",
                    label: t("Student Satisfaction Rate"),
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ),
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <motion.div
                      className="text-2xl md:text-3xl font-black mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div
                      className="text-blue-100 font-semibold text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.3 + index * 0.1 }}
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

export default TopTrainersHero;
