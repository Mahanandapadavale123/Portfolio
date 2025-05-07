
import React from 'react'
import "../style/About.css"; 
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
    <div className="container">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p >
          Hello! I’m Mahananda Padavale, a passionate Computer Science graduate with a strong foundation in JavaScript, Node.js, React, MongoDB, and SQL. 
          I love building web applications and solving real-world problems through technology.<br />
          I am a quick learner and always eager to explore new technologies. I thrive in collaborative environments and enjoy tackling challenges head-on. 
            Let's connect and create something amazing together! 
           Feel free to reach out to me for any opportunities or collaborations. <br />
           <br />
          
🔹 <strong>Technical Skills:</strong> JavaScript, Node.js, Express, React, MongoDB, SQL, HTML, CSS. <br />
🔹<strong> Projects:</strong> Developed an Airbnb clone for travel listings & currently building a Zoom clone using the MERN stack. <br />
🔹<strong> Interests:</strong> Full-stack development, backend architecture, APIs, and cloud technologies
. <br />

</p>
          
          
    </div>
    </div>

    </motion.div>
    
  )
}

export default About;
