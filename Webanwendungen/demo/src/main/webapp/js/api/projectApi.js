import { Project } from "../model/project.js";
import { TaskArea } from "../model/taskArea.js";
import { Artifact } from "../model/artifact.js"


const API_URL = "/WBA/projectsAPI";
// const API_URL = "https://scl.fh-bielefeld.de/WBA/projectsAPI";
const STORAGE_KEY = "pendingData";


export function loadProjects() {
    return fetch("/myapp/api/projects.json")
        .then(response => response.json())
        .then(data => {

            console.log("Aufgabe 1:");
            console.log("Loaded projects:", data);

            const projects = data.map(p => new Project(
                p.id,
                p.name,
                p.shortdesc,
                p.longdesc,
                p.logourl,
                p.maintainer,
                p.start,
                p.end
            )
            );

            // console.log("Aufgabe 3:");
            // console.log("Project objects:", projects);
            return projects;
        })
        .catch(error => {
            console.error("Failed to load projects:", error)
        });
}

export function loadTaskAreas() {
    return fetch("/myapp/api/tasks.json")
        .then(response => response.json())
        .then(data => {
            console.log("Aufgabe 2: Loaded task areas:", data);

            const tasks = data.map(p => new TaskArea(
                p.id,
                p.name,
                p.shortdesc,
                p.project
            ));

            // console.log("Aufgabe 3:");
            // console.log("Task objects:", tasks)
            return tasks;
        })
        .catch(error => {
            console.error("Failed to load task areas:", error);
        });
}

export function loadArtifacts() {
    return fetch("/myapp/api/artifacts.json")
        .then(response => response.json())
        .then(data => {
            console.log("Aufgabe 2: Loaded artifacts:", data);
            
            const artifacts = data.map(p => new Artifact(
                p.id,
                p.name,
                p.shortdesc,
                p.longdesc,
                p.planedtime,
                p.realtime,
                p.taskid
            )
            );

            // console.log("Aufgabe 3:");
            // console.log("Artifact object:", artifacts)
            return artifacts;
        })
        .catch(error => {
            console.error("Failed to load artifacts:", error);
        });
}


function saveDataLocally(data) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

    console.log("Data stored in LocalStorage.");
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

function loadDataLocally() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (!storedData) {
        // console.log("Local storage empty");
        return null;
    }

    // console.log("Local storage: ", storedData);
    return JSON.parse(storedData);
}

export function sendProjectData(projects, taskArea, artifact) {
    projects = Array.isArray(projects) ? projects : [projects];
    taskArea = Array.isArray(taskArea) ? taskArea : [taskArea];
    artifact = Array.isArray(artifact) ? artifact : [artifact];

    const local_data = loadDataLocally();
    const data = {
        projects: [...local_data?.projects ?? [], ...projects ],
        tasks: [...local_data?.tasks ?? [], ...taskArea ],
        artifacts: [...local_data?.artifacts ?? [], ...artifact]
    }

    console.log("Sending data to API....", data);

    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        mode: "cors"
    })
        .then(response => {
            console.log("API status:", response.status);

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            console.log("Data successfully sent.");

            localStorage.removeItem(STORAGE_KEY);
            // console.log("Removed?: ", JSON.parse(localStorage.getItem(STORAGE_KEY)));
            console.log("Stored data removed from LocalStorage.");

            return true;
        })
        .catch(error => {
            console.warn("API unavailable. Saving data locally.");
            console.error(error);

            saveDataLocally(data);

            return false;
        });
}



export function resendStoredData() {
    const storedData = loadDataLocally();
    if (!storedData) {
        console.log("No stored data found.");
        return;
    }

    console.log("Stored data found. Trying to resend....");

    return sendProjectData([], [], []);
}