// components/Hero.jsx
// CHECKLIST:
// - Replace [YOUR ROLE TITLE] if you want something more specific than the current copy.
// - The CTA link points to #contact — verify your Contact section has id="contact".
// - The image path '/images/conference_pic.jpeg' — confirm this file exists in your /public/images/ folder.

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-tag">
        <span>Available for new roles — 2026</span>
      </div>
      <div className="hero-text">
        <h1 className="hero-name">Ivan Tlaseca</h1>
        <p className="hero-subtitle">
          Software Engineer — full-stack systems, internal tooling, and cross-team technical work.
        </p>
        <p className="hero-subtext">
          3 years at Bloomberg LP. Bilingual. Open to full-stack, forward-deployed, and solutions engineering roles.
        </p>
      </div>
      <div className="hero-cta-group">
        <a href="#contact" className="cta-btn">Get in touch</a>
        {/* FILL HERE: Replace href with your actual resume PDF path or link */}
        <a href="/Ivan_Tlaseca_Resume.pdf" className="cta-btn-outline" target="_blank" rel="noopener noreferrer">
          View résumé
        </a>
      </div>
    </section>
  );
};

export default Hero;