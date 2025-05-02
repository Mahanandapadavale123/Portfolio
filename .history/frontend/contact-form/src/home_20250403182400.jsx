
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";
import "./style/home.css";



<div className="main_left">
   <h3 className="it_is_me">Hey! It's Me</h3>
   <h2 className="names">Mahananda Padavale</h2>
   <p className="i_am_a">I am a&nbsp;<span className="typewriter"></span></p>
   
   <div className="social-buttons">
     <a href="https://drive.google.com/file/d/1j-zLov_Eso5lntQAyAhakCOEVAq98wUC/view?usp=drive_link" 
        target="_blank" className="buttonb" rel="noreferrer">Resume</a>

     {/* LinkedIn Icon */}
     <a href="https://www.linkedin.com/in/your-linkedin-id/" target="_blank" rel="noreferrer">
       <FaLinkedin className="social-icon" />
     </a>

     {/* GitHub Icon */}
     <a href="https://github.com/your-github-id" target="_blank" rel="noreferrer">
       <FaGithub className="social-icon" />
     </a>
   </div>
<div className="main_right">
   <img src="/images/mahananda.png" alt="Mahananda Padavale" className="main_image" />
   </div>
</div>
