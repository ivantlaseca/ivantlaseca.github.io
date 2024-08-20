// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a first-generation American and passionate software engineer, I thrive at the intersection of technology,
            exploration, and personal development. My journey from a low-income household to financial freedom in my early 20s
            has fueled my desire to empower others, particularly underprivileged communities, to achieve more in life.
            With a deep love for travel, soccer, and culinary adventures, I’m always on the lookout for new ways to
            blend my technical expertise with my interests in personal growth, cultural experiences, and leadership.
          </p>
          <p>Whether it’s coaching others on breaking into the tech industry or developing as leaders, building software for thousands of clients, or taking
            solo trips to discover new places, I’m driven by a commitment to continuous learning and making a positive
            impact. My work reflects a dedication to not just advancing in my career, but also helping others navigate
            their own paths toward success and fulfillment.</p>
        </div>
        <div className="about-img">
          {/* <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/> */}
        </div>
      </div>
    </div>
  )
}

export default About;