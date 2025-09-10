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
              <div className="bg-black rounded-xl aspect-video flex items-center justify-center relative overflow-hidden cursor-pointer group">
                {/* Placeholder for video */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Video placeholder content */}
                <div className="relative z-10 text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-opacity-30 transition-all duration-300 cursor-pointer transform hover:scale-110">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Ai Linc Product Demo
                  </h3>
                  <p className="text-blue-200">90 seconds • Full HD</p>
                </div>

                {/* Animated elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-4 left-10 w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-4 left-16 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-600"></div>
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
                  NAC score improvement
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
