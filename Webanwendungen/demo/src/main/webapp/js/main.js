
// import { projects, artifacts, projectArtifacts } from "./testdata.js";
import { ProjectService } from "./service/ProjectService.js";
import { ProjectSorter } from "./service/ProjectSorter.js";
import { translate, setLanguage } from "./languages/translations.js";
import { loadProjects, loadTaskAreas, loadArtifacts } from "./api/projectApi.js"

import { sendProjectData } from "./api/projectApi.js";
import { Project } from "./model/Project.js";
import { TaskArea } from "./model/taskArea.js";
import { Artifact } from "./model/artifact.js";

import { resendStoredData } from "./api/projectApi.js";

const projects = await loadProjects();
console.log("Aufgabe 3: Projects: ", projects);
const taskAreas = await loadTaskAreas();
console.log("Aufgabe 3: TaskAreas: ", taskAreas);
const artifacts = await loadArtifacts();
console.log("Aufgabe 3: Artifacts", artifacts);

console.log("Project 1 artifacts", projects[0].get_artifacts(taskAreas, artifacts));
console.log("Project 2 artifacts", projects[1].get_artifacts(taskAreas, artifacts));
console.log("Project 3 artifacts", projects[2].get_artifacts(taskAreas, artifacts));


const testProject = new Project(
    99,
    "Testprojekt",
    "Blabla",
    "Blablabla",
    "",
    "Colin und Jan",
    "2026-06-24",
    "2026-7-01"
);

const testTaskArea = new TaskArea(
    100,
    "Testaufgabe",
    "WBA Aufgabe",
    "Javascript",
    "2:00",
    null,
    100
);

const testArtifact = new Artifact(
    101,
    "testartefakt",
    "Kurz",
    "Lang",
    "1:00",
    null,
    101
);

resendStoredData();

sendProjectData(testProject, testTaskArea, testArtifact)



/*
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
 */
