import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import type { TagData } from '../../data/servicesData';

interface TagTooltipProps {
  tag: TagData;
  isVisible: boolean;
  position: { x: number; y: number };
}

const TagTooltip = ({ tag, isVisible, position }: TagTooltipProps) => {
  if (!isVisible) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed z-[9999] pointer-events-none"
        style={{
          left: position.x,
          top: position.y - 12,
          transform: 'translateX(-50%) translateY(-100%)',
        }}
      >
        <motion.div 
          className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-64 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Arrow pointing down */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-4 h-4 bg-white border-r border-b border-gray-200 rotate-45"></div>
          </div>
          
          {/* Image */}
          <div className="relative h-32 w-full overflow-hidden">
            <motion.img
              src={tag.image}
              alt={tag.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop&crop=center';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Overlay tag name */}
            <div className="absolute bottom-2 left-2 text-white font-semibold text-sm drop-shadow-lg">
              {tag.name}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <motion.p 
              className="text-sm text-gray-600 leading-relaxed"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {tag.description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default TagTooltip;