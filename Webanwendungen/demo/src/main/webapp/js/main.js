import { artefakte, projektArtefakte } from "./testdaten.js";
import { ProjektService } from "./service/ProjektService.js";
import { projekte } from "./testdaten.js";
import { ProjektSorter } from "./service/ProjektSorter.js";
import { translate } from "./languages/translations.js";

console.log(
    "Projekt 1:",
    ProjektService.berechneProjektlaufzeit(
        1,
        artefakte,
        projektArtefakte
    )
);

console.log(
    "Projekt 2:",
    ProjektService.berechneProjektlaufzeit(
        2,
        artefakte,
        projektArtefakte
    )
);

console.log(
    "Projekt 3:",
    ProjektService.berechneProjektlaufzeit(
        3,
        artefakte,
        projektArtefakte
    )
);

console.log("Sortiert nach Startdatum:");
console.table(
    ProjektSorter.sortiereNachStartdatum(projekte)
);

console.log("Sortiert nach Projektlaufzeit:");
console.table(
    ProjektSorter.sortiereNachProjektlaufzeit(
        projekte,
        artefakte,
        projektArtefakte
    )
);

console.log("Deutsch:", translate("de", "project"));
console.log("Englisch:", translate("en", "project"));
console.log("Unbekannter Schlüssel:", translate("de", "unknownKey"));

console.log("Deutsch:", translate("de", "imprint"));
console.log("Englisch:", translate("en", "imprint"));

console.log("Deutsch:", translate("de", "projectLeader"));
console.log("Englisch:", translate("en", "projectLeader"));