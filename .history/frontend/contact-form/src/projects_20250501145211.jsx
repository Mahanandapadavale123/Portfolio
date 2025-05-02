import React from "react";
import { motion } from "framer-motion";
import "./style/projects.css";

function Projects() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="skills" id="project">
                <h1>Projects</h1>
                <div className="skills-container">
                    <div className="skill">
                        <img src="/images/html.webp" alt="HTML" />
                        <span className="span">HTML</span>
                    </div>
                    <div className="skill">
                        <img src="/images/css.webp" alt="CSS" />
                        <span  className="span">CSS</span>
                    </div>
                    <div className="skill">
                        <img src="/images/javascript.webp" alt="JavaScript" />
                        <span className="span">JavaScript</span>
                    </div>
                    <div className="skill">
                        <img src="/images/react.webp" alt="React" />
                        <span className="span">React</span>
                    </div>
                    <div className="skill">
                        <img src="/images/node.webp" alt="Node.js" />
                        <span className="span">Node.js</span>
                    </div>
                    <div className="skill">
                        <img src="/images/java.webp" alt="Java" />
                        <span className="span">Java</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
