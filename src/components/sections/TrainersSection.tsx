const trainers = [
  {
    name: "Soumen Das",
    title: "Sr. Mobile App Developer | Flutter",
    experience: "9+ Yrs",
    location: "India",
    verified: true,
    ex: "roadzen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dhruv Singh.",
    title: "Sr. Power BI Corporate Trainer",
    experience: "9+ Yrs",
    location: "India",
    verified: true,
    ex: "hp",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Shantanu Shubham",
    title: "Sr. Software Engineer",
    experience: "6+ Yrs",
    location: "India",
    verified: true,
    ex: "amazon",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Asha Sukumaran",
    title: "Sr. Power BI & Advanced Excel Trainer",
    experience: "10+ Yrs",
    location: "India",
    verified: true,
    ex: "genpact",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    name: "Akshat Sharma",
    title: "Sr. Data Science Trainer | Machine Learning | NLP | AI",
    experience: "10+ Yrs",
    location: "India",
    verified: true,
    ex: "accenture",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];

const TrainersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Get trained from the <span className="italic font-serif">top 3%</span>{" "}
          of IT Tutors
        </h2>
        <p className="text-gray-600 text-center mb-8 uppercase tracking-widest text-xs font-semibold">
          Top Trainers
        </p>
        <div className="relative py-4">
          {/* Left blur gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Right blur gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 animate-scroll-horizontal-smooth">
              {/* Create enough duplicates for seamless infinite scroll */}
              {[...trainers, ...trainers, ...trainers, ...trainers].map(
                (trainer, idx) => (
                  <div
                    key={idx}
                    className="min-w-[260px] min-h-[200px] max-w-[280px] bg-white rounded-2xl shadow-md border border-gray-200 flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-xl transform-gpu"
                    style={{ transformOrigin: "center center" }}
                  >
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-40 object-cover rounded-t-2xl"
                    />
                    <div className="p-4 flex flex-col gap-2">
                      <h3 className="font-bold text-lg text-gray-900 leading-tight">
                        {trainer.name}
                      </h3>
                      <div className="text-gray-600 text-sm mb-1">
                        {trainer.title}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 gap-2 mb-1">
                        <span>{trainer.experience}</span>
                        <span>•</span>
                        <span>{trainer.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {trainer.verified && (
                          <span className="flex items-center text-green-600 font-semibold">
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Verified Expert
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-400">EX:</span>
                        <span className="text-sm font-semibold text-gray-700 uppercase">
                          {trainer.ex}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
