import React, {useState} from "react";

import "./ProjectCard.css";

function ProjectCard(props){

    const publicUrl = import.meta.env.VITE_PUBLIC_URL || '/';

    // State to manage whether the card is flipped or not

    const [isFlipped, setIsFlipped] = useState(false);

    return (
       
                // Wrapper div for the entire card, with an onClick event to toggle flipping

                <div onClick={() => setIsFlipped(!isFlipped)}>
                
                <div className="card border-0 m-3 mx-auto" id="portfolio-card" style={{ width: "75%", display: "block" }}>

                {/* Conditionally render image or description based on isFlipped state */}

                {isFlipped === false ? ( 
                    
                                        <img title="Click me!" alt={props.title} src={`${publicUrl}/Portfolio-In-React/${props.image}`} className="card-img-top img-fluid p-2 rounded-5" />
               
                                    ) 
                                    
                                    : 
                                    
                                    (

                                        <p className="mb-3 p-3 text-center">{props.description}</p>
                    
                                    )}

                <h5 className="card-title mb-3 text-center">{props.title}</h5>

                </div>

                    <a href={props.live_app_url} target="_blank" className="btn btn-primary mx-auto mb-2 px-5" style={{ width: "75%", display: "block" }}>Deployed App</a>
                    
                    <a href={props.repository_url} target="_blank" className="btn btn-primary mx-auto px-5" style={{ width: "75%", display: "block" }}>Repository</a>
                
                </div>
                           
    );

}

export default ProjectCard;


