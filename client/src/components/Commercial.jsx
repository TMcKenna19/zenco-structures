import React from "react";
import { Link } from "react-router-dom";
import roofCoating from "../Images/roofCoating.mp4";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Commercial = () => {
    return(
        <>
        <NavBar/>
        <div className="commercial-hero">   
        {/* <video src={roofCoating} autoPlay loop muted/> */}
            <div className="comm-services-slogan">
                <div>
                    <p>Unleash Your Business's True Colors with our Painting Expertise.</p>
                </div>
            </div>
        </div>
        
            <Footer/>
        </>
    );
};

export default Commercial;