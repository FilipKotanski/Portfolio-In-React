import React from "react";

import projects from "../../../projects.json";

import ProjectCard from "../../ProjectCard/ProjectCard";

import "./Projects.css"


function Projects(){

    return(

        <div className="container" id="Projects">

            <div className="row row-cols-1 row-cols-md-2 justify-content-center">

                {projects.map((project, index) => (
                
                                                    <div className="col mb-4" key={index}>

                                                        <ProjectCard 
                
                                                        id={project.id}
                                                        
                                                        title={project.title}
                                                        
                                                        live_app_url={project.live_app_url}
                                                        
                                                        repository_url={project.repository_url}

                                                        image={project.image}

                                                        description={project.description}
                                                        
                                                    />

                                                    </div>
                                                        
                                                        ))}

            </div>                                             

        </div>

    );

}

export default Projects;

