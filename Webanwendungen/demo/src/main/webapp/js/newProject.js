import { createProject } from "./api/projectApi.js";

const form = document.getElementById("newProjectForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const projectData = {
        title: formData.get("title"),
        primaryresponsible: formData.get("leader"),
        startdate: formData.get("start"),
        enddate: formData.get("end"),
        shortdescription: formData.get("topic"),
        longdescription: formData.get("description"),
        logo: ""
    };

    console.log("Ausgelesene Projektdaten:", projectData);

    try {
        const createdProject = await createProject(projectData);

        console.log("Gespeichertes Projekt:", createdProject);

        window.location.href = `/myapp/project.html?id=${createdProject}`;
        
    } catch (error) {
        console.error("Fehler beim Speichern:", error);
    }
});