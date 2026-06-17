
export class ProjektService {

    /**
     * Calculate the estimate total runtime of a project based on the project artifacts
     * @param {int} projektId relevant project
     * @param {Artefakt[]} artefakte artifacts table
     * @param {ProjektArtefakt[]} projektArtefakte project <-> artifacts join table
     * @returns 
     */
    static berechneProjektlaufzeit(projektId, artefakte, projektArtefakte) {
        return projektArtefakte
            .filter(x => x.projektId === projektId)
            .map(x => artefakte
                .find(a => a.id === x.artefaktId)
                ?.geplanteArbeitszeit ?? 0)
            .reduce((p, a) => p + a, 0);
    }
}