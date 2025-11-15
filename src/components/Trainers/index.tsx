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
    experience: "",
    photo: "/team/sandeep_volam.jpg",
    companies: [],
    specialization: "",
    studentsmentored: null,
    rating: null,
    location: "",
    linkedin: "https://www.linkedin.com/in/sandeep-volam-6237893?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    achievements: "",
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

  const coreMembers = useMemo(
    () => localizedTrainers.filter((trainer) => (trainer.companies?.length ?? 0) > 0),
    [localizedTrainers]
  );

  const promoterMembers = useMemo(
    () => localizedTrainers.filter((trainer) => (trainer.companies?.length ?? 0) === 0),
    [localizedTrainers]
  );

  const highlightedLeaderOrder = useMemo(() => [20, 18, 16, 17, 19], []);
  const highlightedLeaderIds = useMemo(() => new Set(highlightedLeaderOrder), [highlightedLeaderOrder]);
  const highlightedLeaders = useMemo(
    () =>
      highlightedLeaderOrder.flatMap((id) => {
        const member = promoterMembers.find((promoter) => promoter.id === id);
        return member ? [member] : [];
      }),
    [promoterMembers, highlightedLeaderOrder]
  );
  const otherPromoters = useMemo(
    () => promoterMembers.filter((member) => !highlightedLeaderIds.has(member.id)),
    [promoterMembers, highlightedLeaderIds]
  );
  const totalPromoters = promoterMembers.length;

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
            <div className="text-center space-y-3">
              <p className="inline-flex items-center rounded-full border border-blue-200/40 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-blue-600">
                {t("Core Team")}
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                {t("Hands-on leaders mentoring every cohort")}
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                {t("Industry practitioners from Microsoft, Google, and Amazon who design and deliver our flagship experiences.")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {coreMembers.map((member, index) => (
                <motion.article
                  key={member.id}
                  className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl backdrop-blur-sm transition hover:-translate-y-1"
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
                      {member.companies[0] && (
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

                  <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.28em] text-gray-400">
                    {member.rating && member.studentsmentored ? (
                      <span>
                        ⭐ {member.rating} • {member.studentsmentored}+ {t("mentees")}
                      </span>
                    ) : (
                      <span>{t("Core mentor")}</span>
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

            {highlightedLeaders.length > 0 && (
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <p className="inline-flex items-center rounded-full border border-fuchsia-200/60 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-700">
                    {t("Strategic Council")}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    {t("Promoters & senior advisors steering AI Linc globally")}
                  </h2>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <div className="flex flex-wrap justify-center gap-6">
                    {highlightedLeaders.slice(0, 3).map((leader, index) => (
                      <motion.article
                        key={leader.id}
                        className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[30px] border border-fuchsia-200/60 bg-white/80 p-6 shadow-[0_20px_45px_rgba(79,70,229,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_35px_60px_rgba(79,70,229,0.18)]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.12 + index * 0.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
                        <div className="relative flex items-start gap-4">
                          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5 shadow-lg ring-4 ring-white/60">
                            <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                              {leader.photo ? (
                                <Image
                                  src={leader.photo}
                                  alt={leader.name}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 text-base font-semibold text-white">
                                  {getInitials(leader.name)}
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
                            {leader.title && (
                              <p className="text-sm font-medium text-fuchsia-700">{leader.title}</p>
                            )}
                            {leader.location && (
                              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{leader.location}</p>
                            )}
                          </div>
                        </div>

                        <p className="relative mt-4 text-sm text-gray-600">
                          {t("Guides international outreach, enterprise partnerships, and executive relationships.")}
                        </p>

                        <div className="relative mt-4 flex flex-wrap gap-2">
                          {leader.title?.toLowerCase().includes("cmo") && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
                              ✦ {t("CMO International")}
                            </span>
                          )}
                          {leader.location && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                              🌐 {leader.location}
                            </span>
                          )}
                        </div>

                        <div className="relative mt-6 flex justify-between items-center border-t border-fuchsia-100/60 pt-4">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-400">
                            {t("Strategic Lead")}
                          </span>
                          <a
                            href={leader.linkedin}
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
                  <div className="flex flex-wrap justify-center gap-6">
                    {highlightedLeaders.slice(3).map((leader, index) => (
                      <motion.article
                        key={leader.id}
                        className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[30px] border border-fuchsia-200/60 bg-white/80 p-6 shadow-[0_20px_45px_rgba(79,70,229,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_35px_60px_rgba(79,70,229,0.18)]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.22 + index * 0.05 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
                        <div className="relative flex items-start gap-4">
                          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5 shadow-lg ring-4 ring-white/60">
                            <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                              {leader.photo ? (
                                <Image
                                  src={leader.photo}
                                  alt={leader.name}
                                  width={64}
                                  height={64}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 text-base font-semibold text-white">
                                  {getInitials(leader.name)}
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
                            {leader.title && (
                              <p className="text-sm font-medium text-fuchsia-700">{leader.title}</p>
                            )}
                            {leader.location && (
                              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{leader.location}</p>
                            )}
                          </div>
                        </div>

                        <p className="relative mt-4 text-sm text-gray-600">
                          {t("Guides international outreach, enterprise partnerships, and executive relationships.")}
                        </p>

                        <div className="relative mt-4 flex flex-wrap gap-2">
                          {leader.title?.toLowerCase().includes("cmo") && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-semibold text-fuchsia-700">
                              ✦ {t("CMO International")}
                            </span>
                          )}
                          {leader.location && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                              🌐 {leader.location}
                            </span>
                          )}
                        </div>

                        <div className="relative mt-6 flex justify-between items-center border-t border-fuchsia-100/60 pt-4">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-400">
                            {t("Strategic Lead")}
                          </span>
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 px-3 py-1.5 text-xs font-semibold text-indigo-600 hover:bg-indigo-50"
                          >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455व6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564व11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729व20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            {t("LinkedIn")}
                          </a>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="text-center space-y-3">
              <p className="inline-flex items-center rounded-full border border-purple-200/40 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-purple-600">
                {t("Meet Our Team Members")}
              </p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                {t("Strategists & champions behind AI Linc")}
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {otherPromoters.map((promoter, index) => (
                <motion.article
                  key={promoter.id}
                  className="w-full max-w-sm rounded-3xl border border-gray-100 bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/40 p-5 shadow-md hover:shadow-xl transition"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + index * 0.05 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-0.5">
                      <div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                        {promoter.photo ? (
                          <Image
                            src={promoter.photo}
                            alt={promoter.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-400 text-base font-semibold text-white">
                            {getInitials(promoter.name)}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{promoter.name}</h3>
                      {promoter.location && (
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{promoter.location}</p>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-600">
                    {t("Drives strategic alliances, talent networks, and program excellence worldwide.")}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={promoter.linkedin}
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

            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <p className="text-sm text-gray-600 mb-2">
                <strong>{t("Combined Experience:")}</strong> {t("40+ years at top tech companies")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>{t("Students Mentored:")}</strong> {t("8,000+ professionals trained")} •{" "}
                <strong>{t("Promoters:")}</strong> {totalPromoters} {t("leaders across USA, Canada, UK, UAE, India")}
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
