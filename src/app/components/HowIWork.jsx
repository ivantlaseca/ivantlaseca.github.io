// components/HowIWork.jsx
// New section: "How I Work"
// Signals communication style and team fit — relevant for forward-deployed/solutions roles.
// CHECKLIST:
// - These are positioning statements, not invented claims. Review each for accuracy.
// - Add, remove, or reorder principles to match your actual working style.
// - Keep this section honest — it will come up in interviews.

import { howIWorkData } from "./Data";

const HowIWork = () => {
    return (
        <section className="how-container" id="how-i-work">
            <span className="section-label">How I Work</span>
            <h2>A few working principles</h2>
            <div className="how-grid">
                {howIWorkData &&
                    howIWorkData.map((item) => (
                        <div className="how-card" key={item.id}>
                            <span className="how-number">0{item.id}</span>
                            <h3 className="how-title">{item.title}</h3>
                            <p className="how-body">{item.body}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default HowIWork;