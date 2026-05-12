// components/About.jsx
// CHECKLIST:
// - Image path '/images/me-smiling.JPG' — confirm this exists in /public/images/ (case-sensitive on Linux).
// - LinkedIn URL is hardcoded — update if it changes.
// - Body copy is honest and resume-supported. Review before publishing.

import Image from "next/image";

const About = () => {
  return (
    <section className="about-container" id="about">
      <span className="section-label">About</span>
      <div className="flex-about">
        <div className="about-text">
          <h2>Building practical systems. Making them understandable.</h2>
          <p>
            I'm a software engineer who built and maintained production systems at Bloomberg LP —
            full-stack development, infrastructure migrations, and internal tooling used by 27,000+
            employees globally.
          </p>
          <p>
            I worked across teams to support infrastructure migrations and improve engineering
            workflows. Outside of the technical work, I've mentored students and coached non-technical
            leaders — which shapes how I communicate and collaborate.
          </p>
          <p>
            I'm looking for roles where I can build things that work, contribute across teams, and
            engage directly with the problems my work is solving. Particularly interested in full-stack,
            forward-deployed, solutions, and customer engineering positions.
          </p>
          <div className="about-links">
            <a
              href="https://www.linkedin.com/in/ivantlaseca"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              LinkedIn ↗
            </a>
            {/* FILL HERE: Uncomment and add GitHub handle if desired */}
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