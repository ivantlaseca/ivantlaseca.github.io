// components/Experience.jsx
// CHECKLIST:
// - All data is pulled from experienceData in Data.jsx.
// - Verify the bullet content matches your current resume exactly before committing.
// - The 'location' field is new — make sure Data.jsx includes it for each entry.

import { experienceData } from "./Data";

const Experience = () => {
    return (
        <section className="experience-container" id="experience">
            <span className="section-label">Experience</span>
            <h2>Where I've worked</h2>
            <div className="experience-list">
                {experienceData &&
                    experienceData.map((exp) => (
                        <div className="experience-item" key={exp.id}>
                            <div className="experience-meta">
                                <div className="experience-meta-left">
                                    <h3 className="experience-title">{exp.title}</h3>
                                    <p className="experience-employer">{exp.employer}</p>
                                </div>
                                <div className="experience-meta-right">
                                    <span className="experience-tenure">{exp.tenure}</span>
                                    {exp.location && (
                                        <span className="experience-location">{exp.location}</span>
                                    )}
                                </div>
                            </div>
                            <ul className="experience-description">
                                {Object.values(exp.description).map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Experience;