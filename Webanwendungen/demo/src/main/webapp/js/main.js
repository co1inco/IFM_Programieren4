
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


// resendStoredData();


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


await resendStoredData();


await sendProjectData(testProject, testTaskArea, testArtifact);
