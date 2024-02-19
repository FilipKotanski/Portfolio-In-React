import React from "react";

import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import * as bootstrap from 'bootstrap';

import "./Header.css"

function Header(){

        const handleMouseEnter = () => {

            document.querySelector('.navbar-brand img').style.animationPlayState = 'running';

        };
    
        const handleMouseLeave = () => {

            document.querySelector('.navbar-brand img').style.animationPlayState = 'paused';

        };


    return (

                <header>

                    <nav className="navbar navbar-expand-lg bg-gradient" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        
                        <div className="container">
                            
                            <Link className="navbar-brand" to="/">
                            
                            <img src="..\assets\images\snow_leopard.avif" alt="Your Logo" />
                            
                            </Link> 

                            <div className="collapse navbar-collapse" id="navbarNav">
                            
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to="/">Home</Link>
                                    
                                    </li>
                                    
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to="/projects">Projects</Link>
                                    
                                    </li>
                                    
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    
                                    </li>
                                
                                </ul>
                            
                            </div>
                        
                        </div>
                    
                    </nav>
                
                </header>

    )

}

export default Header