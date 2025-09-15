import { motion } from "framer-motion";

const AgenticAIIcon = () => (
  <motion.svg
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    className="w-8 h-8 text-indigo-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 12h8" />
    <path d="M12 16h4" />
  </motion.svg>
);
export default AgenticAIIcon;
