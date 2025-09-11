import { useState } from "react";

interface Video {
  title: string;
  description: string;
  youtubeUrl: string;
  duration: string;
}

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("workshop-videos");

  const tabs = [
    { id: "all", label: "All", icon: "🗂️" },
    { id: "workshop-videos", label: "Workshop Videos", icon: "🎬" },
    { id: "images", label: "Images", icon: "📷" },
    { id: "app-screenshots", label: "App Screenshots", icon: "📱" },
    { id: "certifications", label: "Certifications", icon: "🏆" },
  ];

  const workshopVideos = [
    {
      title: "Build a website with AI without coding- using agentic AI",
      description:
        "Learn to create stunning websites using AI-powered tools without writing a single line of code",
      youtubeUrl: "https://youtu.be/6H2vFc8cbqQ?si=Gl_m-Tv3e_6HZWpU",
      duration: "45 min",
    },
    {
      title: "Master Top AI tools - Lovable.ai, Heygen, Zapier & more",
      description:
        "Comprehensive guide to the most powerful AI tools for productivity and automation",
      youtubeUrl: "https://youtu.be/iWNTkX5P-JI?si=HDHnW7Xix4Cpngo_",
      duration: "52 min",
    },
  ];

  const images = [
    {
      title: "AI Workshop Session",
      description: "Students engaged in hands-on AI learning",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    },
    {
      title: "AI Hackathon 2024",
      description: "48-hour coding marathon with AI focus",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
    },
    {
      title: "Guest Lecture by Industry Expert",
      description: "Industry expert sharing latest AI trends",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    },
    {
      title: "Faculty Training Program",
      description: "Empowering educators with AI knowledge",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop",
    },
  ];

  const appScreenshots = [
    {
      title: "Student Dashboard",
      description: "Clean and intuitive student interface",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    },
    {
      title: "Learning Management System",
      description: "Advanced LMS with AI integration",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    },
    {
      title: "Mobile App Interface",
      description: "Responsive mobile application design",
      image:
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500&h=300&fit=crop",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time performance tracking",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
  ];

  const certifications = [
    {
      title: "AWS Certification Ceremony",
      description: "Students receiving industry certifications",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=300&fit=crop",
    },
    {
      title: "Google Cloud Certificate",
      description: "Professional cloud computing certification",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
    },
    {
      title: "Microsoft Azure Achievement",
      description: "Advanced cloud services certification",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    },
    {
      title: "AI/ML Specialization",
      description: "Machine learning professional certificate",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    },
  ];

  const getCurrentTabContent = (): GalleryItem[] => {
    switch (activeTab) {
      case "images":
        return images;
      case "app-screenshots":
        return appScreenshots;
      case "certifications":
        return certifications;
      case "all":
        return [
          ...images,
          ...appScreenshots,
          ...certifications,
        ];
      default:
        return [];
    }
  };

  const renderVideoContent = (video: Video, index: number) => (
    <div
      key={index}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <iframe
          src={`https://www.youtube.com/embed/${
            video.youtubeUrl.split("/").pop()?.split("?")[0]
          }`}
          title={video.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg">
          <span className="text-gray-800 text-sm font-semibold">
            {video.duration}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {video.title}
        </h4>
        <p className="text-gray-600 leading-relaxed mb-4">
          {video.description}
        </p>
        <div className="flex gap-3">
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 text-center"
          >
            Watch on YouTube
          </a>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
            Book your slot
          </button>
        </div>
      </div>
    </div>
  );

  const renderImageContent = (item: GalleryItem, index: number) => (
    <div
      key={index}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white bg-opacity-90 backdrop-blur-sm border-2 border-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">👁️</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
          {item.title}
        </h4>
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
        <div className="mt-4 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
      </div>
    </div>
  );

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

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform hover:scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-blue-300 shadow-md hover:shadow-lg transform hover:scale-105"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === "workshop-videos" && (
            <div className="grid md:grid-cols-2 gap-8">
              {workshopVideos.map((video, index) =>
                renderVideoContent(video, index)
              )}
            </div>
          )}

          {(activeTab === "images" ||
            activeTab === "app-screenshots" ||
            activeTab === "certifications" ||
            activeTab === "all") && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentTabContent().map((item, index) =>
                renderImageContent(item, index)
              )}
            </div>
          )}
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
