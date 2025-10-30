import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const initPromise = i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    ns: ["main", "projects"],
    // defaultNS: ["projects", "main"],
    lng: "en",
    // debug: true,
    backend: {
      // for github pages correct URL without /public "https://antonsoloviev.github.io/prime-mechatronics/locales/{{lng}}/{{ns}}.json"

      //for local URL with /public "http://localhost:5173/prime-mechatronics/public/locales/{{lng}}/{{ns}}.json"

      loadPath: () => {
        // check the domain
        const host = window.location.host;
        return (
          (host === "localhost:5173"
            ? "/prime-mechatronics/public"
            : "/prime-mechatronics") + "/locales/{{lng}}/{{ns}}.json"
        );
      },
    },
  });

export { initPromise };
export default i18n;
