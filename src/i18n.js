import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TranselateEn from "./localization/en.json";
import TranselateAr from "./localization/ar.json";
import TranselateTur from "./localization/tur.json";

const resources = {
  en: {
    translation: TranselateEn,
  },
  ar: {
    translation: TranselateAr,
  },
  tr: {
    translation: TranselateTur,
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
export default i18n;
