export class Projekt {

    /**
     * 
     * @param {int} id 
     * @param {string} titel 
     * @param {string} kurzbeschreibung 
     * @param {string} logoPfad 
     * @param {Date} startdatum 
     */
    constructor(id, titel, kurzbeschreibung, logoPfad, startdatum) {
        this.id = id;
        this.titel = titel;
        this.kurzbeschreibung = kurzbeschreibung;
        this.logoPfad = logoPfad;
        this.startdatum = new Date(startdatum)
    }
}