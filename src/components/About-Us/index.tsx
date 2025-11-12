"use client";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Services from "../Services";
import { useTranslation } from "@/context/LanguageContext";

// Custom SVG Icons
// Fixed Icons with proper coloring
const UsersIcon = () => (
  <svg
    className="size-6 text-blue-600"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197V9a3 3 0 00-6 0v2.197a6 6 0 009 5.197z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="size-6 text-blue-600"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const TrendingUpIcon = () => (
  <svg
    className="size-6 text-blue-600"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    className="size-6 text-blue-600"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8z"
    />
  </svg>
);

const RocketIcon = () => (
  <svg
    className="size-6 text-blue-600"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l4-4a4 4 0 000-5.656z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13l9-9-9-9-9 9 4.5 4.5"
    />
  </svg>
);

const Building2Icon = () => (
  <svg
    className="size-6 text-purple-600"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const UserCheckIcon = () => (
  <svg
    className="size-6 text-blue-600"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4"
    />
  </svg>
);

const LightbulbIcon = () => (
  <svg
    className="size-6 text-orange-500"
    fill="none"
    stroke="white"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

// TeamMemberCard Component
const TeamMemberCard = ({
  name,
  role,
  description,
  imageSrc,
  borderColor,
  hoverColor,
}: {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  borderColor: string;
  hoverColor: string;
}) => {
  const t = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: `0 10px 30px ${hoverColor}33`,
      }}
      className="bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden group hover:shadow-xl flex flex-col"
      style={{ borderColor: borderColor }}
    >
      {/* Image */}
      <div className="relative">
        <div className="relative w-full h-80 overflow-hidden bg-gray-100">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: `linear-gradient(to top, ${hoverColor}20, transparent)`,
          }}
        />
      </div>

      {/* Text Content - fixed min height so cards align */}
      <div className="p-6 flex-1 flex flex-col justify-between min-h-[180px]">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {name}
          </h3>
          <p
            className="font-semibold text-sm mb-3 transition-colors truncate"
            style={{ color: borderColor }}
          >
            {t(role)}
          </p>
          <p className="text-gray-600 transition-colors line-clamp-3 text-sm text-center">
            {t(description)}
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-2"
        style={{ backgroundColor: borderColor }}
      />
    </motion.div>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Team Section
export function TeamSection() {
  const t = useTranslation();
  const teamMembers = [
    {
      name: "Shubham",
      role: "Director",
      description:
        "Driving AI Linc's vision and strategic growth with innovative leadership.",
      imageSrc: "/trainers/shubham_lal.jpg",
      borderColor: "#3B82F6", // Blue-500
      hoverColor: "#3B82F6",
    },
    {
      name: "Poorva",
      role: "Director",
      description:
        "Pioneering innovative solutions and driving AI Linc's technological advancement.",
      imageSrc: "/trainers/poorva_image.jpg",
      borderColor: "#8B5CF6", // Purple-500
      hoverColor: "#8B5CF6",
    },
    {
      name: "Sandeep",
      role: "Director",
      description:
        "Guiding AI Linc's strategic partnerships and business development.",
      imageSrc: "/trainers/sandeep.jpeg",
      borderColor: "#10B981", // Emerald-500
      hoverColor: "#10B981",
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("Meet Our Leadership")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Our experienced team of visionaries and industry experts driving AI Linc's mission forward"
            )}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item}>
              <TeamMemberCard
                name={member.name}
                role={member.role}
                description={member.description}
                imageSrc={member.imageSrc}
                borderColor={member.borderColor}
                hoverColor={member.hoverColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-1/4 left-1/4 size-96 bg-blue-200/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 size-96 bg-purple-200/15 rounded-full blur-3xl"></div>
    </section>
  );
}

// Main About Us Page
export default function AboutUs() {
  useHashNavigation();
  const t = useTranslation();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About AI Linc
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Bridging the gap between AI talent and transformative
              opportunities through innovative assessment, upskilling, and
              deployment solutions.
            </p>
          </motion.div>
        </div>

        <div className="absolute top-1/4 left-1/4 size-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 size-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </section> */}

      {/* Who We Are Section */}
      <section
        className="py-20 relative bg-white overflow-hidden"
        id="who-we-are"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t("Who We Are")}
              </h2>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light">
                    {t("At AI Linc, we are passionate about")}{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      {t("connecting businesses")}
                    </span>{" "}
                    {t("with the power of artificial intelligence.")}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t(
                      "We build smart, reliable solutions that help companies solve real problems —"
                    )}
                    {" "}
                    <span className="text-gray-800 font-medium">
                      {t("faster, smarter, and with less effort.")}
                    </span>
                  </p>
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500">
                    <p className="text-lg text-gray-700 leading-relaxed italic">
                      &quot;
                      {t(
                        "Our mission is simple: to make AI accessible. Whether you're just starting your AI journey or looking to scale up, we guide you every step of the way."
                      )}
                      &quot;
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Core Beliefs */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  {t("We believe in:")}
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: "Innovation",
                      description:
                        "Always staying ahead with the latest AI research and technology",
                      icon: (
                        <svg
                          className="size-6"
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
                      ),
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      title: "Practicality",
                      description:
                        "Delivering tools that actually work in real business settings",
                      icon: (
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ),
                      color: "from-purple-500 to-purple-600",
                    },
                    {
                      title: "Trust",
                      description:
                        "Because data, ethics, and transparency matter",
                      icon: (
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      ),
                      color: "from-indigo-500 to-indigo-600",
                    },
                    {
                      title: "Partnership",
                      description: "Your success is our success",
                      icon: (
                        <svg
                          className="size-6"
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
                      color: "from-teal-500 to-teal-600",
                    },
                  ].map((belief, index) => (
                    <motion.div
                      key={belief.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                      className="group"
                    >
                      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 size-12 rounded-xl bg-gradient-to-r ${belief.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                          >
                            {belief.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                              {t(belief.title)}
                            </h4>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed">
                              {t(belief.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-16"
            >
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("We design solutions that are both")}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  {t("cutting-edge and easy to use")}
                </span>
                {", "}
                {t("because AI should help people — not complicate things.")}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute top-0 left-1/4 size-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 size-96 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-0 size-64 bg-gradient-to-r from-teal-200/15 to-blue-200/15 rounded-full blur-2xl"></div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do">
        <Services />
      </section>
    </main>
  );
}
