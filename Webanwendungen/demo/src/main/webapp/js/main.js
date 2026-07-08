
// import { projects, artifacts, projectArtifacts } from "./testdata.js";
import { ProjectService } from "./service/ProjectService.js";
import { ProjectSorter } from "./service/ProjectSorter.js";
import { translate, setLanguage } from "./languages/translations.js";

import { loadProjects, loadTaskAreas, loadArtifacts, loadArtifactRealtimeStatistics } from "./api/projectApi.js"

import { sendProjectData } from "./api/projectApi.js";
import { Project } from "./model/Project.js";
import { TaskArea } from "./model/taskArea.js";
import { Artifact } from "./model/artifact.js";

import { resendStoredData } from "./api/projectApi.js";


// resendStoredData();


const projects = await loadProjects();
//console.log("Aufgabe 3: Projects: ", projects);

const statistics = await loadArtifactRealtimeStatistics();
console.log("Blatt 9 statistics:", statistics);

projects.forEach(project => {
    console.log(project.title, project.startDate, project.endDate);

    project.min = statistics.min;
    project.max = statistics.max;
    project.span = statistics.Span;

    const durationMs = project.endDate - project.startDate;
    const durationDays = durationMs / (1000 * 60 * 60 * 24);

    project.projectDuration = durationDays;
});

console.log("Projects with statistics:", projects)

projects.forEach(project => {
    console.log("Project:", project);
});

// const taskAreas = await loadTaskAreas();
// console.log("Aufgabe 3: TaskAreas: ", taskAreas);
// const artifacts = await loadArtifacts();
// console.log("Aufgabe 3: Artifacts", artifacts);


//console.log("Project 1 artifacts", projects[0].get_artifacts(taskAreas, artifacts));
//console.log("Project 2 artifacts", projects[1].get_artifacts(taskAreas, artifacts));
//console.log("Project 3 artifacts", projects[2].get_artifacts(taskAreas, artifacts));




// await resendStoredData();
// await sendProjectData(testProject, testTaskArea, testArtifact);
