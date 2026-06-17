export class ProjektArtefakt {

    /**
     * 
     * @param {int} id 
     * @param {int} projektId 
     * @param {int} artefaktId 
     * @param {float} tatsaechlicheArbeitszeit 
     */
    constructor(id, projektId, artefaktId, tatsaechlicheArbeitszeit) {
        this.id = id;
        this.projektId = projektId;
        this.artefaktId = artefaktId;
        this.tatsaechlicheArbeitszeit = tatsaechlicheArbeitszeit;
    }
}