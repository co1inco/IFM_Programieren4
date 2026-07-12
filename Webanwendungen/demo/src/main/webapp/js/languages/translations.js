
var current_language = "en";

const path = "/myapp/js/languages/";
var current_translations = new Map();

function loadTranslation(lang_id) {
    return fetch(path + lang_id + ".json")
        .then(response => response.json())
        .then(translation => {
            current_translations = new Map(Object.entries(translation));
        })
        .catch(ex => {
            console.error("Failed to load translation: ", ex);

            if (lang_id !== 'en-US') {
                loadTranslation('en-US');
            }
        });
}

function initializeTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = translate(key);
  });
}

/**
 * 
 * @param {string} lang_id 
 */
export async function setLanguage(lang_id) {
    await loadTranslation(lang_id);
    initializeTranslations();
}

export function translate(key) {
    return current_translations.get(key) ?? key;
}