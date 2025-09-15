function Header() {
  return (
    <header className="relative  overflow-hidden">
      {/* Background Pattern */}

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="">
              <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight cursor-pointer">
                AI Linc
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
            >
              Services
            </a>
            <a
              href="#success-stories"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
            >
              Success Stories
            </a>
            <a
              href="#trainers"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
            >
              Trainers
            </a>
            <a
              href="#solutions"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
            >
              Solutions
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#contact">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-95 font-medium tracking-wide">
                Book A Demo
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
