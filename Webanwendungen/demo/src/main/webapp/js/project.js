
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
        const body = description.body;
        loadHeaders(body);
        document.getElementById("projectDescriptionLong").appendChild(body);

        
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
    });


function loadHeaders(body) {
    
    const headers = Array.from(body.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .map(h => ({
            level: parseInt(h.tagName[1]),
            element: h
        }));

    if (headers.length === 0) {
        // console.log("No headers :(");
        return;
    }

    const headerStack = [];
    headerStack.push({
        level: 0,
        indexListElement: document.getElementById("descriptionIndex")
    });

    let headerID = 1;

    for (const h of headers) {

        // reduce the stack to the parent header (level lower than own)
        while (h.level <= headerStack[headerStack.length-1].level) {
            headerStack.pop();
        }

        // create new index element, add id to header, push to stack
        const link = document.createElement('a');
        link.href = `#desc_${headerID}`;
        link.textContent = h.element.textContent;

        const list = document.createElement('ul');

        const listElement = document.createElement("li");
        listElement.appendChild(link);
        listElement.appendChild(list);
        headerStack[headerStack.length-1].indexListElement.appendChild(listElement);

        h.element.id = `desc_${headerID}`;
        headerID++;
        
        headerStack.push({
            level: h.level,
            indexListElement: list
        });
    }

}