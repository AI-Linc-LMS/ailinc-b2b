"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, fallbackLocale, type Locale } from "@/i18n/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  availableLanguages: Array<{ value: Locale; label: string; nativeLabel: string }>;
}

const LANGUAGE_STORAGE_KEY = "ailinc-locale";

const LanguageContext = createContext<LanguageContextValue | null>(null);

const availableLanguages: Array<{ value: Locale; label: string; nativeLabel: string }> = [
  { value: "en", label: "English", nativeLabel: "English" },
  { value: "fr", label: "French", nativeLabel: "Français" },
  { value: "ar", label: "Arabic", nativeLabel: "العربية" },
  { value: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
];

export function LanguageProvider({
  children,
  defaultLocale = fallbackLocale,
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Locale | null;
    if (storedLocale && storedLocale in translations) {
      setLocaleState(storedLocale);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale in translations) {
      setLocaleState(nextLocale);
    }
  };

  const value = useMemo<LanguageContextValue>(() => {
    return {
      locale,
      setLocale,
      t: (key: string) => {
        const localized = translations[locale]?.[key];
        if (localized) return localized;
        const fallback = translations[fallbackLocale]?.[key];
        return fallback ?? key;
      },
      availableLanguages,
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useTranslation() {
  const { t } = useLanguage();
  return t;
}
