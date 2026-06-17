import { Project } from "./model/project.js";
import { TaskArea } from "./model/taskArea.js";
import { Artifact } from "./model/artifact.js";
import { ProjectTaskArea } from "./model/projectTaskArea.js";
import { ProjectArtifact} from "./model/projectArtifact.js";

export const projects = [
    new Project(1, "Smart Campus Navigator", "Navigation und Raumverwaltung für den Hochschulcampus", "src/main/webapp/res/project/1_logo.png", "2026-04-01"),
    new Project(2, "Parkplatz Survival", "Inteligente Parkplatzsuche für den Hochschulcampus", "src/main/webapp/res/project/2_logo.png", "2026-05-10"),
    new Project(3, "Campus Flohmarkt", "Online Flohmarkt für Studierende.", "", "2026-03-15")
];

export const taskAreas = [
    new TaskArea(1, "Frontend", "Benutzeroberfläche und Darstellung der Anwendung."),
    new TaskArea(2, "Backend", "Serverlogik und Datenverarbeitung"),
    new TaskArea(3, "Design", "Gestaltung und Benutzerführung der Anwendung.")

];

export const artifacts = [
    new Artifact(1, "Startseite", "Gestaltung der Startseite mit Projektübersicht.", 1, 10 ),
    new Artifact(2, "Projektformular", "Formular zum Anlegen neuer Projekte.", 1, 6),

    new Artifact(3, "Parkplatzkarte", "Darstellung freier Parkplatzflächen auf dem Campus.", 1, 7),
    new Artifact(4, "Auslastungslogik", "Berechnung der geschätzten Parkplatz Auslastung.", 2, 8),

    new Artifact(5, "Angebotsliste", "Liste aller verfügbaren Flohmarkt Angebote", 1, 4),
    new Artifact(6, "Suchfunktion", "Suche nach Artikeln und Kategerion.", 2, 6)
];

export const projectTaskArea = [
    new ProjectTaskArea(1, 1, 1),
    new ProjectTaskArea(2, 1, 3),

    new ProjectTaskArea(3, 2, 1),
    new ProjectTaskArea(4, 2, 2),

    new ProjectTaskArea(5, 2, 1),
    new ProjectTaskArea(6, 3, 2),
];

export const projectArtifacts = [
    new ProjectArtifact(1, 1, 1, 6),
    new ProjectArtifact(2, 1, 2, 7),

    new ProjectArtifact(3, 2, 3, 9),
    new ProjectArtifact(4, 2, 4, 10,),

    new ProjectArtifact(5, 3, 5, 5),
    new ProjectArtifact(6, 3, 6, 7)
];