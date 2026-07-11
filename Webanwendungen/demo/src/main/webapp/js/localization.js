import { setLanguage as applyLanguage } from "./languages/translations.js";

window.setLanguage = applyLanguage;

await window.setLanguage("en");
