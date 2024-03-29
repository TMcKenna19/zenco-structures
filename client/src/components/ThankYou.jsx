import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          navigate("/")
        }, 3000)
      })
    
    return(
        <>
        <div className="thank-you">
          <p>Thank you for your request. A Zenco Representative will contact you shortly</p>
        </div>
        </>
    );
};

export default ThankYou;

