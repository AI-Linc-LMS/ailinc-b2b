"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import { AmazonLogo } from "../../../public/icons/AmazonLogo";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";

interface LearningItem {
  title: string;
  description: string;
  icon: string;
}

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  workshop_name: string;
  session_number: string;
  referal_code: string;
  currentProfile: string;
  educationalQualification: string;
  experience: string;
  yearOfGraduation: string;
  preferredLanguage: string;
}

const learningItems: LearningItem[] = [
  {
    title: "Build a website in 5 Minutes",
    description: "No coding, no stress!",
    icon: "🌐",
  },
  {
    title: "How generative AI works",
    description: "Be smart to learn new technologies",
    icon: "🤖",
  },
  {
    title: "AI tools to make Videos & PPTs Instantly",
    description: "Save your time, Its precious!",
    icon: "🎬",
  },
  {
    title: "Automate Emails & Reports",
    description: "Save time, work smart",
    icon: "📧",
  },
  {
    title: "Correct usage of Prompts",
    description: "Your right prompt matters!",
    icon: "💬",
  },
  {
    title: "Real Use Cases",
    description: "Hiring, onboarding, training... all with AI",
    icon: "💼",
  },
  {
    title: "Build Resume in minutes",
    description: "Level up your personal brand",
    icon: "📄",
  },
];

// Country codes data
const COUNTRIES = [
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩" },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰" },
  { code: "NP", name: "Nepal", dialCode: "+977", flag: "🇳🇵" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
  { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
];

// Simple SVG Icons as Components
const CalendarIcon = () => (
  <svg
    className="w-6 h-6 text-blue-600 mx-auto mb-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-6 h-6 text-blue-600 mx-auto mb-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const MapPinIcon = () => (
  <svg
    className="w-6 h-6 text-blue-600 mx-auto mb-2"
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
);

const StarIcon = () => (
  <svg
    className="w-6 h-6 text-blue-600 mx-auto mb-2"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
    fill="none"
    stroke="currentColor"
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

const ChevronDownIcon = () => (
  <svg
    className="ml-2 h-4 w-4"
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
);

// Custom Phone Input Component - FIXED VERSION
interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

const PhoneInput = ({
  value,
  onChange,
  error,
  required = false,
  placeholder = "Enter phone number",
}: PhoneInputProps) => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [localValue, setLocalValue] = useState("");

  // Initialize local value from props
  useEffect(() => {
    if (value) {
      const phoneOnly = value.replace(selectedCountry.dialCode, "").trim();
      setLocalValue(phoneOnly);
    }
  }, [value, selectedCountry.dialCode]);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return COUNTRIES;
    return COUNTRIES.filter(
      (country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.dialCode.includes(searchQuery) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleCountrySelect = (countryCode: string) => {
    const country = COUNTRIES.find((c) => c.code === countryCode);
    if (country) {
      setSelectedCountry(country);
      setIsOpen(false);
      setSearchQuery("");
      const fullNumber = `${country.dialCode} ${localValue}`.trim();
      onChange(fullNumber);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setLocalValue(inputValue);
    const fullNumber = `${selectedCountry.dialCode} ${inputValue}`.trim();
    onChange(fullNumber);
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 px-3 bg-white border border-gray-300 hover:border-blue-500 text-gray-900 rounded-md flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="text-lg mr-2">{selectedCountry.flag}</span>
            <span className="text-sm">{selectedCountry.dialCode}</span>
            <ChevronDownIcon />
          </button>

          {isOpen && (
            <div className="absolute top-12 left-0 z-50 w-80 max-h-80 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="p-3">
                <div className="relative mb-3">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="max-h-48 overflow-y-auto space-y-1">
                  {filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country.code)}
                      className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-blue-50 transition-colors text-left"
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="text-sm text-blue-600 font-medium min-w-[3rem]">
                        {country.dialCode}
                      </span>
                      <span className="text-sm text-gray-900 truncate">
                        {country.name}
                      </span>
                    </button>
                  ))}
                  {filteredCountries.length === 0 && (
                    <div className="text-center py-4 text-gray-500 text-sm">
                      No countries found
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {isOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => {
                setIsOpen(false);
                setSearchQuery("");
              }}
            />
          )}
        </div>

        <div className="flex-1">
          <input
            type="tel"
            required={required}
            value={localValue}
            onChange={handlePhoneChange}
            className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-12"
            placeholder={placeholder}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

      <p className="text-xs text-gray-600">
        Selected: {selectedCountry.flag} {selectedCountry.name} (
        {selectedCountry.dialCode})
      </p>
    </div>
  );
};

// Who Is This Workshop For Component
interface WhoIsThisWorkshopForSectionProps {
  onRegistrationClick?: () => void;
}

function WhoIsThisWorkshopForSection({
  onRegistrationClick,
}: WhoIsThisWorkshopForSectionProps) {
  const targetAudience = [
    {
      icon: "👔",
      title: "HR Professionals & Product Managers",
      description:
        "Want to shift their career into a AI & Machine Learning professional.",
    },
    {
      icon: "🎓",
      title: "College Students & Job Seekers",
      description:
        "Looking to build a foundation in AI & Machine Learning early on.",
    },
    {
      icon: "💼",
      title: "Entrepreneurs & Freelancers",
      description:
        "Want to stand out in the job market with AI & Machine Learning expertise.",
    },
    {
      icon: "🎨",
      title: "Content Creators & Trainers",
      description:
        "Looking to leverage AI tools for content creation and training programs.",
    },
  ];

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Who is This Webinar For?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {targetAudience.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{audience.icon}</div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 mb-8"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="text-4xl">👥</div>
            <h3 className="text-xl font-semibold text-gray-900">
              Anyone Curious :
            </h3>
            <p className="text-gray-700 text-center max-w-2xl">
              Explore the exciting world of AI & Machine Learning and its future
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <button
            onClick={onRegistrationClick}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full md:w-auto min-w-[300px]"
          >
            I Am Interested, Register Now
          </button>

          <div className="text-center">
            <p className="text-xl font-bold text-gray-900">
              Join for Rs{" "}
              <span className="line-through text-gray-500">999</span> FREE
            </p>
            <p className="text-sm text-gray-600">
              For the first 1000 registrations only
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function SingleWorkshopRegistration() {
  const sectionRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(30);

  // Registration Form State
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "+91 ",
    workshop_name: "Practical implementation of Agentic AI",
    session_number: "Session-07",
    referal_code: "",
    currentProfile: "",
    educationalQualification: "",
    experience: "",
    yearOfGraduation: "",
    preferredLanguage: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isReferralFromUrl, setIsReferralFromUrl] = useState(false);

  const workshopData = {
    title: "Deploy Your First AI App: Live No-Code AI Workshop",
    subtitle: "Develop Products without writing code",
    date: "October 28, 2025",
    time: "10:00 AM - 4:00 PM IST",
    duration: "6 Hours Live Session",
    mode: "Live Online + Recordings",
    originalPrice: "₹499",
    currentPrice: "FREE",
    videoUrl: "https://www.youtube.com/embed/aqrZuRF65u8?si=wi7TiBBDb8v03jRF",
  };

  // Fetch referral code from URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referralFromUrl =
      urlParams.get("referral") ||
      urlParams.get("ref") ||
      urlParams.get("referral_code");
    if (referralFromUrl) {
      setFormData((prev) => ({
        ...prev,
        referal_code: referralFromUrl,
      }));
      setIsReferralFromUrl(true);
    }
  }, []);

  // FIXED: Simple input change handler without interference
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // FIXED: Phone change handler with proper validation
  const handlePhoneChange = (phoneNumber: string) => {
    setFormData((prev) => ({
      ...prev,
      phone_number: phoneNumber,
    }));

    // Validate phone number
    const numberPart = phoneNumber.replace(/^\+\d+\s*/, "").replace(/\D/g, "");
    if (numberPart.length === 0) {
      setPhoneError("Phone number is required");
    } else if (numberPart.length < 7) {
      setPhoneError("Phone number is too short");
    } else if (numberPart.length > 15) {
      setPhoneError("Phone number is too long");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numberPart = formData.phone_number
      .replace(/^\+\d+\s*/, "")
      .replace(/\D/g, "");
    if (numberPart.length < 7 || numberPart.length > 15) {
      setPhoneError("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://be-app.ailinc.com/api/clients/1/workshop-registrations/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          toast.error("You are already registered");
          return;
        }
        throw new Error(data.message || "Registration failed");
      }

      setShowSuccessModal(true);
      toast.success("Registration successful! Check your email for details.");
      setSeatsLeft((prev) => prev - 1);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone_number: "+91 ",
        workshop_name: "Practical implementation of Agentic AI",
        session_number: "Session-07",
        referal_code: "",
        currentProfile: "",
        educationalQualification: "",
        experience: "",
        yearOfGraduation: "",
        preferredLanguage: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToRegistration = () => {
    const element = document.getElementById("registration-form");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // What You Will Learn Component
  const WhatYouWillLearnSection = () => (
    <div className="mb-16 px-4 md:px-0" ref={containerRef}>
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What will you learn
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          in this workshop?
        </motion.p>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-gray-600">
            *Recording of This Session Will Not Be Provided
          </p>
        </motion.div>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 h-full hidden md:block"></div>
        <div className="absolute left-6 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 h-full md:hidden"></div>

        <div className="space-y-8 md:space-y-16">
          {learningItems.map((item, index) => {
            return (
              <motion.div
                key={index}
                className={`flex items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="relative z-10 md:order-2">
                  <motion.div
                    className="w-5 h-5 md:w-7 md:h-7 bg-blue-500 rounded-full shadow-lg flex-shrink-0"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                </div>

                <div
                  className={`flex-1 md:order-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <motion.div
                    className={`bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-blue-300 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl w-full md:max-w-md md:inline-block ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(59, 130, 246, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl md:text-2xl">{item.icon}</span>
                      <h4 className="text-base md:text-lg font-bold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:block md:flex-1 md:order-3"></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Pricing Section */}
      <motion.div
        className="mt-16 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            FREE
            <span className="text-lg text-gray-500 line-through ml-2">
              ₹499
            </span>
            <span className="text-lg text-blue-600 ml-2">100% OFF</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {seatsLeft} Seats Left!
          </div>
          <button
            onClick={scrollToRegistration}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Enroll Now
          </button>
        </div>
      </motion.div>
    </div>
  );

  // Speakers Section Component

  const SpeakersSection = () => (
    <div className="mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Meet your Mentors
        </h2>
        <p className="text-xl text-gray-600">Experts from the Industry</p>
      </div>

      {/* Featured Speaker - Shubham Lal */}
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 shadow-lg mb-12">
        <div className="flex flex-col lg:flex-row md:items-start gap-8 items-center justify-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="size-32 rounded-full overflow-hidden border-4 border-blue-500 p-1 shadow-lg">
              <Image
                src="/trainers/shubham_lal.jpg"
                alt="Shubham Lal"
                width={128}
                height={128}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-blue-600 mb-3">
              Shubham Lal
            </h3>

            {/* Role at Microsoft */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <p className="text-xl text-gray-700">SDE II at</p>
              <MicrosoftLogo className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-700">
                Microsoft
              </span>
            </div>

            {/* Key Points */}
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">•</span>
                <p className="text-gray-700">
                  Working at the cutting edge of AI and full‑stack engineering
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">
                    Founder & CEO of AILinc
                  </strong>{" "}
                  – Elevating AI education for students and professionals across
                  the globe
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">
                    Speaker at 300+ events
                  </strong>{" "}
                  – from colleges to community forums, inspiring over 10,000+
                  learners on AI, Data Science, and Soft Skills
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">Trainer & Mentor</strong> –
                  Delivered live AI sessions and soft‑skills workshops to 1,000s
                  of undergraduates and working professionals
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">
                    Projects & Focus Areas:
                  </strong>{" "}
                  Building AI‑driven tools, full-stack apps, prompt engineering,
                  and responsible AI curriculums for learners and institutions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-lg">•</span>
                <p className="text-gray-700">
                  <strong className="text-gray-900">
                    Advocates hands‑on learning
                  </strong>{" "}
                  with real-world use cases for HR, hiring and personal growth
                  using AI platforms like ChatGPT, AutoML, and more
                </p>
              </div>
            </div>

            {/* LinkedIn Button */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/shubhamlal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                <LinkedInIcon />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Speakers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 rounded-full overflow-hidden border-4 border-blue-500 p-1">
              <Image
                src="/trainers/yamini_bandi.jpg"
                alt="Yamini Bandi"
                width={96}
                height={96}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2 mt-4">
              Yamini Bandi
            </h3>
            <p className="text-gray-600 mb-4 flex items-center gap-2">
              SDE at <AmazonLogo className="w-6 h-6" />
            </p>
            <a
              href="https://www.linkedin.com/in/yaminibandi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <LinkedInIcon />
              <span>Connect</span>
            </a>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 rounded-full overflow-hidden border-4 border-blue-500 p-1">
              <Image
                src="/trainers/Divyansh_dubey.jpg"
                alt="Divyansh Dubey"
                width={96}
                height={96}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2 mt-4">
              Divyansh Dubey
            </h3>
            <p className="text-gray-600 mb-4 flex items-center gap-2">
              Gen AI at <GoogleLogo className="w-11 h-6" />
            </p>
            <a
              href="https://www.linkedin.com/in/divyansh-dubey/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <LinkedInIcon />
              <span>Connect</span>
            </a>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="size-24 rounded-full overflow-hidden border-4 border-blue-500 p-1">
              <Image
                src="/trainers/poorva_image.jpg"
                alt="Poorva Shrivastava"
                width={96}
                height={96}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2 mt-4">
              Poorva Shrivastava
            </h3>
            <p className="text-gray-600 mb-4">CMO at AI Linc</p>
            <a
              href="https://www.linkedin.com/in/poorva-shrivastava-ceo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <LinkedInIcon />
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40"
      ref={sectionRef}
    >
      <Toaster position="top-center" richColors />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-1/4 right-1/3 size-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 size-96 bg-gradient-to-br from-purple-100/40 to-blue-100/40 rounded-full blur-3xl"></div>

        {/* Subtle floating elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-6 h-6 bg-blue-200/50 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-purple-200/50 rotate-45"
          animate={{ y: [0, 15, 0], rotate: [45, 135, 225] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-red-100 border border-red-300 rounded-full mb-6">
              <span className="text-2xl mr-2">👥</span>
              <span className="text-red-700 font-semibold">
                Only {seatsLeft} seats left!
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {workshopData.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              {workshopData.subtitle}
            </p>

            {/* Workshop Details Cards */}
            <div className="grid md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-sm">
                <CalendarIcon />
                <div className="text-sm text-gray-600">Date</div>
                <div className="font-semibold text-gray-900">
                  {workshopData.date}
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-sm">
                <ClockIcon />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">
                  {workshopData.duration}
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-sm">
                <MapPinIcon />
                <div className="text-sm text-gray-600">Mode</div>
                <div className="font-semibold text-gray-900">
                  {workshopData.mode}
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-sm">
                <StarIcon />
                <div className="text-sm text-gray-600">Price</div>
                <div className="font-semibold text-gray-900">
                  <span className="line-through text-gray-500 mr-2">
                    {workshopData.originalPrice}
                  </span>
                  <span className="text-green-600">
                    {workshopData.currentPrice}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-12"
            >
              Secure Your FREE Spot Now
            </button>

            {/* Video Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl border border-gray-200">
                <iframe
                  src={workshopData.videoUrl}
                  title="Workshop Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>

            {/* What You Will Learn Section */}
            <WhatYouWillLearnSection />

            {/* Speakers Section */}
            <SpeakersSection />

            {/* Who Is This Workshop For Section */}
            <WhoIsThisWorkshopForSection
              onRegistrationClick={scrollToRegistration}
            />

            {/* Registration Form Section */}
            <div className="max-w-2xl mx-auto mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Reserve Your Free Seat
                </h2>
                <p className="text-gray-700">
                  Limited seats available - Register now to secure your spot!
                </p>
              </div>
              <div
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg"
                id="registration-form"
              >
                <div className="p-6">
                  {seatsLeft <= 5 && (
                    <p className="text-red-600 font-bold mb-4">
                      Only {seatsLeft} FREE seats left!
                    </p>
                  )}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-start"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-900">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        value={formData.phone_number}
                        onChange={handlePhoneChange}
                        error={phoneError}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="currentProfile"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Current Profile <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="currentProfile"
                        value={formData.currentProfile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="" className="bg-white text-gray-500">
                          Select your current profile
                        </option>
                        <option
                          value="working-professional"
                          className="bg-white text-gray-900"
                        >
                          Working Professional
                        </option>
                        <option
                          value="student"
                          className="bg-white text-gray-900"
                        >
                          Student
                        </option>
                        <option
                          value="graduated-looking-job"
                          className="bg-white text-gray-900"
                        >
                          Graduated and looking for a job
                        </option>
                        <option
                          value="career-break"
                          className="bg-white text-gray-900"
                        >
                          On Career Break
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="referal_code"
                        className="block text-sm font-medium mb-2 text-gray-900"
                      >
                        Referral Code (Optional)
                      </label>
                      <input
                        id="referal_code"
                        type="text"
                        value={formData.referal_code}
                        onChange={handleInputChange}
                        disabled={isReferralFromUrl}
                        className="w-full px-3 py-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                        placeholder="Enter referral code if you have one"
                      />
                      {isReferralFromUrl && (
                        <p className="text-xs text-blue-600 mt-1">
                          Referral code applied from URL
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || !!phoneError || seatsLeft === 0}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Registering...
                        </div>
                      ) : (
                        "Register Now - FREE"
                      )}
                    </button>

                    <p className="text-xs text-gray-600 text-center mt-2">
                      By registering, you agree to receive workshop updates via
                      email and SMS
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full border border-gray-200 shadow-xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Registration Successful!
                </h3>
                <p className="text-gray-600 mb-6">
                  You&apos;ll receive workshop details via email shortly.
                  We&apos;re excited to see you there!
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-700 font-semibold">
                      📅 {workshopData.date}
                    </p>
                    <p className="text-sm text-gray-700">
                      🕘 {workshopData.time}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowSuccessModal(false)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Great, Thanks!
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Sticky Bottom CTA */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 p-4 z-40 md:hidden shadow-lg">
          <div className="flex items-center justify-between max-w-sm mx-auto">
            <div className="text-white">
              <div className="font-bold">FREE Workshop</div>
              <div className="text-sm opacity-90">{seatsLeft} seats left</div>
            </div>
            <button
              onClick={scrollToRegistration}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
