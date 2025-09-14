import React, { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";

// --- Data Structure (Only Image Strings) ---
const galleryData = {
  Events: ["/gallery/22.png", "/gallery/15.png", "/gallery/20.png"],
  "Guest Lectures": ["/gallery/6.png", "/gallery/23.png", "/gallery/27.png"],
  "Industry Visits": ["/gallery/2.png", "/gallery/11.png", "/gallery/8.png"],
  "AI Masterclass": ["/gallery/14.png", "/gallery/17.png"],
  "Sessions at Microsoft": ["/gallery/25.png"],
  "Global Conferences": [
    "/gallery/10.png",
    "/gallery/12.png",
    "/gallery/13.png",
    "/gallery/16.png",
  ],
  "Faculty Training Program": ["/gallery/18.png"],
  "College Seminars": [
    "/gallery/1.png",
    "/gallery/3.png",
    "/gallery/4.png",
    "/gallery/5.png",
    "/gallery/9.png",
    "/gallery/14.png",
    "/gallery/24.png",
    "/gallery/26.png",
    "/gallery/28.png",
    "/gallery/19.png",
    "/gallery/7.png",
  ],
};

// --- Categories for Filter ---
const categories = [
  "All",
  "Events",
  "Guest Lectures",
  "Industry Visits",
  "AI Masterclass",
  "Sessions at Microsoft",
  "Global Conferences",
  "Faculty Training Program",
  "College Seminars",
];

// --- Wave Background Component (Simplified) ---
function WaveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
      <svg
        className="absolute bottom-0 left-0 w-full h-32"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path fill="#e0f2fe" d="M0,160L1440,128L1440,320L0,320Z" />
      </svg>
    </div>
  );
}

// --- Optimized Individual Card Component ---
function ImageCard({
  imageSrc,
  index,
  activeCategory,
  onClick,
}: {
  imageSrc: string;
  index: number;
  activeCategory: string;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fixed useInView - only animate once when entering viewport
  const isInView = useInView(ref, {
    once: true,
    margin: "-20px",
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.8), // Cap max delay
        ease: [0.25, 0.4, 0.25, 1], // Custom cubic-bezier for smoothness
      }}
      className="group relative rounded-lg overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-lg transition-shadow duration-200 will-change-transform"
      onClick={onClick}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
      }}
    >
      {/* Simplified hover effect */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"
        style={{ willChange: "opacity" }}
      />

      {/* Fixed Aspect Ratio Container */}
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
        {/* Loading Placeholder */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Error State */}
        {imageError && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Optimized Image */}
        <Image
          src={imageSrc}
          alt={`${activeCategory} ${index + 1}`}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          fill
          decoding="async"
          onLoad={() => {
            setImageLoaded(true);
            setImageError(false);
          }}
          onError={() => {
            setImageError(true);
            setImageLoaded(false);
          }}
          style={{
            display: "block",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
          }}
        />

        {/* Simplified Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-2 transform group-hover:scale-110 transition-transform duration-200">
            <svg
              className="w-4 h-4 text-gray-700"
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
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Simplified Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- Main Gallery Component ---
function SimplifiedGallery() {
  const [activeCategory, setActiveCategory] = useState("Events");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Memoize filtered images to prevent unnecessary recalculations
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      return Object.values(galleryData).flat();
    }
    const categoryData =
      galleryData[activeCategory as keyof typeof galleryData];
    return categoryData || [];
  }, [activeCategory]);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      <WaveBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified Animated Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Capturing moments of transformation, learning, and success across
            our partner institutions.
          </p>
        </motion.div>

        {/* Optimized Filter Header */}
        <div className="mb-12">
          {/* Mobile Filter */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300"
                  }`}
                  style={{ minWidth: "120px" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Filter */}
          <div className="hidden md:flex justify-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Optimized Image Grid */}
        <motion.div
          key={activeCategory} // Force re-mount for smooth category transitions
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
          style={{
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
          }}
        >
          {filteredImages.map((imageSrc, index) => (
            <ImageCard
              key={`${activeCategory}-${imageSrc}-${index}`}
              imageSrc={imageSrc}
              index={index}
              activeCategory={activeCategory}
              onClick={() => setSelectedImg(imageSrc)}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-gray-500">No images found for this category.</p>
          </motion.div>
        )}
      </div>

      {/* Optimized Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            style={{ backdropFilter: "blur(4px)" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-4xl max-h-[90vh] mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Selected"
                fill
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                style={{
                  maxHeight: "90vh",
                  maxWidth: "90vw",
                }}
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SimplifiedGallery;
