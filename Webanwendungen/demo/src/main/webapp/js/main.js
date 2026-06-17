
import { projects, artifacts, projectArtifacts } from "./testdata.js";
import { ProjectService } from "./service/ProjectService.js";
import { ProjectSorter } from "./service/ProjectSorter.js";
import { translate, setLanguage } from "./languages/translations.js";

console.log(
    "Laufzeit Projekt 1:",
    ProjectService.calculateProjectDuration(
        1,
        artifacts,
        projectArtifacts
    ),
    ProjectService.calculateCurrentProjectDuration(
        1,
        artifacts,
        projectArtifacts
    )
);

console.log(
    "Laufzeit Projekt 2:",
    ProjectService.calculateProjectDuration(
        2,
        artifacts,
        projectArtifacts
    ),
    ProjectService.calculateCurrentProjectDuration(
        2,
        artifacts,
        projectArtifacts
    )
);

console.log(
    "Laufzeit Projekt 3:",
    ProjectService.calculateProjectDuration(
        3,
        artifacts,
        projectArtifacts
    ),
    ProjectService.calculateCurrentProjectDuration(
        3,
        artifacts,
        projectArtifacts
    )
);

console.log("Sortiert nach Startdatum:");
console.table(
    ProjectSorter.sortByStartDate(projects)
);

console.log("Sortiert nach Projektlaufzeit:");
console.table(
    ProjectSorter.sortByProjectDuration(
        projects,
        artifacts,
        projectArtifacts
    )
);


const lang_keys = [
    "project",
    "imprint",
    "projectLeader",
    "unknownKey"
]

console.log("=== Default language");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));

console.log("=== English");
setLanguage("en");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));

console.log("=== German");
setLanguage("de");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));

console.log("=== Unknown");
setLanguage("un");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));


setLanguage("en");
function initializeTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = translate(key);
  });
}

initializeTranslations();