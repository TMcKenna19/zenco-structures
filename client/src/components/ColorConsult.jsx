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
        <section class="color-consultation">
            <div class="color-consultation-container">
                <div class="section-heading">
                  <p class="eyebrow">Your Color Consultation</p>
                  <h2>Find the Right Colors for Your Home</h2>
                </div>
                <div class="consultation-layout">
                  <div class="consultation-grid">
                    <article class="consultation-card">
                      <h3>Start With Your Vision</h3>
                      <p>
                        Your home should feel like you. Our experienced color consultants
                        take the time to understand your style, preferences, existing décor,
                        and the atmosphere you want to create.
                      </p>
                    </article>
                    <article class="consultation-card">
                      <h3>Find the Right Palette</h3>
                      <p>
                        We help narrow the possibilities and guide you toward palettes
                        and combinations that complement your home while bringing your
                        vision to life.
                      </p>
                    </article>
                    <article class="consultation-card">
                      <h3>Consider the Whole Space</h3>
                      <p>
                        We consider lighting, room function, architectural details,
                        furnishings, and how colors transition naturally from one space
                        to the next.
                      </p>
                    </article>
                    <article class="consultation-card">
                      <h3>Create a Home That Flows</h3>
                      <p>
                        Our goal is to create a cohesive color story that feels intentional,
                        inviting, and beautifully connected throughout your home.
                      </p>
                    </article>
                  </div>
                  <div class="consultation-image">
                    <img src={consultClient} alt="Interior designer reviewing paint colors in a residential space"/>
                  </div>
                </div>
            </div>
        </section>
        <div className="review-container">
            <div className="review-image">
                <img src={consultDecor} alt="color consutlants working" />
            </div>
            <div className="review-copy">
                <p>"The color consultation team from Zenco Coatings was truly exceptional. They listened attentively to my preferences and offered expert guidance, helping me select a color scheme that beautifully transformed my space. Their attention to detail and creative insights made the entire process a breeze, resulting in an outcome that exceeded my expectations. I couldn't be happier with the results of their expertise."</p>

                <p>- Rockwell, Homeowner</p>
            <Link className="review-estimate-cta" to={'/quote'}> <p>GET YOUR FREE ESTIMATE</p> </Link>
            </div>
        </div>
        
        <Footer/>
    </>    
    )
}

export default ColorConsult;