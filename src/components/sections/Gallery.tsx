const Gallery = () => {
  const galleryItems = [
    {
      type: "workshop",
      title: "AI Workshop Session",
      description: "Students engaged in hands-on AI learning",
      image: "🧠",
      category: "Workshops",
    },
    {
      type: "hackathon",
      title: "AI Hackathon 2024",
      description: "48-hour coding marathon with AI focus",
      image: "💻",
      category: "Events",
    },
    {
      type: "lecture",
      title: "Guest Lecture by Google AI Expert",
      description: "Industry expert sharing latest AI trends",
      image: "🎤",
      category: "Lectures",
    },
    {
      type: "app",
      title: "Student App Interface",
      description: "Clean and intuitive app design",
      image: "📱",
      category: "App Screenshots",
    },
    {
      type: "app",
      title: "Admin Dashboard",
      description: "Comprehensive analytics and management",
      image: "📊",
      category: "App Screenshots",
    },
    {
      type: "certificate",
      title: "AWS Certification Ceremony",
      description: "Students receiving industry certifications",
      image: "🏆",
      category: "Certifications",
    },
    {
      type: "certificate",
      title: "Google Cloud Certificates",
      description: "Partnership certification distribution",
      image: "🎓",
      category: "Certifications",
    },
    {
      type: "training",
      title: "Faculty Training Program",
      description: "Empowering educators with AI knowledge",
      image: "👩‍🏫",
      category: "Training",
    },
    {
      type: "training",
      title: "Advanced AI Masterclass",
      description: "Deep learning and neural networks",
      image: "🤖",
      category: "Training",
    },
  ];

  const categories = [
    "All",
    "Workshops",
    "Events",
    "Lectures",
    "App Screenshots",
    "Certifications",
    "Training",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of transformation, learning, and success across
            our partner institutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform hover:scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-blue-300 shadow-md hover:shadow-lg transform hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-xl">👁️</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black bg-opacity-20 backdrop-blur-sm rounded-full">
                  <span className="text-white text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View More Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
