import { ProjectService } from "./ProjectService.js";

export class ProjectSorter {

    static sortByStartDate(projects) {
        return [...projects].sort((a, b) => a.startDate - b.startDate);
    }

    static sortByProjectDuration(projects, artifacts, projectArtifacts) {
        return [...projects].sort((a, b) => {

            const durationA = ProjectService.calculateProjectDuration(a.id, artifacts, projectArtifacts);

            const durationB = ProjectService.calculateProjectDuration(b.id, artifacts, projectArtifacts);

            return durationA - durationB;
        });
    }
}