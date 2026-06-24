export class ProjectTaskArea {

    /**
     *
     * @param {int} id
     * @param {int} projektId
     * @param {int} aufgabenbereichId
     */
    constructor(id, projectId, taskAreaId) {
        this._id = id;
        this._projectId = projectId;
        this._taskAreaId = taskAreaId;
    }

    get id() { return this._id; }

    get projectId() { return this._projectId; }
    set projectId(value) { this._projectId = value; }

    get taskAreaId() { return this._taskAreaId; }
    set taskAreaId(value) { this._taskAreaId = value; }
}