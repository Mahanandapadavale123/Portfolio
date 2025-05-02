import React from 'react'
import "../style/home.css"; // If it's inside a 'styles' folder
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
        </div>

        </motion.div>
)
}
 export default Main;
        