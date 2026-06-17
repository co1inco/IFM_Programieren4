export class ProjectArtifact {

    /**
     *
     * @param {int} id
     * @param {int} projektId
     * @param {int} artefaktId
     * @param {float} tatsaechlicheArbeitszeit
     */
    constructor(id, projectId, artifactId, actualWorkingTime) {
        this.id = id;
        this.projectId = projectId;
        this.artifactId = artifactId;
        this.actualWorkingTime = actualWorkingTime;
    }

}