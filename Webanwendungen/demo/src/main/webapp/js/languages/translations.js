export const translations = new Map([
    ["de", new Map([
        ["username", "Benutzername"],
        ["password", "Passwort"],
        ["login", "Login"],
        ["register", "Registrieren"],
        ["newHere", "Neu hier?"],

        ["project", "Projekt"],
        ["projects", "Projekte"],
        ["projectOverview", "Projektübersicht"],
        ["newProject", "Neues Projekt"],

        ["shortDescription", "Kurzbeschreibung"],
        ["description", "Beschreibung"],
        ["topic", "Thema"],
        ["goals", "Ziele"],
        ["comments", "Kommentare"],
        ["content", "Inhalt"],

        ["projectLeader", "Projektleiter"],
        ["startDate", "Startdatum"],
        ["endDate", "Enddatum"],

        ["logoSelect", "Logo auswählen"],
        ["create", "Erstellen"],
        ["viewProject", "Zum Projekt"],
        ["filter", "Filter"],

        ["imprint", "Impressum"],
        ["privacyPolicy", "Datenschutzerklärung"],
        ["disclaimer", "Haftungsausschluss"],
        ["contact", "Kontakt"],
        ["backToTop", "Zurück zum Anfang"]
    ])],

    ["en", new Map([
        ["username", "Username"],
        ["password", "Password"],
        ["login", "Login"],
        ["register", "Register"],
        ["newHere", "New here?"],

        ["project", "Project"],
        ["projects", "Projects"],
        ["projectOverview", "Project Overview"],
        ["newProject", "New Project"],

        ["shortDescription", "Short Description"],
        ["description", "Description"],
        ["topic", "Topic"],
        ["goals", "Goals"],
        ["comments", "Comments"],
        ["content", "Contents"],

        ["projectLeader", "Project Leader"],
        ["startDate", "Start Date"],
        ["endDate", "End Date"],

        ["logoSelect", "Select Logo"],
        ["create", "Create"],
        ["viewProject", "View Project"],
        ["filter", "Filter"],

        ["imprint", "Legal Notice"],
        ["privacyPolicy", "Privacy Policy"],
        ["disclaimer", "Disclaimer"],
        ["contact", "Contact"],
        ["backToTop", "Back to Top"]
    ])]
]);

var current_language = "en";

/**
 * 
 * @param {string} lang_id 
 */
export function setLanguage(lang_id) {

    if (translations.has(lang_id)) {
        current_language = lang_id
    }
    else {
        console.warn("Unknown language: ", lang_id);
    }

}

export function translate(key) {
    const selectedLanguage = translations.get(current_language);

    if (!selectedLanguage) {
        return key;
    }

    return selectedLanguage.get(key) ?? key;
}