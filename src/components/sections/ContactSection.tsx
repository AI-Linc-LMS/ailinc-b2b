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
      name: "Instagram",
      url: "https://www.instagram.com/ai_lincc",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.976 1.246 2.243 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.976.975-2.243 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.976-1.246-2.243-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.976-.975 2.243-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.687.334-3.678 1.325-.991.991-1.265 2.402-1.325 3.678-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.325 3.678.991.991 2.402 1.265 3.678 1.325 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.678-1.325.991-.991 1.265-2.402 1.325-3.678.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.265-3.678-1.325-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com/@ailinc772?si=HG4U3rAyVtpAOzBR",
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

            {/* Chatbot Notice
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🤖</span>
                <p className="text-sm text-blue-800">
                  Need instant help? Our AI chatbot is available 24/7 for quick
                  queries.
                </p>
              </div>
            </div> */}
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
              <div className="aspect-video rounded-xl overflow-hidden border border-blue-200 shadow">
                <iframe
                  title="AILinc Office Map"
                  src="https://www.google.com/maps?q=AI+Linc&hl=en&ll=17.2048409,78.3466611&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
