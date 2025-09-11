const ContactSection = () => {
  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21c-4.418 0-8-5.373-8-9.5C4 6.364 7.134 3 12 3s8 3.364 8 8.5c0 4.127-3.582 9.5-8 9.5zm0-7a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      ),
      title: "Office Address",
      details: [
        "8-2-418 6th floor, Meenakshi House,",
        "Road No 7, Banjara Hills,",
        "Hyderabad, Telangana - 500034",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📞",
      title: "Phone Number",
      details: ["+91 7868-055111"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "📧",
      title: "Email Address",
      details: ["careers@ailinc.com", "communications@ailinc.com"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://www.linkedin.com/company/ailinc",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: "https://twitter.com/ailinc",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529L7.31 13.39c.48.675 1.271 1.117 2.139 1.117.344 0 .684-.067 1.006-.201l1.312 2.068c-.605.381-1.325.614-2.318.614zm7.518 0c-.993 0-1.713-.233-2.318-.614l1.312-2.068c.322.134.662.201 1.006.201.868 0 1.659-.442 2.139-1.117l2.066 2.069c-.757.933-1.908 1.529-3.205 1.529zM12 15.156c-1.742 0-3.156-1.414-3.156-3.156S10.258 8.844 12 8.844s3.156 1.414 3.156 3.156-1.414 3.156-3.156 3.156z" />
        </svg>
      ),
      url: "https://instagram.com/ailinc",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com/@ailinc",
    },
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
                      {info.title === "Office Address" && (
                        <a
                          href="https://share.google/1Z7C0F1eesIGrbjYo"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-blue-600 hover:underline text-sm font-semibold"
                        >
                          View on Google Maps
                        </a>
                      )}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg text-white"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-6 border border-blue-200 shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-900">
                Our Location
              </h4>
              <div className="aspect-video bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl overflow-hidden">
                <a
                  href="https://share.google/1Z7C0F1eesIGrbjYo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-white font-semibold">
                      View on Google Maps
                    </p>
                    <p className="text-blue-200 text-sm">
                      Hyderabad Office Location
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
