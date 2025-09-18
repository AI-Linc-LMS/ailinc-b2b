"use client";
import AboutUs from "@/components/About-Us";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <AboutUs/>
      <Footer />
    </div>
  );
}
