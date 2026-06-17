
import { projects, artifacts, projectArtifacts } from "./testdata.js";
import { ProjectService } from "./service/ProjectService.js";
import { ProjectSorter } from "./service/ProjectSorter.js";
import { translate } from "./languages/translations.js";

console.log(
    "Projekt 1:",
    ProjectService.calculateProjectDuration(
        1,
        artifacts,
        projectArtifacts
    )
);

console.log(
    "Projekt 2:",
    ProjectService.calculateProjectDuration(
        2,
        artifacts,
        projectArtifacts
    )
);

console.log(
    "Projekt 3:",
    ProjectService.calculateProjectDuration(
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

console.log("Deutsch:", translate("de", "project"));
console.log("Englisch:", translate("en", "project"));
console.log("Unbekannter Schlüssel:", translate("de", "unknownKey"));

console.log("Deutsch:", translate("de", "imprint"));
console.log("Englisch:", translate("en", "imprint"));

console.log("Deutsch:", translate("de", "projectLeader"));
console.log("Englisch:", translate("en", "projectLeader"));


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