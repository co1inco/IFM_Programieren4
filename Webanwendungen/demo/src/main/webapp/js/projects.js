import { loadProjects } from "./api/projectApi.js";
import { ProjectSorter } from "./service/projectSorter.js";

const projects = await loadProjects();

projects.forEach(project => {
    const durationMs = project.endDate - project.startDate;
    project.projectDuration =
        durationMs / (1000 * 60 * 60 * 24);
});

const projectList = document.getElementById("project-list");
const sortSelect = document.getElementById("sortSelect");

function renderProjects(projectsToRender) {
    projectList.innerHTML = "";

    projectsToRender.forEach(project => {
        const li = document.createElement("li");
        li.className = "project-card";

        li.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
            </div>

            <div class="project-content">
                <span>${project.shortDescription}</span>
            </div>

            <div class="project-footer">
                <a href="project.html?id=${project.id}">Zum Projekt</a>
            </div>
        `;

        projectList.appendChild(li);
    });
}

renderProjects(projects);

sortSelect.addEventListener("change", () => {
    let sortedProjects;

    if (sortSelect.value === "start") {
        sortedProjects = ProjectSorter.sortByStartDate(projects);
    } else {
        sortedProjects = ProjectSorter.sortByProjectDuration(projects);
    }

    console.log("Sortierung:", sortSelect.value);

    sortedProjects.forEach(project => {
        console.log(
            project.title,
            "| Start:",
            project.startDate,
            "| Laufzeit:",
            project.projectDuration
        );
    });

    renderProjects(sortedProjects);
});