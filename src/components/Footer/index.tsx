import { motion, Variants } from "framer-motion";
import { LocationIcon } from "../../../public/icons/location";
import { CallIcon } from "../../../public/icons/callicon";
import { EmailIcon } from "../../../public/icons/EmailIcon";

// --- Correct & Self-Contained SVG Icons ---

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zM5 8.5H0v12h5v-12zM13 8.5h-4v12h4v-6.2c0-3.369 4.81-3.369 4.81 0V20.5h4v-7.8c0-5.469-7.03-5.469-7.03 0V8.5z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

// --- Main Footer Component ---
function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative bg-white w-full overflow-hidden pt-24 pb-12"
    >
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Top Section: Now a 2-column layout */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-gray-200"
        >
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              AI Linc
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Empowering the next generation of innovators through cutting-edge
              AI education and incubation.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <LocationIcon className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    India Office
                  </span>
                  <br />
                  8-2-418, Meenakshi House, Rd No 7, Banjara Hills, Hyderabad,
                  500034
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CallIcon className="h-6 w-6" />
                </div>
                <span>+91 7868-055111</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <EmailIcon className="h-6 w-6" />
                </div>
                <a
                  href="mailto:contact@ailinc.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@ailinc.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Middle Section: Links and Map */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-gray-600">
              {["About Us", "Careers", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-5">Legal</h3>
            <ul className="space-y-3 text-gray-600">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Compliance",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.221425951885!2d78.44666109999999!3d17.404840899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973c1c841c2b%3A0x7b36f821a0ce9047!2sAI%20Linc!5e0!3m2!1sen!2sin!4v1757737590720!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="AI Linc Location"
              style={{ border: 0 }}
            />
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright and Socials */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-gray-500"
        >
          <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
            © {new Date().getFullYear()} AI Linc. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            <motion.a
              href="https://www.linkedin.com/company/ai-linc772/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-blue-700 transition-colors"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@AILinc772" // Corrected YouTube Link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-red-600 transition-colors"
            >
              <YouTubeIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ai_lincc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-pink-600 transition-colors"
            >
              <InstagramIcon />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
