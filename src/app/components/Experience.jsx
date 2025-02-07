// components/Experience.jsx

import { experienceData } from "./Data";

const Experience = () => {
    return (
        <div className="experience-container">
            <h2>Experience</h2>
            <div className="experience-grid">
                {experienceData && experienceData.map((experience) => (
                    <a className="experience-card" key={experience.id} href={experience.gitHubLink}>
                        <h3>{experience.title}</h3>
                        <p>{experience.description}</p>
                    </a>
                ))
                }
            </div>
        </div>
    )
}

export default Experience;