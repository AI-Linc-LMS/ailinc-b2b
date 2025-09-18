"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { useLenis } from "@/hooks/use-lenis"

// Custom SVG Components with corrected colors
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
  </svg>
)

export function Footer() {
  const { scrollTo } = useLenis()
  const router = useRouter()
  const pathname = usePathname()

  // Function to handle navigation to sections
  const navigateToSection = (sectionId: string, duration: number = 1.5) => {
    if (pathname === '/') {
      scrollTo(`#${sectionId}`, { duration })
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  // Function to handle contact/apply form navigation
  const navigateToContactForm = (formType: "contact" | "apply") => {
    if (pathname === '/') {
      const section = document.getElementById("contact-apply")
      const trigger = section?.querySelector(`[value="${formType}"]`)
      trigger && (trigger as HTMLElement).click()
      scrollTo("#contact-apply", { duration: 1.5 })
    } else {
      router.push(`/#contact-apply-${formType}`)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-white border-t border-gray-200/50 py-16 sm:py-20 relative overflow-hidden">
      {/* Light Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Logo and Contact */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 pb-12 border-b border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Logo and Description */}
            <motion.div variants={item} className="space-y-6">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI LINC
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Bridging the gap between AI talent and opportunity. We assess, elevate, and deploy professionals into high-impact AI roles.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">India Office</p>
                    <p className="text-gray-600 text-sm">8-2-418, Meenakshi House, Rd No 7, Banjara Hills, Hyderabad, 500034</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <a href="tel:+917868055111" className="text-gray-700 hover:text-blue-600 transition-colors">
                    +91 7868-055111
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <a href="mailto:contact@ailinc.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                    contact@ailinc.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-12"
        >
          {/* About AI Linc */}
          <motion.div variants={item} className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About AI Linc</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  How We Do It
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("success-stories")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Success Stories
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Hire Talent */}
          <motion.div variants={item} className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hire Talent</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => navigateToSection("success-stories")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Browse Talent Pool
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Hiring Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("what-we-do")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Enterprise Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToContactForm("contact")}
                  className="text-blue-600 font-semibold hover:text-purple-600 transition-colors text-left"
                >
                  Get in Touch →
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Join as Talent */}
          <motion.div variants={item} className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Join as Talent</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  AI Readiness Assessment
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Live Role Simulations
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToSection("work-integration")}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-left"
                >
                  Deployment Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToContactForm("apply")}
                  className="text-purple-600 font-semibold hover:text-blue-600 transition-colors text-left"
                >
                  Apply Now →
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={item} className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Connected</h3>
            
            {/* Social Links */}
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/ai-linc772/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors group"
              >
                <LinkedInIcon />
                <span className="ml-3">LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@AILinc772"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start p-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors group"
              >
                <YouTubeIcon />
                <span className="ml-3">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/ai_lincc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start p-3 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors group"
              >
                <InstagramIcon />
                <span className="ml-3">Instagram</span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <div className="flex items-center mb-3 text-blue-600">
                <SendIcon />
                <span className="ml-2 font-semibold text-gray-900">Newsletter</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest AI insights and opportunities
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Compact Map Section */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64">
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

        {/* Separator */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center text-gray-600 text-sm space-y-4 lg:space-y-0"
        >
          <p>&copy; {new Date().getFullYear()} AI LINC. All rights reserved.</p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
            <Link href="/refund" className="hover:text-blue-600 transition-colors">Refunds</Link>
           
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
