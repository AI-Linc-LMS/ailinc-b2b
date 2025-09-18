"use client"
import { motion } from "framer-motion"

// Custom SVG Icons
// Fixed Icons with proper coloring
const UsersIcon = () => (
    <svg className="size-6 text-blue-600" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197V9a3 3 0 00-6 0v2.197a6 6 0 009 5.197z" />
    </svg>
)

const SearchIcon = () => (
    <svg className="size-6 text-blue-600" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
)

const TrendingUpIcon = () => (
    <svg className="size-6 text-blue-600" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
)

const BriefcaseIcon = () => (
    <svg className="size-6 text-blue-600" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8z" />
    </svg>
)

const RocketIcon = () => (
    <svg className="size-6 text-blue-600" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l4-4a4 4 0 000-5.656z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l9-9-9-9-9 9 4.5 4.5" />
    </svg>
)

const Building2Icon = () => (
    <svg className="size-6 text-purple-600" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
)

const UserCheckIcon = () => (
    <svg className="size-6 text-blue-600" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
    </svg>
)

const LightbulbIcon = () => (
    <svg className="size-6 text-orange-500" fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
)


// TeamMemberCard Component
const TeamMemberCard = ({
  name,
  role,
  description,
  imageSrc,
  borderColor,
  hoverColor,
}: {
  name: string
  role: string
  description: string
  imageSrc: string
  borderColor: string
  hoverColor: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: `0 10px 30px ${hoverColor}33`,
      }}
      className="bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden group hover:shadow-xl flex flex-col"
      style={{ borderColor: borderColor }}
    >
      {/* Image */}
      <div className="relative">
        <div className="w-full h-80 overflow-hidden bg-gray-100">
          <img
            src={imageSrc}
            loading="lazy"
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: `linear-gradient(to top, ${hoverColor}20, transparent)`,
          }}
        />
      </div>

      {/* Text Content - fixed min height so cards align */}
      <div className="p-6 flex-1 flex flex-col justify-between min-h-[180px]">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {name}
          </h3>
          <p
            className="font-semibold text-sm mb-3 transition-colors truncate"
            style={{ color: borderColor }}
          >
            {role}
          </p>
          <p className="text-gray-600 transition-colors line-clamp-3 text-sm text-center">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-2"
        style={{ backgroundColor: borderColor }}
      />
    </motion.div>
  )
}



// Who We Are Section
export function WhoWeAreSection() {
    const specializations = [
        {
            icon: UsersIcon,
            title: "AI consulting workforce development",
            description: "Building teams that understand both AI technology and business applications"
        },
        {
            icon: SearchIcon,
            title: "Talent sourcing and screening",
            description: "Identifying and evaluating top AI professionals across diverse skill sets"
        },
        {
            icon: TrendingUpIcon,
            title: "Outcome-aligned upskilling",
            description: "Training programs designed for measurable career advancement"
        },
        {
            icon: BriefcaseIcon,
            title: "Flexible engagement models (FT/PT/freelance/contract)",
            description: "Matching talent to opportunities that fit their career goals and lifestyle"
        },
        {
            icon: RocketIcon,
            title: "Entrepreneurial enablement",
            description: "Supporting AI professionals in launching their own ventures and startups"
        }
    ]

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
        <section id="who-we-are" className="py-16 sm:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Who We Are
                            </h2>
                            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                                A consulting-first AI deployment firm — preparing and placing AI talent into roles that demand innovation, execution, and real-world readiness.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="space-y-4">
                            <motion.div variants={item} className="mb-8">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">We specialize in:</h3>
                            </motion.div>

                            {specializations.map((spec, index) => (
                                <motion.div key={index} variants={item}>
                                    <div className="bg-gradient-to-r from-white to-gray-50 backdrop-blur-sm border border-blue-200 rounded-xl group hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="size-12 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                                                    <spec.icon />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                    {spec.title}
                                                </h4>
                                                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                                    {spec.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/4 left-1/4 size-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 size-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </section>
    )
}

// What We Do Section
export function WhatWeDoSection() {
    const coreOfferings = [
        {
            icon: UsersIcon,
            title: "Talent Deployment",
            description: "Into full-time, freelance, or consulting roles",
            details: "We connect AI professionals with opportunities that match their expertise and career goals, whether they're seeking permanent positions, flexible freelance work, or high-impact consulting engagements.",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: Building2Icon,
            title: "AI Consulting Teams",
            description: "For startups and enterprises",
            details: "We assemble specialized AI consulting teams tailored to your organization's needs, providing expertise in strategy, implementation, and optimization of AI solutions.",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: UserCheckIcon,
            title: "Recruitment Enablement",
            description: "Skill-based screening + job matching",
            details: "Our advanced screening process evaluates technical skills, cultural fit, and project experience to ensure perfect matches between talent and opportunities.",
            color: "from-blue-500 to-purple-600"
        },
        {
            icon: LightbulbIcon,
            title: "Startup Support",
            description: "Incubation, advisory, and resources",
            details: "We provide comprehensive support for AI-driven startups, including mentorship, strategic guidance, technical resources, and access to our network of investors and partners.",
            color: "from-orange-500 to-red-500"
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }

    return (
        <section id="what-we-do" className="py-16 sm:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        What We Do
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We bridge the gap between exceptional AI talent and transformative opportunities
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
                >
                    {coreOfferings.map((offering, index) => (
                        <motion.div key={index} variants={item}>
                            <div className="bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-sm border border-gray-200 rounded-xl group hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 h-full">
                                <div className="p-6 pb-4">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className={`size-16 rounded-2xl bg-gradient-to-r ${offering.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <offering.icon />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                                        {offering.title}
                                    </h3>
                                    <p className="text-center text-blue-600 font-medium text-sm mb-4">
                                        {offering.description}
                                    </p>
                                </div>
                                <div className="px-6 pb-6">
                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                        {offering.details}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute top-1/3 left-1/4 size-96 bg-blue-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 size-96 bg-purple-200/15 rounded-full blur-3xl"></div>
            <div className="absolute top-2/3 right-1/3 size-64 bg-orange-200/15 rounded-full blur-2xl"></div>
        </section>
    )
}

// Team Section
export function TeamSection() {
    const teamMembers = [
        {
            name: "Shubham",
            role: "Director",
            description: "Driving AI Linc's vision and strategic growth with innovative leadership.",
            imageSrc: "/trainers/shubham_lal.jpg",
            borderColor: "#3B82F6", // Blue-500
            hoverColor: "#3B82F6"
        },
        {
            name: "Poorva",
            role: "Director",
            description: "Pioneering innovative solutions and driving AI Linc's technological advancement.",
            imageSrc: "/trainers/poorva_image.jpg",
            borderColor: "#8B5CF6", // Purple-500
            hoverColor: "#8B5CF6"
        },
        {
            name: "Sandeep",
            role: "Director",
            description: "Guiding AI Linc's strategic partnerships and business development.",
            imageSrc: "/trainers/sandeep.jpeg",
            borderColor: "#10B981", // Emerald-500
            hoverColor: "#10B981"
        },
        {
            name: "Noorman",
            role: "Chief Marketing Officer",
            description: "Crafting AI Linc's brand narrative and market positioning.",
            imageSrc: "/trainers/noorman.jpeg",
            borderColor: "#EC4899", // Pink-500
            hoverColor: "#EC4899"
        }
    ]

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
        <section className="py-20 relative bg-gradient-to-b from-gray-50/50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Meet Our Leadership
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our experienced team of visionaries and industry experts driving AI Linc&apos;s mission forward
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div key={index} variants={item}>
                            <TeamMemberCard
                                name={member.name}
                                role={member.role}
                                description={member.description}
                                imageSrc={member.imageSrc}
                                borderColor={member.borderColor}
                                hoverColor={member.hoverColor}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute top-1/4 left-1/4 size-96 bg-blue-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 size-96 bg-purple-200/15 rounded-full blur-3xl"></div>
        </section>
    )
}

// Main About Us Page
export default function AboutUs() {
    return (
        <main className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            About AI Linc
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                            Bridging the gap between AI talent and transformative opportunities through innovative assessment, upskilling, and deployment solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute top-1/4 left-1/4 size-96 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 size-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 relative bg-white">
                <WhoWeAreSection />
            </section>

            {/* What We Do Section */}
            <section className="py-20 relative bg-gradient-to-b from-gray-50/50 to-white">
                <WhatWeDoSection />
            </section>

            {/* Team Section */}
            <TeamSection />
        </main>
    )
}
