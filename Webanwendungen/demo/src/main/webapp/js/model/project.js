export class Project {


    /**
     *
     * @param {int} id
     * @param {string} titel
     * @param {string} kurzbeschreibung
     * @param {string} logoPfad
     * @param {Date} startdatum
     */
    constructor(id, title, shortDescription, logoPath, startDate) {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.logoPath = logoPath;
        this.startDate = new Date(startDate);
    }

    get shortDescription() {
        return this._shortDescription;
    }

    set shortDescription(value) {
        if (value.length > 255) {
            throw new Error("Short description must not exceed 255 characters.");
        }

        this._shortDescription = value;
    }
}