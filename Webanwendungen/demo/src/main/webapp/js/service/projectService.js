// import { ProjectArtifact } from "../model/projectArtifact";
// import { Artifact } from "../model/artifact";

export class ProjectService {

    /**
     * Calculate the current run time of a project
     * @param {int} projektId relevant project
     * @param {Artifact[]} artefakte artifacts table
     * @param {ProjectArtifact[]} projektArtefakte project <-> artifacts join table
     * @returns 
     */
    static calculateCurrentProjectDuration(projektId, artefakte, projektArtefakte) {
        return projektArtefakte
            .filter(x => x.projectId === projektId)
            .reduce((a, x) => a + x.actualWorkingTime, 0);
    }

    /**
     * Calculate the estimate total runtime of a project based on the project artifacts
     * @param {int} projektId relevant project
     * @param {Artifact[]} artefakte artifacts table
     * @param {ProjectArtifact[]} projektArtefakte project <-> artifacts join table
     * @returns 
     */
    static calculateProjectDuration(projektId, artefakte, projektArtefakte) {
        return projektArtefakte
            .filter(x => x.projectId === projektId)
            .map(x => artefakte
                .find(a => a.id === x.artifactId)
                ?.plannedWorkingTime ?? 0)
            .reduce((p, a) => p + a, 0);
    }
}