
import { loadProject, loadProjectTasks } from './api/projectApi.js'

const currentUrl = new URL(window.location.href);
const projectId = Number(currentUrl.searchParams.get("id"));

if (!projectId) {

    document.getElementById("projectTitle").innerText = "Invalid project"
    throw new Error("No or invalid project id");
}

const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
const parser = new DOMParser();

loadProject(projectId)
    .then(p => {

        document.getElementById("projectTitle").innerText = p.title;
        document.getElementById("projectLead").innerText = p.maintainer;
        document.getElementById("projectStartDate").innerText = p.startDate.toLocaleDateString("de-DE");
        document.getElementById("projectEndDate").innerText = p.endDate.toLocaleDateString("de-DE");
        document.getElementById("projectDescriptionShort").innerText = p.shortDescription;

        const description = parser.parseFromString(p.longDescription, "text/html");
        document.getElementById("projectDescriptionLong").appendChild(description.body);
        
    })
    .catch(ex => {
        document.getElementById("projectTitle").innerText = "Error: failed to load";
        console.error(ex);
    });

loadProjectTasks(projectId)
    .then(tasks => {
        const goalsList = document.getElementById("projectGoals");

        tasks.forEach(t => {
            const element = document.createElement("li");
            element.innerText = t.title;
            goalsList.appendChild(element);
        });

    })
    .catch(ex => {
        console.error("Failed to load tasks: ", ex);
    })