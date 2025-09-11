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
    <section className="relative mt-[60px] md:mt-[15px] h-full bg-white flex items-center justify-center overflow-hidden">
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
              {/* Micro tagline */}
              <div className="text-xs lg:text-sm font-semibold text-blue-700/80 tracking-wide mb-1 mt-2">
                Trusted by 1000+ Colleges | 1M+ Students
              </div>
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
              {/* Animated glowing CTA button */}
              <button
                onClick={() => {
                  handleNavClick("#contact");
                }}
                className="px-6 py-3 relative font-semibold rounded-lg overflow-hidden group border-2 border-blue-400 text-blue-700 bg-white shadow-md"
              >
                <span className="relative z-10">Book a demo</span>
                {/* Glowing edge effect */}
                <span className="absolute inset-0 rounded-lg pointer-events-none animate-glow-edges bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 opacity-60 blur-sm group-hover:opacity-90 transition-all duration-300"></span>
              </button>
            </div>

            {/* Powered by Microsoft for Startups badge */}
            <div className="flex items-center justify-center lg:justify-start mt-4">
              <div className="flex items-center bg-[#181F2A] px-6 py-2 rounded-full shadow-md gap-2">
                <span className="text-white text-base font-medium">
                  Powered by
                </span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft"
                  className="h-6 w-auto mx-1"
                />
                <span className="text-white text-base font-medium">
                  for Startups
                </span>
              </div>
            </div>

            {/* Partner logos (colorful, after buttons) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-7">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                alt="AWS"
                className="h-7 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="h-7 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM"
                className="h-7 w-auto"
              />
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
