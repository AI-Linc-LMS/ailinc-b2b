"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface FormData {
  name: string;
  institution: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  institution?: string;
  email?: string;
  phone?: string;
}

// Country codes array
const countryCodes = [
  { code: "+1", country: "US", name: "United States", flag: "🇺🇸" },
  { code: "+91", country: "IN", name: "India", flag: "🇮🇳" },
  { code: "+44", country: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+33", country: "FR", name: "France", flag: "🇫🇷" },
  { code: "+49", country: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "+81", country: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "CN", name: "China", flag: "🇨🇳" },
  { code: "+7", country: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "+61", country: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "+55", country: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "+34", country: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "+39", country: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "+31", country: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "+41", country: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "+46", country: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "+358", country: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "+32", country: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "+43", country: "AT", name: "Austria", flag: "🇦🇹" },
];

// Animation variants
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

const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// Success Icon Component
const SuccessIcon = () => (
  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
    <svg
      className="w-8 h-8 text-green-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

// Contact Wave Background Component
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

// Phone validation function
const validatePhoneNumber = (phone: string, countryCode: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, "");

  const validationRules: {
    [key: string]: { minLength: number; maxLength: number };
  } = {
    "+1": { minLength: 10, maxLength: 10 },
    "+91": { minLength: 10, maxLength: 10 },
    "+44": { minLength: 10, maxLength: 11 },
    "+33": { minLength: 9, maxLength: 10 },
    "+49": { minLength: 10, maxLength: 12 },
    "+81": { minLength: 10, maxLength: 11 },
    "+86": { minLength: 11, maxLength: 11 },
    "+7": { minLength: 10, maxLength: 10 },
    "+61": { minLength: 9, maxLength: 9 },
    "+55": { minLength: 10, maxLength: 11 },
  };

  const rule = validationRules[countryCode] || { minLength: 7, maxLength: 15 };
  return (
    cleanPhone.length >= rule.minLength && cleanPhone.length <= rule.maxLength
  );
};

// --- Main Contact Component ---
function ReachOutPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    institution: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Ref for dropdown to handle outside clicks
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Filter countries based on search term
  const filteredCountries = countryCodes.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm) ||
      country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Special handling for phone number (only allow digits)
    if (name === "phone") {
      const cleanValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: cleanValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Fixed country selection handler
  const handleCountrySelect = (
    countryCode: string,
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("Selecting country:", countryCode); // Debug log

    setFormData((prev) => ({
      ...prev,
      countryCode: countryCode,
    }));

    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.institution.trim())
      newErrors.institution = "Institution name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Phone validation
    if (
      formData.phone &&
      !validatePhoneNumber(formData.phone, formData.countryCode)
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Form data:", formData); // Debug log
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = countryCodes.find(
    (country) => country.code === formData.countryCode
  );

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
            Let&apos;s Build Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI-Ready Campus
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your institution with cutting-edge AI education?
            Let&apos;s discuss how we can help you build the future of learning.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-8 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div variants={formFieldVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </motion.div>

                  {/* Institution Field */}
                  <motion.div variants={formFieldVariants}>
                    <label
                      htmlFor="institution"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      College/Institution Name *
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      placeholder="Your college or organization"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.institution
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    {errors.institution && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.institution}
                      </p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={formFieldVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@institution.edu"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </motion.div>

                  {/* Phone Field with ISD Code Dropdown - FIXED */}
                  <motion.div variants={formFieldVariants}>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="flex relative" ref={dropdownRef}>
                      {/* Country Code Dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsDropdownOpen(!isDropdownOpen);
                          }}
                          className="flex items-center px-3 py-3 border border-gray-300 rounded-l-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[110px] transition-colors h-[48px]"
                        >
                          <span className="text-lg mr-1">
                            {selectedCountry?.flag}
                          </span>
                          <span className="text-sm font-medium mr-1">
                            {formData.countryCode}
                          </span>
                          <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Dropdown Menu - FIXED */}
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute z-50 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-2xl max-h-64 overflow-hidden"
                              style={{ zIndex: 9999 }}
                            >
                              {/* Search Input */}
                              <div className="p-3 border-b border-gray-200">
                                <input
                                  type="text"
                                  placeholder="Search countries..."
                                  value={searchTerm}
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    setSearchTerm(e.target.value);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                />
                              </div>

                              {/* Countries List */}
                              <div className="overflow-y-auto max-h-48">
                                {filteredCountries.map((country) => (
                                  <div
                                    key={country.code}
                                    onClick={(e) =>
                                      handleCountrySelect(country.code, e)
                                    }
                                    className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center space-x-3 transition-colors duration-150 cursor-pointer"
                                  >
                                    <span className="text-lg">
                                      {country.flag}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-2">
                                        <span className="font-medium text-sm">
                                          {country.code}
                                        </span>
                                        <span className="text-sm text-gray-600 truncate">
                                          {country.name}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                {filteredCountries.length === 0 && (
                                  <div className="px-4 py-3 text-sm text-gray-500 text-center">
                                    No countries found
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className={`flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors h-[48px] ${
                          errors.phone
                            ? "border-red-500 bg-red-50"
                            : "hover:border-gray-400"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                    {formData.phone && (
                      <p className="mt-1 text-sm text-gray-500">
                        Full number: {formData.countryCode} {formData.phone}
                      </p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={formFieldVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your institution's AI education goals and how we can help..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-vertical"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          ) : (
            // Success Message
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 text-center"
            >
              <SuccessIcon />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Thank You for Reaching Out!
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;ve received your message and will get back to you within
                24 hours.
              </p>
              <motion.button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    institution: "",
                    email: "",
                    countryCode: "+91",
                    phone: "",
                    message: "",
                  });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default ReachOutPage;
