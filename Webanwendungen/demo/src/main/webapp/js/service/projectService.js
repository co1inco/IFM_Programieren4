export class ProjectService {

    static calculateProjectDuration(projectId, artifacts, projectArtifacts) {
        let total = 0;

        for (const projectArtifact of projectArtifacts) {

            if (projectArtifact.projectId === projectId) {

                const artifact = artifacts.find(
                    a => a.id === projectArtifact.artifactId
                );

                if (artifact) {
                    total += artifact.plannedWorkingTime;
                }
            }
        }

        return total;
    }
}