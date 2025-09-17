"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SingleWorkshopRegistration from "@/components/Workshop";

export default function WorkshopRegistrationPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <SingleWorkshopRegistration />
      <Footer />
    </div>
  );
}
