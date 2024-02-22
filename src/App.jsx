import React, { useState } from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HashRouter } from "react-router-dom";

//import Header component with navigation bar

import Header from "./components/Header/Header";

//import required pages

import Home from "./components/pages/Home/Home";

import Projects from "./components/pages/Projects/Projects"; 

import Contact from "./components/pages/Contact/Contact"; 

import NotFound from "./components/pages/NotFound";


//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [count, setCount] = useState(0)

  return (

    <Router basename = "/Portfolio-In-React">

      <Header />

      <Routes>    

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={
                                      
                                        <div className="container">
                                                                                
                                        <Contact />
                                                                               
                                        </div>
                                      
                                        } />

      {/* Render a "Not Found" component for unknown routes */}

        <Route path="*" element={<NotFound />} /> 
     
      </Routes>

    </Router>

  );

}

export default App
