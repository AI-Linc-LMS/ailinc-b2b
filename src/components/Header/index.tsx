"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#success-stories", label: "Success Stories" },
  { href: "/#trainers", label: "Meet Our Team" },
  { href: "/#promoters", label: "Promoters" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#contact", label: "Contact" },
];

function Header() {
  const { t, availableLanguages, locale, setLocale } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center">
            <Link href="/" passHref>
              <span className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
                {t("AI Linc")}
              </span>
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-blue-600"
                passHref
              >
                {t(label)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center space-x-3 md:flex">
            <div className="relative">
              <label className="sr-only" htmlFor="language-select">
                {t("Language")}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(event) => setLocale(event.target.value as typeof locale)}
                className="cursor-pointer appearance-none rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {availableLanguages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.nativeLabel}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            <Link href="/#contact">
              <button className="transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium tracking-wide text-white transition duration-300 hover:scale-95 hover:shadow-lg">
                {t("Book A Demo")}
              </button>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center space-x-3 md:hidden">
            <div className="relative">
              <label className="sr-only" htmlFor="language-select-mobile">
                {t("Language")}
              </label>
              <select
                id="language-select-mobile"
                value={locale}
                onChange={(event) => setLocale(event.target.value as typeof locale)}
                className="cursor-pointer appearance-none rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {availableLanguages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.nativeLabel}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <div
            className={`relative mt-4 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-all duration-300 ${
              isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-1 px-6 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold tracking-wide text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
                  onClick={closeMenu}
                >
                  {t(label)}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 px-6 py-4">
              <Link href="/#contact" onClick={closeMenu}>
                <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:shadow-xl">
                  {t("Book A Demo")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
