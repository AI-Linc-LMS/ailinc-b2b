import { handleNavClick } from "../../utils/navigate-helper";

const CollaborationProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Get in Touch",
      description:
        "Fill our quick contact form and let us know about your institution's needs.",
      icon: "📞",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Demo & Consultation",
      description:
        "We understand your needs and show our app in action with a personalized demo.",
      icon: "💻",
      color: "from-green-500 to-teal-500",
    },
    {
      number: "03",
      title: "Custom Integration",
      description:
        "We customize the white-labeled app for your institution with your branding.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "04",
      title: "Launch & Training",
      description:
        "Smooth onboarding for students and faculty with comprehensive training sessions.",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
    },
    {
      number: "05",
      title: "Long-Term Partnership",
      description:
        "Continuous updates, placements, and support for sustained growth and success.",
      icon: "🤝",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partner with Ai Linc
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to becoming an AI-powered campus starts here. Follow
            our simple 5-step process.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-y-1/2"></div>

            {/* Steps */}
            <div className="relative flex justify-between items-center">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center max-w-xs"
                >
                  {/* Step Circle */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4 hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline - Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Step Circle */}
              <div
                className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div
                  className={`text-xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-1`}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Take the first step towards transforming your institution today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                handleNavClick("#contact");
              }}
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationProcess;
