// components/TopTrainersHero.tsx
import { useMemo, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { MicrosoftLogo } from "../../../public/icons/MicrosoftLogo";
import { GoogleLogo } from "../../../public/icons/GoogleLogo";
import { AmazonLogo } from "../../../public/icons/AmazonLogo";
import { useTranslation } from "@/context/LanguageContext";

const getInitials = (fullName: string) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

// Trainers data array
const trainersData = [
  {
    id: 1,
    name: "Shubham Lal",
    title: "SDE-2 & Founder",
    experience: "8 years",
    photo: "/trainers/shubham_lal.jpg",
    companies: [{ name: "Microsoft", Logo: MicrosoftLogo }],
    specialization: "AI Product Developer",
    studentsmentored: 1200,
    rating: 4.9,
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/shubhamlal/",
    achievements: "Built AI products used by 10M+ users at Microsoft",
  },
  {
    id: 2,
    name: "Yamini Bandi",
    title: "SDE-2 & ML Engineer",
    experience: "5 years",
    photo: "/trainers/yamini_bandi.jpg",
    companies: [{ name: "Amazon", Logo: AmazonLogo }],
    specialization: "ML Engineer",
    studentsmentored: 980,
    rating: 4.8,
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/yaminibandi/",
    achievements: "Developed ML models handling 1B+ daily predictions at Amazon",
  },
  {
    id: 3,
    name: "Divyansh Dubey",
    title: "Gen AI Expert",
    experience: "7 years",
    photo: "/trainers/Divyansh_dubey.jpg",
    companies: [{ name: "Google", Logo: GoogleLogo }],
    specialization: "Prompt & GenAI Expert",
    studentsmentored: 850,
    rating: 4.7,
    linkedin: "https://www.linkedin.com/in/divyansh-dubey/",
    location: "Bengaluru, India",
    achievements: "Created viral GenAI applications with 5M+ users at Google",
  },
  {
    id: 4,
    name: "Abirami Sukumari",
    title: "Staff Developer Advocate",
    experience: "20 years",
    photo: "/trainers/Abirami_sukumari.jpg",
    companies: [{ name: "Google", Logo: GoogleLogo }],
    specialization: "Cloud AI and Databases",
    studentsmentored: 5000,
    rating: 4.9,
    linkedin: "https://www.linkedin.com/in/abiramisukumaran/",
    location: "Bengaluru, India",
    achievements: "22 years of experience with Fortune 500 companies",
  },
  {
    id: 5,
    name: "Raghav Nakra",
    title: "",
    experience: "",
    photo: "/team/raghav_nakra.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/raghav-nakra/",
    achievements: "",
  },
  {
    id: 6,
    name: "Mahesh Yerra",
    title: "",
    experience: "",
    photo: "/team/mahesh_yerra.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/mahesh1133/",
    achievements: "",
  },
  {
    id: 7,
    name: "Shivam Jindal",
    title: "",
    experience: "",
    photo: "/team/shivam_jindal.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/shivam-jindal/",
    achievements: "",
  },
  {
    id: 8,
    name: "Ananth Kumar Vasamsetti",
    title: "",
    experience: "",
    photo: "/team/ananth_kumar.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/ananth-kumar-vasamsetti-60bb7392/",
    achievements: "",
  },
  {
    id: 9,
    name: "Rahul Mohan",
    title: "",
    experience: "",
    photo: "/team/rahul_mohan.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/rahul-mohan-4a6610a8/",
    achievements: "",
  },
  {
    id: 10,
    name: "Sourov Roy",
    title: "",
    experience: "",
    photo: "/team/sourov_roy.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/sourovroy-ai/",
    achievements: "",
  },
  {
    id: 11,
    name: "Shreyansh Sinha",
    title: "",
    experience: "",
    photo: "/team/shreyansh_sinha.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/shreyansh-sinha-2b47a2188/",
    achievements: "",
  },
  {
    id: 12,
    name: "Vivek Ananth",
    title: "",
    experience: "",
    photo: "/team/vivek_ananth.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/avivek5692/",
    achievements: "",
  },
  {
    id: 13,
    name: "Shahar Banu",
    title: "",
    experience: "",
    photo: "/team/shahar_banu.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/shaharbanu/",
    achievements: "",
  },
  {
    id: 14,
    name: "Ajeya B Jois",
    title: "",
    experience: "",
    photo: "/team/ajeya_b_jois.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/ajeyabjois/",
    achievements: "",
  },
  {
    id: 15,
    name: "Yash Mittal",
    title: "",
    experience: "",
    photo: "/team/yash_mittal.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/yashmittal00/",
    achievements: "",
  },
  {
    id: 20,
    name: "Sandeep Volam",
    title: "Chairman and Managing Director",
    experience: "Experienced Director associated with 11 companies spanning 14 years (2009–2023).",
    photo: "/team/sandeep_volam.jpg",
    companies: [],
    specialization: "Diverse experience across Bio-Research, Cleantech, and Integrated Solutions.",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/sandeep-volam-6237893?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    achievements: "Currently a Director in four companies, including ARUDRA ECO VALLEY PRIVATE LIMITED and LEO HOMESTEAD PRIVATE LIMITED.",
  },
  {
    id: 16,
    name: "Gaddam Mallesham",
    title: "",
    experience: "",
    photo: "/team/gaddam_mallesham.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/gaddam-mallesham-ba760117a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    achievements: "",
  },
  {
    id: 17,
    name: "Dr. Srinivas Kaveti",
    title: "",
    experience: "",
    photo: "/team/srinivas_kaveti.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/dr-srinivas-kaveti?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    achievements: "",
  },
  {
    id: 18,
    name: "Nomaan Abdul Majeed",
    title: "CMO International",
    experience: "",
    photo: "/team/nomaan_abdul_majeed.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/nomaan-abdul-majeed-7051645?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    achievements: "",
  },
  {
    id: 19,
    name: "Ganesh Rayala",
    title: "",
    experience: "",
    photo: "/team/ganesh_rayala.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/ganesh-rayala-4ab96a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    achievements: "",
  },
];

const TopTrainersHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const t = useTranslation();

  const localizedTrainers = useMemo(() => {
    return trainersData.map((trainer) => ({
      ...trainer,
      title: trainer.title ? t(trainer.title) : "",
      experience: trainer.experience ? t(trainer.experience) : "",
      specialization: trainer.specialization ? t(trainer.specialization) : "",
      achievements: trainer.achievements ? t(trainer.achievements) : "",
      location: trainer.location ? t(trainer.location) : "",
    }));
  }, [t]);

  // Leaders and promoters steering AI Linc globally (2 members)
  const leadersAndPromoters = useMemo(
    () => {
      const leaderIds = [20, 1]; // Sandeep Volam, Shubham Lal
      return leaderIds
        .map((id) => localizedTrainers.find((trainer) => trainer.id === id))
        .filter((trainer): trainer is typeof localizedTrainers[0] => trainer !== undefined);
    },
    [localizedTrainers]
  );

  // Senior advisors (4 members)
  const seniorAdvisors = useMemo(
    () => {
      const advisorIds = [18, 16, 17, 19]; // Nomaan, Gaddam, Dr. Srinivas, Ganesh
      return advisorIds
        .map((id) => localizedTrainers.find((trainer) => trainer.id === id))
        .filter((trainer): trainer is typeof localizedTrainers[0] => trainer !== undefined);
    },
    [localizedTrainers]
  );

  // Core members (3 members)
  const coreMembers = useMemo(
    () => {
      const coreIds = [2, 3, 4]; // Yamini, Divyansh, Abirami
      return coreIds
        .map((id) => localizedTrainers.find((trainer) => trainer.id === id))
        .filter((trainer): trainer is typeof localizedTrainers[0] => trainer !== undefined);
    },
    [localizedTrainers]
  );

  // Remaining team members (11 members)
  const teamMembers = useMemo(
    () => {
      const excludedIds = new Set([20, 1, 18, 16, 17, 19, 2, 3, 4]); // All IDs from above sections
      return localizedTrainers.filter((trainer) => !excludedIds.has(trainer.id));
    },
    [localizedTrainers]
  );

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Helper function to render company logo
  const renderCompanyLogo = (
    company: {
      name: string;
      Logo?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    },
    size: string = "w-5 h-5"
  ) => {
    if (company.Logo) {
      const LogoComponent = company.Logo;
      return <LogoComponent className={size} />;
    }
    return null;
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden"
      ref={sectionRef}
      id="trainers"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Hero Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-full mb-6 border border-blue-200/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex items-center justify-center shadow-md">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
                {t("MEET OUR TEAM & PROMOTERS")}
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              {t("The people shaping")}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {t("AI Linc")}
              </span>
              <br />
              {t("across learning, partnerships, and community")}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t(
                "Meet the leaders, instructors, and promoters who bring MAANG experience, program excellence, and global partnerships to every learner journey."
              )}
            </motion.p>

            {/* Company Logos */}
            <motion.div
              className="flex justify-center items-center space-x-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="text-base font-semibold text-gray-500">
                {t("Our trainers work at:")}
              </span>
              <div className="flex items-center space-x-4">
                {[MicrosoftLogo, GoogleLogo, AmazonLogo].map((Logo, index) => (
                  <motion.div
                    key={index}
                    className="w-10 h-10 bg-white rounded-full p-2 shadow-md border border-gray-100"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Logo className="w-full h-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Unified Features & Value Proposition */}
          <motion.div
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white/20"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                {t("Why Choose Our")}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("Elite Training Team")}
                </span>
              </h2>
            </div>

            {/* Combined Features in Paragraphs */}
            <div className="max-w-5xl mx-auto space-y-6 text-center">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {t("Global MAANG Expertise")}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-left md:text-left leading-relaxed">
                    {t(
                      "Our trainers are certified professionals from leading tech giants like Microsoft, Google, Amazon, and Oracle with 8-15 years of Fortune 500 experience. 90% hold multiple international certifications (AWS, Azure, Salesforce, AI/ML)."
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {t("Personalized & Global")}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-left md:text-left leading-relaxed">
                    {t(
                      "Experience hands-on guidance, real-time doubt solving, and career mentoring from tutors across India, US, UK, and Middle East. Our placement-oriented approach ensures content directly matches industry job requirements."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team & Promoters Showcase */}
          <motion.div variants={itemVariants} className="space-y-12" id="promoters">
            {/* Leaders and promoters steering AI Linc globally */}
            {leadersAndPromoters.length > 0 && (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <p className="inline-flex items-center rounded-full border-2 border-fuchsia-300/60 bg-gradient-to-r from-fuchsia-50/80 to-indigo-50/80 px-6 py-2 text-xs font-bold uppercase tracking-[0.4em] text-fuchsia-700 shadow-lg">
                    {t("Leaders and promoters steering AI Linc globally")}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                    {t("Visionary Leadership")}
                  </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {leadersAndPromoters.map((leader, index) => (
                    <motion.article
                      key={leader.id}
                      className="group relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border-2 border-fuchsia-300/60 bg-gradient-to-br from-white via-fuchsia-50/30 to-indigo-50/30 p-8 shadow-[0_25px_60px_rgba(139,92,246,0.25)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ delay: 0.15 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                    >
                      {/* Decorative corner elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fuchsia-200/20 to-transparent rounded-bl-full opacity-50" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-tr-full opacity-50" />
                      
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)] bg-[length:40px_40px]" />
                      
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-indigo-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      
                      {/* Glowing border effect with multiple layers */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 rounded-[32px] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-400/20 via-purple-400/20 to-indigo-400/20 rounded-[32px] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-50" />
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="relative">
                            {/* Enhanced glow with multiple layers */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-400/40 to-indigo-400/40 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <motion.div 
                              className="relative h-24 w-24 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 p-1 shadow-2xl ring-4 ring-white/80"
                              whileHover={{ scale: 1.05, rotate: 2 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                              <div className="h-full w-full rounded-3xl overflow-hidden bg-slate-100 relative">
                                {leader.photo ? (
                                  <>
                                    <Image
                                      src={leader.photo}
                                      alt={leader.name}
                                      width={96}
                                      height={96}
                                      className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </>
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-fuchsia-400 to-indigo-400 text-xl font-bold text-white">
                                    {getInitials(leader.name)}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                            
                            {/* Enhanced Crown badge with animation */}
                            <motion.div 
                              className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-1.5 shadow-lg ring-2 ring-white/50"
                              whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <svg className="w-5 h-5 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {/* Sparkle effect */}
                              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-75" />
                            </motion.div>
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-indigo-600 transition-all duration-300">
                              {leader.name}
                            </h3>
                            {leader.title && (
                              <div className="relative inline-block">
                                <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600 mb-1 relative z-10">
                                  {leader.title}
                                </p>
                                <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-fuchsia-400/50 to-indigo-400/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                              </div>
                            )}
                            {leader.experience && (
                              <p className="text-sm font-semibold text-gray-600 mb-2 leading-relaxed">{leader.experience}</p>
                            )}
                            {leader.location && (
                              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 flex items-center gap-1.5 mt-2 group-hover:text-fuchsia-600 transition-colors duration-300">
                                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                {leader.location}
                              </p>
                            )}
                          </div>
                        </div>

                        {leader.companies && leader.companies.length > 0 && (
                          <div className="relative mb-6 flex flex-wrap gap-2">
                            {leader.companies.map((company) => (
                              <motion.span
                                key={company.name}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 px-4 py-2 text-xs font-bold text-indigo-700 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:from-indigo-200 hover:to-purple-200"
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                              >
                                {renderCompanyLogo(company, "w-5 h-5")}
                                {company.name}
                              </motion.span>
                            ))}
                          </div>
                        )}

                        {leader.experience && (
                          <motion.div 
                            className="relative mb-4 p-4 rounded-xl bg-gradient-to-r from-fuchsia-50/50 to-indigo-50/50 border border-fuchsia-100/50 group-hover:border-fuchsia-200/70 group-hover:shadow-md transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <p className="text-sm font-semibold text-gray-800 leading-relaxed flex-1">
                                {leader.experience}
                              </p>
                            </div>
                          </motion.div>
                        )}

                        {leader.specialization && (
                          <div className="relative mb-4">
                            <p className="text-sm font-medium text-gray-700 leading-relaxed mb-3 group-hover:text-gray-800 transition-colors">
                              {leader.specialization}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {leader.specialization.includes("Bio-Research") && (
                                <motion.span 
                                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 px-3.5 py-1.5 text-xs font-semibold text-green-700 shadow-sm hover:shadow-md transition-all duration-300"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                  </svg>
                                  Bio-Research
                                </motion.span>
                              )}
                              {leader.specialization.includes("Cleantech") && (
                                <motion.span 
                                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm hover:shadow-md transition-all duration-300"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                  </svg>
                                  Cleantech
                                </motion.span>
                              )}
                              {leader.specialization.includes("Integrated Solutions") && (
                                <motion.span 
                                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 px-3.5 py-1.5 text-xs font-semibold text-purple-700 shadow-sm hover:shadow-md transition-all duration-300"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  Integrated Solutions
                                </motion.span>
                              )}
                            </div>
                          </div>
                        )}

                        {leader.achievements && (
                          <motion.div 
                            className="relative mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-50/50 to-yellow-50/50 border border-amber-100/50 group-hover:border-amber-200/70 group-hover:shadow-md transition-all duration-300 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <svg className="w-4 h-4 text-amber-600 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-xs font-medium text-gray-700 leading-relaxed flex-1">
                                <span className="font-bold text-amber-700">Current Role:</span> {leader.achievements}
                              </p>
                            </div>
                          </motion.div>
                        )}

                        <div className="relative flex justify-between items-center border-t-2 border-fuchsia-200/60 pt-5 mt-2">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="text-xs font-bold uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600 group-hover:from-fuchsia-500 group-hover:to-indigo-500 transition-all duration-300">
                              {t("Strategic Lead")}
                            </span>
                          </div>
                          <motion.a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:shadow-xl transition-all relative overflow-hidden group/btn"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                            <svg className="h-4 w-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <span className="relative z-10">{t("LinkedIn")}</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            {/* Senior advisors */}
            {seniorAdvisors.length > 0 && (
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <p className="inline-flex items-center rounded-full border border-fuchsia-200/60 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-700">
                    {t("Senior advisors")}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
                    {seniorAdvisors.slice(0, 2).map((advisor, index) => (
                      <motion.article
                        key={advisor.id}
                        className="relative mx-auto w-full overflow-hidden rounded-[30px] border border-fuchsia-200/60 bg-white/80 p-6 shadow-[0_20px_45px_rgba(79,70,229,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_35px_60px_rgba(79,70,229,0.18)]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.12 + index * 0.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
                        <div className="relative flex items-start gap-4">
                          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5 shadow-lg ring-4 ring-white/60">
                            <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                              {advisor.photo ? (
                                <Image
                                  src={advisor.photo}
                                  alt={advisor.name}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 text-base font-semibold text-white">
                                  {getInitials(advisor.name)}
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{advisor.name}</h3>
                            {advisor.title && (
                              <p className="text-sm font-medium text-fuchsia-700">{advisor.title}</p>
                            )}
                            {advisor.location && (
                              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{advisor.location}</p>
                            )}
                          </div>
                        </div>

                        <p className="relative mt-4 text-sm text-gray-600">
                          {t("Guides international outreach, enterprise partnerships, and executive relationships.")}
                        </p>

                        <div className="relative mt-4 flex flex-wrap gap-2">
                          {advisor.title?.toLowerCase().includes("cmo") && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
                              ✦ {t("CMO International")}
                            </span>
                          )}
                          {advisor.location && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                              🌐 {advisor.location}
                            </span>
                          )}
                        </div>

                        <div className="relative mt-6 flex justify-between items-center border-t border-fuchsia-100/60 pt-4">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-400">
                            {t("Strategic Lead")}
                          </span>
                          <a
                            href={advisor.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            {t("LinkedIn")}
                          </a>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                  {seniorAdvisors.length > 2 && (
                    <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2">
                      {seniorAdvisors.slice(2).map((advisor, index) => (
                        <motion.article
                          key={advisor.id}
                          className="relative mx-auto w-full overflow-hidden rounded-[30px] border border-fuchsia-200/60 bg-white/80 p-6 shadow-[0_20px_45px_rgba(79,70,229,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_35px_60px_rgba(79,70,229,0.18)]"
                          initial={{ opacity: 0, y: 30 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.22 + index * 0.05 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
                          <div className="relative flex items-start gap-4">
                            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5 shadow-lg ring-4 ring-white/60">
                              <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                                {advisor.photo ? (
                                  <Image
                                    src={advisor.photo}
                                    alt={advisor.name}
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 text-base font-semibold text-white">
                                    {getInitials(advisor.name)}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{advisor.name}</h3>
                              {advisor.title && (
                                <p className="text-sm font-medium text-fuchsia-700">{advisor.title}</p>
                              )}
                              {advisor.location && (
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{advisor.location}</p>
                              )}
                            </div>
                          </div>

                          <p className="relative mt-4 text-sm text-gray-600">
                            {t("Guides international outreach, enterprise partnerships, and executive relationships.")}
                          </p>

                          <div className="relative mt-4 flex flex-wrap gap-2">
                            {advisor.title?.toLowerCase().includes("cmo") && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
                                ✦ {t("CMO International")}
                              </span>
                            )}
                            {advisor.location && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                                🌐 {advisor.location}
                              </span>
                            )}
                          </div>

                          <div className="relative mt-6 flex justify-between items-center border-t border-fuchsia-100/60 pt-4">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-400">
                              {t("Strategic Lead")}
                </span>
                            <a
                              href={advisor.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-indigo-100 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
                            >
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                              {t("LinkedIn")}
                            </a>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Meet our core members */}
            {(coreMembers.length > 0 || teamMembers.length > 0) && (() => {
              const allMembers = [...coreMembers, ...teamMembers];
              const totalCards = allMembers.length;
              const hasLastTwo = totalCards % 3 === 2;
              const lastTwoStartIndex = totalCards - 2;
              
              return (
                <div className="space-y-8">
                  <div className="text-center space-y-3">
                    <p className="inline-flex items-center rounded-full border border-blue-200/40 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">
                      {t("Meet our core members")}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                      {t("Hands-on leaders mentoring every cohort")}
              </h2>
                    <p className="text-base text-gray-600 max-w-3xl mx-auto">
                      {t("Industry practitioners from Microsoft, Google, and Amazon who design and deliver our flagship experiences.")}
              </p>
            </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {allMembers.slice(0, hasLastTwo ? lastTwoStartIndex : allMembers.length).map((member, index) => (
                      <motion.article
                        key={member.id}
                        className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.08 }}
                      >
                          <div className="flex items-center gap-4">
                            <div className="relative h-20 w-20">
                              <div className="h-full w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                                <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                                  {member.photo ? (
                        <Image
                                      src={member.photo}
                                      alt={member.name}
                          width={80}
                          height={80}
                                      className="h-full w-full object-cover"
                                    />
                                  ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-lg font-semibold text-white">
                                      {getInitials(member.name)}
                        </div>
                      )}
                    </div>
                  </div>
                              {member.companies && member.companies[0] && (
                                <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-1 shadow-lg">
                                  {renderCompanyLogo(member.companies[0], "w-5 h-5")}
                                </div>
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                              <p className="text-sm font-semibold text-blue-600">
                                {[member.title, member.experience].filter(Boolean).join(" • ")}
                              </p>
                              {member.location && <p className="text-xs text-gray-500">{member.location}</p>}
                    </div>
                  </div>

                          {member.specialization && (
                            <p className="mt-4 text-sm text-gray-700">{member.specialization}</p>
                          )}
                          {member.achievements && (
                            <p className="mt-2 text-xs text-gray-500">{member.achievements}</p>
                          )}

                          {member.companies && member.companies.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {member.companies.map((company) => (
                                <span
                                  key={company.name}
                                  className="inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1 text-xs font-semibold text-indigo-700"
                                >
                                  {renderCompanyLogo(company, "w-4 h-4")}
                                  {company.name}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
                            {member.rating && member.studentsmentored ? (
                              <span>
                                ⭐ {member.rating} • {member.studentsmentored}+ {t("mentees")}
                              </span>
                            ) : (
                              <span>{member.companies && member.companies.length > 0 ? t("Core mentor") : t("Team Member")}</span>
                            )}
                            <a
                              href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1.5 text-white hover:from-blue-700 hover:to-blue-800"
                    title={t("View LinkedIn Profile")}
                  >
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                          </div>
                        </motion.article>
                    ))}
                    {hasLastTwo && (
                      <div className="lg:col-span-3 flex justify-center gap-6">
                        {allMembers.slice(lastTwoStartIndex).map((member, index) => (
                          <motion.article
                            key={member.id}
                            className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl backdrop-blur-sm transition hover:-translate-y-1 w-full max-w-sm"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: (lastTwoStartIndex + index) * 0.08 }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="relative h-20 w-20">
                                <div className="h-full w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
                                  <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                                    {member.photo ? (
                                      <Image
                                        src={member.photo}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                        className="h-full w-full object-cover"
                                      />
                                    ) : (
                                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-lg font-semibold text-white">
                                        {getInitials(member.name)}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {member.companies && member.companies[0] && (
                                  <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-1 shadow-lg">
                                    {renderCompanyLogo(member.companies[0], "w-5 h-5")}
                                  </div>
                                )}
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                <p className="text-sm font-semibold text-blue-600">
                                  {[member.title, member.experience].filter(Boolean).join(" • ")}
                                </p>
                                {member.location && <p className="text-xs text-gray-500">{member.location}</p>}
                              </div>
                            </div>

                            {member.specialization && (
                              <p className="mt-4 text-sm text-gray-700">{member.specialization}</p>
                            )}
                            {member.achievements && (
                              <p className="mt-2 text-xs text-gray-500">{member.achievements}</p>
                            )}

                            {member.companies && member.companies.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {member.companies.map((company) => (
                                  <span
                                    key={company.name}
                                    className="inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50/70 px-3 py-1 text-xs font-semibold text-indigo-700"
                                  >
                                    {renderCompanyLogo(company, "w-4 h-4")}
                                    {company.name}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
                              {member.rating && member.studentsmentored ? (
                                <span>
                                  ⭐ {member.rating} • {member.studentsmentored}+ {t("mentees")}
                                </span>
                              ) : (
                                <span>{member.companies && member.companies.length > 0 ? t("Core mentor") : t("Team Member")}</span>
                              )}
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-1.5 text-white hover:from-blue-700 hover:to-blue-800"
                                title={t("View LinkedIn Profile")}
                              >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                              </a>
                            </div>
                          </motion.article>
              ))}
            </div>
                    )}
                  </div>
                </div>
              );
            })()}

            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <p className="text-sm text-gray-600 mb-2">
                <strong>{t("Combined Experience:")}</strong> {t("40+ years at top tech companies")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>{t("Students Mentored:")}</strong> {t("8,000+ professionals trained")} •{" "}
                <strong>{t("Team Members:")}</strong> {teamMembers.length} {t("strategists and champions")}
              </p>
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-black mb-3">
                  {t("Our Training Impact")}
                </h3>
                <p className="text-base text-blue-100">
                  {t("Results that demonstrate our commitment to excellence")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "100+",
                    label: t("Certified Trainers"),
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                  },
                  {
                    number: "1,000+",
                    label: t("Average Students per Trainer"),
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ),
                  },
                  {
                    number: "95%",
                    label: t("Student Satisfaction Rate"),
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ),
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <motion.div
                      className="text-2xl md:text-3xl font-black mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div
                      className="text-blue-100 font-semibold text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.3 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopTrainersHero;
