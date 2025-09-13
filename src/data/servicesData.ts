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
    description: "Trusted by 1000+ Colleges with 1M+ students empowered. Zero Setup Cost – fully ready in less than 7 days.",
    gradient: "from-blue-500 to-cyan-500",
    stats: [
      { value: "1000+", label: "Colleges" },
      { value: "1M+", label: "Students" },
      { value: "7 Days", label: "Setup" }
    ],
    tags: [
      { 
        name: "Course Builder", 
        description: "All Features in a creative card when hovered with creative screenshot of the features - Course Builder, Student Dashboard, Community, Job Board, AI Generated Placement Report, Automated Report, Live Classes, Bulk Email Communication",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop&crop=center",
        color: "bg-blue-100 text-blue-700 border-blue-200"
      },
      { 
        name: "Student Dashboard", 
        description: "Comprehensive student dashboard with AI-powered personalized learning paths and progress tracking",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
        color: "bg-cyan-100 text-cyan-700 border-cyan-200"
      },
      { 
        name: "Community & Job Board", 
        description: "Interactive community platform with integrated job board and placement opportunities",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&crop=center",
        color: "bg-indigo-100 text-indigo-700 border-indigo-200"
      },
      { 
        name: "AI Reports & Live Classes", 
        description: "AI Generated Placement Reports, Automated Reporting, Live Classes, and Bulk Email Communication",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
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
      longDescription: "100% custom branding with your institution's name, logo, and colors. Data privacy & security ensured with ISO-grade encryption. Scalable to support 10–100,000+ students without performance issues. Our comprehensive white-labeled AI application provides a complete digital ecosystem that seamlessly integrates with your existing infrastructure.",
      features: [
        "Zero Setup Cost – fully ready in less than 7 days",
        "100% custom branding with your institution's identity",
        "Data privacy & security with ISO-grade encryption",
        "Scalable to support 10–100,000+ students",
        "Course Builder with AI-powered content creation",
        "Comprehensive Student Dashboard with analytics",
        "Interactive Community and Job Board integration",
        "AI Generated Placement Reports and analytics",
        "Live Classes with automated scheduling",
        "Bulk Email Communication system"
      ],
      cta: "Join 1000+ colleges already transforming education with our AI-powered platform."
    }
  },
  {
    id: "ai-skill-development",
    icon: "🎓",
    title: "AI Skill Development",
    description: "200+ Hours of free foundational AI courses. Premium certifications from Microsoft, AWS, Google. Integrated into university curriculum as credit-based electives.",
    gradient: "from-purple-500 to-pink-500",
    stats: [
      { value: "200+", label: "Hours Free" },
      { value: "90%", label: "Engagement" },
      { value: "CPD", label: "Points" }
    ],
    tags: [
      { 
        name: "Certified by Microsoft, Google & AWS", 
        description: "Premium certifications from Microsoft, AWS, Google with industry recognition and career advancement opportunities",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&crop=center",
        color: "bg-purple-100 text-purple-700 border-purple-200"
      },
      { 
        name: "Curriculum-Ready Content", 
        description: "Integrated into university curriculum as credit-based electives with comprehensive learning paths",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center",
        color: "bg-pink-100 text-pink-700 border-pink-200"
      },
      { 
        name: "Faculty & Student Tracks", 
        description: "Dedicated tracks for both faculty training workshops & student skill development with CPD points",
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop&crop=center",
        color: "bg-rose-100 text-rose-700 border-rose-200"
      },
      { 
        name: "90% Engagement Rate", 
        description: "Proven 90% student engagement rate across partnered institutions with interactive learning modules",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center",
        color: "bg-violet-100 text-violet-700 border-violet-200"
      }
    ],
    trustedBy: [
      { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png" },
      { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }
    ],
    modalContent: {
      longDescription: "200+ Hours of free foundational AI courses with premium certifications from Microsoft, AWS, Google. Faculty get access to exclusive training workshops & CPD points. Our comprehensive curriculum is designed to bridge the gap between academic theory and industry applications, ensuring both students and faculty are equipped with cutting-edge AI skills.",
      features: [
        "200+ Hours of free foundational AI courses",
        "Premium certifications from Microsoft, AWS, Google",
        "Integrated into university curriculum as credit-based electives",
        "90% student engagement rate across partnered institutions",
        "Faculty access to exclusive training workshops",
        "CPD points for professional development",
        "Industry-aligned curriculum with real-world projects",
        "Live mentorship sessions with AI professionals",
        "Career placement assistance and interview preparation",
        "Continuous curriculum updates based on industry trends"
      ],
      cta: "Prepare your students and faculty for the AI-driven future with industry-certified skills."
    }
  },
  {
    id: "institutional-transformation",
    icon: "🏢",
    title: "Institutional Transformation",
    description: "Improved NAAC score by up to 0.6 in partner universities. 35% average growth in student placements within a year. Government-recognized (Startup India) partner.",
    gradient: "from-green-500 to-teal-500",
    stats: [
      { value: "+0.6", label: "NAAC Score" },
      { value: "35%", label: "Placement ↗" },
      { value: "1000+", label: "Faculty" }
    ],
    tags: [
      { 
        name: "Campus Digitalization", 
        description: "Complete digital transformation flow: Campus Digitalization → Accreditation Boost → Placement Success",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop&crop=center",
        color: "bg-green-100 text-green-700 border-green-200"
      },
      { 
        name: "Accreditation Boost", 
        description: "Expert NAAC support with improved scores up to 0.6 points and digitized 100% faculty training records",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
        color: "bg-teal-100 text-teal-700 border-teal-200"
      },
      { 
        name: "Placement Success", 
        description: "35% average growth in student placements with digitized placement reports and upskilling programs",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop&crop=center",
        color: "bg-emerald-100 text-emerald-700 border-emerald-200"
      },
      { 
        name: "Government Recognition", 
        description: "Government-recognized (Startup India) with official partnerships with global tech giants",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center",
        color: "bg-lime-100 text-lime-700 border-lime-200"
      }
    ],
    trustedBy: [
      { name: "UGC", logo: "https://www.ugc.ac.in/oldpdf/alluniversity/ugc_logo.jpg" },
      { name: "AICTE", logo: "https://www.aicte-india.org/sites/default/files/AICTE%20Official%20Logo.png" },
      { name: "NAAC", logo: "https://www.naac.gov.in/images/naac-logo.png" },
      { name: "NIRF", logo: "https://www.nirfindia.org/nirflogo.png" },
      { name: "Startup India", logo: "https://www.startupindia.gov.in/content/sih/en/reources/startup-india-logo.png" },
      { name: "Times Higher Ed", logo: "https://www.timeshighereducation.com/themes/custom/times/images/the-logo-white.png" }
    ],
    modalContent: {
      longDescription: "Improved NAAC score by up to 0.6 in partner universities. 35% average growth in student placements within a year. Digitized 100% of faculty training records & placement reports. Supported 1,000+ faculty members with upskilling programs. Government-recognized (Startup India) + official partner with global tech giants.",
      features: [
        "Improved NAAC score by up to 0.6 points",
        "35% average growth in student placements within a year",
        "Digitized 100% of faculty training records & placement reports",
        "Supported 1,000+ faculty members with upskilling programs",
        "Government-recognized (Startup India) status",
        "Official partnerships with global tech giants",
        "Complete campus digitalization infrastructure",
        "Brand identity development and market positioning",
        "Quality assurance and continuous improvement frameworks",
        "Academic process optimization and automation"
      ],
      cta: "Transform your institution with proven results: better NAAC scores, higher placements, and complete digitalization."
    }
  }
];