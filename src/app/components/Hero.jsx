// components/Hero.jsx

import Image from "next/image";

const Hero = () => {

  return (
    <div className="hero-container">
      <Image src='/images/conference_pic.jpeg' className="profile-img" width={300} height={300} x alt="Ivan" />
      <div className="hero-text">
        <h1>Hi, I'm Ivan</h1>
        <p>
          Software Engineer in NYC
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/olawanlejoel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;