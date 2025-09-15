// components/Services.tsx
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { AWSLogo } from "../../../public/icons/AWSLogo";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";

type Item = {
  title: string;
  text: string;
  hover?: string;
};

type Tab = {
  id: string;
  nav: string;
  cta: string;
  items: Item[];
  mockup: React.ReactNode;
};

// Hook to dynamically position hover cards within viewport
const useHoverCardPosition = (ref: React.RefObject<HTMLDivElement> | null) => {
  const [position, setPosition] = useState<{ top?: string; bottom?: string }>({
    top: "0",
  });

  const updatePosition = useCallback(() => {
    if (!ref?.current) return;
    const rect = ref.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const minSpaceNeeded = 360;

    if (spaceBelow < minSpaceNeeded) {
      setPosition({ bottom: "100%", top: undefined });
    } else {
      setPosition({ top: "0", bottom: undefined });
    }
  }, [ref]);

  useEffect(() => {
    updatePosition();
    const handleResize = () => updatePosition();
    const handleScroll = () => updatePosition();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [updatePosition]);

  return position;
};

// Standard SVG Icons
const Icons = {
  GraduationCap: ({ className }: { className?: string }) => (
    <svg
      className={className}
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
        d="M12 14v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m18 0v7a2 2 0 01-2 2h-5a2 2 0 01-2-2v-7"
      />
    </svg>
  ),
  Chart: ({ className }: { className?: string }) => (
    <svg
      className={className}
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
  Users: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
      />
    </svg>
  ),
  Briefcase: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0h2.5A1.5 1.5 0 0120 7.5v6.75a1.5 1.5 0 01-1.5 1.5H16"
      />
    </svg>
  ),
  Robot: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  ),
  TrendingUp: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  ),
  Video: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  ),
  Mail: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Computer: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  Trophy: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  ),
  Rocket: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3M7 16.5C7 12.91 9.91 10 13.5 10s6.5 2.91 6.5 6.5"
      />
    </svg>
  ),
  Cloud: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </svg>
  ),
  Building: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  Star: ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  ),
};

// 3D Mockup Components
const WhiteLabelMockup = () => (
  <motion.div
    initial={{ scale: 0.8, rotateY: -15 }}
    animate={{ scale: 1, rotateY: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative"
  >
    {/* Mobile App Screen */}
    <div className="relative w-48 h-80 mx-auto">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-[2.5rem] p-2 shadow-2xl transform rotate-6">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="h-8 bg-blue-600 flex items-center justify-between px-4">
            <div className="text-white text-xs font-medium">AI Linc</div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-3">
            <div className="h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center px-3">
              <div className="w-6 h-6 bg-blue-500 rounded mr-2"></div>
              <div className="text-xs font-medium">Course Dashboard</div>
            </div>
            <div className="h-8 bg-gray-100 rounded"></div>
            <div className="h-8 bg-gray-100 rounded"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 bg-purple-100 rounded"></div>
              <div className="h-12 bg-green-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg flex items-center justify-center"
      >
        <Icons.GraduationCap className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-4 -left-6 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-lg flex items-center justify-center"
      >
        <Icons.Users className="w-5 h-5 text-white" />
      </motion.div>
    </div>
  </motion.div>
);

const SkillDevMockup = () => (
  <motion.div
    initial={{ scale: 0.8, rotateX: 15 }}
    animate={{ scale: 1, rotateX: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative"
  >
    {/* Dashboard Screen */}
    <div className="relative w-64 h-40 mx-auto">
      {/* Laptop Frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-t-lg shadow-2xl">
        <div className="w-full h-full bg-white rounded-t-lg p-3 overflow-hidden">
          {/* Browser Bar */}
          <div className="h-6 bg-gray-100 rounded-t flex items-center px-2 mb-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="ml-4 text-xs text-gray-500">Course Dashboard</div>
          </div>

          {/* Dashboard Content */}
          <div className="space-y-2">
            {/* Header */}
            <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>

            {/* Course Cards */}
            <div className="grid grid-cols-3 gap-1">
              <div className="h-12 bg-blue-100 rounded p-1">
                <div className="w-full h-3 bg-blue-200 rounded mb-1"></div>
                <div className="w-2/3 h-2 bg-blue-300 rounded"></div>
              </div>
              <div className="h-12 bg-purple-100 rounded p-1">
                <div className="w-full h-3 bg-purple-200 rounded mb-1"></div>
                <div className="w-2/3 h-2 bg-purple-300 rounded"></div>
              </div>
              <div className="h-12 bg-green-100 rounded p-1">
                <div className="w-full h-3 bg-green-200 rounded mb-1"></div>
                <div className="w-2/3 h-2 bg-green-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Badges */}
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-2 -right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg flex items-center justify-center"
      >
        <Icons.Building className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
        className="absolute bottom-2 -left-6 w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg shadow-lg flex items-center justify-center"
      >
        <Icons.Star className="w-5 h-5 text-white" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-8 -left-4 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg flex items-center justify-center"
      >
        <Icons.Cloud className="w-4 h-4 text-white" />
      </motion.div>
    </div>
  </motion.div>
);

const TransformMockup = () => (
  <motion.div
    initial={{ scale: 0.8, rotateZ: -5 }}
    animate={{ scale: 1, rotateZ: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative"
  >
    {/* Analytics Dashboard */}
    <div className="relative w-56 h-36 mx-auto">
      {/* Screen Frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl p-2">
        <div className="w-full h-full bg-white rounded-lg overflow-hidden">
          {/* Header */}
          <div className="h-8 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center px-3">
            <div className="text-white text-xs font-semibold">
              Transformation Analytics
            </div>
          </div>

          {/* Analytics Content */}
          <div className="p-3 space-y-2">
            {/* Progress Bars */}
            <div className="space-y-1">
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                </div>
                <div className="ml-2 text-xs text-gray-600">NAAC Score</div>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
                <div className="ml-2 text-xs text-gray-600">Placements</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="h-12 bg-gradient-to-br from-green-50 to-blue-50 rounded flex items-end justify-center space-x-1 p-2">
              <div className="w-2 h-4 bg-green-400 rounded-t"></div>
              <div className="w-2 h-6 bg-blue-400 rounded-t"></div>
              <div className="w-2 h-8 bg-purple-400 rounded-t"></div>
              <div className="w-2 h-5 bg-pink-400 rounded-t"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Achievement Icons */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-3 -right-6 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center"
      >
        <Icons.Trophy className="w-5 h-5 text-white" />
      </motion.div>

      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 -left-5 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg flex items-center justify-center"
      >
        <Icons.Rocket className="w-4 h-4 text-white" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-4 -left-3 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded shadow-lg flex items-center justify-center"
      >
        <Icons.Computer className="w-3 h-3 text-white" />
      </motion.div>
    </div>
  </motion.div>
);

const tabs: Tab[] = [
  {
    id: "white",
    nav: "White-Labeled AI App",
    cta: "Explore the App",
    mockup: <WhiteLabelMockup />,
    items: [
      {
        title: "Trusted by 1,000+ Colleges",
        text: "1 million students empowered.",
        hover: "scFeatures",
      },
      {
        title: "Zero Setup Cost",
        text: "Fully ready in  days.",
      },
      {
        title: "100% Custom Branding",
        text: "Your name, logo and colours.",
      },
    ],
  },
  {
    id: "skill",
    nav: "AI Skill Development",
    cta: "See Curriculum",
    mockup: <SkillDevMockup />,
    items: [
      {
        title: "200+ Hours Free Courses",
        text: "Foundational AI tracks.",
      },
      {
        title: "Microsoft, AWS & Google Certs",
        text: "Premium badges.",
        hover: "scCertTrack",
      },
      {
        title: "90% Student Engagement",
        text: "Across partner campuses.",
      },
    ],
  },
  {
    id: "transform",
    nav: "Institutional Transformation",
    cta: "Start Transformation",
    mockup: <TransformMockup />,
    items: [
      { title: "+0.6 NAAC Score", text: "Typical uplift." },
      {
        title: "35% Placement Growth",
        text: "Within one year.",
      },
      {
        title: "100% Digital Records",
        text: "Faculty & placements.",
        hover: "scFlow",
      },
    ],
  },
];

// Creative Hover Card Components with Standard Icons
const WhiteLabelHoverCard = ({
  position,
}: {
  position: { top?: string; bottom?: string };
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: 20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="absolute left-full ml-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 hidden lg:block"
    style={position}
  >
    <div className="mb-4">
      <h4 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        All Features
      </h4>
      <p className="text-sm text-gray-600">Complete platform overview</p>
    </div>

    <div className="grid grid-cols-2 gap-3 mb-4">
      {[
        {
          icon: Icons.GraduationCap,
          name: "Course Builder",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: Icons.Chart,
          name: "Student Dashboard",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: Icons.Users,
          name: "Community",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: Icons.Briefcase,
          name: "Job Board",
          color: "from-orange-500 to-red-500",
        },
        {
          icon: Icons.Robot,
          name: "AI Reports",
          color: "from-indigo-500 to-purple-500",
        },
        {
          icon: Icons.TrendingUp,
          name: "Auto Reports",
          color: "from-teal-500 to-cyan-500",
        },
        {
          icon: Icons.Video,
          name: "Live Classes",
          color: "from-rose-500 to-pink-500",
        },
        {
          icon: Icons.Mail,
          name: "Bulk Email",
          color: "from-amber-500 to-orange-500",
        },
      ].map((feature, index) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white text-center relative overflow-hidden`}
        >
          <feature.icon className="w-8 h-8 mx-auto mb-1" />
          <div className="text-xs font-medium">{feature.name}</div>
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              delay: index * 0.1 + 0.5,
              duration: 0.6,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>

    <div className="text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700"
      >
        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
        Ready to Deploy
      </motion.div>
    </div>
  </motion.div>
);

const SkillDevHoverCard = ({
  position,
}: {
  position: { top?: string; bottom?: string };
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: 20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="absolute left-full ml-6 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 hidden lg:block"
    style={position}
  >
    <div className="mb-6">
      <h4 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Certification Partners
      </h4>
      <p className="text-sm text-gray-600">Industry-recognized credentials</p>
    </div>

    <div className="space-y-4 mb-6">
      {[
        {
          name: "Microsoft",
          icon: <MicrosoftLogo className="h-6 w-6" />,
          color: "white",
          certs: ["Azure AI", "PowerBI", "Office 365"],
        },
        {
          name: "Google",
          icon: <GoogleLogo className="h-6 w-6" />,
          color: "white",
          certs: ["Cloud AI", "Analytics", "Workspace"],
        },
        {
          name: "AWS",
          icon: <AWSLogo className="h-6 w-6" />,
          color: "white",
          certs: ["Cloud Practitioner", "SageMaker", "Lambda"],
        },
      ].map((partner, index) => (
        <motion.div
          key={partner.name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, duration: 0.4 }}
          className="flex items-center p-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center text-white text-xl mr-3`}
          >
            {partner?.icon}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-800">{partner.name}</div>
            <div className="text-xs text-gray-500">
              {partner.certs.join(" - ")}
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3 }}
            className="w-3 h-3 bg-green-400 rounded-full"
          />
        </motion.div>
      ))}
    </div>

    <div className="space-y-2">
      {["Curriculum-Ready Content", "Faculty & Student Tracks"].map(
        (feature, index) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="flex items-center text-sm text-gray-600"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="w-2 h-2 bg-blue-400 rounded-full mr-2"
            />
            {feature}
          </motion.div>
        )
      )}
    </div>
  </motion.div>
);

const TransformHoverCard = ({
  position,
}: {
  position: { top?: string; bottom?: string };
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: 20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="absolute left-full ml-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 hidden lg:block"
    style={position}
  >
    <div className="mb-6">
      <h4 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Transformation Flow
      </h4>
      <p className="text-sm text-gray-600">End-to-end institutional upgrade</p>
    </div>

    <div className="space-y-4">
      {[
        {
          step: 1,
          title: "Campus Digitalization",
          icon: Icons.Computer,
          color: "from-blue-500 to-cyan-500",
          desc: "Complete digital infrastructure",
        },
        {
          step: 2,
          title: "Accreditation Boost",
          icon: Icons.Trophy,
          color: "from-purple-500 to-pink-500",
          desc: "NAAC score improvement",
        },
        {
          step: 3,
          title: "Placement Success",
          icon: Icons.Rocket,
          color: "from-green-500 to-emerald-500",
          desc: "Enhanced job outcomes",
        },
      ].map((step, index) => (
        <div key={step.step}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.2, type: "spring" }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl shadow-lg mr-4`}
              >
                <step.icon className="w-8 h-8" />
              </motion.div>
              <div className="flex-1">
                <motion.h5
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.3 }}
                  className="font-semibold text-gray-800 text-sm"
                >
                  {step.title}
                </motion.h5>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.4 }}
                  className="text-xs text-gray-500"
                >
                  {step.desc}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Arrow connector */}
          {index < 2 && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: index * 0.3 + 0.5, duration: 0.3 }}
              className="flex justify-center my-2"
            >
              <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-400 relative">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.7 }}
                  className="absolute -right-1 bottom-0 w-2 h-2 bg-gray-400 rotate-45"
                />
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="mt-6 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100"
    >
      <div className="flex items-center text-sm">
        <span className="text-green-600 mr-2">✨</span>
        <span className="text-gray-700 font-medium">
          Complete transformation in 12 months
        </span>
      </div>
    </motion.div>
  </motion.div>
);

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mobileHoverActive, setMobileHoverActive] = useState<number | null>(
    null
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create proper ref object for hover card positioning
  const hoveredRef = useMemo(() => {
    if (hoveredItem !== null && itemRefs.current[hoveredItem]) {
      return { current: itemRefs.current[hoveredItem] };
    }
    return null;
  }, [hoveredItem]);

  // Get hover card position with proper hook call
  const hoverCardPosition = useHoverCardPosition(hoveredRef);

  // Helper function to get initials from nav string
  const getInitials = (t: string) => {
    const normalized = t.trim().toLowerCase();
    console.log(normalized);
    if (normalized === "ai skill development") return "AI";

    return t
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  };

  // Correct ref callback function - returns void
  const setTabRef = useCallback(
    (index: number) =>
      (el: HTMLDivElement | null): void => {
        tabRefs.current[index] = el;
      },
    []
  );

  const setItemRef = useCallback(
    (index: number) =>
      (el: HTMLDivElement | null): void => {
        itemRefs.current[index] = el;
      },
    []
  );

  // Ref cleanup function
  const cleanupRefs = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    // Set all tab refs to null on cleanup
    tabRefs.current = tabRefs.current.map(() => null);
    itemRefs.current = itemRefs.current.map(() => null);
  }, []);

  // Auto-advance stepper like a gif
  useEffect(() => {
    if (!isAutoPlay || isHovering) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 4000); // Change every 4 seconds

    // Cleanup function - React will call this when component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlay, isHovering]);

  // Handle hover start - pause auto-progression
  const handleHoverStart = useCallback(() => {
    setIsHovering(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Handle hover end - resume auto-progression after delay
  const handleHoverEnd = useCallback(() => {
    setIsHovering(false);
    setHoveredItem(null);
    setMobileHoverActive(null);

    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume auto-play after 2 seconds of no hover
    resumeTimeoutRef.current = setTimeout(() => {
      if (isAutoPlay) {
        setIsHovering(false);
      }
    }, 2000);
  }, [isAutoPlay]);

  // Handle manual tab change
  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    handleHoverStart(); // Pause auto-progression

    // Resume auto-play after 8 seconds of no interaction
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 8000);
  };

  // Handle button click - pause auto-progression
  const handleButtonClick = useCallback(() => {
    handleHoverStart();

    // Resume auto-play after 5 seconds
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 5000);
  }, [handleHoverStart]);

  // Handle item hover with creative cards
  const handleItemHover = useCallback(
    (itemIndex: number) => {
      setHoveredItem(itemIndex);
      handleHoverStart();
    },
    [handleHoverStart]
  );

  // Handle mobile touch events
  const handleMobileTouch = useCallback(
    (itemIndex: number) => {
      if (mobileHoverActive === itemIndex) {
        setMobileHoverActive(null);
        handleHoverEnd();
      } else {
        setMobileHoverActive(itemIndex);
        setHoveredItem(itemIndex);
        handleHoverStart();

        // Auto-close mobile hover after 5 seconds
        setTimeout(() => {
          setMobileHoverActive(null);
          handleHoverEnd();
        }, 5000);
      }
    },
    [mobileHoverActive, handleHoverStart, handleHoverEnd]
  );

  // Handle component unmount cleanup
  useEffect(() => {
    return () => {
      cleanupRefs();
    };
  }, [cleanupRefs]);

  const fadeInUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textHoverVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const currentTab = tabs[activeIndex];

  return (
    <section
      id="services"
      className="py-12 md:py-24 px-4 sm:px-6 lg:px-8"
      ref={componentRef}
    >
      {/* Add custom CSS for glowing effect */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(59, 130, 246, 1));
            transform: scale(1.1);
          }
        }
        .animate-glow {
          animation: glow 2s infinite ease-in-out;
        }
      `}</style>

      <h2 className="mb-8 md:mb-14 text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        What We Do{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent italic">
          at AI Linc
        </span>
      </h2>

      {/* --------- Stepper Navigation - Updated with Letters/Initials --------- */}
      <div className="mb-8 md:mb-12 flex justify-center overflow-x-auto pb-4">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-max px-4">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center">
              {/* Step Circle - No Numbers */}
              <motion.button
                onClick={() => handleTabChange(index)}
                onTouchStart={handleHoverStart}
                onTouchEnd={handleHoverEnd}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
                className={`relative w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-500 ${
                  index === activeIndex
                    ? "border-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-100"
                    : index < activeIndex
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 bg-white text-gray-500 hover:border-blue-300"
                }`}
                whileHover={{ scale: index === activeIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {index < activeIndex ? (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                ) : index === activeIndex ? (
                  // Desktop: Show letters A, B, C
                  <span className="hidden sm:inline-block font-bold text-base md:text-lg">
                    <span className="">{getInitials(tab.nav)}</span>
                  </span>
                ) : (
                  // Mobile: Show initials of each word, Desktop: Show letters
                  <span className="font-bold text-xs sm:text-base md:text-lg">
                    <span className="sm:hidden">{getInitials(tab.nav)}</span>
                    <span className="hidden sm:inline">
                      {getInitials(tab.nav)}
                    </span>
                  </span>
                )}

                {/* Active indicator - no color change on hover */}
                {index === activeIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full border-4 border-blue-300 opacity-30"
                    initial={{ scale: 0.8 }}
                    animate={
                      isHovering ? { scale: 1 } : { scale: [0.8, 1.2, 0.8] }
                    }
                    transition={
                      isHovering
                        ? { duration: 0.3 }
                        : { duration: 2, repeat: Infinity }
                    }
                  />
                )}
              </motion.button>

              {/* Step Label - Desktop: Full name, Mobile: Hidden */}
              <div
                className="ml-3 mr-6 hidden md:block"
                onTouchStart={handleHoverStart}
                onTouchEnd={handleHoverEnd}
                onMouseEnter={handleHoverStart}
                onMouseLeave={handleHoverEnd}
              >
                <div
                  className={`text-sm font-medium transition-colors duration-300 ${
                    index === activeIndex
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      : index < activeIndex
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab.nav}
                </div>
              </div>

              {/* Connector Line - Adjusted for mobile */}
              {index < tabs.length - 1 && (
                <div
                  className={`h-0.5 w-6 sm:w-7 md:w-16 transition-all duration-500 ${
                    index < activeIndex ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --------- Mobile Tab Labels (Below stepper on small screens) --------- */}
      <div className="block md:hidden mb-6">
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentTab.nav}
          </span>
        </div>
      </div>

      {/* --------- Progress Bar --------- */}
      <div className="mb-8 md:mb-12 mx-auto max-w-2xl px-4">
        <div className="w-full bg-gray-200 rounded-full h-2 md:h-3">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 md:h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((activeIndex + 1) / tabs.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <div className="text-center mt-2 text-xs md:text-sm text-gray-600">
          Step {activeIndex + 1} of {tabs.length}
        </div>
      </div>

      {/* --------- Content Panel --------- */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          ref={setTabRef(activeIndex)}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:gap-8 md:gap-16 lg:flex-row"
        >
          {/* LEFT â€“ steps */}
          <div className="flex-1 space-y-4 md:space-y-6 w-full">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center lg:text-left"
            >
              {currentTab.nav}
            </motion.h3>

            {currentTab.items.map((item, i) => (
              <motion.div
                key={item.title}
                ref={setItemRef(i)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`relative flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                  hoveredItem === i || mobileHoverActive === i
                    ? "bg-gradient-to-r from-blue-100 to-purple-100 shadow-lg ring-2 ring-blue-200 ring-opacity-50"
                    : "bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100"
                }`}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleMobileTouch(i);
                }}
                onMouseEnter={() => handleItemHover(i)}
                onMouseLeave={handleHoverEnd}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0"
                >
                  <span className="text-xs sm:text-sm md:text-base">
                    {String.fromCharCode(65 + i)}
                  </span>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Mobile Touch Indicator */}
                {item.hover && (
                  <div className="absolute top-2 right-2 ">
                    <motion.div
                      animate={{
                        scale: mobileHoverActive === i ? [1, 1.2, 1] : 1,
                        opacity: mobileHoverActive === i ? [0.5, 1, 0.5] : 0.3,
                      }}
                      transition={{
                        duration: 1,
                        repeat: mobileHoverActive === i ? Infinity : 0,
                      }}
                      className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
                    >
                      <span className="text-white text-xs">👆</span>
                    </motion.div>
                  </div>
                )}

                {/* Creative Hover Cards - With Dynamic Positioning */}

                <AnimatePresence>
                  {hoveredItem === i && item.hover && (
                    <>
                      {activeIndex === 0 && i === 0 && (
                        <WhiteLabelHoverCard position={hoverCardPosition} />
                      )}
                      {activeIndex === 1 && i === 1 && (
                        <SkillDevHoverCard position={hoverCardPosition} />
                      )}
                      {activeIndex === 2 && i === 2 && (
                        <TransformHoverCard position={hoverCardPosition} />
                      )}
                    </>
                  )}
                </AnimatePresence>

                {/* Mobile Hover Cards - Show below item */}
                {mobileHoverActive === i && item.hover && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50 lg:hidden"
                  >
                    <div className="text-sm">
                      {activeIndex === 0 && i === 0 && (
                        <div>
                          <h5 className="font-semibold text-blue-600 mb-2">
                            All Features Available:
                          </h5>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>Course Builder</div>
                            <div>Student Dashboard</div>
                            <div>Community</div>
                            <div>Job Board</div>
                            <div>AI Reports</div>
                            <div>Auto Reports</div>
                            <div>Live Classes</div>
                            <div>Bulk Email</div>
                          </div>
                        </div>
                      )}
                      {activeIndex === 1 && i === 1 && (
                        <div>
                          <h5 className="font-semibold text-blue-600 mb-2">
                            Certification Partners:
                          </h5>
                          <div className="space-y-1 text-xs">
                            <div>
                              - Microsoft (Azure AI, PowerBI, Office 365)
                            </div>
                            <div>- Google (Cloud AI, Analytics, Workspace)</div>
                            <div>
                              - AWS (Cloud Practitioner, SageMaker, Lambda)
                            </div>
                          </div>
                        </div>
                      )}
                      {activeIndex === 2 && i === 2 && (
                        <div>
                          <h5 className="font-semibold text-blue-600 mb-2">
                            Transformation Flow:
                          </h5>
                          <div className="space-y-1 text-xs">
                            <div>1. Campus Digitalization</div>
                            <div>2. Accreditation Boost</div>
                            <div>3. Placement Success</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
              onTouchStart={handleHoverStart}
              onTouchEnd={handleHoverEnd}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="mt-6 md:mt-8 w-full sm:w-auto rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white hover:shadow-lg transition-all duration-300 cursor-pointer text-sm md:text-base"
            >
              {currentTab.cta}
            </motion.button>
          </div>

          {/* RIGHT â€“ 3D Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-sm md:max-w-md lg:w-1/2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 shadow-lg"
            onTouchStart={handleHoverStart}
            onTouchEnd={handleHoverEnd}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="h-80 flex items-center justify-center"
              >
                {currentTab.mockup}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* --------- USP strip with Glowing Bulb & 3D Elements --------- */}
      <motion.div
        variants={fadeInUpVariants}
        className="mx-auto mt-12 md:mt-20 max-w-4xl text-center font-medium px-4"
        onTouchStart={handleHoverStart}
        onTouchEnd={handleHoverEnd}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100">
          {/* Background 3D Elements */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg opacity-10"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10"
            />
          </div>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed cursor-pointer relative z-10"
            initial="rest"
            whileHover="hover"
            variants={textHoverVariants}
          >
            <motion.span
              className="inline-block mr-3 text-yellow-400 text-2xl relative"
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.05, 1],
                filter: [
                  "drop-shadow(0 0 8px rgb(255 215 0 / 0.6)) brightness(1)",
                  "drop-shadow(0 0 16px rgb(255 215 0 / 0.8)) drop-shadow(0 0 24px rgb(255 215 0 / 0.4)) brightness(1.2)",
                  "drop-shadow(0 0 8px rgb(255 215 0 / 0.6)) brightness(1)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💡
              {/* Additional glow layer */}
              <motion.span
                className="absolute inset-0 text-2xl text-yellow-300 opacity-40 blur-sm"
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💡
              </motion.span>
            </motion.span>
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent font-medium">
              AI Linc is the only platform that combines AI-powered apps, skill
              development, and institutional transformation under one
              white-labeled solution — built for higher education.
            </span>
          </motion.p>

          {/* 3D Floating Icons */}
          <div className="relative mt-6">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mx-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg"
            >
              <Icons.GraduationCap className="w-full h-full p-1.5 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-block mx-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg"
            >
              <Icons.Rocket className="w-full h-full p-1.5 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="inline-block mx-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg"
            >
              <Icons.Trophy className="w-full h-full p-1.5 text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
