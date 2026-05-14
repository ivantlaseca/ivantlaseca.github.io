// components/Skills.jsx
// CHECKLIST:
// - Only list technologies you are genuinely comfortable being asked about in an interview.
// - C# is added from your resume — remove if you feel less confident with it.
// - "Interpersonal" group is accurate to your resume. Don't inflate it.

const technicalSkills = [
  { id: "cpp", label: "C++" },
  { id: "csharp", label: "C#" },
  { id: "python", label: "Python" },
  { id: "js", label: "JavaScript" },
  { id: "react", label: "React" },
  { id: "node", label: "Node.js" },
  { id: "linux", label: "Linux" },
  { id: "git", label: "Git" },
  { id: "rest", label: "REST APIs" },
  // FILL HERE: Add any additional tools you want listed (e.g., PostgreSQL, Docker, etc.)
];

const interpersonalSkills = [
  { id: "bilingual", label: "Bilingual — EN / ES" },
  { id: "speaking", label: "Public Speaking" },
  { id: "leadership", label: "Leadership Development" },
  { id: "mentoring", label: "Mentoring" },
];

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <span className="section-label">Skills</span>
      <h2>What I work with</h2>
      <div className="skills-group">
        <p className="skills-group-label">Technical</p>
        <div className="skills-chips">
          {technicalSkills.map((skill) => (
            <span className={`skill-chip tech ${skill.id}`} key={skill.id}>
              {skill.label}
            </span>
          ))}
        </div>
      </div>
      <div className="skills-group">
        <p className="skills-group-label">Interpersonal</p>
        <div className="skills-chips">
          {interpersonalSkills.map((skill) => (
            <span className={`skill-chip interpersonal ${skill.id}`} key={skill.id}>
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;