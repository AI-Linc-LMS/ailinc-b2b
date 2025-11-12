"use client";
import AboutUs from "@/components/About-Us";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUsPage() {
  const { t } = useLanguage();

  const SectionLoader = () => (
    <div className="h-96 bg-gray-50 animate-pulse rounded-lg mx-4 my-8 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main className="pt-20 w-full">
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {t("About AI Linc")}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {t(
              "Discover who we are, what we do, and how we're helping institutions adopt AI solutions with ease."
            )}
          </p>
        </section>
        <Suspense fallback={<SectionLoader />}>
          <AboutUs />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
