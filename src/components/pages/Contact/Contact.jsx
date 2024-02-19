import React from "react";

import Form from "../../Form/Form";

import Sidebar from "../../Sidebar/SideBar";

import Footer from "../../Footer/Footer";

import { useMediaQuery } from "react-responsive";

import "./Contact.css";


function Contact(){

    // Check if the screen size is desktop using react-responsive hook

    const isDesktop = useMediaQuery(

        {

        query: '(min-width: 992px)' 
        
        }
    
    );

    // Render different layout based on screen size

    if(isDesktop){

        // Desktop layout    

        return(

                <div className="container-fluid mt-5">

                <div className="row">
                        
                <div className="col-2 shadow" id="social media container">

                <Sidebar />

                </div>   

                <div className="col-10">

                <div className="row justify-content-center text-center">

                <div className="card shadow"  style={{height: "auto"}}>

                <div className="card-body">

                <Form />

                </div>

                </div>            

                </div>

                </div>

                </div>

                </div>
            
        );

    }

    else{

        // Mobile/tablet layout

        return(

            <div className="container-fluid mt-2">

            <div className="row justify-content-center text-center">  

            <div className="col-10 d-flex justify-content-center" style={{width: "100%"}}>

            <div className="card shadow"  style={{height: "auto"}}>

            <div className="card-body">

            <Form />     

            </div>            

            </div>

            </div>

            </div>

            <Footer />

            </div>


        )

    }

}

export default Contact;