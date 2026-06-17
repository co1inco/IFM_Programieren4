export class Artifact {


    /**
     *
     * @param {int} id
     * @param {string} titel
     * @param {string} kurzbeschreibung
     * @param {int} aufgabenbereichId
     * @param {float} geplanteArbeitszeit
     */
    constructor(id, title, shortDescription, taskAreaId, plannedWorkingTime) {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.taskAreaId = taskAreaId;
        this.plannedWorkingTime = plannedWorkingTime;
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