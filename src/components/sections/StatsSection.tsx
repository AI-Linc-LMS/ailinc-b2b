import { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    colleges: 0,
    students: 0,
    faculty: 0,
    engagement: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finalStats = {
      colleges: 1000,
      students: 100000,
      faculty: 1000,
      engagement: 90,
    };

    let timer: number | null = null;
    let timeout: number | null = null;

    if (hasAnimated) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      timer = setInterval(() => {
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

      timeout = setTimeout(() => {
        if (timer) clearInterval(timer);
        setCounters(finalStats);
      }, duration);
    }

    return () => {
      if (timer) clearInterval(timer);
      if (timeout) clearTimeout(timeout);
    };
  }, [hasAnimated]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    const refCurrent = sectionRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      if (refCurrent) observer.unobserve(refCurrent);
      observer.disconnect();
    };
  }, [hasAnimated]);

  const stats = [
    {
      value: Math.floor(counters.colleges),
      suffix: "+",
      label: "Organisations",
      icon: (
        <svg
          className="w-10 h-10 mx-auto text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="4" y="10" width="16" height="8" rx="2" strokeWidth="2" />
          <path d="M12 4v6" strokeWidth="2" />
          <path d="M8 10V8a4 4 0 018 0v2" strokeWidth="2" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: Math.floor(counters.students),
      suffix: "+",
      label: "Students",
      icon: (
        <svg
          className="w-10 h-10 mx-auto text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 14c2.5 0 7 1.25 7 3.75V20H5v-2.25C5 15.25 9.5 14 12 14z"
            strokeWidth="2"
          />
          <circle cx="12" cy="8" r="4" strokeWidth="2" />
        </svg>
      ),
      color: "from-green-500 to-teal-500",
    },
    {
      value: Math.floor(counters.faculty),
      suffix: "+",
      label: "Faculty Trained",
      icon: (
        <svg
          className="w-10 h-10 mx-auto text-pink-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="7" r="4" strokeWidth="2" />
          <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeWidth="2" />
          <path d="M16 11V9a4 4 0 00-8 0v2" strokeWidth="2" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
    {
      value: Math.floor(counters.engagement),
      suffix: "%",
      label: "Student Engagement Rates",
      icon: (
        <svg
          className="w-10 h-10 mx-auto text-orange-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="4 17 10 11 14 15 20 9" strokeWidth="2" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
    },
  ];

  const accreditations = [
    {
      name: "Microsoft",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
          className="h-8 w-auto"
        />
      ),
    },
    {
      name: "AWS",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
          className="h-8 w-auto"
        />
      ),
    },
    {
      name: "Google",
      logo: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="h-8 w-auto"
        />
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl border border-blue-200 hover:bg-opacity-90 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="mb-4">{stat.icon}</div>
              <div
                className={`text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent tracking-tight`}
                style={{
                  minHeight: "64px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {stat.label === "Students" && stat.value >= 100000
                  ? `1M+`
                  : stat.label === "Organisations" && stat.value >= 1000
                  ? `1000+`
                  : stat.label === "Faculty Trained" && stat.value >= 1000
                  ? `1,000+`
                  : stat.label === "Student Engagement Rates"
                  ? `${stat.value}%`
                  : `${stat.value}${stat.suffix}`}
              </div>
              <div className="text-gray-700 text-lg font-semibold mt-2">
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
                <div className="mb-2 flex items-center justify-center">
                  {acc.logo}
                </div>
                {/* <div className="text-gray-800 font-semibold">{acc.name}</div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
