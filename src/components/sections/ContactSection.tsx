const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Office Address",
      details: [
        "India: Mumbai, Maharashtra",
        "Egypt: Cairo International Business Center",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📞",
      title: "Phone Number",
      details: ["+91 98765 43210", "+20 123 456 789"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "📧",
      title: "Email Address",
      details: ["contact@ai-linc.com", "partnerships@ai-linc.com"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build Your AI-Ready Campus
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to transform your institution? Get in touch with us today and
            start your AI journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl p-8 border border-blue-200 shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Contact Form
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  College/Institution Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                  placeholder="Your institution name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your institution's needs and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            {/* Chatbot Notice */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🤖</span>
                <p className="text-sm text-blue-800">
                  Need instant help? Our AI chatbot is available 24/7 for quick
                  queries.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 hover:bg-opacity-95 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-xl mr-4 flex-shrink-0 shadow-lg`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-xl hover:scale-110 transition-transform duration-300 shadow-lg text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                Our Locations
              </h4>
              <div className="aspect-video bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-white font-semibold">
                    Interactive Map Integration
                  </p>
                  <p className="text-blue-200 text-sm">
                    Mumbai & Cairo Offices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
