export class ProjektAufgabenbereich {

    /**
     * 
     * @param {int} id 
     * @param {int} projektId 
     * @param {int} aufgabenbereichId 
     */
    constructor(id, projektId, aufgabenbereichId) {
        this.id = id;
        this.projektId = projektId;
        this.aufgabenbereichId = aufgabenbereichId;
    }
}