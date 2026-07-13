import { Project } from "../model/project.js";
import { TaskArea } from "../model/taskArea.js";
import { Artifact } from "../model/artifact.js"


// const API_URL = "/myapp/api";
const API_URL = "http://localhost:8080/SmartData/smartdata/records";
// const API_URL = "/SmartData/smartdata/records";
const STATISTIC_URL = "/myapp/data/statistic";
// const API_URL = "https://scl.fh-bielefeld.de/WBA/projectsAPI";
// const API_URL = "https://scl.fh-bielefeld.de/WBA";
const STORAGE_KEY = "pendingData";

const get_options = {
    method: "GET",
    // mode: "no-cors",
    credentials: 'same-origin',
    cache: "no-store"
}

export function loadArtifactRealtimeStatistics() {
    return fetch(STATISTIC_URL + "/minmaxspan/artifact/realtime", get_options)
        .then(response => response.json())
        .then(data => {
            //console.log("Artifact realtime statistics:", data);
            return data;
        })
        .catch(error => {
            console.error("Failed to load artifact statistics:", error);
        });
}

function loadData(endpoint, callback) {
    return fetch(API_URL + endpoint, get_options)
        .then(response => response.json())
        .then(data => {
            return callback(data);
        })
        .catch(error => {
            console.error("Failed to load: ", endpoint, error)
        });
}


export async function loadProjects() {
    const projects = await loadData(
        "/project", 
        data => data.records.map(p => new Project(
            p.id,
            p.title,
            p.shortdescription,
            p.longdescription,
            p.logo,
            p.primaryresponsible,
            p.startdate,
            p.enddate
        )));

    return projects;
}

export async function loadHomeProjects() {
    return await loadData(
        "/project?order=startdate,DESC&size=3", 
        data => data.records.map(p => new Project(
            p.id,
            p.title,
            p.shortdescription,
            p.longdescription,
            p.logo,
            p.primaryresponsible,
            p.startdate,
            p.enddate
        )));
}

export function loadTaskAreas() {
    return loadData(
        "/task", 
        data => data.records.map(p => new TaskArea(
            p.id,
            p.shortdescription,
            p.longdescription,
            p.projectid
        )));
}

export function loadArtifacts() {
    return loadData(
        "/artifact", 
        data => data.records.map(p => new Artifact(
            p.id,
            p.title,
            p.shortdescription,
            p.longdescription,
            p.planedworkingtime,
            p.realtime,
            p.taskid
        )));
}



function saveDataLocally(data) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

    //console.log("Data stored in LocalStorage.");
    //console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
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

    //console.log("Sending data to API....", data);

    return fetch(API_URL + "/projectsAPI", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        mode: "no-cors",
        credentials: 'same-origin'
    })
        .then(response => {
            //console.log("API status:", response.status);

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            //console.log("Data successfully sent.");

            localStorage.removeItem(STORAGE_KEY);
            // console.log("Removed?: ", JSON.parse(localStorage.getItem(STORAGE_KEY)));
            //console.log("Stored data removed from LocalStorage.");

            return true;
        })
        .catch(error => {
            //console.warn("API unavailable. Saving data locally.");
            //console.error(error);

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