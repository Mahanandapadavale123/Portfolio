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
                        <a href="https://github.com/Mahanandapadavale123/majorproject">Explore Here-</a>

                    </div>
                    <div className="project">
                        <img src="/images/Game.jpg" alt="Game" />
                        <span  className="span">Game</span>
                        <a href="https://github.com/Mahanandapadavale123/Game">Explore Here-</a>
                    </div>
                    <div className="project">
                        <img src="/images/e-commers.webp" alt="e-commers" />
                        <span className="span">E-Commers</span>
                        <a href="https://github.com/Mahanandapadavale123/Game">Explore Here-</a>

                    </div>
                    <div className="project">
                        <img src="/images/ai-interview.webp" alt="ai-interview" />
                        <span className="span">Ai-Interview</span>
                        <a href="https://github.com/Mahanandapadavale123/Game">Explore Here-</a>

                        </div>
                    
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
