import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

function SideBar() {

    return (

      <div className="container-fluid" id = "sidebar-icons">

        <div className="row justify-content-center text-center">

          {/* CV */}

          <div className="col-md-12 mt-4" id = "icon-container">

            <a href="https://filipkotanski.github.io/Portfolio-In-React/assets/FilipKotanskiCV.pdf"><FontAwesomeIcon icon={faFilePdf} size="3x" /></a>
          
          </div>

          {/* LinkedIn */}

          <div className="col-md-12 mt-4" id = "icon-container">
            
            <a href="https://www.linkedin.com/in/filip-kotanski-9275252a5/" target="_blank" rel="noopener noreferrer">  
              
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="#0077B5" />
            
            </a>
          
          </div>

          {/* GitHub */}

          <div className="col-md-12 mt-4" id = "icon-container">
            
            <a href="https://github.com/FilipKotanski" target="_blank" rel="noopener noreferrer">
              
              <FontAwesomeIcon icon={faGithub} size="3x" color="#000" />
            
            </a>
          
          </div>
          
          {/* YouTube */}
          
          <div className="col-md-12 mt-4" id = "icon-container">
            
            <a href="https://www.youtube.com/channel/UCP96z3X0SXi8YSEBLgnQdeA" target="_blank" rel="noopener noreferrer">
              
              <FontAwesomeIcon icon={faYoutube} size="3x" color="#FF0000" />
            
            </a>
          
          </div>
          
          {/* Twitter */}
          
          <div className="col-md-12 mt-4" id = "icon-container">
            
            <a href="https://twitter.com/Filip_Kotanski" target="_blank" rel="noopener noreferrer">
              
              <FontAwesomeIcon icon={faTwitter} size="3x" color="#1DA1F2" />
            
            </a>
          
          </div>
          
          {/* Email */}
          
          <div className="col-md-12 mt-4" id = "icon-container">
            
            <a href="mailto:filip.kotanski@gmail.com">
              
              <FontAwesomeIcon icon={faEnvelope} size="3x" color="#000" />
            
            </a>
          
          </div>
        
        </div>
      
      </div>
    
    );
  
}
  
export default SideBar;