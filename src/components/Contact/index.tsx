"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactWaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg
      className="absolute bottom-0 left-0 w-full h-64"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-blue-100/20"
      ></path>
    </svg>
  </div>
);

function ReachOutPage() {
  const t = useTranslation();

  const highlights = [
    t("Share your AI goals and current initiatives."),
    t("Explore proven playbooks from AI Linc partners."),
    t("Leave with a prioritized action plan for your campus."),
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      <ContactWaveBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t("Let's Build Your")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t("AI-Ready Campus")}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              "Ready to transform your institution with cutting-edge AI education? Let's discuss how we can help you build the future of learning."
            )}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="p-8 sm:p-10 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t("Book a 1:1 Session")}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {t(
                  "Meet with our team for a personalized walkthrough and roadmap tailored to your institution."
                )}
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                {t(
                  "Pick a time that works for you and we'll confirm instantly — no emails back and forth."
                )}
              </p>
            </div>

            <ul className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-sm font-medium text-blue-900 shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <a
                href="https://calendly.com/hauntedutkarsh/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <span>{t("Book Your Slot")}</span>
                <svg
                  className="ml-3 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <p className="text-sm text-gray-500">
                {t("You'll be redirected to Calendly to secure your slot.")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ReachOutPage;
