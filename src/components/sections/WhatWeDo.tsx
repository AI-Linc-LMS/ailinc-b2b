const WhatWeDo = () => {
  const services = [
    {
      icon: "📱",
      title: "White-Labeled AI App",
      description:
        "We provide colleges & organisations with a 100% white-labeled AI-powered app, fully customized to their brand.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎓",
      title: "AI Skill Development",
      description:
        "Free & premium AI courses for students and faculty, with integration as electives/credit-based learning in the curriculum.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "🏢",
      title: "Institutional Transformation",
      description:
        "From digitalization to branding, NAAC accreditation improvement, faculty training, and placement assistance — we uplift the entire ecosystem.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do at Ai Linc
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div
                className={`mt-6 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
