export class Project {


    /**
     *
     * @param {int} id
     * @param {string} titel
     * @param {string} kurzbeschreibung
     * @param {string} langsbeschreibung
     * @param {string} logoPfad
     * @param {string} hauptveranwortlicher
     * @param {Date} startdatum
     * @param {Date} enddatum
     */
    constructor(id, title, shortDescription, longDescription, logoPath, maintainer, startDate, endDate, min = null, max = null, span = null, projectDuration= null) {
        this._id = id;
        this._title = title;
        this._shortDescription = shortDescription;
        this._longDescription = longDescription;
        this._logoPath = logoPath;
        this._maintainer = maintainer;
        this._startDate = new Date(startDate);
        this._endDate = new Date(endDate);
        this._min = min;
        this._max = max;
        this._span = span;
        this._projectDuration = projectDuration;
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

    get_task_areas(tasks) {
        return tasks.filter(x => x.projectId === this.id);
    }

    get_artifacts(tasks, artifacts) {
        return this.get_task_areas(tasks)
            .flatMap(x => x.get_artifacts(artifacts))
            .filter((v,i,a)=>a.indexOf(v)==i); // distinct
    }

    get endDate() { return this._endDate; }
    set endDate(value) { this._endDate = value; }

    get min() { return this._min; }
    set min(value) { this._min = value; }

    get max() { return this._max; }
    set max(value) { this._max = value; }

    get span() { return this._span; }
    set span(value) { this._span = value; }

    get projectDuration() { return this._projectDuration; }
    set projectDuration(value) { this._projectDuration = value; }
}