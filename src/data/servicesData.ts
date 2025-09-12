export interface TagData {
  name: string;
  description: string;
  image: string; // URL to image instead of emoji
  color: string;
}

export interface ServiceData {
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
    logo: string; // URL to company logo
  }[];
  modalContent: {
    longDescription: string;
    features: string[];
    cta: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: "white-labeled-app",
    icon: "📱",
    title: "White-Labeled AI App",
    description: "We provide colleges & organizations with a 100% white-labeled AI-powered app, fully customized to their brand.",
    gradient: "from-blue-500 to-cyan-500",
    stats: [
      { value: "500+", label: "Orgs" },
      { value: "24/7", label: "Support" },
      { value: "99%", label: "Uptime" }
    ],
    tags: [
      { 
        name: "Custom Branding", 
        description: "Complete brand customization with your colors, logos, and unique identity across all touchpoints",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop&crop=center",
        color: "bg-blue-100 text-blue-700 border-blue-200"
      },
      { 
        name: "Mobile & Web", 
        description: "Cross-platform applications that work seamlessly on iOS, Android, and web browsers",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop&crop=center",
        color: "bg-cyan-100 text-cyan-700 border-cyan-200"
      },
      { 
        name: "API Integration", 
        description: "Seamless integration with your existing systems, databases, and third-party services",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop&crop=center",
        color: "bg-indigo-100 text-indigo-700 border-indigo-200"
      },
      { 
        name: "Analytics Dashboard", 
        description: "Real-time insights and comprehensive reporting to track performance and user engagement",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
        color: "bg-purple-100 text-purple-700 border-purple-200"
      }
    ],
    trustedBy: [
      { name: "IIT Delhi", logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg" },
      { name: "BITS Pilani", logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg" },
      { name: "VIT University", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Vellore_Institute_of_Technology_seal_2017.svg" },
      { name: "Amity University", logo: "https://amity.edu/templates/temp1/images/logo.png" },
      { name: "LPU", logo: "https://www.lpu.in/images/logo.png" },
      { name: "SRM Institute", logo: "https://www.srmist.edu.in/wp-content/uploads/2020/07/SRM-logo-200x200.png" }
    ],
    modalContent: {
      longDescription: "Transform your educational institution with our comprehensive white-labeled AI application. Our platform provides a complete digital ecosystem that seamlessly integrates with your existing infrastructure while maintaining your unique brand identity. From student engagement to administrative efficiency, our AI-powered solution adapts to your specific needs and scales with your growth.",
      features: [
        "Complete brand customization with your logo, colors, and themes",
        "Multi-platform deployment (iOS, Android, Web)",
        "Advanced AI tutoring and personalized learning paths",
        "Integrated LMS with smart content recommendations",
        "Real-time analytics and performance tracking",
        "Student engagement tools and gamification",
        "Faculty management and collaboration tools",
        "Secure payment gateway integration",
        "Multi-language support for diverse student bodies",
        "24/7 technical support and maintenance"
      ],
      cta: "Join 500+ institutions already transforming education with our AI-powered platform."
    }
  },
  {
    id: "ai-skill-development",
    icon: "🎓",
    title: "AI Skill Development",
    description: "Free & premium AI courses for students and faculty, with integration as electives/credit-based learning in the curriculum.",
    gradient: "from-purple-500 to-pink-500",
    stats: [
      { value: "50k+", label: "Students" },
      { value: "200+", label: "Courses" },
      { value: "95%", label: "Success" }
    ],
    tags: [
      { 
        name: "Industry Certified", 
        description: "Globally recognized certifications that enhance career prospects and industry credibility",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&crop=center",
        color: "bg-purple-100 text-purple-700 border-purple-200"
      },
      { 
        name: "Hands-on Projects", 
        description: "Real-world projects using actual datasets and industry-standard tools and frameworks",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center",
        color: "bg-pink-100 text-pink-700 border-pink-200"
      },
      { 
        name: "Career Support", 
        description: "Comprehensive placement assistance including resume building, interview prep, and job matching",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=center",
        color: "bg-rose-100 text-rose-700 border-rose-200"
      },
      { 
        name: "Faculty Training", 
        description: "Professional development programs to upskill educators with latest AI teaching methodologies",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop&crop=center",
        color: "bg-violet-100 text-violet-700 border-violet-200"
      }
    ],
    trustedBy: [
      { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }
    ],
    modalContent: {
      longDescription: "Empower your students and faculty with cutting-edge AI skills through our comprehensive curriculum designed by industry experts. Our courses bridge the gap between academic theory and practical industry applications, ensuring graduates are job-ready with in-demand AI competencies. Whether you're looking to integrate AI as electives or build a complete specialization program, we provide the complete educational framework.",
      features: [
        "Industry-aligned curriculum designed with top tech companies",
        "Hands-on projects using real-world datasets and scenarios",
        "Professional certification recognized by leading employers",
        "Live mentorship sessions with AI industry professionals",
        "Career placement assistance and interview preparation",
        "Faculty development programs and training workshops",
        "Flexible delivery modes: online, hybrid, and in-person",
        "Progress tracking and competency assessment tools",
        "Integration with existing academic management systems",
        "Continuous curriculum updates based on industry trends"
      ],
      cta: "Prepare your students for the AI-driven future with skills that matter in today's job market."
    }
  },
  {
    id: "institutional-transformation",
    icon: "🏢",
    title: "Institutional Transformation",
    description: "From digitalization to branding, NAAC accreditation improvement, faculty training, and placement assistance — we uplift the entire ecosystem.",
    gradient: "from-green-500 to-teal-500",
    stats: [
      { value: "300+", label: "Colleges" },
      { value: "A++", label: "NAAC" },
      { value: "85%", label: "Placement" }
    ],
    tags: [
      { 
        name: "Digital Transformation", 
        description: "Complete modernization of academic and administrative processes using cutting-edge technology",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop&crop=center",
        color: "bg-green-100 text-green-700 border-green-200"
      },
      { 
        name: "NAAC Support", 
        description: "Expert guidance and documentation support for achieving higher NAAC grades and accreditation",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
        color: "bg-teal-100 text-teal-700 border-teal-200"
      },
      { 
        name: "Brand Building", 
        description: "Strategic brand development to enhance institutional reputation and market positioning",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center",
        color: "bg-emerald-100 text-emerald-700 border-emerald-200"
      },
      { 
        name: "Placement Cell", 
        description: "Establishment and optimization of placement cells to maximize student career opportunities",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&crop=center",
        color: "bg-lime-100 text-lime-700 border-lime-200"
      }
    ],
    trustedBy: [
      { name: "UGC", logo: "https://www.ugc.ac.in/oldpdf/alluniversity/ugc_logo.jpg" },
      { name: "AICTE", logo: "https://www.aicte-india.org/sites/default/files/AICTE%20Official%20Logo.png" },
      { name: "NAAC", logo: "https://www.naac.gov.in/images/naac-logo.png" },
      { name: "NIRF", logo: "https://www.nirfindia.org/nirflogo.png" },
      { name: "QS Rankings", logo: "https://www.qs.com/wp-content/uploads/2019/03/QS_Logo_Horizontal_RGB_Positive.png" },
      { name: "Times Higher Ed", logo: "https://www.timeshighereducation.com/themes/custom/times/images/the-logo-white.png" }
    ],
    modalContent: {
      longDescription: "Transform your institution into a future-ready educational powerhouse with our comprehensive ecosystem development approach. We don't just digitize—we revolutionize every aspect of your institution, from academic excellence to market positioning. Our holistic transformation strategy ensures sustainable growth, improved rankings, and enhanced stakeholder satisfaction across all dimensions of institutional performance.",
      features: [
        "Complete digital infrastructure setup and migration",
        "NAAC accreditation consulting and documentation support",
        "Brand identity development and marketing strategy",
        "Faculty recruitment, training, and development programs",
        "Industry partnership facilitation and collaboration setup",
        "Placement cell establishment and corporate relations",
        "Academic process optimization and automation",
        "Student experience enhancement and engagement programs",
        "Quality assurance and continuous improvement frameworks",
        "Financial planning and revenue optimization strategies"
      ],
      cta: "Transform your institution into a leading educational brand that attracts top students and faculty."
    }
  }
];