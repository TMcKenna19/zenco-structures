import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import colorDesign from "../Images/colorDesign.jpeg";
import consultClient from "../Images/consultClient.jpeg";
import consultDecor from "../Images/consultDecor.jpeg";
import consultVid from "../Images/consultVid.mov";
import Footer from "./Footer";


const ColorConsult = () => {
    return (
    <>
        <NavBar/>
        <section className="hero">
            <div className="hero-image">
                <img src={colorDesign} alt="color design" />
            </div>
            <div className="hero-copy">
                <Link className="link-text" to={'/quote'}><h1>Zenco Color Consultation</h1>
                <p>Get Your Free Estimate</p>
                </Link>
            </div> 
        </section>
        <div className="color-consult-container">
            <div className="color-consult-welcome">
                <h3>Color Consulting</h3>
                <p> The painting process is designed to transform your living space into a beautifully refreshed and inviting environment. Here's what you can expect when you hire Zenco Coatings</p>
                <p>Our skilled consultants collaborate closely with you, taking the time to understand your preferences, the ambiance you wish to create, and the specific elements you want to highlight.
                With their expertise, they will guide you through an array of color palettes and combinations that perfectly match your desired aesthetic.
                </p>
            </div>
            <div className="consult-video">
                <video src={consultVid} autoPlay loop muted type="video/webm" />
            </div>
            <div className="color-consult-content">
            <p>This collaborative process extends beyond color selection, as our consultants consider lighting, room functionality, and the overall flow of your space.Their goal is to create a harmonious color scheme that resonates with your personality and complements your décor.</p>
                <img src={consultClient} alt="color consultant" />
            </div>
        </div> 
        <div className="review-container">
            <div className="review-image">
                <img src={consultDecor} alt="color consutlants working" />
            </div>
            <div className="review-copy">
                <p>"The color consultation team from Zenco Coatings was truly exceptional. They listened attentively to my preferences and offered expert guidance, helping me select a color scheme that beautifully transformed my space. Their attention to detail and creative insights made the entire process a breeze, resulting in an outcome that exceeded my expectations. I couldn't be happier with the results of their expertise."</p>

                <p>- Rockwell, Homeowner</p>
            <Link className="review-estimate-cta" to={'/quote'}> <p>GET A FREE ESTIMATE</p> </Link>
            </div>
        </div>
        
        <Footer/>
    </>    
    )
}

export default ColorConsult;