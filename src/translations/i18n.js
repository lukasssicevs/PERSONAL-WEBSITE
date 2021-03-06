import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_LV } from "./lv/translations";
import { TRANSLATIONS_RU } from "./ru/translations";

i18n
  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      lv: {
        translation: TRANSLATIONS_LV,
      },
      ru: {
        translation: TRANSLATIONS_RU,
      },
    },
  });

export { i18n };
