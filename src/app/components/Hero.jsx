// components/Hero.jsx
// CHECKLIST:
// - Verify the resume file is at /public/Ivan Tlaseca Resume.pdf (note the space — matches Navbar link).
// - The CTA points to #contact — confirm your Contact section has id="contact".
// - Hero tag is intentionally not an employment-status message.

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-tag">
        <span>Full-stack systems, developer workflows, and engineering with AI</span>
      </div>
      <div className="hero-text">
        <h1 className="hero-name">Hey, I&apos;m Ivan Tlaseca</h1>
        <p className="hero-subtitle">
          I&apos;m a software engineer who builds full-stack systems, internal tools, and developer workflows, using AI to improve how engineers work.
        </p>
        <p className="hero-subtext">
          Experienced in building production systems at Bloomberg LP. Open to full-stack, forward-deployed, solutions, and customer engineering roles. Bilingual in English and Spanish.
        </p>
      </div>
      <div className="hero-cta-group">
        <a href="#contact" className="cta-btn">Get in touch</a>
        <a href="/Ivan Tlaseca Resume.pdf" className="cta-btn-outline" target="_blank" rel="noopener noreferrer">
          View résumé
        </a>
      </div>
    </section>
  );
};

export default Hero;
