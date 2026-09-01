"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale, TranslationKeys } from "./types";
import { locales } from "./types";
import { translations } from "./translations";

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function isValidLocale(val: string | null): val is Locale {
  return typeof val === "string" && locales.includes(val as Locale);
}

function syncIframeLocale(targetLocale: Locale) {
  try {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach((frame) => {
      try {
        frame.contentWindow?.postMessage({ type: "YAAZH_SET_LOCALE", locale: targetLocale }, "*");
      } catch {
        // ignore cross-origin or sandbox limits
      }
    });
  } catch {
    // ignore
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // English is the default language
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("yaazh-locale");
      if (isValidLocale(saved)) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        syncIframeLocale(saved);
      } else {
        document.documentElement.lang = "en";
      }
    } catch {
      // localStorage may fail in restricted mode
    }
  }, []);

  function setLocale(newLocale: Locale) {
    if (!isValidLocale(newLocale)) return;
    setLocaleState(newLocale);
    try {
      localStorage.setItem("yaazh-locale", newLocale);
    } catch {
      // ignore
    }
    document.documentElement.lang = newLocale;
    syncIframeLocale(newLocale);
  }

  const t: TranslationKeys = translations[locale] || translations.en;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
