import React from 'react';
import "./style/home.css"; // Correct path inside src
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from "react-icons/fa";


function Main() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.6, delay: 0.2
      }}
      
      className="container" id="mainy"
    >
      <div className="main_left">
        <h3 className="it_is_me">Hey! It's Me</h3>
        <h2 className="names">Mahananda Padavale</h2>
        <p className="i_am_a">I am a&nbsp;<span className="typewriter"></span></p>
          {/* LinkedIn Icon */}
          <div className='socials'>
     <a href="https://www.linkedin.com/in/mahananda-padavale-a87a9b251/?trk=opento_sprofile_details" target="_blank" rel="noreferrer">
       <FaLinkedin className="social-icon" />
     </a>

     {/* GitHub Icon */}
     <a href="https://github.com/Mahanandapadavale123" target="_blank" rel="noreferrer">
       <FaGithub className="social-icon" />
     </a>
        {/* Corrected Resume Link */}
        <a href="/https://drive.google.com/file/d/1j-zLov_Eso5lntQAyAhakCOEVAq98wUC/view?usp=drive_link" target="_blank" className="buttonb" rel="noreferrer">Resume</a>
      </div>
      </div>
      <div className="main_right">
        <img src="./img/me2.jpg"  className="main_img" />
        </div>
    </motion.div>
  );
}

export default Main;
