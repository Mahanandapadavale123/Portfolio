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
            <div className="projects" id="all-project">
                <h1>Projects</h1>
                <div className="projects-container">
                    <div className="project">
                        <img src="/images/Airbnb.webp" alt="Airbnb" />
                        <span className="span">Airbnb</span>
                    </div>
                    <div className="project">
                        <img src="/images/Game.webp" alt="Game" />
                        <span  className="span">Game</span>
                    </div>
                    <div className="project">
                        <img src="/images/e-commers.webp" alt="e-commers" />
                        <span className="span">E-Commers</span>
                    </div>
                    <div className="skill">
                        <img src="/images/ai-interview.webp" alt="ai-interview" />
                        <span className="span">AI-Interview</span>
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
