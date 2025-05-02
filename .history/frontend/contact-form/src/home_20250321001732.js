import React from 'react'
import "./style/home.css";  // Correct path inside src
import { motion } from 'framer-motion';

function Main() {
return (
    <motion.div
    variants={{
      hidden:{opacity:0,y:50},
      visible:{opacity:1,y:0}
    }}
    initial="hidden"
    animate="visible"
    transition={{
      duration:0.6, delay:0.2
    }}
    
    className='Main' id="mainy">
      <h1>Welcome to My Digital Space! 🚀"</h1>

<p>"Hi, I’m Mahananda, a passionate full-stack developer. Explore my projects, skills, and journey!"</p>
      <div className="main_left">
        <h3 className='it_is_me'>Hey! It's Me</h3>
        <h2 className='names'>Mahananda Padavale</h2>
        <p className='i_am_a'>I am a&nbsp;<span class="typewriter"></span></p>
        {/* <button onClick={() => window.open("C:\Users\Nilesh\OneDrive\Documents\Mahananda Resume.pdf", "_blank")} className='buttonb'>Resume</button> */}

        </div>

        </motion.div>
)
}
 export default Main;
        