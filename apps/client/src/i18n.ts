import i18n, { ResourceLanguage } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";

import enLanguage from "./locales/en/translation.json";
import ruLanguage from "./locales/ru/translation.json";
import { Locales } from "@utils/enums/common.enums";

const resources: { [key in Locales]: ResourceLanguage } = {
  [Locales.EN]: {
    translation: enLanguage,
  },
  [Locales.RU]: {
    translation: ruLanguage,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: [Locales.EN, Locales.RU],
    fallbackLng: Locales.EN,
    // lng: Locales.EN,
    detection: {
      order: [
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
