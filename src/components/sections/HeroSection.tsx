import { handleNavClick } from "../../utils/navigate-helper";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center text-gray-900 max-w-6xl mx-auto px-4">
        {/* Main Tagline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Empowering Organisations.
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
            Enabling AI Futures.
          </span>
        </h1>

        {/* Alternative taglines */}
        <div className="mb-8 space-y-2 animate-fade-in-delay">
          <p className="text-xl md:text-2xl text-gray-700">
            Transforming Colleges into AI-Powered Campuses
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            From Education to Innovation — AI for Every Institution
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <button
            onClick={() => {
              handleNavClick("#contact");
            }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Demo
          </button>
          <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center cursor-pointer"
            onClick={() =>
              document
                .getElementById("what-we-do")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
