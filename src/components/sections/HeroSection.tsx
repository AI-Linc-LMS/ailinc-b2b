import { handleNavClick } from "../../utils/navigate-helper";

const HeroSection = () => {
  // Dummy profile images - replace with real URLs
  const profileImages = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1557862921-37829c790f19?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1612833603922-2b1e11eb2e89?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=150&h=150&fit=crop&crop=face",
  ];

  return (
    <section className="relative mt-[15px] h-full bg-white flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content Section */}
          <div className="space-y-5 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                AI-Powered Growth for{" "}
                <span className="text-blue-600">
                  Institutions & Organisations
                </span>
              </h1>

              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                We help colleges and organizations with a 100% white-labeled AI
                app, integrated AI courses, and complete institutional support
                in digitalization, faculty training, and placements — making
                every institution future-ready.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => {
                  handleNavClick("#contact");
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get started
              </button>
              <button
                onClick={() => {
                  handleNavClick("#contact");
                }}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-semibold rounded-lg transition-all duration-300"
              >
                Book a demo
              </button>
            </div>

            <div className="flex items-center gap-3 pt-2 justify-center lg:justify-start">
              <span className="text-lg font-medium">
                Powered by{" "}
                <span className="text-blue-600 font-semibold">Microsoft</span>
              </span>
            </div>
          </div>

          {/* Right Images Section */}
          <div className="relative lg:block hidden">
            {/* Top blur gradient */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

            {/* Bottom blur gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-2 gap-3 h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
              {/* First Column */}
              <div className="space-y-3 animate-scroll-up">
                {profileImages.map((img, index) => (
                  <div
                    key={`col1-${index}`}
                    className="bg-white rounded-xl p-2 shadow-md border hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`Profile ${index + 1}`}
                      className="w-full h-50 rounded-lg object-cover"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless scroll */}
                {profileImages.map((img, index) => (
                  <div
                    key={`col1-dup-${index}`}
                    className="bg-white rounded-xl p-2 shadow-md border hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`Profile ${index + 1}`}
                      className="w-full h-50 rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Second Column */}
              <div className="space-y-3 animate-scroll-down">
                {[...profileImages].reverse().map((img, index) => (
                  <div
                    key={`col2-${index}`}
                    className="bg-white rounded-xl p-2 shadow-md border hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`Profile ${index + 1}`}
                      className="w-full h-50 rounded-lg object-cover"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless scroll */}
                {[...profileImages].reverse().map((img, index) => (
                  <div
                    key={`col2-dup-${index}`}
                    className="bg-white rounded-xl p-2 shadow-md border hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`Profile ${index + 1}`}
                      className="w-full h-50 rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
