import React from "react";
import NavBar from "./NavBar";
import { useRef } from "react";
import { Link } from "react-router-dom";
import estimator from "../Images/estimator.jpg";
import extHero from "../Images/extHero.jpg";
import Footer from "./Footer";


const ExtPaint = () => {
return (
    <>  
        <NavBar/>
        <section className="hero">
            <div className="hero-image">
                <img src={extHero} alt="exterior of white house" />
            </div>
            <div className="hero-copy">
                <Link className="link-text" to={'/quote'}><h1>Zenco Exterior Painting</h1>
                <p>Get Your Free Estimate</p></Link>
            </div>
        </section>
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
