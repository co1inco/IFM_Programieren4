export class Artefakt {

    /**
     * 
     * @param {int} id 
     * @param {string} titel 
     * @param {string} kurzbeschreibung 
     * @param {int} aufgabenbereichId 
     * @param {float} geplanteArbeitszeit 
     */
    constructor(id, titel, kurzbeschreibung, aufgabenbereichId, geplanteArbeitszeit) {
        this.id = id;
        this.titel = titel;
        this.kurzbeschreibung = kurzbeschreibung;
        this.aufgabenbereichId = aufgabenbereichId;
        this.geplanteArbeitszeit = geplanteArbeitszeit;
    }
}