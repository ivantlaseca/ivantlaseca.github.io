// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I'm a guy who likes to eat delicious foods, travel the world, train jiu-jitsu, play soccer, and, write code--I suppose.
            Beyond my surface-level interests, I also enjoy helping underserved communities achieve more in life. I enjoy learning
            about the world around me as well as about myself. I spend a lot of my time focusing on improving myself either through listening to audiobooks,
            watching self-help YouTube videos, or just doing something out of my comfort zone. Some of my favorite audiobooks include: The Five Levels of Leadership by John C. Maxwell,
            The 5AM Club by Robin Sharma, The 80/20 Principle by Richard Koch, and Atomic Habits by James Clear.
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