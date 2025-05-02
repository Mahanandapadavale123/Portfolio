import React from "react";
import "./App.css";
import About from "./components/About.js";
import { Link as ScrollLink } from 'react-scroll';

// import ContactForm from "./components/ContactForm";

function App() {
  return ( 
    <div className="App">
    
    <div className="App-header">
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
        </div>
      <h1>Welcome To My Portfolio</h1>
      {/* <ContactForm /> */}
    </div>
    <About />

    </div>
  );
}

export default App;
