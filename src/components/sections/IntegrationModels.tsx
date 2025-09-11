import { useState } from "react";

// Helper to map Tailwind color names to hex values
function getTailwindColor(color: string): string {
  switch (color) {
    case "blue-500":
      return "#3b82f6";
    case "indigo-500":
      return "#6366f1";
    case "purple-500":
      return "#a21caf";
    default:
      return color;
  }
}

const IntegrationModels = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const models = [
    {
      id: 1,
      title: "White-Labeled Platform",
      subtitle: "Complete Platform Licensing",
      description:
        "Clients can license AI Linc's platform as their own white-labeled solution.",
      features: [
        "Unlimited students and admin accounts",
        "Access to all platform features (self-paced content, assessments, reporting, AI-enabled learning, gamified progress, etc.)",
        "Custom branding flexibility",
        "Unlimited course management",
      ],
      cost: "₹25,000 per year (flat fee)",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      accentColor: "blue-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-100",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Mandatory Integration",
      subtitle: "Curriculum Core Subject",
      description:
        "One subject powered by AI Linc is integrated into each semester (2–3 credits per semester).",
      features: [
        "Courses embedded as part of official syllabus",
        "Blended delivery: 75% online, 25% offline",
        "Faculty course upload capability",
        "Complete progress tracking system",
        "Amazon, Microsoft, Google Certificates",
      ],
      cost: "₹500 – ₹1,000 per student per semester",
      gradient: "from-indigo-600 via-blue-600 to-cyan-600",
      accentColor: "indigo-500",
      bgPattern: "bg-gradient-to-br from-indigo-50 to-blue-100",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Elective Integration",
      subtitle: "Flexible Choice Approach",
      description:
        "Flexible elective approach providing students the freedom to opt into AI focused learning based on their interests and career goals.",
      features: [
        "AI Linc courses as semester electives",
        "Hybrid delivery: 75% online, 25% offline",
        "Student choice and flexibility",
        "Amazon, Microsoft, Google Certificates",
      ],
      cost: "₹2,000 – ₹3,500 per student",
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      accentColor: "purple-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-100",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-40 left-16 w-3 h-3 bg-indigo-500 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-purple-400 rounded-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
              Integration Models
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Three Strategic Models for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AI Education Integration
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect integration model that fits your institution's
            needs and budget. Each model is designed to seamlessly blend with
            your existing educational framework.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Models Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <div
              key={model.id}
              onMouseEnter={() => setHoveredCard(model.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 ${
                index === 1 ? "lg:scale-105 lg:-translate-y-2" : ""
              } ${
                hoveredCard === model.id
                  ? "z-50 scale-110"
                  : hoveredCard !== null
                  ? "z-10 scale-95 opacity-70"
                  : "z-20"
              }`}
              style={{
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Background Pattern */}
              <div
                className={`absolute inset-0 ${model.bgPattern} opacity-40`}
              ></div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
              <div
                className={`absolute bottom-0 left-0 w-24 h-24 bg-${model.accentColor}/10 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Model Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">
                    MODEL {model.id}
                  </span>
                  {index === 1 && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full animate-pulse">
                      POPULAR
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${model.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  {model.icon}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {model.title}
                </h3>
                <p
                  className={`text-sm font-semibold text-${model.accentColor} mb-4 uppercase tracking-wide`}
                >
                  {model.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {model.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start group/item"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mr-3 mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"
                        style={{
                          backgroundColor: getTailwindColor(model.accentColor),
                        }}
                      ></div>
                      <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Cost */}
                <div
                  className={`border-t-2 border-${model.accentColor}/20 pt-6`}
                >
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-2 uppercase tracking-wide font-medium">
                      Starting from
                    </p>
                    <p
                      className={`text-2xl font-bold bg-gradient-to-r ${model.gradient} bg-clip-text text-transparent`}
                    >
                      {model.cost}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <button
                    className={`w-full py-3 bg-gradient-to-r ${model.gradient} hover:shadow-lg text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 group-hover:shadow-2xl`}
                  >
                    Choose This Model
                  </button>
                </div>

                {/* Hover indicator */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${model.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 border border-gray-200 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Institution?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                Choose the model that best fits your needs or let us help you
                decide with a personalized consultation. Our experts will guide
                you through the integration process step by step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationModels;
