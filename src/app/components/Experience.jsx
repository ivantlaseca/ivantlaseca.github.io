// components/Experience.jsx

import { experienceData } from "./Data";

const Experience = () => {
    return (
        <div className="experience-container">
            <h2>Experience</h2>
            <div className="experience-grid">
                {experienceData && experienceData.map((experience) => (
                    <a className="experience-card" key={experience.id}>
                        <h3 className="experience-title">{experience.title}</h3>
                        <ul className="experience-description">
                            {Object.keys(experience.description).map((key) => (
                                <li key={key}>{experience.description[key]}</li>
                            ))}
                        </ul>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Experience;