
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
          Hello! I’m Mahananda Padavale, a passionate Computer Science graduate with a strong foundation in JavaScript, Node.js, React, MongoDB, and SQL. I love building web applications and solving real-world problems through technology.
          
🔹 Technical Skills: JavaScript, Node.js, Express, React, MongoDB, SQL, HTML, CSS
🔹 Projects: Developed an Airbnb clone for travel listings & currently building a Zoom clone using the MERN stack
🔹 Interests: Full-stack development, backend architecture, APIs, and cloud technologies</p>
        <div className="about_me_right"></div>
    </div>
    </div>

    </motion.div>
    
  )
}

export default About;
