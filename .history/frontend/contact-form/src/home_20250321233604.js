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
      <div className="main_left">
        <h3 className='it_is_me'>Hey! It's Me</h3>
        <h2 className='names'>Mahananda Padavale</h2>
        <p className='i_am_a'>I am a&nbsp;<span class="typewriter"></span></p>
        {/* <button onClick={() => window.open("C:\Users\Nilesh\OneDrive\Documents\Mahananda Resume.pdf", "_blank")} className='buttonb'>Resume</button> */}


        <div className='github_linkedin'>
                  <a href='https://github.com/Mahanandapadavale123' target='_blank'> 
                  </a>
                  <a href="https://www.linkedin.com/in/mahananda-padavale-a87a9b251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BrOgRrBU6TDWEQ3FEcFkDjg%3D%3D" target='_blank'> 
                  </a>
                </div>
        </div>

        </motion.div>
)
}
 export default Main;
        