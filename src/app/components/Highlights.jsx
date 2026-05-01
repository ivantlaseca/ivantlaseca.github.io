// components/Highlights.jsx
// New section: "Technical Highlights"
// Shows 3 specific, resume-supported accomplishments with more context than a bullet point.
// CHECKLIST:
// - All three entries are drawn from your resume only. No invented metrics.
// - Review the body copy for each highlight — tighten the wording to match your voice.
// - Tags are descriptive, not aspirational. Don't add technologies you didn't use.

import { highlightsData } from "./Data";

const Highlights = () => {
    return (
        <section className="highlights-container" id="highlights">
            <span className="section-label">Technical Highlights</span>
            <h2>Work worth pointing at</h2>
            <div className="highlights-grid">
                {highlightsData &&
                    highlightsData.map((item) => (
                        <div className="highlight-card" key={item.id}>
                            <span className="highlight-label">{item.label}</span>
                            <h3 className="highlight-title">{item.title}</h3>
                            <p className="highlight-body">{item.body}</p>
                            <div className="highlight-tags">
                                {item.tags.map((tag, i) => (
                                    <span className="highlight-tag" key={i}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Highlights;