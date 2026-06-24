import { Project } from "../model/project.js";
import { TaskArea } from "../model/taskArea.js";
import { Artifact } from "../model/artifact.js"


export function loadProjects() {
    return fetch("/myapp/js/data/projects.json")
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

            console.log("Aufgabe 3:");
            console.log("Project objects:", projects);
            return projects;
        })
        .catch(error => {
            console.error("Failed to load projects:", error)
        });
}

export function loadTaskAreas() {
    return fetch("/myapp/js/data/tasks.json")
        .then(response => response.json())
        .then(data => {
            console.log("Aufgabe 2:");
            console.log("Loaded task areas:", data);

            const tasks = data.map(p => new TaskArea(
                p.id,
                p.name,
                p.shortdesc,
                p.longdesc,
                p.planedtime,
                p.realtime,
                p.taskid
            )
            );

            console.log("Aufgabe 3:");
            console.log("Task objects:", tasks)
        })
        .catch(error => {
            console.error("Failed to load task areas:", error);
        });
}

export function loadArtifacts() {
    return fetch("/myapp/js/data/artifacts.json")
        .then(response => response.json())
        .then(data => {
            console.log("Aufgabe 2:");
            console.log("Loaded artifacts:", data);

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

            console.log("Aufgabe 3:");
            console.log("Artifact object:", artifacts)
        })
        .catch(error => {
            console.error("Failed to load artifacts:", error);
        });
}

const API_URL = "https://scl.fh-bielefeld.de/WBA/projectsAPI";
const STORAGE_KEY = "pendingData";

export function sendProjectData(project, taskArea, artifact) {
    const data = {
        project: project,
        taskArea: taskArea,
        artifact: artifact
    };

    console.log("Sending data to API....");

    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            console.log("API status:", response.status);

            if (!response.ok) {
                console.warn("API request failed. Saving data locally.");
                saveDataLocally(data);
                return false;
            }

            console.log("Data successfully sent.");

            localStorage.removeItem(STORAGE_KEY);
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

function saveDataLocally(data) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

    console.log("Data stored in LocalStorage.");
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
}

export function resendStoredData() {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) {
        console.log("No stored data found.");
        return;
    }

    console.log("Stored data found. Trying to resend....");

    const data = JSON.parse(storedData);

    sendProjectData(
        data.project,
        data.taskArea,
        data.artifact
    );
}