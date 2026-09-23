import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import colorDesign from "../Images/colorDesign.jpeg";
import consultClient from "../Images/consultClient.jpeg";
import bluehouse from "../Images/bluehouse.jpg";
import RefreshCta from "./RefreshCta";
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
        <section className="testimonial-section">
          <div className="testimonial-card">
            <div className="testimonial-image-wrapper">
              <img
                src={bluehouse}
                alt="Freshly painted residential home exterior"
                className="testimonial-image"
              />
              <div className="project-label">
                <strong>Exterior Painting</strong>
                <span>Vince, FL</span>
              </div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-eyebrow">
                What Homeowners Are Saying
              </p>
              <h2>Paint jobs people are happy to come home to.</h2>
              <div
                className="testimonial-stars"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>
              <blockquote>
                “They completely transformed our home. The crew was
                professional, clean and finished right on schedule. Our house
                looks amazing and we’ve already recommended them to friends!”
              </blockquote>
              <div className="testimonial-footer">
                <div className="testimonial-customer">
                  <div>
                    <p className="customer-name">Rockwell M.</p>
                    <p className="customer-details">
                      Exterior Painting <span>•</span> Vince, FL
                    </p>
                  </div>
                </div>
                <Link to={"/reviews"} className="testimonial-button">
                  See More Reviews
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <RefreshCta/>
        <Footer/>
    </>    
    )
}

export default ColorConsult;