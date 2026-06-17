export class Projekt {

    constructor(id, titel, kurzbeschreibung, logoPfad, startdatum) {
        this.id = id;
        this.titel = titel;
        this.kurzbeschreibung = kurzbeschreibung;
        this.logoPfad = logoPfad;
        this.startdatum = new Date(startdatum)
    }
}