import { motion } from "framer-motion";

export const ArrowRightIcon = () => (
  <motion.svg
    className="w-8 h-8 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ x: 3 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m0-7H3"
    />
  </motion.svg>
);
