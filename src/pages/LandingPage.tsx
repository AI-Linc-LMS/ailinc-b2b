import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import WhatWeDo from "../components/sections/WhatWeDo";
import StatsSection from "../components/sections/StatsSection";
import ProductVideo from "../components/sections/ProductVideo";
import ProductFeatures from "../components/sections/ProductFeatures";
import SuccessStories from "../components/sections/SuccessStories";
import CollaborationProcess from "../components/sections/CollaborationProcess";
import OtherServices from "../components/sections/OtherServices";
import Gallery from "../components/sections/Gallery";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  useEffect(() => {
    // Add intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content Sections */}
      <section id="home" className="scroll-mt-16">
        <HeroSection />
      </section>

      <section id="what-we-do" className="scroll-mt-16">
        <WhatWeDo />
      </section>

      <section id="stats" className="scroll-mt-16">
        <StatsSection />
      </section>

      <section id="video" className="scroll-mt-16">
        <ProductVideo />
      </section>

      <section id="features" className="scroll-mt-16">
        <ProductFeatures />
      </section>

      <section id="success-stories" className="scroll-mt-16">
        <SuccessStories />
      </section>

      <section id="collaboration" className="scroll-mt-16">
        <CollaborationProcess />
      </section>

      <section id="incubation" className="scroll-mt-16">
        <OtherServices />
      </section>

      <section id="gallery" className="scroll-mt-16">
        <Gallery />
      </section>

      <section id="contact" className="scroll-mt-16">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
