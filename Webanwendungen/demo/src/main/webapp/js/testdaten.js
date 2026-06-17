import { Projekt } from "./model/Projekt.js";
import { Aufgabenbereich } from "./model/Aufgabenbereich.js";
import { Artefakt } from "./model/Artefakt.js";
import { ProjektAufgabenbereich } from "./model/ProjektAufgabenbereich.js";
import { ProjektArtefakt} from "./model/ProjektArtefakt.js";

export const projekte = [
    new Projekt(1, "Smart Campus Navigator", "Navigation und Raumverwaltung für den Hochschulcampus", "src/main/webapp/res/project/1_logo.png", "2026-04-01"),
    new Projekt(2, "Parkplatz Survival", "Inteligente Parkplatzsuche für den Hochschulcampus", "src/main/webapp/res/project/2_logo.png", "2026-05-10"),
    new Projekt(3, "Campus Flohmarkt", "Online Flohmarkt für Studierende.", "", "2026-03-15")
];

export const aufgabenbereiche = [
    new Aufgabenbereich(1, "Frontend", "Benutzeroberfläche und Darstellung der Anwendung."),
    new Aufgabenbereich(2, "Backend", "Serverlogik und Datenverarbeitung"),
    new Aufgabenbereich(3, "Design", "Gestaltung und Benutzerführung der Anwendung.")

];

export const artefakte = [
    new Artefakt(1, "Startseite", "Gestaltung der Startseite mit Projektübersicht.", 1, 10 ),
    new Artefakt(2, "Projektformular", "Formular zum Anlegen neuer Projekte.", 1, 6),

    new Artefakt(3, "Parkplatzkarte", "Darstellung freier Parkplatzflächen auf dem Campus.", 1, 7),
    new Artefakt(4, "Auslastungslogik", "Berechnung der geschätzten Parkplatz Auslastung.", 2, 8),

    new Artefakt(5, "Angebotsliste", "Liste aller verfügbaren Flohmarkt Angebote", 1, 4),
    new Artefakt(6, "Suchfunktion", "Suche nach Artikeln und Kategerion.", 2, 6)
];

export const projektAufgabenbereiche = [
    new ProjektAufgabenbereich(1, 1, 1),
    new ProjektAufgabenbereich(2, 1, 3),

    new ProjektAufgabenbereich(3, 2, 1),
    new ProjektAufgabenbereich(4, 2, 2),

    new ProjektAufgabenbereich(5, 2, 1),
    new ProjektAufgabenbereich(6, 3, 2),
];

export const projektArtefakte = [
    new ProjektArtefakt(1, 1, 1, 6),
    new ProjektArtefakt(2, 1, 2, 7),

    new ProjektArtefakt(3, 2, 3, 9),
    new ProjektArtefakt(4, 2, 4, 10,),

    new ProjektArtefakt(5, 3, 5, 5),
    new ProjektArtefakt(6, 3, 6, 7)
];