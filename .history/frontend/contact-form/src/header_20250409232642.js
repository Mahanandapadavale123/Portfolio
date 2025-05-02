import React, { useContext } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { ThemeContext } from "./CreateTheme";
import './App.css';

function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext);
    return (
      <div className="container">
        <div className="header">
 <div className="App-header">
  <div className="left"> 
  <h2 className='title'>Portfolio</h2>

  </div>

       <div className="right">
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className='button'
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutMey"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className='button'
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className='button'
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className='button'
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className='button'
          >
          Contact Me
           </ScrollLink>
          
          <button 
        onClick={toggleTheme} 
        style={{
          display: "flex",
          padding: "10px",
          cursor: "pointer",
          fontSize: "20px",
          background: "none",
          border: "none"
        }}
      >
        {theme === "light" ? "🌙" : "🌞"}
      </button>
        
        </div>
      
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="section">
    <h1>Welcome to My Digital Space! 🚀</h1>

<p>"Hi, I’m Mahananda, a passionate full-stack developer. Explore my projects, skills, and journey!"</p>
</div>
        </div>
      </div>
    );

}

export default Header;
