import { motion } from "framer-motion";

export const PlayIcon = ({ onClick }: { onClick: () => void }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ scale: 1.0 }}
    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-t-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 cursor-pointer"
  >
    <motion.svg
      className="w-20 h-20 text-white drop-shadow-lg"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.2 }}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </motion.svg>
  </motion.div>
);
