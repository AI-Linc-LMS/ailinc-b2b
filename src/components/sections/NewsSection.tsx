import osmaniaNews from "../../assets/news/osmania-news.jpg";

const newsItems = [
  {
    title:
      "OU’s UCE partners with AI LINC to upskill students in AI, ML, and data analytics",
    description:
      "Osmania University’s College of Engineering (UCE) has signed an MoA with AI LINC Technologies to upskill students in Artificial Intelligence, Machine Learning, and Data Analytics. The partnership aims to bridge the gap between academia and industry, providing students with practical skills and certifications.",
    publication: "The Hans India",
    category: "NEWS",
    image: osmaniaNews,
    readTime: "3 min read",
    featured: true,
    link: "https://www.thehansindia.com/amp/telangana/ous-uce-partners-with-ai-linc-to-upskill-students-in-ai-ml-and-data-analytics-1004680",
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ai linc in <span className="italic font-serif">News</span>
          </h2>
          <p className="text-gray-600 text-center uppercase tracking-widest text-xs font-semibold">
            Latest Updates & Featured Stories
          </p>
        </div>

        <div className="relative py-4">
          {/* Left blur gradient */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-5 sm:w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" /> */}

          {/* Right blur gradient */}
          {/* <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" /> */}

          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* {animate-scroll-horizontal-smooth} */}
            <div className="flex gap-6 ">
              {/* Create enough duplicates for seamless infinite scroll */}
              {[...newsItems].map((news, idx) => (
                <div
                  key={idx}
                  className="min-w-[350px] max-w-[380px] bg-white rounded-2xl shadow-lg border border-gray-200 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu overflow-hidden"
                  style={{ transformOrigin: "center center" }}
                >
                  {/* Image Container */}
                  <div className="relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full ${
                          news.featured
                            ? "bg-green-500 text-white"
                            : "bg-white bg-opacity-90 text-gray-800"
                        }`}
                      >
                        {news.category}
                      </span>
                    </div>

                    {/* Publication Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-black bg-opacity-70 text-white rounded-full">
                        {news.publication}
                      </span>
                    </div>

                    {/* Featured Overlay */}
                    {news.featured && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 leading-tight mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {news.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {news.readTime}
                      </span>

                      <a
                        href={news.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                          news.featured
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-gray-900 hover:bg-gray-800 text-white"
                        }`}
                      >
                        READ NOW
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All News & Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
