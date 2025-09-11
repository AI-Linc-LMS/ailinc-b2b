import { useState, useEffect } from "react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    colleges: 0,
    students: 0,
    faculty: 0,
    engagement: 0,
  });

  useEffect(() => {
    const finalStats = {
      colleges: 30,
      students: 50000,
      faculty: 1000,
      engagement: 90,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => ({
        colleges: Math.min(
          prev.colleges + finalStats.colleges / steps,
          finalStats.colleges
        ),
        students: Math.min(
          prev.students + finalStats.students / steps,
          finalStats.students
        ),
        faculty: Math.min(
          prev.faculty + finalStats.faculty / steps,
          finalStats.faculty
        ),
        engagement: Math.min(
          prev.engagement + finalStats.engagement / steps,
          finalStats.engagement
        ),
      }));
    }, stepTime);

    setTimeout(() => {
      clearInterval(timer);
      setCounters(finalStats);
    }, duration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: Math.floor(counters.colleges),
      suffix: "+",
      label: "Institutions Empowered",
      icon: "🏫",
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: Math.floor(counters.students),
      suffix: "+",
      label: "Students Upskilled",
      icon: "👨‍🎓",
      color: "from-green-500 to-teal-500",
    },
    {
      value: Math.floor(counters.faculty),
      suffix: "+",
      label: "Faculty Trained",
      icon: "👩‍🏫",
      color: "from-purple-500 to-pink-500",
    },
    {
      value: Math.floor(counters.engagement),
      suffix: "%",
      label: "Student Engagement Rates",
      icon: "📈",
      color: "from-orange-500 to-red-500",
    },
  ];

  const accreditations = [
    { name: "Microsoft", logo: "🔷" },
    { name: "AWS", logo: "☁️" },
    { name: "Google", logo: "🔍" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl border border-blue-200 hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div
                className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-gray-700 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">
            Accreditations with Industry Leaders
          </h3>
          <div className="flex justify-center items-center space-x-12">
            {accreditations.map((acc, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl border border-blue-200 hover:bg-opacity-90 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <div className="text-3xl mb-2">{acc.logo}</div>
                <div className="text-gray-800 font-semibold">{acc.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
