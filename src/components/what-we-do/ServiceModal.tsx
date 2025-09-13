import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

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

interface ServiceModalProps {
  service: ServiceData | null;
  onClose: () => void;
}

const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (service) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 scrollbar-hide"
        onClick={onClose}
      >
        {/* Background Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] sm:max-h-[95vh] overflow-hidden mx-2 sm:mx-4"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            duration: 0.4,
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh] sm:max-h-[95vh] scrollbar-hide">
            {/* Header */}
            <div className="relative p-4 sm:p-8 pb-4 sm:pb-6">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                {/* Icon and Title */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {service.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center min-w-[60px]"
                        >
                          <div className="text-sm sm:text-lg font-bold text-gray-900">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {service.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    className={`${tag.color} border px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm flex items-center space-x-2`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>{tag.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-8 pb-4 sm:pb-8">
              {/* Long Description */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  About This Service
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
                  {service.modalContent.longDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.modalContent.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-6">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    {service.modalContent.cta}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${service.gradient} text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-700 px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold border border-gray-300 hover:border-gray-400 transition-colors duration-300 text-sm sm:text-base"
                    >
                      Schedule Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default ServiceModal;
