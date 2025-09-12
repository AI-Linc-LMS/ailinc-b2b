const OtherServices = () => {
  const services = [
    {
      title: "Student Entrepreneurship Programs",
      description:
        "Comprehensive programs to nurture student entrepreneurial skills and mindset",
      icon: "",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Startup ideation workshops",
        "Business plan development",
        "Pitch training sessions",
        "Mentorship programs",
      ],
    },
    {
      title: "AI Project Mentoring",
      description:
        "Expert guidance for student AI projects and research initiatives",
      icon: "🤖",
      color: "from-green-500 to-teal-500",
      features: [
        "One-on-one mentorship",
        "Project review sessions",
        "Technical guidance",
        "Research paper support",
      ],
    },
    {
      title: "Industry Collaborations",
      description:
        "Bridge the gap between academia and industry for research & startups",
      icon: "🏭",
      color: "from-purple-500 to-pink-500",
      features: [
        "Corporate partnerships",
        "Research collaborations",
        "Internship placements",
        "Industry projects",
      ],
    },
    {
      title: "Funding & Pitch Training",
      description:
        "Comprehensive support for securing funding and investor presentations",
      icon: "💰",
      color: "from-orange-500 to-red-500",
      features: [
        "Investor pitch decks",
        "Funding strategies",
        "Demo day preparation",
        "Investor connections",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Beyond AI Training: Incubation Support
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We help colleges build start-up incubation cells powered by AI tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Hero Video: Bill Gates on navigating an AI future */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl border border-blue-200 shadow-xl p-0 w-full max-w-3xl">
            <div className="relative w-full pt-[56.25%] rounded-3xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Ny-qhl4N9dY?autoplay=1&mute=1&loop=1&playlist=Ny-qhl4N9dY"
                title="Bill Gates on navigating an AI future"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-xs text-gray-500 mt-2 mb-2">
              Bill Gates on navigating an AI future &mdash;{" "}
              <span className="italic">Credits: CNN</span>
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl p-8 border border-blue-200 hover:bg-opacity-90 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                    ></div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover indicator */}
              <div
                className={`mt-6 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl p-8 border border-blue-200 text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">
            Why Choose Our Incubation Support?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4"></div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Expert Guidance
              </h4>
              <p className="text-gray-700">
                Industry experts and successful entrepreneurs as mentors
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4"></div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                AI-Powered Tools
              </h4>
              <p className="text-gray-700">
                Cutting-edge AI tools and technologies for startup development
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4"></div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Network Access
              </h4>
              <p className="text-gray-700">
                Connect with investors, industry partners, and startup ecosystem
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Build Your Incubation Cell
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
