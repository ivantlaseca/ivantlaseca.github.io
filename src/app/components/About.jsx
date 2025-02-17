// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I enjoy eating good food, traveling, training in jiu-jitsu, playing soccer, and coding. I like improving on myself—whether it’s through audiobooks, self-help videos, or trying something new.
            I also care about helping historically underserved communities achieve more in life. Some of my go-to books are The Five Levels of Leadership, The 5AM Club, The 80/20 Principle, and Atomic Habits.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/me-smiling.JPG' className="profile-img" width={300} height={500} />
        </div>
      </div>
    </div>
  )
}

export default About;