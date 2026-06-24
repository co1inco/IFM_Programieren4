export class Artifact {


    /**
     *
     * @param {int} id
     * @param {string} titel
     * @param {string} kurzbeschreibung
     * @param {int} aufgabenbereichId
     * @param {float} geplanteArbeitszeit
     */
    constructor(id, title, shortDescription, longDescription,plannedWorkingTime, realTime , taskAreaId) {
        this._id = id;
        this._title = title;
        this._shortDescription = shortDescription;
        this._longDescription = longDescription;
        this._plannedWorkingTime = plannedWorkingTime;
        this._realTime = realTime;
        this._taskAreaId = taskAreaId;
    }


    get id() { return this._id; }

    get title() { return this._title; }
    set title(value) { this._title = value; }

    get taskAreaId() { return this._taskAreaId; }
    set taskAreaId(value) { this._taskAreaId = value; }

    get plannedWorkingTime() { return this._plannedWorkingTime; }
    set plannedWorkingTime(value) { this._plannedWorkingTime = value; }

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