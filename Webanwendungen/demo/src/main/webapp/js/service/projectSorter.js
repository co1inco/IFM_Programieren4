
export class ProjectSorter {

    static sortByStartDate(projects) {
        return [...projects].sort(
            (a, b) => a.startDate - b.startDate
        );
    }

    static sortByProjectDuration(projects) {
        return [...projects].sort(
            (a, b) => a.projectDuration - b.projectDuration
        );
    }
}