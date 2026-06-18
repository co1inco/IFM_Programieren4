export class ProjectArtifact {

    /**
     *
     * @param {int} id
     * @param {int} projektId
     * @param {int} artefaktId
     * @param {float} tatsaechlicheArbeitszeit
     */
    constructor(id, projectId, artifactId, actualWorkingTime) {
        this._id = id;
        this._projectId = projectId;
        this._artifactId = artifactId;
        this._actualWorkingTime = actualWorkingTime;
    }

    get id() { return this._id; }

    get projectId() { return this._projectId; }
    set projectId(value) { this._projectId = value; }

    get artifactId() { return this._artifactId; }
    set artifactId(value) { this._artifactId = value; }

    get actualWorkingTime() { return this._actualWorkingTime; }
    set actualWorkingTime(value) { this._actualWorkingTime = value; }

}