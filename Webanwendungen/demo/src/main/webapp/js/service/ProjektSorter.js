import { ProjektService } from "./ProjektService.js";

export class ProjektSorter {

    static sortiereNachStartdatum(projekte) {
        return [...projekte].sort((a, b) => a.startdatum - b.startdatum);
    }

    static sortiereNachProjektlaufzeit(projekte, artefakte, projektArtefakte) {
        return [...projekte].sort((a, b) =>  {
            const laufzeitA = ProjektService.berechneProjektlaufzeit(a.id, artefakte, projektArtefakte)
            const laufzeitB = ProjektService.berechneProjektlaufzeit(b.id, artefakte, projektArtefakte)

            return laufzeitA - laufzeitB;
        });
    }
}