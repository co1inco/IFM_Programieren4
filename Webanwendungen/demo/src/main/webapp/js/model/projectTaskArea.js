export class ProjectTaskArea {

    /**
     *
     * @param {int} id
     * @param {int} projektId
     * @param {int} aufgabenbereichId
     */
    constructor(id, projectId, taskAreaId) {
        this.id = id;
        this.projectId = projectId;
        this.taskAreaId = taskAreaId;
    }

}