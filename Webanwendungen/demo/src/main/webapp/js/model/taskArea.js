export class TaskArea {


    /**
     *
     * @param {int} id
     * @param {string} titel
     * @param {string} kurzbeschreibung
     */
    constructor(id, title, shortDescription, projectId) {
        this._id = id;
        this._title = title;
        this._shortDescription = shortDescription;
        this._projectId = projectId;
    }

    get id() { return this._id; }
    get projectId() { return this._projectId; }

    get title() { return this._title; }
    set title(value) { this._title = value; }


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

    get_artifacts(artifacts) {
        return artifacts.filter(x => x.taskAreaId === this.id);
    }
}