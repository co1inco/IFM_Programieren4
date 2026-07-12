import { setLanguage as applyLanguage } from "./languages/translations.js";

window.setLanguage = applyLanguage;

const browser_lang = navigator.language;
console.log("Detected language:", browser_lang);
await window.setLanguage(browser_lang);
