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
        this._id = id;
        this._title = title;
        this._shortDescription = shortDescription;
        this._logoPath = logoPath;
        this._startDate = new Date(startDate);
    }

    get id() { return this._id; }

    get title() { return this._title; }
    set title(value) { this._title = value; }

    get logoPath() { return this._logoPath; }
    set logoPath(value) { this._logoPath = value; }
    
    get startDate() { return this._startDate; }
    set startDate(value) { this._startDate = value; }

    get shortDescription() {
        return this._shortDescription;
    }

    set shortDescription(value) {

        if (typeof value !== "string") {
            throw new Error("Short description must be a string.");
        }

        if (value.length > 255) {
            throw new Error("Short description must not exceed 255 characters.");
        }

        this._shortDescription = value;
    }
}