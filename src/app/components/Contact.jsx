// components/Contact.jsx
// CHECKLIST:
// - Replace the email address if you want to use a different one than ivantlaseca@gmail.com.
// - LinkedIn URL is hardcoded — update if it changes.
// - FILL HERE: Add your GitHub, personal site, or other links as needed.
// - The mailto link is plain — consider a contact form later if you want to avoid email scraping.

const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <span className="section-label">Contact</span>
            <h2>Let's talk</h2>
            <p>
                If you're working on something interesting or want to discuss a role, reach out directly.
                I'm open to conversations about full-stack, forward-deployed, solutions, and customer engineering positions.
            </p>
            <div className="contact-links">
                {/* FILL HERE: Replace with preferred email */}
                <a href="mailto:ivantlaseca@gmail.com" className="contact-link primary">
                    ivantlaseca@gmail.com
                </a>
                <a
                    href="https://www.linkedin.com/in/ivantlaseca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                >
                    LinkedIn ↗
                </a>
                {/* FILL HERE: Uncomment and add GitHub if desired */}
                {/* <a href="https://github.com/[YOUR_HANDLE]" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub ↗</a> */}
            </div>
        </section>
    );
};

export default Contact;