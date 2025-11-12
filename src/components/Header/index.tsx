"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function Header() {
  const { t, availableLanguages, locale, setLocale } = useLanguage();

  return (
    <header className="relative overflow-hidden">
      {/* Background Pattern */}

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" passHref>
              <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight cursor-pointer">
                {t("AI Linc")}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              passHref
            >
              {t("Services")}
            </Link>
            <Link
              href="/#success-stories"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              passHref
            >
              {t("Success Stories")}
            </Link>
            <Link
              href="/#trainers"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              passHref
            >
              {t("Trainers")}
            </Link>
            <Link
              href="/#solutions"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              passHref
            >
              {t("Solutions")}
            </Link>

            <Link
              href="/#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium tracking-wide"
              passHref
            >
              {t("Contact")}
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <label className="sr-only" htmlFor="language-select">
                {t("Language")}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(event) => setLocale(event.target.value as typeof locale)}
                className="appearance-none px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
              >
                {availableLanguages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.nativeLabel}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            <Link href="/#contact">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-95 font-medium tracking-wide">
                {t("Book A Demo")}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
