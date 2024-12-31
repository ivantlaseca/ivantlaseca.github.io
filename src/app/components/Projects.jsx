// components/Projects.jsx

import { projectData } from "./Data";

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <a className="project-card" key={project.id} href={project.gitHubLink}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </a>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;