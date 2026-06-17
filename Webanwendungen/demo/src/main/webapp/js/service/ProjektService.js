export class ProjektService {

    static berechneProjektlaufzeit(projektId, artefakte, projektArtefakte) {
        let summe = 0;

        for (const projektArtefakt of projektArtefakte) {
            if (projektArtefakt.projektId == projektId) {
                const artefakt = artefakte.find(a => a.id === projektArtefakt.artefaktId);

                if (artefakt) {
                    summe += artefakt.geplanteArbeitszeit;
                }
            }
        }

        return summe;
    }
}