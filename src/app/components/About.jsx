// components/About.jsx
// CHECKLIST:
// - Image path '/images/me-smiling.JPG' — confirm this exists in /public/images/.
// - The LinkedIn URL is hardcoded — update if it changes.
// - Body copy is honest and resume-supported. Review before publishing.

import Image from "next/image";

const About = () => {
  return (
    <section className="about-container" id="about">
      <span className="section-label">About</span>
      <div className="flex-about">
        <div className="about-text">
          <h2>Building systems that work. Communicating clearly about them.</h2>
          <p>
            I'm a software engineer with nearly three years of experience building and maintaining
            production systems at Bloomberg LP. My work has spanned full-stack development,
            infrastructure migrations, and internal tooling used by 27,000+ employees globally.
          </p>
          <p>
            I'm bilingual in English and Spanish, and I've led bi-weekly stakeholder presentations,
            mentored students, and coached non-technical leaders — skills I carry into engineering
            contexts where communication and clarity matter as much as the code.
          </p>
          <p>
            I'm looking for roles where I can build things that work, collaborate across teams, and
            contribute beyond just shipping features. Particularly interested in full-stack, forward-deployed,
            and solutions engineering positions.
          </p>
          <div className="about-links">
            {/* FILL HERE: Update LinkedIn URL if needed */}
            <a
              href="https://www.linkedin.com/in/ivantlaseca"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              LinkedIn ↗
            </a>
            {/* FILL HERE: Add GitHub URL if you want it listed here */}
            {/* <a href="https://github.com/[YOUR_HANDLE]" target="_blank" rel="noopener noreferrer" className="about-link">GitHub ↗</a> */}
          </div>
        </div>
        <div className="about-img">
          <Image
            src="/images/me-smiling.JPG"
            className="profile-img"
            width={400}
            height={520}
            alt="Ivan Tlaseca"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default About;