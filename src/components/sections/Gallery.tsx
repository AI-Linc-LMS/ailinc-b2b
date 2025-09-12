import { useState } from "react";

// Add custom CSS for scrollbar hiding
const galleryStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

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
    { id: "all", label: "All" },
    { id: "workshop-videos", label: "Workshop Videos" },
    { id: "images", label: "Images" },
    { id: "app-screenshots", label: "App Screenshots" },
    { id: "certifications", label: "Certifications" },
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
        return [...images, ...appScreenshots, ...certifications];
      default:
        return [];
    }
  };

  const renderVideoContent = (video: Video, index: number) => (
    <div
      key={index}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
    >
      {/* Video Container with Modern Border */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-t-3xl"></div>
        <div className="relative aspect-video overflow-hidden bg-gray-900 rounded-t-3xl m-3">
          <iframe
            src={`https://www.youtube.com/embed/${
              video.youtubeUrl.split("/").pop()?.split("?")[0]
            }`}
            title={video.title}
            className="w-full h-full rounded-xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* Duration Badge with Glow Effect */}
          <div className="absolute bottom-3 right-3">
            <div className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <span className="text-white text-sm font-semibold flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                {video.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 pt-2">
        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {video.title}
        </h4>
        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
          {video.description}
        </p>

        {/* Action Buttons with Modern Design */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn relative overflow-hidden px-5 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-red-200"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Watch on YouTube
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
          </a>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              Book Slot
            </span>
          </button>
        </div>
      </div>

      {/* Subtle Corner Decoration */}
      <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
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
              <span className="text-xl">View</span>
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
    <>
      <style dangerouslySetInnerHTML={{ __html: galleryStyles }} />
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

          {/* Responsive Tab Navigation */}
          <div className="mb-8">
            {/* Mobile: Horizontal Scrollable Buttons */}
            <div className="md:hidden">
              <div className="flex gap-3 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-blue-300"
                    }`}
                    style={{ minWidth: "120px" }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: Horizontal Navigation */}
            <div className="hidden md:flex justify-center flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-blue-300 shadow-sm hover:shadow-md"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
    </>
  );
};

export default Gallery;
