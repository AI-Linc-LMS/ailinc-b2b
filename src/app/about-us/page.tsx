"use client";
import AboutUs from "@/components/About-Us";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function AboutUsPage() {

  const SectionLoader = () => (
  <div className="h-96 bg-gray-50 animate-pulse rounded-lg mx-4 my-8 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);


  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <Suspense fallback={<SectionLoader/>}>
      <AboutUs/>
      </Suspense>
      <Footer />
    </div>
  );
}
