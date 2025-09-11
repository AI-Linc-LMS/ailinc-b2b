const SuccessStories = () => {
  const stories = [
    {
      title: "Osmania University",
      metrics: {
        NAAC: "A+",
        Students: "300,000+",
        Adoption: "85%",
      },
      description:
        "Achieved NAAC A+ accreditation, 300,000+ students impacted, and 85% digital adoption across the university.",
      testimonial:
        "Ai Linc's platform enabled us to reach new heights in digital transformation and student engagement.",
      person: "Dr. S. Ramachandran",
      designation: "Vice Chancellor",
      image: "🎓",
      bgColor: "from-blue-500 to-cyan-500",
    },
    {
      title: "Kakatia University",
      metrics: {
        Adoption: "90%",
        Certs: "Microsoft + AWS",
        Engagement: "High",
      },
      description:
        "90% student adoption, certifications from Microsoft & AWS, and high student engagement in digital learning.",
      testimonial:
        "The integration of industry certifications and high engagement has set a new benchmark for our university.",
      person: "Prof. Anitha Rao",
      designation: "Dean of Academics",
      image: "🎓",
      bgColor: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from institutions that partnered with Ai Linc
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 hover:border-blue-300"
            >
              {/* Header */}
              <div
                className={`h-2 bg-gradient-to-r ${story.bgColor} rounded-t-2xl -mx-8 -mt-8 mb-6`}
              ></div>

              {/* Institution Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {story.title}
              </h3>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(story.metrics).map(
                  ([key, value], metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${story.bgColor} bg-clip-text text-transparent`}
                      >
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {story.description}
              </p>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-gray-700 italic text-sm leading-relaxed mb-4">
                  "{story.testimonial}"
                </p>

                {/* Person */}
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${story.bgColor} rounded-full flex items-center justify-center text-white mr-3`}
                  >
                    {story.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {story.person}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {story.designation}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className={`h-1 bg-gradient-to-r ${story.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to become our next success story?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
