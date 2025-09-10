const ProductFeatures = () => {
  const features = [
    {
      icon: "📱",
      title: "White Labelled App",
      description: "AI Powered Digital Learning & Training Platform.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🆓",
      title: "Free AI Courses",
      description:
        "Foundational to advanced AI topics available to every student.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "💎",
      title: "Premium Courses",
      description:
        "Deep specializations with certifications from Google, AWS, and Microsoft.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🎓",
      title: "Credit-Based Integration",
      description:
        "Courses can be made part of university curriculum as electives.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🏆",
      title: "Certification",
      description: "Co-branded with universities + top tech giants.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: "🏢",
      title: "Offline Sessions & Workshops",
      description:
        "AI experts from industry (Microsoft, Amazon, Google) leading sessions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "💼",
      title: "Placement & Training",
      description:
        "Resume building, mock interviews, and placement drives with AI industry partners.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: "✨",
      title: "College Branding Boost",
      description:
        "Improve visibility, NAC accreditation, student intake, and overall brand value.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Features of Ai Linc
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your institution into
            an AI-powered campus
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 hover:border-blue-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div
                className={`mt-4 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to transform your institution with these powerful features?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
