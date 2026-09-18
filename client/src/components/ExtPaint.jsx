import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import zencoLogo from "../Images/zencoLogo.png";
import instagramIcon from "../Images/instagramIcon.png";
import facebookIcon from "../Images/facebookIcon.png";
import tikTokIcon from "../Images/tikTokIcon.png";
import basilBloom from "../Images/basilBloom.jpeg";
import estimator from "../Images/estimator.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";


const ExtPaint = () => {
return (
    <>  
        <NavBar/>
        <div className="ext-hero">
            <div className="ext-hero-content">
                <Link className="link-text" to={'/quote'}><h1>Zenco Exterior Painting</h1>
                <p>Schedule Your Free Estimate</p></Link>
            </div>
        </div>
        <div className="ext-paint-container">
                <h1> The Zenco Process</h1>
            <div className="ext-paint-content">
                <img src={estimator} alt="" />
                <p>At Zenco, we offer a <b>free</b>, <b>no-obligation</b> estimate to help you plan your painting project with confidence. Our estimator will visit your home to discuss your needs, assess the space, and answer any questions you may have. During this visit, we provide a detailed breakdown of the costs involved and a clear, realistic project timeline tailored to your schedule. This transparent approach ensures you have all the information you need to make the best decision for your home, with no pressure or commitment. We're here to make your painting experience seamless and stress-free from start to finish.</p>
            </div>
        </div>
         <Footer/> 
    </>
    )
}

export default ExtPaint; 
