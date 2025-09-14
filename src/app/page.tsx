"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LoadingScreen from "@/components/LoadingScreen";
import Services from "@/components/Services";

// Lazy load heavy components for better performance
const NewsVideo = lazy(() => import("@/components/News"));
const SuccessStories = lazy(() => import("@/components/SuccsessStories"));
const TopTrainers = lazy(() => import("@/components/Trainers"));
const PartnerCollaboration = lazy(() => import("@/components/Collabaration"));
const IncubationSupport = lazy(() => import("@/components/IncubationSupport"));
const HandsOnLearningSection = lazy(() => import("@/components/HandsOn"));
const GallerySection = lazy(() => import("@/components/Gallery"));
const ReachOutPage = lazy(() => import("@/components/Contact"));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="h-96 bg-gray-50 animate-pulse rounded-lg mx-4 my-8 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  // Optimized scroll event handler with throttling
  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;
    let isScrolling = false;

    const toggleVisibility = () => {
      if (isScrolling) return;

      isScrolling = true;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const scrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollPosition > 300) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }

        isScrolling = false;
      }, 16); // ~60fps throttling
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", toggleVisibility, {
      passive: true,
      capture: false,
    });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Optimized scroll to top function
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 800; // ms

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onFinish={handleLoadingFinish} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            {/* Fixed Header - optimized for performance */}
            <motion.div
              className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm will-change-transform"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Header />
            </motion.div>

            {/* Main Content with proper spacing */}
            <main className="pt-20 w-full">
              {/* Immediately visible sections - no lazy loading */}
              <Hero />

              <Suspense fallback={<SectionLoader />}>
                <Stats />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Services />{" "}
              </Suspense>

              {/* Lazy loaded sections with loading states */}
              <Suspense fallback={<SectionLoader />}>
                <NewsVideo />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <SuccessStories />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <TopTrainers />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <PartnerCollaboration />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <IncubationSupport />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <HandsOnLearningSection />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <GallerySection />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <ReachOutPage />
              </Suspense>

              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optimized Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 z-40 group will-change-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            aria-label="Scroll to top"
          >
            {/* Simplified arrow icon - no animation to reduce CPU load */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>

            {/* Tooltip with pointer events disabled for better performance */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Back to top
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
