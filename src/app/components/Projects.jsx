// components/Projects.jsx

import { projectData } from "./Data";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <a href={project.gitHubLink}>
                        <div className="project-card" key={project.id}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;