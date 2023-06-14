import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translation from "../src/locales/en/translation.json";
import translationDE from "../src/locales/de/translationDE.json";

const resources = {
  en: {
    translation: translation
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(Backend)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
