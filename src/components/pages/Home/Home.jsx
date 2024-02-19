import React from "react";

import "./Home.css";

function Home() {

  return (

    <div className="container">

      <div className="row justify-content-center mt-5">

        <div className="col-md-6 text-center">

          <div className="frame">
                       
            <h2 className="mb-3">HEY, I'M FILIP KOTANSKI</h2>

            <h3 className="mb-3">I build things for the web.</h3>

            <p style={{ fontSize: "20px" }} id="personal-statement">
              
            I'm a front-end developer passionate about crafting exceptional user experiences on the web.
            
            With expertise in HTML, CSS, JavaScript, and modern frameworks like React,
           
            I specialize in building intuitive and interactive functionalities for web applications.
            
            Let's collaborate to bring your ideas to life!
            
            </p>
          
          </div>

        </div>

      </div>

    </div>
    
  );

}

export default Home;