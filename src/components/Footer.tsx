const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "White-Labeled AI App",
        "AI Skill Development",
        "Institutional Transformation",
        "Incubation Support",
      ],
    },
    {
      title: "Resources",
      links: [
        "Success Stories",
        "Gallery",
        "Product Features",
        "Collaboration Process",
      ],
    },
    {
      title: "Company",
      links: ["About Ai Linc", "Our Team", "Careers", "News & Updates"],
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "Help Center",
        "Documentation",
        "Technical Support",
      ],
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼" },
    { name: "Twitter", icon: "🐦" },
    { name: "Instagram", icon: "📷" },
    { name: "Facebook", icon: "📘" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Ai Linc
                </h3>
                <p className="text-gray-400 mt-2">
                  Empowering Organisations. Enabling AI Futures.
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming colleges into AI-powered campuses through
                innovative white-labeled solutions, comprehensive skill
                development programs, and institutional transformation services.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-4 text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-2">Stay Updated</h4>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest AI education insights
              and updates
            </p>
          </div>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Ai Linc. All rights reserved. | Privacy Policy | Terms of
              Service
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with ❤️ for the future of education</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
