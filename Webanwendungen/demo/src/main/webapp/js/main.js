
import { projects, artifacts, projectArtifacts } from "./testdata.js";
import { ProjectService } from "./service/ProjectService.js";
import { ProjectSorter } from "./service/ProjectSorter.js";
import { translate, setLanguage } from "./languages/translations.js";

// make sure setLanguage is available to the buttons
window.setLanguage = setLanguage;

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


console.log("--- Getter / Setter Test ---");
const testProject = projects[0];

console.log("Kurzbeschreibung:");
console.log(testProject.shortDescription);

testProject.shortDescription = "Neue Beschreibung für das Projekt";

console.log("Neue Beschreibung:", testProject.shortDescription);

try {
    testProject.shortDescription = "a".repeat(300);
}
catch (error) {
    console.log("Setter funktioniert:");
    console.log(error.message);
}

console.log("--- String Validation Test ---");

try {
    testProject.shortDescription = 123;
}
catch (error) {
    console.log(error.message);
}


const lang_keys = [
    "project",
    "imprint",
    "projectLeader",
    "unknownKey"
]

console.log("=== Default language");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));

console.log("=== English");
await setLanguage("en");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));

console.log("=== German");
await setLanguage("de");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));

console.log("=== Unknown");
await setLanguage("un");
lang_keys.forEach(k => console.log(k, ": ", translate(k)));

await setLanguage("de");
