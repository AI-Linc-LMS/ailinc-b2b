import { motion } from "framer-motion";

const SQLIcon = () => (
  <motion.svg
    whileHover={{ rotate: 10, scale: 1.1 }}
    className="w-8 h-8 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 16c-3.31 0-6-2.69-6-6s2.69-6 6-6" />
    <path d="M12 20v-4" />
    <path d="M6 20v-4" />
    <path d="M18 10c-3.31 0-6-2.69-6-6s2.69-6 6-6" />
  </motion.svg>
);

export default SQLIcon;
