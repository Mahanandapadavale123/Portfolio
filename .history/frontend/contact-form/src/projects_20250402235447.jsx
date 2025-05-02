import React from "react";
import { motion } from "framer-motion";

function Projects() {
    
        return (
            <motion.div
            initial={{
             opacity:0,
             y:40
            }} 
            whileInView={
             {
               opacity:1,
               y:0
             }
            }
            
            transition={{
             delay:0.2,
             duration:0.5
            }}
            viewport={{
                margin:"-100px",
              once:true
             }} className="up_gap " id="project">
                <h2 className='heading1 down_gap'>Projects</h2>
                <div className="completely">
                
            <div className="grid" >
                
              {cards.map((card, index) => (
                
                <Card
                  key={index}
                  imageUrl={card.imageUrl}
                  altText={card.altText}
                  title={card.title}
                  description={card.description}
                  explore={card.explore}
                />
              ))}
            </div>
            </div>
            </motion.div>
          )
        }
        

export default Projects;
