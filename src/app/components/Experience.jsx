// components/Experience.jsx

import { experienceData } from "./Data";

const Experience = () => {
    return (
        <div className="experience-container">
            <h2>Experience</h2>
            <div className="experience-grid">
                {experienceData && experienceData.map((experience) => (
                    <a className="experience-card" key={experience.id}>
                        <h3>{experience.title}</h3>
                        <ul>
                            <li>{experience.description.p1}</li>
                            <li>{experience.description.p2}</li>
                            <li>{experience.description.p3}</li>
                        </ul>
                    </a>
                ))
                }
            </div>
        </div>
    )
}

export default Experience;