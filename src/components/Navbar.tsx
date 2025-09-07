import { useState } from "react";
import { handleNavClick } from "../utils/navigate-helper";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Features", href: "#features" },
    { name: "Success Stories", href: "#success-stories" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-lg border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => {
                handleNavClick("#home");
                setIsMenuOpen(false);
              }}
            >
              AI-linc
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleNavClick(item.href);
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105 transform"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => {
                handleNavClick("#contact");
                setIsMenuOpen(false);
              }}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white bg-opacity-98">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    handleNavClick("#contact");
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
