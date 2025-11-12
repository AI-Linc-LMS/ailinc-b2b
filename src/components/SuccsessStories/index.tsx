// components/SuccessStories.tsx
import { useRef, useState, useEffect, ReactNode, useMemo } from "react";
import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";
import { useTranslation } from "@/context/LanguageContext";

type Story = {
  id: number;
  organization: string;
  quote: string;
  author: string;
  certified: number;
  certifiedLabel: string;
  growth: number;
  growthLabel: string;
  icon: ReactNode;
  bgGradient: string;
  certifiedMax: number;
  growthMax: number;
};

// Updated success stories data array with new organizations
const successStoriesData = [
  {
    id: 1,
    organization: "Osmania University",
    quote:
      "AI Linc gave our students confidence for placements with real AI projects.",
    author: "Training & Placement Officer",
    certified: 3000,
    certifiedLabel: "certified",
    growth: 40,
    growthLabel: "placement growth",
    icon: (
      <Image
        src="/images/osmania.jpg"
        alt="Osmania University"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-blue-500 to-blue-600",
    certifiedMax: 3500,
    growthMax: 50,
  },
  {
    id: 2,
    organization: "Kakatiya University",
    quote:
      "The credit-based AI electives helped us improve both NAAC scores and student skills.",
    author: "Dean, Academics",
    certified: 2200,
    certifiedLabel: "certified",
    growth: 0.5,
    growthLabel: "NAAC uplift",
    icon: (
      <Image
        src="/images/kakatiya.jpg"
        alt="Kakatiya University"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-purple-500 to-purple-600",
    certifiedMax: 3000,
    growthMax: 1,
  },
  {
    id: 3,
    organization: "Career Bridge",
    quote:
      "Through AI Linc, we could deliver industry-ready candidates to our hiring partners.",
    author: "Director, Career Bridge",
    certified: 1000,
    certifiedLabel: "upskilled",
    growth: 70,
    growthLabel: "placed",
    icon: (
      <Image
        src="/images/careerbridge.png"
        alt="Career Bridge"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-green-500 to-green-600",
    certifiedMax: 1500,
    growthMax: 100,
  },
  {
    id: 4,
    organization: "(SNIST) Sreenidhi Institute of Science & Technology",
    quote:
      "Workshop conducted by AI Linc's Founder & CEO - Shubham Lal was really helpful for the students.",
    author: "Head, Department of CSE",
    certified: 4500,
    certifiedLabel: "certified",
    growth: 65,
    growthLabel: "internship conversions",
    icon: (
      <Image
        src="/images/snist.jpg"
        alt="Sreenidhi Institute"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-indigo-500 to-indigo-600",
    certifiedMax: 5000,
    growthMax: 80,
  },
  {
    id: 5,
    organization: "(DSATM) Dayananda Sagar Academy of Technology & Management",
    quote:
      "Guest lecture by AI Linc's CMO – Poorva Shrivastava, along with integrated internship opportunities, was highly valuable for our students.",
    author: "Faculty Feedback",
    certified: 3500,
    certifiedLabel: "students engaged",
    growth: 75,
    growthLabel: "skill improvement",
    icon: (
      <Image
        src="/images/dayanand.png"
        alt="DSATM"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-cyan-500 to-cyan-600",
    certifiedMax: 4000,
    growthMax: 90,
  },
  {
    id: 6,
    organization: "Microsoft",
    quote:
      "Sessions on Agentic AI by AI Linc's Founder & CEO – Shubham Lal were insightful and future-ready.",
    author: "Event Team",
    certified: 500,
    certifiedLabel: "professionals trained",
    growth: 95,
    growthLabel: "satisfaction rate",
    icon: <MicrosoftLogo />,
    bgGradient: "from-blue-500 to-blue-600",
    certifiedMax: 1000,
    growthMax: 100,
  },
  {
    id: 7,
    organization: "Amity University",
    quote:
      "Session on Prompt Engineering delivered by AI Linc was extremely engaging and practical for our students.",
    author: "Department Feedback",
    certified: 2800,
    certifiedLabel: "students trained",
    growth: 85,
    growthLabel: "engagement rate",
    icon: (
      <Image
        src="/images/amity.png"
        alt="Amity University"
        fill
        className="object-cover rounded-lg"
      />
    ),
    bgGradient: "from-orange-500 to-orange-600",
    certifiedMax: 3200,
    growthMax: 100,
  },
];

// Navigation Button Component (keeping your existing one)
const CarouselButton = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) => {
  const t = useTranslation();

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? t("Previous") : t("Next")}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed ${
        direction === "prev" ? "-left-6 md:-left-8" : "-right-6 md:-right-8"
      }`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {direction === "prev" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        )}
      </svg>
    </motion.button>
  );
};

// Carousel Indicators (keeping your existing one)
const CarouselIndicators = ({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) => (
  <div className="flex justify-center space-x-2 mt-8">
    {Array.from({ length: total }).map((_, index) => (
      <motion.button
        key={index}
        onClick={() => onSelect(index)}
        className={`w-3 h-3 rounded-full transition-all duration-200 ${
          index === current
            ? "bg-blue-600 scale-110"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
    ))}
  </div>
);

// NEW: Creative Circular Statistics Component
const CircularStatistic = ({
  value,
  label,
  color,
  delay = 0,
  isGrowth = false,
}: {
  value: number;
  label: string;
  color: string;
  delay?: number;
  isGrowth?: boolean;
}) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.6,
      delay: delay,
      type: "spring",
      bounce: 0.3,
    }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
  >
    {/* Outer glow effect */}
    <div
      className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-20 blur-xl`}
    />

    {/* Main circle */}
    <div
      className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${color} shadow-2xl flex flex-col items-center justify-center text-white overflow-hidden`}
    >
      {/* Subtle inner highlight */}
      <div className="absolute top-2 left-2 w-6 h-6 bg-white opacity-20 rounded-full blur-sm" />

      {/* Value */}
      <motion.div
        className="text-xl md:text-2xl font-bold leading-none mb-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {value.toLocaleString()}
        {isGrowth && !label.includes("NAAC") && !label.includes("uplift")
          ? "%"
          : ""}
        {!isGrowth ? "+" : ""}
      </motion.div>

      {/* Label */}
      <motion.div
        className="text-xs md:text-sm font-medium text-center leading-tight opacity-90 px-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {label}
      </motion.div>

      {/* Animated border pulse */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-white opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  </motion.div>
);

// Updated Story Card Component with new circular statistics
const StoryCard = ({ story, index }: { story: Story; index: number }) => (
  <motion.div
    whileHover={{
      y: -4,
      scale: 1.01,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
    className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200 flex flex-col group will-change-transform max-w-md mx-auto"
    style={{
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      height: "480px", // Reduced height since we removed some elements
    }}
  >
    {/* Card Header */}
    <div className="flex items-center mb-4">
      <div className="relative w-12 h-12 rounded-xl overflow-hidden mr-3 shadow-sm group-hover:shadow-md transition-shadow duration-200 flex-shrink-0">
        {typeof story.icon !== "string" && (
          <div
            className={`absolute inset-0 bg-gradient-to-r ${story.bgGradient} opacity-20`}
          />
        )}
        {typeof story.icon === "string" ? (
          <div
            className={`w-full h-full bg-gradient-to-r ${story.bgGradient} flex items-center justify-center text-xl rounded-xl`}
          >
            {story.icon}
          </div>
        ) : (
          <div className="w-full h-full relative">{story.icon}</div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
          {story.organization}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-1">{story.author}</p>
      </div>
    </div>

    {/* Quote */}
    <div className="mb-6" style={{ height: "100px" }}>
      <blockquote className="text-gray-700 text-base leading-relaxed italic group-hover:text-gray-800 transition-colors duration-200 line-clamp-4">
        &quot;{story.quote}&quot;
      </blockquote>
    </div>

    {/* NEW: Circular Statistics Design */}
    <div className="flex-grow flex items-center justify-center">
      <div className="flex items-center justify-center gap-6 md:gap-8">
        {/* Green Circle - Certified */}
        <CircularStatistic
          value={story.certified}
          label={story.certifiedLabel}
          color="from-emerald-500 to-green-600"
          delay={0.5 + index * 0.1}
          isGrowth={false}
        />

        {/* Blue Circle - Growth */}
        <CircularStatistic
          value={story.growth}
          label={story.growthLabel}
          color="from-blue-500 to-indigo-600"
          delay={0.7 + index * 0.1}
          isGrowth={true}
        />
      </div>
    </div>

    {/* Connecting line between circles */}
    <div
      className="absolute"
      style={{
        top: "75%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60px",
        height: "2px",
        background:
          "linear-gradient(to right, rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.3))",
        zIndex: 0,
      }}
    />
  </motion.div>
);

// Keep all your existing animated components unchanged
const AnimatedProgressBar = ({
  value,
  maxValue,
  color,
  delay = 0,
}: {
  value: number;
  maxValue: number;
  color: string;
  delay?: number;
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full will-change-transform`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: "easeOut",
          }}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        />
      </div>
    </div>
  );
};

const AnimatedCircularProgress = ({
  value,
  maxValue,
  color,
  delay = 0,
}: {
  value: number;
  maxValue: number;
  color: string;
  delay?: number;
}) => {
  const percentage = (value / maxValue) * 100;
  const circumference = 2 * Math.PI * 16;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-12 h-12">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#e5e7eb"
          strokeWidth="3"
          fill="none"
        />
        <motion.circle
          cx="20"
          cy="20"
          r="16"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: "easeOut",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-xs font-bold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </div>
    </div>
  );
};

const AnimatedBarChart = ({
  value,
  maxValue,
  color,
  delay = 0,
}: {
  value: number;
  maxValue: number;
  color: string;
  delay?: number;
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="flex items-end justify-center h-10 w-full">
      <motion.div
        className={`bg-gradient-to-t ${color} rounded-t-lg`}
        style={{ width: "40%" }}
        initial={{ height: 0 }}
        animate={{ height: `${percentage}%` }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

// Main SuccessStories component (keeping your existing structure)
const SuccessStories = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const t = useTranslation();

  const localizedStories = useMemo(() => {
    return successStoriesData.map((story) => ({
      ...story,
      quote: t(story.quote),
      author: t(story.author),
      certifiedLabel: t(story.certifiedLabel),
      growthLabel: t(story.growthLabel),
    }));
  }, [t]);

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Calculate cards per view and total pages
  const cardsPerView = isMobile ? 1 : 2;
  const totalPages = Math.ceil(localizedStories.length / cardsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalPages]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  // Get current cards to display
  const getCurrentCards = () => {
    const startIndex = currentIndex * cardsPerView;
    return localizedStories.slice(startIndex, startIndex + cardsPerView);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15,
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

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-20 md:py-28 bg-white"
      ref={sectionRef}
      id="success-stories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("Success Stories")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("Real transformations from our education partners across India")}
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel Wrapper */}
            <div className="overflow-hidden rounded-2xl px-8 md:px-16">
              <div className="relative" style={{ height: "500px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={cardsContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full"
                  >
                    {getCurrentCards().map((story, index) => (
                      <motion.div
                        key={story.id}
                        variants={cardItemVariants}
                        className="flex items-center justify-center"
                      >
                        <StoryCard story={story} index={index} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Buttons */}
            <CarouselButton
              direction="prev"
              onClick={goToPrev}
              disabled={false}
            />
            <CarouselButton
              direction="next"
              onClick={goToNext}
              disabled={false}
            />
          </div>

          {/* Carousel Indicators */}
          <CarouselIndicators
            total={totalPages}
            current={currentIndex}
            onSelect={goToSlide}
          />

          {/* Overall Stats - Updated with new circular design */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("Total Impact Across All Partners")}
              </h3>
              <p className="text-gray-600">
                {t("Combined results from AI Linc implementations")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <CircularStatistic
                value={17000}
                label={t("Students Certified")}
                color="from-emerald-500 to-green-600"
                delay={1.2}
                isGrowth={false}
              />

              <CircularStatistic
                value={59}
                label={t("Avg. Placement Growth")}
                color="from-blue-500 to-indigo-600"
                delay={1.4}
                isGrowth={true}
              />

              <CircularStatistic
                value={0.5}
                label={t("Avg. NAAC Uplift")}
                color="from-purple-500 to-pink-600"
                delay={1.6}
                isGrowth={true}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
