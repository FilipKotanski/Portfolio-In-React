import React, { useState } from 'react';

import { useMediaQuery } from "react-responsive";

import './Form.css';

function Form(){

     // Check if the screen size is small using react-responsive hook

    const isSmall = useMediaQuery(

      {

        query: "(min-width: 390px)"

      }
      
      );

    //// Set initial state to manage form data

    const [formData, setFormData] = useState(
      
      {

        firstName: '',

        lastName: '',
        
        message: '',

      }
    
    );

    // Function to handle input change

    const handleInputChange = (event) => {

        // Getting the value and name of the input which triggered the change

        const value = event.target.value;

        const name = event.target.name;
    
        // Updating the input's state

        setFormData(
          
          {

          ...formData,

          [name]: value,

          }
        
        );

      };

    return (

        <>

        {/* Form component */}

        <form className="form" >

            <input

            className="form-control bg-light"

            value={formData.firstName}

            name="firstName"

            onChange={handleInputChange}

            type="text"

            placeholder="First Name"

            required

            />

            <input

            className="form-control bg-light"

            value={formData.lastName}

            name="lastName"

            onChange={handleInputChange}

            type="text"

            placeholder="Last Name"

            required

            />

            <textarea

            className="form-control bg-light"

            value={formData.message}

            name="message"

            onChange={handleInputChange}

            placeholder="Message"

            // Dynamically set the number of rows based on screen size

            rows={isSmall ? "15" : "5"}

            required

            />

            <br />

            <div className="text-center">

            <button type="submit" className="btn btn-primary">Send</button>
           
            </div>

        </form>

        </>

    );

}

export default Form;