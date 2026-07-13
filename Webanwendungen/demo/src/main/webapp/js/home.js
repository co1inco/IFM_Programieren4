
import { loadHomeProjects } from './api/projectApi.js'

loadHomeProjects()
    .then(p => {
        const projectList = document.getElementById("project-list");

        p.forEach(project => {
            // <li>Smart Campus Navigator <a href="project/1">hier</a></li>
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = `project?id=${project.id}`;
            a.textContent = 'hier';

            li.textContent = project.title + "  ";
            li.appendChild(a);

            projectList.appendChild(li);
        });
        
        console.log("projects loaded");
    })
    .catch(ex => {
        console.error("Failed to load projects:", ex);
    });