import { Project } from "./model/project.js";
import { TaskArea } from "./model/taskArea.js";
import { Artifact } from "./model/artifact.js";
import { ProjectTaskArea } from "./model/projectTaskArea.js";
import { ProjectArtifact } from "./model/projectArtifact.js";

export const projects = [
    new Project(
        1,
        "Smart Campus Navigator",
        "Navigation und Raumverwaltung für den Hochschulcampus",
        "Ausführliche Beschreibung zum Smart Campus Navigator.",
        "src/main/webapp/res/project/1_logo.png",
        "Max Mustermann",
        "2026-04-01",
        "2026-08-01"
    ),

    new Project(
        2,
        "Parkplatz Survival",
        "Intelligente Parkplatzsuche für den Hochschulcampus",
        "Ausführliche Beschreibung zur Parkplatzsuche auf dem Campus.",
        "src/main/webapp/res/project/2_logo.png",
        "Erika Musterfrau",
        "2026-05-10",
        "2026-09-10"
    ),

    new Project(
        3,
        "Campus Flohmarkt",
        "Online Flohmarkt für Studierende.",
        "Ausführliche Beschreibung zum Campus Flohmarkt.",
        "",
        "Studi Team",
        "2026-03-15",
        "2026-07-15"
    )
];

export const taskAreas = [
    new TaskArea(
        1,
        "Frontend",
        "Benutzeroberfläche und Darstellung der Anwendung.",
        "Umsetzung aller sichtbaren Oberflächen und Interaktionen.",
        "20:00",
        "18:30",
        1
    ),

    new TaskArea(
        2,
        "Backend",
        "Serverlogik und Datenverarbeitung",
        "Implementierung der Geschäftslogik und Datenverarbeitung.",
        "25:00",
        "27:15",
        2
    ),

    new TaskArea(
        3,
        "Design",
        "Gestaltung und Benutzerführung der Anwendung.",
        "Entwicklung des Layouts, der Farben und der Benutzerführung.",
        "12:00",
        null,
        3
    )
];

export const artifacts = [
    new Artifact(
        1,
        "Startseite",
        "Gestaltung der Startseite mit Projektübersicht.",
        "Die Startseite stellt die wichtigsten Informationen übersichtlich dar.",
        "10:00",
        "11:00",
        1
    ),

    new Artifact(
        2,
        "Projektformular",
        "Formular zum Anlegen neuer Projekte.",
        "Das Formular enthält Eingabefelder für Titel, Beschreibung, Ziele und Logo.",
        "6:00",
        "7:00",
        1
    ),

    new Artifact(
        3,
        "Parkplatzkarte",
        "Darstellung freier Parkplatzflächen auf dem Campus.",
        "Eine Kartenansicht zeigt verfügbare Parkflächen auf dem Hochschulgelände.",
        "7:00",
        "9:00",
        1
    ),

    new Artifact(
        4,
        "Auslastungslogik",
        "Berechnung der geschätzten Parkplatzauslastung.",
        "Die Auslastung wird anhand vorhandener Daten geschätzt.",
        "8:00",
        "10:00",
        2
    ),

    new Artifact(
        5,
        "Angebotsliste",
        "Liste aller verfügbaren Flohmarkt-Angebote.",
        "Alle Angebote werden übersichtlich mit Titel und Kurzbeschreibung angezeigt.",
        "4:00",
        "5:00",
        1
    ),

    new Artifact(
        6,
        "Suchfunktion",
        "Suche nach Artikeln und Kategorien.",
        "Die Suchfunktion filtert Angebote nach Begriffen und Kategorien.",
        "6:00",
        "7:00",
        2
    )
];

export const projectTaskAreas = [
    new ProjectTaskArea(1, 1, 1),
    new ProjectTaskArea(2, 1, 3),

    new ProjectTaskArea(3, 2, 1),
    new ProjectTaskArea(4, 2, 2),

    new ProjectTaskArea(5, 3, 1),
    new ProjectTaskArea(6, 3, 2)
];

export const projectArtifacts = [
    new ProjectArtifact(1, 1, 1, "6:00"),
    new ProjectArtifact(2, 1, 2, "7:00"),

    new ProjectArtifact(3, 2, 3, "9:00"),
    new ProjectArtifact(4, 2, 4, "10:00"),

    new ProjectArtifact(5, 3, 5, "5:00"),
    new ProjectArtifact(6, 3, 6, "7:00")
];