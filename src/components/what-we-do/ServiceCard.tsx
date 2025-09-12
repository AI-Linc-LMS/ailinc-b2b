import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import TagTooltip from "./TagTooltip";

interface TagData {
  name: string;
  description: string;
  image: string;
  color: string;
}

interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
  stats: {
    value: string;
    label: string;
  }[];
  tags: TagData[];
  trustedBy: {
    name: string;
    logo: string;
  }[];
  modalContent: {
    longDescription: string;
    features: string[];
    cta: string;
  };
}

interface ServiceCardProps {
  service: ServiceData;
  onLearnMore: () => void;
}

const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  const [hoveredTag, setHoveredTag] = useState<TagData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTagHover = (tag: TagData, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
    });
    setHoveredTag(tag);
  };

  const handleTagLeave = () => {
    setHoveredTag(null);
  };
  return (
    <>
      <motion.div
        ref={cardRef}
        className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        {/* Animated background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          initial={false}
        />

        {/* Floating particles effect */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        {/* Header with icon and stats */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          {/* Icon */}
          <motion.div
            className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-2xl shadow-lg relative`}
            whileHover={{
              scale: 1.1,
              rotate: 6,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.3, type: "spring" }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {service.icon}
            </motion.span>

            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-current opacity-0 group-hover:opacity-20"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.2, 0.1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Stats */}
          <div className="flex space-x-3">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-2 text-center min-w-[60px] hover:bg-gray-100 transition-colors duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-sm font-bold text-gray-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mb-6 relative z-10">
          <motion.h3
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="text-gray-600 leading-relaxed text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {service.description}
          </motion.p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.tags.map((tag, index) => (
            <motion.span
              key={index}
              className={`${tag.color} border px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer hover:shadow-md`}
              onMouseEnter={(e) => handleTagHover(tag, e)}
              onMouseLeave={handleTagLeave}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {tag.name}
            </motion.span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center relative z-10">
          {/* Learn More Link */}
          <motion.button
            onClick={onLearnMore}
            className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 group/btn transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </motion.button>

          {/* Trusted By */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">Trusted by</span>
            <div className="flex -space-x-1">
              {service.trustedBy.slice(0, 3).map((company, index) => (
                <motion.div
                  key={index}
                  className="w-6 h-6 bg-white rounded-full border-2 border-gray-100 flex items-center justify-center overflow-hidden shadow-sm"
                  style={{ zIndex: 10 - index }}
                  whileHover={{ scale: 1.2, zIndex: 20 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-4 h-4 object-contain"
                    title={company.name}
                  />
                </motion.div>
              ))}
              {service.trustedBy.length > 3 && (
                <motion.div
                  className="w-6 h-6 bg-gray-100 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ zIndex: 7 }}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <span className="text-xs text-gray-600 font-bold">
                    +{service.trustedBy.length - 3}
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Hover Effect Line */}
        <motion.div
          className={`mt-4 h-1 bg-gradient-to-r ${service.gradient} rounded-full relative overflow-hidden`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Tag Tooltip */}
      {hoveredTag && (
        <TagTooltip
          tag={hoveredTag}
          isVisible={hoveredTag !== null}
          position={tooltipPosition}
        />
      )}
    </>
  );
};

export default ServiceCard;
