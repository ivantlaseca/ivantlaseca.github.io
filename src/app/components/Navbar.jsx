// components/Navbar.jsx
// CHECKLIST:
// - Resume link uses "/Ivan Tlaseca Resume.pdf" with a space — this matches the filename as provided.
//   If your actual filename uses underscores or hyphens, update accordingly.
// - The logo text "IT" are Ivan Tlaseca's initials — update if you prefer your full name.
// - Nav links scroll to section IDs. Verify each section has the matching id attribute.

const Navbar = () => {
  return (
    <nav className="nav-container" aria-label="Main navigation">
      <a href="#home" className="nav-logo" aria-label="Go to top">
        IT
      </a>
      <div className="nav-links">
        <a href="#about" className="nav-link">About</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a
          href="/Ivan Tlaseca Resume.pdf"
          className="cta-btn nav-resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
        </a>
      </div>
    </nav>
  );
};

export default Navbar;