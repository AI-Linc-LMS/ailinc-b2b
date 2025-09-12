const ProductVideo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See Ai Linc in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our 90-second explainer video to understand how we transform
            colleges into AI-powered campuses
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Video Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            {/* Laptop Mockup */}
            <div className="bg-gray-300 rounded-2xl p-4">
              <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden group">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/enYDlLwAF5I?autoplay=1&rel=0&mute=1"
                  title="AI Linc Explainer Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* Keyboard */}
            <div className="bg-gray-300 rounded-b-xl h-3 mx-4"></div>
          </div>

          {/* Video Description Points */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">
                What You'll See:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  The problem colleges face with AI adoption
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Ai Linc as the complete solution
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  White-label app demo (student & admin side)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Courses, certifications & placement assistance
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Key Benefits:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  NAAC score improvement
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Student testimonials & success stories
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Faculty training & development
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Complete digital transformation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVideo;
