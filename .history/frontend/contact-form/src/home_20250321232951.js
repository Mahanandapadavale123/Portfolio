import React from 'react'
import "./style/home.css";  // Correct path inside src
import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/'


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


        <div className='flex justify-center mt-5'>
                  <a href='https://github.com/emmaGH1' target='_blank'> 
                   <AiFillGithub className='w-10 h-10 mr-3 cursor-pointer text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary' /> 
                  </a>
                  <a href="https://www.linkedin.com/in/maduakor-emmanuel-5a141b245/" target='_blank'> 
                    <AiFillLinkedin className='w-10 h-10 mr-1 cursor-pointer text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary' />
                  </a>
                </div>
        </div>

        </motion.div>
)
}
 export default Main;
        